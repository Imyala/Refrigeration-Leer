/* =========================================================================
   Course content, module 301 — Working safely in the energy sector.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (Jenneson, Harper, Moore, Dand, Jones, Scott — McGraw-Hill Education
   Australia), Chapter 1 — Use routine equipment/plant/technologies in an
   energy sector environment.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const BOOK = "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — ";

  const REFS = [
    BOOK + "Ch 1, use routine equipment/plant/technologies in an energy sector environment",
  ];

  /* Each lesson cites the chapter plus the specific topics it teaches. */
  const R = function () {
    const extra = Array.prototype.slice.call(arguments).map(function (t) { return BOOK + t; });
    return REFS.concat(extra);
  };

  const MODULES = [

  /* ======================================================================
     Module E.1 — Working safely in the energy sector
     ====================================================================== */
  {
    id: "elec-energy-sector",
    stream: "elec",
    title: "E.1 · Working safely in the energy sector",
    blurb: "How the Australian electrotechnology industry is put together, how supply reaches a load, and the electrical, mechanical and documentation practices that keep energy-sector work safe.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "industry-structure",
        title: "The electrotechnology industry and where your job sits in it",
        minutes: 10,
        simple: "Electrotechnology is one big industry with a lot of different jobs in it, from building the power grid to fixing a microwave. Think of it like the building trade: everyone works with the same materials, but a bricklayer, a roofer and a plumber all do different work. Knowing which part you are in tells you which rules, licences and tickets apply to you.",
        refs: R("1.1 the electrotechnology industry and its subsectors"),
        content: `
When people say they "work in electrical", they could mean anything from
climbing a transmission tower in the Latrobe Valley to calibrating a flow
transmitter in a dairy to swapping a compressor in a supermarket coolroom. All
of it sits inside one industry: **electrotechnology** — the generation,
transmission and distribution of electricity, plus the design, installation,
repair and maintenance of electrical and electronic equipment. Hundreds of
thousands of Australians work in it.

Knowing the shape of the industry is not trivia. Which subsector you work in
decides which licence you need, which standards and codes of practice apply to
your job, what your site induction covers, and who is legally allowed to do the
task in front of you.

## The sectors you will hear named

The industry is usually described through the areas of work it covers:
electrical, electrical machines, electronics, instrumentation, refrigeration
and air-conditioning, fire protection, security technology, computers, data
communications, business equipment, appliances, and renewable and sustainable
energy. Those areas fall into two broad camps — the **electrical
industry** and the **electronics industry** — although the line between them is
blurring every year.

## The four electrical subsectors

| Subsector | Typical work | Who does it |
|---|---|---|
| Generation, transmission and distribution | Building and maintaining the grid: power stations, transmission lines, substations, distribution networks | Electrical engineers, network operators, lineworkers, electricians |
| Industrial and mining | Machinery, plant wiring, control circuits, instrumentation, motor and appliance servicing on factory and mine sites | Maintenance and process electricians, instrument technicians, refrigeration mechanics |
| Commercial construction, installation and maintenance | Offices, retail, restaurants, hotels — new work, refurbishment and servicing | Licensed electricians and contractors |
| Domestic construction, installation and maintenance | Houses and units — wiring, lighting, socket-outlets, appliances, hot water | Licensed electricians and contractors |

**Generation, transmission and distribution** has changed enormously over the
last twenty years or so. Assets that were once publicly owned have largely moved
into private hands, and renewable generation has brought a crowd of new
participants — from utility-scale wind and solar farms down to the householder
whose rooftop array exports into the local network. A distribution network that
was designed to push power one way now has to manage power flowing back up the
street.

**Industrial and mining** covers plant wiring, machinery and the control gear
that runs conveyors, smelters, lifts and escalators. It also takes in
**instrumentation** — installing, maintaining and calibrating the instruments
that measure current, flow, temperature, level and position in a process plant.
Refrigeration mechanics sit here too, installing and servicing everything from a
single split system up to industrial refrigeration; in Australia any work that
disturbs a refrigerant charge also requires an **ARCtick** refrigerant handling
licence, separate from any electrical licence.

**Commercial and domestic** work are usually bracketed together, because the
tasks look similar even though the buildings do not: new installation,
refurbishment, servicing and maintenance of wiring, control and protection
equipment, lighting, socket-outlets, motors and appliances.

## The electronics subsectors

The electronics industry deals mostly with lower-power electronic components
rather than heavy apparatus, but crossover is normal — a data technician still
has to pull, terminate and test cable, and licence holders on each side commonly
pick up qualifications on the other.

- **Data and telecommunications** — copper and optical fibre, telephone and data
  systems, network equipment, satellite and microwave gear including towers. The
  NBN rollout reshaped this subsector. Anyone connecting customer cabling to the
  telecommunications network needs the appropriate cabling registration.
- **Radio communications** — broadcast, aviation and marine radio, emergency
  services networks, taxi and UHF/VHF repeater systems.
- **Computer systems** — IT hardware, data hubs, uninterruptible power supplies.
- **Security systems** — CCTV, infrared and motion detection, X-ray scanners.
- **Industrial electronics** — electronic motor control and process integration
  in factories.
- **Commercial electronics** — photocopiers, cash registers and similar office
  and retail equipment.
- **Consumer electronics** — televisions, microwaves and household appliances.

## Getting qualified, and the difference between trained and permitted

The electrical trade in Australia is a four-year apprenticeship, usually
described in four stages of learning. Some people come in through a Certificate
II in Electrotechnology (Career Start) as a pre-apprenticeship. Live testing and
fault finding are taught late — around Stage 3 — for the obvious reason that you
need a lot of background before you put probes on an energised circuit.

There is a distinction here that catches out apprentices and new tradespeople
alike: **being taught a task and being permitted to perform it are not the same
thing.** A licensed electrician with the right endorsement may be authorised to
change a meter; a third-year apprentice may have been shown the same test and
still not be allowed to do it unsupervised. Authorisation comes from your
licence, your employer's procedures and the site's rules — not from your
confidence.

>! Never carry out work on low voltage (above 50 V a.c. or 120 V d.c.) or high
>! voltage apparatus unless you hold the licence for it or are working under the
>! direct supervision your training contract requires. Those voltages are
>! lethal, and "I have seen it done" is not an authorisation.

## What to remember

- Electrotechnology covers generation through to appliance repair; the
  electrical and electronics industries overlap constantly.
- The four electrical subsectors are generation/transmission/distribution,
  industrial and mining, commercial, and domestic.
- Instrumentation, refrigeration and motor servicing sit inside industrial and
  mining.
- Rooftop and utility-scale renewables have made the network two-way, and
  brought many new players into generation.
- Your licence, endorsements and site authorisation decide what you may do —
  training alone does not.
`,
        quiz: [
          {
            q: "A technician calibrates flow and temperature transmitters on a food processing line. Which subsector is that work in?",
            options: [
              "Generation, transmission and distribution",
              "Industrial and mining (instrumentation)",
              "Commercial construction and maintenance",
              "Consumer electronics",
            ],
            answer: 1,
            explain: "Instrumentation — installing, maintaining and calibrating process measuring instruments — is part of the industrial and mining subsector. Commercial work is about buildings such as offices and shops, not process plant.",
          },
          {
            q: "Why is the generation, transmission and distribution subsector described as far more complex than it was twenty years ago?",
            options: [
              "Because transmission voltages have been lowered",
              "Because the network no longer uses transformers",
              "Because assets moved largely from public to private ownership and renewable generators, including rooftop solar, now feed the grid",
              "Because all generation is now located inside cities",
            ],
            answer: 2,
            explain: "Privatisation plus a flood of new renewable entrants — from wind and solar farms down to household rooftop systems exporting into the street — changed both the ownership and the direction of power flow. Transformers and high transmission voltages are still fundamental to the network.",
          },
          {
            q: "A third-year apprentice has been shown how to test for supply at a switchboard. What determines whether they may actually perform that test on site?",
            options: [
              "Whether they feel confident doing it",
              "Their licence status, employer procedures and site authorisation, including the supervision their training contract requires",
              "Whether another apprentice is watching",
              "Whether the meter has fused leads",
            ],
            answer: 1,
            explain: "Being taught a task and being permitted to do it are separate. Authorisation flows from licensing, employer procedure and site rules. Fused leads are essential equipment but they do not grant permission.",
          },
          {
            q: "Which additional licence does an electrician need before disturbing the refrigerant charge in an air-conditioning system?",
            options: [
              "A telecommunications cabling registration",
              "An ARCtick refrigerant handling licence",
              "A high voltage switching authority",
              "No extra licence — an electrical licence covers it",
            ],
            answer: 1,
            explain: "Refrigerant handling in Australia requires an ARCtick licence, which is separate from an electrical licence. Cabling registration applies to connecting customer cabling to the telecommunications network.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "supply-and-subcircuits",
        title: "From the power station to the point of use",
        minutes: 12,
        simple: "Electricity is made a long way from where you use it, so it travels along big lines, gets stepped down at substations, then comes into the building and splits into smaller circuits — a bit like a water main splitting into pipes for the kitchen, bathroom and laundry. Each of those smaller circuits has its own switch and its own fuse or circuit-breaker.",
        refs: R(
          "1.2.1 electrical supply and distribution within a building",
          "1.2.2 arrangement of circuits, submains and final subcircuits"
        ),
        content: `
Every job you do sits somewhere on a chain that starts at a generator and ends
at a lamp, a motor or a socket-outlet. If you can picture that chain, faults
stop being mysterious: you can say where in the chain the problem must be before
you pick up a meter.

## The supply chain

"Electrical supply" simply means the energy source feeding the network that
distributes electricity to buildings and premises. Sources are either
**non-renewable** — most obviously coal-fired power stations — or **renewable**,
such as wind farms, solar farms and hydro turbines. From the generator the chain
runs:

1. **Power station** — generates electricity.
2. **Step-up transformer** — raises the voltage so the same power travels as a
   much smaller current, which is what makes long-distance transmission
   efficient.
3. **Transmission network** — carries the energy across the state.
4. **Substation transformers** — step the voltage back down, though still well
   above anything usable in a house.
5. **Distribution lines and pole or pad transformers** — deliver the final
   step-down to homes and businesses.

The point of all that transforming is loss. Losses in a line depend on the
square of the current, so pushing the same power at a higher voltage — and
therefore a lower current — cuts the heat wasted in the conductors dramatically.

## Before you install anything

Before supply can be connected to a new **installation** (any electrical
equipment installed from an electrical supply), an application for supply or
notice has to go to the local energy distributor. Two standards then govern the
job constantly:

- **AS/NZS 3000 Wiring Rules** — the installation standard. It is what you open
  to settle questions such as the minimum height of a cable run above a
  driveway.
- **AS/NZS 3008** — the standard for selecting cable size and for determining
  and verifying voltage drop.

Manufacturer installation specifications matter too — for example, whether a
particular cable or piece of equipment may be run in direct sunlight.

## How circuits are arranged in a building

A typical domestic installation has at least two lighting circuits and at least
two power circuits, each with several points connected to it. Splitting them is
deliberate: if one lighting circuit trips, the house is not left in total
darkness, and a fault on one circuit does not take out the whole premises.
Larger fixed appliances — hot water systems, stoves and hotplates — normally get
a **dedicated circuit** with its own control and protection.

Circuits originate at a **switchboard**. The one where supply enters is the
**main switchboard (MSB)**; others fed from it are **distribution boards (DBs)**.
Protective devices for each circuit live in those boards.

- **Consumer mains** — the cable from the point of supply to the main
  switchboard.
- **Submains** — circuits connecting one switchboard to another.
- **Final subcircuits** — circuits that supply the end-user equipment: lighting
  points, socket-outlets, the hot water system.

A **maximum demand** calculation is done so the current the property will
actually draw does not exceed what the mains and the supply arrangement can
carry.

## The five parts of a final subcircuit

Every final subcircuit, no matter how simple or complicated, is built from the
same five ingredients:

1. an energy source or supply
2. circuit protection (fuse, circuit-breaker, RCD or RCBO)
3. control devices, such as switches and isolators
4. a conducting path — the cables or wires
5. the load — heater, fan, motor, lamp or appliance

| Part | Common symbols you will meet | What it does |
|---|---|---|
| Supply | a.c. source, d.c. source (battery) | Provides the energy — a battery for d.c., a socket-outlet or switchboard for a.c. |
| Circuit protection | fuse, circuit-breaker | Disconnects the supply quickly to protect the wiring from excessive current |
| Switch | single-pole switch contact | Turns the load on and off |
| Conductors | active/positive, neutral/negative | Carry current between the other components |
| Load | lamp, resistor, motor | Converts the electrical energy into light, heat or movement |

Note what a circuit diagram does and does not tell you. It records the
connections quickly and clearly, and its symbols show a **concept** rather than
the physical object — a switch symbol tells you there is an on-off contact, not
whether it is a rocker, a key switch or a float switch.

Circuits are also described by complexity, in five levels: **simple, series,
parallel, compound and complex**. A lamp fed through a fuse and a switch is a
simple series arrangement: one current path, one load.

## Two examples worth burning into memory

**Example 1 — the protection is too small.** A final subcircuit carries a load
current of 20 A but is protected by a 10 A circuit-breaker. The breaker sees
twice its rating and operates — it *trips* under overload. Annoying, but the
system behaved correctly.

**Example 2 — the protection is too big.** The cable is rated at 20 A and the
protective device is rated at 25 A. Now a sustained 22 A load is above what the
cable can carry but below what will make the device operate. The cable heats,
the insulation softens and melts, and the outcome is an installation fire.

>! Coordination between cable rating and protective device rating is not
>! paperwork — it is the difference between a nuisance trip and a fire in a wall
>! cavity. Never fit a larger protective device to stop nuisance tripping. The
>! device protects the cable, so a bigger device means an unprotected cable.

## On the job

- Know which board a circuit originates from before you start work — MSB, DB, or
  a submain feeding it.
- Lighting and power are split into multiple circuits on purpose; keep it that
  way when you add points.
- Dedicated circuits belong to fixed high-current appliances such as stoves and
  hot water systems.
- Cable size comes from AS/NZS 3008; installation practice comes from AS/NZS
  3000; the manufacturer's specification sits on top of both.
- If a circuit-breaker keeps tripping, the answer is to find the load or the
  fault, never to fit a bigger breaker.
`,
        quiz: [
          {
            q: "A cable is rated 20 A and someone fits a 25 A circuit-breaker to stop nuisance tripping. What is the danger?",
            options: [
              "The breaker will trip too early and cause unnecessary outages",
              "A sustained load above 20 A will overheat the cable without operating the breaker, risking insulation failure and fire",
              "The voltage at the load will rise above 230 V",
              "Nothing — the cable is protected because the breaker is larger",
            ],
            answer: 1,
            explain: "The protective device exists to protect the cable. Oversizing it opens a window where the cable is overloaded but the device never sees enough current to operate — the classic cause of an installation fire. Oversizing does not affect supply voltage.",
          },
          {
            q: "Which term describes a circuit that connects the main switchboard to a distribution board?",
            options: ["Final subcircuit", "Consumer mains", "Submain", "Dedicated circuit"],
            answer: 2,
            explain: "Submains run between switchboards. Consumer mains run from the point of supply to the main switchboard, and final subcircuits supply the end-user equipment itself.",
          },
          {
            q: "Why is the voltage stepped up before electricity enters the transmission network?",
            options: [
              "Because generators can only produce high voltage",
              "Because higher voltage carries the same power at lower current, and line losses depend on the square of the current",
              "Because transformers only work in one direction",
              "To make the electricity safe to touch",
            ],
            answer: 1,
            explain: "Power loss in a conductor rises with the square of current, so moving the same power at a higher voltage and lower current cuts heating losses hugely. Nothing about higher voltage makes a line safer to approach — quite the opposite.",
          },
          {
            q: "Which standard would you open to determine and verify the voltage drop of a selected cable?",
            options: ["AS/NZS 3000", "AS/NZS 3008", "AS/NZS 4836", "AS 1102"],
            answer: 1,
            explain: "AS/NZS 3008 covers cable selection and voltage drop. AS/NZS 3000 is the Wiring Rules — installation requirements such as clearances and protection — and AS/NZS 4836 covers safe working on low voltage installations.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "circuit-protection",
        title: "Protecting circuits: fuses, MCBs, RCDs and RCBOs",
        minutes: 11,
        simple: "Every circuit has a device that cuts the power when something goes wrong. Some watch for too much current, which would cook the cable; others watch for current leaking out through a person and cut off in a fraction of a second. It is like having both a pressure relief valve and a leak detector on a water system — they solve different problems.",
        refs: R(
          "1.2.3 protection to meet safety requirements: MCBs, RCDs, RCBOs and HRC fuses",
          "AS/NZS 3000 Wiring Rules — protection against overcurrent and earth leakage"
        ),
        content: `
Circuit protection exists to protect three things: **people, livestock and
property**. Get it right and a fault becomes an inconvenience; get it wrong and
the same fault becomes an electrocution or a fire. Every component, device and
length of wiring in an installation has to be protected, which is why circuit
design, load selection and cable protection are treated as safety decisions
rather than commercial ones.

## The devices and what each one actually watches

| Device | What it senses | What it protects against |
|---|---|---|
| HRC fuse (high rupturing capacity) | Current through a fusible element | Overload and very high fault current; still common in commercial and industrial equipment |
| MCB (miniature circuit-breaker) | Current — thermally for overload, magnetically for short-circuit | Overload and short-circuit damage to cables and equipment |
| RCD (residual current device) | Imbalance between active and neutral current | Earth leakage — current flowing to earth, typically through a person |
| RCBO | Both of the above in one module | Overcurrent and earth leakage on the same circuit |

An **RCBO** is exactly what its name says: a residual current device and a
circuit-breaker in one body, giving overcurrent protection and earth leakage
protection to a single circuit. New domestic and commercial installations
increasingly use RCBOs so that one faulty appliance takes out only its own
circuit instead of every circuit sharing an RCD.

An MCB and an RCD are not interchangeable. An MCB protects the **cable**; an RCD
protects the **person**. A 20 A circuit-breaker will sit there happily while
30 mA flows through your chest to earth, because 30 mA is nothing to a device
looking for 20 A. Conversely, an RCD does not care how much current the toaster
draws as long as everything that goes out on the active comes back on the
neutral.

>! An RCD only detects current leaving the circuit — usually to earth. If a
>! person becomes part of the circuit between active and neutral, the currents
>! stay balanced and the RCD will not operate. A safety switch is a last line of
>! defence, never a substitute for proving the circuit dead and isolating it.

## Where protection sits in the circuit

Protective devices go at the **start** of the circuit path — between the power
source and the on-off switch. This is true in an installation and inside
equipment: the fuse in an appliance sits ahead of its power switch, not
downstream of it. Putting it there means the protected length of conductor
starts at the device, and operating the device removes the hazard from the whole
circuit rather than half of it.

A light switch in a lighting circuit is the **control** device, not protection.
It exists to give on-off control of the load. Mixing up control and protection
is a classic beginner's error — turning a switch off does not make a circuit
safe to work on, because the switch may break only the active in one place while
the rest of the circuit stays live.

## Ratings: current, voltage, wattage and kA

Components, devices and accessories carry a specified voltage, current or
wattage rating, and often a combination. Exceed the rating and the item fails.

- Fuses, switches and accessories are rated in **amps**.
- Lamps and resistors are usually rated in **volts and watts**.
- Extension leads, power boards, toasters and motors carry a current rating in
  amps and a power rating in watts or kilowatts.

For circuit-breakers there is a second number that beginners often miss: the
**kA rating**, or breaking capacity. The current rating (say 20 A) is about
protecting the cable under overload. The kA rating is about whether the device
can safely interrupt a bolted short-circuit, a transient voltage spike, an
external fault or the effects of a lightning strike without disintegrating. A
6 kA device can interrupt prospective fault currents up to 6000 A; a 10 kA
device up to 10 000 A.

What decides the fault level? Chiefly the impedance between the supply
transformer and the installation — essentially how far away the transformer is
and how much resistance the connecting cable has. An installation right next to
a large distribution substation can see a very high prospective fault current,
so it needs devices with a higher breaking capacity than a property at the end
of a long rural line.

## Field practice

Protective devices are not fit-and-forget items:

- Test RCDs before relying on them. Safety switches do fail, and a failed RCD
  looks exactly like a working one from the outside.
- Plug portable equipment and corded power tools into an RCD-protected supply,
  and use the test button as part of your pre-use check.
- Never defeat a device by wedging, bridging or replacing it with a larger one.
  A fuse replaced with a bolt or a nail is a fire waiting for an excuse.
- If a device operates, treat that as information. Find out what caused it
  before resetting. A breaker that trips the instant you reset it is telling you
  there is still a fault on the circuit.
- Match the device to the job: overcurrent protection for the cable, residual
  current protection for the people.

>! Resetting a tripped protective device without investigating is a genuine
>! hazard. The device operated because something drew far more current than the
>! circuit was designed for — repeated resetting can weld contacts, damage the
>! device and leave a fault energised.

## What to remember

- Protection exists for people, livestock and property, in that order of
  seriousness.
- MCBs and fuses protect cables from overcurrent; RCDs protect people from earth
  leakage; RCBOs do both for one circuit.
- Protective devices are installed at the beginning of the circuit, ahead of the
  control switch.
- Current rating protects the cable; kA rating decides whether the device can
  safely clear a short-circuit.
- Prospective fault current depends largely on distance from the supply
  transformer and the resistance of the cable in between.
`,
        quiz: [
          {
            q: "A 20 A MCB protects a socket-outlet circuit. A person touches a faulty appliance and 40 mA flows through them to earth. What happens?",
            options: [
              "The MCB trips immediately because 40 mA is a fault current",
              "The MCB does not operate — 40 mA is far below its rating; only an RCD senses that leakage",
              "The MCB trips after about five minutes",
              "The MCB trips only if the appliance is double insulated",
            ],
            answer: 1,
            explain: "An MCB sees nothing unusual at 40 mA when it is rated 20 A. Detecting the imbalance caused by current leaving through a person is exactly what an RCD is built for, which is why both types of protection are needed.",
          },
          {
            q: "What does the kA rating of a circuit-breaker describe?",
            options: [
              "The continuous load current it can carry",
              "The prospective short-circuit current it can safely interrupt",
              "The leakage current at which it operates",
              "The maximum supply voltage it may be connected to",
            ],
            answer: 1,
            explain: "The kA rating is breaking capacity — a 6 kA device can clear a fault current up to 6000 A. Continuous current is the amp rating, and leakage current thresholds belong to RCDs.",
          },
          {
            q: "Where is the protective device located in a circuit, and why?",
            options: [
              "After the load, so the load is energised first",
              "Between the power source and the on-off switch, so operating it removes the hazard from the whole circuit",
              "Immediately before the load only, so control is unaffected",
              "Anywhere convenient, as position makes no difference",
            ],
            answer: 1,
            explain: "Protection sits at the start of the circuit path, ahead of control. That way the whole conducting path downstream is protected. Fitting it near the load would leave the run between source and load unprotected.",
          },
          {
            q: "Two identical houses have identical loads, but one sits beside a distribution substation and the other is at the end of a long rural line. What differs for protection selection?",
            options: [
              "The current rating of the breakers must be higher near the substation",
              "The prospective fault current is higher near the substation, so a higher kA breaking capacity may be required",
              "The rural house needs RCDs and the urban house does not",
              "Nothing differs — protection depends only on load",
            ],
            answer: 1,
            explain: "Fault level depends on the impedance back to the supply transformer. Close to a substation there is less cable resistance, so a much larger fault current is available and the device must be able to break it. Load current rating and the need for RCD protection are unchanged.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "ac-and-dc",
        title: "Alternating current, direct current and reading a waveform",
        minutes: 10,
        simple: "Direct current pushes one way all the time, like water from a tank. Alternating current swaps direction back and forth fifty times a second, like a saw being pushed and pulled — the work still gets done. Because a.c. keeps changing, we quote an average-effort number for it called RMS, which is the value that heats a element the same as steady d.c.",
        refs: R(
          "1.2.4 the difference between alternating current and direct current",
          "sinusoidal waveform values: peak, RMS and average"
        ),
        content: `
Electricity turns up in two forms and you will use both on the same job. **Direct
current (d.c.)** is a flow of charge in one direction only. **Alternating current
(a.c.)** is a flow whose direction reverses periodically. Nearly everything in
the supply and distribution network is a.c.; nearly everything portable in your
tool bag runs on d.c.

## Why the network is a.c.

Alternating current is generated when a loop conductor or coil rotates inside a
uniform magnetic field. The reason it dominates power systems is not tradition:
a.c. can be transformed. Self- and mutual inductance only do useful work when
the current is changing, so transformers — the devices that make efficient
transmission possible — need a.c. Alternating current also drives most types of
electric motor, from a bathroom exhaust fan to a mine ventilation fan.

Direct current comes from batteries, fuel cells and solar cells. A solar array
produces d.c., which an inverter converts into a.c. for the switchboard and the
grid. In the field, d.c. supplies torches, laptops, phones, battery tools,
control circuits and instrumentation loops.

## What the waveform values mean

Plot a.c. against time and you get a repeating **sine wave** cycling through
positive peaks and negative troughs. Plot ideal d.c. and you get a flat, steady
line. Several numbers are quoted about that sine wave, and mixing them up leads
to real mistakes:

| Value | Meaning | For a sine wave |
|---|---|---|
| Instantaneous | The value at one single moment in time | Anything between plus and minus peak |
| Peak (Vmax) | The highest value reached in the cycle | 1.0 (reference) |
| RMS (root-mean-square) | The d.c. equivalent value — the steady d.c. that would do the same heating work | 0.707 x peak |
| Average | The mean of one half cycle | 0.637 x peak |

The RMS value is the one that matters in practice, because it is the value that
lines up with d.c. for doing work. When we say the supply is 230 V, we mean
230 V RMS.

**Worked example — how high does 230 V actually go?**

Peak = RMS ÷ 0.707, or equivalently RMS x 1.414

Peak = 230 V x 1.414 = **325 V**

So a nominal 230 V a.c. supply swings to about +325 V and about -325 V every
cycle. Insulation, capacitor voltage ratings and clearances have to cope with
the peak, not the RMS number printed on the label.

>! A "230 volt" supply reaches roughly 325 V twice per cycle. Never assume the
>! nameplate figure is the worst case when choosing components, and never treat
>! a d.c. bus or capacitor as harmless because the a.c. label reads 230 V.

## Frequency

One complete positive-and-negative excursion is one **cycle**. Frequency is the
number of cycles completed in one second, measured in **hertz (Hz)**. Australian
supply and distribution is maintained at **50 Hz** — fifty cycles per second.
That single figure drives motor speeds, transformer design and the timing of
protection equipment, which is why plant imported from a 60 Hz country needs
checking before it is connected here.

## True-RMS meters and why they matter

Cheap multimeters do not actually measure RMS. They measure the average value
and scale the reading by a fixed factor that is only correct for a clean sine
wave. On a distorted waveform — the output of a variable speed drive, a dimmer,
a switch-mode supply, an LED driver — that assumption collapses and the meter
can read badly low or high. A **true-RMS** meter computes the real heating-
equivalent value and stays honest on distorted waveforms. In modern buildings,
full of electronic loads, true-RMS is not a luxury.

## Conventional current and electron flow

There are two ways of describing the direction of flow, and both are still in
use:

- **Conventional current** — from positive to negative. It was adopted before
  electrons were discovered, and it remains the convention used in circuit
  theory, diagrams and standards.
- **Electron flow** — from negative to positive. This describes what the charge
  carriers in a metal actually do, and is often used in electronics teaching.

The physics does not change; only the arrow does. Pick the convention your
drawing uses and stay with it, because mixing the two mid-analysis is how people
talk themselves into wrong answers about polarity.

## 230 V or 240 V?

You will see both numbers. Many appliances, power boards and older nameplates
are still marked 240 V. For calculation purposes in Australia, unless a job tells
you otherwise, the nominal single-phase value used is **230 V** in line with
AS/NZS 3000. Do not treat the difference as an error on the equipment — it is
simply the legacy of a change in the nominal declared voltage.

## What to remember

- a.c. reverses direction periodically; d.c. flows one way.
- Australian supply is 50 Hz, nominally 230 V RMS single-phase.
- RMS is the d.c.-equivalent value; peak is 1.414 times RMS for a sine wave.
- Use a true-RMS meter wherever electronic loads distort the waveform.
- Solar panels and batteries are d.c. sources; an inverter makes the a.c.
- Conventional current runs positive to negative; electron flow is the opposite.
`,
        quiz: [
          {
            q: "A nominal 230 V a.c. supply feeds a capacitor. What peak voltage must the capacitor's rating cope with?",
            options: ["230 V", "About 163 V", "About 325 V", "About 460 V"],
            answer: 2,
            explain: "Peak equals RMS x 1.414, so 230 x 1.414 is about 325 V. Selecting a component rated only for the RMS figure means it sees roughly 40 per cent more voltage than it was chosen for, twice every cycle.",
          },
          {
            q: "Why can a low-cost average-responding multimeter give a wrong a.c. reading on the output of a variable speed drive?",
            options: [
              "Because it measures d.c. only",
              "Because it measures the average value and scales it by a factor that is only correct for an undistorted sine wave",
              "Because drives produce d.c. and not a.c.",
              "Because the frequency is 50 Hz rather than 60 Hz",
            ],
            answer: 1,
            explain: "Average-responding meters assume a clean sine wave and apply a fixed conversion factor. Drive outputs are heavily distorted, so the assumption fails and the displayed value is wrong. A true-RMS meter calculates the heating-equivalent value directly.",
          },
          {
            q: "What does the RMS value of an a.c. waveform represent?",
            options: [
              "The highest instantaneous value reached",
              "The mean of one half cycle",
              "The steady d.c. value that would produce the same heating effect",
              "The value measured at the zero crossing",
            ],
            answer: 2,
            explain: "RMS is the d.c. equivalent — it is defined so that a.c. and d.c. of the same RMS value do the same work in a resistance. The highest instantaneous value is the peak, and the mean of a half cycle is the average value (0.637 of peak).",
          },
          {
            q: "Which statement about frequency in Australia is correct?",
            options: [
              "The supply is 50 Hz, meaning the waveform completes 50 cycles each second",
              "The supply is 50 Hz, meaning it reverses direction 50 times a minute",
              "Frequency is only relevant to d.c. circuits",
              "Frequency is the peak value of the waveform",
            ],
            answer: 0,
            explain: "Frequency counts complete cycles per second, and Australian supply is maintained at 50 Hz. d.c. has no frequency, and the peak is a magnitude, not a rate.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "calculations-and-meters",
        title: "Working the numbers and reading them off a meter safely",
        minutes: 13,
        simple: "Four quantities describe any circuit: voltage, current, resistance and power. If you know two, you can work out the others with simple arithmetic. Measuring them is where the danger sits — a meter set to the wrong thing, or leads in the wrong holes, can turn a routine check into a short circuit or a shock.",
        refs: R(
          "1.2.5 calculation and measurement of voltage, current, resistance and power in practical circuits",
          "safe use of multimeters and test instruments"
        ),
        content: `
An electrician's most valuable tool is the ability to work out what a circuit
will do before it is switched on. Four quantities describe a practical circuit,
and the handy acronym is **VIRP**: voltage (V), current (I), resistance (R) and
power (P). Know any two and you can find the rest.

## Ohm's Law

Ohm's Law says the current between two points in a circuit is directly
proportional to the potential difference between them and inversely proportional
to the resistance between them:

I = V ÷ R

Apply a potential difference to a resistance and current flows. An a.c. source
produces alternating current in that load; a d.c. source produces direct
current. The law does not care which.

**Worked example — a lamp on a car battery.**
A 12 V battery supplies a lamp of 6 ohms resistance.

I = V ÷ R = 12 ÷ 6 = **2 A**

## Power and energy

Power is the rate of doing work, and in a simple circuit:

P = V x I

**Worked example — the rating of a power board.**
Domestic power boards in Australia are rated at a maximum of 10 A. Taking a
supply voltage of 240 V as marked on the board:

P = V x I = 240 x 10 = **2400 W**

So a standard power board can supply about 2.4 kW in total — no matter how many
sockets it has. Note that although boards and appliances are often still marked
240 V, calculations for installations normally use the nominal **230 V** of
AS/NZS 3000 unless you are told otherwise.

**Worked example — will the board cope?**
Plug a 2000 W kettle, an 800 W toaster and a 100 W lamp into one board on a
230 V supply. Total power adds:

P total = 2000 + 800 + 100 = 2900 W

I total = P ÷ V = 2900 ÷ 230 = **12.6 A**

That is above the board's 10 A rating. The socket-outlet circuit-breaker may
never see anything wrong — the circuit could be rated 20 A — but the board, its
flexible cord and its plug are all being asked to carry 26 per cent more current
than they were designed for. This is precisely how power boards start fires.
Currents add the same way powers do:

- P total = P1 + P2 + P3 + P4 (kW)
- I total = I1 + I2 + I3 + I4 (A)

**Worked example — energy consumption.**
Power used over time is **energy consumption**, measured in kilowatt hours
(kWh). A 1.8 kW heater runs 5 hours a day for 90 days of winter:

Hours = 5 x 90 = 450 h
Energy = 1.8 kW x 450 h = **810 kWh**

At a tariff of, say, 30 cents per kWh, that is about 243 dollars of electricity
for one heater in one season — the number that makes sustainability arguments
land with a client.

## Measuring: where each meter goes

- An **ammeter** goes **in series** with the load, so all the load current
  passes through it.
- A **voltmeter** goes **in parallel** with the component, so it reads the
  potential difference across it.

In a simple or series circuit there is only one current path, and the current is
the same in every component. A parallel circuit has multiple paths, called
**branches**, and the branch currents add up to the supply current.

!FIG[ladder-rung]

That figure is worth studying, because it shows the single most useful piece of
voltmeter behaviour in fault finding: across a **closed** contact you read
almost zero volts, and across the **open** one you read the full supply. Walk a
series string with a voltmeter and the open device announces itself.

## Using a multimeter without getting hurt

Taking measurements without damaging components, causing short-circuits or
copping burns and shock takes specific knowledge and skill, which is why live
testing is taught late in an apprenticeship — around **Stage 3** of the four
stages — and always under strict supervision.

Two things must be right before every measurement:

1. **The leads are in the correct terminals.** Current inputs and voltage inputs
   are different sockets. Better meters illuminate the correct terminals for the
   selected mode and sound an alarm when the leads are in the wrong holes.
2. **The mode and range are correct.** One probe position can serve several
   functions — a.c. and d.c. voltage on one setting group; diode check,
   continuity, resistance and capacitance on another — with a function button
   toggling between them.

Consider a licensed electrician with a metering endorsement replacing a meter.
She sets the multimeter to test for supply, gets distracted, and returns having
left the instrument on the resistance or continuity setting. She takes a reading
across live terminals: the display shows a meaningless value, the meter input
may be damaged, and if she reads that as "no supply" she may then treat a live
installation as dead. Distraction, not ignorance, is what caused it.

>! Never trust an instrument you have not proved. Use the dead-live-dead method:
>! prove the tester on a known live source or proving unit, test the circuit,
>! then prove the tester again. A meter that failed silently mid-test looks
>! exactly like a dead circuit.

>! An ammeter connected across a voltage source is a dead short. At best it
>! blows the meter fuse or trips the breaker; at worst it produces an arc flash
>! in a switchboard. Before touching probes to anything, look at where the leads
>! are plugged in.

The three safety considerations that govern live testing are always the same:
**personal safety** (are you protected, insulated, standing clear, and is
someone with you), **instrument suitability** (correct category rating for the
installation, fused leads, undamaged insulation, correct mode) and **circuit and
equipment integrity** (will your connection stress, damage or short the circuit).
Use a meter with a category rating suitable for where you are working — at least
CAT III for switchboard work — with fused leads and shrouded probes.

## What to remember

- VIRP: know any two of voltage, current, resistance and power and you can get
  the rest.
- I = V ÷ R and P = V x I cover most trade calculations at this level.
- Powers add, currents add; a 10 A power board is a 10 A power board regardless
  of socket count.
- Ammeters go in series, voltmeters in parallel.
- Prove your tester before and after, and check the leads and mode every single
  time.
`,
        quiz: [
          {
            q: "A 2400 W kettle and a 1000 W heater are plugged into one 10 A power board on a 230 V supply. What is the total current, and is that acceptable?",
            options: [
              "About 8.3 A — acceptable",
              "About 14.8 A — the board, its cord and its plug are overloaded",
              "About 3.4 A — acceptable",
              "About 34 A — but the circuit-breaker will always trip first",
            ],
            answer: 1,
            explain: "Total power is 3400 W, so I = 3400 ÷ 230 = 14.8 A, well over the board's 10 A rating. The circuit-breaker protecting a 20 A socket circuit will not see anything wrong, which is exactly why overloaded power boards, not switchboards, are the ones that catch fire.",
          },
          {
            q: "A 1.8 kW heater runs 5 hours a day for 90 days. What is the energy consumption?",
            options: ["450 kWh", "810 kWh", "1620 kWh", "9 kWh"],
            answer: 1,
            explain: "Hours = 5 x 90 = 450 h, and energy = 1.8 kW x 450 h = 810 kWh. Picking 450 confuses hours with kilowatt hours; energy is power multiplied by time.",
          },
          {
            q: "You are fault finding a series control string with a voltmeter. Across one device you read the full supply voltage and across the rest you read close to zero. What does that tell you?",
            options: [
              "The device reading full voltage is the open one, and it is breaking the circuit",
              "The devices reading zero volts are all faulty",
              "The supply voltage is too high",
              "The voltmeter is connected in series and the readings are meaningless",
            ],
            answer: 0,
            explain: "A closed contact drops almost no voltage, so the full supply appears across whatever is open. The zero-volt readings prove those contacts are closed and healthy — the opposite of faulty.",
          },
          {
            q: "Why is proving a test instrument before and after a test (dead-live-dead) essential?",
            options: [
              "To calibrate the meter to the exact supply voltage",
              "Because a meter that has failed, has a blown fuse or is on the wrong setting will show no reading — indistinguishable from a genuinely dead circuit",
              "Because the standard requires two readings for record keeping",
              "To discharge any capacitance in the circuit",
            ],
            answer: 1,
            explain: "The failure mode that kills people is a silent one: an instrument that reads zero because it is broken, not because the circuit is dead. Proving on a known live source or proving unit either side of the test removes that ambiguity. It is not a calibration or a discharge procedure.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "magnetism-and-transformers",
        title: "Magnetism, electromagnetism and transformers in the field",
        minutes: 12,
        simple: "Current flowing in a wire makes a magnetic field around it, and that field can pull things, push things or make voltage appear in a nearby coil. Almost every switching and voltage-changing device you meet — contactors, relays, safety switches, transformers — is that one idea packaged different ways.",
        refs: R(
          "1.2.6 applications of magnetism and electromagnetic induction",
          "1.2.7 transformer operating principles and their application"
        ),
        content: `
Magnetism explains far more of your working day than it first appears: how a
contactor pulls in, how a circuit-breaker blows its contacts apart in
milliseconds, how a safety switch senses leakage, and how 500 000 volts on a
transmission line becomes 230 V at a socket-outlet.

## What magnetism actually is

Think of a ferromagnetic material — iron, cobalt or nickel — as being made of
tiny regions called **domains**, each one a small magnet. In an unmagnetised
piece of steel the domains point in random directions and cancel out. Bring a
magnet or an electromagnet near, and the domains swing into line: the material
becomes magnetised. That process is **magnetic induction**.

A magnetised piece has a **North** and a **South** pole — a **dipole** — and a
field of force, also called **magnetic flux**, radiating outside it. By
convention the lines of force are drawn leaving the North pole and returning to
the South. Where two fields meet, unlike poles attract and like poles repel, and
that force can be used to make things move.

## Electromagnetism

Pass a current through a conductor or coil and a magnetic field appears around
it. The relationship is direct: more current, stronger field; less current, a
weaker field; no current, and the field collapses.

That controllability is the whole point. A permanent magnet cannot be switched
off, but an electromagnet can be switched on and off at will, and its strength
can be varied by changing the current or the number of turns.

Applications built on **attraction**:

- **Reed switches** in door and window security contacts.
- **Relays and contactors** — a coil pulls an armature in and the contacts
  change state, letting a small control current switch a large load current.
- **Solenoid valves and actuators** — the same pull applied to a plunger.

An application built on **repulsion**: the magnetic trip of a **miniature
circuit-breaker**. Coils wound around the breaker contacts carry the circuit
current. Under a short-circuit the current is enormous, so the fields are
enormous, and the two opposing fields push the contacts violently apart —
"blowing" them open in milliseconds, far faster than any thermal element could
react. That is why an MCB has two distinct trip characteristics: a slow thermal
response for overload and a near-instant magnetic response for short-circuit.

Residual current devices, relays and contactors all rely on the same
electromagnetic principles. So does an unwanted effect: **electromagnetic
interference**. Variable speed drives switch current very rapidly, radiating
interference into nearby cabling, which is why VSD installations need cables
specifically designed and screened to deal with it.

## Transformers

A transformer is an a.c. electromagnetic device with **no moving parts**, working
on the principle of **mutual induction**. Two windings share a laminated iron
core:

- The **primary** — the input winding, connected to the supply.
- The **secondary** — the output winding or windings, connected to the load.
  Multi-tap transformers have several outputs.

Energise the primary with a.c. and the constantly changing current magnetises
and demagnetises the core fifty times a second at 50 Hz. Electrical energy
becomes magnetic energy in the core, and the changing flux in the core induces a
voltage in the secondary — magnetic energy back to electrical energy. Because
the induced voltage depends on the number of turns, the secondary voltage can be
**higher, lower or the same** as the primary.

>! A transformer needs a changing flux to work. That is why it will not transform
>! steady d.c., and it is also why an energised transformer with an open
>! secondary is still a live device. Never assume "no load, no danger".

## Transformers in the supply system

The whole grid is a sequence of transformations:

1. The power station — coal, wind, solar, hydro or another source — generates.
2. A step-up transformer raises the voltage for transmission. Higher voltage
   means lower current for the same power, and since heating loss depends on the
   square of the current, halving the current quarters the loss. That is the
   single reason transmission runs at extremely high voltage.
3. Substation transformers step the voltage down, though still far above what a
   building can use.
4. Distribution lines carry it to neighbourhood distribution and pole
   transformers, which step it down again for homes and businesses.

Inside installations, special-purpose step-down instrument transformers work at
or near the main switchboard so that metering and protection equipment can
monitor supply safely:

- **Current transformers (CTs)** monitor the current in each supply phase.
- **Potential (voltage) transformers (PTs)** monitor the voltage.

>! Never open-circuit the secondary of an energised current transformer. With no
>! burden connected, a dangerously high voltage can appear across its terminals.
>! Short the secondary before disconnecting a CT circuit.

Ordinary step-down transformers turn up everywhere else: laptop supplies,
architectural and downlight circuits in homes, shops and offices, and industrial
and electronic equipment where 240 V a.c. is reduced to 24 V, 12 V or 5 V for
machinery control and printed circuit boards.

## A hazard hiding in old plant

Transformers in older installations may contain **PCBs (polychlorinated
biphenyls)** in their insulating oil. These chemicals are a genuine health
hazard, associated with skin rashes, chemical-induced acne and liver cancer.

>! Treat any old oil-filled transformer or capacitor as potentially containing
>! PCBs. Do not cut, drain, dismantle or dispose of it yourself, and do not touch
>! leaking oil. Report it, isolate the area, and let the licensed process handle
>! removal and disposal.

## What to remember

- Current makes a magnetic field; the field is controllable, which is what makes
  electromagnets useful.
- Attraction gives you relays, contactors, reed switches and solenoids;
  repulsion gives an MCB its instantaneous magnetic trip.
- A transformer works on mutual induction, has no moving parts and needs a.c.
- Transmission voltage is raised to reduce current, because losses go with the
  square of the current.
- CTs and PTs let meters and protection see the supply safely — never
  open-circuit a live CT secondary.
- Old transformer and capacitor oil may contain PCBs; report it, do not handle it.
`,
        quiz: [
          {
            q: "How does a miniature circuit-breaker clear a short-circuit in milliseconds?",
            options: [
              "A bimetal strip bends as it heats and releases the latch",
              "Coils carrying the huge fault current produce opposing magnetic fields that repel and blow the contacts apart",
              "An RCD inside it senses the imbalance",
              "The arc melts a fusible link",
            ],
            answer: 1,
            explain: "The magnetic trip uses repulsion: fault current produces powerful opposing fields that force the contacts open almost instantly. The bimetal thermal element is the slow path, used for sustained overload, not for a bolted short-circuit.",
          },
          {
            q: "Which statement correctly describes a transformer?",
            options: [
              "It has a rotating armature and works on self-induction",
              "It works on mutual induction, has no moving parts, and requires an alternating supply",
              "It steps voltage down only, never up",
              "It works equally well on steady d.c. and a.c.",
            ],
            answer: 1,
            explain: "Mutual induction between primary and secondary through a shared core, with no moving parts, is exactly what a transformer is. It needs changing flux, so steady d.c. does nothing, and depending on turns ratio it can step voltage up, down, or leave it unchanged.",
          },
          {
            q: "Why is a current transformer secondary never left open-circuited while energised?",
            options: [
              "Because the primary current would drop to zero",
              "Because a dangerously high voltage can appear across the open secondary terminals",
              "Because the core would demagnetise permanently",
              "Because the meter would read low",
            ],
            answer: 1,
            explain: "With no burden to develop the current into, the CT drives the core hard and a hazardous voltage appears at its terminals. Shorting the secondary before disconnecting is standard practice. The primary current is set by the load and is unaffected.",
          },
          {
            q: "You find an old oil-filled transformer weeping oil in a plant room. What is the correct response?",
            options: [
              "Wipe up the oil with rags and continue work",
              "Drain the remaining oil into a drum for disposal",
              "Assume it may contain PCBs, avoid contact, restrict access and report it for licensed handling",
              "Ignore it — transformer oil is only a slip hazard",
            ],
            answer: 2,
            explain: "PCBs in older transformer and capacitor oil are linked to skin conditions and liver cancer, so contact and unlicensed disposal are both unacceptable. Restricting access and reporting hands the job to the process designed for it.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "shock-and-isolation",
        title: "Electric shock, isolation and the early signs of a fault",
        minutes: 13,
        simple: "It is the current through the body, not the voltage on the label, that hurts you — and it takes surprisingly little. Switching a machine off is not the same as making it safe: you have to isolate it, lock it, tag it and prove it dead, and remember that electricity is only one of several kinds of stored energy waiting inside a machine.",
        refs: R(
          "1.2.8 hazards associated with electrical systems and apparatus",
          "electric shock, isolate-lockout-tagout and safe working with electricity",
          "AS/NZS 3000:2018 clause 1.4.128 — extra-low, low and high voltage definitions"
        ),
        content: `
An electric shock is electrical energy disrupting the function of living tissue.
Two things decide how bad it is: how much current passes through the body, and
what path it takes. Voltage matters only because it is what drives current
through your body's resistance — and that resistance falls dramatically when
your skin is wet, sweaty or broken.

## How much current does what

| Current through the body | Effect |
|---|---|
| Around 10 mA | Muscle pain and shaking; grip muscles contract, so a person may be unable to let go |
| 10 mA to 30 mA | Severe muscular contraction, pain and stress on internal organs |
| Above 30 mA | Risk of ventricular fibrillation — the heart quivers instead of pumping |
| Above 100 mA | Tissue, muscle and organs burnt, torn or strained; hospitalisation, unconsciousness or death |

Read those figures again with a sense of scale. Thirty milliamps is
three-hundredths of an amp — far less than a single LED downlight draws. It is no
accident that general-purpose RCDs in Australia are set at 30 mA: the threshold
was chosen around the onset of fibrillation risk.

Path matters as much as magnitude. Current from one hand to the other, or from
hand to opposite foot, crosses the chest and the heart. Working one-handed, with
the other hand out of contact and in your pocket, keeps current out of that path
when it can be kept out at all.

>! A shock that lets you go is not proof you were lucky enough to be safe. Any
>! electric shock warrants medical assessment, because the heart can develop an
>! abnormal rhythm hours later. Report every shock — including "just a tingle"
>! from a metal frame or a tap — because a tingle usually means a real earthing
>! or leakage fault waiting for someone less fortunate.

## Voltage bands and who may work

AS/NZS 3000:2018 (clause 1.4.128) defines the bands. In simple terms:

- **Extra-low voltage** — not exceeding 50 V a.c. or 120 V d.c.
- **Low voltage** — above extra-low, up to and including 1000 V a.c. or 1500 V
  d.c.
- **High voltage** — above 1000 V a.c. or 1500 V d.c.

Work on low or high voltage circuits and equipment may only be carried out by a
licensed electrician or an otherwise suitably qualified and authorised person.
"Low voltage" is a deceptive name — the 230 V at every socket-outlet in the
country sits in that band and kills people every year.

## Switching off is not isolating

Operators are trained in the start-up and shut-down procedures for their plant,
usually written as **standard (or safe) operating procedures — SOPs**. Those
procedures make a machine stop. They do not make it safe to work on.

Making it safe means **isolate, lock out, tag out — ILOTO**:

1. **Identify** every energy source feeding the plant, not just the obvious one.
2. **Isolate** at the correct isolation point.
3. **Lock** the isolator with your own personal lock so it cannot be re-energised.
4. **Tag** it with a danger tag identifying you and the work.
5. **Prove dead** with a tester you have proved live before and after.
6. **Discharge or restrain** any stored energy that remains.

## Electricity is not the only stored energy

An ILOTO on the switchboard de-energises the electrical supply — and leaves
plenty of other ways to be injured. Energy sources to identify and control
include:

- Batteries and capacitor banks, which hold charge after isolation
- Fuels
- Heat — hot surfaces, hot process fluid
- Fluids or gases under pressure: water, compressed air, steam, hydraulic oil
- Stored mechanical energy such as compressed or extended springs
- Gravity — a suspended load, a raised platform, a counterweight
- Solar panels, which produce voltage whenever daylight falls on them and cannot
  be switched off at the panel
- Radiation, on some industrial plant

>! A photovoltaic array is live during daylight no matter what you do at the
>! inverter or the switchboard. Isolating the a.c. side does not de-energise the
>! d.c. side. Treat PV strings and their d.c. cabling as live at all times unless
>! covered and proved dead.

## Spotting a fault before it becomes an incident

You do not need a licence or years of experience to notice the early warning
signs of an electrical fault — just attention:

- A **burning smell**, which may mean overloading or an appliance or plug heating
  up
- **Discolouration**, brown patches or blackening around plugs, socket-outlets or
  cables
- Evidence of **melting**, or sparks when a plug is inserted or removed
- **Fraying, cuts, damage or exposed conductors** on plugs and appliance leads

Simple habits stop faults developing in the first place:

- Never daisy-chain extension leads together.
- Avoid multi-way block adaptors and double adaptors, and never plug one into an
  extension board.
- Do not treat extension leads and power boards as a long-term wiring solution —
  if a location permanently needs power, it needs an outlet installed.

## Working safely with electricity, in practice

| Situation | Practice |
|---|---|
| Portable equipment | Prefer battery tools over corded where possible; check tools before and after use per the SOP; plug into an RCD and test the RCD, since safety switches do fail; switch off before inserting or removing a plug |
| Extension leads and power boards | Do not overload; use a single length rather than joined leads; unwind cable reels fully so they cannot overheat; choose boards with individually switched outlets and overload protection; use a dedicated wall socket where you can |
| Trip hazards | Keep leads out of walkways, never drag equipment out by its cord, and do not create extension cord chains |
| Water | Keep it dry — equipment, leads, your hands and your gloves. Replace gloves that get wet |
| Corded tools and welding gear | Inspect before and after use; tag and remove faulty items from service for repair; use RCD-protected supply; keep others clear of the work area and run leads safely |
| Keeping your distance | Do not enter unauthorised areas or cabinets — if it is locked, it is locked for a reason; check what is behind a wall or under the ground before you drill or dig; look up and live near powerlines and network assets |

A cable reel deserves its own note. Left coiled, the turns act like a coil and
the heat cannot escape; a reel run at full load while still wound can reach a
temperature that melts its own insulation. Unwind it fully, every time.

## On the job

- Current kills, not the label voltage. Above 30 mA there is fibrillation risk.
- Only licensed or suitably qualified people work on low or high voltage.
- Shut-down is an operating procedure; ILOTO is a safety procedure. They are not
  interchangeable.
- Identify every energy source, including capacitors, stored pressure, gravity
  and solar.
- Burning smells, browning, sparks and damaged leads are early warnings — act on
  them.
- Report every shock, however small it felt.
`,
        quiz: [
          {
            q: "Why are general-purpose RCDs in Australia rated at 30 mA?",
            options: [
              "Because 30 mA is the smallest current a device can detect",
              "Because the risk of ventricular fibrillation begins above roughly 30 mA",
              "Because most appliances leak about 30 mA normally",
              "Because 30 mA is 30 per cent of the circuit rating",
            ],
            answer: 1,
            explain: "The threshold is set around the onset of fibrillation risk, so the device disconnects before the current can stop the heart pumping effectively. Healthy appliances leak far less than 30 mA, and the figure has nothing to do with circuit rating.",
          },
          {
            q: "A machine has been shut down using its standard operating procedure. Is it safe to open the panel and work on it?",
            options: [
              "Yes — shutting down removes the supply",
              "No — shut-down is an operating procedure; the equipment must be isolated, locked, tagged and proved dead, and other stored energy controlled",
              "Yes, provided the operator watches the start button",
              "Only if the machine is under 1000 V",
            ],
            answer: 1,
            explain: "A shut-down sequence stops the plant; it does not prevent re-energising and does not address stored energy. ILOTO plus proving dead is the safety procedure, and it applies at low voltage just as much as high voltage.",
          },
          {
            q: "The a.c. supply to a rooftop solar system has been isolated and locked off at the switchboard on a sunny afternoon. What is still hazardous?",
            options: [
              "Nothing — isolating the a.c. de-energises the whole system",
              "Only the inverter's internal fan",
              "The d.c. side: the panels and their string cabling remain live while daylight falls on them",
              "Only the earthing conductor",
            ],
            answer: 2,
            explain: "Photovoltaic modules generate whenever light hits them and cannot be switched off at the panel. Isolating the a.c. side does nothing to the d.c. strings, which is why PV d.c. cabling is treated as live at all times unless covered and proved dead.",
          },
          {
            q: "A power board's socket shows brown discolouration and a faint burning smell is noticed nearby. What does this indicate?",
            options: [
              "Normal ageing of the plastic — no action needed",
              "An early sign of an electrical fault such as overloading or a loose, heating connection; the item should be removed from service",
              "That the RCD needs replacing",
              "That the supply voltage is too low",
            ],
            answer: 1,
            explain: "Browning, blackening and burning smells are classic early fault indicators, usually from overload or a high-resistance connection generating heat. Removing the item from service and having it inspected prevents the fire that follows. Low supply voltage does not cause local heating like this.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "tools-plant-guarding",
        title: "Tools, plant and the mechanical hazards around electrical work",
        minutes: 12,
        simple: "Most of the things that hurt tradespeople around machinery are not electrical at all: spinning parts that grab clothing, blades, flying sparks and heavy loads. Guards and interlocks are the real protection; gloves and glasses are the last, thinnest layer. Fixing a machine often means the guards come off, which is exactly when the danger peaks.",
        refs: R(
          "1.2.8 non-electrical hazards associated with electrical systems, equipment and apparatus",
          "1.3.2 energy sector tools, equipment and technology",
          "1.3.4 operating instructions for tools, equipment and technologies"
        ),
        content: `
Electrical workers spend their days around machinery, and a large share of the
injuries in the trade have nothing to do with current. Knowing your way around
tools, plant and guarding is as much part of the job as knowing Ohm's Law.

## The vocabulary

- A **tool** is an instrument or simple piece of equipment used to perform a
  particular task.
- A **hand tool** is worked without a motor or other energy source: screwdrivers,
  pliers, knives, snips, saws and cutters, files, bench vices, clamps and
  striking tools such as hammers.
- **Power tools** are corded (electric) or battery powered: drill/impact drivers,
  hammer and rotary drills, hand and bench grinders, drill presses.
- **Plant and equipment** is a much broader legal term. It takes in machinery,
  appliances, containers, implements, tools, PPE, ladders, lifts, cranes,
  conveyors, forklifts, vehicles, mobile plant, power tools, and also computers,
  test instruments and multimeters.

That last point surprises people: your multimeter is plant, so it falls under the
same duty to be inspected, maintained and used according to instructions as a
forklift does.

## Standard operating procedures and pre-use checks

**Operating instructions** covers the start-up and shut-down procedures written
as SOPs, along with manufacturer guidelines, instructions and specifications and
industry codes of practice. SOPs are often written as an observation checklist —
what to inspect for damage before use, how to operate safely, what to do after
use.

A workable corded-drill checklist looks like this:

1. Inspect the plug, lead and cord grip for cuts, fraying, exposed conductors or
   heat damage.
2. Check the current test tag is in date and the body and guards are undamaged.
3. Confirm the chuck key is removed and the bit is sharp and correctly tightened.
4. Plug into an RCD-protected supply and test the RCD.
5. Check the trigger and any lock-off works and the tool runs without unusual
   noise, smell or vibration.
6. After use: inspect again, clean, coil the lead properly, and tag out anything
   damaged so it goes for repair, not back in the ute.

Once a work task is complete, every tool, instrument and item used has to be
inspected for damage, cleaned and packed up. That is not tidiness for its own
sake — it is how the next person finds serviceable gear.

## The mechanical hazards

Injuries around plant come from a recognisable list:

| Hazard | How it happens | Typical source |
|---|---|---|
| Entanglement | Loose clothing, gloves, long hair or a lead is caught by a rotating part | Shafts, drills, lathes, augers |
| Nip point / drawing-in | A body part is drawn into the gap formed by counter-rotating parts, or between a rotating and a fixed part | Belts and pulleys, chains and sprockets, conveyor rollers |
| Cutting and severing | Contact with a blade or abrasive surface | Circular saws, band saws, angle grinders |
| Friction and abrasion | Contact with a fast-moving surface | Belt sanders, grinding wheels |
| Shearing and amputation | A moving part passes a fixed one | Guillotines, press tools |
| Crushing and trapping | A body part is caught between two surfaces | Clamps, presses, mobile plant |
| Impact and flying objects | Fragments thrown from a wheel or workpiece | Grinding wheels, drill presses, drills |

Process and industrial electricians meet these constantly around belts, pulleys,
chains, sprockets and rollers. Technicians working on office equipment such as
photocopiers meet the same hazards in miniature — a smaller nip point still takes
a finger.

## Controls, in order of effectiveness

Not every control is worth the same. The higher up this list you work, the less
you rely on people behaving perfectly:

1. **Eliminate** the hazard — do the task a way that removes it entirely.
2. **Substitute** with something less hazardous.
3. **Isolate** — separate people from the hazard, physically or by distance.
4. **Engineering controls** — guards, covers, interlocks, light curtains,
   two-hand controls. The chapter is explicit that these are more effective than
   the layers below.
5. **Administrative controls** — signage, SOPs, training, permits, exclusion
   zones.
6. **PPE** — safety glasses, hearing protection (earmuffs or plugs), gloves,
   protective clothing, safety footwear.

PPE is last because it does nothing to the hazard; it only tries to soften the
consequence, and only if it is worn correctly, fits, and has not perished.

## A worked example: the guillotine

A paper-cutting guillotine shows several controls working together. It has fixed
guards, two-handed push button controls, a foot pedal and a photoelectric light
curtain.

Electrically, the two push buttons and the foot pedal use **normally open (NO)**
contacts: pressing them closes the contacts and completes the circuit that lets
the machine operate. The light curtain uses **normally closed (NC)** contacts:
while the beams are unbroken the contacts stay closed, and the moment a hand or
arm breaks a beam the contacts open and break the operating circuit.

Look at what that combination forces the operator to do. Both hands are occupied
on the buttons, so they are demonstrably clear of the clamp and blade. The foot
pedal must be pressed while standing, so the operator cannot be leaning into the
machine. Anything that does enter the danger zone breaks the light curtain and
stops the cycle. Without those controls, the realistic injuries are crushing by
the clamp and amputation by the blade.

Note the safety logic in the wiring: the device that must **prevent** operation is
wired normally closed, so that a broken wire, a failed sensor or a lost supply
also stops the machine. Fail-safe design assumes things break.

>! Guards and interlocks are provided for normal operation. During fault finding,
>! testing and maintenance mode, guards come off and interlocks get bypassed, and
>! the machine can then run fully exposed. This is when severe injuries happen.
>! Only trained and specifically authorised people may work in that mode, under a
>! documented procedure, and the machine goes back together before it goes back
>! into service.

>! Never wear gloves, loose sleeves, a lanyard or a wristwatch near a rotating
>! spindle, drill or lathe. A glove that touches a turning bit takes the hand
>! with it faster than you can react.

## On the job

- Your multimeter is plant too — inspect, maintain and use it to instruction.
- Run the pre-use and post-use checks; tag and remove damaged gear from service.
- Learn to spot nip points: any two counter-rotating parts, or a rotating part
  against a fixed one.
- Engineering controls beat procedures, and procedures beat PPE — but wear the
  PPE anyway.
- Safety devices are wired to fail safe; never defeat a normally closed safety
  contact to keep production running.
- Clean up, inspect and pack away at the end of every task.
`,
        quiz: [
          {
            q: "A machine's light curtain uses normally closed contacts rather than normally open. Why?",
            options: [
              "To reduce the current drawn by the sensor",
              "So that a broken wire, failed sensor or lost supply also stops the machine — the circuit fails safe",
              "Because normally closed contacts are cheaper",
              "So the machine can run while the beam is broken",
            ],
            answer: 1,
            explain: "Safety devices are wired so that any failure produces the safe state. With NC contacts, breaking the beam and breaking a wire both open the operating circuit. NO contacts would let a fault go undetected until someone was hurt.",
          },
          {
            q: "Which control is the most effective way of preventing contact with a conveyor's nip points?",
            options: [
              "A sign warning of the hazard",
              "Toolbox talks and training on the risk",
              "A fixed physical guard over the nip point",
              "Issuing all workers with gloves",
            ],
            answer: 2,
            explain: "Engineering controls such as guards physically prevent access and do not rely on a person remembering. Signage and training are administrative controls, and gloves are PPE — the lowest levels, which only reduce the chance or severity if everything else has already failed. Gloves near rotating parts are themselves a hazard.",
          },
          {
            q: "When is the risk from a guarded machine at its highest?",
            options: [
              "During normal production with all guards fitted",
              "During maintenance or test mode, when guards are removed and interlocks bypassed",
              "When the machine is isolated and locked out",
              "When the machine is idle but energised with guards fitted",
            ],
            answer: 1,
            explain: "Guards and interlocks are designed for normal operation. Maintenance mode deliberately defeats them so the machine can run exposed, which is why only trained, authorised people may do it under a documented procedure. A properly isolated and locked machine is the safest state of all.",
          },
          {
            q: "Under the definition used in the chapter, which of these is NOT classed as plant and equipment?",
            options: ["A multimeter", "A ladder", "A forklift", "All three are classed as plant and equipment"],
            answer: 3,
            explain: "Plant and equipment is deliberately broad: machinery, ladders, lifts, cranes, vehicles, mobile plant, power tools, PPE, computers, test instruments and multimeters all fall inside it, and all carry duties to inspect, maintain and use according to instructions.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "whs-documentation-sustainability",
        title: "WHS duties, workplace documentation and sustainable practice",
        minutes: 13,
        simple: "Safe work is not just being careful — it is a system of rules, written procedures, records and training cards that everyone follows. On top of that sits a duty to waste as little as possible and dispose of what is left properly. Think of it as the paperwork and habits that let a stranger walk onto your job and understand exactly how it is being done safely.",
        refs: R(
          "1.3.1 workplace documentation and activities",
          "1.3.3 energy sector industry standards and codes of practice",
          "1.3.5 sustainable work practices and 1.3.6 workplace policies, procedures and instructions"
        ),
        content: `
Every electrotechnology worker has to meet the **work health and safety (WHS)**
requirements — called **occupational health and safety (OHS)** in Victoria — that
apply to the environment they are working in. In practice that means:

- applying risk control measures
- observing workplace procedures and instructions
- following sustainable energy principles and practices
- keeping the worksite clean and tidy
- checking and maintaining tools and equipment
- keeping correct records
- following workplace documentation

Underneath sits **duty of care**. The business or undertaking you work for must
provide a safe workplace, safe plant and systems of work, information, training,
supervision and consultation. You in turn must take reasonable care for your own
health and safety and for anyone affected by what you do, cooperate with the
procedures your workplace has put in place, and not misuse anything provided for
safety. Both duties are legal duties, not goodwill.

## Workplace documentation

Documentation is how a workplace communicates its expectations consistently:

| Document | What it gives you |
|---|---|
| Workplace procedures | The agreed way a task is done here |
| Regulations | Legally enforceable requirements |
| Codes of practice | Practical guidance on how to meet a legal duty |
| Industry standards | The technical requirement, such as AS/NZS 3000 |
| Equipment specifications | Ratings, limits and installation conditions |
| Operation and manufacturer manuals | How the specific item is started, run and maintained |
| Work records and reports on work activities | What was done, when, by whom and what was found |

Documentation also includes job safety assessments and risk-mitigation
processes. Apprentices, trainees and workers are given this material so that work
is performed safely, on time, to a quality standard and with minimum waste.

Three related terms are easy to blur:

- **Work instructions** — the direct, general or broad directions given to an
  apprentice, under supervision, as guidance for performing a work activity.
- **Work activities** — the tasks themselves: sweeping and cleaning the work
  area, collecting tools and materials, stripping cable, drilling, cutting and
  fabricating.
- **Safe work practices** — how those activities are performed safely: following
  instructions and SOPs for using and maintaining tools correctly, using correct
  lifting, carrying and manual handling technique, and wearing the right PPE
  (safety glasses, earmuffs or plugs, protective clothing, boots and gloves).

## Inductions, tickets and permits

Before performing work tasks, you attend a **site induction** — mandatory on
every site, covering that site's operational requirements, hazards and emergency
arrangements. Beyond that, workers commonly need:

- The **White Card** (general construction induction card) for construction work
- **First aid and CPR** training
- **Working at heights** and **elevated work platform (EWP)** training
- **Confined space** entry training
- **Asbestos awareness** training
- **Isolate, lockout, tagout** training

In some jurisdictions this training is a prerequisite for gaining work licences
and permits. Note again the distinction between capability and permission: a
first-year apprentice may complete heights and EWP training and be allowed to
work at heights and operate the EWP, while only the licensed tradespeople on the
same crew are authorised to isolate and re-energise electrical equipment and
supply.

>! Asbestos is still present in Australian buildings constructed or refurbished
>! before 2004 — in eaves, wall sheeting, backing boards behind switchboards and
>! electrical meter panels. Drilling or cutting it releases fibres you cannot see
>! and cannot undo. If you suspect asbestos, stop, leave it undisturbed and
>! report it. Awareness training tells you when to stop, not how to remove it.

## Standards versus codes of practice

Both are described as safe work practice, but they are not the same thing:

- A **standard** is a written document setting out how a process should be
  carried out. AS/NZS 3000:2018 is the obvious example.
- A **code of practice** is practical guidance on specific work situations and
  activities, written to help you meet the legal duties in work health and safety
  law. Codes state relevant industry standards and set out requirements for
  training, instruction, supervision and risk management.

Codes relevant to the energy sector include manual handling regulations, the
confined spaces code of practice, demolition compliance codes, the model code on
managing the risk of falls at workplaces, a code covering the construction and
operation of solar farms, electrical safety codes for works, safeguarding of
machinery and plant, and the model code on managing risks of plant in the
workplace.

## Sustainable work practice

Sustainability in the trade is mostly unglamorous: recycle, reuse and minimise
waste; use resources efficiently and preserve them. Switching lights off in
daylight, or fitting daylight and occupancy sensors so they switch themselves,
conserves energy. Correct disposal of waste products and materials — cable
offcuts, packaging, lamps, batteries, refrigerant, oil — protects the
environment.

The usual framing is the **three pillars of sustainability**:

- **Environmental** — reduce waste, emissions and contamination.
- **Social** — safe, fair, healthy work and a positive effect on the community.
- **Economic** — work that remains viable, with materials and labour not wasted.

The economic pillar becomes concrete on a rough-in. Pull 500 mm more cable than
you need at each socket-outlet in an apartment complex, and by the end of the job
the accumulated offcuts can add up to the value of an entire drum of cable — paid
for, carried up the stairs, and thrown in a bin. Measure the run, allow a
sensible tail, and the waste disappears.

## Workplace behaviour policies

Safe work environments need policies and procedures to deal with unwanted
workplace behaviour. These are backed by legislation designed to protect everyone
from **bullying, harassment and discrimination** and to support **equal
employment opportunity (EEO)**. A crew where an apprentice is afraid to say "I
have not been shown this" or "I think that is unsafe" is not a safe crew, whatever
its incident statistics say.

## Competency: knowledge, skills and attitude

Work competency has long been described as the intersection of knowledge, skills
and attitude. Instruction, on- and off-the-job training and experience supply the
knowledge and skills — including knowing what the tasks are and *why* they are
done. **Work attitude** is how you apply yourself: work ethic, employability
skills, adapting to the workplace culture, meeting WHS legislative requirements
and following organisational policies and procedures.

Finally, note what **performing work** actually includes: preparing to work,
doing the work, cleaning up afterwards, and completing the job documentation.
Using a corded tool means inspecting it before and after use, following the safe
operating procedure, and completing the paperwork. Technical staff working on
plant need to know how the asset operates, its start-up and shut-down procedures
and its maintenance-mode functions — which is why equipment-specific training is
provided to operators and technicians.

## What to remember

- WHS/OHS duties run both ways: the business provides safe systems, you take
  reasonable care and follow them.
- Standards say how a process should be done; codes of practice give practical
  guidance on meeting a legal duty.
- Site inductions are mandatory, and tickets such as White Card, CPR, heights,
  EWP, confined space and asbestos awareness are commonly prerequisites.
- Trained is not the same as authorised.
- Sustainability means recycle, reuse, minimise waste and dispose correctly —
  across environmental, social and economic pillars.
- Performing work includes preparation, clean-up and documentation, not just the
  hands-on part.
`,
        quiz: [
          {
            q: "What is the difference between a standard and a code of practice?",
            options: [
              "A standard is voluntary; a code of practice is a technical specification",
              "A standard is a written document of how a process should be carried out; a code of practice gives practical guidance on meeting legal duties under work health and safety law",
              "They are two names for the same document",
              "A code of practice applies only to electrical work; a standard applies to all trades",
            ],
            answer: 1,
            explain: "AS/NZS 3000 is a standard — it sets out how the work is to be done technically. Codes of practice sit alongside WHS law and explain practically how to meet the duty, including training, supervision and risk management requirements.",
          },
          {
            q: "An apprentice has completed working-at-heights and EWP training. A licensed tradesperson on the same crew is authorised to isolate and energise supply. Which statement is correct?",
            options: [
              "The apprentice may now isolate supply because they are trained on site equipment",
              "The apprentice may operate the EWP and work at heights, but isolating and energising electrical supply remains with the licensed workers",
              "Neither may work at heights without a permit from the distributor",
              "Training in one area automatically extends authorisation to all site tasks",
            ],
            answer: 1,
            explain: "Authorisation is task-specific and flows from licensing and site rules. Heights and EWP training authorises those activities only; isolating and energising electrical equipment requires the electrical licence.",
          },
          {
            q: "Which of these best illustrates the economic pillar of sustainability on an electrical job?",
            options: [
              "Fitting daylight sensors so lights switch off automatically",
              "Reducing the cable pulled through and discarded at each point, so offcuts across a large job do not add up to a whole drum",
              "Providing a fair and respectful workplace",
              "Separating packaging waste for recycling",
            ],
            answer: 1,
            explain: "The economic pillar is about not wasting materials and labour — cable offcuts are the classic trade example, because a few hundred millimetres per point becomes a drum's worth across an apartment complex. Daylight sensors and recycling sit under environmental; fair treatment sits under social.",
          },
          {
            q: "An electrician needs to fit a new sub-board to a wall sheet in a building from the 1980s and suspects the backing board contains asbestos. What is the correct action?",
            options: [
              "Drill slowly with water running over the bit to keep dust down",
              "Stop work, leave the material undisturbed and report it so licensed assessment and removal can occur",
              "Continue, since asbestos awareness training qualifies them to work on it",
              "Cut it out and double-bag it for the general waste bin",
            ],
            answer: 1,
            explain: "Asbestos awareness training teaches you to recognise and stop, not to remove. Any drilling or cutting releases fibres, and unlicensed removal and disposal are unlawful as well as dangerous. Stopping, leaving it undisturbed and reporting hands it to the licensed process.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
