/* =========================================================================
   Course content, module 106 — Ancillary equipment.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 6 — Ancillary equipment.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 6, Ancillary equipment",
    "AS/NZS 1677.2 — refrigerating systems, safety requirements for fixed applications (relief devices, fusible plugs)",
    "AS 1210 — pressure vessels; Australian Refrigerant Handling Code of Practice, Part 1 — relief devices and service practice",
  ];

  const MODULES = [
    {
      id: "v1-ancillary-equipment",
      stream: "v1",
      title: "R1.6 · Ancillary equipment",
      blurb: "The valves, vessels, filters and protection devices bolted around the four main components — what each one does, how it is set, and what fails when it is left out.",
      lessons: [

        /* ============================================================== */
        {
          id: "shut-off-and-check-valves",
          title: "Manual shut-off valves, service valves and check valves",
          minutes: 13,
          simple: "These are the taps and the one-way gates of a refrigeration system. The taps let you shut a section off so you can work on it without losing the whole gas charge, and the one-way gates stop refrigerant sneaking backwards when the machine stops. Think of the taps under a kitchen sink and the flap in a tank overflow pipe.",
          refs: REFS,
          content: `
Every accessory in this chapter exists for one reason: the accessory costs a
fraction of what the repair costs when it is left out. Manual valves are the
clearest case. A liquid line valve worth a few dollars is the difference between
changing a drier in twenty minutes and recovering, evacuating and recharging a
whole system for half a day.

Manual shut-off valves are used to isolate sections of pipework, to divert flow,
and to give a technician somewhere to connect gauges. They are built
specifically for refrigeration duty — ordinary plumbing or gas valves are not
acceptable, because they leak at refrigerant molecule size, are not rated for
the pressures, and are not made of materials compatible with refrigerant and
oil.

## The common types

| Valve type | How the stem is sealed | Back-seat port? | Where you meet it |
|---|---|---|---|
| Packed line valve, T-handle seal cap | Packing gland around the stem, plus a screwed seal cap | Usually yes | Liquid and suction lines, receiver connections |
| Ball valve | Quarter-turn ball in seats, capped stem | No | Modern line isolation, quick full-bore shut-off |
| Packless diaphragm valve | A metal diaphragm welded across the stem — no packing at all | Never | Where leak-tightness matters most; made straight-through, angle and three-way |
| Compressor service valve | Packing gland, bolts to the compressor flange | Yes, plus a line-side port | Suction and discharge flanges of the compressor |

A packed valve seals the stem with packing squeezed around it. The seal cap
screwed over the top is a second line of defence against leakage, and on many
line valves the cap doubles as the operating wrench — you unscrew it, turn it
upside down, and the square on the stem engages a socket in the top of the cap.
Always refit the cap. A valve left uncapped will eventually weep through the
packing.

A packless diaphragm valve has no packing to weep in the first place, which is
why it is chosen for critical service. Because the diaphragm forms the whole
seal between stem and body, there is nowhere to fit a back-seat port, so these
valves never have one.

## Back seating, and what the back-seat port is for

Most packed valves are back-seating. When the stem is wound fully out (fully
open), the disc lands on a *second* seat at the top of its travel. That upper
seat shuts system pressure away from the packing, so a fully back-seated valve
cannot leak past the packing even if the packing is tired.

Back seating makes a useful trick possible. A small port is drilled into the
valve body between the packing and the back seat. With the valve back-seated,
that port is sealed off from the system. Move the stem off the back seat — to
any mid position, or fully closed — and the port opens to the system. That is
your charging point and your gauge connection. Every compressor service valve
has one.

## Receiver valves

The receiver has a valve at each end. The inlet valve is normally fitted with
the line connection and a tapping for the relief device. The outlet valve —
the one most technicians call the king valve — carries a drop tube, or liquid
tube, reaching down inside the vessel so it draws liquid from the bottom rather
than vapour from the top. Front-seat the king valve and run the compressor and
you have pumped the charge down into the receiver, which is exactly how you
isolate the low side for a repair.

## Compressor service valves: three positions

Compressor shut-off valves are packed, back-seating valves that bolt to the
suction and discharge flanges of the compressor. They have the usual back-seat
port and, in addition, a port on the *line* side of the valve, which cannot be
shut off from the system — a natural place to connect the sensing line of a
low-pressure control.

| Stem position | What is open | What is shut | When you use it |
|---|---|---|---|
| Back-seated (stem wound fully out, anticlockwise) | Compressor to line | Gauge/charging port | Normal running position; gauges can be removed safely |
| Mid-seated or cracked (stem a turn or two in) | Compressor to line, and the gauge port | Nothing | Reading gauges, charging, recovering |
| Front-seated (stem wound fully in, clockwise) | Gauge port to the compressor only | Compressor from the line | Isolating the compressor from the system |

Working the valve is a three-step habit: back-seat, fit the gauge line onto the
open port, then crack the stem off the back seat by about one turn so the gauge
sees system pressure. To remove the gauge line, back-seat again first — the port
is then dead and the hose comes off with only the hose contents to vent.

>! Never start or run a compressor with the discharge service valve
>! front-seated. The compressor is then pumping into a closed valve, pressure
>! rises in seconds, and the result is a burst gasket, a lifted head or a
>! ruptured line. Before starting any compressor after service, physically
>! check both stems are off their front seats. Front-seating the suction valve
>! with the machine running is the standard way to pump down, but it must be
>! done with a low-pressure control or a gauge watching, never walked away from.

>! The high-pressure control must never be connected to any port on the
>! discharge service valve — not the back-seat port, not the line-side port.
>! Back-seating isolates one; front-seating isolates the other. Either way you
>! can silently disable the safety control that is meant to stop the machine.
>! The correct connection is the tapping in the discharge vapour passage of the
>! compressor body itself.

## Check valves

A check valve, or non-return valve, allows flow one way only. Inside is a disc
or piston held onto its seat by a very light spring — light enough that normal
upstream flow pushes it straight open with almost no pressure drop. If flow
tries to reverse, the returning pressure acts on the back of the disc and helps
the spring slam it shut, so the valve gets tighter the harder the reverse flow
pushes.

Typical jobs:

- **Multi-temperature systems** — a check valve in the suction line from the
  higher-temperature evaporator stops its vapour, and its pressure, from
  backing into the colder evaporator.
- **Hot gas defrost** — check valves route defrost gas the right way and stop
  it escaping back down the liquid line.
- **Off cycles** — stopping vapour migrating from the warm side to the cold
  side, or into the compressor, while the machine is stopped.

Direction of flow is stamped on the body as an arrow. Fit one backwards and the
system either will not run at all or, worse, runs badly in a way nobody can
diagnose. Check valves are also a favourite hiding place for a leak that only
shows up on the off cycle.

## On the job

- Cap every packed valve, and never use a shifter on a stem that has a proper
  seal-cap wrench.
- Back-seated is the running position; mid-seated is the reading position.
- The king valve plus the compressor suction valve give you pump-down and
  isolation without touching the charge.
- If a valve will not seal when front-seated, do not force it — worn seats are
  common on old service valves, and a jammed stem will snap.
- Record which valves you closed. More jobs go wrong from a valve left shut
  than from one left open.
`,
          quiz: [
            {
              q: "You have fitted a gauge line to the back-seat port of a compressor suction service valve, but the gauge reads nothing. What is the most likely reason?",
              options: [
                "The valve is front-seated, so the port is sealed",
                "The valve is fully back-seated, so the port is sealed from the system",
                "The compressor is running, so there is no pressure at the port",
                "The port must always be used with a Schrader depressor",
              ],
              answer: 1,
              explain: "Fully back-seated closes the port off from the system — that is the whole point, so hoses can be fitted and removed safely. Cracking the stem about one turn off the back seat opens the port. Front-seating would actually open the port to the compressor, so option A would give a reading, not a blank gauge.",
            },
            {
              q: "Why must the high-pressure cut-out never be piped to a port on the discharge service valve?",
              options: [
                "The port is too small to give an accurate pressure signal",
                "Discharge pulsation would damage the control bellows",
                "Back-seating or front-seating the valve can isolate the port and disable the safety control",
                "It would prevent the technician from connecting gauges to that port",
              ],
              answer: 2,
              explain: "Both the back-seat port and the line-side port can be cut off from compressor discharge pressure by moving the stem, so a routine service action could silently disable the HP cut-out. The correct tapping is in the compressor body's discharge vapour passage, which can never be valved off. Losing a gauge port is an inconvenience; losing a safety control is a hazard.",
            },
            {
              q: "A packless diaphragm valve is specified for a critical connection. What does it NOT have?",
              options: [
                "A back-seat port",
                "A stem that can be turned",
                "A pressure rating suitable for refrigerant",
                "Any means of shutting off flow",
              ],
              answer: 0,
              explain: "The diaphragm seals the stem instead of a packing gland, so there is no packing to protect and nowhere for a back-seat port. These valves are still full shut-off valves and are made in straight-through, angle and three-way patterns.",
            },
            {
              q: "A check valve in a suction line is described as having a very light spring. Why is that acceptable?",
              options: [
                "Because the spring only has to hold the disc up against gravity",
                "Because reverse pressure acts on the disc and helps the spring hold it closed",
                "Because refrigerant vapour is too light to push the disc open",
                "Because the valve is only ever used on the liquid line",
              ],
              answer: 1,
              explain: "The spring only has to seat the disc; once flow reverses, the returning pressure itself pushes the disc onto its seat. A heavy spring would just add unnecessary pressure drop in the normal flow direction, which costs capacity on a suction line.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "relief-valves-and-fusible-plugs",
          title: "Relief valves, fusible plugs and pressure protection",
          minutes: 11,
          simple: "If pressure in a system climbs far past normal, something has to give — and it is much better that it is a device you chose than a weld you did not. A relief valve is the pressure-cooker weight that lifts, lets a burst of gas out and then sits back down. A fusible plug is a lump of low-melting metal that melts and dumps the lot.",
          refs: REFS,
          content: `
A refrigerating system is a pressure vessel with a pump attached. Block the
condenser airflow, lose the cooling water, trap liquid between two closed
valves, or let a fire warm a full receiver, and pressure rises until something
fails. Pressure relief devices decide *where* and *how* that failure happens —
in a controlled, aimed discharge rather than a burst vessel.

This work is governed, not optional. In Australia the relevant documents are
AS/NZS 1677.2 for refrigerating system safety, AS 1210 for pressure vessels,
and the Australian Refrigerant Handling Code of Practice, whose section on
relief devices sets out what has to be fitted and what must not be tampered
with. Anyone holding an ARCtick licence is expected to work to them.

## Relief valves

A pressure relief valve is a spring-loaded valve set to open at a defined
pressure. Refrigerant escapes, the pressure falls, and the valve **reseats** —
it closes again and the rest of the charge stays in the system. That resetting
behaviour is the reason relief valves are the required type: they protect the
plant while releasing the smallest amount of refrigerant that does the job.

Where they go:

- Tapped into the condenser, or into the liquid receiver where one is fitted —
  the receiver inlet valve normally carries a tapping expressly for it.
- On the low side as well, where health, building or plant codes call for it.
- Between any pair of valves that can trap liquid refrigerant. Liquid is nearly
  incompressible and warms up; trapped liquid can generate pressures far beyond
  anything the compressor can produce.

Rules that matter in the field:

- The device must be an automatically resetting type. A plug, a blank, or a
  bolted-down valve is not protection.
- Never fit a shut-off valve that can isolate a relief device unless the
  arrangement is one the standard specifically allows (for example a
  three-way changeover valve carrying two relief valves, so one is always in
  service).
- Discharge piping must be at least the size the standard requires, must not be
  reduced, and must terminate somewhere safe — outside, above head height, away
  from air intakes, doors and walkways.
- Relief valves are set and sealed by the maker. Adjusting one in the field, or
  refitting one that has lifted and been left weeping, is not acceptable.

>! A relief valve discharge is a violent event. Refrigerant leaves as a
>! high-velocity jet, flashes to vapour and can cause severe cold burns and
>! frostbite; in a confined plant room it displaces oxygen and can asphyxiate.
>! Ammonia and A2L flammable refrigerants add toxicity and fire risk. Never
>! stand in front of a relief outlet, never work on a device that has lifted
>! without first proving the system pressure is safe, and never blank an outlet
>! off to stop it weeping.

## Fusible plugs

A fusible plug is a fitting containing a metal alloy that melts at a set
temperature. Because pressure and saturation temperature travel together, a
melting temperature corresponds to a pressure — so the plug is really a
temperature-pressure device. When the alloy melts, the hole is open and stays
open.

That is the crucial difference:

| | Relief valve | Fusible plug |
|---|---|---|
| Sensing | Pressure directly, on a spring | Temperature, which stands in for pressure |
| After it operates | Reseats; the rest of the charge is kept | Nothing closes; the entire charge is lost |
| Reusable | Yes, subject to inspection | No — the plug must be replaced |
| Environmental result | Minimum release | Total release of the charge to atmosphere |

Fusible plugs were once common and may still be found on older plant and on
some cylinders. Where they are used at all, they must comply with the design
standards — the clauses in AS/NZS 1677.2 and AS 1210 that cover them. On
environmental grounds they are not recommended for refrigerating systems: an
event that would cost a few hundred grams through a relief valve costs the
whole charge through a fused plug, with the emissions and the recharging cost
that follow.

## What a technician actually does

1. **On every service visit, look at the relief device.** Corrosion, paint over
   the outlet, a bird nest in the discharge pipe, oil staining around the seat
   (a sign it has lifted or is weeping) — all are findings worth recording.
2. **Check the discharge line still goes somewhere safe.** Plant rooms get
   rebuilt around plant; discharge pipes end up pointing at a new doorway.
3. **Think about trapped liquid before you close a valve.** Isolating a full
   liquid line on a hot day with no relief between the valves is how technicians
   burst pipework.
4. **Never use the relief tapping as a service port.** It is not there for
   charging.
5. **Report a lifted device rather than resetting the system and walking away.**
   Something caused the over-pressure — non-condensables, a blocked condenser, a
   failed fan, a failed HP control — and it will do it again.

>! Relief devices are the last line of defence, not the first. The pressure
>! controls, the condenser and the safety interlocks are supposed to stop the
>! system long before a relief valve lifts. If one has lifted, treat the system
>! as faulty until you have found the reason.
`,
          quiz: [
            {
              q: "Why is a relief valve preferred over a fusible plug on a modern refrigerating system?",
              options: [
                "It opens at a lower pressure, so the system is protected sooner",
                "It reseats after relieving, so only part of the charge is lost",
                "It does not require compliance with any Australian Standard",
                "It responds to temperature rather than pressure, which is more accurate",
              ],
              answer: 1,
              explain: "The relief valve closes again once pressure falls, keeping the remaining charge in the system — better environmentally and cheaper to make good. A fusible plug, once melted, cannot close, so the full charge is vented. Relief devices are covered by AS/NZS 1677.2 and AS 1210, so option C is wrong on both counts.",
            },
            {
              q: "Two service valves are closed on a liquid line full of refrigerant on a 40 °C day, with no relief device between them. What is the hazard?",
              options: [
                "The refrigerant will condense and create a vacuum that collapses the pipe",
                "Trapped liquid expands as it warms and can generate pressures far above compressor discharge, bursting the line",
                "The oil will separate from the refrigerant and block the line",
                "Nothing — a liquid line cannot exceed condensing pressure",
              ],
              answer: 1,
              explain: "Liquid refrigerant is nearly incompressible, so a small temperature rise in a fully trapped volume produces an enormous pressure rise — far beyond condensing pressure. This is a recognised reason for fitting relief protection between isolating valves, and a reason to think before closing the second valve.",
            },
            {
              q: "Where is a relief valve most commonly tapped into a system with a receiver?",
              options: [
                "Into the suction line near the compressor",
                "Into the condenser or receiver, often via the tapping in the receiver inlet valve",
                "Into the evaporator header",
                "Into the liquid line downstream of the expansion valve",
              ],
              answer: 1,
              explain: "The high side, and particularly the receiver, holds the largest volume of liquid at the highest pressure, so that is where over-pressure protection is required; the receiver inlet valve is normally supplied with a tapping for the device. Low-side relief is fitted in addition where the applicable codes require it.",
            },
            {
              q: "A technician finds oil staining around the seat of a relief valve on a receiver. The best response is to:",
              options: [
                "Tighten the valve down onto its seat to stop the weep",
                "Blank the outlet and note it for the next service",
                "Treat the system as faulty, investigate why pressure rose, and replace the device as required",
                "Adjust the spring to a higher setting so it will not lift again",
              ],
              answer: 2,
              explain: "The staining says the device has lifted or is weeping, which means something drove pressure up — non-condensables, condenser fouling, a failed fan or a failed HP control. Adjusting, blanking or tightening a relief device defeats the protection and is not permitted; find the cause and replace the sealed device.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "epr-cpr-and-hot-gas-bypass",
          title: "Pressure regulators: EPR, CPR and hot gas bypass",
          minutes: 14,
          simple: "These three valves all do the same trick in different places: they hold a pressure where you want it by squeezing or adding gas. Because pressure and boiling temperature go together, holding a pressure is really holding a temperature — like a tap you can set so the water never gets colder than a chosen point.",
          refs: REFS,
          content: `
Once you understand that pressure fixes saturation temperature, a whole family
of valves makes sense. An evaporator pressure regulator stops an evaporator
getting too cold. A crankcase pressure regulator stops the compressor getting
too much gas. A hot gas bypass valve stops the suction pressure falling too
far at light load. All three are throttling valves controlled by a spring
working against a bellows or diaphragm.

!FIG[gauge-pt-ring]

## Evaporator pressure regulator (also called a constant-pressure valve)

An EPR — the older trade name is CP valve, and a well-known small version used
on instantaneous beverage coolers is the 750 valve — is fitted in the suction
line as close as practicable to the evaporator outlet, with the arrow pointing
towards the compressor. It senses the pressure *upstream* of itself, that is,
the evaporator pressure, under a bellows.

The logic is simple: while evaporator pressure is above the spring setting, the
valve is open and vapour flows to the compressor. As evaporator pressure falls
towards the setting, the valve throttles, and at the setting it closes. The
evaporator pressure therefore cannot fall below the setting, so the refrigerant
saturation temperature cannot fall below the matching temperature on the PT
chart. In practice the valve spends most of its time throttling rather than
fully shut, and it only closes properly when there is no heat left going into
the coil.

**Worked example.** A CP valve on R134a is set to close at 202 kPa gauge. From
the R134a pressure-temperature chart, 202 kPa gauge corresponds to a saturation
temperature of about 1 °C. The coil therefore cannot fall below roughly 1 °C, so
in theory water in that evaporator will chill but not freeze. In practice you
would not run that close to freezing without a good valve and a good margin —
the valve is doing the whole job of protecting the product.

The classic uses are beverage coolers, water chillers, and any multi-evaporator
system where one coil must stay warmer than the others. Several evaporators on
one compressor can each carry their own EPR, each holding its own temperature;
the compressor itself is then cut in and out separately, normally by a
low-pressure control.

### Setting an EPR

1. Fit a gauge to the EPR's own gauge port, and a second gauge to the
   compressor suction service valve, and watch both while the machine runs.
2. Expect the compressor gauge to read a little lower than the EPR gauge — the
   difference is the pressure drop across the valve. **The evaporator pressure
   can never fall unless the compressor is pulling it lower**, so if the
   compressor gauge is not below the target there is nothing to adjust.
3. If the EPR gauge settles below the pressure you want, turn the adjusting
   screw **in** (clockwise) to increase spring pressure. Give it two or three
   minutes to settle before adjusting again.
4. If the EPR gauge will not come down to the pressure you want, turn the screw
   **out** (anticlockwise) until the evaporator pressure drops to target.
5. Refit the cap. The spring chamber is open to atmosphere, and an uncapped
   valve lets moist air in to condense on the copper parts.
6. Remove the gauge line from the Schrader connection, cap it, and leak test.

Where a frozen product or a burst chiller is the consequence of a wrong
setting, adjust slowly and in small steps. Lock-wiring or wax-sealing the
adjusting screw will not stop a determined owner from fiddling, but a broken
wire proves it happened.

## Crankcase pressure regulator (CPR)

A CPR is fitted in the suction line **just before the compressor**, and it
senses the pressure *downstream* — the pressure on the compressor side. High
suction pressure acting on the bellows pushes the valve towards its seat, so
the valve throttles to hold the compressor inlet pressure at or below the
setting, no matter how much higher the evaporator and suction line pressure
happen to be.

Why it is needed: mass flow through a compressor rises with suction pressure,
and so does motor power. A low-temperature compressor has a motor sized for
low-temperature suction pressures. After a long off cycle, or immediately after
a defrost, the coil is warm and suction pressure can be very high — above
600 kPa on a low-temperature pack. Without a regulator the motor is
badly overloaded: it trips on overload at best, and cooks a winding at worst.

**Worked example.** A freezer running R507 normally operates at about 100 kPa
suction or lower. The CPR is set to 250 kPa. After defrost the suction line may
sit above 250 kPa for five or six minutes; the CPR throttles that flow so the
compressor never sees more than 250 kPa, then opens fully as the coil pulls
down and lets the evaporator fall to its normal 100 kPa. Note that once the CPR
is fitted, a suction gauge at the compressor no longer tells you the evaporator
pressure — you need a gauge between the evaporator and the CPR to know that.

**Setting a CPR by current.** The proper method is electrical, not just
pressure. Clamp the compressor motor and adjust the spring so the highest
current drawn during pull-down sits about 10 per cent below full load amps. For
a compressor with an FLA of 18.5 A:

- Target = 0.90 × 18.5 A = **16.7 A**
- Adjust the screw until the pull-down current peaks at about 16.7 A, then
  confirm the pressure it corresponds to and record it.

Selection matters too. A CPR that is too small chokes the system every hour of
every day; choose one sized to give the minimum pressure drop at normal running
conditions, which means selecting on the capacity of the condensing unit, not
just on the pipe size.

| | EPR / CP valve | CPR |
|---|---|---|
| Fitted | Suction line at the evaporator outlet | Suction line at the compressor |
| Senses | Its inlet — evaporator pressure | Its outlet — compressor inlet pressure |
| Action | Closes on falling pressure | Closes on rising pressure |
| Protects | The product or the coil (too cold) | The compressor motor (too much load) |

## Hot gas bypass

Hot gas bypass solves the opposite problem to the CPR: not too much load, but
too little. When load falls below the smallest step the compressor can unload
to, suction pressure keeps dropping. The coil ices, oil return suffers, the LP
control short-cycles the machine, and on a chiller the water can freeze.

A hot gas bypass valve is a pressure-regulating valve piped from the discharge
line to the low side. It senses suction pressure and opens as suction pressure
falls below its setting, letting hot discharge gas through to make up the
missing load — an artificial load that keeps the suction pressure up and the
compressor running steadily.

Where the gas is injected matters:

- **Into the evaporator inlet, at the distributor** — preferred. The bypassed
  gas mixes with the liquid feed, the coil stays wet enough to keep oil moving,
  and the TXV still sees proper superheat at the coil outlet.
- **Into the suction line** — simpler to pipe, but the gas arrives hot and dry.
  This arrangement needs liquid injection for desuperheating and a TXV bulb
  located so that it still controls, otherwise discharge temperature climbs and
  the compressor overheats.

Hot gas bypass keeps a machine alive at very low load, but it is not free: the
compressor keeps running at full power while doing little useful cooling.
Treat it as capacity control of last resort, after unloaders, staging and
variable speed have been considered.

## On the job

- EPR closes on *falling* pressure; CPR closes on *rising* pressure. Get that
  the wrong way round and no adjustment will ever behave.
- Always set a CPR with a clamp meter, aiming about 10 per cent below FLA.
- After fitting any regulator, the pressure you read at the compressor is no
  longer the evaporator pressure — add a gauge port where you need one.
- Cap adjusting screws and leak test every gauge port you used.
- A system that ices up at light load and short-cycles is asking for hot gas
  bypass or proper capacity control, not a lower LP cut-out setting.
`,
          quiz: [
            {
              q: "An evaporator pressure regulator is set at 202 kPa gauge on R134a. What does this achieve?",
              options: [
                "The compressor suction pressure is held at 202 kPa at all times",
                "The evaporator cannot fall below about 1 °C saturation temperature",
                "The condensing pressure is held constant during light load",
                "The compressor is prevented from drawing excess current after defrost",
              ],
              answer: 1,
              explain: "The EPR closes on falling pressure, so evaporator pressure cannot go below the setting, and 202 kPa gauge on R134a is about 1 °C saturation — the coil cannot get colder than that. Holding compressor current after defrost is the CPR's job, and the compressor suction will read lower than the EPR setting because of the drop across the valve.",
            },
            {
              q: "A low-temperature R507 pack trips its compressor overload for several minutes after every defrost. Which device addresses this directly?",
              options: [
                "An evaporator pressure regulator at the coil outlet",
                "A hot gas bypass valve to the distributor",
                "A crankcase pressure regulator in the suction line at the compressor",
                "A liquid line solenoid valve",
              ],
              answer: 2,
              explain: "After defrost the coil is warm, suction pressure is high, mass flow and motor power are high, and a low-temperature motor is not sized for it. A CPR throttles the vapour so the compressor inlet never exceeds the setting until the coil pulls down. An EPR protects the coil temperature, not the motor, and hot gas bypass would make the overload worse.",
            },
            {
              q: "What is the correct method for setting a CPR?",
              options: [
                "Adjust until the suction gauge at the compressor reads the design evaporating pressure",
                "Adjust until the measured motor current peaks about 10 per cent below full load amps",
                "Adjust until the discharge pressure stabilises",
                "Adjust until the superheat at the compressor is 8 K",
              ],
              answer: 1,
              explain: "The CPR exists to limit motor loading, so the meaningful measurement is current: set the pull-down peak about 10 per cent below FLA. A compressor with an FLA of 18.5 A gives a target of 0.90 × 18.5 = 16.7 A. Setting by suction gauge alone ignores the actual load on the motor.",
            },
            {
              q: "Hot gas bypass injected directly into the suction line rather than at the evaporator distributor requires extra care because:",
              options: [
                "The bypassed gas arrives hot and dry, so discharge temperature can climb without liquid injection for desuperheating",
                "The bypass valve must then be set at a higher pressure",
                "It cannot be used with a thermostatic expansion valve",
                "It causes flooding of the compressor with liquid refrigerant",
              ],
              answer: 0,
              explain: "Injecting at the distributor lets the gas mix with the liquid feed, keeping the coil wet and superheat controlled. Injecting into the suction line delivers hot dry gas straight to the compressor, so desuperheating liquid injection and careful bulb placement are needed to keep discharge temperature under control.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "head-pressure-control-and-lpa",
          title: "Head pressure control, water regulating valves and LPA",
          minutes: 14,
          simple: "In winter the condenser works too well, the pressure pushing liquid to the expansion valve gets weak, and the valve starves. The old answer was to deliberately keep the pressure high, which wastes power. The new answer is a small pump on the liquid line — like adding a booster pump instead of keeping the whole water main at high pressure.",
          refs: REFS,
          content: `
A thermostatic expansion valve is driven by the pressure difference across it.
Drop the condensing pressure far enough and the TXV can no longer push enough
liquid through, the liquid line flashes to vapour before it reaches the valve,
and the evaporator starves. That is why systems carry minimum head pressure
control — and it is also why they waste energy, because the compressor is being
made to work against a pressure it did not need to.

## Water regulating valves

On a water-cooled condenser, condensing pressure depends on how much water is
flowing and how cold it is. A water regulating valve is a modulating valve in
the condenser water line, operated by a bellows connected to the discharge or
condensing pressure.

- Head pressure rises, the valve opens wider, more water flows, condensing
  pressure comes back down.
- Head pressure falls, the valve throttles, holding condensing pressure up.
- When the compressor stops, discharge pressure falls and the valve closes, so
  water is not run to waste through a machine that is not working.

Adjust one by running the system and turning the adjustment until the discharge
gauge sits at the design condensing pressure with the water supply at its usual
temperature. Fit a strainer upstream — these valves are ruined by grit — and
remember that on a cooling tower circuit a temperature-actuated version is
often used instead, sensing water temperature rather than refrigerant pressure.

## Head pressure control on air-cooled condensers

Australian plant sits outside, and a condenser sized for a 40 °C summer day is
massively oversized at 5 °C on a winter night. Options, from simplest up:

| Method | How it works | Notes |
|---|---|---|
| Fan cycling | A pressure switch stops one or more condenser fans as head pressure falls | Cheap and common; causes pressure swings on small condensers |
| Fan speed control | Fan speed varies with head pressure or ambient | Smooth, quieter, now the usual choice with EC fans |
| Dampers | Airflow restricted mechanically | Rare on new plant |
| Condenser flooding | A pressure-regulating valve holds liquid back in the condenser, reducing the active surface, while a second valve bypasses discharge gas into the receiver to keep receiver pressure up | Effective at very low ambient, but needs a much bigger charge and a properly sized receiver |

Flooding control is the classic two-valve arrangement: an inlet-pressure
regulator in the condenser drain line and a differential bypass valve from
discharge to receiver. It works, but every kilogram of extra charge is a
kilogram to buy, to log and to lose in a leak.

!SIM[Watch head pressure climb on a fouled condenser](fault=dirtyCondenser)

## Why flash gas is the real enemy

The liquid line has to deliver **solid liquid** to the metering device. Two
things eat the margin: pressure drop through the pipe, drier and valves, and
static lift where the liquid line rises.

**Worked example — static lift.** Liquid R134a has a density of roughly
1200 kg/m³. Lifting it 5 m costs:

- Δp = ρ × g × h = 1200 × 9.81 × 5 = 58 860 Pa ≈ **59 kPa**

Add, say, 25 kPa of friction and drier loss and the liquid arrives at the TXV
about 84 kPa below condenser pressure. If the liquid only had 2 K of subcooling
at the condenser, it is already flashing before it gets there — bubbles in the
sight glass, hunting TXV, and a starved coil that the technician then
misdiagnoses as undercharge.

The traditional fix is to hold condensing pressure high enough that even after
that loss the liquid is still subcooled. The cost is compressor power all year
round.

## Liquid pressure amplification (LPA)

LPA takes the opposite approach. A small, low-powered pump is installed in the
liquid line, downstream of the receiver. It raises liquid pressure by roughly
35 to 85 kPa — comfortably more than the example above needs — which suppresses
flash gas by itself. Because the liquid is no longer relying on the compressor
to keep it liquid, the minimum head pressure setting can be wound right down and
the condensing pressure is allowed to **float** with ambient. The lower the
condensing temperature, the less work per kilogram the compressor does and the
greater the refrigerating effect: a bigger cooling leg and a shorter compression
leg on the P-h chart.

Field trials on this technology report typical compressor energy savings of
10 to 30 per cent, with typical payback in one to three years.

**Worked example — savings.** A compressor drawing 7.5 kW runs 4000 hours a
year:

- Annual energy = 7.5 × 4000 = 30 000 kWh
- At a 20 per cent saving = 0.20 × 30 000 = **6000 kWh a year**
- At an assumed 30 c/kWh, that is 6000 × 0.30 = **$1800 a year**, so an
  installed cost of about $4000 pays for itself in a bit over two years — in
  the one-to-three-year band the field data describes.

### The pump itself

The LPA pump is a semi-hermetically sealed unit whose only moving part is an
impeller floating in a revolving magnetic field, driven through a magnetic
coupling by a motor mounted **outside** the refrigerant circuit. Two useful
consequences: a motor burnout cannot contaminate the system, and no motor heat
is added to the refrigerant. The pump is passive in the sense that if it stops,
refrigerant still flows through it and the system keeps operating — you lose the
saving, not the plant.

### Where it fits, and what has to change

LPA suits direct-expansion systems where flow is controlled by a TXV. Packaged
and split air-conditioners, refrigerated display cases and coolrooms are all
candidates because most are TXV-controlled already. Where the system uses a
capillary tube, the cap tube must be replaced with a TXV at the evaporator
inlet and a properly sized liquid line run from condenser to valve — the
pressure boost is meaningless if the metering device is a fixed restrictor.

### Two extensions

- **Superheat suppression (liquid injection desuperheating).** The pump's
  pressure boost is used to inject about five per cent of the liquid into the
  compressor discharge, cooling the vapour towards its condensing temperature.
  More of the condenser is then doing condensing rather than desuperheating,
  which gives closer approach temperatures and better cycle efficiency with
  some refrigerants.
- **Dehumidification coil.** In air-conditioning with a high latent-to-sensible
  ratio, or where a low supply-air dew point is needed, a supplementary coil is
  added downstream of the main cooling coil. Pumped refrigerant passes through
  it on the way to the TXV and is further subcooled; LPA is what stops that
  coil flashing. The result is drier supply air at a slightly higher dry-bulb
  temperature. In supermarkets that is a large win, because drier store air
  means less frost on the display cases and fewer, shorter defrosts.

## On the job

- Bubbles in the sight glass are not automatically undercharge — check
  subcooling, liquid line lift and head pressure control first.
- Winter-only complaints of poor performance almost always point at head
  pressure control.
- Flooding-type head pressure control needs the extra charge it was designed
  with; topping up "to clear the sight glass" on a flooded system is a trap.
- LPA and floating head go together: fitting the pump and leaving the old high
  minimum head pressure setting delivers almost none of the saving.
`,
          quiz: [
            {
              q: "Why do conventional systems maintain a minimum head pressure in cold weather?",
              options: [
                "To keep the compressor motor loaded so it does not overheat",
                "To keep enough pressure across the TXV and stop the liquid flashing before it reaches the valve",
                "To prevent oil from separating in the condenser",
                "To stop the receiver relief valve lifting",
              ],
              answer: 1,
              explain: "A TXV needs a pressure difference to pass its rated flow, and the liquid must still be liquid when it arrives. Too little condensing pressure means flash gas in the liquid line and a starved evaporator. The penalty is that the compressor works against an artificially high pressure all year, which is exactly what LPA removes.",
            },
            {
              q: "Liquid R134a (about 1200 kg/m³) must be lifted 5 m to the expansion valve. Roughly how much pressure does that lift cost?",
              options: [
                "About 6 kPa",
                "About 59 kPa",
                "About 120 kPa",
                "About 590 kPa",
              ],
              answer: 1,
              explain: "Δp = ρgh = 1200 × 9.81 × 5 = 58 860 Pa, or about 59 kPa. That is a real loss on top of friction and drier pressure drop, and it is why a system with only a couple of kelvin of subcooling shows bubbles at the sight glass after a vertical rise.",
            },
            {
              q: "What does the LPA pump do to make floating head pressure possible?",
              options: [
                "It raises the liquid pressure by about 35 to 85 kPa, suppressing flash gas without needing high condensing pressure",
                "It increases the mass flow through the compressor",
                "It subcools the liquid by passing it through the condenser twice",
                "It raises the discharge pressure so the TXV always has a pressure difference",
              ],
              answer: 0,
              explain: "The pump adds pressure to the liquid itself, so the liquid line no longer depends on the compressor to stay solid. That lets the minimum head pressure setting be lowered and condensing pressure to float down with ambient, which is where the 10 to 30 per cent compressor energy saving comes from.",
            },
            {
              q: "A shopping-centre coolroom uses a capillary tube. What must change before LPA can be applied?",
              options: [
                "Nothing — LPA works with any metering device",
                "The capillary tube must be shortened to suit the higher liquid pressure",
                "The capillary tube must be replaced by a TXV, with a properly sized liquid line to it",
                "The receiver must be removed so the pump can draw from the condenser",
              ],
              answer: 2,
              explain: "LPA is applied to TXV-controlled direct-expansion systems. A capillary tube is a fixed restrictor that cannot take advantage of a pressure boost the way a modulating valve can, so the cap tube is replaced by a TXV at the evaporator inlet and a correctly sized liquid line is run to it.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "solenoid-and-pilot-valves",
          title: "Solenoid valves and pilot-operated line valves",
          minutes: 13,
          simple: "A solenoid valve is a tap opened by an electromagnet, so a thermostat can turn refrigerant on and off with a wire instead of a hand. Big pipes need too much magnet, so a tiny solenoid is used instead to steer the pressure that opens a large valve — the same way a small handle on a garden tap controls a big flow.",
          refs: REFS,
          content: `
Once you can switch refrigerant flow electrically, you can control temperature
with a thermostat, pump down before every stop, isolate branches, and switch a
whole supermarket rack between cooling and defrost. Nearly all of that is done
with solenoid valves, either directly or as pilots on a larger valve.

## Thermostat and solenoid control

The alternative to a pressure-operated regulator is a thermostat operating a
liquid line solenoid. It is used where close control of the refrigerant
saturation temperature is less important than controlling both the cut-out and
cut-in temperature of the room, cabinet or coil. It has two components instead
of one, yet it is the simpler system in practice: it is easy to install, easy to
set, and the owner can adjust the thermostat without touching refrigerant.

The thermostat can be any type suitable for the temperature range, with its
bulb or sensing element placed where it represents what you are trying to
control. The solenoid goes in the **liquid line, as close as possible to the
metering device**. If it is fitted a long way upstream, closing it does not stop
refrigeration — the liquid already in the pipe between solenoid and TXV keeps
feeding the coil until it empties, and the room overcools.

Pair that solenoid with a low-pressure control and you have pump-down control:
the thermostat closes the solenoid, the compressor keeps running until it has
pulled the low side down, then the LP control stops it. The charge ends up in
the high side, and there is no liquid left to migrate to the compressor while it
is stopped.

## Inside a direct-acting solenoid

A solenoid valve is an electromagnet in which the moving armature *is* the
valve. An insulated copper coil sits around a sealed sleeve or tube attached to
the valve body; the sleeve keeps refrigerant in while letting the magnetic field
through. Energise the coil and the armature is lifted into the centre of the
field, opening the port. De-energise it and the armature drops.

That design is used on small ports — liquid lines up to about 10 mm OD. Above
that, the magnetic force needed to lift a large armature against system
pressure becomes impractical, so a **pilot-operated** valve of the floating
piston type is used: the coil moves only a small pilot port, and system
pressure difference then moves the main piston. The catch is that a
pilot-operated valve needs a minimum pressure difference across it to work at
all — it borrows the system's own pressure to do the lifting. Most have a stem
for opening the valve manually during service.

## Selecting a solenoid

Selection is not just "does it fit the pipe":

- **Supply voltage and frequency** of the coil.
- **Refrigerant or fluid** — and its compatibility with the seat material.
- **Liquid line or suction line duty** — they are not interchangeable, because
  vapour needs a far larger port for the same capacity.
- **Maximum opening pressure differential (MOPD)** and minimum differential.
- **Line size and required capacity.**
- **Maximum fluid temperature**, which matters on hot gas duty.

The MOPD is the one that bites. Fit a valve rated for 600 kPa differential
where 1400 kPa was specified and you get an intermittent fault that can go
unsolved for weeks: on a hot afternoon the liquid pressure exceeds what the coil
can lift against, the valve stays shut, and the room warms up. By the time the
technician arrives the condenser has cooled, the differential has dropped, the
valve opens normally, and there is nothing to find.

## Installing a solenoid

- **Mount it with the coil upright and the stem vertical.** These valves rely on
  gravity to close when the coil is dead.
- **Respect the flow arrow.** Most rely on higher upstream pressure to help hold
  the valve closed when de-energised; piped backwards, refrigerant pressure can
  hold the valve open.
- **Keep it out of drips and frost condensation.** Coils are insulated, but
  water dripping onto electrics is an unnecessary hazard and the body and coil
  will rust.
- **Protect the body when brazing** — pull the coil off first and wrap the body,
  or you will cook the seat.

>! A solenoid coil that has failed can be worked around temporarily by mounting
>! the valve so gravity holds it open until a replacement coil arrives, but this
>! removes an automatic safety and control function — the system can no longer
>! stop refrigerant flow. Do it only as a deliberate short-term measure, tell
>! the customer, and come back with the coil. Also treat every coil as live:
>! solenoid coils sit at mains voltage and often stay energised when the plant
>! looks stopped, so isolate and prove dead before touching one.

## Pilot- or servo-controlled line valves

On industrial and supermarket plant, the main line valves are large
servo-operated valves — the Danfoss PM and ICS families are the ones most often
seen in Australia. The main valve is opened and closed by pressure fed to a
servo piston, and small **pilot valves** screwed into the top of the main valve
decide what that pressure does. The main valve is the muscle; the pilots are the
brain, and one main valve can carry more than one pilot.

Common pilots:

- **EVM** — a small solenoid pilot, so an electrical signal opens or closes the
  main valve.
- **CVP** — a constant-pressure pilot, making the main valve behave as an
  evaporator pressure regulator.
- **CVPP** — a differential-pressure pilot, holding a set pressure difference
  between two points.
- **Electronic pilots** driven by a controller and sensor (for example an
  electronic regulator with an air temperature sensor) so that a main valve
  becomes part of a supervised control system.

### A hot gas defrost sequence

The way these are combined is worth following through, because it is exactly
what happens on a supermarket rack:

1. **Cooling.** The liquid line main valve is held open by its solenoid pilot,
   under the electronic regulator watching the air sensor. The hot gas main
   valve into the evaporators is held closed by its own pilot. The suction main
   valve is open.
2. **Defrost begins.** The main valves that were carrying the cooling flow are
   each closed by their own pilots. The hot gas main valve is opened by its
   pilot, and hot discharge gas is fed to the selected evaporators *against* the
   normal direction of flow.
3. **Balancing the plant.** At least two-thirds of the plant must stay in
   cooling while at most one-third defrosts. That is a hard rule: the cooling
   evaporators are what generate the hot gas, and if too many coils go to
   defrost at once there is simply not enough hot gas to defrost any of them.
4. **Getting the condensate away.** During defrost, a main valve controlled by a
   differential-pressure pilot creates enough pressure difference between the
   hot gas and the receiver to give defrost priority, and the liquid condensed
   in the defrosting evaporators is pushed out into the liquid line through a
   check valve.

## On the job

- Solenoid buzzing or humming usually means a dirty seat, low voltage, or a
  valve trying to open above its MOPD.
- A coil that burns out repeatedly is telling you about voltage, ambient
  temperature or a jammed armature — not about coil quality.
- Feel the pipe either side: a solenoid that is open passes flow you can hear
  and feel as a temperature change.
- On servo valves, diagnose the pilot before you condemn the main valve — the
  main valve almost never fails.
`,
          quiz: [
            {
              q: "Why should a liquid line solenoid be installed as close as possible to the metering device?",
              options: [
                "To keep the coil away from heat from the condensing unit",
                "So that closing the solenoid stops refrigeration almost immediately, instead of letting liquid trapped downstream keep feeding the coil and overcooling the space",
                "So the valve sees the highest possible pressure differential",
                "Because the valve must be below the receiver to close by gravity",
              ],
              answer: 1,
              explain: "Liquid sitting in the pipe between the solenoid and the TXV will keep boiling off in the evaporator after the valve shuts, so a distant solenoid means the room keeps cooling after the thermostat is satisfied. Mounting orientation matters too, but that is about the stem being vertical, not about distance.",
            },
            {
              q: "A coolroom fails only on hot afternoons and works perfectly by the time the technician arrives. The liquid line solenoid is a 600 kPa MOPD valve on a system specified for 1400 kPa. What is happening?",
              options: [
                "The coil is overheating in the afternoon sun and going open circuit",
                "The valve is fitted backwards and is being blown open",
                "High liquid pressure in hot weather exceeds what the coil can open against, so the valve stays shut until the condenser cools",
                "The thermostat differential is too wide in warm weather",
              ],
              answer: 2,
              explain: "MOPD is the maximum pressure difference the coil can lift the armature against. On a hot day the condensing pressure exceeds that limit and the valve cannot open; as the ambient falls the differential drops and the valve works again, leaving no evidence. Selecting on line size alone is what caused it.",
            },
            {
              q: "On a servo-operated main line valve, what does a pilot valve do?",
              options: [
                "It filters the refrigerant before the main valve",
                "It relieves excess pressure from the main valve body",
                "It controls the pressure fed to the servo piston, so a small signal decides whether the large main valve opens or closes",
                "It provides a manual override only",
              ],
              answer: 2,
              explain: "The main valve is moved by system pressure acting on a servo piston; the pilot decides where that pressure goes. That is why one main valve can carry a solenoid pilot, a constant-pressure pilot or a differential pilot, and why faults are usually in the pilot rather than the main valve.",
            },
            {
              q: "During hot gas defrost on a multi-evaporator plant, why must at most one-third of the plant be in defrost at a time?",
              options: [
                "Because the defrost timer cannot switch more than one-third of the contactors",
                "Because the evaporators still in cooling are what generate the hot gas — too few of them and there is not enough hot gas to defrost properly",
                "Because the receiver cannot hold the extra liquid",
                "Because the suction line would be overloaded with vapour",
              ],
              answer: 1,
              explain: "Hot gas for defrost comes from the compressors, which are being fed by the coils still doing useful cooling. Put too many coils into defrost and the load collapses, the hot gas supply falls away, and none of the coils clear their ice. The usual rule is at least two-thirds cooling, at most one-third defrosting.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "strainers-and-driers",
          title: "Strainers, filter-driers and desiccants",
          minutes: 13,
          simple: "Dirt blocks the tiny holes in expansion and solenoid valves, and water inside a refrigeration system turns into ice and acid. A strainer is a sieve that catches the dirt; a filter-drier is a sieve plus a sponge that soaks up the water. Both are cheap, and both save the expensive parts downstream.",
          refs: REFS,
          content: `
The orifices that meter refrigerant are measured in fractions of a millimetre. A
brazing flake, a shaving from a pipe cutter or a fragment of a failed valve is
all it takes to block one. Moisture is worse again: it freezes at the metering
device and stops the system, and with the oil and the refrigerant it forms acids
that attack winding insulation and copper, ending in a burnout that contaminates
everything.

## Strainers

A strainer is the simplest device in the chapter: a shell containing a
fine-mesh screen. Refrigerant passes through, particles do not. Because the
components most easily blocked are expansion valves and solenoid valves, the
strainer goes in the liquid line immediately upstream of them. Many TXVs and
solenoids include an integral strainer for the same reason.

A strainer catches dirt but does nothing about moisture or acid, which is why
almost every field installation uses a combined **filter-drier** instead.

## Filter-driers

A liquid line filter-drier contains a desiccant to hold moisture and a
filtration medium to catch particles. In a modern solid-core drier the core is
a moulded block of desiccant that filters as well as dries, usually backed by a
polyester filter mat and held against the shell by a spring.

The desiccants each have a job:

| Desiccant | Good at | Notes |
|---|---|---|
| Molecular sieve | Holding water strongly, even when warm | Pore size is chosen so water is adsorbed while refrigerant molecules are not |
| Activated alumina | Holding water and adsorbing acid | Common in blends and in clean-up driers |
| Silica gel | Holding water | Cheaper; less able to hold water at higher temperatures |

Factory-assembled and factory-charged package units are evacuated and dehydrated
to a high standard, so they may be supplied with only a simple filter-strainer
in the liquid line after the condenser or receiver. Once anyone opens that
system — or the moment a system is field-assembled and brazed on site — a proper
filter-drier becomes essential. Use only the types the equipment manufacturer
approves, particularly on systems using POE oil and HFC or A2L refrigerants,
because the wrong desiccant can break down and cause the problem it was meant
to prevent.

### Sizing and selection

Select on four things at once:

1. **Refrigerant and oil** — the drier must be approved for both.
2. **System capacity in kW**, against the maker's flow rating, which is quoted
   for an acceptable pressure drop.
3. **Line size and connection type** — flare, solder or flanged, and whether
   cores are replaceable.
4. **Moisture capacity**, in the maker's units, matched to the system charge
   and how wet the system is likely to be.

Going one size up on flow rating is cheap insurance; going undersized costs
capacity every hour the plant runs.

### Where to fit it

Some manufacturers suggest putting the drier inside the refrigerated space,
close to the evaporator, on the grounds that a cold desiccant holds close to
twice as much moisture as a warm one. That is true, and it is still generally
the wrong choice. The safer position is outside the refrigerated space, near
the condensing unit, for two reasons:

- A cold drier holds so much moisture that the normal warning sign — an
  ice-blocked metering device — never appears, so nobody knows there is a
  problem until acid corrosion is already severe.
- If the drier is allowed to warm up during defrost, a long off period, a power
  failure or maintenance, it releases at least half of the moisture it was
  holding. That moisture arrives at the metering device and blocks it at exactly
  the worst time, when the room is already warm and everything is trying to pull
  down.

It is also, frankly, much easier to change a drier at the condensing unit than
inside a full freezer.

!SIM[See what a restricted drier does to the gauges](fault=restrictedDrier)

## Suction line filters and filter-driers

A suction filter protects the compressor rather than the metering device. Fit
one on any large field-erected installation where scale, carbon or debris could
be carried back to the compressor.

The critical case is after a motor burnout. Once a winding has burnt, acid and
carbon are all through the system, not just inside the compressor. Standard
practice is to fit a suction line filter-drier — designed for clean-up duty —
and leave it in for at least several days of operation, then keep checking. A
badly contaminated system may need several drier changes before the
contamination stops appearing. Once it is clean, the clean-up drier is normally
removed, because every pressure drop in the suction line costs efficiency.

**Pressure drop, and why you must measure it.** Suction pressure drop directly
lowers the pressure the compressor sees, so the low-pressure control setting has
to be adjusted to allow for it, and the drop itself must be known and watched.
The practical answer is to use driers with **replaceable cores** and to fit the
shell with pressure tappings at inlet and outlet.

**Worked example.** After a burnout clean-up, gauges on the suction filter-drier
tappings read 250 kPa in and 210 kPa out:

- Pressure drop = 250 − 210 = **40 kPa**

That is 40 kPa the compressor never gets back. If the drop was 10 kPa when the
cores were fitted and it is now 40 kPa and climbing, the cores are loading up
with contamination and it is time to change them — and to keep going until a
fresh set stops loading up at all. A liquid line drier gives you the same
message differently: measure the temperature either side, and a drier you can
feel a temperature drop across is restricting flow.

## On the job

- Never fit a drier without knowing the refrigerant and the oil.
- Fit the drier the right way round; the arrow points in the direction of flow.
- Keep the drier sealed until the moment you braze it in — a desiccant left open
  on the ute is a wet drier.
- Protect the body with a wet rag or heat-blocking paste while brazing, and keep
  the flame moving.
- After a burnout, plan for more than one drier change and tell the customer
  that up front.
- A cold liquid line drier and bubbles in the sight glass mean a restriction,
  not a shortage of gas.
`,
          quiz: [
            {
              q: "Why is a liquid line filter-drier normally fitted outside the refrigerated space rather than inside it?",
              options: [
                "Because a cold drier cannot adsorb any moisture at all",
                "Because a cold drier hides the usual warning signs and releases at least half its moisture whenever it warms up, blocking the metering device at the worst time",
                "Because the refrigerated space is too humid for the desiccant",
                "Because manufacturers never approve installation inside a coolroom",
              ],
              answer: 1,
              explain: "A cold drier really does hold roughly twice the moisture, but that is the trap: the ice-blockage warning never appears until acid damage is well advanced, and a warm-up during defrost or a power failure dumps that moisture back into circulation. Fitting it near the condensing unit is safer and far easier to service.",
            },
            {
              q: "A suction line filter-drier fitted after a burnout reads 250 kPa at the inlet tapping and 210 kPa at the outlet. What is the pressure drop, and what does it mean?",
              options: [
                "40 kPa — normal for a new core, no action needed",
                "40 kPa — the compressor sees a lower suction pressure, and a rising drop means the cores are loading with contamination",
                "460 kPa — the drier is fully blocked",
                "There is not enough information to calculate the drop",
              ],
              answer: 1,
              explain: "250 − 210 = 40 kPa, and that loss is suction pressure the compressor never gets back, so the LP control setting must allow for it. The number matters most as a trend: a drop that climbs from its as-fitted value says the cores are filling and should be changed, which is exactly why replaceable cores and pressure tappings are recommended.",
            },
            {
              q: "Where is a liquid line strainer normally fitted, and why?",
              options: [
                "In the discharge line, to catch carbon from the compressor",
                "Immediately upstream of expansion and solenoid valves, because their small orifices are what dirt blocks",
                "In the suction line at the evaporator outlet, to catch oil",
                "After the metering device, to catch anything the valve passes",
              ],
              answer: 1,
              explain: "The strainer protects the components with the smallest passages, so it goes just before them in the liquid line — which is also why many TXVs and solenoids have an integral screen. Fitting it downstream of the metering device would protect nothing.",
            },
            {
              q: "Which desiccant is chosen mainly because its pore size lets it adsorb water while leaving refrigerant molecules alone?",
              options: [
                "Silica gel",
                "Activated carbon",
                "Molecular sieve",
                "Polyester filter mat",
              ],
              answer: 2,
              explain: "Molecular sieve is manufactured with a controlled pore size so water is adsorbed selectively and held strongly, even at higher temperatures. Activated alumina is added where acid adsorption matters, and the polyester mat is a filter, not a desiccant.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "sight-glass-and-heat-exchangers",
          title: "Sight glass, moisture indicator and liquid-suction heat exchangers",
          minutes: 11,
          simple: "A sight glass is a little window in the liquid pipe: clear means solid liquid is flowing, bubbles mean something is wrong. Many have a coloured paper inside that changes colour if the system is wet, like a damp indicator card. A heat exchanger simply lets the cold gas going home cool the warm liquid going out.",
          refs: REFS,
          content: `
Two accessories in this group cost very little and tell you, or save you, a
great deal: the liquid line sight glass with its moisture indicator, and the
liquid-suction heat exchanger.

## Sight glass and moisture indicator

A sight glass — the makers often call it a visual liquid indicator — is a small
sealed window fitted in the liquid line. Through it you see whether the line is
running full of liquid. On a multi-evaporator system a sight glass in each
branch line tells you what is happening in that branch, which a single glass at
the condensing unit cannot.

Fit it in the liquid line where the liquid should be solid: downstream of the
drier and close to the metering device is the most informative position,
because it then reports the condition of the liquid *as the valve receives it*.
A glass fitted before the drier tells you nothing about a restricted drier.

### Reading it honestly

Bubbles mean vapour in a line that should be full of liquid. What they do
**not** tell you is why:

| What you see | Likely causes |
|---|---|
| Steady stream of bubbles | Undercharge; restriction in the drier or strainer; head pressure too low; too little subcooling for the liquid line lift |
| Occasional bubbles after a big load change | Normal transient while the TXV catches up |
| Clear glass | Solid liquid — but this proves only that liquid is solid, not that the charge is correct |
| Flashing that clears when the condenser is shaded or cooled | Head pressure control or non-condensables |

That last row in the table is the point. **A clear sight glass is not proof of a
correct charge.** An overcharged system runs a clear glass all day, with high
head pressure and a receiver backed up. The proper diagnosis is measured
subcooling and superheat, with the sight glass as supporting evidence.

!FIG[subcool-measure]

### The moisture indicator

Most sight glasses now include a chemically treated element visible through the
window that changes colour according to the moisture dissolved in the
refrigerant. The colour key is printed on the ring around the glass, and the
general convention is green for dry and yellow for wet, with a caution colour
between. Three things to know:

- The element responds to **moisture in the refrigerant**, in parts per million,
  and the ppm considered acceptable depends on the refrigerant and the system.
  Always read the ring on that particular glass.
- It takes time to respond — allow the system to run, typically for hours
  rather than minutes, before believing a colour change after a drier change.
- A wet indication means fit a drier or change the cores, then re-check. It does
  not mean the system will be dry tomorrow simply because you changed the drier
  today.

If you have just evacuated a system and want to know whether it is dry, do not
wait for a colour: the standing vacuum test is the direct measurement.

!FIG[vacuum-decay]

## Liquid-suction heat exchangers

A liquid-suction heat exchanger puts the warm liquid line and the cold suction
line in thermal contact — as a tube-in-tube coil, a shell-and-coil vessel, or
brazed plate on larger plant. Heat flows from the liquid into the suction
vapour. Nothing is added or removed from the system; the heat is simply moved
from where it hurts to where it helps.

Three benefits:

1. **Subcooling the liquid.** Extra subcooling means more of the liquid arriving
   at the TXV is genuinely liquid, no flash gas in the liquid line, and a
   greater refrigerating effect per kilogram circulated.
2. **Boiling off residual liquid in the suction line.** Any droplets that get
   past the evaporator are vaporised before they reach the compressor. That is
   real protection for a machine that cannot tolerate liquid.
3. **Guaranteeing dry suction gas** into the compressor, which stabilises TXV
   control at part load.

The cost is that the suction gas arrives at the compressor hotter. Higher
suction superheat means higher discharge temperature, higher specific volume,
and — on some refrigerants — a compressor running hot enough to break down the
oil.

| Refrigerant family | Liquid-suction heat exchanger |
|---|---|
| R134a, R404A/R507 medium and low temperature | Usually beneficial; commonly fitted |
| R22 and similar higher discharge temperature refrigerants | Marginal; check discharge temperature |
| Ammonia | Not used for this purpose — discharge temperatures are already high |

So the rule is: fit one where floodback risk or liquid line flashing is the
problem, and where the refrigerant tolerates the extra superheat. Then verify by
measuring discharge temperature at the compressor, not by assuming.

## On the job

- Read the sight glass after the system has settled, not thirty seconds after
  start-up.
- Bubbles plus a cold, sweating drier equals restriction, not undercharge —
  adding gas will make it worse.
- Never charge to a clear sight glass alone; confirm with subcooling.
- Keep the glass and the indicator ring clean and readable; a glass nobody can
  see through has no value.
- If a heat exchanger has been added and the compressor now runs hot, measure
  the discharge temperature and be prepared to remove it.
`,
          quiz: [
            {
              q: "A technician sees a steady stream of bubbles in the sight glass and adds refrigerant until the glass clears. What is the risk in that approach?",
              options: [
                "None — a clear sight glass always indicates a correct charge",
                "The bubbles may be caused by a restriction or low head pressure, so charging can leave the system badly overcharged",
                "The added refrigerant will make the moisture indicator read wet",
                "Adding refrigerant always lowers head pressure",
              ],
              answer: 1,
              explain: "Bubbles mean vapour where there should be liquid, and undercharge is only one cause — a restricted drier, low head pressure, non-condensables or too little subcooling for the liquid lift all do the same. Confirm with measured subcooling; an overcharged system also shows a perfectly clear glass.",
            },
            {
              q: "Where does a sight glass give the most useful information?",
              options: [
                "Immediately after the condenser, before the drier",
                "In the suction line near the compressor",
                "In the liquid line downstream of the drier, close to the metering device",
                "In the discharge line",
              ],
              answer: 2,
              explain: "Downstream of the drier and near the valve, the glass shows the condition of the liquid as the metering device actually receives it — which means a restricted drier shows up as bubbles. Upstream of the drier it would look clear no matter how blocked the drier was.",
            },
            {
              q: "What is the main disadvantage of fitting a liquid-suction heat exchanger?",
              options: [
                "It reduces the refrigerating effect per kilogram of refrigerant",
                "It raises suction superheat and therefore discharge temperature, which some refrigerants cannot tolerate",
                "It introduces moisture into the suction line",
                "It requires an increase in the system refrigerant charge",
              ],
              answer: 1,
              explain: "Moving heat from liquid to suction gas increases refrigerating effect and protects against floodback, but the vapour entering the compressor is hotter, so discharge temperature rises. On refrigerants that already run hot, that can break down the oil, so discharge temperature must be checked rather than assumed.",
            },
            {
              q: "A moisture indicator shows wet immediately after a drier change. The correct interpretation is:",
              options: [
                "The new drier is faulty and must be replaced at once",
                "The indicator is slow to respond; let the system run, then re-read before deciding",
                "The refrigerant is contaminated and must be recovered",
                "The indicator only reads moisture in the oil, so it can be ignored",
              ],
              answer: 1,
              explain: "The element responds to moisture dissolved in the refrigerant and takes time — usually hours of running — to reflect the effect of a new drier. Reading it too soon leads to unnecessary work. If you need a direct answer about dryness after evacuation, use a standing vacuum test instead.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "receivers-accumulators-surge-drums",
          title: "Receivers, suction accumulators and surge drums",
          minutes: 13,
          simple: "These are three tanks that do three different jobs. The receiver on the hot side stores spare liquid, the accumulator on the cold side catches liquid before it can smash the compressor, and the surge drum is just extra room in the suction pipe so the machine does not keep starting and stopping every few seconds.",
          refs: REFS,
          content: `
Vessels look alike and are constantly confused with each other. Learn what each
one is for and where it sits and you will never mix them up again.

| Vessel | Side of the system | Job |
|---|---|---|
| Liquid receiver | High side, after the condenser | Stores liquid; allows pump-down; absorbs charge changes with load |
| Suction accumulator | Low side, before the compressor | Traps liquid refrigerant and oil, meters them back safely |
| Surge drum / equaliser tank | Low side, in the suction line | Adds volume so suction pressure rises slowly and the compressor stops short-cycling |

## Liquid receivers

A receiver is a pressure vessel between the condenser outlet and the liquid
line. It gives the system somewhere to put liquid when the load changes, and it
lets you pump the whole charge into one place for service.

- The **inlet valve** carries the connection from the condenser and normally has
  a tapping for the relief device.
- The **outlet valve** — the king valve — has a drop tube reaching to the bottom
  of the vessel so it draws liquid, not vapour, whatever the level is.
- The vessel must be rated and stamped for the pressures involved.

Sizing matters. The receiver must hold the whole operating charge with vapour
space left over — as a working rule it should never be liquid full at the
highest liquid temperature it will see, or there is no room for expansion and
the relief device becomes the only protection. It also must not be so oversized
that the system needs a huge charge just to keep a level in it.

Front-seat the king valve with the compressor running and the low side pumps
down into the receiver: that is how you isolate an evaporator, a drier or a TXV
without recovering the charge. Watch the low-pressure gauge and stop the
compressor before it goes into deep vacuum.

## Suction line accumulators

Liquid refrigerant entering a compressor is the fastest way to destroy it.
Reciprocating compressors cannot compress liquid, so the valve plate, the rods
or the head break. Even where the machine survives the slug, liquid washes the
oil out of the bearings.

An accumulator is a vessel in the suction line, close to the compressor, that
receives whatever comes down the suction line, lets the liquid drop to the
bottom, and passes only vapour on to the compressor.

**How it works.** The outlet pipe inside is bent into a U so its opening is up
near the top of the vessel: liquid cannot be picked up until the vessel is
practically full. At the bottom of the U is a very small hole — around a
number 80 drill size — which continuously draws a trickle of oil, and a little
liquid refrigerant, back into the suction stream. That is the clever part:

- Oil that would otherwise sit in the bottom of the vessel forever gets back to
  the crankcase.
- The liquid that comes with it is metered in so slowly that it evaporates in
  the suction line before it reaches the compressor.

Where large liquid quantities are expected, the liquid line may be wound around
the lower part of the accumulator in several turns, so the warm liquid helps
boil off what is lying in the vessel. On systems that never return much liquid,
that refinement is unnecessary.

**Where an accumulator is essential:**

- **Heat pumps using a TXV**, because after a reversal the valve cannot control
  the flow for a period and liquid comes straight back.
- **Any system on hot gas defrost.** Hot vapour pushed into a coil full of
  liquid drives that liquid into the suction line. Termination is dangerous too,
  because a coil can fill with condensed liquid during defrost and dump it when
  cooling restarts.
- **Systems with large charges and several evaporators and refrigerant
  controls**, where any one control leaking through can flood the suction line.

>! Never rely on an accumulator to cover for a system that floods back. It is
>! protection, not a cure. A blocked oil return hole turns the accumulator into
>! an oil trap and starves the compressor of oil, and a vessel full of liquid
>! will eventually pass liquid on. If you find an accumulator running cold and
>! sweating all over on a system that should have dry suction gas, find the
>! reason — TXV, defrost termination, coil airflow or charge.

## Surge drum or equaliser tank

The surge drum has the least demanding design of any component in the system.
Its only job is to increase the volume of the low side so that vapour leaving
the evaporators cannot raise suction pressure too quickly and short-cycle the
compressor.

It exists for one situation: short, heavy loads. The classic case is beer
cooling with instantaneous beverage coolers. The compressor has to be sized for
the busiest hour or two of the day, so for the rest of the day it is wildly
oversized. Pour two or three glasses and the vapour produced would be enough on
its own to raise the suction pressure to the cut-in setting — so the compressor
would run for a few seconds, cut out, and do it again all night.

Put a large vessel — commonly a steel drum — in the suction line and the same
vapour barely moves the pressure. In practice, the aim is that it takes the
vapour from ten or twelve glasses to raise the pressure to cut-in, and that the
compressor then runs for at least a minute to pump the drum out again.

**Sizing rule of thumb:** about 50 litres of drum volume per kilowatt of motor
power.

**Worked example.** A beverage cooling installation with a 1.5 kW compressor
motor:

- Volume = 50 L/kW × 1.5 kW = **75 litres**

So a 75 litre vessel is about right. The only other design requirements are:

- It must be strong enough for the highest pressure it could ever see — think
  of a stopped system standing in the sun on a 45 °C day — and must carry the
  Australian Standards pressure test stamp like any other refrigeration vessel.
- The outlet must be positioned so that oil cannot collect in the drum. Whether
  the drum is mounted overhead or at ground level, the piping is arranged so
  that oil returning from the evaporators flows on to the compressor and not
  into the drum.

>! A surge drum is not a suction accumulator, and an accumulator is not a surge
>! drum. The drum is deliberately in the flow path to add volume; the
>! accumulator is deliberately designed to separate and hold back liquid and
>! oil. Substituting one for the other gives you either a short-cycling system
>! or a compressor full of liquid.

## On the job

- Identify vessels by where they are piped, not by their shape.
- On any accumulator, the tiny oil return hole is the first thing to suspect
  when oil goes missing from the crankcase.
- Pump down into the receiver rather than recovering, when the job allows it —
  it is faster, and it keeps the charge in the system.
- Never leave a receiver liquid full; check level glasses and charge records.
- On a beverage installation with a surge drum, count the run time. Runs of a
  few seconds mean the drum is undersized, bypassed or the controls are wrong.
`,
          quiz: [
            {
              q: "What is the purpose of the very small hole at the bottom of the U-tube inside a suction accumulator?",
              options: [
                "To drain the vessel completely during the off cycle",
                "To meter oil, and a small amount of liquid refrigerant, back into the suction stream slowly enough that the liquid evaporates before reaching the compressor",
                "To equalise pressure between the accumulator and the receiver",
                "To allow the vessel to be evacuated during service",
              ],
              answer: 1,
              explain: "Oil arriving with the returning liquid would otherwise stay in the bottom of the accumulator forever and the compressor would run short of oil. The hole is sized so the trickle of liquid that comes with the oil boils off in the suction line, giving oil return without liquid slugging.",
            },
            {
              q: "A beverage cooling system with a 1.5 kW compressor motor needs a surge drum. Using the usual rule of thumb, what size?",
              options: [
                "About 15 litres",
                "About 33 litres",
                "About 75 litres",
                "About 150 litres",
              ],
              answer: 2,
              explain: "The rule of thumb is roughly 50 litres per kilowatt of motor power, so 50 × 1.5 = 75 litres. The check is behavioural: it should take the vapour from ten or twelve glasses to reach cut-in, and the compressor should then run for at least a minute.",
            },
            {
              q: "Which of these systems most clearly needs a suction accumulator?",
              options: [
                "A small factory-charged split air-conditioner with a capillary tube",
                "A heat pump using a TXV, which floods liquid back for a period after each reversal",
                "A water-cooled chiller with a fixed load",
                "A beverage cooler with short, heavy loads",
              ],
              answer: 1,
              explain: "After a reversal the TXV cannot control flow for a period and liquid comes straight down the suction line. Hot gas defrost systems and large multi-evaporator systems are the other classic cases. A beverage cooler with short heavy loads needs a surge drum, which is a different vessel doing a different job.",
            },
            {
              q: "Why must a liquid receiver never be filled liquid full at its maximum liquid temperature?",
              options: [
                "The king valve drop tube would be submerged",
                "There would be no vapour space for the liquid to expand into, leaving the relief device as the only protection",
                "The condenser could not drain into it",
                "The pump-down cycle would take too long",
              ],
              answer: 1,
              explain: "Liquid is nearly incompressible, so a vessel with no vapour space produces enormous pressure rises from small temperature rises. Sizing the receiver to hold the full operating charge with vapour space left is a basic safety requirement; the drop tube is meant to be submerged, which is how it draws liquid rather than vapour.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "oil-separators-and-compressor-accessories",
          title: "Oil separators, mufflers, vibration eliminators and crankcase heaters",
          minutes: 12,
          simple: "The last group of accessories all look after the compressor: one catches the oil it throws out and sends it back, one quietens the thumping of its discharge, one stops its shaking travelling down the pipes, and one keeps its oil warm so refrigerant does not sneak in and thin it while the machine is off.",
          refs: REFS,
          content: `
Every compressor throws a little oil into the discharge line, vibrates, makes
noise, and cools down when it stops. Four accessories deal with those four
facts.

## Oil separators

Oil leaves the compressor as a mist in hot discharge gas. On a small system with
well-designed piping, that oil finds its way around the circuit and back through
the suction line. On other systems it does not come back fast enough, and the
crankcase runs low while the evaporator fills with oil that ruins its heat
transfer.

An oil separator is a vessel in the discharge line, as close to the compressor
as practicable. Hot gas enters, is forced to change direction and slow down, and
the oil droplets — much denser than the vapour — separate out and fall to the
bottom. A float valve at the bottom opens when enough oil collects and returns
it to the crankcase through a small return line.

Common designs:

| Type | Separation method | Typical duty |
|---|---|---|
| Baffle or mesh impingement | Gas slows and changes direction; droplets impinge on baffles or a wire mesh | General commercial |
| Centrifugal | Gas is spun; oil is thrown to the wall | Larger systems, screw compressors |
| Coalescing | Fine filter element merges the mist into drops | High-efficiency duty, screws, low-temperature packs |

Fit one where oil return is genuinely difficult:

- Low-temperature systems, where cold oil is thick and moves poorly.
- Long pipe runs, or evaporators well below the compressor.
- Flooded and pumped systems, where there is no vapour velocity to carry oil
  back.
- Multiple compressors on a common rack, where an uneven oil split will starve
  one machine.

Practical points: the oil return line must be free to drain and is often fitted
with a sight glass and a small strainer; some separators carry a heater so that
refrigerant does not condense in the oil sitting in the separator during a long
off cycle and get returned as liquid; and an oil separator is not a substitute
for correct pipe sizing, traps and risers. If the piping is wrong, the
separator merely delays the failure.

## Discharge mufflers

A reciprocating compressor delivers gas in pulses, one per cylinder per
revolution. Those pulses are noise, and they also shake the pipework. A
discharge muffler is a shell containing baffles or perforated tubes that break
up the pulsation, fitted in the discharge line close to the compressor.

Two installation rules matter more than the choice of muffler:

- Mount it so that oil cannot collect inside — normally with the axis vertical,
  or as the maker specifies. A muffler that fills with oil is an oil trap that
  slugs the compressor with liquid oil at start-up.
- Support the discharge pipework properly. A heavy muffler hanging on a copper
  line is a fatigue failure waiting to happen.

## Vibration eliminators

Compressors shake, and copper pipe transmits that shake — and the noise with it
— right through a building. A vibration eliminator (flexible connector) is
fitted in the suction and discharge lines to break that path.

- On small units with soft copper lines, a simple coil of tubing gives adequate
  flexibility and costs nothing.
- On larger compressors, a flexible metallic hose is used: a corrugated
  stainless or bronze bellows inside a wire braid, with copper or steel ends for
  welding or brazing.

**Installation is what makes or breaks them.** A bellows is designed to flex
from side to side. It is not designed to be repeatedly compressed or stretched
along its axis, and it will fatigue and split if it is. So the eliminator is
installed **parallel to the compressor crankshaft and at right angles to the
direction of the vibrating movement** — on a reciprocating machine, at right
angles to the discharge valve outlet. Get it the wrong way round and the
bellows is pumped in and out on its own axis every revolution.

Also: do not use a flexible connector to pull a misaligned pipe into place. It
is there to absorb vibration, not to correct bad pipework, and a connector held
in tension has already lost most of its life.

## Crankcase heaters

Refrigerant vapour migrates to the coldest part of a system. When the
compressor sits idle in a cold plant room, or outside overnight, while the
evaporator sits inside a warm building, the coldest part is the crankcase.
Vapour migrates there, condenses, and is absorbed into the oil. The result at
the next start is:

- Oil so diluted with liquid refrigerant that it will not lubricate.
- Violent foaming as the pressure drops on start-up, so oil is pumped out of the
  crankcase in seconds.
- Liquid slugging and bearing damage.

The situations that cause it are common in Australia: air-conditioners left off
through a cold winter with the indoor coil in a heated room, and coolrooms and
cabinets inside a warm building whose condensing units sit outside on cold
ground.

A crankcase heater is a small electric heater that keeps the oil warmer than the
rest of the system, so refrigerant will not condense into it. Three forms are
used:

- **Wrap-around belt** clamped around the compressor shell — common on sealed
  units.
- **Insertion type** pushed into a well in the crankcase, where the compressor
  has a fitting for it.
- **Plate type** mounted underneath the crankcase.

Wiring: the heater is intended to operate during the **off** cycle. It is
normally connected through a normally closed contact in the starter, so it is
switched off while the compressor runs.

>! Fit only the heater the compressor manufacturer specifies. An oversized
>! heater is not extra insurance — it drives up oil temperature and motor
>! temperature, degrades the oil and creates a new set of failures. Treat
>! heater circuits as live even when the plant looks stopped: on a correctly
>! wired system the heater is energised precisely when the compressor is not
>! running, so isolate and prove dead before touching one.

>! After a long shutdown, or on a new installation, energise the crankcase
>! heater and let it warm the oil for the period the manufacturer specifies —
>! commonly several hours, often overnight — before starting the compressor. A
>! machine started with a crankcase full of liquid refrigerant can be destroyed
>! on the first revolution.

## On the job

- If oil keeps disappearing from a crankcase, check pipe sizing, traps and
  risers before blaming the compressor; then consider a separator.
- Check the oil return line from a separator is warm and flowing — a blocked
  return makes the separator useless.
- Look at how a muffler and a vibration eliminator are mounted, not just that
  they are fitted.
- A compressor that has been off in cold weather with no working crankcase
  heater is a compressor about to fail. Check heater continuity and current on
  every winter service.
- Every one of these accessories is cheaper than the compressor it protects.
`,
          quiz: [
            {
              q: "A low-temperature system with long pipe runs keeps losing oil from the crankcase into the evaporator. Which accessory addresses this, and what is its limitation?",
              options: [
                "A discharge muffler; it cannot handle low temperatures",
                "An oil separator; it returns oil from the discharge gas, but it does not fix incorrect pipe sizing, traps or risers",
                "A suction accumulator; it only works on heat pumps",
                "A crankcase heater; it must be oversized for low-temperature duty",
              ],
              answer: 1,
              explain: "The separator takes oil out of the discharge gas and floats it back to the crankcase, which is exactly right for low-temperature systems and long runs where oil moves poorly. But if velocities are wrong because the pipework is wrong, the separator only delays the problem — the piping still has to be right.",
            },
            {
              q: "How should a bellows-type vibration eliminator be installed on a reciprocating compressor?",
              options: [
                "In line with the direction of vibration, so it can absorb the movement by compressing",
                "Parallel to the crankshaft and at right angles to the direction of the vibrating movement, so it flexes sideways",
                "Vertically, so oil drains out of it",
                "Under tension, to keep it straight",
              ],
              answer: 1,
              explain: "A bellows tolerates side-to-side flexing but fatigues quickly under repeated compression or stretching along its axis. Mounting it parallel to the crankshaft and at right angles to the discharge valve outlet means the vibration flexes it sideways. Using one under tension to pull misaligned pipe together is a common and destructive mistake.",
            },
            {
              q: "Why is a crankcase heater wired through a normally closed contact in the compressor starter?",
              options: [
                "So it only operates when the compressor is running and generating heat",
                "So it operates during the off cycle, when refrigerant would otherwise migrate and condense into the oil",
                "To limit the current drawn by the compressor motor",
                "To provide a safety interlock for the high-pressure control",
              ],
              answer: 1,
              explain: "Migration into the coldest part of the system is an off-cycle problem, so the heater is needed exactly when the compressor is stopped and is switched off while it runs. Leaving it on during running would simply add unwanted heat to the oil.",
            },
            {
              q: "What is the risk in fitting a larger-than-specified crankcase heater?",
              options: [
                "The oil never gets warm enough to drive off refrigerant",
                "High oil and motor temperatures, degraded oil and a new set of failures",
                "It will trip the compressor overload every off cycle",
                "There is no risk; bigger is safer for migration",
              ],
              answer: 1,
              explain: "The heater is sized to keep the oil a little warmer than the rest of the system, not to cook it. Excess heat degrades the oil and raises motor temperature, trading a migration problem for a lubrication and insulation problem. Always fit the heater the compressor manufacturer specifies.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
