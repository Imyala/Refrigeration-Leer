/* =========================================================================
   Course content, capstone module C.3 — Mandatory electrical tests and
   verification.
   Source: capstone knowledge-assessment topic brief (topics only), AS/NZS 3000
   Section 8, AS/NZS 3017, AS/NZS 3760, AS/NZS 4836 and the model WHS /
   state electrical safety regulations.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority. Every
   practice question, scenario and number here is original to this course.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "AS/NZS 3000 (the Wiring Rules) — Section 8, verification: visual inspection, the mandatory tests, test voltages and acceptance values",
    "AS/NZS 3017 — electrical installations, verification guidelines: methods for continuity, insulation resistance, polarity, fault-loop impedance and RCD testing",
    "AS/NZS 3760 — in-service safety inspection and testing of electrical equipment (test and tag) for cord-connected appliances",
    "AS/NZS 4836 — safe working on or near low-voltage electrical installations and equipment",
    "Model WHS Regulations Part 4.7 and the electrical safety Act/Regulation of your own state or territory — energised electrical work",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — electrical testing and fault-finding",
  ];

  const MODULES = [
    {
      id: "cap-electrical-verification",
      stream: "capstone",
      title: "C.3 · Mandatory electrical tests and verification",
      blurb: "The mandatory tests after electrical work, their order, their acceptance values under AS/NZS 3000 and 3760, and the sequence that proves a system truly dead before you touch it.",
      lessons: [

        /* ================================================================ */
        {
          id: "mandatory-tests-and-order",
          title: "The mandatory tests, and why they run in that order",
          minutes: 14,
          simple: "After you change anything electrical you must prove the job is safe before you hand the machine back. There is a fixed list of checks and a fixed order: look at it, prove the earth, prove the insulation, prove the wires are on the right terminals, then energise and prove the protective devices work. It is like a pre-flight check — the order is what stops you finding a fault the hard way.",
          refs: REFS,
          content: `
Replacing a contactor takes twenty minutes. Proving that the machine you just
worked on will not electrocute the next person who opens it takes another twenty,
and it is not optional. AS/NZS 3000 Section 8 sets out a verification procedure
that applies to new work, alterations, additions and repairs alike. Swapping a
failed component is an alteration to an electrical installation, so the same
sequence applies to you as applies to the electrician who wired the board.

Assessors love this topic because it is entirely knowable and entirely
non-negotiable. Learn the list, learn the order, and learn *why* each step sits
where it does. A candidate who can explain the order will never get the list
wrong.

## The list

| Step | Test | What it proves | Dead or live? |
|---|---|---|---|
| 1 | Visual inspection | The installation is built and selected correctly, undamaged, and safe to test | De-energised |
| 2 | Continuity of the earthing system | Every exposed metal part is connected back to the main earthing terminal by a low-resistance path | De-energised |
| 3 | Insulation resistance | Live conductors are separated from earth and from each other | De-energised |
| 4 | Polarity | Active is in the active terminal, and every single-pole device switches the active | De-energised |
| 5 | Correct circuit connections | Each circuit runs from the intended protective device to the intended load, with its own neutral | De-energised |
| 6 | Impedance required for automatic disconnection (fault-loop impedance) | A fault to earth will draw enough current to operate the protective device in time | Energised |
| 7 | Operation of RCDs | Residual current devices trip, and trip fast enough | Energised |
| 8 | Functional test | The machine actually does its job — contactors pull in, safeties cut out, defrost terminates | Energised |

Steps 1 to 5 are done with the circuit isolated and proven dead. Steps 6 to 8
need the supply on. That split is the backbone of the order.

## Why that order and not some other

**Visual first, because your eyes are free and instant.** A cable with the
insulation cut through, a lug that never went under the screw, a 32 A breaker on
a 2.5 mm² cable — you find those by looking, before you put a test voltage or a
supply voltage into a fault you already knew about.

**Earth continuity second, because everything downstream depends on it.** The
earth conductor is the safety net for every other failure. If it is not proven,
an insulation failure that appears later has nowhere safe to go. Prove the net is
strung before you start walking the wire.

**Insulation resistance third, and always before energising.** This is the test
that finds a fault *without* energising it. Applying 500 V d.c. from a tester
that can only deliver a milliamp or two into a winding shorted to the frame tells
you the fault exists and hurts nobody. Closing the isolator instead puts hundreds
of amps into the same fault, welds a contactor, and may put the frame at supply
potential.

**Polarity and correct connections fourth and fifth, because they are the last
things you can check dead.** Once the supply is on, a reversed active and neutral
is invisible — the machine runs perfectly and the danger is hidden.

**Loop impedance and RCD operation last, because they can only be measured on a
live installation.** They are the tests that prove the *protection* works, and
protection is only meaningful once the installation is energised.

**Functional test at the very end.** Notice that it is at the end and not
instead. A machine that runs is not a machine that is safe.

>! A functional test is not a substitute for the verification tests. A defrost
>! heater with its element shorted to its sheath will still get hot, still
>! terminate on the thermostat and still look like a successful repair — while
>! the frame it is bolted to sits live. The only test that would have caught it
>! is the one somebody skipped because "it works".

## Recording it

Every jurisdiction requires the results to be recorded and, for most electrical
work, a certificate of compliance or electrical safety certificate issued by the
licence holder who did the work. Record the instrument used, its calibration
status, the value measured for each test and the circuit it applies to. "Tested
OK" is not a record; "earth continuity, main earthing terminal to compressor
frame, 0.21 ohms, low-resistance ohmmeter, leads nulled" is.

## What to remember

- Visual inspection is a mandatory test, not a courtesy.
- Dead tests first: earth continuity, insulation resistance, polarity, correct connections.
- Live tests second: fault-loop impedance, RCD operation.
- Functional test last, and it proves nothing about safety.
- Record values, not opinions, and issue the certificate your licence requires.

### Practice — write your answer before opening the model

A three-phase condensing unit has had its compressor contactor replaced. List, in
the order you would carry them out, the tests required before the unit goes back
to service, and give one line on what each proves.

>? **1. Visual inspection.** Confirms the replacement contactor is the correct
>? rating and type, the conductors are landed under the terminals with no stray
>? strands, terminal screws are tight, cable insulation is undamaged, the earth
>? conductor is reconnected and the enclosure can be closed properly.
>?
>? **2. Continuity of the earthing system.** Confirms the frame, the enclosure
>? door, the contactor mounting plate and the compressor body are all still
>? connected to the main earthing terminal at low resistance after the work.
>?
>? **3. Insulation resistance.** Confirms the new contactor and the wiring around
>? it are not shorted to earth or to one another. Done at 500 V d.c. with the
>? electronics disconnected.
>?
>? **4. Polarity.** Confirms the contactor and the control circuit devices are
>? switching the active conductors and not the neutral.
>?
>? **5. Correct circuit connections.** Confirms the phases are back on the same
>? terminals they came off, so rotation is unchanged and the compressor will not
>? run backwards, and that the control circuit is fed from the intended supply.
>?
>? **6. Fault-loop impedance.** Energised. Confirms an active-to-earth fault will
>? draw enough current to operate the protective device inside the required
>? disconnection time.
>?
>? **7. RCD operation.** Energised. Confirms any RCD protecting the circuit trips
>? and trips within its allowed time.
>?
>? **8. Functional test.** Confirms the contactor pulls in and drops out, the
>? safeties operate and the machine controls correctly — then record all results
>? and issue the compliance certificate.

### Practice

A technician replaces a defrost termination thermostat, closes the isolator,
watches the unit complete a defrost cycle correctly, and leaves. Explain what has
not been done and why watching it work is not enough.

>? He has done a **functional test only**. None of the mandatory verification
>? tests were carried out.
>?
>? - No **visual inspection** was recorded, so a nicked capillary, a stray strand under a terminal or a missing gland was never looked for.
>? - No **earth continuity** test, so if he disturbed the earth lug to get at the thermostat, the frame may now be unearthed and nothing will reveal it until a fault occurs.
>? - No **insulation resistance** test, so damage to the wiring loom during the swap is undetected.
>? - No **polarity** or **correct connections** check, so the thermostat may be switching the neutral instead of the active — the heaters would still work, and would still be live with the thermostat open.
>? - No **RCD or loop impedance** verification after the alteration.
>?
>? A functional test only proves the machine performs its intended function. It
>? proves nothing about whether the machine is safe to touch, and it is the last
>? step of verification, not a replacement for it. No results were recorded and
>? no certificate was issued, which is a separate breach in its own right.

### Practice

Explain why insulation resistance is tested before the circuit is energised,
while fault-loop impedance and RCD operation can only be tested afterwards.

>? **Insulation resistance is a dead test by necessity and by design.** The
>? instrument supplies its own 500 V d.c. and measures how much current leaks
>? through the insulation to earth. If supply voltage were present the reading
>? would be meaningless and the tester would be damaged. More importantly, its
>? purpose is to find a breakdown *before* the supply is connected to it: the
>? tester's output is current-limited to a milliamp or two, so a winding shorted
>? to the frame is discovered harmlessly. Energising first would put full
>? prospective fault current into that same short.
>?
>? **Fault-loop impedance and RCD operation are live tests by necessity.** Loop
>? impedance is measured by drawing a controlled current from the live supply
>? through the active and back through the earth, and calculating the loop
>? resistance from the voltage drop. There is no supply to draw from when the
>? circuit is isolated. An RCD test likewise injects a known residual current
>? from active to earth and times the trip — the device has to be energised and
>? closed for there to be anything to trip.
>?
>? The general rule: **everything that can be tested dead is tested dead, and the
>? supply is only restored once those tests have passed.**
`,
          quiz: [
            {
              q: "Under AS/NZS 3000 Section 8, which test comes immediately before insulation resistance?",
              options: [
                "Operation of RCDs",
                "Continuity of the earthing system",
                "Fault-loop impedance",
                "Functional test of the machine",
              ],
              answer: 1,
              explain: "The dead-test sequence is visual inspection, earth continuity, insulation resistance, polarity, correct circuit connections. Earth continuity comes first among the instrument tests because the earthing system is the safety net that every later failure relies on. RCD operation and loop impedance need a live supply, so they cannot precede a dead test.",
            },
            {
              q: "A technician argues that because the unit runs correctly after a contactor change, verification testing is unnecessary. The best rebuttal is:",
              options: [
                "Running proves the wiring is correct, so only a visual check is needed",
                "A functional test proves the machine works but says nothing about earthing, insulation or polarity",
                "Verification is only required on new installations, not repairs",
                "The manufacturer's warranty covers any electrical fault",
              ],
              answer: 1,
              explain: "A machine will run happily with the active and neutral reversed, with the earth conductor disconnected, or with a heater element leaking to its sheath. None of those show up in operation, and all of them are lethal. Verification applies to alterations and repairs, not just new work, and warranty has nothing to do with electrical safety obligations.",
            },
            {
              q: "Which two tests in the mandatory sequence require the installation to be energised?",
              options: [
                "Polarity and correct circuit connections",
                "Visual inspection and earth continuity",
                "Fault-loop impedance and RCD operation",
                "Insulation resistance and polarity",
              ],
              answer: 2,
              explain: "Loop impedance is derived from the voltage drop when a controlled current is drawn from the live supply, and an RCD can only be timed while it is energised and closed. Every other mandatory test is done with the circuit isolated and proven dead, which is why they come first.",
            },
            {
              q: "Recording verification results as 'tested OK' on the job card is inadequate mainly because:",
              options: [
                "The standard requires results in imperial units",
                "It gives no measured values, so no one can tell whether a later reading has deteriorated or whether the test was actually done",
                "Job cards are not legal documents",
                "Only the customer may sign off electrical work",
              ],
              answer: 1,
              explain: "The record has to show the instrument, the circuit, the test and the value. Measured values let the next technician see drift — an earth continuity that was 0.2 ohms and is now 0.9 ohms is a developing fault — and they are the evidence that the test happened at all. Units are metric and the licence holder, not the customer, certifies the work.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "visual-inspection",
          title: "Visual inspection: the test you do with your eyes",
          minutes: 12,
          simple: "Before any meter comes out, you look. Most electrical faults announce themselves visually: a cooked terminal, a cable with no gland, a breaker far too big for the wire it protects. Looking costs nothing and catches the faults that would have bitten you during the instrument tests.",
          refs: REFS,
          content: `
Visual inspection is listed as a mandatory step in AS/NZS 3000 Section 8, on
equal footing with the instrument tests. It is not a glance on the way past. It
is a structured examination of the work you have just done and the equipment it
sits in, carried out with the circuit isolated and proven de-energised, before
any test instrument is connected.

The reason it comes first is efficiency and safety together. An earth continuity
test on a lug that is clamped over paint will give you a puzzling reading and
half an hour of chasing. Seeing the paint takes two seconds.

## What you are actually looking for

| Area | What you check | The fault it catches |
|---|---|---|
| Equipment selection | Rating, voltage, current, duty and type of the replacement part match the original and the design | An undersized contactor that welds shut in six weeks |
| Protective devices | Breaker or fuse rating suits the cable *and* the load | A 32 A device on a cable rated 20 A — a fire waiting for a fault |
| Conductor size and identification | Cross-sectional area suits the load and length; core colours correct | Undersized conductors, an earth core used as an active |
| Terminations | Every strand under the clamp, correct torque, no copper showing, no bootlace ferrule missing | Hot joints, arcing, high-resistance faults, strands touching the frame |
| Earthing and bonding | Earth conductor present, landed on bare metal, bonding straps refitted across doors and removable panels | An unearthed frame — the classic post-repair killer |
| Enclosures and IP rating | Glands fitted and tightened, blanks in unused holes, gaskets intact, covers refitted with all screws | Water into a terminal box; live parts reachable |
| Cable support | Cables clipped, saddled or in flexible conduit, not hanging on their terminations, protected from sharp edges and hot pipework | Vibration fatigue, chafing to earth |
| Location suitability | Equipment rated for the ambient, the moisture and the mechanical exposure it is in | A general-purpose enclosure in a coolroom, filling with condensate |
| Segregation | Extra-low-voltage control and sensor wiring kept away from mains conductors | Induced voltages and, worse, mains appearing on a sensor circuit |
| Signs of past distress | Discoloured terminals, melted insulation, tracking marks, arc pitting, corrosion, rodent damage | The reason the part you just replaced actually failed |
| Isolation and labelling | Isolator accessible, correctly rated, labelled, switchboard schedule updated | Nobody can safely isolate this next time |
| Housekeeping | Swarf, offcuts, drill filings and dropped screws removed from the enclosure | A conductive offcut bridging two phases at start-up |

## Look for the cause, not just the fault

The single most valuable thing visual inspection gives you is the *reason* the
component failed. A contactor with badly pitted contacts and a cooked A2 terminal
did not simply expire — its coil was seeing low voltage, or its contacts were
chattering, or the compressor was drawing far more than the contactor was rated
for. Fit the same contactor again without answering that and you will be back.

Discoloured, brown-tinged insulation at a terminal means the joint has been
running hot for a long time. Green-white powder on a copper lug means corrosion
has been increasing that joint's resistance for months. Both are visible; neither
shows up on a functional test.

>! Do the visual inspection **de-energised and proven dead**, not "carefully"
>! with the supply on. You will be putting your hands and your eyes right into
>! the enclosure, moving cables to see behind them and tugging terminations to
>! check they are tight. That is contact work, and it must be done on a dead
>! circuit that you have locked, tagged and tested yourself.

## The tug test and the torque question

Pulling gently on each conductor at its termination is part of the inspection.
A conductor that moves has not been clamped. Where the manufacturer specifies a
terminal torque — and most modern contactors, breakers and terminal blocks do —
use a torque screwdriver and set it. Overtightening crushes and work-hardens
fine-stranded copper until it fractures; undertightening leaves a high-resistance
joint that cooks. Both failures look identical six months later.

## What to remember

- Visual inspection is a mandatory test, done de-energised, before instruments.
- Check selection, rating, size, terminations, earthing, enclosure integrity and support.
- Read the damage: it tells you why the part failed, which is what stops it recurring.
- Remove every offcut and filing before the cover goes back on.
- Anything you find must be corrected before you continue testing.

### Practice — attempt it before opening the model answer

You have replaced the condenser fan motor in a rooftop packaged unit. List six
things you check by eye before you pick up a test instrument, and state the fault
each one catches.

>? 1. **The new motor's nameplate against the old one and the wiring diagram** — voltage, phase, full-load current, capacitor rating, rotation and frame size. Catches a motor that will overload the protective device or run the wrong way.
>? 2. **The overload or motor protection setting** — set to the new motor's full-load current, not left on the old value. Catches a motor with no effective protection, or one that nuisance-trips.
>? 3. **Every termination in the motor terminal box and at the contactor** — all strands clamped, screws torqued, no copper showing beyond the terminal, correct core colours. Catches high-resistance joints and strands shorting to the box.
>? 4. **The earth conductor** — landed on the motor's dedicated earth stud, on clean bare metal, not on a painted foot or a mounting bolt. Catches an unearthed frame, which is the fault most likely to kill somebody.
>? 5. **The gland, the gasket and the terminal box lid** — correct gland for the cable, tightened, gasket present and undamaged, all lid screws in. Catches water ingress on a rooftop unit, which is where these motors live.
>? 6. **Cable support and clearance** — flexible cable saddled so it does not hang on the terminals, kept clear of the fan blade, the shroud edge and hot discharge pipework. Catches chafing to earth and a cable being cut by the fan.
>?
>? Also worth listing: the fan guard refitted, the blade clear of the shroud all
>? the way round, and no dropped screws or swarf left in the electrical
>? enclosure.

### Practice

During visual inspection you find the new fan motor's flexible supply cable
entering the terminal box through a plain drilled hole with no gland, and the lid
gasket is missing. State the risks and what you do.

>? **The risks:**
>?
>? - The bare edge of the drilled hole will cut through the cable sheath as vibration works the cable back and forth, eventually shorting the actives to the earthed box. On a rooftop unit that vibration is continuous.
>? - Without a gland there is no strain relief, so any pull on the cable is taken directly by the terminals rather than by the enclosure.
>? - With no gland and no gasket the enclosure has lost its IP rating. Rain and condensate will enter, sit on the terminals and cause tracking, corrosion and earth leakage. On a rooftop this is a matter of weeks, not years.
>? - A wet, corroded terminal box is exactly the condition that trips RCDs intermittently and then, when the earth path eventually degrades, energises the frame.
>?
>? **What you do:** stop, do not proceed to testing or energise. Fit the correct
>? gland for the cable type and size, with the correct IP rating for an outdoor
>? location, and fit the correct lid gasket. Confirm the hole size suits the
>? gland — if it has been drilled oversize, use a gland with a suitable sealing
>? washer or fit a correctly sized enclosure entry. Then restart the inspection
>? and continue the test sequence. Record the defect and the rectification.

### Practice

A 3.6 kW single-phase defrost heater bank on a 230 V supply is wired in
2.5 mm² thermoplastic-sheathed cable and protected by a 32 A circuit breaker.
What has the visual inspection told you, and what must happen before the unit is
returned to service?

>? **Work out the load current first.**
>?
>? I = P / V = 3600 W / 230 V = **15.7 A**
>?
>? So the heater bank itself is comfortably within a 2.5 mm² cable's rating and
>? within a 20 A device. The problem is the protective device against the
>? *cable*, not against the load.
>?
>? A 2.5 mm² thermoplastic-insulated copper cable has a current-carrying capacity
>? in the order of 20 A to 25 A depending on how it is installed, derated further
>? if it is bunched, in insulation, or in a hot roof space. A **32 A** circuit
>? breaker will happily allow 25 A to 30 A to flow indefinitely without tripping.
>? The cable, not the breaker, becomes the weakest link — it overheats, its
>? insulation degrades and it eventually fails to earth or catches fire. The
>? protective device is meant to protect the conductor, and this one does not.
>?
>? **What must happen:** the circuit must not be returned to service as found.
>? Either fit a protective device correctly coordinated with the cable — a 20 A
>? device suits both the 15.7 A load and the 2.5 mm² conductor — or, if a 32 A
>? device is genuinely required for another reason, upsize the cable so its
>? derated current-carrying capacity exceeds the device rating. Verify the cable
>? size and installation method against the current wiring rules tables rather
>? than from memory, correct it, then complete the remaining verification tests
>? and record the change.
`,
          quiz: [
            {
              q: "Visual inspection under AS/NZS 3000 Section 8 is carried out:",
              options: [
                "With the circuit energised, so faults can be seen operating",
                "With the circuit isolated and proven de-energised, before any instrument testing",
                "Only if the customer requests it",
                "After the functional test, as a final tidy-up",
              ],
              answer: 1,
              explain: "The inspection involves reaching into enclosures, moving conductors and tugging terminations. That is contact work and demands a dead circuit that you have isolated, locked, tagged and tested yourself. It is placed before instrument testing so obvious defects are corrected rather than chased with a meter.",
            },
            {
              q: "You find brown, heat-discoloured insulation at one terminal of a failed contactor. The most useful conclusion is:",
              options: [
                "The discolouration is cosmetic and can be ignored once the part is replaced",
                "That joint has been running hot for a long time, so the cause — a loose termination, undersized part or excess load — must be found before refitting",
                "The cable must be replaced but the contactor can be reused",
                "The enclosure needs better ventilation and nothing else",
              ],
              answer: 1,
              explain: "Heat discolouration is the visible history of a high-resistance joint or an overloaded device. Fitting an identical replacement without finding out why the joint ran hot guarantees a repeat failure, and the next one may not be so tidy. It is not cosmetic and ventilation is rarely the root cause.",
            },
            {
              q: "During inspection you notice drill swarf lying in the bottom of a switchboard enclosure. Why does this matter?",
              options: [
                "It is untidy but electrically harmless",
                "Conductive filings can be thrown about by vibration and bridge between live parts or between a live part and earth",
                "It voids the enclosure's IP rating permanently",
                "It only matters in three-phase enclosures",
              ],
              answer: 1,
              explain: "Metal swarf is a conductor. Vibration, a door slam or a contactor operating can move it across terminals, causing a phase-to-phase or phase-to-earth fault at start-up. Removing foreign material is a routine part of the inspection, and it applies to single-phase enclosures just as much.",
            },
            {
              q: "The main reason a protective device must be coordinated with the cable, not just the load, is that:",
              options: [
                "Cables are more expensive than breakers",
                "An oversized device will allow a current the cable cannot carry to flow indefinitely without tripping",
                "The load current always exceeds the cable rating",
                "It is required only for three-phase circuits",
              ],
              answer: 1,
              explain: "The device exists to protect the conductor as well as to clear faults. If the device rating exceeds the cable's derated current-carrying capacity, a sustained overload heats the cable until its insulation fails — the breaker never sees a current high enough to operate. Load current is normally well below the cable rating; the coordination problem is between device and conductor.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "earth-continuity",
          title: "Earth continuity: method, limits and why low resistance saves lives",
          minutes: 15,
          simple: "The earth wire's job is to give fault current such an easy path home that the fuse or breaker blows almost instantly. If that path has resistance in it, the current is small, the breaker never trips, and the metal frame quietly sits at close to supply voltage waiting for someone to touch it. That is why we measure the earth path and why the number has to be tiny.",
          refs: REFS,
          content: `
Earth continuity is the test most often described badly in an exam answer. The
weak answer says "to make sure the earth is connected". The strong answer says
what the earth conductor is *for*, and therefore why a low number matters. There
are two mechanisms, and you should be able to name both.

## Mechanism one: operating the protective device

When an active conductor touches an earthed metal frame, current flows out
through the active, into the frame, back down the protective earthing conductor,
through the main earthing terminal, across the MEN link and back to the
transformer's neutral. That is the earth fault loop. Ohm's law fixes the current:

**I = Uo / Zs**, where Uo is nominal voltage to earth (230 V) and Zs is the total
loop impedance.

The protective device only disconnects if that current is big enough to operate
it, fast enough. A 20 A Type C circuit breaker needs somewhere between 5 and 10
times its rating — 100 A to 200 A — to trip on its magnetic element in
milliseconds. Every ohm you add to the earth path cuts the fault current and
pushes the device towards its slow thermal characteristic, or out of its
operating range entirely.

### Worked example — a good earth path

A fixed-wired condensing unit is protected by a 20 A Type C breaker. The earth
path from frame to main earthing terminal measures 0.4 ohms, and the rest of the
loop (active conductor, supply neutral, transformer) contributes 0.6 ohms.

- Zs = 0.4 + 0.6 = **1.0 ohm**
- I = 230 / 1.0 = **230 A**
- 230 A is above the 200 A upper magnetic trip threshold, so the breaker opens in well under 0.1 s.
- While it flows, the frame rises to 230 A x 0.4 ohms = **92 V** — dangerous, but present for less than a tenth of a second.

### Worked example — a corroded earth path

The same unit, but a corroded lug and a painted mounting face have put 25 ohms in
the earth path.

- Zs = 25 + 0.6 = **25.6 ohms**
- I = 230 / 25.6 = **8.98 A**
- 8.98 A is *below* the breaker's 20 A rating. It will never trip. Not in a second, not in a year.
- The frame potential is 8.98 A x 25 ohms = **224.6 V**, and it stays there.

That is the whole argument in two calculations. A degraded earth does not make
the machine slightly less safe; it converts a fault that should clear in
milliseconds into a permanently live metal cabinet.

## Mechanism two: touch voltage

Even while a fault is clearing, the frame is at a voltage above true earth equal
to the fault current multiplied by the resistance of the earth conductor. Keeping
that resistance near zero keeps the touch voltage low for the brief period before
disconnection. The 50 V a.c. figure that appears in the safety literature as the
conventional limit for prolonged contact is why the combination of low resistance
*and* fast disconnection is required — neither alone is sufficient.

## Two different tests, two different limits

This is the part candidates confuse, and it is worth being precise.

| | Fixed installation | Cord-connected appliance |
|---|---|---|
| Standard | AS/NZS 3000 | AS/NZS 3760 |
| What is tested | Main earthing conductor and protective earthing conductors of the installation | Earth path from the plug's earth pin to the exposed conductive parts of the appliance |
| Typical maximum | **0.5 ohms** | **1 ohm** |
| Why that value | The installation's fixed wiring is short, generously sized and permanently supported — there is no excuse for resistance | A flexible supply cord can legitimately be several metres of fine-stranded conductor, so a higher allowance is made for the cord itself |
| When it is done | On installation, alteration, addition or repair | On the routine in-service inspection and test interval for that environment |

They are not competing values and one does not "override" the other. A packaged
chiller hard-wired to an isolator is a fixed installation and is held to
0.5 ohms. The portable vacuum pump you plugged in beside it is an appliance and
is held to 1 ohm from its plug's earth pin to its frame. If a piece of equipment
is cord-connected into a socket outlet, both apply in their own domain: the
installation's earthing up to and including the socket outlet under AS/NZS 3000,
and the appliance's cord and internal earthing under AS/NZS 3760.

Always work to the current edition and to the tester's stated method — some
appliance testers apply a length-dependent allowance rather than a flat 1 ohm.

## Method

1. Isolate, lock, tag and prove the circuit dead.
2. Inspect the earth terminals and conductors: corrosion, fraying, loose screws, paint or anodising under the lug, cut strands.
3. Select a **low-resistance ohmmeter** that injects a substantial test current — hundreds of milliamps up to tens of amps. A general-purpose multimeter's ohms range uses a few milliamps and will read a corroded joint as good.
4. **Null the test leads.** Short the probes together and zero the instrument, or note the lead resistance and subtract it. On a 0.5 ohm limit, a metre of test lead is a significant part of the budget.
5. Connect one probe to the main earthing terminal (or to the plug's earth pin for an appliance).
6. Touch the other probe to *every* exposed conductive part in turn: the frame, the enclosure door, each removable panel, the compressor body, the motor housing, the fan shroud, metal conduit and any bonded pipework. Get onto bare metal, not paint.
7. Record every value against the part it was measured on.

>! Never test earth continuity on an energised installation, and never assume a
>! bonding strap across a hinged door is present just because the door is metal.
>! Doors carrying mounted switchgear are a routine finding: the strap gets
>! removed for access and forgotten, leaving a live-fronted door that is
>! electrically floating.

## What to remember

- The earth conductor's job is to make fault current large enough to trip the protection quickly.
- High earth resistance means low fault current, no trip, and a permanently live frame.
- AS/NZS 3000, fixed installation: 0.5 ohms maximum. AS/NZS 3760, flexible-cord appliance: 1 ohm maximum.
- Use a low-resistance ohmmeter with real test current and null the leads.
- Test to every exposed conductive part, on bare metal, and record each value.

### Practice — work it through before opening the model

A single-phase evaporator fan motor in a coolroom develops an active-to-frame
fault. The unit is protected by a 16 A Type C circuit breaker. The earth
conductor from the frame back to the main earthing terminal has corroded and now
measures 18 ohms; the remainder of the fault loop is 0.7 ohms. Supply is 230 V to
earth.

Calculate the fault current and the voltage the frame will sit at, and state
whether the breaker will operate.

>? **Total loop impedance**
>?
>? Zs = 18 + 0.7 = **18.7 ohms**
>?
>? **Fault current**
>?
>? I = Uo / Zs = 230 / 18.7 = **12.30 A**
>?
>? **Frame (touch) voltage**
>?
>? V = I x R(earth conductor) = 12.30 x 18 = **221.4 V**
>?
>? **Will the breaker operate?**
>?
>? No. A 16 A Type C breaker needs 5 to 10 times its rating — 80 A to 160 A — to
>? trip magnetically, and even its thermal element will not clear 12.3 A because
>? that is below the 16 A rating. The current is too small to be seen as a fault
>? at all.
>?
>? **The result:** the coolroom fan housing sits at about 221 V above earth,
>? indefinitely, with no indication whatsoever. Anyone touching it while standing
>? on a wet coolroom floor completes the circuit through their body. The fan
>? keeps running normally, so nothing draws attention to it.
>?
>? If the earth conductor had been within the 0.5 ohm limit, Zs would have been
>? about 1.2 ohms, the fault current about 192 A, and the breaker would have
>? tripped instantly with the frame at only about 96 V for a fraction of a
>? second.

### Practice

Explain to a first-year apprentice why the same fan motor can have two different
maximum earth resistance figures depending on how it is connected.

>? Because they are **two different tests, on two different things, taken from
>? two different standards**.
>?
>? **Hard-wired into the installation.** The motor is then part of the fixed
>? electrical installation. Its earthing is short, fixed, mechanically supported
>? and generously sized, so AS/NZS 3000 expects the protective earthing
>? conductors and the main earthing conductor to measure no more than about
>? **0.5 ohms**. There is nothing in a fixed run of properly sized copper that
>? should produce more resistance than that, so a higher reading means a defect —
>? a corroded lug, paint under a terminal, a cut strand or a conductor that is
>? too small.
>?
>? **Cord-connected through a plug and socket.** The motor is then an appliance,
>? and the thing being tested is the earth path from the **plug's earth pin** to
>? the motor's exposed metal. That path now includes several metres of
>? fine-stranded flexible cord, which legitimately has measurable resistance and
>? which flexes in service. AS/NZS 3760 therefore allows up to about **1 ohm**
>? for the in-service test.
>?
>? The higher figure is not a relaxation of safety. It is an allowance for a
>? conductor that is genuinely and properly there. What both tests are really
>? asking is the same question: is the earth path low enough that fault current
>? will operate the protective device before anyone gets hurt.

### Practice

You measure 0.8 ohms between the main earthing terminal and the frame of a
fixed-wired condensing unit, using a low-resistance ohmmeter. Is that a pass? Set
out what you do next, in order.

>? **No — it is a fail.** The AS/NZS 3000 figure for a fixed installation's
>? earthing is 0.5 ohms maximum, and 0.8 ohms exceeds it. The unit does not go
>? back into service on that reading.
>?
>? **What you do, in order:**
>?
>? 1. **Confirm the measurement is real.** Short the test leads and null the instrument, or measure the lead resistance and subtract it. Long or damaged leads can easily account for a couple of tenths of an ohm. Re-measure.
>? 2. **Confirm the probe contact.** Get onto clean bare metal at both ends. Paint, powder coating, anodising, grease and corrosion all add resistance at the probe tip and produce a false high reading.
>? 3. **Split the path.** Measure in sections: main earthing terminal to the isolator earth bar, isolator to the unit's earth stud, earth stud to the frame, frame to each panel and to the compressor body. The section that carries most of the 0.8 ohms is where the fault is.
>? 4. **Inspect the suspect section.** Look for a corroded or green-stained lug, a screw clamped over paint or an anodised surface, cut or broken strands under the terminal, a loose screw, or a joint that has been made up with a self-tapper into thin sheet.
>? 5. **Check the conductor size.** Confirm the protective earthing conductor is correctly sized for the active conductors it runs with. An undersized earth is a design fault, not a workmanship fault, and needs replacing.
>? 6. **Rectify, then re-test** the whole path end to end and confirm it is at or below 0.5 ohms.
>? 7. **Record** the original reading, the cause found, the rectification and the final reading, and continue with the remaining verification tests.
`,
          quiz: [
            {
              q: "The primary reason the resistance from a machine's frame to the earth pin must be very low is that:",
              options: [
                "It reduces the machine's running current and saves energy",
                "It allows enough fault current to flow to operate the protective device quickly, and keeps the frame's touch voltage low while it does",
                "It stops the RCD from nuisance tripping",
                "It is needed for the insulation resistance test to give a valid reading",
              ],
              answer: 1,
              explain: "Fault current is set by Ohm's law across the whole earth fault loop. A low-resistance earth path makes that current large, so the fuse or breaker sees a genuine fault and disconnects in milliseconds, and the frame's rise above earth during that moment stays small. Earthing has nothing to do with normal running current, and a good earth actually makes leakage faults more likely to trip an RCD, not less.",
            },
            {
              q: "An earth conductor with 20 ohms of corrosion in it, on a 230 V circuit protected by a 20 A breaker, results in:",
              options: [
                "A fault current of about 11.5 A, which never trips the breaker, leaving the frame live",
                "A fault current of about 4600 A, which trips the breaker instantly",
                "No fault current at all, so the machine is safe",
                "The RCD tripping every time the machine starts",
              ],
              answer: 0,
              explain: "I = 230 / 20.x, which is roughly 11.5 A — well below the 20 A rating, so neither the thermal nor the magnetic element of the breaker operates. The frame then sits at close to supply potential indefinitely. The 4600 A figure would come from dividing by 0.05 ohms, not 20; and current certainly does flow, which is the danger.",
            },
            {
              q: "A flexible-cord appliance is tested under AS/NZS 3760 and its earth path from plug pin to frame measures 0.85 ohms. A fixed-wired unit tests at 0.85 ohms between the main earthing terminal and its frame. The correct assessment is:",
              options: [
                "Both pass, because 0.85 ohms is below 1 ohm",
                "Both fail, because 0.85 ohms is above 0.5 ohms",
                "The appliance passes against the 1 ohm figure; the fixed installation fails against the 0.5 ohm figure",
                "Neither can be assessed without knowing the supply voltage",
              ],
              answer: 2,
              explain: "They are different tests from different standards with different acceptance values. The appliance test includes several metres of flexible cord, so about 1 ohm is allowed under AS/NZS 3760. The fixed installation has no such excuse and AS/NZS 3000 holds it to about 0.5 ohms. Applying one standard's number to the other test is the classic error.",
            },
            {
              q: "Why is a general-purpose multimeter's ohms range unsuitable for an earth continuity test?",
              options: [
                "It reads in ohms rather than milliohms",
                "It injects only a few milliamps, so a corroded or high-resistance joint can still read low and pass",
                "It cannot be used on de-energised circuits",
                "Its leads are too short to reach the main earthing terminal",
              ],
              answer: 1,
              explain: "A joint that is corroded or oxidised may conduct a milliamp adequately and yet fail completely under hundreds of amps of fault current. A low-resistance ohmmeter forces a substantial test current through the joint so the measurement reflects how it will behave under fault conditions. Lead length matters only in that leads must be nulled.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "insulation-resistance",
          title: "Insulation resistance: 500 V, one megohm, and the one exemption",
          minutes: 14,
          simple: "Insulation resistance testing squirts a high but harmless test voltage into the wiring and measures how much leaks away to earth. Good insulation lets almost nothing through, so the reading is in millions of ohms. A low reading means moisture, dirt or damage, and the circuit must not be energised until it is fixed.",
          refs: REFS,
          content: `
The insulation resistance test asks one question: is everything that should be
live still separated from everything that should not be? It is the only
mandatory test that can find a breakdown before the supply is connected to it,
which is why it is done dead and why it is done before energising.

## The instrument and the test voltage

An insulation resistance tester (still universally called a megger) generates a
high d.c. voltage from a small internal source and measures the resulting leakage
current, presenting the result as resistance in megohms. The voltage has to be
high, because insulation that passes a 9 V continuity check can break down
completely at working voltage.

AS/NZS 3000 Section 8 ties the test voltage to the nominal voltage of the circuit
being tested. For circuits with a nominal voltage above extra-low voltage and up
to and including 500 V — which covers a 230 V single-phase circuit and a 400 V
three-phase motor alike — the test voltage is **500 V d.c.** and the minimum
acceptable insulation resistance is **1 megohm**.

That is the answer an assessor is looking for when the question is "what test
voltage would you use on a three-phase motor, and what is the minimum acceptable
reading?" A 400 V three-phase motor is a 500 V-and-below circuit, so it is
**500 V d.c., 1 megohm minimum**.

> Bench note, not an exam answer: some motor manufacturers and rewind shops
> specify 1000 V d.c. for testing windings in isolation on higher-voltage
> machines, and high-voltage plant is tested at higher voltages again. The
> verification figure under AS/NZS 3000 for equipment operating at up to 500 V
> remains 500 V d.c. Work to the standard for verification, and to the
> manufacturer for anything they specify separately.

## Method

1. Isolate, lock, tag, prove dead.
2. **Disconnect anything that will not survive 500 V d.c.** Electronic controllers, inverter drives, soft starters, electronic expansion valve modules, PLCs, dimmers, surge diverters, electronic thermostats and power-factor correction capacitors all come out of circuit. This is the single most common way an apprentice destroys a controller.
3. Close all switches, contactors and links in the circuit under test, or test each section separately, so the whole circuit is included.
4. For an installation test, connect the actives and the neutral together and test that bundle to earth. If it fails, separate them and test conductor to conductor and each conductor to earth to localise the fault.
5. For a three-phase motor, test each winding to the frame (U to earth, V to earth, W to earth) and, where the winding ends are accessible, between windings.
6. Apply the test voltage for long enough for the reading to settle — insulation is capacitive and the reading climbs for the first several seconds.
7. **Discharge the circuit afterwards.** Long cables and motor windings store a real charge at 500 V. Most testers discharge automatically; confirm it before touching anything.
8. Record the value for each measurement.

>! 500 V d.c. from a megger will destroy an inverter drive, an electronic
>! controller or an EEV module instantly, and the damage is not covered by
>! anyone's warranty. Disconnecting them is not optional, and simply turning the
>! tester down to a lower range protects neither the electronics reliably nor
>! gives a valid test of the wiring. If a device cannot be disconnected, the
>! circuit section containing it is excluded from the test and that exclusion is
>! recorded.

## Reading the result

| Reading | What it usually means | Action |
|---|---|---|
| Hundreds of megohms, or over-range | Healthy insulation | Pass, record the value |
| A few megohms, above 1 | Acceptable but worth watching — often surface moisture or dust | Pass, note it, re-test at next service |
| Below 1 megohm | Fail. Moisture, dirt, carbonised insulation, physical damage, or a partial short | Do not energise. Localise and rectify |
| Near zero | A dead short from a conductor to earth | Do not energise. Find it |
| Below 1 megohm on a hermetic compressor | Usually moisture, acid or carbon in the refrigerant charge rather than mechanical damage to the windings | Investigate contamination, not just the motor |

A low reading is a **quantity of leakage**, and it is worth converting it once so
you never forget what "low" means. At 500 V, a 1 megohm insulation resistance
passes 500 / 1 000 000 = 0.5 mA. A 0.05 megohm reading passes 10 mA. Ten
milliamps through a person is enough to lock muscles onto the conductor.

## The exemption AS/NZS 3000 Section 8 allows

There is one important case where equipment legitimately reads below 1 megohm and
is still compliant: **heating elements insulated with compressed mineral powder
inside a metal sheath** — mineral-insulated metal-sheathed elements, the type used
for defrost heaters, drain-line heaters, immersion elements and many crankcase
heaters. The insulant is usually magnesium oxide, which is an excellent
insulator when dry and strongly hygroscopic when cold. It absorbs atmospheric
moisture whenever the element is switched off and cold, and the measured
insulation resistance drops accordingly.

For such elements, Section 8 permits a minimum of **0.01 megohm (10 000 ohms)**
instead of 1 megohm. The moisture is driven back out as soon as the element is
energised and warms up, and the reading recovers.

Two conditions on using the exemption in an answer: it applies to the
**mineral-insulated metal-sheathed heating element itself**, not to the wiring
feeding it and not to anything else on the circuit; and the rest of the circuit
must still meet the 1 megohm figure once the elements are disconnected.

>! Do not stretch the exemption to cover a general low reading. If a defrost
>! circuit reads 0.4 megohm, the correct action is to disconnect the elements and
>! test the wiring on its own. Wiring at 250 megohms plus an element at
>! 0.03 megohm is a compliant result. Wiring at 0.4 megohm with the elements
>! removed is a faulty circuit, and no exemption applies to it.

## What to remember

- 500 V d.c. is the AS/NZS 3000 test voltage for circuits up to and including 500 V, including a 400 V three-phase motor.
- 1 megohm is the minimum acceptable insulation resistance for those circuits.
- Disconnect all electronics and PFC capacitors before testing, and discharge afterwards.
- A low reading means moisture, contamination, carbonised insulation or damage — never energise on a failed reading.
- Mineral-insulated metal-sheathed heating elements are the Section 8 exemption, with 0.01 megohm minimum, because the magnesium oxide packing absorbs moisture when cold.

### Practice — attempt it before opening the model answer

You are commissioning a replacement 400 V three-phase evaporator fan motor. State
the test voltage and minimum acceptable value, describe how you connect the
tester, and then interpret these results:

U to earth 45 megohm, V to earth 0.4 megohm, W to earth 62 megohm.

>? **Test voltage and acceptance value.** The motor's nominal voltage is 400 V,
>? which is above extra-low voltage and at or below 500 V, so AS/NZS 3000
>? Section 8 calls for **500 V d.c.** with a minimum acceptable insulation
>? resistance of **1 megohm**.
>?
>? **Connections.** Isolate, lock, tag and prove dead. Disconnect the motor from
>? the drive or starter so the test does not reach any electronics, and remove
>? any power-factor correction capacitor. Remove the links from the motor
>? terminal block so the three windings are separate. Connect the tester's earth
>? lead to the motor frame on clean bare metal — the earth stud, not the paint —
>? and test each winding end to the frame in turn. With the links out, also test
>? U to V, V to W and W to U. Hold each test until the reading settles, then let
>? the tester discharge before disconnecting.
>?
>? **Interpretation.**
>?
>? - U to earth 45 megohm — comfortable pass.
>? - W to earth 62 megohm — comfortable pass.
>? - V to earth **0.4 megohm — fail.** It is below the 1 megohm minimum, and no exemption applies to a motor winding.
>?
>? Two of three windings being healthy points the finger squarely at the V phase
>? rather than at a general condition like a damp motor sitting outside. If the
>? whole motor were damp all three would read low together. So the likely causes
>? are, in order of what to check: **moisture or contamination in the terminal
>? box** on the V terminal, **a damaged lead** where V exits the winding, or
>? **breakdown of the winding insulation to the stator core** on that phase.
>?
>? **Action.** Do not energise. Open the terminal box, inspect and dry it, clean
>? the terminals and re-test. If V to earth is still 0.4 megohm with the terminal
>? box clean and dry, the fault is in the winding and the motor must be replaced
>? or rewound. Record every reading and the outcome. A motor left in service at
>? 0.4 megohm is leaking about 1.25 mA at 500 V test conditions and considerably
>? more at working voltage, and it is on its way to a phase-to-earth fault.

### Practice

A coolroom defrost circuit is tested at 500 V d.c. and reads 0.35 megohm overall.
Explain how you determine whether this is a compliant result, and set out what
each possible outcome means.

>? **The whole-circuit reading of 0.35 megohm is below the 1 megohm minimum, so
>? as it stands the circuit fails.** But defrost circuits contain
>? mineral-insulated metal-sheathed heating elements, which AS/NZS 3000 Section 8
>? allows to read as low as 0.01 megohm because the magnesium oxide packing
>? absorbs moisture when the element is cold. So the first step is to find out
>? whether the elements are dragging the reading down or whether the wiring is
>? faulty.
>?
>? **Method:** isolate, lock, tag and prove dead. Disconnect the heating elements
>? at their terminations so the wiring and the elements can be tested separately.
>? Test the wiring alone at 500 V d.c., then test each element alone at 500 V
>? d.c., element conductor to sheath.
>?
>? **Outcome A — the compliant one.** Wiring alone reads, say, 250 megohm; each
>? element reads between 0.03 and 0.08 megohm. The wiring passes the 1 megohm
>? requirement and the elements pass the 0.01 megohm exemption. The circuit is
>? compliant. Record the readings and note that the exemption has been applied,
>? and expect the element readings to rise once they have been energised and
>? warmed through.
>?
>? **Outcome B — a faulty element.** Wiring 250 megohm, but one element reads
>? 0.004 megohm. That is below even the 0.01 megohm exemption, so the element has
>? genuinely broken down — cracked sheath, moisture flooding the packing, or the
>? element burnt through to the sheath. Replace that element and re-test.
>?
>? **Outcome C — faulty wiring.** With every element disconnected, the wiring
>? alone still reads 0.35 megohm. No exemption applies to wiring. The fault is in
>? the cabling — water in a junction box, a chafed cable in the coolroom ceiling,
>? a crushed cable at a gland, or a terminal shorting to the enclosure. Localise
>? it by splitting the circuit at junction boxes and testing each leg, rectify it,
>? and re-test until the wiring is above 1 megohm.
>?
>? In none of these outcomes is it acceptable to energise on the original
>? 0.35 megohm reading and hope.

### Practice

Explain why a low insulation resistance reading on a hermetic compressor is
usually a refrigeration problem, not an electrical one — and what your response
should be.

>? Inside a hermetic compressor the motor windings are immersed in refrigerant
>? and oil. Clean refrigerant and clean oil are both good dielectrics, so a
>? healthy hermetic normally reads very high. The winding insulation is also not
>? exposed to the atmosphere, so it does not pick up airborne moisture or dust
>? the way an open motor does.
>?
>? That means when a hermetic reads below 1 megohm, the most likely explanation is
>? not that the enamel has been mechanically damaged, but that the **fluid around
>? the windings has stopped being a good insulator** — moisture in the charge,
>? acid formed by a previous burnout or by moisture reacting with the oil, or
>? carbon and sludge circulating after a partial burn.
>?
>? **Response:**
>?
>? 1. Confirm the reading with the compressor isolated from any electronics, tested winding to shell at 500 V d.c., with the terminals clean and dry — surface contamination or moisture on the terminal plate outside the shell will produce a false low reading, so clean and dry the fusite plate and re-test first.
>? 2. If it is genuinely low, treat it as system contamination. Test the oil for acid, check moisture with a sight-glass moisture indicator, and look for the cause — a leak that let air and moisture in, a failed drier, or a previous burnout that was never cleaned up properly.
>? 3. Rectify the contamination: recover, change the oil, fit suction and liquid line filter-driers of the appropriate type, evacuate thoroughly to remove moisture, and re-check the reading after a period of running.
>? 4. Only if the reading will not recover after the contamination is dealt with is the compressor itself the problem.
>?
>? Replacing the compressor without cleaning up the acid and moisture simply
>? feeds the new motor the same contamination that killed the old one, and the
>? failure repeats — usually faster the second time.
`,
          quiz: [
            {
              q: "Under AS/NZS 3000, a 400 V three-phase motor is insulation-resistance tested at:",
              options: [
                "250 V d.c., 0.5 megohm minimum",
                "500 V d.c., 1 megohm minimum",
                "400 V a.c., 2 megohm minimum",
                "9 V from a multimeter, any reading above 1000 ohms",
              ],
              answer: 1,
              explain: "Section 8 ties the test voltage to the circuit's nominal voltage. A 400 V circuit sits in the band above extra-low voltage and up to 500 V, so it is tested at 500 V d.c. with 1 megohm as the minimum acceptable value. A multimeter's few volts will not stress insulation at all, so a circuit can pass a continuity check and still break down under working voltage.",
            },
            {
              q: "AS/NZS 3000 Section 8 allows a lower minimum insulation resistance for which equipment?",
              options: [
                "Any equipment that has been in service more than ten years",
                "Hermetic compressors, because refrigerant lowers the reading",
                "Mineral-insulated metal-sheathed heating elements, which may read as low as 0.01 megohm",
                "Inverter drives, because their electronics leak to earth",
              ],
              answer: 2,
              explain: "The magnesium oxide packing inside a metal-sheathed element is hygroscopic and absorbs moisture whenever the element is cold, so a genuinely sound element can read well under 1 megohm. Section 8 therefore permits 0.01 megohm for those elements. Age, refrigerant contamination and electronics are not exemptions — electronics must be disconnected before testing, not tolerated.",
            },
            {
              q: "A defrost circuit reads 0.3 megohm overall. With the sheathed elements disconnected the wiring alone still reads 0.3 megohm. The correct conclusion is:",
              options: [
                "Compliant, because the heating element exemption applies to the circuit",
                "Faulty wiring — no exemption applies to cabling, so the fault must be found and rectified before energising",
                "Acceptable if the circuit is protected by an RCD",
                "Acceptable because 0.3 megohm is above 0.01 megohm",
              ],
              answer: 1,
              explain: "The exemption covers the element itself, not the wiring feeding it. With the elements out of circuit the wiring must meet the 1 megohm figure, and 0.3 megohm means moisture, damage or a partial short in the cabling. An RCD is additional protection, never a licence to energise failed insulation.",
            },
            {
              q: "Before an insulation resistance test, inverter drives and electronic controllers must be disconnected because:",
              options: [
                "They give artificially high readings",
                "The 500 V d.c. test voltage will destroy them",
                "They are not part of the electrical installation",
                "The test cannot detect faults through electronics",
              ],
              answer: 1,
              explain: "The test voltage far exceeds what semiconductor devices are built to withstand and will punch straight through them. Disconnecting them protects the equipment and also gives a valid reading for the wiring, which is what is being verified. Turning the tester down is not a workaround — it neither reliably protects the electronics nor satisfies the required test voltage.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "polarity-and-connections",
          title: "Polarity and correct circuit connections",
          minutes: 12,
          simple: "Polarity testing proves the live wire is in the live terminal and that every switch and fuse cuts the live wire, not the neutral. If active and neutral are swapped the machine still runs perfectly — but switching it off leaves everything inside it live. That is why the test exists.",
          refs: REFS,
          content: `
Polarity and correct circuit connections are the two mandatory tests that check
the *identity* of conductors rather than their condition. Insulation resistance
and earth continuity ask "is this conductor healthy?". Polarity asks "is this
conductor the one you think it is, and is it landed where it belongs?".

They matter enormously and they are the easiest tests to skip, because a circuit
with reversed polarity works flawlessly.

## What a polarity test proves

A polarity test confirms all of the following:

- The **active** conductor is connected to the active terminal of every socket outlet, appliance terminal, lampholder and item of switchgear.
- The **neutral** conductor is connected to the neutral terminal only, and to the neutral bar of the correct circuit.
- The **earth** conductor is connected to the earthing terminal only, and to nothing else.
- Every **single-pole switching or protective device** — a switch, a fuse, a single-pole circuit breaker, a thermostat contact, a pressure switch — is in the **active** conductor, not in the neutral.
- The centre contact of an Edison screw lampholder is connected to the active, not the shell.

That last group is the point of the test. It is not enough that the conductors
are the right colour at both ends; the test proves that the device which
interrupts the circuit interrupts the dangerous conductor.

## What a reversed active and neutral actually does

Picture a coolroom evaporator with a defrost heater switched by a defrost
termination thermostat. Wired correctly, the thermostat opens the **active**. When
it opens, the heater is disconnected from the 230 V supply and its terminals sit
at neutral potential, close to earth.

Now reverse the active and neutral at the isolator. Everything still works: the
heater still heats, the thermostat still terminates, the defrost cycle still
completes. But the thermostat is now opening the **neutral**. When it opens, the
heater terminals remain connected to the active. The element, its terminations
and every wire between the isolator and the heater sit at 230 V to earth with the
circuit apparently "off".

The consequences stack up:

| Consequence | Why it is dangerous |
|---|---|
| A device switched "off" is still live at its terminals | The technician who opens it believing the control has isolated it makes contact with 230 V |
| A single-pole isolator no longer isolates | The whole point of the isolator is defeated, silently |
| A fuse or single-pole breaker is in the neutral | It can open on a fault and leave the load fully energised, with no indication |
| Neutral-referenced electronics misbehave | Controllers, EEV drivers and communication circuits reference neutral; sitting them at active potential damages them or produces erratic operation |
| Test-for-dead results become misleading | An apprentice who tests only active-to-neutral may see 0 V and call it dead while both conductors are at 230 V to earth |

>! Reversed polarity is the fault that kills the *next* person, not you. The
>! machine runs, the customer is happy and the danger is completely invisible
>! until someone relies on a switch to make something safe. This is why polarity
>! is a mandatory test after any work that disturbs terminations — including a
>! simple component swap.

## Correct circuit connections

The companion test confirms that each circuit is connected to the protective
device it is supposed to be connected to, and that its conductors stay together
for their whole length.

The classic defect is a **borrowed neutral**: the active of a circuit comes from
one protective device while its neutral is landed on the neutral bar belonging to
a different circuit. The load runs normally. But now:

- Isolating "the circuit" at its breaker leaves its neutral connected to a live circuit, so the conductor is still energised.
- If either circuit is RCD protected, the RCD sees a permanent imbalance between the current out on its active and the current back on its neutral, and trips — usually described as "nuisance tripping" and, far too often, "fixed" by removing the RCD.

On three-phase work the equivalent test includes **phase rotation**. The three
actives must return to the same terminals they came from, so the direction of
rotation is unchanged. Get it wrong and:

- A **scroll compressor** runs backwards. It makes a loud, distinctive noise, pumps no gas, and can be damaged in minutes.
- A **screw compressor** running backwards can be destroyed almost immediately.
- Fans and pumps turn the wrong way. A centrifugal fan running backwards still moves some air, so it may not be obvious — you get a unit that runs, appears to work and cannot make capacity.

Use a rotation meter, or confirm the phase sequence against the supply before and
after the work. Never determine rotation by "bumping" a scroll or screw
compressor and listening, unless the manufacturer specifically permits it.

## What to remember

- Polarity proves the active is in the active terminal and that single-pole devices switch the active.
- A reversed active and neutral leaves equipment live when it is switched off — the machine still runs perfectly.
- Correct connections proves each circuit runs from its own protective device with its own neutral.
- A borrowed neutral defeats isolation and trips RCDs.
- On three-phase, verify rotation: scroll and screw compressors will not tolerate running backwards.

### Practice — write your answer first

A coolroom's electric defrost heaters are controlled through a defrost
termination thermostat. During fault-finding you discover the active and neutral
have been reversed at the unit's isolator. Explain in full what this means for
anyone who works on the machine.

>? **Nothing about how the machine runs is affected.** Current flows the same way
>? through the element either way round, so the heaters heat, the thermostat
>? terminates defrost at its set point and the coolroom holds temperature. There
>? is no symptom.
>?
>? **What has changed is which conductor gets interrupted.** The termination
>? thermostat and any single-pole protective device in that leg are now in the
>? **neutral** conductor instead of the active.
>?
>? **Consequences:**
>?
>? - When the thermostat opens at the end of defrost, the heater elements and every conductor between the isolator and the elements stay connected to the **active** and remain at 230 V to earth. The circuit looks off and is fully live.
>? - Opening the single-pole isolator does not isolate the load either — it breaks the neutral and leaves the active connected. A technician who switches off at the unit and starts work is working live without knowing it.
>? - Any fuse or single-pole circuit breaker in that leg is protecting nothing useful. If it opens on a fault, the load stays energised, so the fault condition persists with no indication.
>? - A test for dead taken only between the two supply conductors would read close to 0 V and could be misread as "dead", when in fact both conductors are at 230 V to earth. This is precisely why testing for dead must include active-to-earth and neutral-to-earth, not just active-to-neutral.
>? - Any neutral-referenced electronics — the defrost controller, an EEV driver, communications — are now referenced to the active. Expect damage or erratic behaviour.
>?
>? **Action:** isolate at the upstream board, lock and tag, prove dead, correct
>? the connections at the isolator, verify polarity at the isolator and at the
>? load, re-run the mandatory tests affected, and check upstream to find out how
>? far back the reversal was made — if it happened at the switchboard, every
>? circuit fed from that point is affected.

### Practice

Explain what a borrowed neutral is, and give two distinct reasons why it must be
corrected.

>? **What it is.** A borrowed neutral exists when the active of one final
>? subcircuit is taken from one protective device, but its neutral conductor is
>? connected to the neutral bar or neutral group belonging to a *different*
>? circuit. The load works normally, because current still has a path out and
>? back — it just does not come back along the conductor that belongs with the
>? active it went out on.
>?
>? **Reason one — isolation is defeated.** Switching off the circuit at its own
>? protective device removes the active, but the neutral conductor remains
>? connected to a circuit that is still energised and still carrying load current.
>? A technician who isolates "their" circuit, locks it off, and then cuts or
>? disconnects the neutral is handling a live, current-carrying conductor. Under
>? load it can also produce a substantial voltage between the disconnected neutral
>? and earth. Someone who tests only active-to-neutral will not detect it.
>?
>? **Reason two — RCD protection is defeated.** An RCD works by comparing the
>? current flowing out on the active with the current returning on the neutral it
>? is paired with. With a borrowed neutral, the return current bypasses the
>? device, so the RCD sees a permanent imbalance and trips immediately or
>? intermittently. It gets labelled a faulty or nuisance-tripping RCD, and the
>? common "fix" is to bypass or remove the device — which removes the protection
>? that would otherwise have saved someone from an unrelated earth fault later.
>?
>? **Correction:** trace each circuit's neutral back and land it on the neutral
>? group associated with its own protective device, then re-verify correct circuit
>? connections and re-test RCD operation.

### Practice

After replacing a three-phase isolator on a scroll compressor condensing unit,
the compressor starts but makes a loud rattling noise, draws well below its
normal running current and the suction pressure barely falls. State the most
likely cause, how you confirm it, and what you do.

>? **Most likely cause: reversed phase rotation.** Two of the three phases have
>? been swapped at the new isolator, so the motor is turning in the opposite
>? direction and the scroll set is running backwards. A scroll compressor running
>? in reverse does not compress — the scrolls simply do not seal in that
>? direction — so it makes a characteristic loud rattling or growling noise, moves
>? almost no gas, and draws far less than its normal running current because it is
>? doing very little work.
>?
>? **The evidence lines up:**
>?
>? - Loud abnormal noise from the compressor.
>? - Running current well below full-load current, not above it. (An overloaded or seized compressor would draw *more*.)
>? - Suction pressure not pulling down and discharge pressure not rising — no pumping.
>?
>? **How you confirm it:** isolate, lock, tag and prove dead, then use a phase
>? rotation meter on the supply side and the load side of the new isolator, or
>? compare the phase sequence against a reference point that has not been
>? disturbed. Also check the condenser fan direction if it is three-phase — it
>? will be turning backwards too, which is often the easiest visual confirmation.
>? Check your own notes or photos of the terminal arrangement before the
>? isolator came out.
>?
>? **What you do:** stop the compressor immediately — every minute it runs
>? backwards risks damage, and on a screw compressor it would already be too late.
>? Isolate, lock and tag, prove dead, swap any two of the three actives to restore
>? the original rotation, re-verify correct circuit connections and rotation with
>? the meter, then restart and confirm normal running current, normal noise and
>? normal pressures. Finally, check the compressor for damage — listen for
>? bearing noise, check the oil, and check the manufacturer's guidance on reverse
>? rotation exposure before signing the machine off.
`,
          quiz: [
            {
              q: "A polarity test primarily proves that:",
              options: [
                "The insulation between conductors is sound",
                "The active conductor is landed on the active terminal and every single-pole device switches the active, not the neutral",
                "Fault current will operate the protective device in time",
                "The earthing conductor is correctly sized",
              ],
              answer: 1,
              explain: "Polarity is about conductor identity and about which conductor gets interrupted. Insulation condition is the insulation resistance test, disconnection time is the loop impedance test, and conductor sizing is checked in visual inspection. A single-pole device in the neutral leaves the load live when switched off.",
            },
            {
              q: "The most dangerous consequence of reversed active and neutral on a defrost heater circuit is that:",
              options: [
                "The heater draws twice its rated current",
                "The heater will not operate",
                "When the thermostat or isolator opens, the heater and its wiring remain at 230 V to earth while appearing to be off",
                "The RCD will trip continuously",
              ],
              answer: 2,
              explain: "Current flows equally well either way round, so the heater works normally and draws normal current. What changes is that the switching device now interrupts the neutral, so the load stays connected to the active. The circuit appears off and is fully live — the hazard is completely invisible until someone touches it.",
            },
            {
              q: "A borrowed neutral will typically cause an RCD to:",
              options: [
                "Trip, because the return current bypasses the device so it sees a permanent imbalance",
                "Fail to trip on a genuine earth fault, but otherwise behave normally",
                "Trip only during a thunderstorm",
                "Operate faster than its rated time",
              ],
              answer: 0,
              explain: "The RCD compares current out on its active with current back on its neutral. If the return path is through another circuit's neutral, the currents never balance and the device trips. The real danger is that this gets called nuisance tripping and the RCD is bypassed, removing protection from everything downstream.",
            },
            {
              q: "After reconnecting a three-phase scroll compressor, the correct way to confirm rotation is to:",
              options: [
                "Briefly bump the compressor and listen",
                "Check the running current only",
                "Use a phase rotation meter and verify the sequence against the supply before energising the compressor",
                "Run it for ten minutes and check whether it makes temperature",
              ],
              answer: 2,
              explain: "A rotation meter tells you the sequence without ever running the compressor backwards. Bumping and listening means the machine has already run in reverse, which on a screw compressor can be immediately destructive. Running current is a symptom that comes too late, and a reverse-running scroll makes no capacity at all so waiting ten minutes only extends the damage.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "rcds",
          title: "RCDs: the fault a fuse cannot see",
          minutes: 12,
          simple: "A fuse only notices when a lot of current flows. The amount of current that stops a heart is tiny by comparison — a fuse would never blink. An RCD watches the current going out and the current coming back, and if even a small amount goes missing it assumes it is going through a person and cuts the supply in a fraction of a second.",
          refs: REFS,
          content: `
A residual current device is the only protective device in a typical installation
that is designed around the human body rather than around the cable. Understanding
that distinction is what makes an RCD answer strong.

## The fault a fuse cannot detect

An overcurrent device — a fuse, a circuit breaker, a motor overload — responds to
the **magnitude of current in the conductor**. It has to, because its job is to
protect the conductor from overheating.

Consider a person touching a live frame while standing on damp concrete. Body
resistance through a wet path might be a few thousand ohms, so the current through
them is in the order of:

I = 230 / 4600 = **0.050 A = 50 mA**

Fifty milliamps across the chest for a second or more is enough to cause
ventricular fibrillation. Now ask what a 20 A circuit breaker makes of 50 mA. It
is one four-hundredth of the breaker's rating. The breaker does not see a fault at
all — as far as it is concerned the circuit is barely loaded. The person dies and
the protection never operates.

The same applies to a slowly developing earth leakage: a damp defrost heater, a
water-damaged terminal box, degraded insulation in a coolroom ceiling. Leakage of
tens or hundreds of milliamps to earth is a fire risk and a shock risk, and it is
invisible to overcurrent protection.

## How an RCD sees it

An RCD passes the active and the neutral of the circuit through a current
transformer wound so the two currents oppose each other. In a healthy circuit,
every milliamp that goes out on the active comes back on the neutral, the two
cancel, and the core sees nothing.

If some of the current returns by another route — through the earth conductor,
through a person, through wet concrete — the balance is broken. The **residual**
current induces a voltage in the sensing winding, and above the device's rated
residual current the trip mechanism releases.

| Rated residual current | Typical application |
|---|---|
| 10 mA | Special situations needing extra sensitivity |
| **30 mA** | Personnel protection: socket outlets, portable equipment, lighting and final subcircuits generally |
| 100 mA / 300 mA | Fire protection and equipment protection on distribution circuits — too coarse for personnel protection |

30 mA is the figure to know for personnel protection. It is chosen to disconnect
before the current through a body has time to cause fibrillation.

## Trip times

Two acceptance figures are worth carrying into an exam:

- At the **rated residual current** (30 mA on a 30 mA device), the device must trip within **300 ms**.
- At **five times** the rated residual current (150 mA on a 30 mA device), it must trip within **40 ms**.

The 5 x test exists because it represents a serious contact fault, and at that
level speed matters far more than sensitivity.

## Testing an RCD

There are three distinct things people call "testing an RCD", and confusing them
loses marks.

1. **The integral push-button test.** Pressing the T button routes a small
   current around the core internally and should trip the device. This proves the
   mechanism has not seized and is what the *user* is instructed to do at regular
   intervals. It does **not** prove trip time, does not prove the sensitivity is
   still correct, and does not prove the earthing or wiring is sound.
2. **The instrument test.** An RCD tester injects a known residual current from
   the active to the earth of the circuit and measures the time to disconnection,
   at the rated current and at five times rated. This is the test that produces
   the numbers you record, and it also proves the earth path is good enough to
   carry the test current.
3. **The ramp test.** Some instruments ramp the residual current up and report the
   actual current at which the device operated, which shows whether the device is
   still within its designed sensitivity band.

### Method

1. Confirm with the customer what will be lost when the device trips. Tripping an
   RCD on a live supermarket rack, a data cabinet or a medical area without
   warning is its own incident.
2. Verify the circuit's earthing first — the test current has to return through
   the earth path.
3. Test at the rated residual current, note the trip time, reset.
4. Test at five times the rated residual current, note the trip time, reset.
5. Test on both half-cycles where the instrument offers it, since some device
   types behave differently on each.
6. Press the integral test button and confirm it trips.
7. Restore the circuit, confirm the load has come back, and record every result
   with the device's rating and location.

>! An RCD is **additional** protection. It is not a substitute for earthing, for
>! correct isolation, or for proving dead. A working RCD does not make it safe to
>! work live: it only limits the duration of a shock, and it will not protect you
>! at all against a shock taken between the active and the neutral, because that
>! current goes out and comes back exactly as the device expects.

## Limits and nuisance tripping

- An RCD does **not** protect against active-to-neutral contact, because there is no imbalance.
- An RCD does **not** replace overcurrent protection; a short circuit still needs a fuse or breaker.
- Repeated tripping is a fault report, not an annoyance. Common real causes on refrigeration plant: moisture in a defrost heater or its terminations, water ingress into an outdoor enclosure, long cable runs with high capacitive leakage, and inverter drives whose earth leakage is inherently high and cumulative when several share one device.
- Never bypass an RCD to "prove" the machine is fine. Find the leakage, usually by splitting the circuit and using a leakage clamp meter.

## What to remember

- The RCD detects the imbalance between active and neutral current — current leaving by an unintended path.
- A fuse cannot see it: 30 mA is lethal and is nowhere near any protective device's rating.
- 30 mA is the personnel protection figure; 300 ms at rated current and 40 ms at five times rated are the trip times to know.
- Push-button test proves the mechanism; instrument testing proves the times and sensitivity.
- An RCD is additional protection and never a substitute for isolation.

### Practice — attempt it before opening the model answer

Explain, with figures, why a 20 A circuit breaker cannot protect a person from
electrocution, and what an RCD does instead.

>? **What the breaker responds to.** A 20 A circuit breaker protects the
>? conductor. Its thermal element responds to sustained currents somewhat above
>? 20 A, and its magnetic element responds to short-circuit currents typically
>? five to ten times its rating — of the order of 100 A to 200 A. It measures the
>? current in the conductor and nothing else.
>?
>? **What a shock actually is.** Take a person in contact with a live frame while
>? standing on a damp floor, with a total body-and-path resistance of about
>? 4600 ohms:
>?
>? I = V / R = 230 / 4600 = **0.050 A = 50 mA**
>?
>? Compare that with the breaker's rating:
>?
>? 50 mA / 20 A = 0.0025, or **0.25% of the breaker's rating.**
>?
>? The breaker sees a circuit drawing a fraction of its capacity. It will not
>? operate — not in a second, not ever. Yet 50 mA through the chest for more than
>? a fraction of a second is enough to send the heart into ventricular
>? fibrillation.
>?
>? **What the RCD does instead.** It ignores magnitude and looks at **balance**.
>? The active and neutral of the circuit pass through a current transformer wound
>? so their magnetic effects oppose. In a healthy circuit the current out equals
>? the current back and the core sees nothing. When 50 mA leaves through a person
>? instead of returning on the neutral, the currents no longer cancel; the
>? residual induces a signal in the sensing winding and the device releases.
>?
>? A 30 mA device would trip on that 50 mA — comfortably above its rated residual
>? current — and would do it well inside 300 ms, in practice usually within a few
>? tens of milliseconds. That is fast enough to interrupt the current before it
>? has time to cause fibrillation.
>?
>? **The key point in one line:** the fuse protects the cable from too much
>? current; the RCD protects the person from a very small current going the wrong
>? way.

### Practice

You instrument-test two 30 mA RCDs on a supermarket plant room board and record
the results below. Assess each and state your action.

Device A: 218 ms at 30 mA; 27 ms at 150 mA; push-button trips.
Device B: 415 ms at 30 mA; 62 ms at 150 mA; push-button trips.

>? **Acceptance figures for a 30 mA RCD:** trip within **300 ms** at the rated
>? residual current of 30 mA, and within **40 ms** at five times rated
>? (150 mA).
>?
>? **Device A**
>?
>? - 218 ms at 30 mA — within 300 ms. **Pass.**
>? - 27 ms at 150 mA — within 40 ms. **Pass.**
>? - Push-button operates, so the mechanism is free.
>?
>? Device A passes. Record both times, the device rating and its location,
>? confirm the circuit has been restored, and move on.
>?
>? **Device B**
>?
>? - 415 ms at 30 mA — exceeds 300 ms. **Fail.**
>? - 62 ms at 150 mA — exceeds 40 ms. **Fail.**
>? - The push-button trips, which shows exactly why the push-button test alone is worthless as a verification: the mechanism moves, but it moves far too slowly to protect anyone.
>?
>? Device B has failed on both counts. A device this slow is usually mechanically
>? sticky from age, dust, corrosion or heat, or it has been left sitting closed
>? for years without operating.
>?
>? **Action for Device B:** it must be **replaced**, not adjusted — RCDs are not
>? field-adjustable and a slow one does not recover reliably by being exercised.
>? Arrange the outage with the site, isolate the board, replace the device with
>? one of the same type and rated residual current suitable for the load, re-test
>? at 30 mA and 150 mA, confirm both times are within limits, verify the circuits
>? downstream come back correctly, and record the results and the replacement.
>? Until it is replaced, the circuits it protects should be treated as not having
>? effective residual current protection, and that must be reported to the site in
>? writing.

### Practice

A site reports that an RCD protecting the coolroom circuits trips two or three
times a week, always overnight, and asks you to "put a bigger one in". Explain
your response and how you would find the cause.

>? **The response to the request:** no. Fitting a device with a higher rated
>? residual current, or bypassing the RCD, removes the protection that is
>? currently doing its job. A device that trips is reporting a real fault, and
>? overnight repetition is a very strong clue rather than a random nuisance. The
>? request must be declined and the reason explained and recorded.
>?
>? **What the pattern is telling you.** Tripping overnight, at the same time of
>? day, on coolroom circuits points hard at **defrost**. Defrost cycles are
>? usually timed and fall outside trading hours. Sheathed defrost elements absorb
>? moisture into their magnesium oxide packing while they are cold, and the
>? leakage current to the sheath is at its highest in the first minutes of
>? energising, before the element dries out. Several elements on one RCD add their
>? leakage together, and the total crosses 30 mA.
>?
>? **How to find it:**
>?
>? 1. Get the defrost times from the controller and confirm they coincide with the trips.
>? 2. With the plant running, use a **leakage clamp meter** around the active and neutral together of each subcircuit at the board, during a defrost. The clamp reads the same residual current the RCD sees. This is done live, so it is energised work with all the controls that entails, or it can be done by initiating a manual defrost and observing.
>? 3. Split the load: identify which coolroom, then which evaporator, then which element, by measuring each in turn.
>? 4. With that circuit isolated, locked, tagged and proven dead, insulation-resistance test each element at 500 V d.c. Sheathed elements are allowed down to 0.01 megohm under the Section 8 exemption, so a reading of, say, 0.004 megohm identifies a genuinely failed element while 0.05 megohm identifies one that is merely damp.
>? 5. Check the element terminations and the terminal box for water ingress, failed glands and perished gaskets — on evaporator heaters, defrost condensate running into the box is extremely common.
>?
>? **Rectification:** replace failed elements, dry and reseal wet terminations,
>? restore enclosure integrity. If the total leakage is genuinely made up of many
>? small legitimate contributions rather than one fault, the correct engineering
>? answer is to **split the circuits across more RCDs** so each device sees less
>? accumulated leakage — never to raise the residual current setting on a
>? personnel-protection device.
`,
          quiz: [
            {
              q: "The fault an RCD detects that an overcurrent device cannot is:",
              options: [
                "A short circuit between two phases",
                "A sustained overload on a cable",
                "Current leaving the circuit by an unintended path, such as through a person, so that active and neutral currents no longer balance",
                "A locked-rotor compressor",
              ],
              answer: 2,
              explain: "The RCD compares outgoing and returning current and responds to the difference, which can be as small as 30 mA. Short circuits, overloads and locked rotors all produce large conductor currents that a fuse or breaker handles well. The residual fault is invisible to those devices because the conductor current barely changes.",
            },
            {
              q: "A 30 mA RCD must trip within which times?",
              options: [
                "300 ms at 30 mA and 40 ms at 150 mA",
                "40 ms at 30 mA and 300 ms at 150 mA",
                "1 s at 30 mA and 300 ms at 150 mA",
                "300 ms at any residual current",
              ],
              answer: 0,
              explain: "At its rated residual current the device is permitted up to 300 ms; at five times rated, which represents a serious contact fault, it must operate in 40 ms. The times get shorter as the current gets larger because the danger to the heart rises steeply with both current and duration.",
            },
            {
              q: "The integral push-button test on an RCD proves:",
              options: [
                "That the trip time meets the standard",
                "That the earthing of the circuit is sound",
                "That the tripping mechanism operates — nothing about trip time, sensitivity or the earth path",
                "That the device is correctly rated for the load",
              ],
              answer: 2,
              explain: "The button routes a current internally around the core, so it exercises the mechanism only. A device can pass the button test and still take half a second to trip, which is far too slow. Only an instrument test that injects a known residual current and times the disconnection proves the acceptance values, and it also confirms the earth path can carry the test current.",
            },
            {
              q: "Why does an RCD offer no protection against a shock taken between the active and the neutral?",
              options: [
                "Because the current is too small to detect",
                "Because the current goes out on the active and returns on the neutral exactly as the device expects, so there is no imbalance",
                "Because RCDs only monitor the earth conductor",
                "Because neutral is at earth potential",
              ],
              answer: 1,
              explain: "The device only responds to a difference between the two currents. A person bridging active and neutral becomes part of the normal circuit, so the currents still balance and the RCD stays closed. This is a fundamental limitation and is one of several reasons an RCD can never justify working live.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "proving-de-energised",
          title: "Proving a system de-energised",
          minutes: 15,
          simple: "Before you touch anything you must prove it is dead, not assume it. That means finding every supply feeding the machine, switching them all off, locking and tagging them, then testing with a meter you have just proved works on a known live source — and proving it works again afterwards. Anything you have not tested yourself is live.",
          refs: REFS,
          content: `
This is the procedure that keeps you alive, and it is the one an assessor is most
likely to ask you to list in order. Learn it as a sequence with a reason attached
to each step, because a memorised list falls apart the moment the job is not
textbook — and refrigeration plant is very rarely textbook.

## The sequence

### 1. Risk assessment and planning

Before anything is touched. What is the work, what could go wrong, what supplies
are involved, who else is affected, what is the rescue plan? On most sites this
is a SWMS or JSA and it is a legal requirement, not paperwork. Identify whether
the work genuinely can be done de-energised — it almost always can, and it must
be unless there is no reasonable alternative.

### 2. Identify every source of supply and every point of isolation

This is the step that catches people out on refrigeration plant, because a single
machine very often has more than one supply:

- The main power supply to the condensing unit.
- A **separate control supply**, sometimes from a different board or a different phase.
- A **separate defrost or heater supply** fed from elsewhere.
- The **evaporator fan supply**, which on a split system may come from the indoor unit's own circuit.
- Case lighting, anti-sweat heaters and drain heaters, often on a house circuit.
- Interlocks from an adjacent machine, a BMS or a fire trip circuit.
- **Stored energy**: run and start capacitors, power-factor correction capacitors, an inverter drive's DC bus, a UPS, batteries in a controller.
- On-site generation: standby generator, solar inverter, battery storage.

Work from the wiring diagram, the switchboard schedule and your own tracing.
Never rely on a label alone.

### 3. Consult and notify

Tell the people affected. On a supermarket, a cold store or a hospital, dropping a
circuit without notice can spoil stock, trip a plant sequence or affect patient
areas. Obtain any permit the site requires and agree how the plant will be
restored.

### 4. Isolate

Open every isolator identified. Withdraw fuses, rack out breakers, or open the
main switch as appropriate. Isolation must be by a device intended for the
purpose — pulling a plug counts only if the plug remains under your control.

### 5. Secure the isolation: lock and tag

Fit a lock and a **personal danger tag** at every isolation point. Each person
working on the plant fits their own lock, using a multi-hasp where more than one
person is involved, so no one can restore the supply while anyone is still
working. Only the person who fitted a lock removes it. Where the plant is faulty
and must not be operated at all, an **out-of-service tag** goes on as well.

A tag with no lock is a request. A lock is a control.

### 6. Prove the test instrument on a known live source

Before you test the circuit, prove the instrument works. Use a known live supply
or a purpose-made proving unit. Check the leads, the fuses and the battery, and
confirm the instrument is rated for the category and voltage of the installation.

### 7. Test the circuit for dead — every conductor, every combination

At the point of work, not at the isolator. On single-phase: active to neutral,
active to earth, neutral to earth. On three-phase: each phase to each other
phase, each phase to neutral, each phase to earth, and neutral to earth. Do not
test only between the two conductors you expect to be live — reversed polarity or
a borrowed neutral will produce a comfortable 0 V while both conductors sit at
supply potential to earth.

### 8. Re-prove the instrument on the known live source

This is the step most often left out of a written answer, and it is the one that
catches a fuse that blew or a lead that broke *during* your test. If the
instrument was working before and is still working after, the 0 V readings in
between were real. If it has failed, your "dead" result meant nothing.

### 9. Discharge and, where required, earth stored energy

Discharge capacitors through a suitable resistive discharge device, not by
shorting them with a screwdriver. Observe the manufacturer's stated waiting time
for an inverter drive's DC bus — several minutes is common — and then confirm the
bus voltage has fallen with a meter. On larger installations, apply earths where
the procedure requires them.

### 10. Only now is it de-energised — and anything unproven stays live

Apply the rule without exception: **if you did not prove it dead yourself, it is
live.** Not the isolator someone else locked. Not the circuit that "isn't used
any more". Not the conductor a colleague says he already tested. If you leave the
job and come back, prove it again.

### 11. Restoring

Remove tools and materials, refit covers and guards, complete the verification
tests required by the work you did, remove your tag and lock personally, confirm
everyone is clear, then energise and carry out the functional test.

>! Never work from a "dead" reading you did not take yourself, and never accept a
>! reading from an instrument you have not proved immediately before and
>! immediately after. A meter with a blown lead fuse reads 0 V on a live 400 V
>! busbar, and it looks exactly like a successful test for dead.

>! Refrigeration plant is the classic multiple-supply trap. Isolating the
>! condensing unit does not de-energise a defrost heater fed from the store's
>! distribution board, and it does not de-energise an evaporator fan wired back to
>! the indoor unit. Trace every supply from the diagram before you touch a
>! terminal.

## What to remember

- Risk assess, identify every supply, notify, isolate, lock and tag, prove the tester, test for dead, re-prove the tester, discharge stored energy.
- Test every conductor combination at the point of work, including to earth.
- One lock per person; only the person who fitted it removes it.
- A tag alone is not isolation.
- Unproven means live. Every time, no exceptions.

### Practice — write your answer before opening the model

A rooftop packaged unit has its main three-phase supply from the plant room
board, a separate single-phase supply feeding its electric defrost heaters from
the store distribution board, and a variable speed drive on the condenser fan.
Set out, in order, the full procedure you follow to prove it de-energised before
replacing the compressor contactor.

>? 1. **Risk assessment and planning.** Prepare or review the SWMS or JSA for the
>? task: rooftop access, working at height, weather, the electrical hazards, the
>? rescue plan and how you will raise the alarm. Confirm the work can be done
>? de-energised — replacing a contactor always can, so there is no justification
>? for energised work.
>?
>? 2. **Identify every source of supply and every isolation point.** From the
>? manufacturer's wiring diagram and the switchboard schedules: the three-phase
>? main supply and its isolator at the plant room board and at the unit; the
>? separate single-phase defrost heater supply and its protective device at the
>? store distribution board; the control transformer supply; and the stored energy
>? in the **VSD DC bus** and in any power-factor or run capacitors. Check for a
>? BMS interlock or fire trip that could re-energise a circuit.
>?
>? 3. **Consult and notify.** Tell the store, the duty manager and anyone whose
>? plant or stock is affected. Agree the outage window, obtain any site permit,
>? and confirm what will be lost when the defrost circuit is dropped.
>?
>? 4. **Isolate at every point.** Open the local isolator at the unit and the
>? upstream protective device at the plant room board for the three-phase supply.
>? Open the defrost supply's protective device at the store distribution board.
>? Isolate the control supply.
>?
>? 5. **Lock and tag every isolation point.** Fit your own padlock and personal
>? danger tag at each — the unit isolator, the plant room board device and the
>? store board device — using a multi-hasp if anyone else is working with you.
>? Add an out-of-service tag if the unit is faulty and must not be run.
>?
>? 6. **Wait out the drive's stored energy.** Observe the VSD manufacturer's
>? stated discharge time for the DC bus before opening the drive enclosure.
>?
>? 7. **Prove the test instrument** on a known live source or a proving unit.
>? Check leads, fuses, battery, and that its category rating suits the
>? installation.
>?
>? 8. **Test for dead at the point of work** — at the contactor terminals, not at
>? the isolator. Three-phase: L1-L2, L2-L3, L1-L3, each phase to neutral, each
>? phase to earth, neutral to earth. Then the control circuit conductors, and the
>? defrost circuit conductors passing through the same enclosure.
>?
>? 9. **Re-prove the instrument** on the known live source, to confirm it was
>? still working throughout the test.
>?
>? 10. **Discharge stored energy.** Discharge capacitors with a proper discharge
>? tool and confirm the VSD DC bus voltage has fallen to a safe level with the
>? meter.
>?
>? 11. **Treat anything unproven as live.** Any conductor in that enclosure you
>? did not test yourself stays live in your mind and in how you work around it.
>?
>? 12. **Do the work.** Then refit covers, complete the mandatory verification
>? tests for the alteration, remove your own locks and tags personally, confirm
>? everyone is clear, restore supplies at each point, and carry out the functional
>? test. Record all results and issue the compliance certificate.

### Practice

Explain why the test instrument must be proved on a known live source both before
and after testing for dead. Give an example of what the second proving catches.

>? **Before:** to confirm the instrument, its leads, its fuses and its battery
>? are all working *at the moment you rely on them*. An instrument that is flat,
>? switched to the wrong function, or has a broken lead will read 0 V on a live
>? conductor. If you have not proved it first, a 0 V reading tells you nothing
>? about the circuit — only that the meter produced a 0.
>?
>? **After:** to confirm the instrument was **still** working for the whole time
>? you were testing. This is the step that catches a failure occurring *during*
>? the test, and it is the one most often left out of written answers.
>?
>? **Worked example of what it catches.** You prove the meter on a known live
>? 230 V outlet — it reads 230 V, so it works. You then go to a three-phase
>? distribution board and start testing for dead. On your first measurement, L1 to
>? L2, the busbars are in fact still live at 400 V, and the meter's lead fuse
>? ruptures because a probe momentarily contacted a phase while the instrument was
>? on a resistance range, or because of a transient. From that instant the meter
>? reads 0 V on everything. You continue through L2-L3, L1-L3, phase to neutral
>? and phase to earth, and every single reading is a comforting 0 V. Without a
>? re-prove, you would conclude the board is dead and put your hands on live
>? 400 V busbars.
>?
>? Re-proving on the known live source shows the meter now reads 0 V where it read
>? 230 V ten minutes ago. The instrument has failed, therefore **every reading you
>? took in between is void**, and the circuit must be treated as live until it has
>? been re-tested with a proved instrument.
>?
>? The same logic covers a broken probe tip, a lead pulled out of its socket, a
>? battery dying, and a selector knob knocked to the wrong range.

### Practice

Your supervisor tells you the plant room board has already been isolated, locked
and tagged by another technician and it is safe to start work. State what you do
and why.

>? **What I do:** I treat the circuit as **live** until I have proved it dead
>? myself, and I fit **my own lock and my own personal danger tag** at every
>? isolation point before I start.
>?
>? **The steps:**
>?
>? 1. Confirm with the other technician which supplies were isolated and at which points, and cross-check against the wiring diagram and switchboard schedule myself. Refrigeration plant routinely has more than one supply, and the other technician may have isolated only the ones relevant to their own task — the defrost supply, the control supply or the evaporator fan feed may still be live.
>? 2. Fit my own padlock and personal danger tag to each isolation point, through a multi-hasp alongside the existing lock. My safety must not depend on somebody else deciding when to remove their lock.
>? 3. Prove my test instrument on a known live source.
>? 4. Test for dead myself, at the point of work, across every conductor combination including to earth.
>? 5. Re-prove my instrument on the known live source.
>? 6. Discharge and confirm any stored energy.
>?
>? **Why:**
>?
>? - **Unproven is live.** A reading I did not take, on an instrument I did not prove, at a point I did not check, is not evidence of anything. It is somebody's word.
>? - **Someone else's lock protects them, not me.** If the other technician finishes, removes their lock and restores the supply while I am still inside the enclosure, nothing stops the circuit becoming live. My own lock is the only thing that does.
>? - **Their isolation may be incomplete for my task.** They may have been working on a different part of the plant with different supplies involved.
>? - This is not distrust of a colleague, it is the standard procedure, and no instruction from a supervisor can override it. If pressed to start without proving it myself, I refuse, and I say why.
`,
          quiz: [
            {
              q: "In the sequence for proving a circuit de-energised, the step most often omitted — and the one that detects a meter failing mid-test — is:",
              options: [
                "Fitting a personal danger tag",
                "Re-proving the test instrument on a known live source after testing for dead",
                "Notifying affected persons",
                "Testing neutral to earth",
              ],
              answer: 1,
              explain: "A meter with a ruptured lead fuse or a broken probe reads 0 V on everything, and the readings look exactly like a successful test for dead. Proving it afterwards confirms the instrument was working throughout, which is what makes the 0 V readings meaningful. The other steps matter but none of them detect an instrument that failed during the test.",
            },
            {
              q: "On refrigeration plant, the reason multiple isolation points must be identified is that:",
              options: [
                "The standard requires at least two isolators on every machine",
                "A single machine commonly has separate supplies for defrost heaters, controls and evaporator fans, often from different boards",
                "Three-phase supplies must each be isolated separately",
                "It makes the lock-out procedure faster",
              ],
              answer: 1,
              explain: "Isolating the condensing unit does not de-energise a defrost circuit fed from the store's distribution board, nor an evaporator fan wired back to an indoor unit, nor a control supply from another phase. Tracing every supply from the wiring diagram before touching a terminal is what prevents the classic multiple-supply electrocution.",
            },
            {
              q: "A personal danger tag fitted without a lock is inadequate because:",
              options: [
                "Tags are not recognised in Australia",
                "A tag is a request that relies on someone reading and obeying it, whereas a lock physically prevents the supply being restored",
                "Tags degrade in cold rooms",
                "A tag must be signed by the site manager",
              ],
              answer: 1,
              explain: "The tag communicates; the lock controls. Anyone can close an isolator despite a tag, deliberately or by accident, but nobody can close one that is physically locked open. Where several people work on the same plant, each fits their own lock through a multi-hasp so no single person can restore supply while another is still exposed.",
            },
            {
              q: "When testing a single-phase circuit for dead, testing only between active and neutral is unsafe because:",
              options: [
                "The meter may not have an earth reference",
                "Reversed polarity or a borrowed neutral can leave both conductors at supply potential to earth while reading 0 V between them",
                "Neutral is always at earth potential so the test is redundant",
                "Active-to-neutral readings are affected by load",
              ],
              answer: 1,
              explain: "If active and neutral are reversed, or if the neutral is borrowed from a live circuit, the two conductors can sit at similar potentials and read close to 0 V between them while both are hundreds of volts above earth. Testing active to earth and neutral to earth as well is what exposes that condition.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "as4836-and-energised-work",
          title: "AS/NZS 4836, energised testing and duty of care",
          minutes: 13,
          simple: "There are rules about what has to be in place before anyone starts electrical work at all: a plan, a competent person, the right gear, and somebody who can rescue you. If the work has to be done with the power on, the law adds a further requirement before you start — a documented risk assessment. Working live is the last resort, never the default.",
          refs: REFS,
          content: `
AS/NZS 4836 is the standard for safe working on or near low-voltage electrical
installations and equipment. It sits alongside your state's electrical safety Act
and Regulation and the WHS Regulations, and it is where the pre-work requirements
come from. Assessors ask about it because it is the difference between a technician
who follows a procedure and one who understands why the procedure exists.

## What AS/NZS 4836 requires before electrical work begins

Learn these as a set of requirements with a purpose attached, not as a list.

1. **The work must be planned, and the risks assessed and documented.** A SWMS or
   JSA identifying the hazards, the controls and the emergency arrangements. This
   is the foundation — every other requirement flows out of it.
2. **The work must be done de-energised wherever it is reasonably practicable.**
   Energised work is the exception, permitted only where there is no reasonable
   alternative, and it must be justified. Testing and fault-finding that
   genuinely cannot be done any other way is the common legitimate case in our
   trade.
3. **The person must be competent and authorised for the work.** Holding the
   correct licence — for a refrigeration mechanic, a restricted electrical
   licence covering only the work it names — trained in the task, and authorised
   by the employer and the site.
4. **The workplace must be controlled.** Barriers, signage, exclusion zones and
   physical separation from members of the public and from other trades. Insulated
   matting or barriers where live parts cannot be avoided.
5. **Correct PPE and insulated tools for the task.** Insulated hand tools, eye
   protection and arc-rated clothing where an arc-flash risk exists, insulating
   gloves and mats where required, and no conductive jewellery, watches or lanyards.
6. **Test instruments must be suitable, in good order and in date.** Correct
   voltage and measurement category rating for the installation, undamaged leads
   with shrouded probes, correct fuses, and a means of proving the instrument.
7. **Rescue and first-aid arrangements must be in place before the work starts.**
   Someone trained in low-voltage rescue and CPR, able to isolate the supply and
   to raise the alarm, with a rescue kit where the standard requires one. Where
   the work is energised, a **safety observer** whose only job is to watch the
   worker and act if something goes wrong.
8. **Emergency procedures and communications** — how the alarm is raised, where
   the isolation point is, and how emergency services will reach the location.
9. **The equipment must be checked** — enclosures, isolators, signage and the
   installation itself examined before work starts.

>! A safety observer is not a helper handing you tools. Their sole function is
>! to watch you, to be able to isolate the supply instantly, and to be capable of
>! performing rescue and resuscitation. If they are doing anything else, you do
>! not have a safety observer.

## The first requirement before testing an energised circuit

The electrical safety regulations in every Australian jurisdiction, and the model
WHS Regulations, prohibit energised electrical work except in defined
circumstances. Where energised work — including energised testing — is to be
carried out, the **first requirement is that a risk assessment be carried out by
a competent person before the work commences**, and where the regulation requires
it, recorded in writing.

That risk assessment must establish, at minimum:

- That there is **no reasonable alternative** to working energised — the work cannot reasonably be done with the circuit isolated.
- The hazards present: shock, arc flash, arc blast, induced voltage, stored energy, working at height, the environment.
- The control measures: safety observer, insulated tools, PPE, barriers, restricted access, the isolation point and who can operate it.
- The rescue and first-aid arrangements.

Everything else — the observer, the PPE, the barriers — is a **control that comes
out of** the risk assessment. That is why the risk assessment is first: you cannot
choose controls for hazards you have not identified.

Testing to determine whether a circuit is de-energised is treated separately in
most jurisdictions and is permitted, but it still has to be done competently, with
suitable instruments, and with the same care.

Work to your own state's Act and Regulation and the current edition of the
standard — the detail of what must be recorded, and who may authorise energised
work, differs between jurisdictions.

## Duty of care beyond the electrical work

Refrigeration work happens in supermarkets, food courts, hospitals and school
kitchens, with the public a metre away. Duty of care under the WHS legislation
extends to everyone your work could affect.

| Activity | The risk to others | What you do |
|---|---|---|
| Power tools in a trading area | Flying swarf, noise, trip hazards from leads | Barricade, signage, spotter, leads routed overhead or covered, RCD-protected supply |
| Ladders and platforms | Falling tools, someone walking underneath, ladder being knocked | Exclusion zone below, ladder footed or tied, tools tethered, never over a doorway |
| Brazing and hot work | Burns, fire, fumes, hot metal falling | Hot-work permit, fire watch, fire blanket and extinguisher, ventilation, cylinders restrained upright and clear of traffic |
| Opening electrical enclosures | Public access to exposed live parts | Never leave an enclosure open and unattended; barricade and attend, or close and lock it |
| Refrigerant handling | Asphyxiation in confined spaces, cold burns, flammability | Ventilation, monitoring, exclusion, correct PPE |

The rule that catches people out is the last one but one: an open switchboard
door in a public area, left "just for a minute" while you go to the van, is an
offence and a genuine risk. Either someone stays with it or it gets closed.

## What to remember

- AS/NZS 4836 requires planning and documented risk assessment, de-energised work wherever practicable, a competent authorised person, a controlled workplace, correct PPE and instruments, and rescue and first-aid arrangements in place before work starts.
- Energised work is a last resort and must be justified.
- The first requirement before energised testing is a risk assessment by a competent person, recorded where the regulation requires.
- A safety observer's only job is to observe, isolate and rescue.
- Duty of care extends to the public: barricade, attend, and never leave live parts accessible.

### Practice — attempt this before opening the model answer

List five things AS/NZS 4836 requires to be in place before electrical work
begins, and give the reason for each. Do not pad the list.

>? 1. **A documented risk assessment and safe work method for the task.** Every
>? other control is chosen from it. Without identifying the hazards — shock, arc
>? flash, stored energy, height, environment, other trades — you cannot know what
>? protection the job actually needs.
>?
>? 2. **The work planned to be carried out de-energised wherever reasonably
>? practicable.** Isolation removes the hazard rather than managing it, and it is
>? the only control that is not defeated by a moment's inattention. Energised work
>? is permitted only where there is no reasonable alternative, and must be
>? justified.
>?
>? 3. **A competent, licensed and authorised person doing the work.** Correct
>? licence for the class of work — for a refrigeration mechanic, a restricted
>? electrical licence covering only what it names — trained in the specific task
>? and authorised by employer and site. Competence is what turns a procedure into
>? safe practice.
>?
>? 4. **Correct PPE, insulated tools and suitable, in-date test instruments.**
>? Insulated hand tools, eye protection, arc-rated clothing where an arc-flash
>? risk exists, no conductive jewellery; instruments with the right voltage and
>? measurement category rating, undamaged shrouded leads and correct fuses. The
>? tools are the last barrier between the fault and the person.
>?
>? 5. **Rescue and first-aid arrangements in place before the work starts** — a
>? person trained in low-voltage rescue and CPR who can isolate the supply and
>? raise the alarm, and a safety observer where the work is energised. Arranging
>? rescue after an incident is too late; the survival window for a shock victim is
>? measured in minutes.
>?
>? *(Others that would also be accepted: a controlled workplace with barriers,
>? signage and exclusion zones; identification of all supplies and isolation
>? points; and pre-inspection of the equipment and installation. Five, answered
>? properly with reasons, is a complete answer — adding three more thin ones does
>? not earn extra marks.)*

### Practice

Under the electrical safety regulations, what is the first requirement before
testing an energised circuit, and what must that requirement establish?

>? **The first requirement is that a risk assessment be carried out by a
>? competent person before the work commences**, and — where the regulation in
>? that jurisdiction requires it — recorded in writing.
>?
>? It must establish, at minimum:
>?
>? - **That there is no reasonable alternative to working energised.** Energised electrical work is prohibited unless the work cannot reasonably be carried out with the circuit isolated. Live fault-finding and live testing are the usual legitimate cases in refrigeration work, but the justification still has to be made.
>? - **The hazards present** — shock, arc flash and arc blast, induced or backfed voltage, stored energy in capacitors and drive buses, and the environment the work is in, such as height, confined space, wet floors or a public area.
>? - **The control measures to be applied** — a safety observer, insulated tools, appropriate PPE, insulating barriers and matting, restricted access and exclusion zones, and identification of the isolation point and who is authorised to operate it.
>? - **The rescue, first-aid and emergency arrangements**, including who is trained in low-voltage rescue and CPR and how the alarm will be raised.
>?
>? **Why it is first:** every other requirement is a *control*, and a control can
>? only be selected once the hazard it addresses has been identified. Fitting PPE
>? and posting an observer without a risk assessment means guessing at which
>? hazards you are protecting against.
>?
>? The detail of what must be recorded, and who may authorise energised work,
>? varies between states and territories, so work to your own jurisdiction's Act
>? and Regulation and the current edition of the standard.

### Practice

You have to open a live switchboard in the corridor of a shopping centre to take
readings during trading hours. Describe the controls you put in place, and
identify who owes a duty of care to the shoppers.

>? **Before anything else: challenge whether it has to be live.** If the readings
>? can be taken outside trading hours, or from a point that can be isolated, that
>? is the correct answer. Only if there is genuinely no reasonable alternative does
>? energised work proceed, and that justification is part of the risk assessment.
>?
>? **Controls, assuming the live testing is justified:**
>?
>? - **A documented risk assessment** for energised work, completed by a competent person before starting, and any permit the centre requires.
>? - **A safety observer** whose only role is to watch me, to be able to isolate the supply immediately, and to be capable of rescue and CPR. They do not hold the torch, fetch tools or talk to shoppers.
>? - **Physical exclusion of the public**: barriers or hoarding across the full working area, not a single witches hat, positioned so the swing of the board door and my working space are both enclosed. Signage on all approaches.
>? - **A second person managing the public boundary** if the corridor is busy, because a shopper stepping over a barrier is entirely foreseeable.
>? - **PPE and tools for energised work**: insulated tools, eye protection, arc-rated clothing appropriate to the assessed arc-flash risk, no conductive jewellery, watch or lanyard.
>? - **A test instrument** with the correct voltage and measurement category rating, shrouded probes with minimal exposed tip, undamaged leads, correct fuses, proved before and after use.
>? - **Insulating barriers or matting** to cover adjacent live parts I am not working on, so an inadvertent movement cannot bridge them.
>? - **Never leave the board open and unattended.** If I must leave for any reason, the door is closed and secured first, every time, however brief.
>? - **Emergency arrangements**: known isolation point, means of raising the alarm, and clear access for emergency services.
>?
>? **Who owes the duty of care:** more than one party, and they overlap rather
>? than transfer.
>?
>? - **Me personally**, as a worker, for my own safety and for anyone my work could affect.
>? - **My employer**, as the person conducting a business or undertaking, for the safety of workers and of other persons put at risk by the work.
>? - **The centre management**, as the PCBU with management or control of the workplace, for the safety of shoppers in the corridor.
>?
>? Duty of care cannot be delegated away by pointing at another party. If the
>? centre refuses to allow adequate barriers, the correct response is that the
>? work does not proceed.
`,
          quiz: [
            {
              q: "Under the electrical safety regulations, the first requirement before testing an energised circuit is:",
              options: [
                "Fitting arc-rated clothing",
                "A risk assessment carried out by a competent person before the work commences",
                "Notifying the electricity distributor",
                "Posting a safety observer",
              ],
              answer: 1,
              explain: "The risk assessment comes first because every other measure is a control chosen in response to it. PPE and a safety observer are controls that flow out of the assessment, and selecting them before identifying the hazards means guessing. The assessment must also establish that there is no reasonable alternative to working energised.",
            },
            {
              q: "The role of a safety observer during energised work is to:",
              options: [
                "Hand tools to the worker and hold the torch",
                "Record the test results as they are called out",
                "Watch the worker, be able to isolate the supply instantly, and perform rescue and resuscitation if required",
                "Supervise the apprentice on another part of the job",
              ],
              answer: 2,
              explain: "The observer has one function and it is exclusive. Anyone handing over tools, writing results or supervising something else is not observing, and if the worker is thrown clear or locked onto a conductor there is nobody with their attention on the situation. That is precisely the moment the observer exists for.",
            },
            {
              q: "AS/NZS 4836's central principle about energised work is that:",
              options: [
                "It is permitted whenever the worker holds an unrestricted licence",
                "It is permitted if an RCD protects the circuit",
                "It must be done de-energised wherever reasonably practicable; energised work is an exception requiring justification",
                "It is permitted during normal business hours only",
              ],
              answer: 2,
              explain: "Isolation eliminates the hazard rather than managing it, so it is always the preferred control. A licence establishes competence, not permission to work live, and an RCD only limits the duration of a shock and offers no protection at all against active-to-neutral contact or arc flash.",
            },
            {
              q: "Leaving an open switchboard unattended in a public corridor while you fetch a tool from the van is:",
              options: [
                "Acceptable if the visit is under five minutes",
                "Acceptable if a sign is displayed",
                "Not acceptable — exposed live parts must be attended or the enclosure closed and secured",
                "Acceptable if the circuit is RCD protected",
              ],
              answer: 2,
              explain: "Exposed live parts in a public area must never be left accessible. Members of the public, including children, are entirely foreseeable, and neither a sign nor an RCD prevents contact with a live busbar. Either someone stays with the board or it is closed and secured, no matter how brief the absence.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "verification-as-fault-finding",
          title: "Reading test results, and answering the question that was asked",
          minutes: 13,
          simple: "The same tests that prove a repair is safe are the ones that find the fault in the first place. Learn to read a set of readings and say what they mean. Then learn the exam habits that stop a correct answer losing marks — answering the number of items asked for, spotting a two-answer question, and showing your method.",
          refs: REFS,
          content: `
The verification tests are not just a compliance ritual at the end of a repair.
They are the same measurements you use to find the fault at the beginning, and
being able to read a set of results out loud is a genuine trade skill.

## Testing a control circuit rung by rung

Refrigeration control circuits are drawn as ladder diagrams. Each rung runs from
the active rail, through a series of switching devices, to a coil or a load, and
back to the neutral rail. Every device in that series string must be closed for
the load to operate.

!FIG[ladder-rung]

That structure gives you two complementary methods.

**Dead: continuity.** Isolate, lock, tag and prove dead. Then measure across each
device in turn. A closed switch reads close to 0 ohms; the open one reads
open-circuit. Working dead is always the preferred method, and it is the one to
name first in an answer.

**Live: voltage across the device.** Where the circuit genuinely must be
energised — and only with the risk assessment and controls in place — measure
across each device in the string. A closed device drops almost nothing. The open
device has the whole supply voltage across it, because it is the only thing
holding the circuit apart.

| Reading across a device in an energised control rung | Meaning |
|---|---|
| Close to 0 V | The device is closed and passing current |
| Full supply voltage | This device is open — it is the one stopping the circuit |
| Full supply voltage across two devices | Two devices are open, or one is open and you are measuring across a break elsewhere |
| Something in between, say 60 V on a 230 V rung | A high-resistance connection: pitted contacts, a corroded terminal, a partly-made joint |

That last row is the interesting one. A partly-open contact is the fault that
makes a contactor chatter, a coil hum and a compressor start and stall.

## Reading a set of verification results

| Result | Most likely cause |
|---|---|
| Earth continuity 3.2 ohms to one panel only, 0.15 ohms to the rest | That panel's bonding strap is missing, loose or clamped over paint |
| Insulation resistance 0.02 megohm on a sheathed defrost element, wiring 200 megohm | Damp magnesium oxide packing — compliant under the Section 8 exemption, expect it to recover once energised |
| Insulation resistance 0.02 megohm on the wiring with the elements disconnected | Water in a junction box or a damaged cable — a genuine failure |
| Polarity fails at the load but passes at the isolator | The reversal is inside the machine, downstream of the isolator |
| RCD trips only when the defrost contactor pulls in | Leakage in the defrost circuit, not a faulty RCD |
| Loop impedance high but earth continuity good | The problem is upstream — the supply neutral, the MEN connection or the active conductor, not your work |
| Compressor winding to earth reads over range on two phases, 0.3 megohm on one | A single phase's insulation is breaking down; suspect the terminal box first, then the winding |

>! Never restore supply to a circuit that has failed a mandatory test in order to
>! "see what it does". The failed test is the answer. Energising it converts a
>! discovered fault into an active hazard, and if it causes damage or injury there
>! is no defence for it.

## Exam technique that actually earns marks

**A "list four" question wants four items, each distinct.** Writing six thin ones
does not increase your score, and if two of them are wrong the marker may take
your first four. Give exactly the number asked for, each one a different point,
each stated clearly. "Earth continuity test" and "test the earth" are one item,
not two.

**A "list five work practices" question wants practices, not topics.** Write
each as something a person does: "isolate and prove dead before working on any
circuit", not "isolation".

**Read the stem for how many answers a multiple-choice question wants.** Some ask
for two. If you mark only one on a two-answer question you usually score nothing,
and if you mark three on a one-answer question the same applies. Count the boxes
and count the answers.

**"Show all workings" is marked on the method, not just the number.** Write the
formula, substitute the values with their units, then give the answer with its
unit. A correct method with an arithmetic slip usually keeps most of the marks; a
bare number that happens to be right often does not get full marks, and a bare
number that is wrong gets none.

**Watch the command word.** *State* wants the fact. *List* wants items, not
sentences. *Describe* wants the steps or features. *Explain* wants the reason —
a "why" question answered with a "what" scores poorly.

**Where an acceptance value is asked for, name the standard.** "1 megohm minimum
at 500 V d.c. under AS/NZS 3000 Section 8" is a complete answer. "1 megohm" is
half of one.

## What to remember

- Continuity across each device dead, or voltage across each device live: full voltage sits across the open one.
- A partial voltage across a closed device means a high-resistance connection.
- Never energise a circuit that has failed a mandatory test.
- Answer the number of items asked for, and check whether the question wants two answers.
- Show formula, substitution and answer with units. Name the standard behind any acceptance value.

### Practice — work it out before opening the model

A coolroom compressor will not start. The control rung runs from the active rail
through the isolation switch, the room thermostat, the low pressure switch, the
high pressure switch and the oil pressure switch to the contactor coil, then back
to the neutral rail. With the circuit energised and the correct controls in place,
you measure across each device in turn and get: isolation switch 0 V, thermostat
0 V, LP switch 228 V, HP switch 0 V, oil pressure switch 0 V. Supply is 230 V.

State which device is open, explain how you know, and set out what you do next.

>? **The low pressure switch is open.**
>?
>? **How you know:** in a series control rung, the full supply voltage appears
>? across whichever device is holding the circuit apart, because that device is the
>? only significant impedance between the two rails. Every closed device passes
>? current with almost no volt drop, so it reads close to 0 V. Here the isolation
>? switch, thermostat, HP switch and oil pressure switch all read 0 V, so all four
>? are closed. The LP switch reads 228 V — effectively the whole supply — so it is
>? the open one.
>?
>? Note also that the readings are consistent: only one device holds the full
>? voltage, and the small shortfall from 230 V to 228 V is ordinary volt drop
>? through the closed contacts and conductors.
>?
>? **What you do next — and this is the important part:** an LP switch that is open
>? is usually doing exactly what it was designed to do. It is a *symptom*, not the
>? fault. Do not link it out.
>?
>? 1. Isolate, lock, tag and prove dead before doing anything else.
>? 2. Fit gauges and read the actual suction pressure. Compare it with the LP switch's cut-out setting.
>? 3. If the suction pressure really is below the cut-out, the fault is in the refrigeration system: loss of charge through a leak, a blocked filter-drier or expansion valve, an iced or blocked evaporator, a failed evaporator fan, a closed liquid line valve, or the room already being down to temperature and pumping down normally.
>? 4. If the suction pressure is well above the cut-out and the switch is still open, the switch itself has failed — a lost bellows charge, a blocked capillary, corroded contacts or a wrong setting. Confirm by checking continuity across it dead, then replace it.
>? 5. Whichever it is, find and fix the underlying cause, then run the mandatory verification tests for whatever you disturbed, restore, and functional test.

### Practice

A knowledge question reads: "List four mandatory tests required under AS/NZS 3000
after replacing an electrical component, and state what each proves." Write an
answer that would score full marks, and then explain what would cost marks.

>? **A full-marks answer — exactly four, each distinct, each with what it proves:**
>?
>? 1. **Continuity of the earthing system.** Proves every exposed conductive part is connected back to the main earthing terminal by a path of low enough resistance to carry fault current and operate the protective device.
>? 2. **Insulation resistance.** Proves the live conductors remain separated from earth and from one another, tested at 500 V d.c. with a minimum of 1 megohm under AS/NZS 3000 Section 8.
>? 3. **Polarity.** Proves the active conductor is connected to the active terminal and that every single-pole switch, fuse or protective device interrupts the active and not the neutral.
>? 4. **Correct circuit connections.** Proves each circuit runs from its intended protective device to its intended load with its own neutral, and on three-phase that phase rotation is unchanged.
>?
>? **What would cost marks:**
>?
>? - **Listing more than four.** The question asked for four. Extra items earn nothing, and if the marker takes the first four and two of them are weak, the good ones further down are wasted.
>? - **Listing the same test twice in different words.** "Earth continuity" and "test the earthing conductor" are one item.
>? - **Naming the test without saying what it proves.** The question has two parts. A bare list of four names scores half.
>? - **Omitting the acceptance value where it is the natural part of the answer.** "500 V d.c., 1 megohm minimum, AS/NZS 3000 Section 8" turns a general statement into a specific one.
>? - **Including the functional test as one of the four.** It is done, and it is required, but it is not one of the mandatory verification tests — it proves the machine works, not that it is safe.
>? - **Writing paragraphs.** "List" means list. Time spent writing prose is time not spent on the next question.

### Practice

A multiple-choice question reads: "Which TWO of the following are tested with the
installation energised? (a) insulation resistance (b) earth fault loop impedance
(c) polarity (d) RCD operation (e) earth continuity." Give the answer and explain
how to approach a two-answer question.

>? **The answer is (b) earth fault loop impedance and (d) RCD operation.**
>?
>? **Why those two:** loop impedance is measured by drawing a controlled current
>? from the live supply through the active and back through the earth and
>? calculating the loop resistance from the resulting volt drop — there is nothing
>? to draw from on an isolated circuit. An RCD test injects a known residual
>? current and times the disconnection, which requires the device to be energised
>? and closed.
>?
>? **Why the others are not:** insulation resistance uses the tester's own 500 V
>? d.c. and must be done dead, both to get a valid reading and so that a breakdown
>? is found before supply voltage reaches it. Polarity and earth continuity are
>? both dead tests, done before the supply is restored.
>?
>? **How to approach a two-answer question:**
>?
>? 1. **Read the stem twice and note the word TWO.** It is usually capitalised or bolded precisely because candidates miss it. Marking one answer on a two-answer question generally scores nothing.
>? 2. **Find the discriminator before looking at the options.** Here it is "energised versus de-energised". Deciding what the question is really sorting on stops the options from leading you.
>? 3. **Classify every option against that discriminator**, including the ones you are not going to pick. Five options, five decisions — dead, live, dead, live, dead.
>? 4. **Check you have marked exactly two**, and no more. Marking a third because it "could be" turns a correct answer into a wrong one.
>? 5. **Sanity check with the sequence.** The mandatory tests run dead first, live last. Loop impedance and RCD operation are the last two in the sequence, which is consistent with them being the live ones.
`,
          quiz: [
            {
              q: "You measure 230 V across the low pressure switch in an energised control rung, and 0 V across every other device in the string. This tells you:",
              options: [
                "The LP switch has failed and must be replaced",
                "The LP switch is the open device — but it may be doing its job, so the suction pressure must be checked before condemning it",
                "The contactor coil is open circuit",
                "The control transformer has failed",
              ],
              answer: 1,
              explain: "Full supply voltage appears across the only device holding a series circuit apart, so the LP switch is definitely the open one. But an LP switch opens because suction pressure is below its cut-out, which is usually a refrigeration fault — lost charge, a restriction, an iced evaporator. Replacing the switch or linking it out without fitting gauges treats the symptom and can destroy the compressor.",
            },
            {
              q: "Measuring 60 V across a device that should be closed, on a 230 V control rung, indicates:",
              options: [
                "Normal operation",
                "The device is fully open",
                "A high-resistance connection — pitted contacts or a corroded or partly-made terminal",
                "The neutral is disconnected",
              ],
              answer: 2,
              explain: "A properly closed contact drops almost nothing. A partial voltage means the device is passing current through a resistance, which is what pitted contacts, corroded terminals and half-tightened screws produce. It is the classic cause of chattering contactors, humming coils and compressors that start and stall.",
            },
            {
              q: "A knowledge question asks you to list four mandatory tests. The best strategy is:",
              options: [
                "List seven, so the marker can choose the best four",
                "List exactly four distinct tests, each with what it proves",
                "Write a paragraph covering the whole verification process",
                "List four and add the functional test as a fifth for completeness",
              ],
              answer: 1,
              explain: "Markers commonly take the first four responses, so padding risks burying good answers behind weak ones and wastes time needed elsewhere. Four distinct items, each answering both halves of the question, is a complete response. The functional test is required but is not one of the mandatory verification tests — it proves the machine works, not that it is safe.",
            },
            {
              q: "On a calculation question marked 'show all workings', a bare correct answer with no method typically:",
              options: [
                "Scores full marks, since the answer is right",
                "Loses marks, because the method carries most of the marks and cannot be awarded if it is not shown",
                "Is not accepted at all and scores zero",
                "Is only penalised if the units are missing",
              ],
              answer: 1,
              explain: "Method marks are awarded for stating the formula, substituting the values with units and reaching the answer. A shown method with an arithmetic slip usually keeps most of the marks, while a bare number cannot be credited for reasoning that is not on the page. Missing units are a further deduction on top.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
