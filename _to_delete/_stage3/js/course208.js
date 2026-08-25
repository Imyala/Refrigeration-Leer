/* =========================================================================
   Course content, module 208 — Service diagnosis and repair.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 8 — Service diagnosis
   and repair.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — Ch 8, service diagnosis and repair",
    "Australia and New Zealand Refrigerant Handling Code of Practice (AIRAH) — leak repair, recovery and charging obligations",
  ];

  const REFS_ELEC = REFS.concat([
    "AS/NZS 3000 Wiring Rules — isolation, testing and safe work on electrical equipment",
  ]);

  const MODULES = [

  /* ======================================================================
     Module R2.8 — Service diagnosis and repair
     ====================================================================== */
  {
    id: "v2-service-diagnosis",
    stream: "v2",
    title: "R2.8 · Service diagnosis and repair",
    blurb: "How a technician finds the real fault before touching a spanner: field checks, compressor testing, control and heat-exchanger faults, repair procedures and symptom tables.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "diagnostic-approach",
        title: "Diagnose first, repair second",
        minutes: 11,
        simple: "Service work is two skills bolted together: working out what is actually wrong, and fixing it in a way that keeps it fixed. A doctor who hands out painkillers without asking why your head hurts is not curing anything, and a technician who fits a new compressor without finding what killed the old one will be back in six months fitting another. This lesson is the habit of looking before you touch.",
        refs: REFS,
        content: `
Refrigeration service is two skills working together. The first is **diagnosis**
— deciding what has actually gone wrong. The second is **repair technique** —
fixing it in a way that stops the same fault coming back. Get the first one
wrong and the second one is wasted money.

There is an enormous range of equipment in the field: bar fridges, split
systems, coolroom packs, supermarket racks, transport units, chillers. The
comforting truth is that the *faults* are largely common to all of them.
Refrigerant still leaks, condensers still get dirty, valves still leak, motors
still burn. Learn the fault families once and you can work on machinery you
have never seen before.

## The most expensive habit in the trade

A compressor is usually the victim, not the villain. Poor oil return, chronic
flood-back, a stuck expansion valve, a filthy condenser, low charge — these
kill compressors. Yet the compressor is what gets changed, because it is the
part that visibly stopped. If the system fault is not found and corrected, the
replacement compressor is being fed into the same meat grinder.

> Before you quote a compressor, write down the mechanism: *what exactly
> destroyed this one?* If you cannot name it, you have not finished diagnosing.

## The four-column habit

Every good manufacturer's fault schedule is laid out in four columns, and it
is worth thinking in those columns even when you have no schedule in front of
you:

| Column | What it holds | Example |
|---|---|---|
| Complaint | What the customer reports | "The coolroom is sitting at 8°C" |
| Symptom | What you actually measure or observe | Suction 100 kPa low, drier frosted |
| Probable cause | The physical mechanism | Restricted filter-drier |
| Corrective action | The repair that stops it recurring | Replace core, find the moisture source |

The discipline is not skipping from complaint straight to action. "Room is
warm, so it needs gas" is a jump across two columns, and it is how systems end
up overcharged, leaking and running on a compressor that will not last the
summer.

## The field checks

Before gauges go on, spend five minutes gathering free information.

**Ask.** How long has it been like this? Did it fail suddenly or fade over
weeks? Has anyone worked on it? Has the load changed — extra product, doors
propped open, a new oven next to the condensing unit? A sudden failure points
to electrical or mechanical breakage; a slow fade points to a leak, fouling or
gradual restriction.

**Look.** Oil stains around the shaft seal, joints or the compressor base mean
refrigerant has been leaving with the oil. Frost patterns tell you where the
refrigerant is boiling and where it stops. Look for an iced coil, blocked
filters, packed-out product blocking return air, a dirty condenser, slack or
glazed belts, and bubbles in the sight glass.

**Listen.** Noise is diagnostic. A sharp click is valve noise; a duller click
suggests a worn piston or cylinder; a heavy knock at low suction pressure
points at connecting rods and main bearings; a rattle only at start-up is
liquid slugging out of the crankcase.

**Touch.** Feel the temperature step across a filter-drier — a restriction
shows up as a cold shell or even frost on the outlet. Feel the suction line at
the compressor: it should be cool, not sweating cold and certainly not frosted
back to the shell.

**Measure.** Then, and only then, fit gauges. Convert suction and discharge
pressures to saturated temperatures, calculate superheat and subcooling,
measure air on and air off the coils, take supply voltage and running current
against the nameplate, and check the oil level.

!FIG[gauge-pt-ring]

**Check the design envelope.** Some "faults" are simply the wrong machine for
the job — a condensing unit selected for freezer duty working a coolroom, a
unit installed where its condenser recirculates its own discharge air, or a
space carrying far more infiltration load than it was designed for. No repair
fixes a selection error.

## Fault codes are a clue, not a diagnosis

Most modern controllers self-diagnose and display fault codes, and they save
real time — a code that says "probe 2 open circuit" points straight at a
sensor. But a code that says "high pressure" only tells you the switch opened.
The condenser, the fan, the charge and the non-condensables are all still on
your list. Use the code to narrow the search, then prove it with instruments.

>! Isolate and tag before any mechanical work — the source procedure has you
>! hang a "Do not start" tag on the switch, and that is the minimum. Live
>! testing is done only where it is genuinely necessary, by a competent person,
>! to AS/NZS 3000. After a motor burn, treat the oil and refrigerant as acidic:
>! gloves and eye protection, and recover rather than vent.

## On the job

- Name the mechanism before you order the part.
- Free information first — ask, look, listen, touch — gauges second.
- Compare every reading against what a healthy system would show *today*, not against a number you memorised.
- Adding refrigerant without finding the leak is both bad practice and a breach of your obligations under the Refrigerant Handling Code of Practice.
- Write your findings down in the four columns. It forces the logic and it is what protects you when the customer asks why the repair cost what it did.
`,
        quiz: [
          {
            q: "A hermetic compressor has failed for the second time in eight months. What is the most important thing to establish before fitting the third one?",
            options: [
              "Whether the replacement is under warranty",
              "The mechanism that destroyed the first two — lubrication, flood-back, restriction or head pressure",
              "Whether a larger compressor would last longer",
              "The brand of refrigerant oil used",
            ],
            answer: 1,
            explain: "Compressors are usually the victim of a system fault. Until you can name what killed them — oil not returning, liquid flooding back, a starved or restricted circuit, or excessive head pressure — the next compressor is heading the same way. Warranty and oil brand matter, but neither stops the failure repeating.",
          },
          {
            q: "Why does the four-column schedule (complaint, symptom, probable cause, action) separate 'symptom' from 'probable cause'?",
            options: [
              "Because manufacturers must fill in four columns for legal reasons",
              "Because the symptom is what you measure and the cause is the mechanism behind it — several causes can share one symptom",
              "Because symptoms are always electrical and causes are always mechanical",
              "Because the customer supplies the cause and the technician supplies the symptom",
            ],
            answer: 1,
            explain: "Low suction pressure is one symptom with at least half a dozen causes: low charge, a restricted drier, a starving expansion valve, an iced coil, low load. Keeping the columns apart forces you to prove which cause is present rather than guessing.",
          },
          {
            q: "A controller displays a high-pressure fault code. What does that code actually tell you?",
            options: [
              "That the condenser fan has failed",
              "That the system is overcharged",
              "That the high-pressure switch opened — the reason is still to be found",
              "That the pressure transducer is faulty",
            ],
            answer: 2,
            explain: "A fault code reports the trip, not the mechanism. Dirty condenser, failed fan, recirculating discharge air, non-condensables and overcharge all trip the same switch. The code narrows where to look; gauges and observation decide which one it is.",
          },
          {
            q: "The customer reports the coolroom is warm. Which of these is the weakest first move?",
            options: [
              "Asking whether the failure was sudden or gradual and whether anyone has worked on it",
              "Adding refrigerant because warm rooms usually mean low gas",
              "Feeling the filter-drier for a temperature drop across it",
              "Checking whether extra product or propped-open doors have raised the load",
            ],
            answer: 1,
            explain: "Charging on a hunch masks the real fault, risks overcharge, and — if the system is genuinely low — releases more refrigerant through an unrepaired leak, which is a Code of Practice breach. The other three cost nothing and narrow the field.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "compressor-testing",
        title: "Testing compressor valves, seals and pumping efficiency",
        minutes: 12,
        simple: "A worn-out compressor does not usually announce itself — it just quietly stops pushing as hard as it should. The tests here are how you prove it: make the compressor pull the deepest vacuum it can, watch whether it holds that vacuum, and watch whether it holds head pressure. A pump that cannot hold either end is leaking internally, the way a bicycle pump with a perished washer still moves but no longer inflates anything.",
        refs: REFS,
        content: `
Two faults account for most reciprocating compressor trouble: **leaking valves**
and **leaking shaft seals**. Both are invisible from outside, and both make the
machine look like it is working — the motor runs, the pipes get warm — while
capacity quietly drains away. These are the field tests that prove the state
of the pump before you condemn it.

## What the noises tell you

Sound is the free test. Do it before the gauges go on.

| What you hear | Where it comes from | What it means |
|---|---|---|
| Sharp, bright clicking | Valve reeds | Noisy or broken valves |
| Duller, heavier click | Piston and cylinder | Wear in the bore or piston |
| Heavy knock, worse at low suction | Con-rods, main bearings | Serious wear; lubrication has been failing |
| Rattle only at start-up | Crankcase | Liquid slugging as foamed oil passes the valves |
| Rattle once running | Suction line | Expansion valve overfeeding, liquid returning |

## The vacuum pump-down test

This is the classic field test of pumping ability.

1. Fit the gauge manifold and leak-test your connections.
2. **Forward-seat** (front-seat) the suction service valve so the compressor can only draw from its own crankcase.
3. Switch the power on and off in short bursts until any danger of pumping oil has passed, then let it run.
4. Record the deepest vacuum reached against normal head pressure for that refrigerant — **and record how long it took**.

A healthy compressor should reach roughly **−50 to −60 kPa gauge**. Anything
much less than that says the pump is worn and needs overhaul. A compressor
that is slow to get there, or that stalls at a poor vacuum, is telling you the
suction valves are leaking.

> The test is not foolproof. A multi-cylinder machine with two good cylinders
> and one bad one can still drag itself down to a respectable vacuum. Use the
> result alongside the noise, the current draw and the running pressures, not
> on its own.

>! Never pull an open compressor deep into vacuum with a leaking shaft seal or
>! a loose fitting — you will draw air and moisture straight into the crankcase.
>! And never run a compressor down onto vacuum when you are about to open it up
>! for the same reason.

## Proving the discharge valves

There are two ways to catch a leaking discharge valve.

**(a) Pressure feeding backwards.** With the machine stopped, high-side
pressure bleeds back past the discharge valve and shows up as pressure above
atmospheric on the compound gauge — the low side rises when it should sit
still.

**(b) The forward-seat test.** Forward-seat the discharge service valve so a
fixed volume of gas is trapped between the valve and the piston. If the
high-side gauge falls, the discharge valve is passing. Turn the compressor by
hand and the effect is unmistakable: pressure drops as the piston travels down.
**Any fluctuation of the trapped pressure with the valve forward-seated means
the discharge valve is leaking.**

There is a related running test used when head pressure is unexpectedly low:
after the compressor shuts down, watch the suction gauge. If it climbs faster
than about **35 kPa per minute**, the discharge valves are leaking or broken
and the head should come off for inspection.

## Proving the suction valves

A leaking suction valve shows up as **inability to pull a decent vacuum**. The
giveaway is what happens next: switch off, and a system with sound discharge
valves will *hold* that vacuum. So —

- Poor vacuum, vacuum then holds → suction valve leaking.
- Poor vacuum, vacuum immediately lost → discharge valve leaking as well.

Not every poor-pumping compressor has bad reeds. The same symptom comes from a
**gasket that is too thick** (it raises clearance volume), **worn pistons and
rings**, a **scored cylinder liner**, or simply **not enough oil**. On
multi-cylinder machines, a defective **unloading system** that never lets the
cylinders load will also look like failure to pump — and a lack of oil pressure
is very often why the unloaders have stopped working.

## Finding a low-side leak (usually the shaft seal)

Open compressors leak at the crankshaft seal. The symptoms are familiar: oil
under the compressor, constant running, poor refrigeration and a power bill
that has climbed.

Which way the leak runs depends on the low-side pressure. On a system whose
low side sits **above atmospheric**, refrigerant escapes and the system goes
short of charge. On a system running **below atmospheric** — most low-temp
work — air is drawn *in*, and the non-condensables show up as high head
pressure.

The test:

1. Fit gauges.
2. Forward-seat the suction service valve.
3. Run the compressor and pull the deepest vacuum you can.
4. Forward-seat the discharge service valve, keeping it running. If head pressure now climbs steadily, air is being drawn into the low side — the seal is the prime suspect.
5. Stop the compressor and watch the low side. A leak to atmosphere, such as the seal, can only pull the pressure up **to 0 kPa gauge and no further**. If it rises *above* 0 kPa gauge, the leak is internal — a leaking discharge valve, or the suction service valve passing.

That last step is the elegant part of the test: atmosphere can only ever push
the gauge to zero, so anything past zero has to be coming from the high side.

## What to remember

- −50 to −60 kPa gauge is the field benchmark for a compressor that can still pump.
- Poor vacuum that *holds* = suction valves. Vacuum that *collapses* = discharge valves.
- Suction pressure rising faster than 35 kPa/min after shutdown points at broken discharge valves.
- Rule out thick gaskets, worn rings, scored bores, low oil and dead unloaders before condemning the reeds.
- On a seal test, a rise that stops at 0 kPa gauge is a leak to atmosphere; a rise past 0 kPa gauge is internal.
`,
        quiz: [
          {
            q: "A compressor is forward-seated on the suction service valve and pulls only −30 kPa. Switched off, it holds that vacuum steadily. What does this indicate?",
            options: [
              "Leaking discharge valves",
              "Leaking suction valves",
              "A leaking shaft seal",
              "Normal performance for a small compressor",
            ],
            answer: 1,
            explain: "Failing to reach the −50 to −60 kPa benchmark shows the suction side is passing gas back on the down-stroke. Because the vacuum holds after shutdown, the discharge valves are sealing — if they were leaking, high-side pressure would bleed back and the vacuum would collapse.",
          },
          {
            q: "With the discharge service valve forward-seated, the high-side gauge needle fluctuates as the compressor is turned by hand. This proves…",
            options: [
              "The suction valves are broken",
              "The gauge hose has a leak",
              "The discharge valve is leaking",
              "The compressor is short of oil",
            ],
            answer: 2,
            explain: "Forward-seating traps a fixed volume above the piston. A sealed discharge valve holds that pressure regardless of piston position; a leaking one lets it bleed back down the bore, so the pressure moves with the crank. A hose leak would give a steady fall, not a fluctuation tied to piston travel.",
          },
          {
            q: "During a low-side leak test the compressor is stopped and the suction gauge rises slowly, stopping exactly at 0 kPa gauge. What is the leak?",
            options: [
              "An internal leak past the discharge valve",
              "A leak to atmosphere, most likely the shaft seal",
              "The suction service valve passing from the system",
              "Refrigerant boiling out of the crankcase oil",
            ],
            answer: 1,
            explain: "Atmospheric air can only push the crankcase up to atmospheric pressure — 0 kPa gauge — and no further. A rise that continues past 0 kPa gauge must be fed from the high side, meaning a leaking discharge valve or a passing service valve.",
          },
          {
            q: "A multi-cylinder compressor will not build capacity, yet the valves and rings check out. Which cause should be high on the list?",
            options: [
              "Fins on the evaporator are too closely spaced",
              "The cylinder unloading system is not loading, often because oil pressure is low",
              "The refrigerant has the wrong colour dye",
              "The suction line is too short",
            ],
            answer: 1,
            explain: "Unloaders are held in the loaded position by oil pressure on many machines. If oil pressure is low the cylinders stay unloaded and the compressor cannot build pressure — it looks exactly like a worn pump, but the fix is the lubrication system, not the valve plate.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "compressor-failure-modes",
        title: "Seizure, slugging and overheating — and the other compressor types",
        minutes: 14,
        simple: "Compressors mostly die of thirst: the oil stops arriving, the metal starts rubbing, it gets noisy, then it gets hot, then it stops. Noise is the early warning and heat is the late one, so neither should ever be ignored. Screw, scroll and centrifugal machines fail for the same underlying reasons, but each has one or two habits of its own worth knowing.",
        refs: REFS,
        content: `
Most compressor failures are lubrication failures wearing a different hat. Oil
stops arriving in sufficient quantity or sufficient quality, metal starts
touching metal, and the machine works through a predictable sequence: noise,
wear, heat, seizure. Every step of that sequence is a chance to intervene.

## Seizure

A seized compressor shows itself as a drive motor that runs, pulls hard and
then trips the overload without turning the compressor.

On small sealed units the culprit is sometimes only a **vapour lock** rather
than true seizure. Reversing the motor briefly, or giving the shell several
sharp jolts, sometimes frees it. It feels crude, but the alternative is
replacing the compressor anyway.

On external-drive units, take the belts off or disconnect the coupling and run
the motor alone. If the motor runs normally uncoupled, the compressor is
seized.

>! Do the belt-off test only *after* standard electrical testing has confirmed
>! full, balanced supply voltage at the terminals. A single-phased motor
>! stalling under load looks exactly like a seized compressor — and you can
>! destroy a healthy motor by repeatedly restarting it on two phases.

A seizure is never the whole story. It is a symptom of inadequate lubrication,
and the cause is usually one of these:

- an oil separator that is not working properly
- natural oil traps in the pipework holding oil where the gas velocity cannot lift it
- simply not enough oil in the system
- refrigerant flood-back, which dilutes the oil until it will not carry a load
- not enough refrigerant, so gas velocity and motor cooling both fall away

## Noise means wear is happening now

Noise from a compressor almost always means lubrication is breaking down and
parts are wearing. Investigate it immediately — it is the warning that arrives
before the expensive failure.

**A rattle only during start-up** is liquid slugging. Liquid refrigerant
migrates into the crankcase during the off cycle and dissolves into the oil.
When the compressor starts and crankcase pressure drops suddenly, the mixture
foams, and the foam batters its way through the valves. As the refrigerant
boils out of the oil the rattle fades. The cure is not in the compressor: fit
a **crankcase heater**, run a **pump-down cycle**, or both.

**A rattle after start-up, during running**, is slugging in the *suction line*
— liquid arriving from the evaporator, typically because the expansion valve
is overfeeding. Same urgency, different fix.

**Small hermetics that drum and buzz** are often not faulty at all. They ship
with the internal spring mounts bolted down through the base for transport. If
the installer forgets to release those tie-downs, every bit of compressor
vibration is transmitted straight into the base. The same noise appears when a
mounting spring breaks from fatigue and the compressor sits down on its base.

## Overheating

Overheating is the symptom that most often puts an experienced technician onto
a mechanical problem. In open compressors the usual causes are:

| Cause | The clue on the gauges or the plant |
|---|---|
| Too much load | High suction pressure, machine never stops |
| Compression ratio too high for the type | Low suction with high head — wrong machine for the duty |
| High head pressure | Dirty condenser, failed fan, non-condensables, overcharge |
| Low oil level | Sight glass low, often with noise |
| Excessive suction superheat | Suction line warm at the compressor, poor return gas cooling |
| Blocked water passages on water-cooled heads | Head hot, water flow low, scale in the passages |

A **sealed** unit adds one more: a system low on refrigerant. Many hermetics
rely on the returning suction vapour to carry motor heat away. Not enough
refrigerant circulating means not enough cooling, and the windings run hot even
though the mechanical parts are fine.

> One exception to file away: some rotary sealed compressors discharge into the
> shell by design. Those units always feel hot to the hand while running, and
> that is normal — do not condemn one on touch alone.

## The smaller faults that become big ones

Excessive vibration, faulty gaskets, poor coupling alignment and slipping drive
belts are all minor in themselves, and every one of them can end as a major
breakdown if it is left. Vibration cracks pipework and fatigues mounts;
misalignment destroys seals and bearings; a slipping belt costs capacity long
before it snaps.

## Rotary compressors

A rotary is prone to the same troubles as a reciprocating machine — seizing,
noise, overheating and failure to pump — with shaft seal failure possible only
on open units. Small rotary vane machines do have discharge valves, and often a
check valve in the discharge line, and both can become noisy when liquid is
slugging through.

## Screw compressors

Screws are high-speed machines with very few moving parts, available as open or
hermetic (refrigerant-vapour cooled). Everything hangs on the oil, because in a
screw the oil does several jobs at once: it lubricates bearings and rotors,
cools the rotor lobes and **seals the clearance between the lobes**. That seal
is where the compression happens, so oil condition is a capacity issue, not
just a wear issue.

The oil must be **warm enough to flow** and **clean enough to protect the
precision lobe surfaces**. Aim to keep it around **35°C** so it will pass a
**5–10 micron** filter. Cold oil is too viscous to pass the filter and reach
the tiny rotor clearances, and the oil safety switch shuts the machine down
immediately — which is why a compressor in a cold plant room needs sump
heating. A dirty filter starves it the same way. Oil that gets too hot breaks
down chemically and will also trip the oil temperature switch early.

Oil removed from the discharge gas by the separator is normally cooled,
filtered and pumped back for reuse. The cooler is usually a shell-and-tube
heat exchanger fed with cooling-tower water. If oil temperature will not hold,
suspect fouled water tubes, faulty regulating valves, water that is too warm,
or water pressure and flow that are too low.

Other screw problems: damaged lobe surfaces, dirty suction filters, faulty
motor couplings, faulty oil separators and worn bearings.

## Scroll compressors

Scrolls have fewer moving parts than reciprocating machines, so they are
quieter, lighter and more efficient — like all rotary types, they never have to
reverse the direction of motion to compress. Apart from open-drive automotive
units, they are sealed, and they cover everything from air conditioning to
low-temperature refrigeration, including low-profile horizontal models.

The one thing that catches people out: **a scroll must rotate in the correct
direction**. Run backwards it will not compress, it will be noisy, and it will
be damaged quickly. Always confirm rotation on commissioning of a new or
repaired unit — on three-phase machines that means checking phase rotation
before you walk away.

## Centrifugal compressors

Centrifugals compress by throwing gas outwards with one or more high-speed
impellers, and around **90% are of the bolted hermetic type**, mostly chilling
water for air conditioning and process work. Being high-speed, they depend
absolutely on a clean oil supply to the bearings the whole time they run. Some
modern machines are oil-free, using magnetic bearings — the shaft levitates, so
there is no friction and nothing to lubricate.

Because parts of these systems run **under vacuum**, air and moisture leak
inwards. The non-condensables raise condenser pressure, cut capacity and
increase power, which is why a **purge unit** is fitted to remove them.

Motor cooling is by water or by liquid refrigerant. On water-cooled motors a
solenoid admits water to the motor jacket and a water-regulating valve sets the
flow, while a temperature sensor stops the compressor if the motor reaches
about **43°C** or higher — a high reading points to a blocked cooling line, a
badly set thermostat or a failing motor. On refrigerant-cooled motors the
liquid enters the jacket and leaves as vapour to the economiser, with excess
draining back to the evaporator through a sight glass (often under the motor
terminal box). **Flow should be visible in that glass at all times.** If the
motor protection opens before the plant even reaches design temperature,
suspect a clogged metering device in the liquid line feeding the jacket.

Finally, capacity control: the **pre-rotation vanes**. An actuator, driven by a
controller sensing the leaving cooling medium temperature, sets vane position.
Badly set actuators produce short-cycling, hunting and temperatures that will
not settle. A **load-limiting relay** stops the machine overloading itself and
returns the actuator to its start position on shutdown so the compressor always
restarts unloaded. Set the starting point and the operating range carefully.

## What to remember

- Noise is early warning, heat is late warning; seizure is the invoice.
- Rattle at start-up = crankcase slugging (crankcase heater, pump-down); rattle while running = suction line slugging (expansion valve).
- Prove supply voltage before you blame a seizure on the compressor.
- Screw oil: about 35°C, through a 5–10 micron filter, and it seals as well as lubricates.
- Scrolls must run the right way round — check rotation at commissioning, every time.
- Centrifugals: purge for non-condensables, watch the motor-cooling sight glass, and expect a shutdown near 43°C motor temperature.
`,
        quiz: [
          {
            q: "A compressor rattles for the first 30 seconds after every start, then runs quietly. The most likely cause is…",
            options: [
              "Broken suction reeds",
              "Liquid refrigerant migrating to the crankcase during the off cycle and foaming on start",
              "Loose hold-down bolts",
              "A dirty condenser",
            ],
            answer: 1,
            explain: "Refrigerant dissolves into the crankcase oil while the machine is off. When suction pressure drops at start the mixture foams and the foam hammers through the valves, fading as the refrigerant boils clear. A crankcase heater or a pump-down cycle prevents it. Broken reeds would be noisy continuously.",
          },
          {
            q: "Why is oil temperature and cleanliness more critical in a screw compressor than in a reciprocating one?",
            options: [
              "Screws use twice as much oil",
              "The oil also seals the clearance between the rotors and cools the lobes, so oil condition affects capacity directly",
              "Screw oil is flammable",
              "Screws have no oil filter",
            ],
            answer: 1,
            explain: "In a screw the oil film is part of the compression seal as well as the lubricant and lobe coolant. Oil too cold to pass a 5–10 micron filter will not reach the rotor clearances at all, and the oil safety switch shuts the machine down. Around 35°C keeps it flowing.",
          },
          {
            q: "A newly commissioned three-phase scroll unit is noisy and produces almost no cooling, with suction and discharge pressures barely separating. The first thing to check is…",
            options: [
              "The refrigerant charge weight",
              "The direction of rotation / phase sequence",
              "The expansion valve superheat setting",
              "The condenser fin spacing",
            ],
            answer: 1,
            explain: "A scroll running backwards cannot compress: the pressures stay close, it is noisy, and damage follows quickly. Phase rotation is the standard commissioning check on three-phase scrolls and takes seconds. Charge and superheat matter, but they do not collapse the pressure difference like reversed rotation does.",
          },
          {
            q: "A sealed unit is overheating. Which cause is specific to sealed compressors rather than open ones?",
            options: [
              "High head pressure",
              "Low oil level",
              "A low refrigerant charge, because the returning vapour cools the motor windings",
              "Excessive load on the evaporator",
            ],
            answer: 2,
            explain: "Hermetic motors are cooled by the suction vapour passing over the windings. Too little refrigerant circulating means too little cooling, and the motor runs hot even with sound mechanicals. High head, low oil and excessive load overheat open and sealed machines alike.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "compressor-repair",
        title: "Valve plates, shaft seals and removing a compressor",
        minutes: 12,
        simple: "Some compressor repairs are field work and some belong in a workshop. Changing a valve plate or a shaft seal can be done on site if you are quick and clean; anything that means splitting the crankcase should go back to a bench with proper cleaning and drying gear. The rule that runs through all of it is simple: dirt and moisture are the enemy, so speed and cleanliness matter as much as spanner skill.",
        refs: REFS,
        content: `
Two repairs come up often enough that every technician should know them cold:
replacing a **valve plate** and replacing a **shaft seal**. Both suit field or
accessible-sealed work. Anything deeper — con-rods, pistons, crankshaft, oil
pump — means dismantling the compressor, and that belongs in a workshop with
proper cleaning and dehydration facilities.

## Replacing a valve plate

The sequence below is the general method; always work to the manufacturer's
torque figures and gasket kit.

1. Close the suction service valve and pump the compressor down to **just above atmospheric pressure** — not into vacuum, or you will draw air in.
2. Close the discharge service valve, and the oil separator return line if one is fitted.
3. Recover any refrigerant left in the compressor, then remove the head bolts.
4. Free the discharge service valve from the head and lift the head off. Most heads have cast lugs to help you lift squarely.
5. Lift out the valve plate together with its suction reeds and locating pins.
6. **Remove every trace of old gasket** from the head, the plate and around the cylinders. Scrape if you must. Gasket material does not compress twice — any fragment left behind will leak refrigerant and warp the head.
7. Screw two assembly pins into opposite corners of the block. Make them from headless studs of the same thread as the head bolts, about **20 mm longer**, so the whole stack can be built up over them and stays aligned.
8. Build the new kit in order: valve plate gasket, then suction reeds and locating pins, then the valve plate assembly, then the head gasket, then the head. Start the head bolts **finger tight**, remove the assembly pins and fit the remaining bolts.
9. Tighten in a **cross-over sequence** to the manufacturer's tension.
10. Refit the service valve to the head with a new gasket.
11. Pressurise and leak-test, then recover that test charge.
12. Evacuate the compressor with a vacuum pump to **1500 microns**.
13. Fit gauges, open the service valves and run the machine to check that the new plate is pumping properly.
14. **Re-check the head bolt tension while the compressor is warm** — this step gets skipped and it is the one that stops the gasket weeping a week later.

!FIG[vacuum-decay]

> Field-servicing a valve plate — lapping seats and reeds, cutting your own
> gaskets — is emergency work only, to get a machine running until the correct
> plate and gasket set arrives. It is not a repair.

## Detecting and repairing a leaking shaft seal

Whether a crankshaft seal is repaired or replaced depends on its design. Detect
it the usual way with a leak detector, but read the symptoms too: oil under the
compressor, constant running, poor refrigeration and a rising power bill. On a
low side that runs below atmospheric, a seal leak lets **air in** and shows up
as high head pressure; on a low side above atmospheric it lets **refrigerant
out** and the system goes short of charge.

### Replacing the seal

Speed and cleanliness are everything. The seal faces are lapped optical
surfaces and a single particle between them will leak.

1. Forward-seat the suction service valve and run the compressor briefly until crankcase pressure is **just above atmospheric**. Override the pressure control if you must, but do not run it into vacuum — air will be drawn in.
2. Forward-seat the discharge service valve.
3. Isolate the main power and remove the belts.
4. Pull the flywheel with a proper puller. You may need to shift the compressor for access.
5. Recover any vapour pressure inside the compressor, then remove the seal housing bolts.
6. Extract the seal assembly carefully. If it is a fairly new seal, look for foreign matter trapped between the faces — that tells you why it leaked. Take no chances: if in any doubt, fit the replacement.
7. Clean all gasket material from the cover and crankcase. Check the shaft for scoring or roughness that would stop the neoprene diaphragm ring sealing.
8. Wet the whole exposed length of the shaft and both rubbing faces with **new, clean refrigerant oil** — after completely removing any protective coating from the seal faces.
9. Assemble the rotating parts in the correct order and push the assembly onto the shaft as far as it goes, keeping the machined faces in contact without jarring or uneven loading.
10. Fit the housing gasket and bolt the housing down to the correct tension, again in cross-over sequence.
11. Evacuate and leak-test as for the valve plate, then refit the flywheel and belts. Open the valves, run the compressor briefly and re-test for leaks.

A slight weep at first is not automatically a failure — a longer run lets the
faces bed in. If it still leaks after that, replace the seal again, but this
time look much harder for shaft scoring and for metallic particles in the oil.
Something is producing the debris.

>! Never rest the weight of a compressor on its flywheel. The load goes
>! straight through the crankshaft into the seal faces and ruins the seal you
>! just fitted. Remove the flywheel before moving the machine where you can.

## Removing an external-drive compressor

1. Fit the gauge manifold and check for leaks.
2. Forward-seat the suction service valve.
3. Start and stop the compressor two or three times to avoid pumping oil.
4. Then run it continuously, and keep running for a few minutes after the suction gauge steadies, so all the refrigerant in the crankcase has vaporised.
5. Open both manifold valves and let crankcase pressure come back up to **slightly above 0 kPa gauge**.
6. Forward-seat the discharge service valve.
7. Switch off the power and fit a **"Do not start" tag** to the isolator.
8. Clean around the service valves so no dirt can fall into the valves or the compressor.
9. Unbolt the service valves and immediately plug or tape every opening with clean, dry stoppers.
10. Disconnect the hold-down bolts and remove the belts. The compressor is ready to lift.

## Workshop dismantling — the guidelines that save the rebuild

Full dismantling should follow the manufacturer's manual, because clearances
and construction vary so widely. When it has to be done, these general rules
apply:

- Drain the oil into a **measuring vessel** and record the quantity. Put back exactly that much fresh oil on reassembly, unless you know the machine was low.
- **Measure every gasket thickness** before discarding it. If the correct gasket is unavailable, cut a replacement from material of the same thickness — gasket thickness sets clearance volume.
- Before removing anything, **punch-mark adjacent components** so each head goes back on its own cylinder with its own valve plate, and each piston returns to its own bore. On large machines con-rod and piston assembly lengths differ deliberately to set clearance volume, bores vary slightly, and cover plates may have been machined to match a warped casting.
- Bag reused components in assembly order, with notes, while other parts are cleaned.
- Compression and oil rings go back in the **same piston**, in the **same sequence**, and the **same way up** — an internal chamfer faces the top.
- Measure critical clearances with feeler gauges before dismantling; measure suspected wear with a micrometer.
- If lapping paste has been used, scrub every trace out of the metal pores. Paste left behind is a grinding compound circulating in your bearings.
- Keep everything clean and dry, using appropriate solvents for final clean-up.
- Do not under-tighten or over-tighten bolts and studs.
- **Dehydrate the machine completely after assembly.**

## What to remember

- Pump down to just above atmospheric before opening — never into vacuum.
- All old gasket off, every time; assembly pins keep the stack square.
- Cross-over torque sequence, and re-check head bolts warm.
- Evacuate to 1500 microns before the test run.
- Mark, measure and bag everything before it comes apart.
`,
        quiz: [
          {
            q: "Why is the compressor pumped down to just above atmospheric — rather than into a vacuum — before opening it up?",
            options: [
              "To keep the oil from foaming",
              "So that positive pressure keeps air and moisture out while the machine is open",
              "To protect the pressure gauges",
              "Because the service valves cannot be forward-seated under vacuum",
            ],
            answer: 1,
            explain: "A slight positive pressure means any leak path pushes gas outwards. Under vacuum, the moment a joint is broken the machine inhales atmospheric air and its moisture — the exact contamination the rest of the procedure works to prevent.",
          },
          {
            q: "During workshop dismantling, why are adjacent components punch-marked before removal?",
            options: [
              "To record how many times the compressor has been serviced",
              "So each head, valve plate and piston returns to its original position — clearance volume and bore sizes are matched",
              "So the parts can be identified after painting",
              "To provide a keyway for reassembly tools",
            ],
            answer: 1,
            explain: "Con-rod and piston assembly lengths, bore diameters and machined cover plates are matched to individual cylinders to set the correct clearance volume. Swapping them changes clearance volume and can cause knocking, poor volumetric efficiency or contact.",
          },
          {
            q: "A newly fitted shaft seal weeps slightly on the first short run. The best next step is to…",
            options: [
              "Replace the seal immediately",
              "Tighten the housing bolts well past the specified torque",
              "Run the compressor longer to let the faces bed in, and re-test",
              "Add sealant to the housing gasket",
            ],
            answer: 2,
            explain: "Lapped faces need a short bedding-in period. If it still leaks after a longer run, then replace it — and look for shaft scoring or metal particles in the oil, because something is causing the failure. Over-torquing distorts the housing and sealant contaminates the system.",
          },
          {
            q: "Why must every trace of old gasket be scraped from the head and cylinder block?",
            options: [
              "Old gasket carries acid from the previous refrigerant",
              "Gasket material will not compress a second time, so a leftover fragment holds the head off square and causes leaks and warping",
              "The new gasket will not stick otherwise",
              "It changes the compressor's oil charge",
            ],
            answer: 1,
            explain: "A compressed gasket fragment is effectively a hard shim. It stops the new gasket seating evenly, leaks refrigerant, and can warp the head as the bolts are tightened around it.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "txv-faults",
        title: "TX valve faults: starving, flooding, hunting and superheat testing",
        minutes: 13,
        simple: "A thermostatic expansion valve is a self-adjusting tap that tries to keep the last part of the evaporator dry. When it goes wrong it does one of two things: it feeds too little, so the coil starves and the room stays warm, or it feeds too much, so liquid runs back to the compressor. Almost every TX valve complaint is one of those two, and measuring superheat tells you which.",
        refs: REFS,
        content: `
The thermostatic expansion valve is the metering device on most commercial
refrigeration. It works as a balance of three pressures on a diaphragm: the
**bulb charge pressure** pushing the valve open, opposed by **evaporator
pressure** and an **adjustable spring** pushing it closed. The result is that
the valve holds a roughly constant **superheat** at the evaporator outlet — it
feeds as much liquid as the coil can boil dry, and no more.

!FIG[txv-balance]

When a TX valve misbehaves it does one of exactly two things:

- **(a) it starves the evaporator** — not enough liquid, coil part-fed, capacity down, superheat high
- **(b) it floods the evaporator** — too much liquid, superheat collapses toward zero, liquid heads for the compressor

## Why a valve starves the coil

| Cause | What is really happening |
|---|---|
| Bulb charge lost | The capillary from bulb to power head is broken or the element has leaked; no opening force remains |
| External equaliser port capped off | The valve cannot see true coil outlet pressure and sits closed |
| Poor bulb location | Bulb sees the wrong temperature — for example, two evaporators piped close together where one valve's bulb is influenced by the other's suction |
| Moisture in the system | Water freezes at the first point below 0°C, which is the valve orifice |
| Blocked gauze strainer | The inlet filter just ahead of the valve is choked |
| Too much superheat spring pressure | Simple misadjustment |
| Valve too small for the load | Selection error — it cannot pass enough liquid at design conditions |
| Hunting | Averaged over time, a hunting valve under-feeds |
| Internal equaliser on a high pressure-drop coil | More than about 1 K of pressure drop through the evaporator and the valve reads too high a closing pressure; it also hunts |
| Over-condensing | Low ambient drops condensing pressure, so the pressure drop across the valve cannot push enough liquid through |

Two of those deserve expanding.

**Moisture freeze-up** is a low-temperature problem. Air conditioning coils run
at saturated suction temperatures of about **2 to 4°C**, so the water in the
system never reaches freezing point at the orifice and the valve keeps working
(the moisture still does its damage chemically). On refrigeration and freezer
work, the orifice is the first place below 0°C, so that is where the ice forms.
The system stops, warms, thaws and starts again — an intermittent fault that
comes and goes with the run time.

**Over-condensing** is mainly an air-cooled problem in cool weather.
Water-cooled plant usually has some form of condensing-temperature control.
Once condensing temperature falls below roughly **30–35°C**, the pressure
difference across the valve — which is the only thing pushing liquid through
the orifice — is too small to maintain flow. The fix is head pressure control,
not a bigger valve.

!SIM[Watch a valve that will not open starve the coil](fault=txvStuckClosed)

## Why a valve floods the coil

1. **Incorrect adjustment** — not enough superheat spring pressure.
2. **Poor bulb location** — loose, badly clamped, in a warm draught, or trapped in a position where liquid can lie against it (see the bulb rules below).
3. **Valve far too large** for the evaporator.
4. **Wrong valve for the refrigerant** — an R22 valve fitted to an R134a system, for example. The bulb charge and the port sizing are refrigerant-specific.
5. **Not enough air across the evaporator** — dirty or iced fins, fans off or running slow, blocked air-conditioner filters. Less air means less boiling, and unboiled liquid leaves the coil.
6. **Too much pressure drop through the evaporator.**

!SIM[Watch superheat collapse when the valve overfeeds](fault=txvStuckOpen)

### Bulb positioning rules

- Clamp the bulb on a **horizontal** run of suction line, in good metal-to-metal contact, and insulate it from ambient air.
- On small-diameter suction lines the bulb sits on top of the pipe; on larger lines it is moved around to roughly the 4 o'clock or 8 o'clock position, away from the bottom of the pipe where oil and liquid travel.
- Locate the bulb where the line runs **free-draining** — never in a trap, where liquid collecting in the low point holds the bulb cold and the valve shut.

## Hunting

Hunting is a valve that opens and closes erratically instead of settling. You
detect it at the bulb: watch the bulb temperature, and if it swings by **more
than about 2 K**, the valve is hunting and something must be done. The cycle is
self-feeding — bulb cools, valve throttles closed, coil starves, bulb warms,
valve swings open, coil floods, bulb cools again.

The causes are a familiar list: incorrect adjustment, an oversized valve, not
enough air through the evaporator, poor bulb location, over-condensing, and an
internally equalised valve on a coil with more than 1 K of pressure drop.

Hunting is not harmless. It cuts evaporator performance, so the plant must run
at lower suction temperatures to hold the room, which cuts compressor capacity,
extends run time and pushes up running costs.

## Measuring the real valve superheat

Before you touch the adjusting stem, these conditions must be true or your
reading is meaningless:

1. **Full airflow** over the evaporator — coil free of ice and dirt, filters clean, fans running correctly.
2. **Correct refrigerant charge.**
3. **Bulb correctly located and secure.**
4. **System running at approximately design conditions.** For a Perth design ambient of 36°C, an air conditioner would be condensing at about 36 + 15 K = **51°C**. On a cooler day, restrict condenser airflow until condensing temperature comes up to that figure.
5. **Evaporator operating at its design saturated suction temperature.**

Then take **three** temperatures:

1. The **saturated suction temperature (SST)**, read from a pressure gauge — preferably at the evaporator itself.
2. The refrigerant vapour temperature **at the bulb**.
3. The vapour temperature about **one metre further along the suction line**.

!FIG[superheat-measure]

**Valve superheat = bulb temperature − saturated suction temperature.** Around
**5 K** is regarded as normal, though the correct value depends on the system
design.

The third reading is a sanity check. It should be **higher** than the bulb
temperature, because the gas keeps picking up heat as it travels. If the
temperature one metre downstream is **lower** than at the bulb, there is still
liquid in the line evaporating as it goes — **the valve is flooding**, and the
superheat figure you just calculated is a false one.

### Worked example — correcting for suction line pressure drop

Suppose you can only get a gauge onto the compressor suction service valve, not
the evaporator. Suction line pressure drop means the gauge reads lower pressure
— and therefore a lower saturated temperature — than the coil actually has.

- Gauge at the compressor gives **SST = −1°C**.
- The suction line is sized for the standard **1 K** pressure drop.
- Corrected SST at the evaporator = −1 + 1 = **0°C**.
- Bulb temperature measured = **5°C**.
- Valve superheat = 5 − 0 = **5 K** — normal.

Had you used the uncorrected −1°C you would have read 6 K and might have
wound the valve open chasing a superheat problem that did not exist. One kelvin
sounds trivial; on a 5 K target it is a 20% error.

> **Thermometer notes.** With a digital touch probe, hold it on the pipe long
> enough to see whether the reading is *moving* — that is how you catch a
> hunting valve. Touch probes are unsuitable on supermarket merchandiser
> cabinets, because getting to the pipe means pulling panels off and that
> changes the airflow over the coil. Use a clamp-on probe left in place instead.

## On the job

- Starving and flooding are the only two failure directions; superheat tells you which.
- High superheat with the coil part-frosted = starving. Superheat near zero with a cold, sweating suction line = flooding, and that is compressor damage in progress.
- Fix the airflow and the charge *before* you touch the adjusting stem — most "valve faults" are neither.
- A bulb temperature swinging more than 2 K means hunting; find the cause rather than winding in spring pressure.
- Always take the third temperature one metre downstream. It is the check that stops you reporting a false superheat.
`,
        quiz: [
          {
            q: "Bulb temperature reads 4°C. Saturated suction temperature at the coil is 0°C. The suction line one metre downstream of the bulb reads 1°C. What do you conclude?",
            options: [
              "Superheat is 4 K and the valve is set correctly",
              "The superheat figure is false — the downstream reading is colder than the bulb, so the valve is flooding",
              "The valve is starving the evaporator",
              "The gauge is faulty",
            ],
            answer: 1,
            explain: "Vapour picks up heat as it travels, so the downstream reading must be higher than the bulb reading. A lower one means liquid is still boiling in the suction line past the bulb — the coil is flooding, and the apparent 4 K superheat cannot be trusted.",
          },
          {
            q: "An air-cooled system starves refrigerant on cold mornings but runs correctly on warm afternoons. What is happening?",
            options: [
              "The bulb charge is leaking out at low temperature",
              "Over-condensing — condensing temperature falls below about 30–35°C and the pressure drop across the valve cannot push enough liquid through",
              "The suction line filter is blocked at low temperature only",
              "The compressor unloaders are stuck",
            ],
            answer: 1,
            explain: "The only force driving liquid through the orifice is the pressure difference across it. Low ambient collapses condensing pressure and that difference shrinks. The fix is head pressure control — fan cycling, speed control or dampers — not valve adjustment.",
          },
          {
            q: "A refrigeration system cools normally for an hour, then loses capacity, and recovers after being switched off for a while. Suction pressure falls away as it fails. The classic cause is…",
            options: [
              "An oversized expansion valve",
              "Moisture freezing at the expansion valve orifice",
              "Non-condensable gas in the condenser",
              "A slipping compressor belt",
            ],
            answer: 1,
            explain: "The valve orifice is the first point in the system below 0°C, so free water freezes there, starves the coil and then thaws once the plant warms up — an intermittent, time-related fault. Note that air-conditioning coils at 2–4°C SST do not freeze up this way, which is why it is mainly a refrigeration fault.",
          },
          {
            q: "Why must airflow, charge and bulb mounting be verified before adjusting valve superheat?",
            options: [
              "Because the adjusting stem can only be turned once",
              "Because each of them changes the superheat reading, so adjusting first hides the real fault and mis-sets the valve",
              "Because the manufacturer's warranty requires it",
              "Because superheat cannot be measured on a running system",
            ],
            answer: 1,
            explain: "A dirty coil, a low charge or a loose bulb all shift the measured superheat. Wind the stem to correct for them and the valve is wrong the moment the underlying fault is fixed — and you have masked the real problem in the meantime.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "capillary-and-reversing",
        title: "Capillary tube control and reversing valve troubleshooting",
        minutes: 15,
        simple: "A capillary tube is a metering device with no moving parts — just a very long, very thin pipe whose friction holds the pressure back. It cannot be adjusted, so it is either the right one or the wrong one. A reversing valve is the opposite kind of component: one slide inside a body that swaps a heat pump between heating and cooling, and you diagnose it mostly by feeling the temperature of its six pipes.",
        refs: REFS,
        content: `
## Capillary tube control

The capillary tube is the cheapest metering device there is: a length of very
fine bore tubing whose friction alone holds back the pressure difference. No
moving parts, nothing to adjust, nothing to fail mechanically. That is why it
dominates domestic refrigerators, freezers and small packaged air conditioners.

The design point is the **capacity balance point** — the length and bore where
the tube's resistance is just enough to keep a solid liquid seal at its
entrance without stacking up excessive liquid in the condenser. Get it wrong in
either direction and the system misbehaves:

- **Too little resistance** → vapour enters the capillary and liquid overflows out of the evaporator into the suction line.
- **Too much resistance** → the evaporator is starved.

Manufacturers arrive at the right size only after extensive testing in
environmental rooms across the full range of conditions. That is why a one-off
field installation is better served by a thermostatic expansion valve — you
cannot design a capillary on the back of a docket.

### The telltale symptom of a wrong capillary

A wrongly sized capillary very often **works acceptably in mild weather and
loses capacity in hot weather**. This is common on commercial condensing units
that have been "repaired" with a piece of tube that looked about right.

| Fault | Symptom | Remedy |
|---|---|---|
| Insufficient restriction (tube too short or bore too large) | Suction pressures higher than needed to hold the required temperature; common on cabinets designed for cool climates and used in the tropics | Fit a longer capillary, or one of smaller bore |
| Over-restriction (tube too long or bore too small) | Suction pressures abnormally low; capacity poor | Shorten the capillary — or, if it is not already bonded to the suction line, solder at least one metre of it to the suction line nearest the evaporator |

The confirming test for over-restriction: raise head pressure deliberately by
restricting the condenser airflow until conditions match about a **35°C day**.
If suction pressure now rises and liquid floods into the suction line, the tube
is over-restrictive at normal head pressures. Note the mirror image of this —
an over-restrictive capillary can perform very well in a hot climate while
being badly inefficient in cool weather.

### Reading a selection chart

Manufacturers publish selection graphs of capillary length against average
suction temperature, one curve per bore size, for a stated motor input power,
refrigerant and design ambient. For a **1 kW input** sealed condensing unit on
**R134a** at a **35°C design ambient**:

| Duty | Average suction temperature | Option A | Option B |
|---|---|---|---|
| Freezer | −35°C | 3.1 m of 1.25 mm bore | 2.2 m of 1.00 mm bore |
| Small coolroom | −5°C | 2.2 m of 1.50 mm bore | 1.0 m of 1.07 mm bore |

Read the pattern rather than the numbers: the colder the duty, the more
restriction is needed, and for any duty you can trade bore against length. The
final choice also depends on the physical distance from condenser to
evaporator. **Where you have a choice, prefer a longer length of larger bore** —
control is better and the risk of blockage is much lower.

### Servicing a capillary

There is very little to service. A capillary either works or it is blocked, and
blockages are rarely partial.

- **Blockages** usually come from oil being slugged into the condenser faster than it can mix with the liquid refrigerant. If liquid pumping preceded the blockage, gentle warming and patience will sometimes clear it — but if compressor scale came over with the oil, the block is permanent.
- **Use authorised replacements only.** Resistance depends on internal roughness as well as length and bore, so the factory replacement is matched on *resistance* and may not be the same length and bore as the original.
- **Remove the internal burr** when cutting. A burr is a severe restriction in a 1 mm bore. Better: score the tube with a file and snap it rather than cutting through.
- **When brazing into a drier or a larger line, push at least 20 mm of capillary inside** the larger tube so the joint is well clear of the bore and silver solder or flux cannot enter it.
- **Solder at least one metre of the capillary to the suction line.** This is not optional. Liquid loses pressure continuously along the tube, its boiling point falls, and some of it flashes to vapour — a huge increase in volume and therefore in flow resistance. Bonding the tube to the cold suction line subcools the liquid, prevents flash gas and keeps liquid flowing efficiently. Coil the surplus unbonded tube at the **condenser** end, in a coil wide enough that the tube is never kinked or flattened.
- **Charging is by exact weight.** Evacuate, then weigh in the manufacturer's charge. If no charge figure exists, charge under conditions simulating a 30–35°C day with fans running and observe several complete cycles to confirm that liquid never floods down the suction line, on-cycle or at start-up.

>! A note on a bad habit: it is common practice to slightly overcharge small
>! room air conditioners so that cold, barely superheated vapour reaches the
>! compressor and cools the motor windings. It is wrong in principle and it
>! costs efficiency, even though it does lower compressor operating
>! temperature. Remember too that rotary compressors discharging into the shell
>! always feel hot in normal operation.

## Reversing valves

A four-way reversing valve is what makes a heat pump possible: it redirects
discharge gas so that in heating mode the indoor coil becomes the condenser and
the outdoor coil becomes the evaporator.

!FIG[reversing-valve]

### Rule one: prove the system before you blame the valve

A reversing valve is shifted by *system pressure*, with the solenoid only
piloting the change. So **anything that upsets normal operating pressures can
stop the valve shifting**, and it looks exactly like a failed valve:

- a leak that has lost part of the charge
- a compressor that is not pumping properly
- a leaking check valve
- a defective electrical circuit
- mechanical damage to the valve body itself

Work through these checks before diagnosing the valve:

1. **Inspect** the valve and coil physically for dents, deep scratches or cracks — the sliding assembly binds inside a dented body.
2. **Check the electrical side.** With the circuit energised so the coil should be live, remove the retaining nut and slide the coil part-way off the stem. You should feel a magnetic pull holding it in place. No pull means no power to the coil, or a dead coil.
3. **Check the refrigeration system** operates correctly per the manufacturer's data — pressures, charge, superheat.

### The touch test

Only then perform the touch test: feel the six connections on the valve and
compare their temperatures with each other and with the valve body. The pattern
of hot, warm and cool identifies what is happening inside.

Normal operation looks like this:

| Mode | Discharge tube | Suction tube | Indoor coil tube | Outdoor coil tube | Both pilot capillaries |
|---|---|---|---|---|---|
| Normal cooling | Hot | Cool | Cool (as suction) | Hot (as discharge) | Both at valve body temperature |
| Normal heating | Hot | Cool | Hot (as discharge) | Cool (as suction) | Both warmer than valve body |

And the common malfunctions:

| What you find | Probable cause | Corrective action |
|---|---|---|
| Will not shift, no magnetic pull at the coil | No supply, or open coil | Repair the circuit or replace the coil |
| Will not shift, pressures low, charge short | Loss of refrigerant | Repair the leak and recharge |
| Will not shift, one pilot capillary at body temperature | Dirt in a bleeder hole | De-energise, raise head pressure, re-energise to break the dirt free; if it will not shift, remove and wash the valve, test on air, and refit with a strainer in the discharge tube, mounted horizontally |
| Will not shift, both pilot capillaries at body temperature | Clogged pilot tubes | Raise head pressure and operate the solenoid to clear; replace if it will not shift |
| Will not shift, both pilot capillaries hot | Both pilot ports open — back-seat port did not close | Raise head pressure, operate the solenoid; replace the valve if there is no movement |
| Will not shift; stop the unit and it reverses as pressures equalise | Pressure differential too high | Recheck the whole system — pressures are outside the valve's design range |
| Starts to shift but does not complete the stroke | Insufficient pressure differential at the start of the stroke, or too little flow to maintain it | Check operating pressures and charge, raise head pressure; if it still hangs, fit a valve with smaller ports |
| Hangs at mid-stroke with all four main tubes hot | Compressor pumping volume too low to complete reversal, or body damage | Raise head pressure and operate the solenoid; consider a smaller-port valve, or replace a damaged body |
| All tubes only warm, valve sluggish | Defective compressor | Test the compressor — the valve is not the fault |
| Apparent leak in heating (a hot tube where a cool one belongs) | Piston needle or pilot needle leaking on the slide | Operate the valve several times and recheck; replace if the leak is excessive |

One special case worth memorising: **a valve that worked perfectly until a
motor burnout** has almost certainly been contaminated by dirt and greasy
particles. Remove and wash it thoroughly, test it on air before refitting, or
replace it — and fit a strainer and a filter-drier in the discharge line
between valve and compressor.

### Installing a replacement valve

- Either horizontal or vertical mounting works, but **horizontal is recommended**. In a vertical valve on a dirty system, dirt settles into the body-end strainers and clogs them, which cripples the reversing action.
- Mount the valve where vibration is lowest.
- Handle it gently. A dented or flattened body — or flattened pilot capillary tubing — binds the sliding port assembly and can stop reversal completely.
- Keep copper oxide flakes, filings and dust out of the tubes while brazing.
- Use **fluxless brazing** if you can. If flux is used, keep it out of the system: fluoride and borate residues attack refrigeration systems from the inside.

>! **Keep the valve body cool while brazing.** Body temperature must not exceed
>! **120°C** or the internal needle valves are heat-damaged. Wrap the body in a
>! wet rag, point the flame away from it, and work quickly — a valve ruined
>! during installation looks identical to a valve that failed in service.

## What to remember

- A capillary cannot be adjusted, only replaced with the correct resistance — and factory tubes are matched on resistance, not length.
- Always deburr, insert 20 mm into larger tubes when brazing, bond at least a metre to the suction line, and charge by weight.
- With reversing valves, check charge, compressor, coil and body damage before touch-testing.
- Raising head pressure is the standard first move on a valve that will not shift — most sticking valves are short of pressure difference or blocked with dirt.
- 120°C is the hard limit on the valve body during brazing.
`,
        quiz: [
          {
            q: "A domestic system with a capillary works well in mild weather but loses capacity badly in hot weather, with suction pressure higher than it should be. What is the likely fault and fix?",
            options: [
              "Over-restrictive capillary — shorten it",
              "Insufficient restriction — fit a longer capillary or one of smaller bore",
              "Blocked capillary — warm it to clear",
              "Overcharged system — recover refrigerant",
            ],
            answer: 1,
            explain: "Too little restriction lets the tube pass more refrigerant than the coil can boil, so suction pressure sits higher than needed and capacity collapses when the load rises. More length or a smaller bore restores the balance point. Over-restriction gives the opposite signature — abnormally low suction.",
          },
          {
            q: "Why is at least one metre of the capillary soldered to the suction line?",
            options: [
              "To hold the capillary in place mechanically",
              "To subcool the liquid so it does not flash to vapour inside the tube, which would greatly increase flow resistance",
              "To warm the suction gas before it reaches the compressor",
              "To act as an electrical earth path",
            ],
            answer: 1,
            explain: "Pressure falls continuously along the capillary, dropping the boiling point until some liquid flashes. Vapour occupies far more volume than liquid and chokes the flow. Bonding the tube to the cold suction line removes that heat, keeps the refrigerant liquid, and maintains proper flow.",
          },
          {
            q: "A heat pump will not change over. With the circuit energised, sliding the solenoid coil partly off the stem produces no magnetic pull. What have you established?",
            options: [
              "The valve slide is jammed by dirt",
              "The pilot capillaries are blocked",
              "The problem is electrical — no supply to the coil, or the coil is open circuit",
              "The compressor is not pumping",
            ],
            answer: 2,
            explain: "The magnetic-pull check tests whether the coil is actually energised. No pull means either no voltage reaching it or a failed winding — an electrical fault, not a valve fault. Repair the circuit or replace the coil before touching the refrigerant side.",
          },
          {
            q: "Why must a reversing valve body be kept below 120°C during brazing?",
            options: [
              "Above that the copper anneals and the tubes collapse",
              "The internal needle valves and seals are damaged by higher temperature, ruining a new valve during installation",
              "The refrigerant inside would decompose",
              "The solenoid coil insulation would melt",
            ],
            answer: 1,
            explain: "Heat damage to the internal needles and non-metallic parts is permanent and invisible from outside. The valve then behaves exactly like one that failed in service. Wet rags, a directed flame and quick work keep the body under the limit.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "evaporator-condenser-service",
        title: "Evaporators and condensers in service",
        minutes: 12,
        simple: "Heat exchangers have no moving parts, so when they cause trouble it is almost always because of how they were chosen, installed or maintained — not because they broke. The key number for both is temperature difference: how much colder the coil is than the room, and how much hotter the condenser is than the outside air. When those numbers drift, something is wrong.",
        refs: REFS,
        content: `
Evaporators and condensers are simple: pipes, fins and a fan. That simplicity
is exactly why their faults are rarely their own. Service problems with heat
exchangers nearly always come from design, selection, installation, fouling —
or from another component misbehaving.

## What an evaporator has to do

From the service point of view, an evaporator must be:

- **fully supplied with refrigerant at all times**, and
- **kept free of ice and frost build-up**, unless it is designed to frost.

Sizing matters more than people expect on storage rooms. The balance between
evaporator capacity and compressor capacity sets the **humidity** in the space.
A coil running a large temperature difference below room temperature pulls
moisture out of the air and out of the product — which is why coil selection is
critical for goods stored more than a few days.

## Evaporator field problems

**Design.** One-off, untested evaporators are usually let down by over-long
tube circuits and excessive refrigerant pressure drop. The remedy is to shorten
the circuits and feed them properly — a **refrigerant distributor** with an
**externally equalised** expansion valve.

**Selection.** Most selection errors are **undersized** coils. The signature is
low suction pressure combined with product drying out in store. There is no
adjustment that fixes it: fit the correct, larger coil. **Oversizing** is rare
and gives the opposite problem — humidity too high, with product surfaces going
moist and slimy. That one can be improved by restricting airflow over part of
the coil, or reducing airflow across all of it.

**Baffles.** On natural-convection (gravity) coils, the position of air-directing
baffles decides whether the installation works at all. Bad baffling can make an
otherwise correct installation useless.

**Coil icing.** If a coil should clear itself during the off cycle but does not,
suspect the thermostat or pressure control settings — the plant is not being
given enough off time. Where automatic defrost is fitted and fails to clear the
coil, look at the design and operation of the defrost system itself. In every
case also check for excessive compressor run time, system overload, and fans or
baffles mounted so that air does not reach the whole coil.

!FIG[frost-spiral]

**Oil logging.** Oil that collects in an evaporator ruins heat transfer and
drags suction temperature down. Look for **dead patches with no frost** where
nothing is happening. It is most common on flooded evaporators, but any coil
whose tubing design or refrigerant velocity fails to carry oil back will log
up. The tell-tale history is a compressor that knocks, runs short of oil, and
has had oil added to it repeatedly to stop it knocking — the oil is not
missing, it is lying in the evaporator. The real remedy is redesign: correct
the suction pipe design and routing, fit an oil separator, and physically drain
the oil out of wherever it has collected.

**Evaporator fan motors.** These may be single or three phase, using special
low-temperature bearing lubricant for freezer work. Very small motors, with
propellers under about 200 mm, are often shaded-pole two- or four-pole types.
The classic freezer-room problem is **ice building up in electrical terminals
and conduits, and on fan blades**. Terminals and joints can be sealed with a
silicone-type compound. Blade icing in high-humidity rooms has proved much
harder — the practical solution has been to separate the fan from the coil
physically and duct the air from fan to coil.

**Fan types.** Evaporator fans are usually axial or propeller types with three
or four blades. Air-conditioning units mostly use multi-vane centrifugal
blowers, which work far better against the resistance of ductwork and filters.

## Air-cooled condensers

Typical commercial construction: steel tubes with steel or aluminium fins at
about **300 fins per metre**, fan-forced at an air velocity around **3 m/s**.

The single most useful number is the **temperature difference (TD)** between
ambient air and condensing temperature. In normal operation it should not
exceed about:

| Application | Maximum ambient-to-condensing TD |
|---|---|
| Air conditioning | 20 K |
| Freezer plant | about 8 K |

Freezer plant gets the tighter figure because low-temperature systems already
run a punishing compression ratio; the condenser is deliberately generous so
condensing temperature stays close to ambient and the ratio does not get worse.

If you measure a higher TD than that, check:

1. **Non-condensable gas** in the condenser — it takes up condensing surface and adds its own partial pressure.
2. **Dirt on the fins** — the most common single cause.
3. **Fan rotation direction** — a fan running backwards moves a fraction of its rated air.
4. **Recirculation of air** inside the unit housing, or a wall too close, feeding hot discharge air straight back into the coil.
5. **The unit being used outside its design range** — for instance a condensing unit selected for freezer duty pressed into coolroom service, where it runs far more hours at higher load.

!SIM[Watch condenser TD open up as the coil fouls](fault=dirtyCondenser)

### Worked example — is this condenser dirty?

An air-cooled coolroom condenser, R404A, on a 30°C day. Discharge gauge reads
a saturated condensing temperature of **50°C**.

- TD = 50 − 30 = **20 K**.
- For refrigeration duty you would expect something in the low teens, and a freezer pack should be near 8 K.
- 20 K on this plant means the condenser is not rejecting heat properly.

Now split the possibilities: wash the coil and re-measure. If TD comes back to
about 12 K, it was fouling. If it stays at 20 K with a clean coil and a
correctly turning fan, and subcooling reads high, suspect non-condensables or
overcharge — and check the head pressure against the pressure–temperature
relationship for the refrigerant to see whether the gauge is reading higher
than saturation alone can explain.

!FIG[pt-curve]

## Water-cooled condensers

Because of water restrictions, very few plants can now run water to waste, so
cooling towers are the norm — often with several condensing units sharing one
tower.

Two design numbers matter:

- The **mean temperature difference between cooling water and refrigerant should not exceed about 10 K**.
- The **water temperature rise through the condenser should be about 7 to 8 K**.

Push beyond those and you get scale and corrosion, efficiency falls, and the
extra power cost easily wipes out anything saved on maintenance.

The field rule: **whenever condensing temperature sits more than 10 K above the
water outlet temperature, there is a fault.** Check for:

1. Insufficient water flow.
2. High water inlet temperature — often a cooling tower fan that has failed.
3. Scale or fungus growth inside the condenser tubes.
4. A restricted or inefficient pump.

And do not forget the refrigeration side of the same symptom: system overload
and non-condensables in the condenser will both raise condensing temperature
regardless of how good the water is.

## On the job

- No frost on part of a coil means no refrigerant doing work there — oil logging, a starved circuit or a distributor problem.
- Suction low plus dry product = undersized evaporator; humidity high and product slimy = oversized.
- Air-cooled TD over 20 K on air conditioning, or over about 8 K on freezer plant, means the condenser is not doing its job.
- Water-cooled: 7–8 K rise through the condenser, and no more than 10 K between water and refrigerant.
- Repeatedly adding oil to stop a compressor knocking is treating the symptom of oil logged somewhere in the system.
`,
        quiz: [
          {
            q: "A freezer room evaporator has several fin areas with no frost at all, while the compressor has needed oil added twice this year to stop it knocking. The likely fault is…",
            options: [
              "Air in the condenser",
              "Oil logging in the evaporator from poor suction line design or low refrigerant velocity",
              "An oversized expansion valve",
              "Blocked air filters",
            ],
            answer: 1,
            explain: "Frost-free patches mean no boiling is happening there, and repeatedly topping up the compressor oil says the oil is not lost, just lying somewhere. Oil pooled in the coil kills heat transfer locally. Correcting the suction pipe design, fitting a separator and draining the trapped oil is the real fix.",
          },
          {
            q: "An air-conditioning air-cooled condenser measures a 26 K difference between ambient and saturated condensing temperature. Which is NOT a likely cause?",
            options: [
              "Dirty fins",
              "Fan rotating in the wrong direction",
              "Hot discharge air recirculating into the coil",
              "The liquid line filter-drier being partially restricted",
            ],
            answer: 3,
            explain: "A restricted drier sits downstream of the condenser: it starves the evaporator and raises subcooling, but it does not stop the condenser rejecting heat. Fouling, reversed fan rotation, recirculation and non-condensables all directly widen the ambient-to-condensing TD.",
          },
          {
            q: "On a water-cooled condenser you measure water in at 27°C, water out at 34°C, and a saturated condensing temperature of 48°C. What does this tell you?",
            options: [
              "Everything is normal — the water rise is 7 K",
              "The water rise is acceptable, but condensing is 14 K above water outlet, so there is a fault such as scaled tubes, low flow or non-condensables",
              "The cooling tower is oversized",
              "The condenser water flow is too high",
            ],
            answer: 1,
            explain: "The 7 K rise is textbook, so water quantity is roughly right — but condensing sitting 14 K above the leaving water breaks the 10 K rule. That gap is resistance to heat transfer or extra pressure in the condenser: scale or fungus in the tubes, or non-condensables and overload on the refrigerant side.",
          },
          {
            q: "A coolroom stores fresh produce that keeps drying out, and suction pressure runs lower than expected. What does this suggest?",
            options: [
              "The evaporator is oversized",
              "The evaporator is undersized, so it runs a large TD and dehydrates the product",
              "The condenser is undersized",
              "The thermostat differential is too wide",
            ],
            answer: 1,
            explain: "An undersized coil must run much colder than the room to move the required heat. That large TD condenses moisture out of the air, which the product then replaces — dehydration. Low suction pressure is the matching gauge symptom. Only a correctly sized coil fixes it.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "trouble-analysis",
        title: "Symptom, cause and remedy: the trouble analysis schedule",
        minutes: 15,
        simple: "Manufacturers put a fault-finding chart in the back of the manual for a reason: it turns a vague complaint into a short list of things to check, in a sensible order. This lesson rebuilds that chart. Learn to move down the columns — what the customer says, what you measure, what causes it, what you do — and most jobs stop being mysteries.",
        refs: REFS_ELEC,
        content: `
Most manufacturers publish a fault-tracing schedule with their operating
manual, and it is the most under-used document in the trade. Modern equipment
adds self-diagnosis with fault codes, which narrows the search, but the logic
underneath is unchanged. What follows rebuilds a typical schedule as a set of
working tables. Read down the middle column and you are reading the physics.

## A. The compressor will not start

This complaint is electrical until proven otherwise, and it is solved with a
voltmeter working from the supply toward the motor.

!FIG[ladder-rung]

| What the test shows | Probable cause | Corrective action |
|---|---|---|
| No voltage on the line side of the starter | Supply failure, or the isolator has been opened | Check for a blown fuse or broken conductor; find out *why* the isolator was opened before closing it |
| Voltage on the line side of a fuse but not the load side | That fuse is open | Replace it — and check the motor loading that blew it |
| Voltage present but low | Supply voltage low | Confirm with a voltmeter under load; if genuinely low, refer to the supply authority |
| Full voltage at the motor terminals, motor will not run | Burnt-out motor | Repair or replace |
| Starter itself dead | Burnt-out holding coil or broken contacts | Repair or replace the starter |
| Motor pulls and trips, will not turn the compressor | Compressor seized or mechanically damaged | Overhaul the compressor — and find what caused it |
| Restarts after resetting the high-pressure switch | High-side fault | Diagnose as head pressure too high (section G) |
| Restarts after resetting the oil failure protection control | Oil pressure lost | Check oil level, oil pressure, wiring and the control itself |
| Starter will not pull in | Overload contacts open, or an open control circuit | Find why the overload tripped before resetting; trace the control circuit for the open device |

>! Never simply reset a tripped overload or oil failure control and walk away.
>! Both are protective devices reporting a real condition, and a second reset
>! usually buys a burnt motor or a wrecked bearing. Isolate and tag before
>! opening enclosures, and treat every terminal as live until proven dead.

## B. The compressor short-cycles

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Runs normally but starts and stops too often | Intermittent contact in the control circuit, or low-pressure control differential set too narrow | Repair or replace the faulty control; reset the differential to suit the job |
| Cutting out repeatedly on the low-pressure control | Short of refrigerant, or reduced airflow — dirty coil, dirty filters, broken or slack fan belt | Repair the leak and recharge; clean coil and filters, check the fan drive |
| Suction too low with frost forming on the filter-drier | Restricted liquid line filter-drier | Replace the core, and establish where the contamination came from |
| Compressor will not load or unload, trips on low pressure | Unloading system inoperative | Repair or replace the faulty control — check oil pressure first |

## C. The compressor loses oil

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Oil level simply too low | Insufficient oil charge | Add the correct oil |
| Level falls gradually over weeks | Pipe sizing or design wrong, so oil does not return | Resize the lines, provide oil-lift traps |
| Level falls with an abnormally cold suction line | Liquid flood-back diluting and carrying away oil | Readjust superheat, check the bulb is properly clamped to the suction line |
| Oil around the compressor base with a low crankcase level | Crankcase fittings or the shaft seal leaking oil | Repair the leak and top up with the correct compressor oil |

## D. The compressor runs continuously

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Space temperature too high | Excessive load — infiltration, ventilation, poor insulation | Check for excessive air change and inadequate insulation, and correct the load |
| Space temperature too low | Thermostat controlling at too low a setting, or faulty | Repair or replace the thermostat |
| Bubbles in the sight glass | Short of refrigerant | Repair the leak and recharge |
| Noisy compressor, abnormally low discharge and high suction pressures | Leaking compressor valves | Overhaul the compressor |
| Compressor unloaded but will not stop | Liquid line solenoid stop valve leaking through | Repair the valve |

## E. The compressor is noisy

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Cuts out on the oil failure protection control | Lack of oil | Add oil and find why it went |
| Heavy knocking | Broken internal components | Overhaul the compressor |
| Abnormally cold suction line with knocking | Liquid flood-back, or expansion valve stuck open | Check and adjust superheat; repair or replace the expansion valve |
| Compressor jumping on its base | Hold-down bolts loose | Tighten the hold-down bolts |

## F. The system is short of capacity

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Expansion valve hissing | Flash gas in the liquid line | Restore charge and subcooling — repair any leak first |
| Temperature change across the filter-drier or solenoid valve | Clogged drier or solenoid | Replace the drier core, clean the valve |
| Short-cycling or continuous running | Expansion valve stuck or obstructed, or superheat wrongly adjusted | Repair or replace the valve; check and reset superheat |
| Superheat unusually high | Excessive pressure drop through the evaporator | Recheck the coil and reset the expansion valve — consider an externally equalised valve |
| Short-cycling with poor cooling | Reduced airflow — dirty coil, dirty filters, faulty fan drive | Clean the coil and filters, check the drive |

Notice how often "check the airflow" appears. Air side faults masquerade as
refrigerant faults more than any other cause.

## G. Discharge pressure too high

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Water leaving the condenser excessively warm | Too little, or too warm, condenser water | Provide adequate cool water; lower the cooling tower thermostat setting |
| Water leaving the condenser cool, yet head is high | Fouled tubes in the shell-and-tube condenser | Clean the tubes |
| Condenser exceptionally hot | Air or other non-condensable gas in the system | Recover, evacuate properly and recharge |
| Condenser exceptionally hot, high subcooling | Overcharge of refrigerant | Recover the excess |
| Air-cooled condenser hot | Coil obstructed or fouled | Remove the obstruction, clean the coil |
| Tower appears to be working normally, head still high | Cooling tower undersized for the duty | Recheck the tower selection against its rating data |

## H. Discharge pressure too low

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Water leaving the condenser excessively cold | Too much, or too cold, condenser water | Adjust the water regulating valve or the tower thermostat |
| Tower operating normally but head very low | Cooling tower oversized | Recheck the tower selection; adjust the water flow rate |
| Compressor short-cycling in cold weather | Air-cooled condenser working in low ambient | Fit condensing temperature control — discharge air dampers or fan control |
| **Suction pressure rises faster than 35 kPa per minute after shutdown** | Leaking or broken compressor discharge valves | Remove the head, examine the valves and replace as needed |

That last row is a genuinely useful field test. After the compressor stops, a
sound machine equalises slowly. A fast rise means the high side is dumping
straight back through the discharge valves.

## I. Suction pressure too high

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Compressor runs continuously | Excessive evaporator load | Check outdoor air dampers for excessive intake of warm ventilation air; check the load and infiltration |
| Abnormally cold suction line, liquid returning to the compressor | Expansion valve overfeeding, or stuck open | Regulate the superheat setting and confirm the bulb is properly attached; repair or replace the valve |
| Noisy compressor with high suction | Broken suction valves in the compressor | Remove the head, examine and replace valves as required |

## J. Suction pressure too low

| Symptom | Probable cause | Corrective action |
|---|---|---|
| Bubbles in the sight glass | Short of refrigerant | Repair the leak and recharge |
| Temperature change across the filter-drier or solenoid valve | Clogged drier or valve | Change the core or clean the valve |
| No refrigerant flow through the expansion valve | Power element has lost its charge | Replace the power assembly |
| General loss of capacity | Expansion valve obstructed | Clean the valve, or replace it |
| Conditioned space far too cold | Thermostat contacts stuck closed | Repair or replace the thermostat |
| Compressor short-cycling | Capacity control range set too low | Reset the capacity control range |
| Compressor short-cycling in cold weather | Air-cooled condenser in low ambient air | Fit head pressure control — dampers or fan control |

## Reading the tables like a technician

Three patterns run through the whole schedule and are worth carrying in your
head:

- **Both pressures low** → the low side is starved: short of charge, or a restriction upstream of the coil, or the coil cannot pick up heat because the air side has failed.
- **Both pressures high** → too much heat or too much refrigerant on the high side: fouled condenser, failed fan, overcharge, non-condensables.
- **Pressures converging** (suction up, head down) with a noisy compressor → the pump itself is passing gas internally: leaking or broken valves.

And two habits:

1. Never reset a protective control without finding what it was protecting against.
2. When two causes give the same gauge picture, find the cheap physical test that separates them — the temperature step across the drier, the frost line on the coil, the fan actually turning, the sight glass.

## What to remember

- The schedule's power is its order: complaint, then measured symptom, then mechanism, then repair.
- Electrical no-start faults are found with a voltmeter walked from supply toward the motor.
- Frost or a temperature drop across the filter-drier is one of the highest-value five-second checks in the trade.
- A post-shutdown suction rise faster than 35 kPa/min condemns the discharge valves.
- Airflow problems appear in more rows of this schedule than any other single cause.
`,
        quiz: [
          {
            q: "A voltmeter reads full supply voltage on the line side of a fuse but nothing on the load side. What has this proved?",
            options: [
              "The motor is burnt out",
              "That fuse is open circuit",
              "The contactor coil has failed",
              "The supply voltage is low",
            ],
            answer: 1,
            explain: "Voltage present on one side of a device and absent on the other means the device is not passing current — the fuse has ruptured. Replace it, but also check what overloaded the motor and blew it, or the new fuse follows the old one.",
          },
          {
            q: "After the compressor stops, suction pressure climbs from 100 kPa to 260 kPa in about a minute. What does that indicate?",
            options: [
              "Normal system equalisation",
              "A restricted filter-drier",
              "Leaking or broken compressor discharge valves",
              "An overcharge of refrigerant",
            ],
            answer: 2,
            explain: "A rise faster than about 35 kPa per minute means high-side pressure is dumping straight back through the discharge valves rather than equalising slowly through the metering device. The head should come off for valve inspection.",
          },
          {
            q: "A plant cuts out repeatedly on the low-pressure control. Which pair of causes should be checked first?",
            options: [
              "Overcharge and a fouled condenser",
              "Short of refrigerant, and reduced airflow over the evaporator",
              "Broken discharge valves and non-condensables",
              "A leaking solenoid valve and a loose fan mounting",
            ],
            answer: 1,
            explain: "Low-pressure trips mean the low side cannot hold pressure up: either there is not enough refrigerant, or the coil is not receiving enough heat because airflow has failed — dirty coil, dirty filters, slipping or broken belt. Both are quickly separated by inspection and a superheat reading.",
          },
          {
            q: "The compressor is noisy, discharge pressure is abnormally low and suction pressure abnormally high, and the plant runs continuously without holding temperature. What is the fault?",
            options: [
              "Overcharge of refrigerant",
              "Leaking compressor valves",
              "Blocked filter-drier",
              "Condenser fan running backwards",
            ],
            answer: 1,
            explain: "Pressures converging toward each other while the machine runs non-stop is the signature of a pump that can no longer hold the two sides apart — gas slips back past the valves. An overcharge or a reversed fan would raise head pressure, and a blocked drier would drive suction down, not up.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
