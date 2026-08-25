/* =========================================================================
   Course content, module 115 — Electrical testing and fault-finding.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 15 — Electrical testing.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 15, Electrical testing",
    "AS/NZS 3000 (the Wiring Rules) — earthing, protection, isolation and verification of electrical installations",
    "AS/NZS 3017 — verification guidelines: continuity, insulation resistance, polarity, earth fault loop impedance, RCD operation",
    "AS/NZS 4836 — safe working on or near low-voltage electrical installations and equipment (isolation, testing for dead)",
    "AS/NZS 3760 — in-service safety inspection and testing of electrical equipment (test and tag); AS/NZS 61010 meter safety categories",
  ];

  const MODULES = [
    {
      id: "v1-electrical-testing",
      stream: "v1",
      title: "R1.15 · Electrical testing and fault-finding",
      blurb: "How refrigeration circuits fail electrically, how to isolate and prove them dead, and how to use volt, amp, ohm and insulation testers to find the fault and its cause.",
      lessons: [

        /* ============================================================== */
        {
          id: "three-ways-a-circuit-fails",
          title: "The three ways an electrical circuit fails",
          minutes: 12,
          simple: "Almost every electrical fault you will ever meet is one of three things: the path is broken so nothing flows, the current has found a short cut to earth, or part of a coil has been bypassed so it draws far too much current. Think of a garden hose: cut through, leaking out the side, or shortened so the pressure blows it apart.",
          refs: REFS,
          content: `
Fault-finding on refrigeration plant looks intimidating because a machine has so
many parts. It becomes manageable the moment you realise that an electrical
circuit only has three ways to misbehave. Everything you will ever chase with a
meter — a fridge that will not start, a contactor that hums, a compressor that
trips its overload every four minutes — reduces to one of those three, or to a
mechanical or refrigeration fault dressed up as an electrical one.

Being good at this needs five things: you know the circuitry, you understand how
motors, relays, capacitors and contactors work, you know what actually breaks,
you know which system faults cause electrical breakdown, and you own the right
instruments. The first two came from earlier modules. This module is the last
three.

## Fault type 1 — the open circuit

An **open circuit** is a break in the path. No current can flow, so nothing
runs. Open circuits come from four places:

- **A blown fuse or tripped circuit breaker.** Remember that this is a *symptom*, not a cause. Something drew too much current: an overload, a short, a shunted winding, or a supply disturbance.
- **A switch that should be closed but is open.** This is the one that separates refrigeration technicians from electricians. A thermostat, low-pressure control, high-pressure cut-out or oil-failure switch is *supposed* to open. If the thermostat has lost its gas charge, or the system has lost refrigerant and the LP control has cut out, or head pressure has tripped the HP switch, the circuit is open for a refrigeration reason, not an electrical one.
- **A broken or disconnected wire.** Poor workmanship, vibration and flexible cables that were never clamped are the big three. Vibration works a terminal screw loose over months; the joint heats, oxidises and finally opens.
- **A burnt-out or broken conductor inside a resistance** — a motor winding, a solenoid coil, a defrost heater element. An open winding very often follows a short or a shunt: the high current burns the wire through and the fault "converts" from a short into an open.

## Fault type 2 — the short or short to earth

A **short** is an unintended low-resistance path. When that path runs to the
frame, the earth conductor, water or a person, it is a **short to earth** (also
called a ground fault). Causes:

- Water leaking into junction boxes and terminal strips — rain, condensate dripping off a suction line, or condensation forming because the box is in a cold location.
- Terminal screws or wire tails working loose and touching the frame.
- Insulation breakdown on live conductors from vibration, physical damage or chemical corrosion — a big one inside contaminated sealed systems.
- Windings running hot and expanding until they touch the frame and the enamel breaks down.

>! A short to earth is the fault that kills people. If the short is near the
>! neutral end of an appliance, the machine may keep running and give you no
>! clue at all. The earth conductor is carrying the fault current away. If that
>! earth path is broken, corroded or undersized, the frame sits at close to
>! supply voltage, and the next person to touch it while standing on damp
>! concrete becomes the earth path. Never dismiss a nuisance-tripping RCD as
>! "just a sensitive safety switch".

## Fault type 3 — the shunted winding

The third fault is the sneakiest, because the machine still runs. In a
**shunted** coil or winding, insulation between adjacent turns has broken down
so current jumps across and bypasses part of the winding. The winding is
electrically shorter than it was designed to be, so its resistance is lower.
Causes are much the same list: vibration rubbing the varnish off the wire,
physical damage during assembly or service, chemical attack from moisture and
acid inside a contaminated hermetic unit, and sustained high winding
temperature from poor cooling, high voltage or overload.

The consequence is the point. Lower resistance means higher current. The wire
was only ever sized for its design current, so it now overheats, cooks its own
insulation further, and eventually burns out — unless a correctly sized overload
or fuse gets there first. Either way the coil has to be replaced or rewound.

### A word on Ohm's law in AC coils

You will be tempted to predict the new current with amps = volts / ohms. In an
AC coil that is not exact, because inductance produces a back EMF that opposes
the incoming supply, so impedance rather than plain resistance sets the current.
The *direction* of the effect is still reliable: any drop in winding resistance
means a rise in current. A winding designed for 2.5 A that is now drawing 3.4 A
with normal supply voltage and normal load is telling you something is shunted.

## Reading the fault back to a cause

| What you find | Typical electrical cause | Typical underlying cause |
|---|---|---|
| Nothing runs, fuse intact | Open control switch | Lost charge, lost gas in thermostat bulb, HP trip |
| Fuse or breaker blows instantly | Short to earth or between phases | Water in a terminal box, chafed cable, burnt motor |
| Overload trips after some minutes | Shunted winding, high current | Contamination, high head pressure, low volts |
| Coil buzzes, contactor chatters | Low coil voltage, open holding path | Voltage drop, poor terminations |
| Machine runs but the RCD trips | Leakage to earth | Damp heater element, wet junction box |

## Why motors fail

Fit a new compressor without answering this and you will fit another one. The
recurring causes are:

- **Low or high supply voltage** — check the nameplate against measured supply. Low voltage means insufficient starting torque; high voltage means high current and heat.
- **Phase unbalance** on three-phase, which must never exceed 2%.
- **Breakdown of winding insulation**, on sealed units most often driven by system contamination.
- **Insufficient cooling** — many suction-cooled hermetic motors will burn out if operated in a vacuum, because there is no cool vapour flowing over the windings.
- **Compressor overload or tightness** — a refrigeration fault presenting electrically.
- **Faulty windings** from manufacture or, more commonly, from a poor rewind.
- **Faults in relays, capacitors or wiring connections.**
- **Insufficient lubrication or bearing tightness** — including oil diluted by liquid refrigerant returning to the crankcase.

### Reading a trouble chart

Service manuals summarise single-phase motor symptoms against a numbered list of
causes: open circuit in the line connection; open motor winding; centrifugal
switch or relay contacts not closing; defective capacitor; open start winding;
faulty centrifugal starting switch or relay; motor overloaded; run winding
shorted or earthed; one winding open-circuited. The pattern to learn is this: a
motor that **will not start on its own but runs in either direction once spun by
hand** has lost its starting circuit — start winding, relay or start capacitor.
A motor that **starts but heats rapidly or blows fuses** has an overload or a
winding shorted to earth.

## What to remember

- Three faults only: open, short to earth, shunted. Name the one you have before you start pulling covers off.
- A blown fuse is a symptom. Find what drew the current.
- An open switch in a refrigeration circuit is very often a healthy control reporting a refrigeration problem.
- Lower winding resistance always means higher current, heat and eventually burn-out.
- The most dangerous fault is the one that changes nothing you can see.
`,
          quiz: [
            {
              q: "A hermetic compressor draws 3.6 A where the nameplate says 2.5 A, with correct supply voltage and normal head pressure. Which fault does this best fit?",
              options: [
                "An open circuit in the run winding",
                "A shunted run winding with reduced resistance",
                "A blown fuse in the supply",
                "An open thermostat contact",
              ],
              answer: 1,
              explain: "Insulation breaking down between turns shortens the winding electrically, lowering its resistance and raising the current. An open circuit or open thermostat would mean no current at all, and a blown fuse would stop the motor rather than let it draw high current.",
            },
            {
              q: "Why is a short to earth at the neutral end of an appliance especially dangerous?",
              options: [
                "It always blows the fuse instantly, damaging the switchboard",
                "It reverses the direction of current in the motor",
                "The appliance may keep working normally, so the fault stays hidden until the earth path fails",
                "It converts single-phase supply into three-phase",
              ],
              answer: 2,
              explain: "Near the neutral end there is little voltage difference to drive fault current, so the machine runs on and nothing obvious happens. The earth conductor is the only thing holding the frame safe; if it corrodes or breaks, the frame becomes live and a person completes the circuit.",
            },
            {
              q: "A low-pressure control has opened and stopped a compressor. What is the correct conclusion?",
              options: [
                "The control has failed and must be replaced",
                "The control has done its job and is reporting a possible refrigerant or load problem",
                "The circuit has a shunted winding",
                "The supply voltage is too high",
              ],
              answer: 1,
              explain: "An LP control opening is a normally-closed switch behaving normally. Treat it as information about system pressure — low charge, restriction, or low load — not as a component to bypass. Shorting it out without checking pressures can run a compressor with no refrigerant to cool or lubricate it.",
            },
            {
              q: "Why does an open circuit in a motor winding often follow a shunt or short?",
              options: [
                "Because the overload device physically cuts the winding",
                "Because a shunted winding draws high current, overheats and eventually burns the conductor through",
                "Because shunted windings always reverse motor rotation",
                "Because back EMF pushes the wire apart",
              ],
              answer: 1,
              explain: "The shunt lowers resistance, current climbs, the undersized-for-that-current wire runs hot and finally melts open. So the same failure can present as a short one day and an open circuit the next — which is why you measure rather than assume.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "safe-testing-isolation-and-prove-test-prove",
          title: "Working safely: isolation, lock-out and prove–test–prove",
          minutes: 12,
          simple: "Before you touch a wire you turn the power off, lock the switch off with your own padlock and tag, and then prove with a tester that the wires really are dead — and prove the tester still works afterwards. It is exactly like checking a gun is unloaded twice, with your own lock on the door so nobody can load it while your back is turned.",
          refs: REFS,
          content: `
This is the highest-risk work a refrigeration technician does. Refrigerant burns
and hurts; 230 V across the chest stops your heart. The routine below is not
paperwork — it is the sequence that keeps people alive, and it is required by
AS/NZS 4836 and by every employer's safe work method statement.

## Dead testing is the default

Work dead. Every test that can be done with the power off should be done with the
power off: continuity, resistance, insulation resistance, winding checks,
capacitor checks, polarity by continuity. Live testing is permitted only when the
test cannot be done any other way — measuring supply voltage, measuring running
current, measuring voltage drop across a suspect contact — and then only with the
right instrument, the right PPE and, where required, a competent person with you.

>! Never work live because it is quicker, because the customer wants the cool room
>! to stay running, or because the isolator is awkward to reach. Those are the
>! three reasons that appear in coronial findings. If a live test is genuinely
>! necessary, it is a deliberate decision with a risk assessment behind it, not a
>! default.

## Isolation, lock-out and tag-out

1. **Identify every supply.** Plant can have more than one: the main supply, a separate control-circuit supply, a crankcase heater fed from a different circuit, an interlocked fan, a UPS or a battery-backed controller. A machine is not isolated because the one switch you found is off.
2. **Shut down in an orderly way** — stop the plant on its own controls first where you can, so you are not opening a contactor under full load.
3. **Open the isolating switch**, and open it at a point that actually isolates the part you will work on.
4. **Lock it off with your own padlock**, through a lock-out hasp if more than one person is working. Multiple workers means multiple locks: nobody's lock comes off but their own.
5. **Attach a danger tag** with your name, your contact and the date. A tag alone is a message; a lock is a barrier. Use both.
6. **Prove dead** at the point of work, using the routine below.
7. **Discharge stored energy.** Motor-run and start capacitors hold a lethal charge after isolation. Discharge each set of terminals with a suitable resistive discharge tool, or an insulated screwdriver where that is the accepted practice on that equipment, and verify with a meter that the voltage has actually fallen. Variable-speed drives hold DC bus charge for minutes — obey the wait time printed on the drive.

>! A start capacitor can hold several hundred volts for a long time after the
>! plant is isolated, and a motor-run capacitor in an air-conditioner is capable
>! of stopping your heart. Discharge before you disconnect, every time, and
>! confirm the discharge with your meter rather than assuming it worked.

## Prove–test–prove: the routine for testing dead

The reason people get killed testing for dead is that their tester was faulty
and they did not know it. A flat battery, a broken lead or a blown internal fuse
all give the same reading as a dead conductor: nothing. So:

1. **Prove** the tester on a known live source — a proving unit, or a circuit you know is live. It must indicate.
2. **Test** the conductors you are about to work on. Test every combination: active to neutral, active to earth, neutral to earth, and on three-phase every phase to every other phase, each phase to neutral and each phase to earth.
3. **Prove** the tester again on the known source. It must still indicate.

Only after the second prove is the circuit dead. If the tester fails the final
prove, your "dead" reading meant nothing and the whole test is void.

Use a **two-pole voltage tester** or an approved voltage indicator for this, not
a multimeter set to volts if you can avoid it. A multimeter has high input
impedance and will happily display an induced "ghost" voltage from a nearby cable
— or, if a range switch is in the wrong position, display nothing at all on a
live conductor. Non-contact "volt sticks" are useful for a first look but are
never acceptable as the proof that a conductor is dead.

## Instruments that will not kill you

- **Category rating.** Meters and leads carry a CAT rating under AS/NZS 61010. CAT II covers appliance and socket-outlet circuits; CAT III covers fixed installation and distribution boards; CAT IV covers the origin of the installation. Work at a switchboard needs a CAT III or CAT IV instrument rated at or above the working voltage. A cheap CAT II meter used on a switchboard can flash over inside the meter and put an arc in your hand.
- **Leads and probes.** Shrouded plugs, finger guards, and probe tips no longer than they need to be. Replace damaged leads and cracked cases immediately — a cracked case is a path to the live parts inside.
- **Fuse protection.** Choose a meter with fused current ranges, and always replace a blown fuse with the identical type. A meter fitted with the wrong fuse can be destroyed, and can destroy your hand, if too much current reaches its shunts.
- **The classic mistake** is leaving the meter on the ohms or current range and then connecting it across a live supply. Get in the habit of returning the selector to volts, and the leads to the volt terminals, at the end of every test.
- **Care and calibration.** Meter movements are light and delicate; rough handling, damp and corrosive atmospheres will change the readings. Have instruments checked regularly — suppliers, large contractors and supply authorities will do it. Never store a battery-powered instrument for long periods with the batteries in place; leaking cells corrode the works.

## Meter limits worth memorising

| Limit | Typical value | What happens if you exceed it |
|---|---|---|
| Voltage between test terminals | 1000 V DC, 750 V AC | Damage to the meter, possible flashover |
| COM terminal with respect to earth | 500 V maximum | Safety limit — insulation may not withstand more |
| Low-current terminal | 400 mA between mA/uA and COM | Fuse blows, or shunts burn out |
| High-current terminal | 10 A between A and COM | Often unfused — the meter may be destroyed |

## On the job

- Multiple supplies, multiple isolations. Prove each one.
- One worker, one lock, one tag; and only that worker removes it.
- Prove–test–prove, in that order, every single time.
- Discharge capacitors and drive DC buses, then check the discharge with a meter.
- CAT-rated meter, undamaged leads, meter left on volts.
`,
          quiz: [
            {
              q: "You test a set of conductors and get 0 V on every combination. What must you do before treating them as dead?",
              options: [
                "Check the polarity of the supply at the switchboard",
                "Prove the tester again on a known live source",
                "Measure the insulation resistance of the circuit",
                "Fit a lock-out hasp to the isolator",
              ],
              answer: 1,
              explain: "A faulty tester reads zero on a live conductor exactly as it does on a dead one. Proving the tester after the test is what turns a zero reading into evidence. Locking off happens before testing, and insulation testing is a separate test on an already-dead circuit.",
            },
            {
              q: "Why is a high-impedance digital multimeter a poor choice as the primary instrument for testing for dead?",
              options: [
                "It cannot measure AC voltage accurately",
                "It can display induced ghost voltages, and a wrong range setting gives a misleading zero",
                "It has no fuse protection on the voltage ranges",
                "It only works on circuits under 50 V",
              ],
              answer: 1,
              explain: "High input impedance lets capacitively coupled voltage from adjacent cables show up as a reading, and a selector left on the wrong function reads nothing on a live conductor. A two-pole voltage tester loads the circuit slightly, which suppresses ghost voltages, and its indication is harder to misread.",
            },
            {
              q: "Two technicians will work on the same isolated chiller. What is correct lock-out practice?",
              options: [
                "The first technician locks off and the second relies on that lock",
                "A danger tag from each technician is sufficient without a lock",
                "Each technician fits their own padlock to a lock-out hasp on the isolator",
                "The site electrician holds a single key for both",
              ],
              answer: 2,
              explain: "Each person's lock protects that person, and the supply cannot be restored until the last lock is removed by its owner. Relying on someone else's lock means your safety depends on them remembering you are still inside the machine. A tag warns, but it does not physically prevent re-energisation.",
            },
            {
              q: "What is the maximum current a digital multimeter's high-current 'A' terminal is normally rated for, and why is care needed?",
              options: [
                "400 mA, because the range is always unfused",
                "10 A, and the range may be unfused so the meter can be destroyed",
                "20 A, protected by an M205 glass fuse",
                "1 A, limited by the COM terminal rating",
              ],
              answer: 1,
              explain: "The A terminal is typically limited to 10 A, and on many meters that range has no fuse or only a high-rupture-capacity one. The 400 mA figure belongs to the mA/uA terminal, which is normally protected by a small glass fuse of the M205 or 3AG type.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "meters-ranges-and-measurement-technique",
          title: "Meters, ranges and measurement technique",
          minutes: 12,
          simple: "Four instruments do nearly all refrigeration electrical testing: one measures pressure of the electricity (volts), one measures flow (amps), one measures how hard the path pushes back (ohms) and one squeezes high voltage against the insulation to see if it leaks. Getting an honest reading is mostly about the power being off when it should be, and your fingers being off the probe tips.",
          refs: REFS,
          content: `
Four instruments cover essentially all field electrical testing in refrigeration
and air-conditioning:

- the **voltmeter** — is the supply there, and is it the right size
- the **ammeter** — how much current is the machine actually drawing
- the **ohmmeter** — is the path continuous, and is the resistance right
- the **insulation tester or megohmmeter**, universally called a **megger** — is the insulation still holding the current inside the wires.

The first three are combined in every **multimeter**, and in the **clamp-on** or
**tong** testers built mainly for current but usually including volts and ohms.
The megger is a separate instrument because it generates a test voltage of 500 V
or 1000 V, far above anything a multimeter produces.

## Choosing and looking after a field instrument

For site work the meter must be rugged, safe, versatile, accurate, easy to read
and fuse-protected against misuse — particularly against being connected to a
live circuit while set on ohms. Accuracy demands very light internal movements,
which means rough handling, damp and corrosive atmospheres will slowly destroy
its honesty. Have your instruments checked on a regular cycle; a meter that
reads 8% low will send you chasing faults that do not exist and will let you sign
off on ones that do.

## Ranging: manual and auto

A manual-ranging meter requires you to choose the range. The rule is: **select the
highest range, or a range you know suits the value, then work down one range at a
time**. When a digital meter reaches full scale it flashes or shows **OL** —
select a higher range. Never exceed the manufacturer's stated current and voltage
limits while hunting for a range.

An auto-ranging meter chooses for you, starting high and stepping down. Most can
be locked to a range, which is worth doing when you already know the value and
do not want to wait through the sweep on every reading.

## Voltage measurement

A voltmeter goes **in parallel** — across the thing you are measuring. Before
connecting:

1. Plug the probes into the correct sockets, usually marked V-ohm and COM.
2. Set the function to voltage.
3. Choose the highest or the most suitable range if it is not auto-ranging.
4. Select AC or DC to suit what you are measuring.

### Why AC and DC are different settings

A digital module, like an analogue movement, can only work with a DC input. An
AC value has to be rectified to DC before the meter can display it. Choosing AC
does two things: it switches the rectifier into the path, and it changes the
calibration so the displayed number is a correct AC value.

Almost all voltmeters are calibrated to display the **RMS** value — the 230 V or
240 V mains figure is an RMS value. That calibration is only strictly correct for
a sine wave. Feed a plain averaging meter a chopped waveform from a variable-speed
drive output or an electronic speed controller and the reading will be wrong. A
**true-RMS** meter is the right tool wherever inverters and electronic controls
are involved, which today means most of the equipment you touch.

## Current measurement with a multimeter

A multimeter ammeter goes **in series**, so all the circuit current passes through
it. Plug the positive lead into the A terminal or the mA/uA terminal as
appropriate, negative into COM, select current, select the range, and select AC
or DC. The two separate current sockets exist so the low range can be protected
by its own small fuse — usually an M205 or 3AG glass type — while the high range
uses a high-rupture-capacity fuse, or none at all. In refrigeration work you will
almost always use a clamp meter instead, because it does not require breaking
into the circuit.

## Resistance measurement

The ohmmeter is battery powered. It sends its own small current through the
component and reads the resulting voltage back as ohms. Because of that:

- **The circuit must be dead.** Always.
- Plug into the V-ohm and COM terminals, select resistance, and on a manual meter select the lowest range that gives a reading.
- With the probes apart, the meter reads open circuit, usually shown the same way as over-range.
- With the probes touched together, the reading is the resistance of the leads — often a few tenths of an ohm to several ohms. On low-resistance work such as motor windings, note that figure and subtract it.
- **Do not hold both probe tips.** Your body goes in parallel with the component and pulls the reading down. Hold the insulated part only.
- **Watch for parallel paths.** A component measured in circuit may have other components across it, which again reads low. Disconnect at least one leg.
- **Watch for stored charge.** Voltage in the circuit — including from a charged capacitor — makes the resistance reading meaningless and can damage the meter or the circuit.

An older analogue ohmmeter uses a multiplier switch for high resistances: a
2000 ohm resistor read on the x100 range shows as 20 on the 0–500 scale. For
refrigeration motor windings you rarely need it, because single-phase motor
windings normally sit between about **1.5 and 80 ohms**. A digital auto-ranging
meter avoids the arithmetic altogether.

>! The most common mistake made by professionals and beginners alike is measuring
>! resistance with the power still on. Most digital meters have internal
>! protection, but the reading will be wrong, the circuit may be damaged, and on
>! a poorly protected meter you get an arc at the probe tips.

## Continuity buzzer and diode test

Most digital meters include an **audible continuity** function. The buzzer sounds
when the resistance is below a threshold — around 100 ohms is typical. It is
excellent for checking leads, terminations, coils and heater elements without
looking at the display, which matters when your head is inside a plant room.

Be careful: on some meters the buzzer shares the **diode** function, so the
display is in volts and the buzzer sounds when the probe-to-probe voltage is
below about 0.7 V. The diode range reads in volts, typically no more than 2 or
3 V, and an open junction reads the same as an open circuit on the ohms range.
Semiconductors, like everything else, are checked dead.

## Digital versus analogue

| Feature | Digital meter | Analogue meter |
|---|---|---|
| Display | Easy to read, usually shows polarity | Harder to read, some scales non-linear |
| Resolution | About 0.01% on a four-digit display | About 1% |
| Accuracy | Typically better than 1%, down to 0.001% | Generally no better than 2% |
| Voltmeter input resistance | Constant, about 10 Mohm | Varies with range |
| Response to a changing value | Slower — digits chase the value | Better — you watch the needle move |
| Electrical noise | Can pick up noise and read falsely | Largely unaffected |
| Reversed polarity | Reads correctly, shows a minus sign | Needle drives down-scale, movement may be damaged |

The practical conclusion: use a digital meter for almost everything, but keep an
analogue meter (or a digital bar-graph) for watching a value change — a capacitor
charging, a thermostat differential closing, a relay contact chattering.

## On the job

- Volts in parallel, amps in series, ohms with the power off.
- Highest range first on a manual meter, then step down.
- Zero out the lead resistance before measuring a 1.5 ohm run winding.
- True-RMS wherever an inverter or electronic control is involved.
- Fingers on the insulation, never on the probe tips.
`,
          quiz: [
            {
              q: "You measure a compressor run winding and read 2.4 ohms. Shorting the probes together reads 0.6 ohms. What is the winding resistance?",
              options: ["3.0 ohms", "2.4 ohms", "1.8 ohms", "0.6 ohms"],
              answer: 2,
              explain: "The lead resistance is in series with the winding, so subtract it: 2.4 - 0.6 = 1.8 ohms. On windings of only a couple of ohms this correction is a large fraction of the reading, which is exactly why you check the leads first on low-resistance work.",
            },
            {
              q: "A component measured in circuit reads lower than its specification. What should you suspect first?",
              options: [
                "The meter battery is flat",
                "Another component is in parallel with it, or you are holding both probe tips",
                "The meter is set to the diode range",
                "The circuit voltage is too high",
              ],
              answer: 1,
              explain: "Any parallel path — a nearby component still connected, or your own body across the probe tips — offers the meter's test current an alternative route, so the measured resistance falls below the true value. Disconnect one leg of the component and hold the probes by their insulation.",
            },
            {
              q: "Why does selecting 'AC' on a digital multimeter do more than change the label on the display?",
              options: [
                "It increases the input impedance to 10 Mohm",
                "It switches in a rectifier, because the digital module can only measure DC, and changes the calibration",
                "It disables the internal fuse so higher currents can pass",
                "It converts the reading from peak to peak-to-peak",
              ],
              answer: 1,
              explain: "The measuring module works only on DC, so an AC input must be rectified first, and the meter is then calibrated to display an RMS value. That calibration assumes a sine wave, which is why a true-RMS instrument is needed on inverter-driven equipment.",
            },
            {
              q: "Which instrument is used on an ordinary multimeter's ohms range and which requires a separate instrument, when checking whether a motor's insulation is sound?",
              options: [
                "The multimeter ohms range is adequate for both continuity and insulation",
                "Continuity on the multimeter; insulation resistance needs a megger generating 500 V or 1000 V",
                "Insulation on the multimeter; continuity needs a dedicated low-resistance tester",
                "Both require the clamp meter's ohms function",
              ],
              answer: 1,
              explain: "A multimeter tests with a battery of a few volts, which will not stress insulation at all — insulation can pass a multimeter check and still break down at 230 V. The megger applies 500 V for single-phase or 1000 V for three-phase equipment and measures leakage in megohms.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "live-testing-supply-current-and-voltage-drop",
          title: "Live testing: supply voltage, phase unbalance, clamp current and voltage drop",
          minutes: 14,
          simple: "Some things can only be measured with the power on: what voltage is arriving, how much current the motor is pulling, and which switch in a chain is the open one. The voltage-drop trick is the fastest fault-finder there is — across a closed switch you read almost nothing, and across the open one you read the whole supply.",
          refs: REFS,
          content: `
Three measurements can only be taken with the plant energised: supply voltage,
running current, and voltage drop across a component. Do them with a CAT-rated
meter, undamaged leads and full awareness that everything in front of you is
live.

## Supply voltage

Australian supply is **50 Hz**. The nominal figures under AS 60038 are **230 V**
between active and neutral and **400 V** between phases; older plant, older
textbooks and many nameplates still say 240 V and 415 V, and the tolerance band
covers both, so treat them as the same system. Single-phase supply is normal for
equipment drawing under about 15 A; larger machines are three-phase, though fans
and solenoids inside a three-phase machine are often connected single-phase.
Fans are sometimes connected between two phases for 400 V single-phase
operation, which avoids running a neutral to them.

To test single-phase supply, connect the voltmeter **across the circuit, active
to neutral**. The reading should be within about **five per cent** of nominal.
Measure in two places:

- **at the unit** — this is what the machine actually sees
- **at the main switchboard** — this is what the building is receiving.

The comparison tells you who owns the problem. If the voltage is already wrong at
the main board, the supply authority needs to be notified. If it is right at the
board but wrong at the unit, the loss is inside the building — undersized
submain, loose connection, overloaded circuit — and the building's electrical
contractor has to fix it. Peak-load periods are when marginal supplies sag, so a
reading taken at 9 am may not represent the 4 pm reality.

## Three-phase unbalance

Three-phase supply must be tested **between phases**, and the reason is
**voltage unbalance**. A small difference in phase voltages produces a much
larger difference in phase currents, which produces localised heating in one
winding and eventual burn-out. A three-phase motor should never be run where
unbalance exceeds **two per cent**.

Measure A-B, A-C and B-C. Then:

**percentage voltage unbalance = 100 x (maximum deviation from average) /
(average voltage)**

### Worked example

Readings on a 415 V, 50 Hz, three-phase supply: A-B = 405 V, A-C = 417 V,
B-C = 423 V.

1. Average = (405 + 417 + 423) / 3 = 1245 / 3 = **415 V**
2. Deviations from average: 415 - 405 = 10 V; 417 - 415 = 2 V; 423 - 415 = 8 V
3. Maximum deviation = **10 V**
4. Unbalance = 100 x 10 / 415 = **2.4%**

At 2.4% this supply is unacceptable and is capable of overloading and burning out
a motor. If the unbalance comes from the mains, notify the supply authority
immediately. If it originates inside the building, the single-phase loads across
the three phases need redistributing, or new wiring is required.

>! Motor burn-out from phase unbalance is one of the great silent killers of
>! three-phase plant, precisely because the machine keeps running. A technician
>! who fits a new compressor without checking unbalance will be back to fit
>! another one. Always take the three phase-to-phase readings before you leave.

Where failures repeat with no cause you can find, ask the supply authority to fit
a **data logger** on the supply. Intermittent voltage excursions that last
seconds will never show on a spot reading but will cook a motor over months.

## Clamp-on current measurement

The tong or clip-on ammeter is the most valuable single instrument for running
checks, because it reads current without disconnecting anything. It works from
the magnetic field around the conductor, which leads to the one rule that
beginners break:

**The jaws must go around one conductor only.** Clamp around a two-core flex and
the active and neutral fields cancel — you read close to zero and conclude the
machine is not running. Clamp around one conductor and you read that conductor's
current.

For three-phase motors, clamp one phase at a time, taking all three readings
either at the contactor or in the motor terminal box, and compare them. Current
unbalance follows voltage unbalance and is often easier to spot.

For single-phase plug-in appliances, make yourself a **split extension lead**: a
short three-core extension in which the active conductor is separated from the
neutral and earth for about **75 mm** and carefully re-insulated. Plug it between
the outlet and the appliance and clamp the exposed single active conductor. It
takes ten minutes to make and it saves opening a terminal box on every domestic
call.

Compare the reading with the nameplate. Current above the rated figure with
correct voltage points at high head pressure, a tight or seized compressor,
liquid slugging, or a shunted winding. Current well below the rated figure points
at low load, a broken compressor valve, or a system that is short of refrigerant.

## Voltage-drop testing across components

This is the fastest fault-finding technique in the trade, and it needs the
circuit live. It rests on one idea: **in a series string, the whole supply
voltage appears across the break.**

!FIG[ladder-rung]

Look at one rung of a ladder diagram: active, then thermostat, LP switch, HP
switch and overload in series, then the contactor coil, then neutral. The coil is
not pulling in. Instead of opening the panel and testing each switch dead, put
the voltmeter **across each switch in turn** with the circuit live:

| Reading across a device | What it means |
|---|---|
| About 0 V | Contacts closed, negligible resistance — this device is fine |
| Full supply voltage | Contacts open — you have found the break |
| A few volts, device closed | High-resistance joint or burnt contacts — heating |

Work along the rung. The first device that shows full supply voltage across it is
the open one, and every device before it must be closed for the voltage to have
reached that point. Four probe placements can replace an hour of dismantling.

### The partial drop matters too

A closed contact should drop well under a volt. Suppose a contactor pole feeding
a 15 A condenser fan circuit measures **12 V** across it while closed. The power
being dissipated in that contact is:

**P = V x I = 12 x 15 = 180 W**

180 watts inside a contact the size of a fingernail. It will glow, oxidise
further, raise its resistance further, and eventually weld or burn out — and
meanwhile the fan is getting 12 V less than it should. Any measurable drop across
a closed contact, a fuse holder or a terminal is a fault in the making. Replace
the contactor or remake the joint.

>! Voltage-drop testing means live probes inside an energised panel. Use a
>! CAT III or CAT IV meter, keep one hand out of the enclosure, stand on a dry
>! insulating surface, and place the probes deliberately rather than fishing
>! around. If you cannot reach a terminal safely, isolate and test it dead
>! instead — the technique is a convenience, never an obligation.

## Using power consumption as a diagnostic

Manufacturers publish condensing unit wattages against suction temperature at a
stated ambient (32 °C is a common basis), and small units may include an
allowance for the fan motor in the figure. Comparing measured watts with the
published value is a powerful cross-check:

- **Low wattage** means low load — but it can also mean a broken compressor valve or anything else that has reduced compressor capacity.
- **High wattage** means high head pressure or hard work: high ambient, air or non-condensables in the system, mixed refrigerants, a blocked condenser, a hot location, a tight compressor, poor lubrication, liquid slugging, high suction pressure — or the electrical faults of high voltage, shunted windings and shorts to earth.

On fans and open motors, beware of any change to pulley size or blade pitch. A
small increase in either produces a very large increase in absorbed power.

!SIM[See what non-condensables do to head pressure and power](fault=nonCondensables)

## On the job

- Measure supply at the unit and at the board; the difference names the culprit.
- Three phase-to-phase readings, every three-phase job, every time.
- Unbalance over 2% is a report-it-now finding, not a note for later.
- One conductor in the clamp jaws — always.
- Across a closed switch: near zero. Across the open one: the lot.
`,
          quiz: [
            {
              q: "Phase-to-phase readings are A-B 398 V, A-C 410 V, B-C 404 V. What is the percentage voltage unbalance, and is it acceptable?",
              options: [
                "1.0%, acceptable",
                "1.5%, acceptable",
                "2.9%, not acceptable",
                "3.0%, not acceptable",
              ],
              answer: 1,
              explain: "Average = (398 + 410 + 404)/3 = 1212/3 = 404 V. Deviations are 6 V, 6 V and 0 V, so the maximum is 6 V. Unbalance = 100 x 6 / 404 = 1.5%, which is below the 2% limit. Note that you use the largest deviation from the average, not the spread between highest and lowest.",
            },
            {
              q: "A technician clamps a tong ammeter around the twin flex feeding a domestic refrigerator and reads almost zero while the compressor is clearly running. Why?",
              options: [
                "The clamp meter is faulty",
                "The active and neutral currents are equal and opposite, so their magnetic fields cancel",
                "The compressor is drawing DC, which the clamp cannot read",
                "The meter is on the wrong voltage range",
              ],
              answer: 1,
              explain: "A clamp meter senses the net magnetic field inside its jaws. With both conductors enclosed the go and return currents cancel and the reading collapses to near zero. Clamp one conductor only — which is what a split extension lead makes possible on plug-in equipment.",
            },
            {
              q: "With the circuit live, a voltmeter across a closed contactor auxiliary contact reads 9 V while it carries 10 A. What is the correct interpretation?",
              options: [
                "Normal — some drop is expected across any contact",
                "The contact is open and has been found as the fault",
                "The contact is high-resistance and dissipating about 90 W; it will fail",
                "The supply voltage is 9 V too low",
              ],
              answer: 2,
              explain: "A healthy closed contact drops well under a volt. Nine volts at 10 A means 90 W of heat inside the contact, which drives further oxidation and eventual failure, while starving the load of voltage. Full supply voltage would indicate an open contact; a small but measurable drop indicates a contact on its way out.",
            },
            {
              q: "The supply voltage measures correctly at the main switchboard but 12% low at the condensing unit while it runs. Who should be called?",
              options: [
                "The supply authority, because the incoming mains are faulty",
                "The building's electrical contractor, because the loss is within the installation",
                "Nobody — 12% is within the acceptable 5% tolerance",
                "The equipment manufacturer, because the compressor is faulty",
              ],
              answer: 1,
              explain: "Correct at the board and low at the unit means the voltage is being lost between the two — undersized cable, a loose connection, or an overloaded circuit — which is the installation owner's problem to fix through their electrical contractor. The supply authority is only involved when the voltage is already wrong at the main board.",
            },
            {
              q: "A condensing unit is drawing significantly more watts than the manufacturer's published figure for its suction temperature and ambient. Which set of causes fits?",
              options: [
                "Low load, a broken compressor valve, or shortage of charge",
                "An open start winding or an open internal overload",
                "Air in the system, a blocked condenser, a tight compressor, high voltage or a shunted winding",
                "A defective run capacitor causing the motor to stall",
              ],
              answer: 2,
              explain: "High wattage means the machine is working harder than it should, which points to anything raising head pressure or mechanical resistance — non-condensables, a fouled condenser, high ambient, a tight compressor, slugging — plus the electrical causes of high voltage, shunted windings and earth leakage. Low load and broken valves produce the opposite symptom, low wattage, and an open winding means no current at all.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "insulation-earthing-and-polarity",
          title: "Insulation resistance, earthing and polarity — the safety tests",
          minutes: 13,
          simple: "These are the tests that decide whether a machine is safe to give back to the customer. One pushes high voltage against the insulation to see if any current leaks out to the frame, one checks the earth wire can carry a fault away, and one checks the wires are on the right terminals. On a fridge, the insulation test doubles as a moisture detector.",
          refs: REFS,
          content: `
Everything else in this module is about finding faults. These tests are about
proving the equipment is safe — before you energise it after a repair, and before
you hand it back.

## Insulation resistance: the megger

Insulation resistance testing checks whether the insulation between live parts
and earth is still doing its job. A megohmmeter, universally called a **megger**,
generates a high DC test voltage and measures the tiny leakage current that
flows, displaying the result in megohms.

**Procedure on a motor or compressor:**

1. Isolate, lock out, prove dead, and discharge any capacitors.
2. Disconnect the equipment from the supply and from any electronics.
3. Put one probe on the frame — on clean bare metal, not paint.
4. Put the other probe on each winding in turn.
5. Select **500 V for single-phase equipment, 1000 V for three-phase**.
6. Apply the test and let the reading settle.

**Interpreting the result:**

| Insulation resistance | Verdict |
|---|---|
| 1 Mohm up to infinity | Safe |
| Below 1 Mohm | Leakage to earth — potentially fatal, investigate |
| Below 1 Mohm on a hermetic compressor | Usually moisture or contamination rather than a physical fault |
| Down to about 0.6 Mohm on a hermetic | Fit a drier and re-test |
| Below 0.5 Mohm on a hermetic | Full dehydration of the system required |
| Metal-sheathed heating elements | Minimum 0.01 Mohm (10 000 ohms) |

The reason a hermetic compressor gets its own rules is chemistry. Refrigerants
and refrigeration oils are dielectrics — poor conductors. Water conducts readily,
and so do the acids and carbon produced when a system has been burnt or
contaminated. So a low megger reading on a sealed unit is usually telling you
there is **moisture or contamination in the refrigerant**, not that the motor is
about to earth out. That makes the megger a **preventative** instrument: it warns
you of an impending seizure or burn-out while the compressor is still working.
The response is an oil and refrigerant change, dehydration and the fitting of
suction and liquid line driers — preferably all three — plus finding out how the
contamination got in and fixing that.

>! The megger generates 500 V or 1000 V. That will destroy electronic controllers,
>! inverter drives, soft starters, thermistor probes, PCBs and electronic
>! expansion valve modules. Check what is connected before you press the button
>! and disconnect anything electronic. Also: the instrument charges the winding
>! capacitance during the test — discharge the equipment afterwards before you
>! touch the terminals, and do not touch the probes while a test is running.

## Earth continuity

The protective earth conductor exists to carry fault current back to the supply
fast enough and hard enough to operate the protective device, so the frame never
stays live. That only works if the path has very low resistance.

Start with your eyes: inspect earth terminals and the earth conductor for
fraying, corrosion, loose screws, paint under a lug, and physical damage. Any of
those must be corrected.

Then measure. The **main earthing conductor should not exceed 0.5 ohms**. For a
cord-connected appliance tested under AS/NZS 3760, the earth path from the plug
pin to the exposed conductive parts is generally accepted up to about **1 ohm**,
allowing for the cord itself. Use a dedicated low-resistance instrument or an
appliance tester that injects a substantial test current — a multimeter's ohms
range uses so little current that a corroded joint can read low and still fail
under fault conditions.

## Earth fault loop impedance

Earth continuity proves the earth wire exists. **Earth fault loop impedance
(EFLI, or Zs)** proves the whole loop — active conductor out, fault, earth
conductor back through the MEN link and the transformer winding — is low enough
to trip the protective device inside the required disconnection time. AS/NZS 3000
requires **0.4 s** for final subcircuits up to 32 A supplying socket outlets and
**5 s** for submains and distribution circuits.

The relationship is simply Ohm's law applied to the loop:

**Maximum Zs = Uo / Ia**

where Uo is the nominal voltage to earth (230 V) and Ia is the current that
operates the protective device in the required time.

### Worked example

A 20 A Type C circuit breaker feeds a condensing unit. A Type C breaker's
magnetic element operates at about **10 times** rated current:

- Ia = 10 x 20 = **200 A**
- Maximum Zs = 230 / 200 = **1.15 ohms**

If your loop tester reads 0.62 ohms, the circuit will clear a fault in well under
the required time. If it reads 1.6 ohms, it will not — the breaker would take
seconds to operate on its thermal element while the frame sits live. The fix is a
better earth path, a shorter or larger cable, or a different protective device.

## Polarity and correct connection

Polarity testing confirms the wires landed on the right terminals: the active on
the active terminal, the neutral on the neutral, the earth on the earth, and
every switch, fuse and protective device in the **active** conductor only. A
machine wired with active and neutral swapped will run perfectly and will leave
its internal switching in the neutral — so the moment the isolator or thermostat
opens, the whole machine sits at supply potential internally, and the person who
opens the cover assuming it is dead gets the shock.

Dead check: with the circuit isolated, use continuity to trace each conductor
from the terminal to where it should land. Live check: active to neutral about
230 V, active to earth about 230 V, neutral to earth close to 0 V.

## Verification and the standards you meet

After any electrical work, AS/NZS 3000 requires the installation to be verified
before it is energised, in a sensible order:

1. Visual inspection — terminations, IP rating, cable support, labelling.
2. Continuity of the earthing system.
3. Insulation resistance.
4. Polarity and correct circuit connections.
5. Earth fault loop impedance.
6. RCD operation.

**RCD testing**: press the built-in test button to prove the mechanism, then use
an RCD tester to measure operating time. A 30 mA Type I device should trip within
**300 ms at its rated residual current** and within about **40 ms at five times**
rated current. Portable RCDs get a push-button test before use.

**AS/NZS 3760** governs in-service inspection and testing of cords and portable
equipment — "test and tag". It combines a visual inspection, an earth continuity
test and an insulation resistance test (generally 1 Mohm minimum, with a leakage
alternative for equipment that cannot take the test voltage), followed by a tag
showing who tested it, when, and when it is next due. Intervals depend on the
environment: roughly three months on construction, demolition and mining sites,
six to twelve months in workshops and factories where equipment is moved about,
and longer in low-risk office environments. Hire equipment is inspected before
each hire. Always work to the current edition, because intervals and limits are
revised.

## What to remember

- 500 V single-phase, 1000 V three-phase; 1 Mohm is the safety line.
- On a hermetic, under 1 Mohm usually means moisture: drier at 0.6, dehydrate below 0.5.
- Sheathed heating elements only need 0.01 Mohm.
- Disconnect electronics before meggering — no exceptions.
- Main earthing conductor 0.5 ohms or less; loop impedance low enough to trip in 0.4 s or 5 s as applicable.
- Verify in order: inspect, earth, insulation, polarity, loop, RCD.
`,
          quiz: [
            {
              q: "A working hermetic compressor meggers at 0.45 Mohm winding-to-frame. What does this most likely indicate and what is the correct response?",
              options: [
                "Normal for a hermetic — no action needed",
                "A physical short to the frame — replace the compressor immediately",
                "Moisture or contamination in the system — full dehydration is required",
                "The megger was set to 1000 V instead of 500 V",
              ],
              answer: 2,
              explain: "Refrigerant and oil are dielectrics, so a low reading on a sealed unit usually points to moisture, acid or carbon in the charge rather than damaged winding insulation. Down to about 0.6 Mohm a drier may recover it; below 0.5 Mohm the system needs complete dehydration. Replacing the compressor without cleaning up the contamination guarantees a repeat failure.",
            },
            {
              q: "A 20 A Type C circuit breaker protects a final subcircuit at 230 V. What is the maximum acceptable earth fault loop impedance?",
              options: ["0.29 ohms", "1.15 ohms", "2.30 ohms", "11.5 ohms"],
              answer: 1,
              explain: "A Type C breaker's magnetic trip operates at roughly ten times rated current, so Ia = 10 x 20 = 200 A. Maximum Zs = Uo / Ia = 230 / 200 = 1.15 ohms. If the measured loop impedance is higher, the magnetic element will not operate and the fault will clear only slowly on the thermal element, leaving the frame live.",
            },
            {
              q: "Why is a swapped active and neutral connection dangerous even though the equipment runs normally?",
              options: [
                "The motor will rotate in the wrong direction",
                "Switches, fuses and thermostats then interrupt the neutral, leaving the equipment internally live when switched off",
                "The current draw doubles",
                "The earth conductor carries load current continuously",
              ],
              answer: 1,
              explain: "Protective and switching devices are required to be in the active conductor. With polarity reversed they sit in the neutral, so opening them disconnects nothing from the supply potential — the internals stay live and the next person to open the cover after switching off is exposed. The motor's direction is unaffected on single-phase supply.",
            },
            {
              q: "Before insulation testing an air-conditioner fitted with an inverter drive and an electronic expansion valve controller, what must you do?",
              options: [
                "Reduce the megger test voltage to 250 V and proceed",
                "Disconnect the electronic components before applying the test voltage",
                "Test only between active and neutral, not to earth",
                "Run the unit for ten minutes first to warm the insulation",
              ],
              answer: 1,
              explain: "The 500 V or 1000 V test voltage will destroy inverter drives, controllers and electronic valve modules. They must be disconnected from the circuit being tested. Simply lowering the test voltage neither protects the electronics reliably nor gives a valid test result for the wiring and windings.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "protection-devices-and-overloads",
          title: "Fuses, breakers, overloads and winding checks",
          minutes: 13,
          simple: "These are the parts whose whole job is to break the circuit before something burns. Testing them means finding out whether they opened because they were doing their job or because they are worn out — never bridging one out to keep the machine running — and knowing what a healthy motor winding should read so you can tell the two apart.",
          refs: REFS,
          content: `
Fuses, circuit breakers and overload relays are protective devices. They exist to
open the circuit when current or temperature exceeds a safe value. Two questions
arise every time you meet one that has operated: **did it operate because
something is genuinely wrong**, and **is the device itself still healthy?**

## How they work

Circuit breakers and thermal overload relays open their contacts through the
warping of a **bi-metallic strip or disc** heated by the current passing through
it. Some breakers add a magnetic element that responds almost instantly to a
short-circuit-level current. Unlike a fuse, which is consumed, a breaker or
overload can **reset** — automatically once it has cooled, or by hand if it is a
manual-reset type. Circuit breakers are built with **arc chutes** so they can
interrupt high fault currents without the arc sustaining itself.

A circuit breaker may be arranged to open only its own circuit, or to open all
the circuits affected by an overload condition — which is why on three-phase
plant you check all poles, not just the one that looks tripped.

## Testing a breaker or overload

The honest test is a running test under real load, with a **clip-on ammeter on
each lead in turn** for three-phase.

1. Restore the machine to normal operation.
2. Load it up to full rated current.
3. It must carry rated amperage **without tripping**.

If it trips before rated current is reached, do not blame the device yet. Look
for the outside causes first:

- low or fluctuating supply voltage
- phase unbalance on three-phase supply
- high ambient temperature at the switchboard or panel — overloads are temperature-sensitive by design, and a control panel in the sun trips early
- a genuine mechanical or refrigeration overload on the compressor.

Only when no external cause can be found is the overload itself the fault, and
then it is replaced.

The opposite failure matters more. **If a breaker does not trip at its "must
trip" current, replace it immediately.** A protective device that no longer
protects is worse than none, because everyone downstream believes they are
covered.

>! Never bridge out, wedge, tape or "temporarily" bypass an overload or a
>! high-pressure cut-out to keep a machine running. That device is the last thing
>! standing between a fault and a fire or a burnt-out compressor. If a customer
>! asks, the answer is no.

## Fuses and over-fusing

A fuse must be sized for the load and the circuit, and replaced with the same
type and rating. **Over-fusing** — fitting a larger fuse because the correct one
keeps blowing — is one of the major causes of fires arising from electrical
faults, and it dramatically increases the damage done by any fault that does
occur. The same applies to the fuses inside your own instruments: fit the
identical type, because the wrong fuse in a meter's current path can destroy the
meter and injure the user.

## Internal (buried) line-break overloads

Most modern hermetic motors carry an **internal line-break overload** buried
inside the windings, where it senses actual winding temperature rather than
switchboard temperature. On single-phase units its contacts break the whole load
current, and it should reset as the windings cool.

Because it is buried, you cannot see it or replace it. You can, however, work out
whether it has opened, using the winding terminals.

**Test procedure:**

1. Disconnect the power, lock out and prove dead. Discharge any capacitors.
2. Remove the wires from the **C** (common), **S** (start) and **R** (run) terminals.
3. Test for continuity, preferably with an ohmmeter rather than a simple continuity tester, across **C-S**, **C-R** and **S-R**.

**Reading the result:**

| C-S | C-R | S-R | Conclusion |
|---|---|---|---|
| Reads a value | Reads a value | Sum of the other two | Windings and overload intact |
| Open | Open | Reads a value | Overload is open — common leg is interrupted |
| Open | Reads a value | Open | Start winding open |
| Reads a value | Open | Open | Run winding open |

The second row is the classic buried-overload signature: both paths through
common are dead, but the path from start to run — which does not pass through the
overload — is still continuous. That proves the windings themselves survive and
the interruption is in the common leg.

If you get that result, let the compressor **cool right down to ambient** and
test again. Internal overloads can stay open for **up to three hours** after a
trip. If it still has not reset when cold, the overload is faulty, and because it
is buried in the windings the compressor has to be replaced — unless it is an
accessible or serviceable type where the windings themselves can be replaced.

>! Do not test a hot compressor and condemn it. A perfectly good motor with a
>! tripped internal overload gives exactly the same readings as a motor with an
>! open common connection. Isolate, walk away, do something else for a couple of
>! hours, and test cold. Compressors have been replaced under warranty for no
>! reason at all because someone was in a hurry.

## Expected winding resistances

The overload test above only means something if you know what a healthy winding
reads. Always work to the manufacturer's figures for the model in front of you.
Resistance rises with temperature, so a specification quotes a temperature.
Typical values from service data for units between 1.1 and 3.75 kW give a sense
of the region you should be in:

| Rating | Motor type | Winding measured | 15 °C | 25 °C | 35 °C |
|---|---|---|---|---|---|
| 1.1 kW | Single-phase | Start | 5.8 | 6.2 | 6.6 |
| 1.1 kW | Single-phase | Run | 1.5 | 1.6 | 1.7 |
| 1.1 kW | Three-phase, model A | Across two terminals | 11.8 | 12.6 | 13.4 |
| 1.1 kW | Three-phase, model B | Across two terminals | 7.7 | 8.2 | 8.8 |
| 1.3 kW | Single-phase, model C | Start | 6.0 | 6.0 | 7.0 |
| 1.3 kW | Single-phase, model C | Run | 2.0 | 2.0 | 2.0 |
| 1.3 kW | Single-phase, model D | Start | 5.0 | 6.0 | 7.0 |
| 1.3 kW | Single-phase, model D | Run | 1.75 | 2.0 | 2.0 |
| 1.3 kW | Three-phase | Across two terminals | 5.4 | 5.8 | 6.15 |
| 1.5 kW | Single-phase | Start | 3.9 | 4.2 | 4.45 |
| 1.5 kW | Single-phase | Run | 1.4 | 1.5 | 1.6 |
| 1.5 kW | Three-phase | Across two terminals | 6.8 | 7.2 | 7.7 |
| 2.25 kW | Three-phase | Across two terminals | 3.0 | 3.2 | 3.4 |
| 3.0 kW | Three-phase | Across two terminals | 3.2 | 3.4 | 3.6 |
| 3.75 kW | Three-phase | Across two terminals | 2.7 | 2.8 | 2.9 |

Two things stand out. Resistances are **low** — a run winding of 1.5 ohms means
your lead resistance really matters. And two compressors of the same power rating
can have quite different windings, because they are designed around different
relays and capacitors. Never assume; look it up. On a three-phase motor the three
readings across pairs of terminals should be **equal to each other**; any
noticeable difference is a shunted or partly shorted phase.

## What each reading tells you

| Measurement | Fault |
|---|---|
| Infinite resistance on one pair | Open winding, or an open internal overload |
| Resistance well below specification | Shunted winding — replace the compressor |
| Any reading winding-to-frame on a megger below 1 Mohm | Leakage to earth, moisture or contamination |
| All three readings normal but the motor will not run | Not electrical — check pressures, check for a seizure |

## On the job

- A tripped device is evidence. Find out what it tripped on before you reset it.
- Test under real load with a clamp meter; rated current must not trip it.
- Early tripping: check voltage, unbalance and ambient temperature first.
- A breaker that will not trip at must-trip current is replaced on the spot.
- Correct fuse rating and type, always. Over-fusing starts fires.
- Both paths through common open, S-R continuous: cool it down before you condemn it.
- Know the expected winding resistance before you decide a reading is wrong.
- On a three-phase motor the three readings must be equal to each other.
`,
          quiz: [
            {
              q: "On a single-phase hermetic compressor you read: C-S open, C-R open, S-R 8.1 ohms. What is the most likely conclusion?",
              options: [
                "Both windings are burnt out and the compressor must be replaced",
                "The internal line-break overload has opened; allow the motor to cool and re-test",
                "The start winding is shorted to the frame",
                "The run capacitor has failed open circuit",
              ],
              answer: 1,
              explain: "S-R is continuous, so both windings are electrically intact — the path from start to run does not pass through the buried overload. Both paths through common are open, which places the interruption in the common leg where the internal overload sits. Cool the motor to ambient (it can take up to three hours) and re-test before condemning it.",
            },
            {
              q: "An overload relay trips repeatedly at 80% of the motor's rated current. What should be investigated first?",
              options: [
                "Replace the overload relay immediately",
                "Fit a larger overload so the motor can run",
                "Check supply voltage, phase unbalance and the ambient temperature at the panel",
                "Bypass the overload and monitor the motor by hand",
              ],
              answer: 2,
              explain: "Thermal overloads respond to heat, so low voltage, phase unbalance and a hot panel all make them trip early even though the motor is healthy. Replacing the relay is the last step, once no external cause is found. Fitting a larger device or bypassing removes the protection and invites a burn-out or fire.",
            },
            {
              q: "Why is 'over-fusing' — fitting a higher-rated fuse than specified — so serious?",
              options: [
                "It causes the motor to run backwards",
                "It reduces the supply voltage to the equipment",
                "It allows far more energy into a fault before disconnection, and is a major cause of electrical fires",
                "It voids the ARCtick refrigerant handling licence",
              ],
              answer: 2,
              explain: "The fuse rating sets how much current, for how long, is allowed to flow into a fault. Raising it lets a fault develop far more heat and damage before clearing, which is why over-fusing appears repeatedly as a cause of fires. The correct response to a repeatedly blowing fuse is to find the fault.",
            },
            {
              q: "A circuit breaker carries well above its 'must trip' current in a controlled test without opening. What action is required?",
              options: [
                "Nothing — a breaker that does not nuisance-trip is desirable",
                "Adjust the thermal element to a lower setting",
                "Replace the breaker immediately",
                "Fit a second breaker in series with it",
              ],
              answer: 2,
              explain: "A device that will not operate at its must-trip current provides no protection, while everyone downstream assumes it does. That is more dangerous than having no breaker fitted, because the danger is invisible. It is replaced immediately, not adjusted or supplemented.",
            },
            {
              q: "A three-phase hermetic motor reads 6.9, 7.1 and 4.8 ohms across its three pairs of terminals. What does this indicate?",
              options: [
                "Normal — some variation between phases is expected",
                "An open circuit in one phase",
                "A shunted or partly shorted winding in the phase common to the low reading",
                "The internal overload has tripped",
              ],
              answer: 2,
              explain: "The three readings on a healthy three-phase motor should be equal. One noticeably low reading means insulation between turns has broken down and shortened that winding electrically — a shunt. An open circuit would give an infinite reading, and a tripped internal overload would open the readings through common rather than lowering one.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "contactors-relays-and-capacitors",
          title: "Contactors, starting relays and capacitors",
          minutes: 13,
          simple: "A contactor is an electrically operated switch: a coil pulls the contacts together. A capacitor is a tiny electrical tank that gives a single-phase motor the shove it needs to start. Both fail in ways you can test with an ohmmeter — but a capacitor holds a charge that can kill you, so it gets shorted out before you touch it.",
          refs: REFS,
          content: `
Contactors, relays, solenoid valves and motor starters all work the same way: a
**coil** creates a magnetic field that moves an armature, which opens or closes
one or more sets of contacts. Contacts are described by their state when the coil
is **not** energised — **normally open (NO)** or **normally closed (NC)**.
Capacitors sit alongside them, giving single-phase motors their starting and
running phase shift. Between them these parts account for a large share of the
service calls you will attend.

## Testing a coil

1. Isolate all supplies, lock out, prove dead, discharge capacitors.
2. **Look first.** Loose wires and terminals, discoloured or blistered insulation, signs of overheating, black flash marks around the coil or inside the contactor housing. Most coil faults announce themselves visually.
3. Disconnect the wires to and from the coil so nothing is in parallel with it.
4. Measure the coil with an ohmmeter:

| Reading | Meaning |
|---|---|
| A sensible resistance value | Coil winding is continuous — probably serviceable |
| Very high or open circuit | Coil is open — replace it |
| Very low | Suspect a shunted coil; also test coil to frame |

5. If the resistance is suspiciously low, put one probe on the coil and the other on the frame and look for a path to earth. Any reading there means the coil is faulty and must be replaced.

## Coil voltage — the fault that keeps happening

A very common cause of coil burn-out, particularly on contactors and starters, is
simply the **wrong supply voltage applied to the coil**:

- a 240 V coil connected between two phases and receiving 415 V — it burns out within seconds to minutes
- a 415 V coil connected between a phase and neutral at 240 V — it will not pull in properly, it hums, the armature chatters, and both the coil and the contacts cook
- a 240 V coil, solenoid or relay wired into a **24 V control circuit** — it will never operate, and the technician goes looking for a control fault that does not exist.

The coil voltage is marked on the coil. Read it, then confirm with a voltmeter
across the coil terminals that the corresponding voltage is actually arriving.
That single check resolves an enormous number of "the contactor won't pull in"
calls.

>! A chattering contactor is not a nuisance to be tolerated. Each chatter is a
>! make-and-break at full load current, which erodes the contacts fast, and the
>! coil is drawing its high inrush current continuously. Find the cause — low
>! voltage, wrong coil, voltage drop in the control circuit, a marginal control
>! contact — before the contactor welds closed or burns out.

## Starting relays on single-phase motors

Many sealed units use **permanent-split capacitor (PSC)** motors, which need no
starting relay at all — the run capacitor stays in circuit permanently. PSC
motors have **low starting torque**, so where system design or site conditions
demand more, a **start capacitor and a starting relay** are added, and that
combination solves most hard-starting problems.

Two relay types are used:

| Relay type | Sensing | Contact state with coil de-energised |
|---|---|---|
| Potential (voltage) relay | Voltage generated across the start winding | Normally closed (NC) |
| Current (amperage) relay | Current drawn by the run winding | Normally open (NO) |

**Testing a starting relay** when the motor will not start although correct
voltage is present across C-R:

1. Disconnect the power and **discharge each set of capacitor terminals** with a suitable discharge tool or an insulated screwdriver.
2. Remove the wires from the relay.
3. Check continuity through the relay coil with an ohmmeter — no continuity means replace it.
4. Check across the relay contacts with the ohmmeter. A potential relay's contacts should read closed; a current relay's contacts should read open. Either reading the wrong way means the relay is faulty.

There is also a diagnosis that no meter will give you. If the motor **starts but
runs noisily, draws high current and then cuts out on overload**, yet the relay's
coil and contacts both test correctly, fit a new relay and run the machine. If it
now runs normally, the relay was mechanically faulty — sticking or slow. If the
noise persists, the fault is in the windings, the wiring or the capacitors.

## Capacitors: what they do and how they fail

Understanding the fault modes is easier with an analogy. A capacitor stores
electrical charge the way a tank stores water, and it fails the same two ways a
tank does:

- **The tank is holed** — water leaks out and it can never stay full. Electrically this is a **short or leakage** internally, or to the can.
- **The inlet or outlet pipe is blocked or broken off** — you cannot get water in or out. Electrically this is **open circuit** inside the capacitor.

A defective capacitor causes one of two very recognisable symptoms: the motor
draws excessive current and trips its overload, or the motor will not start at
all — it hums, tries, and stalls.

>! Before disconnecting any capacitor: isolate the supply, then discharge the
>! capacitor by shorting its terminals with a proper discharge tool or an
>! insulated screwdriver, and confirm with a meter that the voltage has fallen.
>! A charged motor capacitor holds enough energy to kill. Assume every capacitor
>! you meet is charged, including one that has been sitting on the shelf.

### Ohmmeter test (analogue meter)

Discharge the capacitor first. Set the meter to the 0-1000 range on **R x 1** and
place the probes across the terminals.

- The needle should **dip towards zero** as the meter's battery pushes current into the empty capacitor, then **climb steadily to a high resistance** as the capacitor fills. That behaviour means the capacitor is probably sound.
- If the reading **stays at zero**, the capacitor is leaking internally — replace it.
- If there is **no needle movement at all** after discharging, the capacitor is probably open circuit — replace it.

This is one of the few jobs where an analogue movement genuinely beats a digital
display, because you are watching a changing value rather than reading a number.

### Measuring the actual capacitance

A modern digital multimeter with a capacitance function reads microfarads
directly and that is the easy route. Where you only have a voltmeter and an
ammeter, capacitance can be measured with a test rig: an HRC fuse, a switch, an
ammeter in series with the capacitor and a voltmeter across it, on a 240 V supply.

1. Connect the capacitor into the rig.
2. Close the switch, read volts and amps **quickly** — do not leave the switch closed for more than **5 to 6 seconds**. If you cannot get both readings in time, open the switch and wait **3 minutes** before trying again.
3. Calculate:

**microfarads = 3180 x amps / volts**

**Worked example.** A capacitor marked 30 microfarads is tested. The voltmeter
reads 240 V and the ammeter reads 2.30 A.

- microfarads = 3180 x 2.30 / 240
- = 7314 / 240
- = **30.48 microfarads**

Capacitance must be within **plus or minus 10%** of the marked rating. For a
30 microfarad capacitor that band is 27 to 33 microfarads, so at 30.48 this one
passes.

**Choosing the ammeter range** on a 240 V test: divide the microfarad rating by
10 to estimate the current. A 30 microfarad capacitor draws about 3 A, so use the
0-10 A range; a 4 microfarad capacitor draws about 0.4 A, so use the 0-1 A range.
Size the fuse at or just under the full-scale current — at or under 10 A for the
30 microfarad test, at or under 1 A for the 4 microfarad test.

### Substitution — the practical field test

Where starting or running symptoms point at a capacitor, the quickest reliable
test is to take the suspect out of circuit and substitute a fresh one **of
identical rating**. Normal starting and running afterwards means the job is done.

One caution: a motor that has burnt out, shorted or otherwise failed leaves its
capacitor **under suspicion of damage** as well. Either replace it or test it
carefully before re-using it — refitting a damaged capacitor to a new compressor
is a good way to be back next week.

## What to remember

- Coil open = replace; coil very low = check for a path to frame.
- Read the coil voltage marking, then measure what is actually arriving.
- Potential relay contacts are NC; current relay contacts are NO.
- Discharge every capacitor before touching it, and verify the discharge.
- Dip then climb = good; stuck at zero = shorted; no movement = open.
- microfarads = 3180 x amps / volts, tolerance plus or minus 10%.
- After a motor burn-out, treat the old capacitor as suspect.
`,
          quiz: [
            {
              q: "A run capacitor is checked with an analogue ohmmeter on R x 1 after being discharged. The needle drops to near zero and stays there. What is the fault?",
              options: [
                "The capacitor is open circuit and must be replaced",
                "The capacitor is internally shorted or leaking and must be replaced",
                "The capacitor is serviceable — this is the normal indication",
                "The meter leads are open circuit",
              ],
              answer: 1,
              explain: "A healthy capacitor draws the meter's test current at first (needle dips low) and then blocks it as it charges, so the reading climbs to a high resistance. A needle that stays at zero means current keeps flowing — an internal short or leakage path. No movement at all would indicate an open circuit.",
            },
            {
              q: "A capacitor marked 40 microfarads is tested at 240 V and draws 2.8 A. Is it within tolerance?",
              options: [
                "Yes — it calculates to 37.1 microfarads, inside the plus or minus 10% band",
                "No — it calculates to 37.1 microfarads, outside the plus or minus 10% band",
                "Yes — it calculates to 42.5 microfarads, inside the band",
                "No — it calculates to 33.2 microfarads, outside the band",
              ],
              answer: 0,
              explain: "microfarads = 3180 x 2.8 / 240 = 8904 / 240 = 37.1. The plus or minus 10% band for a 40 microfarad capacitor runs from 36 to 44 microfarads, so 37.1 is acceptable although near the low end. Note the test must be completed within 5 to 6 seconds with a 3 minute wait before repeating.",
            },
            {
              q: "A contactor hums loudly and its armature chatters instead of pulling in cleanly. Which cause should be checked first?",
              options: [
                "The compressor is short of refrigerant",
                "The coil voltage — a 415 V coil fed at 240 V, or voltage drop in the control circuit",
                "The capacitor has failed open circuit",
                "The insulation resistance is below 1 Mohm",
              ],
              answer: 1,
              explain: "Chattering means the coil cannot develop enough magnetic pull to hold the armature, which points to insufficient coil voltage — a coil rated higher than the supply it is on, or excessive voltage drop reaching it. Read the coil's marked voltage, then measure what actually arrives at the coil terminals.",
            },
            {
              q: "You are testing a starting relay. Which contact state is correct with the relay de-energised on the bench?",
              options: [
                "Potential relay: open. Current relay: closed.",
                "Both types: closed.",
                "Potential relay: closed. Current relay: open.",
                "Both types: open.",
              ],
              answer: 2,
              explain: "A potential (voltage) relay has normally closed contacts that open once the start winding generates enough voltage, dropping the start capacitor out. A current relay has normally open contacts that close on the high inrush current through the run winding. Reading either the wrong way means the relay is faulty.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "compressor-windings-and-systematic-fault-finding",
          title: "Compressor windings, C/S/R terminals and systematic fault-finding",
          minutes: 14,
          simple: "A sealed compressor brings three pins out of the shell and does not label them. Measure across all three pairs: the biggest number spans the two windings in series, so the pin left out is common, and from common the smaller reading is run and the bigger is start. After that, fault-finding is just working along the circuit in a sensible order instead of guessing.",
          refs: REFS,
          content: `
This is where everything in the module comes together: the meters, the safety
routine, and a method for thinking. You already know what resistance a healthy
winding should show. The remaining problem on a sealed unit is that the shell
brings out three unlabelled pins, and you have to work out which is which before
any of those numbers mean anything — and then work through the machine in an
order that finds the fault instead of a list of things that are not wrong.

## Identifying common, start and run

A sealed unit brings three terminals out of the shell. One is **common (C)**,
shared by both windings; the other two are the free ends of the **start (S)** and
**run (R)** windings. The start winding is wound with finer wire and more turns,
so it always has the **higher resistance**. Because the two windings share
common, measuring between S and R puts them in **series**, giving the largest
reading of the three.

Isolate, prove dead, disconnect all wires from the terminals, and with an
ohmmeter:

1. Measure across the first pair, say A-B, and write it down.
2. Measure A-C and B-C and write those down.
3. Find the **highest** reading. The terminal **not** involved in that reading is **common**.
4. From common, compare the two remaining readings: the **lower** is the run terminal, the **higher** is the start terminal.

### Worked example

- A-B = 15 ohms
- A-C = 18 ohms
- B-C = 3 ohms

The highest reading is A-C at 18 ohms, so the terminal left out — **B** — is
**common**. From B, the reading to C is 3 ohms and to A is 15 ohms, so **C is
run** (3 ohms) and **A is start** (15 ohms).

Check the arithmetic: start plus run should equal the series reading.
15 + 3 = 18 ohms, which matches A-C exactly. If the sum does not match, one of
the readings is wrong, or you have a partially shunted winding. That cross-check
costs nothing and catches mistakes before you wire a compressor up backwards.

## Systematic fault-finding

Beyond meters and diagrams there is a fourth skill: **logical thought**. Before
you touch anything, analyse what you already know — what you can see, what you
can hear, what the customer says changed and when. Choose a logical starting
point and work from it step by step. The guides below follow that pattern.

### 1. Compressor will not run — single-phase

1. Check supply voltage. No power? Check fuses, switch and plug for open circuit, and look over the wiring for visible damage.
2. Test the thermostat or LP control for open circuit. **If the LP control is open, check system pressure first, and never short it out unless pressure is normal** — otherwise you are about to run a compressor with no refrigerant.
3. Check that power reaches the relay and the overload, then test each for open circuit. Study the relay circuit so you know what should happen. **Do not short out an overload** — find out why it opened.
4. Test the winding resistances against the manufacturer's specification, looking for open circuit, short to earth or a shunted winding. If the main fuse has blown, use the megger to test for a short to earth.
5. If capacitors are fitted and the motor tries to start and stalls, test them.
6. If no electrical fault is found and the compressor tries to start, suspect a **seized compressor**.

### 2. Compressor will not run — three-phase

1. Check the supply on all three phases right through the circuit, working from the circuit diagram.
2. Check the high-pressure and oil-failure cut-outs for open circuit — then find out why they operated.
3. Check the contactor. If the overload circuit is open, find the reason. If the coil is open-circuited, confirm the correct voltage is applied to it: a 240 V coil between phase and neutral, a 415 V coil between two phases.

### 3. Compressor short-cycles

1. Check supply voltage for low or fluctuating values.
2. Test the motor control. If the thermostat is causing it, replace it before the compressor and windings suffer. If a pressure control is causing it, check system pressures, correct the system fault, or adjust the differential to the approved setting.
3. If it is cycling on the overload, measure amps and watts against the nameplate and find the reason for the overload.
4. Test windings, capacitor and relay with the ohmmeter, megger and capacitor tester.
5. If a high-pressure cut-out or auto-reset oil-failure switch is fitted, check system pressures.

### 4. Compressor runs but there is little or no refrigeration

1. Test the defrost timer circuit — a timer stuck in defrost will keep the machine warm indefinitely.
2. Megger the electric defrost heaters for a short to earth.
3. On hot-gas defrost, check the defrost solenoid: if the pipes into and out of the valve are both hot, the valve is leaking through. Check the coil for supply and for a short.
4. If cooling depends on an evaporator fan, confirm the fan runs.
5. If nothing electrical is wrong, go back to the refrigeration cycle — worn compressor, leaking valves, shortage of charge, overcharge.

### 5. Evaporator blocked with ice

1. Check the defrost timer operation and its wiring.
2. Check the door switch if it controls the fan.
3. Check the defrost solenoid for open circuit or a loose wire.
4. Check the thermostat or LP control setting and reset it to specification. If off-cycle defrost is being used with a pressure control, leave the compressor off until the ice melts, then set the control to cut in at the pressure at which ice melts.
5. If ice has built up in the drain pan, test the drain pan heater for open circuit.
6. Check the fan for an intermittent electrical fault or tight bearings.

## Handy tips that prevent wrong diagnosis

- Test thoroughly before condemning a sealed unit. There are many other reasons for a breakdown.
- A PSC motor can stall through liquid flood-back reducing lubrication, or through overload. Before removing it, try fitting a relay and start capacitor.
- A good multimeter is essential for sealed-unit testing, especially when a shunted winding is suspected — a continuity tester will not see it.
- The megger is the only satisfactory instrument for detecting a short to earth.
- **Never test a hot compressor.** Internal overloads can remain open for up to three hours. Isolate and let it cool.
- If a sealed unit will not start, test the mains voltage. Low voltage cannot produce starting torque; high voltage produces high current and burn-out.
- If a compressor will not start yet tests electrically correct, measure suction and discharge pressures.

## Preventing the repeat failure

1. A system contaminated by moisture or acid from a previous failure needs complete cleaning and dehydration, or it will fail again.
2. When a compressor is found faulty, find the reason: a defective relay, capacitor, motor protector, heater thermostat, reversing valve or check valve; a leaking refrigerant control; a blocked valve or filter; wiring errors; operating conditions beyond design limits such as high ambient or high suction temperature; or poor maintenance — blocked air-cooled condenser, faulty fan, scaled water-cooled condenser, faulty water pump, fans running the wrong way, blocked air filters.
3. Charge correctly to the manufacturer's specification. Capillary systems need the exact charge; where it cannot be weighed in, charge to approximately **3 K subcooling** at the condenser at design conditions.
4. Fit and maintain return-air filters, particularly on air-conditioners. Blocked filters drop suction pressure and cause flood-back; no filters means the evaporator blocks instead. Check centrifugal fan blades for dirt build-up.
5. Prevent short-cycling with correct airflow, correct thermostat or pressure control location and setting, and the correct charge. Motor life depends strongly on the number of starts — some large motors are limited to **three starts per hour**.
6. Size fuses correctly for the load.
7. Keep the work clean: no dirt or copper filings in the pipework, oil from sealed containers only, purge with dry nitrogen while brazing, evacuate through large lines from both sides, replace old oil and fit the appropriate filter-driers.

>! When you find and repair a fault, confirm you have also repaired the *cause*
>! of the fault and not just its symptom, and confirm it is the only fault in the
>! system. Repeated failures on the same machine are a judgement on the
>! technician, not on the equipment — and on a burnt-out compressor the second
>! failure is usually the first one still sitting there in the form of acid,
>! moisture and carbon.

## On the job

- Highest reading spans start plus run; the terminal left out is common.
- Check that start plus run equals the series reading before you wire it up.
- Cool compressor, disconnected leads, megger for earth, ohmmeter for windings.
- Compare measured watts and amps with published data — the gap names the fault.
- Never leave site without knowing why the part failed.
`,
          quiz: [
            {
              q: "Ohmmeter readings across a hermetic compressor's three terminals are: 1-2 = 4.2 ohms, 1-3 = 22.6 ohms, 2-3 = 18.4 ohms. Which terminal is run?",
              options: ["Terminal 1", "Terminal 2", "Terminal 3", "Cannot be determined without the model data"],
              answer: 1,
              explain: "The highest reading is 1-3 at 22.6 ohms, so the terminal left out — terminal 2 — is common. From common, 2-1 is 4.2 ohms and 2-3 is 18.4 ohms; the lower reading is the run winding, so terminal 1 is run and terminal 3 is start. The cross-check works: 4.2 + 18.4 = 22.6 ohms.",
            },
            {
              q: "A low-pressure control is found open on a walk-in cool room that will not run. What is the correct next step?",
              options: [
                "Short across the control to confirm the compressor runs",
                "Replace the LP control, as it has clearly failed",
                "Fit gauges and check system pressure before doing anything else",
                "Increase the cut-in setting until the contacts close",
              ],
              answer: 2,
              explain: "The LP control may be doing exactly what it is designed to do, reporting low pressure from a leak, a restriction or low load. Shorting it out starts a compressor that may have no refrigerant to cool or lubricate it. Only after confirming pressures are normal is it reasonable to conclude the control itself has failed.",
            },
            {
              q: "A freezer with automatic electric defrost runs continuously but produces almost no refrigeration. Which electrical check should come first?",
              options: [
                "Megger the compressor windings to frame",
                "Check whether the defrost timer is stuck in the defrost position",
                "Measure the phase-to-phase voltage unbalance",
                "Replace the run capacitor",
              ],
              answer: 1,
              explain: "A timer stuck on defrost keeps the heaters energised or the hot gas valve open, so the compressor runs while the cabinet never pulls down — and it costs nothing to check. Winding and capacitor tests come later; unbalance is a three-phase supply issue that would show up as overload tripping rather than as a warm cabinet.",
            },
            {
              q: "A hermetic compressor has burnt out on a system contaminated with moisture and acid from an earlier failure. What is essential before the replacement is commissioned?",
              options: [
                "Fitting a larger fuse so the new compressor is not nuisance-tripped",
                "Complete cleaning and dehydration of the system, plus finding how the contamination got in",
                "Adding extra refrigerant charge to dilute the acid",
                "Meggering the new compressor at 1000 V to confirm it is sound",
              ],
              answer: 1,
              explain: "Acid, moisture and carbon left in the pipework will attack the new motor's insulation exactly as they attacked the old one, so only thorough cleaning, an oil and refrigerant change, dehydration and filter-driers will prevent a repeat — and the original source of contamination must be found. Over-fusing removes protection, extra charge does not neutralise acid, and a single-phase hermetic is meggered at 500 V.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
