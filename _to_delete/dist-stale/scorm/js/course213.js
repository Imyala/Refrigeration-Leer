/* =========================================================================
   Course content, module 213 — Controls and control drawings.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 13 — Controls and
   control drawings.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — Ch 13, controls and control drawings",
  ];

  const REFS_ELEC = REFS.concat([
    "AS/NZS 3000 Wiring Rules — isolation, protection and testing of electrical installations",
    "AS/NZS 4836 — safe working on low-voltage electrical installations and equipment",
  ]);

  const REFS_SYM = REFS.concat([
    "AS 1102 series / IEC 60617 — graphical symbols for electrotechnical documentation",
  ]);

  const MODULES = [

  /* ======================================================================
     Module R2.13 — Controls and control drawings
     ====================================================================== */
  {
    id: "v2-controls-drawings",
    stream: "v2",
    title: "R2.13 · Controls and control drawings",
    blurb: "How automatic control systems sense, decide and act — the terminology, the control actions, the electrical drawings, and a repeatable method for tracing and fault-finding a circuit.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "control-loops",
        title: "Closed loops, open loops and the two kinds of signal",
        minutes: 11,
        simple: "A control system is just a machine copying what a person would do: look at a thermometer, decide, flick a switch, look again. When the machine checks its own result afterwards, that is a closed loop. When it never checks — it just assumes cold outside means the heater should run — that is an open loop, and it can easily get things wrong.",
        refs: REFS,
        content: `
Almost nothing in refrigeration and air-conditioning runs under full manual
control any more. A coolroom, a chiller, a supermarket rack, a split system in
an office — all of them hold conditions automatically, and the technician's job
is far more often *finding out why the automatic control stopped doing its job*
than turning valves by hand. That is why designers supply control drawings:
they are the plan of how the plant is supposed to behave. Reading them, and
understanding the loop behind them, is a core trade skill.

## Start with the human loop

Imagine you are given a thermometer on the wall of a coolroom and a switch that
starts the compressor. You are told to hold 3°C. You look at the thermometer,
compare what you see with the number in your head, and flick the switch. Later
you look again, and if the room has gone too cold you switch off.

Break that down and every part of an automatic control system is already there:

- your **eye** is the sensor
- your **brain** holds the desired value and makes the comparison — the
  controller
- your **hand and the switch** are the controlled device
- the **room** is the process being controlled
- looking again afterwards is **feedback**

The loop works perfectly, right up until you get bored, get called away, or go
home for the night. Human controllers drift. Mechanical ones do not.

## The closed loop

The mechanical version keeps the same shape. The controller is set to the
desired value with a knob or a keypad. A sensing element continuously compares
the actual condition with that setpoint. In a simple mechanical thermostat the
sensing element develops a force — a bellows pressure from a charged bulb, or
the bending of a bimetal — that works against a spring set by the setpoint
adjustment. When the sensing force overcomes the spring, a snap-action toggle
mechanism makes a set of contacts, current flows to a coil, and the coil
operates a contactor or a valve. As the condition returns towards the setpoint,
the whole thing reverses.

The essential feature is that the result of the correction is fed back to the
sensor. The sensor sits *in the controlled medium*. Correct too far and the
sensor sees it and stops the correction. That is what closed loop means, and it
is why a closed loop can hold a condition it was never explicitly told about —
it simply keeps correcting until the error goes away.

## The open loop

Sometimes there is no feedback, on purpose. An open loop assumes a fixed
relationship between the condition you want and some other condition you can
measure more easily.

The classic example is perimeter heating in a large building. An outdoor air
sensor feeds the controller. When outdoor temperature falls below a set value,
the controller starts the circulating pump and the boiler, and water flow and
temperature are scheduled against outdoor air. Nothing in that chain ever asks
the perimeter offices how they feel. If the relationship assumed by the designer
holds — cold outside means heat loss through the glass — it works. If it does
not (a sunny winter afternoon, an empty floor, a change of tenancy), the
building over-heats or under-heats and no part of the control system knows.

Other open loop arrangements you will meet:

- a defrost that is both **time-initiated and time-terminated** — it runs for a
  fixed 20 minutes whether the coil is clear at 8 minutes or still iced at 25
- a time clock that starts an air-handler at 06:30 regardless of the space
  condition
- a condenser fan cycled on ambient temperature rather than on head pressure

| | Closed loop | Open loop |
|---|---|---|
| Sensor location | In the controlled medium | Outside it, on a related condition |
| Feedback | Yes — result checked | None |
| Corrects for unexpected load | Yes | No |
| Typical use | Room, coil, discharge, pressure control | Weather compensation, timed events |
| Failure mode | Hunting, offset, slow correction | Silent over- or under-correction |

> A good habit when you arrive at a plant: ask *what does this control actually
> measure, and is that the same thing the customer is complaining about?* Half
> of all "control faults" are open loop strategies asked to do a closed loop job.

## Analogue and digital control

The second big split is not the loop shape but the nature of the signal.

**Analogue control** works with a signal that varies continuously and is
proportional to the measured value at every instant. The traditional example is
pneumatic control, still found in older commercial buildings: a pneumatic
sensor bleeds a branch line so that the air pressure sent to the controller
varies smoothly with temperature. Electrical analogue signals do the same job —
0–10 V and 4–20 mA are the two you will meet most, along with sensors whose
resistance varies continuously (thermistor, PT1000).

**Digital control** does not read the signal continuously. The controller
samples the input at fixed time intervals, converts each sample to a number
through an analogue-to-digital converter, performs arithmetic on those numbers
using its control algorithm, and converts the answer back to a signal that
drives the actuator. Because the value only exists at sampling instants, this is
called *discrete* control signalling. Plot the two and the analogue actuator
position is a smooth curve; the digital one is a staircase whose steps are the
sampling interval wide.

### Worked example — how coarse is the staircase?

A DDC controller has a 10-bit analogue input, so it divides the input range
into 2 to the power 10 = **1024 steps**. The input is a 0–10 V signal from a
temperature transmitter scaled 0–50°C.

- Voltage per step = 10 V ÷ 1024 = **0.0098 V**
- Temperature per step = 50 K ÷ 1024 = **0.049 K**

So the controller can resolve about **0.05 K** — far finer than the sensor's own
accuracy, which will be around ±0.3 K. The staircase is not the limitation; the
sensor is. Sampling every second on a room that takes 15 minutes to change by
1 K is likewise no limitation at all. This is why digital control is entirely
suitable for HVAC even though it only looks at the world in snapshots.

> One vocabulary trap. In controller catalogues, *digital input* and *digital
> output* mean binary on/off points — a pressure switch contact, a relay driving
> a contactor coil. *Analogue input/output* means the continuously variable
> ones. So a "digital controller" has both digital and analogue points, and the
> word is doing two different jobs on the same page.

## What to remember

- Every control system is sensor → controller → controlled device → process,
  and the loop is closed only if the sensor sees the result.
- Open loop control is cheap and blind; it is fine where the assumed
  relationship really holds and dangerous where it does not.
- Analogue signals are continuous; digital controllers sample, calculate and
  output at intervals.
- Sampling and resolution are almost never the weak link in HVAC — sensor
  accuracy and sensor *location* are.
`,
        quiz: [
          {
            q: "An outdoor air sensor schedules boiler water temperature for a building's perimeter heating. Occupants on the sunny north face complain of overheating. What is the underlying control characteristic?",
            options: [
              "The loop is closed but the differential is too wide",
              "The loop is open — nothing feeds the actual space condition back to the controller",
              "The controller is analogue and cannot resolve small changes",
              "The sensor is sampling too slowly for the process",
            ],
            answer: 1,
            explain: "Water temperature is scheduled from outdoor air only, so solar gain on one face never reaches the controller. Widening or narrowing a differential cannot fix a loop that has no feedback path; the cure is local control — zone valves or thermostatic radiator valves — that does close the loop.",
          },
          {
            q: "What makes a control loop 'closed'?",
            options: [
              "The contacts are normally closed rather than normally open",
              "The controller is enclosed in a sealed panel",
              "The sensor measures the medium being controlled, so the effect of the correction returns to the controller",
              "The circuit has no manual override",
            ],
            answer: 2,
            explain: "Closed refers to the information loop, not to contacts or enclosures. Feedback is the defining feature: correction changes the medium, the sensor sees the change, and the controller backs off. Normally-closed contacts are just a contact arrangement and have nothing to do with it.",
          },
          {
            q: "A digital controller with a 12-bit analogue input (4096 steps) reads a pressure transmitter scaled 0–2500 kPa. What is the resolution of one step?",
            options: ["About 0.6 kPa", "About 2.5 kPa", "About 6 kPa", "About 25 kPa"],
            answer: 0,
            explain: "2500 kPa ÷ 4096 = 0.61 kPa per step. Note this is resolution, not accuracy — the transmitter itself may be ±1% of span, which is ±25 kPa, so the digital step size is not what limits the reading.",
          },
          {
            q: "Which statement about analogue versus digital control is correct?",
            options: [
              "Analogue control cannot modulate an actuator, only switch it",
              "A digital controller reads its inputs continuously, like a pneumatic controller",
              "A pneumatic controller sends a continuously varying signal, while a digital controller samples at set intervals and calculates between samples",
              "Digital control is unsuitable for temperature loops because of the sampling delay",
            ],
            answer: 2,
            explain: "Continuous versus discrete is the real distinction. Pneumatic control is the classic analogue modulating system, so option A is backwards, and HVAC processes are so slow relative to a one-second scan that sampling delay is irrelevant.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "control-elements",
        title: "The elements of an automatic control system",
        minutes: 11,
        simple: "Every automatic control has the same three working parts: something that feels the change, something that decides, and something that does the work. Think of a hand on a hot plate, a brain deciding it is too hot, and an arm pulling away. Once you can name those three parts on any piece of plant, fault-finding becomes a process of elimination rather than guesswork.",
        refs: REFS,
        content: `
Strip away the brand names and every automatic control system in the trade — a
domestic fridge thermostat, a supermarket pack controller, a 2 MW chiller — is
built from the same three elements. Learning to name them on unfamiliar plant is
what lets you fault-find equipment you have never seen before, because a fault
must be in one of three places, plus the wiring between them.

## The three elements

**1. The sensor.** A device that responds to a change in the *controlled
variable* by changing one of its own characteristics — its length, its volume,
its shape, or its electrical resistance. It is the only part of the system that
touches the real world.

| Sensor | What changes | Where you meet it |
|---|---|---|
| Bimetal strip | Bends as the two metals expand differently | Older room thermostats, klixon overloads, defrost termination |
| Power element (bulb, capillary, bellows) | Charge pressure rises with bulb temperature | Mechanical thermostats, TX valves, defrost thermostats |
| Thermistor (NTC) | Resistance falls sharply as temperature rises | Electronic controllers, coil and discharge sensors |
| RTD (PT100 / PT1000) | Resistance rises linearly with temperature | Chillers, BMS, laboratory and pharmaceutical work |
| Pressure transducer | Output voltage or current follows pressure | Electronic expansion valve control, digital pack controllers |
| Humidity element | Capacitance changes with moisture content | Humidistats, air-handler control |
| Flow / sail switch | Contacts make when liquid or air moves | Chiller flow proving, fan proving |

**2. The controller.** It compares what the sensor reports with the setpoint,
and when the difference is big enough it directs the controlled device to take
corrective action. In a thermostat, the whole comparison is done mechanically by
a spring and a snap toggle. In an electronic controller it is arithmetic. Either
way the job is the same: *compare, decide, command.*

**3. The controlled device.** The thing that actually does the work at the
controller's direction. Electrically operated examples include compressor
motors, heater elements, fans, solenoid valves, reversing valves, damper motors
and modulating water valve actuators. On plant with variable-speed drives or EC
fans, the controlled device is the drive.

To those three, most modern texts add two more ideas that are worth naming
separately because they are where the faults hide: the **process** (the room,
the coil, the chilled water loop — the thing whose behaviour causes the delay)
and the **feedback path** (the wiring or the network that carries the sensor
signal back).

## The chain of functions

Those elements perform five interrelated functions, and it is worth thinking of
them in sequence when tracing a fault:

1. The sensing element measures the change in temperature, pressure, humidity
   or flow.
2. The control mechanism translates that change into a form of energy the plant
   can use — a set of closed contacts, a 0–10 V output, a branch air pressure.
3. Wiring, pneumatic tube or mechanical linkage transmits that energy to the
   motor, valve or contactor.
4. The controlled device uses the energy to take corrective action — start a
   compressor, drive a damper, throttle a valve.
5. In a closed loop, the sensor detects the resulting change, and once the
   desired value is reached the controller stops the correction so the plant
   does not overshoot.

Fault-finding is simply asking, at each numbered step, *did that happen?* If the
coolroom is warm: is the sensor reading what the room really is (step 1)? Has
the controller closed its output (step 2)? Is there voltage at the contactor
coil (step 3)? Did the contactor pull in and the motor draw current (step 4)?
Four measurements and you have the fault boxed in.

## Actuators and relays

Two more words earn their own definition.

An **actuator** is any device that converts the controller's energy into rotary,
linear or switching motion — a damper motor, a valve motor, a solenoid, a
contactor. The word covers the muscle, not the brain.

A **relay** is an accessory that lets a control do something beyond its own
capacity. It may multiply contacts, reverse the sense of a signal, change the
voltage level, or add a delay. Relays exist in electric, electronic, pneumatic
and hydraulic form. A pneumatic relay might take 100 kPa control air from the
controller and pass on only 30 kPa to an actuator, varying it as conditions
change. An electrical interposing relay might take a 24 V DC signal from a DDC
output and switch a 230 V contactor coil.

### Worked example — why the relay is there

A room thermostat's contacts are rated **5 A pilot duty at 240 V** — that is,
they are made to switch coils, not motors. The compressor it controls has a full
load current of **18 A** and a locked rotor current around **6 × FLC = 108 A**.

Wiring the compressor directly through the thermostat would weld the contacts on
the first start. Instead the thermostat switches a contactor coil drawing about
**0.1 A sealed**, and the contactor's load-bearing contacts — selected for the
motor's utilisation category — carry the 18 A. The thermostat is the brain, the
contactor is the muscle, and the coil current is the only thing the brain has to
carry.

>! A controlled device obeys the controller, not you. A compressor stopped on
>! a satisfied thermostat, a fan stopped on a de-ice timer, or a pump stopped by
>! a BMS schedule can all restart without warning. Isolate at the main switch,
>! lock and tag it, and prove dead before working on any of it.

## Where each element fails

| Element | Typical failure | Symptom at the plant |
|---|---|---|
| Sensor | Drifted calibration, open thermistor, lost bulb charge, sensor in the wrong place | Plant holds the wrong condition, or runs continuously, or never starts |
| Feedback path | Broken cable, water in a plug, network fault | Controller alarms sensor fault, or defaults to a fixed output |
| Controller | Setpoint changed, parameter lost, output relay welded or open | Output never changes state, or changes at the wrong value |
| Controlled device | Coil open, contactor jammed, actuator linkage slipping, solenoid stuck | Controller commands correctly and nothing happens |
| Process | Blocked coil, iced evaporator, no airflow past the sensor | Everything measures correct but the space is wrong |

## On the job

- Name the three elements out loud before you open the panel: what senses, what
  decides, what acts.
- A sensor in the wrong place is a fault even when it is perfectly accurate —
  check for return air short-circuiting, sun on a wall sensor, a bulb not
  clamped to the suction line.
- Relays and contactors exist because controls have small contacts. Never bypass
  one by feeding a load through a control's contacts "just for a test".
- When the controller commands and nothing moves, measure at the controlled
  device's own terminals. That single measurement splits the fault into wiring
  versus device.
`,
        quiz: [
          {
            q: "A DDC output commands a chilled water valve to 60%, but the valve has not moved for a week and the coil is fully open. Which element should you measure at first to split the fault fastest?",
            options: [
              "The room sensor, to confirm it is calibrated",
              "The actuator's own terminals, to see whether the commanded signal is arriving there",
              "The chilled water flow switch",
              "The BMS network cable at the head end",
            ],
            answer: 1,
            explain: "Measuring at the controlled device's terminals splits the system into two halves in one test: signal present means the actuator or its linkage has failed; signal absent means the fault is upstream in the controller or wiring. Starting at the sensor tests the element least implicated by the symptom.",
          },
          {
            q: "Why is a contactor used between a room thermostat and a compressor motor?",
            options: [
              "To convert the thermostat's DC output to AC",
              "Because thermostat contacts are pilot-duty rated and cannot carry motor running or starting current",
              "To provide the differential the thermostat lacks",
              "To give the compressor a soft start",
            ],
            answer: 1,
            explain: "The thermostat switches only the small coil current; the contactor's load-bearing contacts carry the motor current, including locked rotor current of roughly six times FLC. A contactor gives no soft start at all — it is a straight direct-on-line connection.",
          },
          {
            q: "Which of these is a sensor rather than a controlled device?",
            options: ["A liquid line solenoid valve", "A reversing valve", "A power element with a bulb clamped to the suction line", "A damper motor"],
            answer: 2,
            explain: "The power element responds to suction line temperature by changing its charge pressure — it senses. Solenoid valves, reversing valves and damper motors all take action at the direction of a controller, so they are controlled devices.",
          },
          {
            q: "A coolroom sensor reads 2.0°C and is accurate, the controller output is off, yet the customer says product is warm. Which element of the loop is most likely at fault?",
            options: ["The sensor", "The controller", "The controlled device", "The process — including where the sensor sits relative to the product"],
            answer: 3,
            explain: "Every electrical element is doing what it should, so the problem lies in the process and sensor placement: the sensor may be in the coil discharge or in a well-circulated corner while the product sits in stagnant air. Replacing a correct sensor or controller here would change nothing.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "control-terminology",
        title: "Control terminology that changes what you do",
        minutes: 12,
        simple: "Control words sound interchangeable but each one describes a different behaviour. Setpoint is what you asked for, control point is what you actually get, differential is the gap between switching on and off, and lag is the time the plant takes to catch up. Getting these names straight is the difference between adjusting the right knob and chasing a fault that was never there.",
        refs: REFS,
        content: `
Most "control faults" reported by customers are not faults at all — they are the
normal behaviour of a control that has been set up badly, or a normal
characteristic that nobody explained. You cannot tell the difference without the
vocabulary. Each term below describes a distinct, measurable behaviour, and each
one points at a different adjustment.

## The core terms

The **controlled variable** is the condition being controlled — in HVAC and
refrigeration almost always temperature, pressure, humidity or flow rate. The
**controlled medium** is what carries it: room air, chilled water, refrigerant
vapour, product.

The **setpoint** is the value marked on the control's scale or entered into the
controller. Set a thermostat to 25°C and the setpoint is 25°C.

The **control point** is the value actually being held. That same thermostat may
sit steadily at 24°C. The setpoint is what you asked for; the control point is
what the plant delivers.

**Cycling** is the regular repetition of change in the control point. A room
drifts up to 26°C, cooling becomes effective and drags it down to 24°C, the
control cuts out, and it drifts up again. Round and round.

The **differential** (also called the differential gap) is the amount the
controlled variable must change to move a two-position control from on to off.
If the contacts make at 26°C and break at 24°C:

**Differential = 26 − 24 = 2 K**

**Offset** is a *sustained* difference between setpoint and control point,
caused by the characteristics of the control system rather than by a fault. A
proportional controller set to 23°C might hold 22°C steadily under a particular
load:

**Offset = 23 − 22 = 1 K**

**Lag** is the delay between corrective action and its effect on the controlled
medium. It has two parts. *Thermal lag* is the time for the coil, air and
structure to change temperature. *Transport lag* is the time for cooled air to
travel down the ductwork to the space. Start a plant with the room at 26°C and
the room may reach 27°C before the first cool air arrives; stop it at 25°C and
air still in the duct may pull the room down to 23°C. The swing seen in the room
is differential plus lag, not differential alone.

**Deadband** is a deliberate band in which nothing happens at all. On a
heat/cool thermostat, heating may be set to 20°C and cooling to 24°C, giving a
**4 K deadband** in which neither runs. Its purpose is to stop the plant heating
and cooling in the same hour, which wastes energy and can overload equipment.

**Throttling range** is the modulating equivalent of differential: the total
change in the controlled variable needed to drive the controlled device from
fully closed to fully open. **Proportional band** is the same idea expressed as
a percentage of the sensor's span.

**Reset** has two completely different meanings in this trade, and confusing
them is common:

- *Manual reset* on a safety control — an HP switch or overload that must be
  physically pressed before the plant will run again.
- *Reset* as a control strategy — automatically shifting a setpoint against
  another variable, for example raising a chilled water setpoint from 6°C to
  10°C as outdoor air falls from 30°C to 18°C. The integral term of a PI loop
  was historically called *automatic reset* for the same reason: it resets the
  control point back onto the setpoint.

**Hunting** is continuous, unstable cycling of a modulating control — the valve
swinging open and closed, the space temperature oscillating, and never settling.
Hunting is a symptom of too much gain (too narrow a proportional band), an
actuator that is far faster than the process, or a sensor in the wrong spot.

**Desired value**, **actuator** and **relay** complete the set: the value
required in the medium, the muscle that converts control energy into motion, and
the accessory that extends what the controller can do.

## Worked example 1 — differential and cycle rate

A coolroom thermostat cuts in at 4°C and cuts out at 1°C.

- Differential = 4 − 1 = **3 K**
- The room warms at about 1 K every 6 minutes with the plant off → off time =
  3 × 6 = **18 min**
- It pulls down at about 1 K every 3 minutes with the plant running → run time =
  3 × 3 = **9 min**
- Cycle time = 18 + 9 = **27 min**, giving 60 ÷ 27 = **2.2 starts per hour**

Now the customer complains of a 3 K swing and you halve the differential to
1.5 K. Off time becomes 9 min and run time 4.5 min: cycle time 13.5 min, or
**4.4 starts per hour**. Halve it again and you are at nearly 9 starts per hour
— and every start is a locked-rotor current event, a period of poor oil return
and a thermal shock to the windings.

>! Reducing the differential always increases the number of starts. Most
>! hermetic and semi-hermetic compressors are limited to somewhere between 6 and
>! 12 starts per hour, with a minimum off time of 3 to 5 minutes to allow
>! pressures to equalise. Tightening a differential to satisfy a complaint about
>! temperature swing is one of the classic ways technicians destroy compressors.

## Worked example 2 — throttling range and proportional band

A discharge air temperature controller drives a chilled water valve. The valve
is fully closed at 10°C and fully open at 16°C, and the setpoint is 13°C.

- Throttling range = 16 − 10 = **6 K**
- Valve travel per kelvin = 100% ÷ 6 K = **16.7% per K**
- The temperature sensor is scaled 0–50°C, so its span is 50 K
- Proportional band = 6 ÷ 50 × 100 = **12%**
- Gain = 100 ÷ 12 = **8.3**

If the load requires the valve to sit at 66.7% open to hold steady, the
temperature at which the valve sits there is 10 + (0.667 × 6) = **14.0°C**. The
setpoint is 13.0°C, so the plant runs with an offset of **1.0 K** — and no
amount of proportional-only tuning will remove it, because the valve position
and the sensor position are locked together.

Narrow the throttling range to 2 K to shrink that offset and gain rises to 25:
now a 0.1 K measurement wobble commands a 5% valve movement, and the loop will
very likely hunt.

## Quick reference

| Term | Measure of | Units | Adjust it when |
|---|---|---|---|
| Setpoint | What you asked for | °C, kPa, %RH | The condition is wrong but stable |
| Control point | What you get | Same | Never — it is an outcome |
| Differential | On-to-off gap, two-position | K or kPa | Cycling too fast or swing too wide |
| Deadband | Band where nothing runs | K | Heating and cooling fight each other |
| Offset | Sustained setpoint-to-control-point error | K | Only by adding integral or reset |
| Lag | Delay before effect | minutes | By relocating the sensor, not by tuning |
| Throttling range | Change for full actuator travel | K or kPa | Hunting (widen) or sloppy control (narrow) |
| Hunting | Instability | — | Widen band, slow the actuator, move the sensor |

## On the job

- Before adjusting anything, write down the setpoint and measure the control
  point. If they differ steadily, you have offset, not a fault.
- If the swing is much wider than the differential, the extra is lag — chase
  sensor location and airflow, not the thermostat.
- Never tighten a differential without checking the resulting starts per hour.
- Hunting is nearly always cured by making the control *less* eager, not more.
- A manual reset device that has tripped is telling you something happened.
  Find out what before you press it, and never press it a second time without a
  diagnosis.
`,
        quiz: [
          {
            q: "A thermostat is set to 25°C but the space sits steadily at 23.5°C under all normal loads. What is this called, and what fixes it?",
            options: [
              "Differential — reduce the cut-in to cut-out gap",
              "Offset — it is inherent in proportional control and is removed by adding integral action or a reset strategy",
              "Lag — relocate the sensor closer to the coil",
              "Hunting — widen the proportional band",
            ],
            answer: 1,
            explain: "A sustained, steady difference between setpoint and control point is offset, which proportional-only control cannot remove because actuator position is locked to sensor position. Hunting means the value never settles, and here it is perfectly steady.",
          },
          {
            q: "A coolroom control has a 2 K differential. Off time is 10 minutes and run time is 5 minutes. The customer asks for tighter temperature, so the differential is reduced to 1 K. What is the new starts-per-hour figure?",
            options: ["4 starts per hour", "6 starts per hour", "8 starts per hour", "12 starts per hour"],
            answer: 2,
            explain: "Halving the differential halves both times: 5 min off plus 2.5 min run gives a 7.5 minute cycle, so 60 ÷ 7.5 = 8 starts per hour, up from 4. That is approaching the limit for many compressors, and it shows why tightening a differential is never free.",
          },
          {
            q: "A discharge air controller has a sensor spanned 0–100°C and a throttling range of 5 K. What is its proportional band?",
            options: ["0.5%", "5%", "20%", "50%"],
            answer: 1,
            explain: "Proportional band expresses throttling range as a percentage of sensor span: 5 ÷ 100 × 100 = 5%. Gain is the reciprocal expression, 100 ÷ 5 = 20, which is high — a loop this tight would be a strong candidate for hunting.",
          },
          {
            q: "A modulating heating valve swings fully open then fully shut every ninety seconds and the space temperature never settles. Which action is most likely to help?",
            options: [
              "Reduce the throttling range so the valve responds sooner",
              "Increase the setpoint by 2 K",
              "Widen the throttling range and check that the sensor is not sitting in the discharge stream",
              "Change the valve to a two-position type",
            ],
            answer: 2,
            explain: "That is hunting caused by excessive gain or a sensor seeing the effect too quickly. Widening the band reduces valve movement per kelvin, and moving the sensor out of the immediate discharge stops it responding to its own correction. Narrowing the range increases gain and makes hunting worse.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "control-action",
        title: "Control action: on-off, floating, proportional, PI and PID",
        minutes: 14,
        simple: "Controls differ in how they respond to being wrong. Some slam fully on or fully off, like a light switch. Some inch a valve open a bit at a time, like easing a tap. Some keep nudging until the error is completely gone, and some also watch how fast things are changing. Knowing which action you are looking at tells you what behaviour is normal and what is a fault.",
        refs: REFS,
        content: `
Control systems are usually named by their energy source — pneumatic,
electromechanical, electronic. That tells you what to expect in the panel, but
it tells you nothing about the *behaviour*. For that you need the control
action: how the system responds when the controlled variable deviates. Does it
drive the device hard over? Does it inch it along while the error lasts? Does it
compute a position? Control action is independent of energy source: you can
build proportional control pneumatically or in software.

## Two-position (on-off) control

The simplest action: the controller turns the energy to the actuator fully on or
fully off. Simple electric thermostats, humidistats and pressure controls are
the everyday examples, and they run an enormous share of the industry's plant:

- starting and stopping a compressor on room or product temperature
- stopping the compressor on low suction pressure or high discharge pressure
- energising heaters as temperature falls, or a reversing valve solenoid in a
  heat pump, or a liquid line solenoid
- initiating and terminating a defrost
- stopping a motor when its winding temperature exceeds a limit
- closing fire dampers on high duct temperature or a smoke signal
- raising an alarm, indexing a roll filter on pressure drop, repositioning
  outside-air dampers

Two-position control's weakness is built in: the controlled variable must swing
across the differential before anything changes, and lag adds more swing on top.
The result is an overshoot at each end. Oversizing makes it worse — a plant with
double the required capacity pulls the space down faster than the sensor and the
room can respond, so the overshoot grows and the cycles get shorter.

### Timed two-position control and anticipators

Two-position thermostats are often improved with a small internal heater called
an **anticipator**, which fools the thermostat into acting early.

- A **cooling anticipator** is wired so it is energised when the contacts are
  *open* — that is, when cooling has just stopped. It warms the inside of the
  thermostat faster than the room warms, so the thermostat calls for cooling
  before the room has really drifted as far as the differential would suggest.
  It is usually a fixed resistor.
- A **heating anticipator** is wired in series with the heating contacts, so it
  is energised while heating is running. It warms the thermostat faster than the
  room, satisfying the thermostat early and preventing overshoot. It is normally
  adjustable and should be set to the actual current flowing in the heating
  control circuit.

The result is what the trade calls *timed* two-position action. Cycles become
more frequent but the temperature swing in the space is much smaller. The plant
behaves as if it were modulating even though the compressor is still simply on
or off.

## Floating control

Floating control sits between on-off and proportional. The sensing element moves
a selector that is free to float between two contacts with a gap between them.

- Touch the upper contact and the actuator motor drives in one direction, and
  keeps driving for as long as contact is maintained.
- Break contact and the motor **stops exactly where it is** — a damper or valve
  left, say, 40% open.
- Touch the lower contact and it drives back the other way from wherever it
  happened to stop.

Because the controlled variable is free to wander anywhere in the gap without
producing any action, the actuator position drifts, or "floats", over time. It
is cheap, it needs only three wires (common, open, close), and it is still very
common on modern damper and valve actuators sold as *three-point floating*
types.

Its weakness is that there is no feedback of actuator position, so over many
hours the controller's idea of where the actuator sits and its real position
diverge. Good floating actuators re-synchronise by periodically driving hard
against an end stop; if yours does not, a valve reading 50% on the graphics may
be sitting shut.

## Proportional control

In proportional (P) control the system is always on and there is continuous
feedback between the controlled device and the sensing element. The device moves
only as far as is needed to answer the change in the controlled variable. Sensor
position and actuator position are locked together: for every position of the
sensing element within its range there is one, and only one, position of the
actuator.

The change in the controlled variable that drives the actuator from fully closed
to fully open is the **throttling range**.

A typical example is a chilled water coil. The sensor sits in the discharge air,
measures its temperature, and signals the controller. The controller works out
the required correction and sends a new signal to the valve actuator, which
repositions the valve and changes water flow through the coil — which changes
the discharge air temperature that the sensor is measuring.

The catch, as covered in the terminology lesson, is that proportional control
carries a permanent **offset** at every load except one. That is not a fault; it
is arithmetic. The only ways to shrink it are to narrow the throttling range
(which risks hunting) or to add another term.

## PI and PID

**PI — proportional plus integral.** The integral term looks at the accumulated
error over time. As long as any error persists, integral keeps shifting the
output further in the correcting direction, and it stops shifting only when the
error reaches zero. That drives the control point onto the setpoint and
eliminates offset. Its tuning parameter is the integral time (or repeats per
minute); too fast and the loop overshoots and hunts, too slow and the plant
takes an hour to settle.

Integral has one field-relevant failure mode, **windup**. If the plant cannot
meet the load — a valve fully open, a compressor locked out — the integral term
keeps accumulating. When the plant returns, the output is buried at one extreme
and the loop massively overshoots before recovering. Modern controllers include
anti-windup limits; if you meet a loop that overshoots badly after every
restart, suspect it.

**PID — proportional plus integral plus derivative.** The derivative term
responds to the *rate of change* of the error, applying extra correction while
the error is moving quickly and backing off as it flattens. It shortens the
recovery after a sudden load change. Derivative is also the term most easily
upset by noisy signals, because a noisy measurement has a large rate of change
even when nothing is really happening.

Put the three on a graph of control point against time and the story is clear:
plain P settles quickly but parallel to the setpoint, separated by the offset;
PI curls back onto the setpoint over the following cycles; PID does the same but
with less deviation on the way.

| Action | Actuator behaviour | Offset | Typical use |
|---|---|---|---|
| Two-position | Fully on or fully off | Swing, not offset | Compressors, solenoids, heaters, safeties |
| Timed two-position | On/off with anticipator | Smaller swing | Room thermostats |
| Floating | Drives while contact made, stops in place | Wanders in the gap | Dampers, three-point valve actuators |
| Proportional | One position per sensor value | Yes, load-dependent | Simple modulating valves, older pneumatics |
| PI | As P, plus integral trim | Removed | Most HVAC loops: discharge air, CHW, static |
| PID | As PI, plus rate response | Removed | Fast loops such as duct static pressure |

## The modulating devices

Control action is only as good as the device that carries it out. The modulating
hardware you will meet:

- **Modulating water and steam valves** driven by 0–10 V or three-point floating
  actuators, and **damper actuators**, spring-return for fire and outside-air duties
- **Variable speed drives** on fans and pumps, and **EC motors** with a 0–10 V
  speed input — now the dominant way of modulating airflow
- **Electronic expansion valves**, stepper-driven, holding superheat under PI
  control
- **Digital scroll and variable-speed compressors**, which modulate capacity
  itself; a digital scroll unloads by pulse-width modulation, spending part of
  each 15–20 second period unloaded, so the *average* capacity is modulated even
  though the mechanism is two-position
- **Hot gas bypass**, which modulates the effect of a fixed-capacity compressor
  rather than the compressor itself, at a real energy cost

### Field practice — tuning without a manual

1. Put the loop in P-only if you can, with integral very slow.
2. Start with a wide throttling range. The loop should be sluggish but stable.
3. Narrow the range in steps until you see the beginnings of oscillation, then
   back off to roughly double the range at which it oscillated.
4. Bring integral in, starting slow, until the offset is removed within a few
   minutes without overshoot.
5. Leave derivative at zero unless the loop is genuinely fast and the signal
   clean.
6. Record what you changed, and log the loop for a full day before signing off.

Every control decision is eventually weighed in money — better product quality,
higher production and lower running costs against the capital cost of a more
sophisticated system and its payback period. A PID loop on a coolroom compressor
that is going to be on or off anyway buys nothing.

## What to remember

- Control action describes response, not energy source.
- On-off gives swing; anticipators make it smaller by making cycles shorter.
- Floating stops the actuator wherever it is and has no position feedback.
- Proportional alone always carries offset; integral removes it; derivative
  reacts to rate of change.
- Match the action to the process — modulating control on a slow, cheap process
  is wasted, and two-position control on a critical process is a complaint
  waiting to happen.
`,
        quiz: [
          {
            q: "A three-point floating actuator on an outside air damper is commanded to 50% but is physically shut. What is the underlying reason this can happen?",
            options: [
              "Floating actuators carry no position feedback, so commanded and actual position can drift apart over time",
              "The actuator is proportional and has offset",
              "The controller's integral term has wound up",
              "The damper spring return has failed",
            ],
            answer: 0,
            explain: "Floating control drives while a contact is made and stops wherever it happens to be, with nothing reporting real position back. Good actuators re-synchronise by driving hard against an end stop. Offset and windup belong to modulating loops with a continuous output signal, not to three-point drift.",
          },
          {
            q: "Why does a heating anticipator reduce temperature swing in a space?",
            options: [
              "It heats the space directly during the off cycle",
              "It is a small heater energised while heating runs, warming the thermostat faster than the room so the thermostat cuts out early and prevents overshoot",
              "It widens the thermostat's differential",
              "It delays the start of the heater to prevent short cycling",
            ],
            answer: 1,
            explain: "The anticipator warms the thermostat's own element ahead of the room, so the control acts before lag has had time to overshoot. It shortens cycles rather than lengthening them, and it narrows the effective swing rather than widening the differential.",
          },
          {
            q: "A chilled water valve loop is stable but the discharge air sits 1.2 K above setpoint at every load. Which change addresses the cause?",
            options: [
              "Add derivative action",
              "Increase the actuator stroke time",
              "Add or speed up integral action so the accumulated error drives the output until the error is zero",
              "Increase the setpoint by 1.2 K",
            ],
            answer: 2,
            explain: "A steady error at all loads is proportional offset, and integral is the term designed to remove it by acting on accumulated error. Derivative responds only to rate of change and does nothing to a steady error; shifting the setpoint hides the symptom and moves with load.",
          },
          {
            q: "A digital scroll compressor spends part of each 20-second cycle in its unloaded state to hold suction pressure. Which description fits best?",
            options: [
              "Floating control of compressor capacity",
              "Proportional-only control with inherent offset",
              "A two-position mechanism used to produce modulating average capacity by pulse-width modulation",
              "Derivative control of suction pressure",
            ],
            answer: 2,
            explain: "The mechanism itself is loaded or unloaded — two-position — but varying the fraction of each period spent loaded modulates the average capacity. This is why digital scrolls can hold a tight suction pressure without a variable speed drive.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "electrical-drawings",
        title: "Block, circuit and wiring diagrams, and the symbols on them",
        minutes: 12,
        simple: "There are three kinds of electrical drawing and each answers a different question: what the parts are, how the logic works, and which wire goes on which terminal. Like the difference between a train network map, the timetable, and the platform signs. Pick the wrong drawing and a simple job turns into an afternoon of guessing.",
        refs: REFS_SYM,
        content: `
Nobody draws electrical components as pictures. It would take forever and it
would not show what the component *does*. Instead the industry uses symbols,
arranged on one of three standard kinds of drawing. Knowing which drawing you
have in your hand, and what it is good for, saves more time on site than any
other single skill in this module.

## The three drawings

**Block diagram.** The simplest. Each major function is a labelled box and lines
show the general order of things: supply → isolator → circuit breaker →
contactor → motor, with the crankcase heater and time delay hanging off in their
own boxes. It exists to explain the principle of operation, not the detail. Good
for orientation on plant you have never seen, useless for terminating a cable.

**Circuit diagram (schematic).** Symbols laid out to show how the circuit
functions, ignoring where components physically sit. This is the drawing the
trade uses most, because the **sequence of operation can be read directly off
it** — you can follow a call for cooling from thermostat to contactor coil to
motor without ever knowing which side of the panel anything is mounted on.
Switches are drawn in their *control* location, not their physical location.

**Wiring diagram.** Drawn for making and checking connections. It shows
components roughly where they are, terminal blocks, plugs, wire colours, and
which wire runs between which points. It is what you need in your hand when
landing conductors or checking a factory harness. It is a poor drawing for
following logic, because the wires run where the harness runs, not where the
logic goes.

| Drawing | Answers | Use it for | Weak at |
|---|---|---|---|
| Block | What are the main parts and their order? | Orientation, explaining a system | Any detail |
| Circuit / schematic | Why does it do that, and in what sequence? | Fault-finding, understanding logic | Finding a physical terminal |
| Wiring | Which wire goes where? | Terminating, continuity checks, harness faults | Following sequence of operation |

Australian Standards recognise other drawing types as well, but these three
cover nearly all refrigeration and air-conditioning work.

## Power circuit versus control circuit

Most schematics show both, and telling them apart is the first thing to do.

The **power circuit** carries the load current: mains fuses or circuit breakers,
the isolator, the load-bearing contactor contacts, overload sensing elements and
the motors themselves. It is often drawn with heavier lines.

The **control circuit** carries only enough current to operate coils and
electronics: a control fuse, thermostats and pressure switches, auxiliary
(non-load-bearing) contacts, timers, and the contactor and relay coils. Its job
is to provide the automatic operation. In many machines it runs at a single
phase 230 V taken from the supply side of the contactor to neutral; in others a
transformer drops it to 24 V.

That split gives you a powerful working assumption: **if control voltage reaches
a contactor coil, the coil energises, the load-bearing contacts close, and the
load runs.** Everything the control circuit does is aimed at deciding whether
that coil gets its voltage. So on a schematic, the coil is where you finish
reading, and the string of devices in front of it is the argument.

Diagrams may be drawn in **vertical orientation** (rails at the top and bottom,
rungs running down) or **horizontal orientation** (rails at the sides, rungs
running across, the ladder format). The layout differs; the reading method does
not.

## Symbols

There is no single universal symbol set. Australian Standards publish symbols
(the AS 1102 series, drawn from IEC 60617), CAD libraries add their own, and
imported equipment arrives with the symbols of its country of origin. This is
much less of a problem than it sounds, provided two things are true: the symbols
are used consistently through the drawing, and there is a **legend** explaining
them. Read the legend first, every time. Assuming a symbol means what it meant
on the last drawing is how technicians mistake a normally-closed contact for a
normally-open one.

Here is the range of symbols you will meet, grouped by what they do, rebuilt as
a checklist rather than a copy of any one manufacturer's table:

| Group | Symbols in the group | What to look for |
|---|---|---|
| Isolation and protection | Switch, fuse switch, circuit breaker, isolator and on-load isolator, HRC fuse (rating often written beside it), triple-pole switch | Whether it is single or triple pole, and its rating |
| Contacts | Normally open and normally closed, load-bearing and non-load-bearing (auxiliary) | Load-bearing contacts belong in the power circuit; auxiliary ones do the logic |
| Coils | Contactor coil, shown with its designation and the number of auxiliary contacts | The coil designation ties every contact on the drawing back to it |
| Overloads | Overload sensing elements (heaters), automatic-reset and manual-reset overload contacts | Auto-reset means the plant will restart itself after cooling |
| Pressure controls | Break-on-rise (HP), make-on-rise (LP), dual pressure control, manual-reset versions, differential oil pressure switch | Which way the contact acts as pressure rises |
| Temperature controls | Make-on-rise and break-on-rise thermostats, manual-reset thermostat, multi-stage and two-stage cooling/heating thermostats, klixon defrost termination, thermistor | Direction of action, and how many stages |
| Flow proving | Liquid flow switch, air sail switch, pressure differential switch | These are interlocks — they prove something is moving |
| Timing | Timer switch, time-delay motor, time-delay opening contacts, time-delay closing contacts, defrost timers (time-initiated/time-terminated and time-initiated/temperature-terminated) | Whether the delay is on energisation or de-energisation |
| Loads | Single- and three-phase motors, compressor motors, three-phase delta and star-delta motors, heaters (wattage written under), solenoid valves labelled by duty such as liquid line or unloader, crankcase heater | The label beside a solenoid tells you its job |
| Motor accessories | Start relay, start capacitor, run capacitor, single-phase compressor overload | Common on small hermetic gear |
| Switches and buttons | Push-button start and stop, emergency stop, door switches, single-throw, two- and three-position selector switches | Whether the button is normally open or normally closed |
| Indication and metering | Lamp, signal lamp, ammeter, voltmeter, watt-hour meter | Lamps are often the cheapest diagnostic on the panel |
| Wiring conventions | Conductor junction (dot) versus conductors crossing without connection, terminals, earth, strip connector, multi-pin plug and socket, transformer and auto-transformer | The dot is the whole difference between two circuits and one |

### Contact identification

The convention that trips up learners: a coil is given a designation such as
**C1**, and every contact operated by that coil carries the same designation
plus a number — C1-1, C1-2 and so on — usually printed opposite the moving
contact. Those contacts may be drawn on completely different rungs, metres apart
on the page. When you find a contact you do not understand, look for its coil.
When you find a coil, look for all of its contacts, because that is how the
consequence of energising it spreads through the drawing.

### The rest of the drawing

A good schematic carries more than symbols. Expect to find, and to use:

- a **colour code legend** (red, blue, black, white, yellow, grey, brown, and
  striped combinations such as white/blue) matching the wire numbers or colours
  in the loom
- **dashed lines for field wiring** — everything installed on site rather than
  in the factory; these are the connections most likely to be wrong
- an **item list** giving the abbreviation for each device, such as the
  evaporator fan starter, compressor starter, lockout relay, condenser fan
  starter, crankcase heater, room thermostat, HP and LP controls
- **fuse ratings and cable sizes** in a note block
- terminal numbers, plug and socket references, and links

>! Drawings go out of date. Site modifications, retrofitted controllers and
>! "temporary" links added years ago are rarely marked up. Trust the drawing to
>! tell you the design intent; trust your meter to tell you what is actually
>! there. If you find a difference, mark up the drawing as-built and leave it in
>! the panel for the next technician.

## On the job

- Identify which of the three drawings you have before you start reading.
- Read the legend and the item list before the circuit.
- Separate power from control: heavy lines and motors on one side, coils and
  small contacts on the other.
- For every coil, find all of its contacts elsewhere on the sheet.
- Dashed field wiring is the first place to look on a newly commissioned job.
`,
        quiz: [
          {
            q: "You need to work out why a compressor will not start when the thermostat calls, on a machine you have never seen. Which drawing helps most, and why?",
            options: [
              "The wiring diagram, because it shows the terminal numbers",
              "The block diagram, because it shows the main components",
              "The circuit (schematic) diagram, because the sequence of operation can be followed directly through the control circuit to the coil",
              "The refrigeration piping diagram",
            ],
            answer: 2,
            explain: "The schematic is arranged by logic rather than by physical layout, so the string of devices feeding the contactor coil can be read in order. The wiring diagram carries the terminal numbers you will need later for probing, but its layout follows the harness and hides the sequence.",
          },
          {
            q: "On a schematic, a contact is labelled C1-2 and appears three rungs away from the compressor contactor coil C1. What does it tell you?",
            options: [
              "It is a spare contact with no function",
              "It is an auxiliary contact operated by coil C1, so its state changes whenever C1 is energised",
              "It is a second coil that must also be energised",
              "It is a link that must be removed during commissioning",
            ],
            answer: 1,
            explain: "The designation ties the contact back to its coil, wherever it is drawn. Energise C1 and every C1-numbered contact changes state, which is exactly how one coil produces effects — interlocks, crankcase heater switching, latching — across several rungs.",
          },
          {
            q: "Which items belong to the power circuit rather than the control circuit?",
            options: [
              "Contactor coils, timers and auxiliary contacts",
              "The room thermostat and the HP switch",
              "Mains fuses, load-bearing contactor contacts, overload sensing elements and the motors",
              "The control fuse and the 24 V transformer secondary",
            ],
            answer: 2,
            explain: "The power circuit carries load current, so it holds the mains protection, load-bearing contacts, overload elements and motors. Coils, timers, thermostats, pressure controls and auxiliary contacts all sit in the low-current control circuit, whose only job is deciding whether the coils get voltage.",
          },
          {
            q: "Two lines cross on a schematic with no dot at the crossing point. What does that mean?",
            options: [
              "The conductors are connected and the dot has been omitted for clarity",
              "The conductors cross without connection — they are separate circuits",
              "The conductors are earthed at that point",
              "One conductor is field wiring and the other is factory wiring",
            ],
            answer: 1,
            explain: "The junction dot is the only thing that makes a connection; without it the lines merely cross on the page. Reading a crossing as a junction invents a circuit that does not exist and can send you looking for a fault in a healthy branch.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "reading-circuits",
        title: "Tracing a rung and finding the open device with a meter",
        minutes: 14,
        simple: "A control circuit is a row of switches in a line, and every one of them has to be closed before the machine will run. Finding the fault is like finding the broken bulb in an old string of Christmas lights, except your multimeter tells you instantly which one is open: across a closed switch you read nothing, across the open one you read the full voltage.",
        refs: REFS_ELEC,
        content: `
This is the lesson that turns drawings into repairs. Every control circuit,
however large, reduces to the same picture: two supply rails with rungs between
them, and one load — nearly always a coil — at the end of each rung. Learn to
read one rung properly and the size of the panel stops mattering.

## The ladder idea

Draw the two rails and put the devices between them:

- Devices **in series** are an AND: every one must be closed for the coil to
  energise.
- Devices **in parallel** are an OR: any one of them closing will do.
- A **normally closed** contact is a NOT: the coil it belongs to being energised
  is what opens it.
- A parallel contact belonging to the coil on the same rung is a **latch** — it
  holds the rung in after the initiating contact opens.

!FIG[ladder-rung]

## The seven-step trace

Work this order every time. It is deliberately boring, and that is why it works.

1. **Get the drawing and read the legend.** Identify the supply rails and the
   control voltage. Note whether the control circuit is 230 V from active to
   neutral, or a 24 V transformer secondary.
2. **Find the coil.** Name the rung by its load: "this is the compressor
   contactor rung". One rung, one job.
3. **List the devices in series with that coil, in order**, and beside each one
   write *what must be true in the real world for it to be closed.* For example:
   selector switch in position 3; room thermostat calling; evaporator fan
   auxiliary contact closed (fan running); LP switch closed (suction above cut
   in); HP switch closed (head pressure below cut out); overload contact closed
   (motor not overheated); lockout relay contact closed (not latched out).
4. **Find the parallel paths and the contacts from other coils.** These are the
   interlocks and latches, and they explain behaviour that otherwise looks
   random.
5. **Decide what the circuit should be doing right now** given the actual plant
   condition. Half of all "faults" end here, because the circuit is behaving
   exactly as designed and it is the mechanical plant that is wrong.
6. **Prove the supply first.** No point walking a rung that has no voltage on
   the rail. Measure rail to rail.
7. **Walk the rung with the meter** until you find the device that is open, then
   ask *why* it is open before you touch it.

## The voltage-drop rule

This is the single most useful electrical fact in fault-finding:

> In a series circuit, the supply voltage appears across whatever is *not*
> conducting. A closed switch drops almost nothing. An open switch drops the lot.

So with the circuit energised and the coil not pulled in:

| Measurement | Reading | Means |
|---|---|---|
| Across a series switch or contact | ~0 V | It is closed and carrying |
| Across a series switch or contact | Full control voltage | It is open — this is your fault |
| Across a series switch or contact | Part voltage, e.g. 90 V of 230 V | High-resistance joint, burnt contact or corroded terminal |
| Across the coil, coil not operating | Full voltage | Coil is open circuit, or mechanically jammed, or wrong coil voltage |
| Across the coil, coil not operating | 0 V | Something upstream is open — walk the rung |
| Coil operating, contacts not closing | — | Mechanical failure in the contactor |

### The two ways to walk a rung

**Method A — progressive probe (one probe stays put).** Put the meter's common
on the neutral rail and leave it there. Probe each junction along the rung,
starting at the supply end. You will read full voltage at every point up to and
including the input side of the open device, and 0 V from its output side
onwards. The fault lies between the last live point and the first dead one.

**Method B — across each device.** Put both probes across each series device in
turn. Every closed one reads about 0 V; the open one reads full voltage. This is
faster on a short rung and it is what the figure above shows.

**Half-splitting** beats both on a long rung. Probe the middle junction first:
live means the fault is downstream, dead means it is upstream. Each measurement
halves what is left, so eight devices take three measurements instead of eight.

## Traps that catch people

- **Phantom voltage.** A high-impedance digital meter will read 50–150 V on a
  disconnected conductor that is merely running alongside a live one. It is
  capacitively coupled and cannot deliver any current. Use your meter's low
  impedance (LoZ) range, or a solenoid-type tester, to make it disappear.
- **The unloaded high-resistance joint.** A corroded terminal can read full
  voltage with the meter's tiny current flowing, then collapse to 40 V the
  moment the coil tries to pull in. Take voltage readings *under load*, not on a
  dead circuit.
- **Testing a coil de-energised.** If a coil reads full voltage but will not
  operate, isolate the plant and measure its resistance. Open circuit confirms
  the coil; a sensible resistance points to a mechanically jammed armature or a
  coil fed at the wrong voltage — a 24 V coil on a 230 V circuit, or vice versa.
- **Auto-reset devices.** An overload or LP switch that has reset by the time
  you arrive leaves no evidence. Fit a run-hours meter, use a data logger, or
  interrogate the controller's alarm history.
- **The circuit that is right.** An HP switch open on a 40°C day with a filthy
  condenser is a working safety, not a faulty one.

## Worked fault — evaporator fan runs, compressor does not

Symptom: office split, indoor fan running, no cooling, thermostat calling.
Control circuit is 230 V active to neutral.

1. Drawing shows the compressor contactor coil C in series with: selector,
   thermostat, evaporator fan auxiliary contact EF, LP switch, HP switch,
   overload contact OL, lockout relay contact RR.
2. Prove supply: active to neutral at the control fuse = **231 V**. Good.
3. Half-split. Common on neutral, probe the junction between LP and HP:
   **231 V**. So everything from the supply to that point is closed; the fault
   is downstream.
4. Probe the junction after HP: **0 V**. The open device is the HP switch.
5. Confirm by measuring across HP: **231 V**. Confirmed open.
6. Now ask why. Gauges show discharge pressure that had reached the cut-out
   setting; the condenser coil is blocked with lint and the ambient is 38°C.
7. The repair is to clean the condenser and verify head pressure on restart, not
   to replace or link out the switch. A manual reset switch is pressed only
   after the cause is corrected.

>! Never link out, bridge or "temporarily" defeat a safety control to get a
>! machine running. High pressure switches, overloads, thermal protectors and
>! flow switches exist to prevent fires, ruptures and destroyed compressors, and
>! bypassing one transfers legal and personal liability to you. If you fit a
>! test link for a measurement, remove it before you leave the panel — write it
>! on your hand if you have to.

>! Live testing is the highest-risk work a refrigeration technician does. In
>! Australia, only appropriately licensed people may carry out electrical work,
>! and live work is restricted under AS/NZS 4836 and the state electrical safety
>! regulations. Use the prove-test-prove routine on a known live source before
>! and after every test, use a meter rated at least CAT III for the installation,
>! keep one hand out of the panel, and isolate, lock and tag for anything that is
>! not strictly a live measurement. Remember also that capacitors and a VSD DC
>! bus hold dangerous charge for minutes after isolation.

## What to remember

- One rung, one load, and every series device must be closed.
- Voltage appears across whatever is not conducting: 0 V means closed, full
  voltage means open.
- Half-split a long rung; probe against the neutral rail on a short one.
- Full voltage across a coil that will not pull in means an open coil or a jam.
- Finding the open device is only half the job — finding out why it opened is
  the repair.
`,
        quiz: [
          {
            q: "With the control circuit energised and the contactor not pulled in, you measure 230 V across the LP switch and about 0 V across every other device in the rung. What have you found?",
            options: [
              "A high-resistance joint at the LP switch",
              "The LP switch is closed and carrying, and the fault is elsewhere",
              "The LP switch is open — the next question is why suction pressure is below the cut-in setting",
              "The contactor coil is open circuit",
            ],
            answer: 2,
            explain: "Supply voltage appears across the device that is not conducting, so full voltage across the LP switch identifies it as the open one. It also means the safety may be doing its job — low charge, a restriction or a blocked evaporator would all hold suction below cut-in, and the repair is to find that cause.",
          },
          {
            q: "A coil reads full control voltage across its terminals but does not pull in. What is the correct next step?",
            options: [
              "Replace the thermostat, because it is not passing enough current",
              "Isolate, lock off and measure the coil's resistance; open circuit confirms a failed coil, a normal reading suggests a jammed armature or wrong coil voltage",
              "Fit a link across the coil to test the circuit",
              "Measure across each series safety again",
            ],
            answer: 1,
            explain: "Full voltage at the coil proves the whole series string is closed, so the fault is the coil or contactor itself. The resistance check, done safely with the circuit isolated, separates an open coil from a mechanical jam. Linking out a coil simply removes the load and proves nothing.",
          },
          {
            q: "Your digital multimeter shows 80 V on a disconnected control conductor running in the same duct as live cables. What is the most likely explanation?",
            options: [
              "A partial short to the active",
              "Phantom voltage from capacitive coupling, which the meter's high input impedance displays but which can supply no current",
              "The neutral is open circuit",
              "The control transformer is faulty",
            ],
            answer: 1,
            explain: "High-impedance meters pick up capacitively coupled voltage on floating conductors. Switching to the meter's LoZ range loads the circuit slightly and the reading collapses to near zero, which distinguishes a phantom from a genuine fault before you go chasing a short that is not there.",
          },
          {
            q: "A rung has eight devices in series. Which probing strategy finds the open device in the fewest measurements?",
            options: [
              "Start at the coil and work backwards device by device",
              "Measure across all eight devices in order from the supply",
              "Half-split: probe the middle junction, then the middle of whichever half is implicated, and repeat",
              "Isolate and buzz each device for continuity from one end",
            ],
            answer: 2,
            explain: "Each half-split measurement halves the remaining suspects, so eight devices resolve in about three measurements rather than up to eight. Sequential probing works but wastes time, and continuity testing means isolating the plant and losing the live evidence of which safety is open.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "building-control-circuit",
        title: "Building the control circuit, one addition at a time",
        minutes: 14,
        simple: "The easiest way to understand a crowded panel drawing is to watch it being built up from nothing. Start with just a motor and a switch, then add the parts one at a time and ask what each one buys you. By the end, a page that looked like spaghetti reads as a list of sensible decisions somebody made for a reason.",
        refs: REFS_ELEC,
        content: `
A finished air-conditioner schematic looks impenetrable because you are seeing
twenty decisions at once. Build it up in order and each addition answers one
question. Do this once properly and the pattern appears on almost any package
unit, condensing unit or coolroom pack you meet.

## Step 1 — the bare power circuit

Three-phase supply, a disconnect switch, fuses, a contactor, and a compressor
motor. This circuit will run the compressor provided that:

- adequate power reaches the disconnect switch
- the disconnect switch is closed
- the fuses are intact
- the contactor is closed

At this stage the only way to close the contactor is to push it in by hand. That
is a working machine and a useless one.

## Step 2 — a coil and a control circuit

Add an electromagnetic coil to operate the contactor, and a switch to feed it.
Because an air-conditioner also needs an evaporator fan, and small fan motors
are usually single-phase, the whole control circuit is taken from one phase on
the *supply* side of the contactor to neutral, giving a 230 V control circuit
running alongside the three-phase power circuit.

Note the drawing convention right away: the contactor's **holding coil is drawn
in the control circuit** even though it physically lives inside the contactor
next to the power contacts. Schematics separate things by function, not by
location.

## Step 3 — a selector switch

Give the operator a three-position switch:

1. Off
2. Fan only
3. Fan and compressor

Position 2 feeds the fan alone; position 3 feeds the fan and the compressor
contactor coil. Nothing is automatic yet — the machine runs until somebody
turns the knob.

## Step 4 — the thermostat

Put a thermostat in series with the compressor contactor coil, downstream of the
selector. Now the fan runs continuously in positions 2 and 3, and the compressor
starts and stops on room temperature. This is the smallest genuinely automatic
circuit in the trade, and thousands of machines contain little more.

## Step 5 — the safety controls

Every air-conditioning system needs protection against excessive current draw,
abnormal high and low system pressures, and high motor winding temperature. Add
in series with the coil:

- an **overload relay contact**, operated by the overload sensing elements in
  the power circuit
- a **high pressure switch** — break on rise
- a **low pressure switch** — break on fall
- a **motor thermal protector**, its sensing element buried in the windings

All of these interrupt the compressor coil only, so the evaporator fan keeps
running when they trip — which is what you want, since air keeps moving and the
space temperature stays even. Note that these devices are drawn in their control
location: the overload contact appears beside the thermostat, while the overload
element itself sits in the power circuit.

The weakness of this arrangement is that these controls are heat- or
pressure-operated, so once the compressor stops, conditions drift back to normal
and the device resets — restarting the compressor into the same fault, over and
over. Short cycling on a safety is as damaging as the original fault.

## Step 6 — the lockout (reset) relay

To convert automatic resetting into manual resetting, a lockout relay is added.
The trick is worth understanding rather than memorising.

- Its **normally closed contact** sits in series with the compressor coil, and
  its **coil is deliberately high impedance**, connected so that when one of the
  normally closed safeties opens, current diverts through the lockout coil in
  series with the contactor coil.
- Because that impedance is high, most of the supply voltage appears across it —
  enough to pull the lockout relay in, but not enough to hold the contactor in,
  so the compressor drops out.
- The lockout contact then opens and stays open. Even when the pressure or
  overload device resets itself, the compressor cannot restart.
- The only reset is to switch off at the main or reset switch, de-energising the
  lockout coil and letting its contact reclose.

That behaviour is the reason a customer will tell you "it just stopped and won't
go — but the switch is on". A latched lockout relay is not a failure; it is a
record that a safety operated. Find out which one, and why, before you reset it.

## Step 7 — the crankcase heater

Most designers treat a crankcase heater as essential on air-conditioners and
many refrigeration systems, to stop liquid refrigerant migrating into and
dissolving in the crankcase oil during off periods. Connect it between a phase
and neutral on the live side of the contactor and it runs permanently — simple,
but wasteful and it keeps heating oil that is already hot.

Better: fit a **normally closed auxiliary contact** on the compressor contactor
and feed the heater through it. The contact opens when the contactor pulls in,
so the heater runs only during the off cycle, exactly when it is needed.

>! A crankcase heater is live whenever the plant is switched on at the isolator,
>! even with the compressor stopped and the room satisfied. It is one of the most
>! common sources of an unexpected shock during service work. Isolate, lock, tag
>! and prove dead before touching compressor terminals.

## Step 8 — the condenser fan

Air-cooled condensers need a fan running with the compressor. A single-phase fan
can be fed through a spare terminal on the compressor contactor so that it
starts and stops with the compressor. A 415 V single-phase fan connects between
two phases rather than phase and neutral. A three-phase condenser fan gets its
own contactor coil, wired in parallel with, or interlocked with, the compressor
contactor.

## Step 9 — a three-phase evaporator fan and its interlock

Replace the small single-phase evaporator fan with a three-phase motor and it
needs its own contactor, fed from the main disconnect and controlled by an
evaporator fan contactor coil in the control circuit.

That opens the door to the most important interlock in air-conditioning: a
**normally open auxiliary contact on the evaporator fan contactor**, wired in
series with the compressor coil. Now the compressor physically cannot run unless
the indoor fan contactor is energised. Without airflow the evaporator ices, the
compressor floods back, and the machine destroys itself quietly over weeks. The
same principle reappears as condenser fan proving, chilled water flow switches
and damper end switches.

## Step 10 — a control fuse and a changeover switch

Two more additions complete a typical package unit: a **control circuit fuse**,
so a fault in the low-current wiring does not rely on the main fuses to clear;
and a **manual cool/off/heat changeover switch** on a reverse-cycle machine, so
the plant cannot be driven straight from cooling to heating, a swing that wastes
energy and can overload the compressor.

## 24-volt control circuits

As thermostats, panels, plant rooms and remote condensers spread further apart,
low-voltage control becomes attractive. A transformer feeds a 24 V control
circuit, which is safer to adjust, and thermostat and interconnecting cable can
be cheap and small. A typical arrangement has *everything* at 24 V except the
main contactors and the crankcase heater.

>! Low voltage in the control circuit does not make the panel safe. On these
>! machines the contactor coils, crankcase heater and the whole power circuit are
>! still at mains voltage inside the same enclosure. Technicians have been
>! injured assuming "it is a 24 volt machine".

A typical sequence, read left to right across the drawing:

1. The crankcase heater is energised whenever the compressor is off.
2. The transformer supplies the low-voltage control circuit.
3. The on-off switch in position 2 starts the indoor evaporator fan.
4. In position 3 the condensing unit is enabled, and the compressor runs
   provided the evaporator fan proving contact is closed, all overloads are
   reset, the selector and thermostat both call for the same mode, and the
   condenser fan has started and closed its own proving contact.
5. On a call for heating, the reversing valve solenoid is energised and the
   indoor coil becomes the condenser; the de-ice circuit takes over when the
   outdoor coil ices, as covered in the next lesson.

### Worked example — sizing the control transformer

A 240/24 V control transformer is rated at **80 VA**. The coils it must feed:

| Device | Sealed VA | Inrush VA |
|---|---|---|
| Compressor contactor | 20 | 60 |
| Condenser fan contactor | 15 | 45 |
| Evaporator fan contactor | 15 | 45 |
| De-ice relay | 5 | 10 |
| Lockout relay | 5 | 10 |
| **Total** | **60** | **170** |

- Sealed load 60 VA against an 80 VA rating — comfortable in steady running.
- Secondary current = 60 VA ÷ 24 V = **2.5 A**
- Primary current = 60 VA ÷ 240 V = **0.25 A**
- But if everything pulls in at once, inrush is **170 VA**, more than twice the
  rating. The secondary voltage sags, and a contactor may chatter or fail to
  seal in.

That single line of arithmetic is why staged or time-delayed starting appears on
so many drawings: bring the fans in first, the compressor a few seconds later,
and no two coils face their inrush at the same instant.

## What to remember

- Read a schematic as a sequence of additions, each one solving a problem.
- The compressor coil is the destination; everything in series with it is a
  condition that must be true.
- Safeties in series with the coil stop the compressor but not the indoor fan.
- A lockout relay converts auto-reset safeties into manual reset, and a latched
  lockout is evidence, not a fault.
- Interlocks prove that something else is already running before allowing the
  next thing to start.
- Control transformers are sized on sealed VA but survive on staged inrush.
`,
        quiz: [
          {
            q: "A machine has tripped and will not restart even though the HP switch has cooled and reset itself. Turning the isolator off and on restores operation. What does that behaviour indicate?",
            options: [
              "The HP switch is faulty and intermittently open",
              "A lockout relay latched when the safety opened, and only removing supply to its coil resets it",
              "The contactor coil is failing when hot",
              "The thermostat differential is too wide",
            ],
            answer: 1,
            explain: "Requiring a power interruption to reset is the signature of a lockout relay holding its own coil energised through the fault path. The safety device itself has already auto-reset. Before congratulating yourself on the reset, find why head pressure reached cut-out in the first place.",
          },
          {
            q: "Why is the crankcase heater usually fed through a normally closed auxiliary contact on the compressor contactor?",
            options: [
              "So the heater is protected by the compressor overload",
              "So the heater only operates during the compressor off cycle, when refrigerant migration into the oil is the risk",
              "Because the heater must be de-energised when the plant is isolated",
              "To share the contactor's inrush current",
            ],
            answer: 1,
            explain: "Migration happens while the compressor is stopped, so heating the crankcase during that period is exactly what is needed and heating it while running wastes energy. Note that the arrangement also means the heater is live whenever the plant is switched on but not running, which is a shock risk during service.",
          },
          {
            q: "What is the purpose of a normally open auxiliary contact from the evaporator fan contactor wired in series with the compressor contactor coil?",
            options: [
              "To reduce the current drawn by the compressor coil",
              "To act as an interlock so the compressor cannot run without the indoor fan operating",
              "To provide a manual reset function",
              "To energise the crankcase heater",
            ],
            answer: 1,
            explain: "It is a proving interlock: no fan contactor energised means no closed contact and no compressor. Running a compressor with no airflow across the evaporator ices the coil and floods liquid back to the compressor, so this contact prevents a slow, expensive failure.",
          },
          {
            q: "A 240/24 V, 80 VA control transformer feeds coils totalling 60 VA sealed and 170 VA inrush. What practical design measure follows from those figures?",
            options: [
              "Fit a larger control fuse so it does not blow on inrush",
              "Stagger the coils with time-delay relays so their inrush does not coincide",
              "Change the control circuit to 230 V",
              "Nothing — inrush figures do not affect transformer selection",
            ],
            answer: 1,
            explain: "Steady-state 60 VA is fine on an 80 VA transformer, but 170 VA of simultaneous inrush sags the secondary and can leave contactors chattering or failing to seal. Staggering the starts spreads the inrush; upsizing the fuse would only permit the sag to continue unprotected.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "other-circuits",
        title: "Defrost, pump-down, head pressure, staging, interlocks and alarms",
        minutes: 13,
        simple: "Once the basic start-stop circuit exists, everything else is bolted onto it: clearing ice off a coil, emptying refrigerant out of the low side before shutdown, keeping head pressure up in winter, bringing a second compressor in on heavy load, and proving something is running before letting the next thing start. Each one is a small block of logic you can learn on its own.",
        refs: REFS_ELEC,
        content: `
The circuits in the previous lesson cover the core of an air-conditioner, but
real plant carries a set of add-on circuits that appear again and again. Learn
each block once and you can recognise it inside any drawing — including inside a
microprocessor board, because the electronic version does exactly the same logic
with the same sequence.

## Defrost circuits

Any evaporator running below 0°C accumulates ice, which insulates the coil and
strangles airflow. Defrost circuits decide three things: when to start, how to
melt the ice, and when to stop.

| Type | Initiation | Termination | Notes |
|---|---|---|---|
| Time / time | Timer at fixed intervals | Timer after fixed period | Simplest, open loop, wastes energy when the coil is already clear |
| Time / temperature | Timer at fixed intervals | Coil sensor or klixon at a set temperature | The common commercial arrangement; a fail-safe timer still limits the maximum period |
| Demand | Coil-to-air temperature difference, pressure drop, or run time | Coil temperature | Fewest defrosts, best energy result |

Melting is done by electric heater elements in and around the coil, by hot gas
diverted into the evaporator, or by simply stopping the compressor and running
the fans on off-cycle defrost where room temperature is above about 2°C.

Two timing details matter and often get overlooked:

- **Drip or drain-down time** after the heaters stop, before the fans restart,
  so water leaves the coil rather than being blown into the room.
- **Fan delay**, usually via a fan-delay thermostat, holding the evaporator fans
  off until the coil has pulled back down. Without it, the room gets a blast of
  warm wet air after every defrost and the drain area frosts up.

A defrost timer appears on drawings as a motor-driven switch that makes one
contact while breaking another — the defrost contact makes while the
refrigeration contact breaks — so cooling and defrost can never be on at once.

## Pump-down

Pump-down empties refrigerant out of the evaporator and suction line before the
compressor stops, so that liquid cannot migrate to the compressor during the off
cycle and cause a flooded start.

**Simple pump-down.** The thermostat no longer controls the compressor at all.
It controls the **liquid line solenoid valve**. When the thermostat is
satisfied, the solenoid closes, the compressor keeps running and pulls the low
side down until the low pressure switch opens and stops it. Simple, and it
carries one real disadvantage: the compressor can restart at any time, whenever
pressure creeps up past the LP cut-in through a slightly leaking solenoid or
valve plates — so the machine short cycles all night with the room already cold.

**Non-recycling pump-down.** The preferred arrangement adds a non-recycling
relay (NRR) and uses an auxiliary contact on the compressor contactor to hold
the compressor out. The sequence:

1. Running normally, the thermostat energises both the liquid solenoid and the
   non-recycling relay, holding the NRR contact closed.
2. With pressures normal and no overload, the contactor coil is energised and
   its auxiliary contact is closed.
3. When the thermostat is satisfied it opens, closing the solenoid and opening
   the NRR contact.
4. The compressor keeps running through the auxiliary contact until the LP
   control opens and de-energises the contactor coil.
5. That drops the auxiliary contact out — and with both the NRR contact and the
   auxiliary contact now open, rising pressure cannot restart the compressor.
6. Only when the thermostat calls again, remaking the solenoid and NRR contacts,
   does the cycle restart.

A separate lock-out circuit is often added as well, leaving the LP control doing
double duty as both pump-down control and low pressure safety.

!SIM[Watch suction pressure fall during a pump-down](fault=lowCharge)

## Head pressure control

In cold weather an air-cooled condenser over-performs, head pressure falls, the
pressure difference across the expansion valve collapses and the evaporator
starves. Circuits that deal with it:

- **Fan cycling**: condenser fans are staged off as head pressure or ambient
  falls, using pressure switches or ambient thermostats. On a multi-fan
  condenser, fans switch off one at a time with staggered settings so pressure
  steps down gently.
- **Fan speed control**: a pressure transducer drives a variable speed or EC
  fan, giving smooth control and much less noise at night.
- **Flooding valves** (head pressure regulating valves, ORI/ORD type): pure
  refrigeration hardware, no electrical circuit, holding pressure up by backing
  liquid into the condenser. They need extra receiver charge to work.

Fan cycling on pressure is closed loop; fan cycling on ambient is open loop and
will get it wrong on a cold, still, sunny day.

## Staging and multiple compressors

Larger plant matches capacity to load in steps:

- **Multi-stage thermostats** or pressure controls bring compressors, or
  unloaders, on in sequence as the deviation grows.
- **Changeover or sequence switches** — a double-pole double-throw arrangement
  — let the operator decide which machine leads.
- **Lead-lag rotation** shares run hours between machines so both wear evenly
  and neither seizes from disuse.
- **Anti-short-cycle timers** enforce a minimum off time, and **minimum run
  timers** enforce a minimum on time, protecting motors from the rapid stepping
  that staging otherwise produces.
- On evaporative condensers and cooling towers, water pumps must be staged along
  with the fans, and pump operation proved before the compressor runs.

## Time delays and restart after supply failure

Time-delay relays prevent every component in a building starting at the same
instant when power is restored after an outage. Without them the supply
authority sees the whole site's locked-rotor current arrive simultaneously.
Delays are typically staggered by tens of seconds across plant. On the drawing
they appear as time-delay opening or time-delay closing contacts, and the
distinction matters: delay-on-make holds the circuit off after energising, while
delay-on-break holds it in after the initiating contact opens.

## Interlocks and safeties worth naming

- **Oil pressure safety** on any compressor with a pump: measures net oil
  pressure (oil pump discharge minus crankcase pressure) and trips after a time
  delay — commonly around 90 to 120 seconds — so the machine is not tripped by
  the normal delay in building oil pressure at start.
- **Flow switch** proving chilled or condenser water flow before a chiller
  starts, and stopping it if flow is lost.
- **Sail switch** proving air movement on ducted electric heaters.
- **Phase failure and phase sequence relays** protecting three-phase motors and
  scroll compressors, which are direction-sensitive.
- **Fire trip and smoke detection** signals that must shut fans down and close
  or open dampers, wired so that they override every other command.
- **Low ambient thermostats** enabling supplementary element heaters.
- **Damper end switches** proving an outside air or relief damper has actually
  opened before the fan starts.

## Alarms and indication

Alarms are usually presented as **volt-free (dry) contacts** so the receiving
system can apply its own voltage. Typical points: common fault, high
temperature, compressor trip, phase failure, door open. Add run-hour meters and
indicator lamps and half your diagnostic work is done at the panel door. On any
site with a BMS, these contacts become digital inputs and generate a time-stamped
alarm history, which is often the single most useful thing you can look at when
called to an intermittent fault.

## Reading unfamiliar circuits

The professional approach to a drawing full of unfamiliar circuitry is to pick
out the familiar blocks first — the compressor rung, the fan rung, the
safeties — and set them aside. Whatever is left is the unfamiliar part, and it
is now small enough to work out from first principles by following the coils and
their contacts.

> The move to electronic control has not made this obsolete. Microprocessor
> boards perform these same functions, and the manufacturer's sequence of
> operation reads almost word for word like the relay logic it replaced. Learn
> the logic and the platform stops mattering.

## On the job

- Identify the defrost termination method before diagnosing an iced coil.
- Short cycling on a pump-down system points at a leaking liquid line solenoid
  or leaking compressor valves before it points at the LP switch.
- Head pressure that collapses on cold nights starves the TX valve — check the
  fan cycling setpoints before condemning the valve.
- Interlocks fail closed as often as they fail open. A flow switch jammed made
  is a chiller waiting to freeze a bundle.
- The alarm history on a controller or BMS is evidence. Read it before you start
  measuring.
`,
        quiz: [
          {
            q: "On a simple pump-down system the compressor restarts every few minutes overnight with the coolroom well below setpoint. What is the most likely cause?",
            options: [
              "The thermostat differential is too narrow",
              "Pressure is creeping up past the LP cut-in, most likely through a leaking liquid line solenoid or leaking compressor valves",
              "The condenser fan is cycling on ambient",
              "The crankcase heater has failed",
            ],
            answer: 1,
            explain: "Simple pump-down has no latch, so anything that raises low-side pressure will restart the compressor regardless of room temperature. A non-recycling relay with a contactor auxiliary contact prevents the restart, but the real repair is finding the leak path. The room thermostat is not controlling the compressor at all on this arrangement.",
          },
          {
            q: "Why is a fan-delay thermostat used after an electric defrost?",
            options: [
              "To give the heaters time to reach temperature",
              "To hold the evaporator fans off until the coil has pulled back down, preventing warm wet air being blown into the space",
              "To delay the compressor start after defrost",
              "To terminate the defrost when the coil is clear",
            ],
            answer: 1,
            explain: "At the end of defrost the coil and its surfaces are warm and wet. Starting the fans immediately blows that heat and moisture into the room and refrosts the drain area. The fan delay waits for the coil to come back down before airflow resumes; defrost termination is a separate function.",
          },
          {
            q: "An oil pressure safety control on a semi-hermetic compressor incorporates a time delay of roughly 90 to 120 seconds. Why?",
            options: [
              "To allow the crankcase heater to boil off refrigerant",
              "Because net oil pressure takes time to build after start, and without the delay the control would trip on every start",
              "To allow head pressure to stabilise before the condenser fans start",
              "To match the anti-short-cycle timer",
            ],
            answer: 1,
            explain: "The control measures net oil pressure — pump discharge minus crankcase pressure — which is zero at the instant of starting. The delay lets pressure build, but if it has not built by the end of the delay the compressor is stopped and locked out, which is the protection actually being provided.",
          },
          {
            q: "Condenser fans on a multi-fan air-cooled condenser are cycled off in steps on falling head pressure rather than all together. What problem does staging avoid?",
            options: [
              "Excessive fan motor starting current only",
              "Large sudden steps in head pressure, which upset expansion valve operation and can cause hunting and starving of the evaporator",
              "Motor overheating from frequent starts",
              "Noise complaints from neighbouring properties",
            ],
            answer: 1,
            explain: "Head pressure sets the pressure difference across the expansion valve, so a large step change momentarily starves or floods the evaporator. Staging steps the pressure gently. Reduced starting current and noise are genuine side benefits but not the control reason.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "programmable-controllers",
        title: "Programmable controllers, DDC and the building management system",
        minutes: 13,
        simple: "A programmable controller is an industrial computer wired in place of a panel full of relays. It reads its switches and sensors, works through its program line by line, and then sets its outputs — over and over, many times a second. The logic is the same one you traced on the ladder drawing; it just lives in software now, where you cannot see it with a meter.",
        refs: REFS.concat([
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 4, Boyle — pub. AIRAH — microprocessor-based control of commercial buildings",
        ]),
        content: `
A programmable controller — a PLC, or in HVAC a DDC controller — is at heart an
industrial computer. It accepts inputs from ordinary electrical control devices
such as thermostats, pressure switches and selector switches; it examines the
status of those inputs; and according to a programmed sequence it drives outputs
to devices such as motor starters and solenoid valves. Everything you learned
about relay logic still applies. What changes is where the logic lives and how
you test it.

## The five functional areas

1. **The program.** The set of instructions telling the processor what to do.
   The controller's own operating firmware is permanently held in read-only
   memory (ROM) written by the manufacturer, and it does not change.
2. **The central processing unit (CPU).** It fetches instructions from the
   program. Its control unit sets up the electronic circuitry needed to carry
   out each instruction, and the processor then performs the function — adding,
   subtracting, moving or rearranging data.
3. **Memory.** Think of it as a wall of numbered bins. Data is written into
   read/write memory (RAM) and can be read back later; reading does not erase
   it, but writing new data to a location destroys whatever was there. The
   application program and current values live here.
4. **Input/output (I/O).** The modules that let the processor receive
   information from the outside world and send commands back to it. Like RAM,
   I/O registers are written, read and overwritten with updated data.
5. **The clock.** It sets the interval between successive operations and
   synchronises everything the controller does.

## Point types

Field devices connect through four kinds of point, and knowing which is which is
the first step in any commissioning or fault-finding job.

| Point type | Signal | Field examples |
|---|---|---|
| Digital input (DI) | Volt-free contact, or a wetting voltage such as 24 V | Pressure switch, overload contact, flow switch, fan proving, door switch |
| Digital output (DO) | Relay or triac contact, often via an interposing relay | Contactor coil, solenoid valve, alarm bell |
| Analogue input (AI) | 0–10 V, 4–20 mA, or a resistance input for NTC/PT1000 | Space and coil temperature, pressure transducer, humidity, CO2 |
| Analogue output (AO) | 0–10 V, sometimes 4–20 mA | Valve and damper actuators, VSD speed reference, EC fan |

Many DDC controllers use **universal** points that are configured in software as
AI, DI or AO — convenient, and a trap, because a point can be perfectly wired
and still read nonsense if it is configured as the wrong type.

## The scan cycle

This is the single most important behavioural difference between a PLC and the
relay panel it replaced. The controller repeats a fixed cycle:

1. **Read inputs** — the state of every input is copied into an input image
   table, all at once.
2. **Solve the program** — the logic is evaluated top to bottom, left to right,
   using the *image* of the inputs, not the live terminals.
3. **Write outputs** — the results are copied from the output image table to the
   physical output terminals, all at once.
4. **Housekeeping** — communications, diagnostics, and the watchdog timer that
   resets the controller if a scan takes too long.

Then it starts again. A small PLC scan takes a few milliseconds; a DDC
controller running PID loops and a BACnet stack may scan its logic once a second
or slower.

Three consequences you can be caught by:

- An input that changes and changes back *within one scan* may never be seen.
- An output only physically changes at the end of the scan, so a rung cannot see
  its own output change until the next pass.
- **Rung order matters.** If two rungs write the same output, the last one
  solved wins, which produces faults that look impossible until you read the
  program in order.

## Programming

Most industrial controllers are still programmed in **ladder logic**, precisely
because it was designed to look like the relay drawings that technicians already
knew. The vertical rails and horizontal rungs are the same; the contacts are now
software instructions that examine the *status of an input in memory*.

That produces the classic beginner's trap: a hardwired **normally closed** LP
switch appears in the program as an *examine-if-closed* instruction, because
when the pressure is healthy the switch is closed, the input is on, and the rung
should be true. What you see on the screen matches the electrical state of the
input, not the physical drawing symbol of the device. Always confirm what a
point reads with the plant in a known condition.

HVAC DDC controllers may also be programmed in function blocks, in a
manufacturer's own text language, or configured entirely from a menu of standard
applications with only setpoints and options to select.

## DDC and the BMS

Direct digital control means the controller measures the sensor, calculates the
correction with a PID algorithm in software, and drives the actuator directly —
no intervening pneumatic or electronic hardware loop. Beyond loops, a DDC
controller typically provides:

- time schedules, holiday calendars and optimum start
- setpoint reset strategies against outdoor air or demand
- trend logs, so you can see what happened last Tuesday at 3 am
- time-stamped alarms with priorities
- interlocking and sequencing that used to require relays and timers

Controllers are then networked into a **building management system**. In
Australian commercial buildings you will most often meet:

| Layer | Typical technology | Notes |
|---|---|---|
| Field bus | BACnet MS/TP or Modbus RTU over RS-485 twisted pair | Daisy chained, polarity and termination matter, limited devices per segment |
| Automation network | BACnet/IP over Ethernet | Plant controllers, chillers, main plant |
| Head end | Graphics workstation or web front end | Schedules, trends, alarms, overrides |

Chillers, VSDs and pack controllers usually offer a BACnet or Modbus interface,
which is how a BMS reads compressor status, suction pressure and fault codes
without a single extra wire.

## Field practice

- **Commission point to point.** For each point, force the output or apply the
  condition at the field device, and confirm both the field result and the
  reading on the graphics. Polarity, point type and scaling errors all show up
  here and nowhere else.
- **Remove your forces.** An output left forced or in hand is a fault that will
  be discovered by somebody else, months later, on a hot day.
- **Test the input at the terminal.** A DI that will not change state: link the
  terminals momentarily. If the software sees it, the fault is in the field
  wiring or device; if it does not, the fault is the module or the configuration.
- **Check sensor resistance against the table.** An NTC 10k sensor reads about
  10 kilohm at 25°C; a PT1000 reads 1000 ohm at 0°C. A drifted or wet sensor is
  by far the most common "controller fault".
- **Back up the program** before you change anything, and record the parameters
  you alter.
- **Read the alarm and trend history first.** It is evidence that the plant
  gathered while nobody was watching.

>! Life-safety and machine-protection functions must stay hardwired. High
>! pressure cut-outs, motor overloads, fire trips, emergency stops and refrigerant
>! detection alarms are wired in series with the contactor coil so that they work
>! whether or not the controller is running its program, has a corrupt memory or
>! has been left in hand. A safety implemented only as a line of software is not a
>! safety. Software may monitor and report those devices; it must not be the only
>! thing standing between the plant and a failure.

## What to remember

- A PLC is a computer with five parts: program, CPU, memory, I/O and clock.
- Points are DI, DO, AI or AO, and universal points can be configured wrongly.
- The scan cycle reads all inputs, solves the logic, then writes all outputs —
  so rung order and scan time can produce real, diagnosable faults.
- Ladder programming exists so relay-trained technicians can read it; the
  contacts examine input status in memory.
- DDC adds schedules, reset strategies, trends and alarms, and networks over
  BACnet or Modbus into a BMS.
- Hardwired safeties stay hardwired, always.
`,
        quiz: [
          {
            q: "A PLC output that should energise a solenoid never operates, although the program logic looks correct on screen and the rung shows true. Which check separates program from hardware fastest?",
            options: [
              "Recompile and download the program",
              "Measure at the output module terminals with the rung true — voltage present means the fault is in the field wiring or the solenoid, absent means the module or its configuration",
              "Replace the CPU battery",
              "Increase the scan time",
            ],
            answer: 1,
            explain: "The output terminal is the boundary between software and field, so one measurement there splits the system in half. A rung shown as true only proves what the logic solver decided; the module's switching device can still be failed, or the point configured as the wrong type.",
          },
          {
            q: "Why can an input that pulses briefly and returns to its original state sometimes be missed entirely by a PLC?",
            options: [
              "Because digital inputs are filtered to remove noise",
              "Because inputs are only read once per scan, into an image table, and the logic is solved from that image",
              "Because the CPU prioritises analogue inputs",
              "Because the watchdog timer suppresses fast changes",
            ],
            answer: 1,
            explain: "The controller snapshots its inputs at the start of each scan and solves from the snapshot, so a change that begins and ends between two snapshots is invisible. Fast events therefore need latching relays in the field, a faster scan, or a dedicated high-speed input.",
          },
          {
            q: "A hardwired normally closed low pressure switch is wired to a DDC digital input. With the plant healthy, what does the point read, and how should it appear in the logic?",
            options: [
              "Off, examined as a normally closed instruction, because the drawing symbol shows NC",
              "On, because the switch is closed under healthy conditions, so the rung examines the input for the on state",
              "It alternates with the compressor cycle",
              "It reads an analogue value proportional to pressure",
            ],
            answer: 1,
            explain: "Software examines the electrical status of the input, not the drawing symbol of the field device. Healthy pressure means the NC switch is closed, the input is energised, and the rung tests for that on state. Confusing symbol with status is the classic error when moving from relay panels to programmed logic.",
          },
          {
            q: "Which function must NOT be implemented in controller software alone?",
            options: [
              "Chilled water setpoint reset against outdoor air temperature",
              "Optimum start of an air handling unit",
              "The high pressure cut-out protecting the compressor",
              "Lead-lag rotation between two compressors",
            ],
            answer: 2,
            explain: "Machine-protection and life-safety functions must be hardwired in series with the contactor coil so they operate even if the controller is stopped, corrupted or in hand. Reset strategies, optimum start and lead-lag are all comfort or efficiency functions where a controller failure has no immediate safety consequence.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
