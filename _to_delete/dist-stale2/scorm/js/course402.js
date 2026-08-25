/* =========================================================================
   Course content, module 402 — C.2 Restricted electrical licence, duty of
   care and the law.
   Source: capstone revision notes written for this course from the published
   knowledge-evidence requirements of the Certificate III in Refrigeration and
   Air Conditioning, together with the model Work Health and Safety Act and
   Regulations, state and territory electrical safety legislation, AS/NZS 3000,
   AS/NZS 3760, AS/NZS 4836, and the Ozone Protection and Synthetic Greenhouse
   Gas Management legislation under which ARCtick licensing is administered.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts and each jurisdiction's own
   regulator remain the authority. Every practice question here is original
   teaching material. Nothing in this module reproduces, paraphrases or
   renumbers the questions of any real assessment paper.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const BASE = "Capstone revision notes for this course — ";

  const REFS = [
    BASE + "licensing, legislation and duty of care for refrigeration mechanics in Australia",
  ];

  /* Each lesson cites the revision notes plus the topics it draws on. */
  const R = function () {
    const extra = Array.prototype.slice.call(arguments).map(function (t) { return BASE + t; });
    return REFS.concat(extra);
  };

  const MODULES = [

  /* ======================================================================
     Module C.2 — Restricted electrical licence, duty of care and the law
     ====================================================================== */
  {
    id: "cap-licence-and-law",
    stream: "capstone",
    title: "C.2 · Restricted electrical licence, duty of care and the law",
    blurb: "What a restricted electrical licence lets a refrigeration mechanic do and where it stops, the Acts and standards behind it, how ARCtick sits alongside it, and the duty of care and paperwork that go with the job.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "restricted-licence-scope",
        title: "What a restricted electrical licence actually permits",
        minutes: 13,
        simple: "A restricted electrical licence is a narrow permission, not a small electrician's licence. It lets you do the electrical work that is part of servicing the equipment of your own trade, and nothing beyond it. Think of it like a forklift ticket: it says you may drive that machine for that job, not that you may drive anything with wheels.",
        refs: R("scope and conditions of a restricted electrical licence for refrigeration mechanics"),
        content: `
Ask a room of apprentices what their restricted electrical licence lets them do
and you will get answers ranging from "anything on the unit" to "nothing much".
Both are wrong, and the assessment asks about this precisely because the wrong
answer gets people prosecuted, sacked or killed.

A restricted electrical licence is a **conditional authorisation to perform a
defined class of electrical work that is incidental to your own trade**. It is
issued to someone who already holds a relevant trade qualification, and its
whole design is: you may do the electrical work needed to service the equipment
of your trade, on that equipment, and nothing else.

The names vary. Depending on where you work you may hold a restricted
electrical licence, a restricted electrical worker's licence, an electrician
(restricted) licence, or a restricted electrical worker registration. What is on
the card matters less than what is written on the back of it and in your
regulator's scope statement — because that is what you will be measured against.

>! Licensing detail differs between states and territories. The principle in
>! this lesson holds everywhere; the exact class names, scope wording and
>! renewal conditions do not. Read your own jurisdiction's regulator scope
>! statement and carry the conditions of your own licence in your head.

## Five work practices a restricted licence holder may carry out

This is a classic list-five question, and the way to keep the list is to
understand the single idea underneath it: **the licence follows the equipment
of your trade, from the point of supply into the appliance.**

1. **Disconnect equipment of your trade from the electrical supply** so that
   mechanical or refrigeration work can be done on it safely.
2. **Reconnect that equipment to the supply** on completion, having verified it
   is safe to energise.
3. **Replace like-for-like electrical components within the equipment** —
   contactors, relays, overloads, capacitors, thermostats, pressure switches,
   fan motors and the equivalent — where the replacement matches the original in
   rating and function.
4. **Fault-find and test the electrical circuits of that equipment**, using
   appropriate instruments and safe working practices, including testing
   energised circuits where that is the only way to find the fault and the
   required precautions are in place.
5. **Carry out the mandatory verification tests after that work** — earthing
   continuity, insulation resistance, polarity and correct circuit connections —
   and record the results before the equipment is returned to service.

Some jurisdictions also expressly allow **replacing a damaged flexible supply
cord or plug on the appliance**, and **connecting equipment to an existing
outlet or an existing dedicated final subcircuit**. Check your own scope.

### Why each item is on that list

If you understand these reasons you can rebuild the list under pressure:

- Items 1 and 2 exist because refrigeration work is impossible without removing
  the equipment from supply, and it would be absurd to require an electrician on
  site to open an isolator so a mechanic can change a fan bearing.
- Item 3 exists because the electrical components inside a packaged unit are
  part of the appliance you were trained on. Replacing a contactor is
  maintenance of the equipment, not alteration of the installation.
- Item 4 exists because you cannot diagnose a refrigeration fault without
  reading the control circuit. A great many refrigeration faults are electrical.
- Item 5 exists because the licence is a safety instrument. The permission to
  disconnect and reconnect is inseparable from the obligation to prove the
  reconnection is safe. Skip the tests and you have not just done sloppy work —
  you have worked outside the terms of your licence.

## What it does not permit

Just as important, and just as likely to be asked:

| Not permitted under a restricted licence | Why |
|---|---|
| Installing new fixed wiring, or a new final subcircuit | That is electrical installation work: an electrician's licence, and usually a contractor's licence for the business |
| Altering or extending existing fixed wiring | Same reason — the installation belongs to the electrical trade |
| Switchboard work: adding, changing or reconfiguring protective devices | Installation work with direct life-safety consequences |
| Upsizing the supply or changing the circuit protection to suit a bigger unit | Changes the installation, not the appliance |
| Working on equipment outside your own trade | The licence is trade-specific; a fridge mechanic is not authorised on a lighting circuit |
| High-voltage work of any kind | Requires separate authorisation entirely |
| Certifying an electrical installation | Certification belongs to the licensed electrical contractor |

The tempting error, in the paper and on site, is to reason from capability: "I
know how to run that circuit, and I would do a neat job of it." Capability is
not authorisation. Doing that work is an offence under electrical safety
legislation, it exposes your employer, and it will void the insurance on
anything that goes wrong afterwards.

The second tempting error is scale: "it is only a short bit of cable" or "it is
only an extra outlet". The size of the job does not change its class. Extending
fixed wiring by 300 mm is still installation work.

## The conditions that ride along with the licence

A restricted licence is not just a scope, it is a set of conditions. Typically:

- You must work **within the class of work stated on the licence** and hold the
  underpinning trade competency.
- You must **use appropriate test instruments** and keep them serviceable and,
  where required, calibrated.
- You must **carry out and record the mandatory tests** on completion.
- You must **not work on energised equipment** unless it is genuinely necessary
  and the required risk controls are in place — which in most jurisdictions
  means a documented risk assessment first, and often a second person present.
- The licence has an **expiry** and requires renewal, sometimes with evidence of
  recent relevant work or refresher training.

### Practice — write your answer before opening

List five work practices a refrigeration mechanic holding a restricted
electrical licence is permitted to carry out, and give a one-line reason for
each.

>? **Five practices, with the reason each belongs.**
>? 1. **Disconnect equipment of the trade from supply** — refrigeration work
>?    cannot be done safely on live equipment, so the licence must allow the
>?    isolation and disconnection that makes the mechanical work possible.
>? 2. **Reconnect that equipment on completion** — the counterpart of
>?    disconnection; the person who took it off must be able to put it back.
>? 3. **Replace like-for-like electrical components in the equipment**
>?    (contactor, overload, capacitor, pressure switch, fan motor) — these are
>?    part of the appliance, so replacing them is maintenance of equipment
>?    rather than alteration of the installation.
>? 4. **Fault-find and test the equipment's electrical circuits** with
>?    appropriate instruments — most refrigeration faults present electrically,
>?    and diagnosis is impossible without reading the control circuit.
>? 5. **Complete the mandatory verification tests and record them before
>?    re-energising** — earthing continuity, insulation resistance, polarity and
>?    correct circuit connections; the permission to reconnect carries the duty
>?    to prove the reconnection is safe.

### Practice — write your answer before opening

A supermarket asks you to add a new 20 A subcircuit from the switchboard so a
second condensing unit can be installed, and to fit a new circuit breaker for
it. You are competent to do the work and the store manager is pressing you.
State your response and justify it.

>? **Decline, and explain why in terms of authorisation, not ability.**
>? - Running a new subcircuit and fitting a new protective device is
>?   **electrical installation work**. It alters the installation rather than
>?   maintaining an appliance, so it is outside the scope of a restricted
>?   electrical licence regardless of how competent I am.
>? - Doing it would be an offence under the electrical safety legislation in
>?   force in this state, would expose my employer, and would likely void
>?   insurance cover on anything arising from it. It also cannot be certified —
>?   the compliance certificate for installation work must come from a licensed
>?   electrical contractor.
>? - **What I can do:** arrange for a licensed electrical contractor to install
>?   and certify the subcircuit, then connect the condensing unit to the
>?   completed circuit, commission it and carry out and record the verification
>?   tests on the equipment. The job still gets done; the right person does the
>?   installation part.
>? - Confirm the exact scope wording with the regulator in your own state or
>?   territory, because the boundary is drawn slightly differently in each.

### Practice — write your answer before opening

Explain why the mandatory verification tests are treated as part of the licence
scope rather than as good practice, and what it means if a technician
reconnects equipment without doing them.

>? **The licence is a safety instrument, not just a permission slip.**
>? - The reason a restricted licence exists at all is that disconnecting and
>?   reconnecting equipment creates exactly the hazards the wiring rules are
>?   written to control: a lost earth, damaged insulation, reversed polarity,
>?   a wrong connection. The tests are what closes that risk.
>? - So the authority to reconnect is granted **conditionally on proving the
>?   reconnection is safe**. Testing is not an optional extra bolted onto the
>?   job; it is the second half of the job.
>? - A technician who reconnects without testing has energised equipment whose
>?   safety has not been established, and has worked outside the terms of the
>?   licence. That is a breach of the licence conditions and of the electrical
>?   safety regulations, quite apart from the risk to whoever touches the
>?   machine next.

## On the job

- The licence follows the equipment of your trade, from supply into the
  appliance. Everything in scope sits inside that sentence.
- Disconnect, reconnect, replace like-for-like, fault-find and test, verify and
  record — that is the shape of the answer.
- Installation work, switchboard work, altering fixed wiring and certification
  are outside it, whatever your skill level.
- Capability is not authorisation, and a small job is not a different class of
  job.
- Check your own regulator's scope statement; the wording differs by state and
  territory.
`,
        quiz: [
          {
            q: "Which statement best describes the scope of a restricted electrical licence?",
            options: [
              "A general electrical licence with a lower current limit",
              "A conditional authorisation to carry out defined electrical work that is incidental to the holder's own trade, on the equipment of that trade",
              "A permit to work on any equipment provided a licensed electrician is on site",
              "An interim licence held while completing an electrical apprenticeship",
            ],
            answer: 1,
            explain: "The licence is defined by trade and by task, not by current rating, supervision or stage of training. Everything in scope follows from the idea that it covers the electrical work needed to service the equipment of your own trade.",
          },
          {
            q: "A restricted licence holder replaces a failed 25 A contactor with an identical 25 A contactor in a packaged unit. Is this within scope?",
            options: [
              "No, because any work inside a control panel is installation work",
              "Yes, because replacing a like-for-like component within the equipment is maintenance of the appliance, provided the verification tests are completed before re-energising",
              "Yes, and no testing is required because nothing about the circuit changed",
              "Only if the unit is supplied through a plug and socket",
            ],
            answer: 1,
            explain: "Like-for-like component replacement inside the equipment sits squarely in scope. The catch is the second half: reconnection carries the duty to verify. Skipping the tests takes the work outside the licence conditions even though the replacement itself was permitted.",
          },
          {
            q: "Which of the following is outside the scope of a restricted electrical licence?",
            options: [
              "Fault-finding on the control circuit of a packaged air conditioner",
              "Replacing a damaged flexible supply lead on a condensate pump, where the jurisdiction permits it",
              "Extending the existing fixed wiring by half a metre to reach a relocated isolator",
              "Recording insulation resistance and polarity results after reconnecting a unit",
            ],
            answer: 2,
            explain: "Altering or extending fixed wiring is electrical installation work no matter how short the extension is. The size of the job never changes its class. The other three are all core restricted-licence activities.",
          },
          {
            q: "A store manager argues that because you are clearly capable of installing a new subcircuit, you should just do it. What is the flaw in that argument?",
            options: [
              "Capability and authorisation are different things; the licence defines what you may lawfully do, not what you are able to do",
              "There is no flaw, provided the work is tested afterwards",
              "The work would be acceptable if an electrician inspected it later",
              "It would be acceptable if the manager accepted responsibility in writing",
            ],
            answer: 0,
            explain: "Licensing is about legal authorisation. Skill does not extend it, later inspection does not retrospectively authorise it, and no client can consent on your behalf to an offence under electrical safety legislation.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "disconnect-reconnect",
        title: "Disconnect and reconnect: the scope in practice",
        minutes: 12,
        simple: "Almost everything a restricted licence lets you do is a version of two jobs: take the machine off the supply safely, and put it back on safely. Everything else is detail. If you can describe those two jobs properly, step by step, you can answer most licence-scope questions in the paper.",
        refs: R("disconnect and reconnect work, isolation and proving de-energised"),
        content: `
The heart of a restricted electrical licence is **disconnect and reconnect**.
Learn those two procedures as procedures — a sequence you could recite while
half asleep — and a large part of the assessment answers itself, because
disconnection, isolation, proving dead, reconnection and verification all live
inside them.

## What "disconnect" actually means

Disconnecting is not switching off. Switching off leaves the equipment connected
to supply with a switch between it and the supply, and switches fail, get bumped
and get turned back on by someone who does not know you are inside the panel.

Disconnecting means removing the electrical connection between the supply and
the equipment so that the equipment cannot be made live by an act of switching.

The sequence, in order:

1. **Identify** the correct isolation point for the equipment — the isolator,
   circuit breaker or plug that controls it, and not the one next to it. On a
   supermarket rack or a rooftop full of identical units, this step is where
   people go wrong. Trace it, do not assume the label.
2. **Notify** whoever needs to know. Shutting a coolroom down without telling
   the store is how stock gets lost and how a plant is restarted by someone
   trying to help.
3. **Isolate** — open the isolator or the protective device.
4. **Lock and tag** — apply your own personal lock and a danger tag with your
   name, contact and date. Your lock, your key, in your pocket. If several
   people are working on the equipment, each applies their own lock through a
   hasp.
5. **Prove the circuit is de-energised** at the point of work, using an
   appropriate voltage tester, and using the prove-test-prove sequence: prove
   the tester works on a known live source, test the circuit at every conductor
   and combination that could be live, then prove the tester still works
   afterwards. A tester that failed silently between the first and second step
   is the reason the third step exists.
6. **Discharge and control stored energy** — capacitors, particularly run and
   start capacitors and drive DC links, hold a charge after isolation. Discharge
   them by the manufacturer's method and confirm. Also consider mechanical
   stored energy: fan inertia, and refrigerant pressure.
7. **Disconnect** the conductors, recording or photographing the connections
   before you undo them, and make the free ends safe.

>! Test for de-energisation at the point of work every time, on every conductor,
>! with a tester you have just proved. A control circuit can be fed from a
>! second supply, from an interlock, from a UPS or from a neighbouring unit
>! sharing a circuit. Isolating one isolator does not always mean everything in
>! the enclosure is dead.

## What "reconnect" actually means

Reconnection is the mirror image, plus proof.

1. **Reconnect** the conductors to the correct terminals, to the manufacturer's
   diagram, with the correct terminations and torque.
2. **Inspect visually** — connections tight, correct conductors, no damaged
   insulation, no swarf or offcuts left inside the enclosure, glands and covers
   correct, correct IP rating restored.
3. **Test**, with the supply still isolated:
   - **Continuity of the protective earthing conductor** — a low-resistance path
     from every exposed conductive part back to the earthing point.
   - **Insulation resistance**, at 500 V DC, meeting the minimum acceptable
     value in AS/NZS 3000.
   - **Polarity** — active, neutral and earth on their correct terminals.
   - **Correct circuit connections** — the circuit is wired as intended.
4. **Remove your lock and tag** — you, personally, and only after checking
   nobody else is still working on the equipment.
5. **Restore supply** and confirm the equipment operates correctly, including
   the operation of protective devices such as an RCD where fitted.
6. **Record** the results and complete the required documentation.

## Why the frame-to-earth path must be low

This one is worth understanding rather than memorising, because it is asked in
several forms. The exposed metal of a machine is bonded to earth so that if an
active conductor ever touches the frame, a very large fault current flows
straight back to the supply neutral-earth connection. Large current is what makes
a fuse blow or a circuit breaker trip, quickly.

If the earth path has significant resistance, the fault current is limited. A
limited fault current may not operate the protection at all, or may take
seconds instead of milliseconds — and in the meantime the frame sits at a
dangerous voltage, waiting for someone to lean on it. A low-resistance earth is
what converts a dangerous fault into a blown protective device.

That is why frame-to-earth-pin resistance on a cord-connected appliance is
tested and held to a low maximum: the whole protective scheme depends on it.

## Common ways this goes wrong

| Mistake | Consequence |
|---|---|
| Isolating the wrong unit on a rooftop of identical packages | Working live without knowing it |
| Relying on a labelled isolator without tracing it | Same |
| No personal lock, just a tag | Anyone can re-energise; a tag is information, a lock is control |
| Testing dead with an untested tester | A failed tester reads dead on a live circuit |
| Forgetting the second supply to a control circuit | Live terminals inside a supposedly isolated panel |
| Not discharging capacitors | Shock from a machine that is genuinely isolated |
| Reconnecting from memory | Reversed polarity, swapped run and start, incorrect rotation |
| Skipping the tests because "it went back exactly as it came out" | The one time it did not is the one that hurts someone |

### Practice — write your answer before opening

Describe, in order, the steps you would take to prove that a rooftop packaged
unit is de-energised before you open its terminal box.

>? **Isolate, lock, prove, discharge.**
>? 1. Identify the correct isolator for that unit by tracing it, not by trusting
>?    the label, and confirm the unit is the one on the work order.
>? 2. Notify the site so nobody restarts the plant or loses product.
>? 3. Open the isolator or protective device.
>? 4. Fit my own personal lock and a danger tag showing my name, contact and
>?    the date; keep the key on me.
>? 5. Using an appropriate voltage tester, **prove the tester** on a known live
>?    source, **test** every conductor and every combination that could be live
>?    at the point of work — active to neutral, active to earth, neutral to
>?    earth, and each phase where three-phase — then **prove the tester** again
>?    on the known live source.
>? 6. Check for any second supply into the enclosure: a separately fed control
>?    circuit, an interlock from another unit, a UPS or an anti-condensate
>?    heater circuit.
>? 7. Discharge capacitors by the manufacturer's method and confirm they are
>?    discharged.
>?
>? Only then open up and start work.

### Practice — write your answer before opening

Explain why the resistance between the frame of an appliance and the earth pin
of its plug must be low, and what happens if it is not.

>? **The earth path exists to make fault current big enough to operate the
>? protective device quickly.**
>? - If an active conductor contacts the frame, the fault current returns
>?   through the protective earthing conductor to the neutral-earth connection
>?   at the supply. The lower the resistance of that path, the larger the fault
>?   current.
>? - Fuses and circuit breakers are current-operated. A large fault current
>?   operates them in a fraction of a second, disconnecting supply before anyone
>?   can be hurt.
>? - **If the resistance is high**, the fault current is limited. The protection
>?   may operate slowly or not at all, and the frame remains at a dangerous
>?   touch voltage for as long as the fault persists. Anyone contacting the
>?   frame and any earthed surface is then in the current path.
>? - This is why the maximum earth resistance for a flexible-cord appliance is
>?   held to a low value under AS/NZS 3760 and why continuity is tested after
>?   every disconnection. Confirm the current acceptance value in the edition in
>?   force.

### Practice — write your answer before opening

You have reconnected a three-phase condensing unit after replacing its
contactor. Before you remove your lock, what must you have done, and in what
order? Explain why the order matters.

>? **Visual inspection, then dead tests, then restore, then function.**
>? 1. **Visual inspection** — conductors on the correct terminals to the
>?    manufacturer's diagram, terminations tight, insulation undamaged, no
>?    swarf or offcuts in the enclosure, covers and glands refitted.
>? 2. **Earthing continuity** from exposed conductive parts back to the earthing
>?    point.
>? 3. **Insulation resistance** at 500 V DC against the minimum in AS/NZS 3000.
>? 4. **Polarity and correct circuit connections.**
>? 5. Only then **remove my lock and tag** — after confirming nobody else is
>?    still working on the unit — and restore supply.
>? 6. **Functional checks** with the unit running: correct rotation, correct
>?    operation of controls and safeties, and RCD operation where fitted.
>? 7. **Record** all results.
>?
>? **Why the order matters:** the dead tests must be done while the equipment
>? cannot be energised, both because a 500 V insulation test on an energised
>? circuit is dangerous and would damage the instrument, and because the entire
>? point is to establish safety *before* the equipment can become live. Once
>? the lock is off, the opportunity to test safely has gone.

## What to remember

- Switching off is not disconnecting. Isolate, lock, tag, prove dead.
- Prove-test-prove, at the point of work, on every conductor.
- Look for a second supply into the enclosure before you trust the isolator.
- Discharge stored energy: capacitors, drive DC links, fan inertia, pressure.
- Reconnect to the diagram, inspect, then earth continuity, insulation
  resistance, polarity and correct connections before the lock comes off.
- A low earth path is what turns a fault into a tripped breaker instead of a
  live frame.
`,
        quiz: [
          {
            q: "Why is 'prove, test, prove' used when checking that a circuit is de-energised?",
            options: [
              "To satisfy record-keeping requirements for the isolation register",
              "Because a voltage tester can fail silently, so it must be shown to work both immediately before and immediately after the test on the circuit",
              "Because a single test cannot detect three-phase supplies",
              "Because the first reading on any tester is unreliable",
            ],
            answer: 1,
            explain: "The sequence exists to catch a tester that has failed between checks — a failed tester reads dead on a live circuit, which is the most dangerous possible false result. It is a safety technique, not a paperwork one, and it applies equally to single- and three-phase work.",
          },
          {
            q: "A danger tag has been fitted to an isolator but no lock. What is the weakness?",
            options: [
              "The tag will not survive weather exposure on a rooftop",
              "A tag informs but does not prevent; without a personal lock the isolator can still be operated by anyone",
              "Tags are only valid for 24 hours",
              "There is no weakness provided the tag carries a name and date",
            ],
            answer: 1,
            explain: "A tag communicates and a lock controls. Isolation relies on the equipment being physically incapable of being re-energised, with the key held by the person at risk. A tag alone leaves the isolator operable by a well-meaning third party.",
          },
          {
            q: "What is the consequence of a high-resistance protective earthing path on a faulty appliance?",
            options: [
              "Fault current is limited, so the protective device may operate slowly or not at all and the frame can remain at a dangerous voltage",
              "Fault current increases, causing the protective device to trip unnecessarily",
              "The appliance will not start, giving an obvious symptom",
              "Insulation resistance readings rise above the acceptable maximum",
            ],
            answer: 0,
            explain: "Protection is current-operated, so it depends on the earth path allowing a large fault current. High resistance limits that current, delaying or preventing disconnection while the frame sits live. A poor earth gives no obvious symptom in normal running, which is exactly why it must be tested.",
          },
          {
            q: "Which test must be completed while the equipment is still isolated?",
            options: [
              "Confirming correct compressor rotation",
              "Insulation resistance at 500 V DC",
              "Checking that the thermostat cycles the unit",
              "Measuring running current with a clamp meter",
            ],
            answer: 1,
            explain: "An insulation resistance test injects 500 V DC and must never be applied to an energised circuit — it is dangerous and would damage the instrument. Rotation, cycling and running current are all functional checks that can only be made once supply is restored.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "acts-and-regulations",
        title: "The law that governs electrical work in Australia",
        minutes: 12,
        simple: "Electrical work in Australia is controlled by state and territory law, not by one national law. Each place has an Act that sets the big duties and Regulations underneath it that set the detail, and licensing sits inside that. The names differ from state to state, so learn the structure and then learn your own.",
        refs: R("Australian electrical safety legislation, Acts, Regulations and the regulator"),
        content: `
A written paper will ask which Acts and Regulations govern electrical work where
you work. It is not asking you to recite legislation. It is asking whether you
understand the legal structure your licence sits inside — because a technician
who thinks the rules come from the boss, from the standard, or from custom will
eventually do something unlawful without realising it.

## The structure: Acts, Regulations, standards, codes

Four layers, and it matters that you can tell them apart.

| Layer | What it is | Force | Example |
|---|---|---|---|
| **Act** | Legislation passed by a parliament. Sets duties, offences, penalties, the licensing framework and the regulator | Law | A state or territory Electrical Safety Act or Electricity Safety Act; the Work Health and Safety Act |
| **Regulations** | Subordinate legislation made under an Act. Sets the operational detail: licence classes, conditions, prescribed procedures | Law | Electrical safety regulations; Work Health and Safety Regulations |
| **Standard** | A technical document published by a standards body. Says how to do the work | Not law by itself — see the next lesson | AS/NZS 3000, AS/NZS 3760, AS/NZS 4836 |
| **Code of practice** | Practical guidance on meeting a duty | Admissible evidence of what is reasonably practicable; may be mandatory where legislation says so | WHS codes of practice; the Refrigerant Handling Code of Practice |

## Electrical safety law is state and territory law

There is no single national electrical safety Act. Each state and territory has
its own legislation and its own regulator, and each issues its own licences.
Broadly you will find:

- An **Act** dealing with electrical or electricity safety, which creates the
  duties, the offences and the licensing scheme;
- **Regulations** under that Act, which set out licence classes and conditions,
  requirements for testing and certification, and prescribed safe-working
  requirements — including what must happen before anyone works on an energised
  circuit;
- A **regulator** that issues licences, investigates incidents and enforces the
  law.

Examples of how the naming varies, purely to show the pattern: Queensland works
under an Electrical Safety Act with electrical safety regulations beneath it;
Victoria under an Electricity Safety Act with installation regulations, overseen
by the state energy safety body; Western Australia under electricity legislation
with licensing regulations administered by its building and energy regulator;
South Australia under electricity legislation with licensing administered
through the technical regulator; and in New South Wales a large part of
electrical safety at work is carried by the Work Health and Safety Act and
Regulation, with licensing through the state fair trading body.

>! Do not memorise another state's Act names for your assessment. Find the
>! current Act, Regulations and regulator for the state or territory where you
>! hold your licence, write them down, and learn those. Titles, amendment years
>! and licence class names all change.

## Work health and safety law runs alongside it

Separately from electrical licensing, work health and safety legislation applies
to everything you do. Most Australian jurisdictions have adopted a Work Health
and Safety Act and Regulations based on the model law; Victoria retains its own
occupational health and safety legislation with equivalent duties.

The key ideas you should be able to state:

- A **person conducting a business or undertaking** — your employer, or you if
  you are self-employed — has a primary duty to ensure, so far as is reasonably
  practicable, the health and safety of workers and of **other people** affected
  by the work. That last part is where the shopping-centre public comes in.
- **Workers** have duties too: take reasonable care of your own health and
  safety and that of others, comply with reasonable instructions, and use the
  systems and equipment provided.
- **Officers** of the business have a due diligence duty.
- The Regulations prescribe detail: risk management, high risk construction
  work, plant, hazardous chemicals, working at height, confined spaces, and
  electrical safety at the workplace.

## What the regulations say about testing energised

Every jurisdiction restricts energised work. The general rule is that electrical
work must be carried out **de-energised**, and the exceptions are narrow: where
it is necessary in the interests of health and safety, where the equipment must
be energised for the work to be carried out properly — such as testing and
fault-finding — or where there is no reasonable alternative.

Where energised work is permitted, the regulations set conditions. Across
jurisdictions these typically include:

1. A **risk assessment carried out first** and, in many cases, documented before
   the work starts. This is the step candidates most often leave out: the first
   requirement is not a glove or a mat, it is the assessment.
2. A **second competent person present** who can isolate supply and provide
   rescue and resuscitation.
3. **Safe working practices** to the relevant standard: insulated tools,
   appropriate test instruments, barriers or insulating mats, appropriate PPE,
   a defined work area with unauthorised persons excluded.

## Penalties and why they are severe

Electrical safety legislation carries substantial penalties, up to imprisonment
for the most serious categories of offence, because the consequences are
catastrophic and irreversible. Unlicensed electrical work, failing to test, and
energising equipment that has not been verified are treated seriously for the
same reason. Beyond the legal penalty there is a practical one: insurance
generally will not respond to work performed outside a licence.

### Practice — write your answer before opening

State which Acts and Regulations govern electrical work in your state or
territory, and describe the role each plays. If you cannot name yours yet,
describe the structure and say how you would find them.

>? **Structure first, then your own jurisdiction.**
>? - An **Act** — the primary legislation for electrical or electricity safety
>?   in the state or territory. It creates the duties, the offences and
>?   penalties, the licensing framework and the regulator.
>? - **Regulations** made under that Act — the operational detail: licence
>?   classes and their conditions, prescribed requirements for testing,
>?   certification and safe working, and the requirements that apply before any
>?   energised work.
>? - **Work health and safety legislation** applying in parallel: a primary duty
>?   on the business to ensure health and safety so far as is reasonably
>?   practicable, duties on workers, and prescribed risk-management requirements.
>? - A **regulator** that issues and enforces licences and investigates
>?   incidents.
>?
>? **How to find yours:** go to your state or territory electrical safety
>? regulator's website, find the licensing page for restricted electrical work,
>? and note the exact titles of the Act and Regulations it cites and the scope
>? of work for your licence class. Write them on the inside cover of your notes.
>? Do not rely on another state's names — the titles genuinely differ.

### Practice — write your answer before opening

A fault can only be traced with the control circuit energised. State the first
thing the electrical safety regulations require of you, and what else must be in
place.

>? **First: a risk assessment, carried out before the work begins.** In most
>? jurisdictions it must be documented. The default rule is that electrical work
>? is done de-energised; energised testing is an exception that has to be
>? justified, and the justification is the assessment.
>?
>? **What else must be in place:**
>? - A determination that there is genuinely no reasonable alternative — that
>?   the circuit must be live for the work to be done properly.
>? - A **second competent person present**, able to isolate supply immediately
>?   and to perform rescue and resuscitation.
>? - Safe working practices to the relevant standard: appropriate and tested
>?   instruments with the correct category rating, insulated tools, insulating
>?   mats or barriers, appropriate PPE, and a defined work area from which
>?   unauthorised people are excluded.
>? - Authorisation in accordance with your licence, the site rules and any
>?   permit system in force.
>?
>? The commonest wrong answer is to jump straight to PPE. PPE is the last line
>? of the hierarchy of control, not the first requirement.

### Practice — write your answer before opening

Explain the difference between an Act and a Regulation, and why a technician
needs to know that both exist.

>? **An Act is primary legislation; Regulations are made under it.**
>? - The **Act** is passed by parliament. It sets the duties, creates offences
>?   and penalties, establishes the licensing scheme and appoints the regulator.
>?   It deals in principles: who owes a duty, to whom, and what happens if it is
>?   breached.
>? - The **Regulations** are subordinate legislation made under the authority of
>?   the Act. They carry the operational detail — licence classes and conditions,
>?   prescribed procedures, required records, requirements for energised work.
>?   They can be amended more readily than the Act.
>? - **Both are law.** Breaching a Regulation is an offence just as breaching the
>?   Act is.
>?
>? **Why it matters to a technician:** the Act tells you that you must not do
>? unlicensed electrical work and that you owe a duty of care. The Regulations
>? tell you *exactly* what your licence class covers, what you must test, what
>? you must record, and what must happen before you work energised. The day-to-
>? day answers are nearly always in the Regulations, so a technician who has
>? only heard of the Act does not actually know the rules they work under.

## What to remember

- Acts and Regulations are law. Standards and codes are not law in themselves.
- Electrical safety is state and territory law, with a regulator in each
  jurisdiction. Names and licence classes differ; the structure does not.
- WHS legislation applies in parallel: a primary duty on the business, duties on
  workers, and protection for other people affected by the work.
- Work de-energised by default. Energised work is an exception requiring a risk
  assessment first, a second competent person, and safe working practices.
- Learn your own jurisdiction's Act, Regulations and regulator by name.
`,
        quiz: [
          {
            q: "What is the correct relationship between an Act and its Regulations?",
            options: [
              "Regulations are industry guidance and are not enforceable",
              "Regulations are subordinate legislation made under the Act, carrying the operational detail, and breaching them is an offence just as breaching the Act is",
              "An Act applies to businesses while Regulations apply only to licence holders",
              "Regulations replace the Act once they are made",
            ],
            answer: 1,
            explain: "Both are law. The Act sets duties, offences and the licensing framework; the Regulations set the detail such as licence conditions, prescribed procedures and record requirements. Because the detail lives in the Regulations, that is where most of a technician's day-to-day obligations are found.",
          },
          {
            q: "Which statement about Australian electrical safety legislation is correct?",
            options: [
              "One national Act governs electrical work in every state and territory",
              "Electrical safety legislation and licensing are administered by each state and territory, so the Act names, licence classes and scope wording vary",
              "Electrical licensing is administered federally through the same body that issues refrigerant handling licences",
              "Electrical safety is governed entirely by AS/NZS 3000",
            ],
            answer: 1,
            explain: "There is no single national electrical safety Act. Each jurisdiction legislates and licenses separately, which is why you must learn your own. Refrigerant handling licensing is the federal scheme, and AS/NZS 3000 is a standard rather than legislation.",
          },
          {
            q: "A fault can only be found with the circuit energised. What does the legislation require first?",
            options: [
              "Putting on insulating gloves and using insulated tools",
              "Notifying the regulator that energised work will occur",
              "Carrying out a risk assessment, generally documented, before the work starts",
              "Obtaining written consent from the equipment owner",
            ],
            answer: 2,
            explain: "The default requirement is to work de-energised, so energised work must first be justified by a risk assessment. PPE and insulated tools are controls that follow from that assessment, and jumping straight to them is the most common wrong answer. Routine energised testing does not require notifying the regulator.",
          },
          {
            q: "Under work health and safety law, whose safety must the primary duty holder protect?",
            options: [
              "Only its own directly employed workers",
              "Workers and other people who could be affected by the work, so far as is reasonably practicable",
              "Only people who have received a site induction",
              "Only licence holders working on the site",
            ],
            answer: 1,
            explain: "The primary duty extends to other persons affected by the work, which is exactly why a job in a shopping centre or on a public footpath brings in barricading, exclusion zones and signage. Induction status and licensing do not limit who the duty protects.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "standards-not-law",
        title: "Standards are not legislation until they are called up",
        minutes: 12,
        simple: "AS/NZS 3000 is not a law. It is a technical book written by a standards body. It becomes legally binding when a law points at it and says you must comply — which is exactly what electrical safety regulations do. Knowing the difference stops you making claims in an exam answer that are not true.",
        refs: R("the legal status of AS/NZS standards and how they are called up by legislation"),
        content: `
Candidates routinely write that AS/NZS 3000 "is the law". It is not, and the
distinction is worth marks as well as being genuinely useful on site.

## What a standard is

A standard is a technical document produced by a standards body — for Australia
and New Zealand, jointly through Standards Australia and Standards New Zealand —
by committees of industry, regulator, manufacturer and user representatives. It
describes how something should be designed, built, installed, tested or
maintained so that it is safe and fit for purpose. It is published, sold and
periodically revised.

On its own, a standard is a **technical specification with no legal force**. It
becomes binding in one of three ways:

1. **Called up by legislation.** An Act or Regulation states that work must
   comply with the standard. This is the strongest route and it is the one that
   applies to the wiring rules: electrical safety regulations across Australian
   jurisdictions require electrical installations to comply with AS/NZS 3000, so
   through that reference the standard carries the force of law.
2. **Called up by contract.** A client specification, a head-contract, or a site
   procedure requires compliance. That is a contractual obligation rather than a
   statutory one, but it binds you all the same.
3. **As evidence of what is reasonably practicable.** Even where a standard is
   not called up, it represents accepted industry practice. If something goes
   wrong, departing from the recognised standard is very hard to defend under a
   duty of care that is measured by what was reasonably practicable.

That third route is the one people underestimate. "It was not called up" is not
much of a defence when the standard describes what every competent person in the
industry does.

## The three standards you will be asked about

| Standard | Subject | Where it fits |
|---|---|---|
| **AS/NZS 3000** — the Wiring Rules | Design, installation and verification of electrical installations, including the inspection and testing that verify a completed installation | Called up by electrical safety regulations in each jurisdiction, so compliance is effectively mandatory |
| **AS/NZS 3760** | In-service safety inspection and testing of electrical equipment — the standard behind "test and tag" of cord-connected equipment | A standard; becomes mandatory where called up by WHS regulation, a code of practice, or a client or site requirement |
| **AS/NZS 4836** | Safe working on or near low-voltage electrical installations and equipment | A standard describing safe working practice; called up or referenced by regulators and site procedures, and treated as the benchmark for safe practice |

There are others you will meet: AS/NZS 5149 for refrigerating systems safety,
AS/NZS 3666 for air-handling and water systems in buildings, AS/NZS 3012 for
construction and demolition sites. Same principle applies to all of them.

## AS/NZS 3000 and verification

Where AS/NZS 3000 bears on your work most directly is verification: the
inspection and testing that must be carried out before an installation or an
alteration is connected or reconnected to supply. In outline, verification is a
**visual inspection first**, then testing:

- continuity of the earthing system, including protective earthing conductors
  and equipotential bonding;
- insulation resistance, at a test voltage of 500 V DC for the usual low
  voltage circuits, against the minimum acceptable value;
- polarity, and correct circuit connections;
- operation of RCDs, and where required earth fault-loop impedance.

The standard also recognises that an insulation resistance test at 500 V DC will
destroy sensitive electronic equipment connected to the circuit — controllers,
inverters, electronic expansion valve drivers, surge protection. Where that
equipment cannot be disconnected or otherwise protected, the standard permits an
alternative approach in place of the straight insulation resistance test. Know
that the exemption exists, know that it is the only common one, and know that it
is not permission to skip the test: you either disconnect or link out the
vulnerable equipment and test the rest, or you use the alternative method the
standard allows. Read the current edition for the exact conditions.

>! Never apply a 500 V insulation test to a circuit with electronic controls
>! still connected and unprotected. You will destroy the board, and a technician
>! who has just wrecked a controller is under pressure to skip the rest of the
>! testing. Disconnect or protect first, then test.

## AS/NZS 3760 and the flexible-cord world

A great deal of refrigeration equipment is cord-connected: condensate pumps,
portable units, service tools, extension leads, drop lights and every power tool
in the van. That equipment falls under in-service inspection and testing.

The essentials:

- **Visual inspection first**, and it finds most faults — damaged cords, cracked
  plugs, missing pins, damaged bodies, taped repairs.
- **Earth continuity** for Class I equipment, held to a low maximum resistance —
  in the order of 1 Ω, which is the value most often asked for. Confirm the
  current value in the edition in force.
- **Insulation resistance**, at 500 V DC, against the standard's minimum.
- **Tagging** with the tester's identity and the test date, and retest intervals
  set by the environment: harsh construction environments are tested far more
  often than an office.

## Where the standards meet legislation in practice

A useful way to hold it together: **the Act tells you that you must not put
people at risk and must hold the right licence; the Regulations tell you what
you must do and record; the standard tells you how to do it and what a pass
looks like.**

### Practice — write your answer before opening

Explain whether AS/NZS 3000 is legislation, and how it comes to be enforceable.

>? **No — AS/NZS 3000 is a standard, not legislation.** It is a technical
>? document published by the joint Australian and New Zealand standards bodies.
>? Parliament did not pass it and, in itself, it creates no offence.
>?
>? **It becomes enforceable when it is called up.** Electrical safety
>? regulations in Australian jurisdictions require electrical installations to
>? comply with AS/NZS 3000, and it is that statutory reference which gives the
>? standard legal force. Compliance is therefore effectively mandatory for
>? installation work.
>?
>? **Two further routes:** a contract or site specification can require
>? compliance, and even where a standard is not called up at all it is strong
>? evidence of what is reasonably practicable under a duty of care — so
>? departing from it is very difficult to justify after an incident.

### Practice — write your answer before opening

You are asked to insulation test a rooftop package that contains an electronic
controller and a variable speed drive. Describe how you would proceed and what
the standard allows.

>? **Protect the electronics, then test — do not skip the test.**
>? 1. Identify every item of electronic equipment on the circuit: controller,
>?    drive, EEV driver, surge protection devices, electronic time clocks.
>? 2. Wherever practicable, **disconnect or isolate** that equipment from the
>?    circuit, or link its active and neutral terminals together as the
>?    manufacturer and the standard direct, then carry out the insulation
>?    resistance test at 500 V DC on the remaining circuit.
>? 3. Where the vulnerable equipment cannot be disconnected or protected,
>?    AS/NZS 3000 recognises this situation and permits an alternative approach
>?    in place of the straight insulation resistance test. Apply it exactly as
>?    the current edition sets it out and record what you did and why.
>? 4. Test the rest of the installation normally and record all results.
>?
>? **What not to do:** apply 500 V with the electronics connected, which
>? destroys them; or decide the test is impossible and re-energise untested,
>? which leaves the safety of the reconnection unproven.

### Practice — write your answer before opening

A site manager says test-and-tag is "just a standard, so it is optional here".
Write your reply.

>? **Correct that it is a standard; wrong that it is therefore optional.**
>? - AS/NZS 3760 is indeed a standard rather than an Act. But work health and
>?   safety legislation places a duty on the business to ensure, so far as is
>?   reasonably practicable, that plant and equipment provided for work are
>?   safe — and in-service inspection and testing is the recognised way that
>?   duty is met for cord-connected equipment.
>? - Where a WHS regulation, a code of practice, a site procedure or a client
>?   contract calls the standard up, compliance is mandatory outright.
>? - Even where nothing calls it up, the standard defines accepted industry
>?   practice. If a worker is injured by a faulty lead that inspection would
>?   have found, "it was only a standard" is not a defence to a duty measured by
>?   what was reasonably practicable.
>? - Practically: visual inspection finds most faults and costs almost nothing.
>?   Declining to do it is a large risk taken for a very small saving.

## What to remember

- A standard is a technical document. It is not law until legislation, a
  contract or a duty of care brings it in.
- AS/NZS 3000 is called up by electrical safety regulations, so compliance is
  effectively mandatory.
- AS/NZS 3760 covers in-service testing of cord-connected equipment; AS/NZS 4836
  covers safe working on or near low-voltage installations.
- Verification is visual inspection first, then earthing continuity, insulation
  resistance at 500 V DC, polarity, correct connections and protective device
  operation.
- The insulation-test exemption for sensitive electronics is not permission to
  skip testing.
- Act: you must. Regulations: what you must do. Standard: how, and what passes.
`,
        quiz: [
          {
            q: "Which statement about AS/NZS 3000 is correct?",
            options: [
              "It is an Act of parliament dealing with electrical installations",
              "It is a standard that carries legal force because electrical safety regulations call it up",
              "It is guidance that carries no weight unless a contract requires it",
              "It applies only to new installations and not to alterations",
            ],
            answer: 1,
            explain: "AS/NZS 3000 is published by the standards bodies, not passed by parliament, but electrical safety regulations require installations to comply with it, and that statutory reference is what makes it enforceable. It applies to alterations and additions as well as new work.",
          },
          {
            q: "AS/NZS 3760 is chiefly concerned with what?",
            options: [
              "Design of new electrical installations",
              "Safe working on or near energised low-voltage equipment",
              "In-service safety inspection and testing of electrical equipment, particularly cord-connected equipment",
              "Safety requirements for refrigerating systems",
            ],
            answer: 2,
            explain: "AS/NZS 3760 is the in-service inspection and testing standard behind test-and-tag of cord-connected equipment. Installation design sits in AS/NZS 3000, safe working practice in AS/NZS 4836, and refrigerating system safety in the AS/NZS 5149 series.",
          },
          {
            q: "A circuit contains an electronic controller that would be damaged by a 500 V insulation test and cannot readily be disconnected. What is the correct approach?",
            options: [
              "Skip the insulation test and record that electronics were fitted",
              "Test at a reduced voltage of the technician's choosing",
              "Protect or disconnect the equipment where practicable, and otherwise apply the alternative the standard allows for this situation, recording what was done",
              "Energise the equipment and measure current instead",
            ],
            answer: 2,
            explain: "The standard recognises this exact problem and provides for it, but the provision is an alternative method, not an exemption from establishing that the circuit is safe. Choosing your own test voltage is not a recognised method, and skipping the test leaves the reconnection unverified.",
          },
          {
            q: "A standard has not been called up by any legislation or contract for a particular job. What is its status?",
            options: [
              "It has no relevance and can be disregarded",
              "It still represents accepted industry practice and is strong evidence of what is reasonably practicable under a duty of care",
              "It automatically becomes mandatory after five years",
              "It applies only to the party who purchased a copy",
            ],
            answer: 1,
            explain: "Duties of care are measured against what is reasonably practicable, and the recognised standard describes what a competent person in the industry would do. Departing from it is very difficult to defend after an incident, even without a statutory reference.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "arctick-and-electrical",
        title: "ARCtick and the electrical licence: two permissions, one job",
        minutes: 12,
        simple: "You need two different licences to service most refrigeration plant, and they come from completely different places. One is federal and covers touching the refrigerant. The other is from your state and covers touching the wiring. Neither one covers the other, and most jobs need both.",
        refs: R("refrigerant handling licensing and its relationship to electrical licensing"),
        content: `
A refrigeration mechanic on a commercial site is usually working under two
separate legal permissions at once, issued by different levels of government
under completely different legislation. Confusing them is a common source of
wrong answers.

| | Refrigerant handling licence (ARCtick) | Restricted electrical licence |
|---|---|---|
| Issued by | The national refrigeration and air conditioning licensing body | Your state or territory electrical safety regulator |
| Made under | Commonwealth ozone protection and synthetic greenhouse gas legislation and its regulations | State or territory electrical safety legislation |
| Covers | Handling scheduled refrigerant: recovery, charging, decanting, and any work that breaches the refrigerant circuit | Defined electrical work incidental to your trade, on the equipment of that trade |
| Held by | The individual technician | The individual technician |
| Business-level authorisation | A refrigerant trading authorisation, held by the business, to acquire, store, sell or dispose of refrigerant | An electrical contractor licence, held by the business, for contracting electrical work |

## What the refrigerant handling licence covers

The refrigerant handling licence is a national scheme. It is an offence to
acquire, possess or handle a scheduled refrigerant without the appropriate
licence, and to buy refrigerant from a supplier you must be able to show it.

Categories vary, but in general terms:

- A **full refrigerant handling licence** covers work on stationary
  refrigeration and air conditioning generally.
- **Restricted categories** exist for narrower work — for example, a category
  limited to the installation and decommissioning of certain split systems.
- **Automotive** air conditioning is a separate category again.
- The **refrigerant trading authorisation** is held by the business, not the
  technician, and is what allows the business to buy, hold, sell and dispose of
  refrigerant. Your employer holds it; you work under it.

The obligations that come with it are substantial and are examinable: recover
refrigerant rather than venting it, minimise emissions, keep records of
refrigerant acquired, used and disposed of, use equipment that is fit for
purpose, and follow the Refrigerant Handling Code of Practice.

>! Venting a scheduled refrigerant to atmosphere is an offence. So is buying,
>! carrying or using refrigerant without the appropriate licence, and so is
>! working for a business that has no refrigerant trading authorisation. The
>! penalties are significant and the licence itself can be suspended or
>! cancelled.

## Hydrocarbons sit slightly differently

Hydrocarbon refrigerants such as R290 and R600a are not scheduled synthetic
greenhouse gases, so the federal refrigerant handling scheme does not regulate
them in the same way. That does **not** make them unregulated. They are
flammable gases, so work health and safety legislation, dangerous goods and
flammable-gas requirements, and the relevant refrigerating system safety
standards all apply, and most employers and manufacturers require specific
competency before you work on them. Never let "ARCtick does not cover it" turn
into "no rules apply".

## Where the two licences meet

Take an ordinary job: a compressor has failed in a supermarket condensing unit.

1. **Isolate, lock, tag, prove dead, discharge capacitors** — restricted
   electrical licence.
2. **Recover the refrigerant charge** into a recovery cylinder, weighed, within
   the fill limit, recorded — refrigerant handling licence.
3. **Disconnect the compressor's electrical connections** — restricted
   electrical licence.
4. **Unbraze, replace the compressor, braze in, pressure test with oxygen-free
   nitrogen, evacuate** — refrigerant handling licence and trade competency.
5. **Reconnect the compressor electrically, verify by earthing continuity,
   insulation resistance, polarity and correct connections** — restricted
   electrical licence.
6. **Charge, commission, record refrigerant used** — refrigerant handling
   licence.

Six steps, alternating. A technician holding only one of the two licences cannot
complete that job lawfully on their own. That is the point the assessment is
usually driving at:

- A person holding **only** a refrigerant handling licence may recover and
  charge, but may not disconnect the compressor from the supply or reconnect it.
- A person holding **only** an electrical licence may disconnect and reconnect,
  but may not break into the refrigerant circuit or handle the charge.

Neither licence extends into the other's territory, and no amount of competence
in one substitutes for the other.

## The paperwork meets too

Both schemes generate records, and they are separate records:

- **Refrigerant side:** quantity recovered and charged, refrigerant type,
  cylinder identification, the system it came from or went to, leak test
  results, and disposal or reclamation destination.
- **Electrical side:** isolation record, test results with instrument details,
  and the compliance documentation your jurisdiction requires.

Keep them both. On a serious incident or an audit, the absence of a record is
treated as the absence of the work.

### Practice — write your answer before opening

A technician holds a current refrigerant handling licence but no electrical
licence of any kind. A rooftop package has a failed contactor and a leaking
evaporator coil. State what they may and may not do, and what has to happen for
the job to be completed lawfully.

>? **May do:** everything on the refrigerant side — recover the charge into a
>? weighed cylinder within the fill limit, cut out and replace the evaporator
>? coil, pressure test with oxygen-free nitrogen, evacuate, recharge, leak test
>? and record refrigerant used, working under the business's refrigerant trading
>? authorisation.
>?
>? **May not do:** any electrical work. That includes disconnecting the unit
>? from supply, opening the terminal enclosure to disconnect conductors,
>? replacing the contactor, reconnecting, and carrying out the verification
>? tests. Isolating at a plug and socket is different from disconnecting fixed
>? wiring, but the contactor replacement is electrical work either way.
>?
>? **To complete the job lawfully:** a person holding the appropriate electrical
>? licence — a restricted licence holder for the contactor replacement and the
>? disconnect and reconnect, or a licensed electrician — must carry out the
>? electrical work and the verification testing, and record the results. The two
>? technicians can work the job together; what cannot happen is one person doing
>? both halves without both permissions.

### Practice — write your answer before opening

Explain why hydrocarbon refrigerants are treated differently by the federal
refrigerant handling scheme, and why that does not reduce your obligations.

>? **Different scheme, not fewer rules.**
>? - The federal licensing scheme regulates **scheduled** substances —
>?   ozone-depleting substances and synthetic greenhouse gases. Hydrocarbons such
>?   as R290 and R600a are neither, so they fall outside that particular scheme.
>? - **But** they are flammable gases with a very low ignition energy, so work
>?   health and safety legislation applies in full, along with dangerous goods
>?   and flammable-gas storage and handling requirements, charge-size and
>?   ventilation limits in the refrigerating system safety standards, and
>?   equipment requirements such as spark-free recovery equipment and leak
>?   detection.
>? - Employers and manufacturers commonly require specific hydrocarbon
>?   competency and a documented risk assessment before work begins, and site
>?   hot-work rules become far more restrictive.
>? - The correct summary: the environmental licensing obligation is different;
>?   the safety obligation is greater, not smaller.

### Practice — write your answer before opening

Your employer's refrigerant trading authorisation has lapsed. You personally
hold a current refrigerant handling licence. Describe the position and what you
would do.

>? **Your personal licence does not cover the business's obligations.**
>? - The **refrigerant handling licence** authorises *you* to handle refrigerant.
>? - The **refrigerant trading authorisation** authorises the *business* to
>?   acquire, store, sell and dispose of refrigerant. Without a current
>?   authorisation the business cannot lawfully buy or hold refrigerant, and
>?   suppliers should not sell to it.
>? - So work requiring refrigerant to be acquired or held by the business cannot
>?   lawfully proceed, even though every technician's personal licence is
>?   current.
>?
>? **What I would do:** stop and raise it with management immediately and in
>? writing, do not purchase or accept refrigerant on the business's behalf until
>? the authorisation is reinstated, and make sure the reinstatement is confirmed
>? before recommencing that work. If the pressure to continue does not stop, the
>? matter goes above my supervisor — this is an offence, not an administrative
>? oversight, and it is my licence as well as the company's exposure.

## On the job

- Two licences, two levels of government, two sets of records. Neither covers
  the other.
- The refrigerant handling licence is yours; the refrigerant trading
  authorisation is the business's.
- Most real jobs alternate between the two permissions several times.
- Hydrocarbons fall outside the scheduled-refrigerant scheme but carry greater
  safety obligations, not fewer.
- Records are the proof. Missing records are treated as missing work.
`,
        quiz: [
          {
            q: "Which pairing correctly describes the two licences a refrigeration mechanic commonly works under?",
            options: [
              "Both are issued by the state electrical safety regulator",
              "A refrigerant handling licence under Commonwealth legislation, and a restricted electrical licence under state or territory legislation",
              "Both are issued nationally by the refrigeration licensing body",
              "A refrigerant trading authorisation held personally, and an electrical contractor licence held personally",
            ],
            answer: 1,
            explain: "The refrigerant handling licence is a national scheme under Commonwealth ozone and synthetic greenhouse gas legislation; electrical licensing is state and territory based. The trading authorisation and the contractor licence are both held by the business rather than the individual.",
          },
          {
            q: "A technician holds a refrigerant handling licence only. Which task may they lawfully perform?",
            options: [
              "Replacing a failed compressor contactor",
              "Disconnecting the fixed wiring to the condensing unit before removing it",
              "Recovering the refrigerant charge into a weighed recovery cylinder",
              "Carrying out insulation resistance and polarity tests before re-energising",
            ],
            answer: 2,
            explain: "Recovery is refrigerant handling and squarely within that licence. Contactor replacement, disconnecting fixed wiring and verification testing are all electrical work requiring the appropriate electrical licence, whatever the technician's practical skill.",
          },
          {
            q: "What does a refrigerant trading authorisation authorise?",
            options: [
              "An individual technician to handle refrigerant on stationary systems",
              "A business to acquire, store, sell and dispose of refrigerant",
              "A business to carry out electrical contracting work",
              "An individual to import refrigerant personally",
            ],
            answer: 1,
            explain: "The trading authorisation sits at business level and covers acquiring, holding, selling and disposing of refrigerant. Individual handling is covered by the technician's own refrigerant handling licence, and electrical contracting requires a separate contractor licence entirely.",
          },
          {
            q: "Which statement about hydrocarbon refrigerants such as R290 is correct?",
            options: [
              "They are unregulated because they are not scheduled substances",
              "They fall outside the federal scheduled-refrigerant licensing scheme, but WHS, dangerous goods and refrigerating system safety requirements apply and the safety obligations are greater",
              "They require the same refrigerant handling licence category as synthetic refrigerants",
              "They may be vented to atmosphere because they have a low global warming potential",
            ],
            answer: 1,
            explain: "Being outside one scheme does not mean being outside all of them. Flammability brings in WHS and dangerous goods obligations, charge and ventilation limits, spark-free equipment and specific competency requirements. Deliberate venting of any refrigerant is unacceptable practice regardless of its environmental rating.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "duty-of-care-public",
        title: "Duty of care when the public is your work area",
        minutes: 14,
        simple: "In a plant room, everyone around you is a tradesperson who expects hazards. In a shopping centre walkway, the next person past your ladder is a toddler who has never seen a brazing torch. Your legal duty covers them too, and the controls you need are completely different from the ones that would do in a locked plant room.",
        refs: R("duty of care and hazard control when working in public areas"),
        content: `
Work health and safety legislation places a duty on the business — and through
it on you — to protect not only workers but **other persons** who could be
affected by the work. When the work is in a shopping centre, a school, a
hospital corridor, a service station forecourt or a footpath, those other
persons are members of the public. They have had no induction, no toolbox talk
and no reason to expect a hazard, and they include children, elderly people and
people with impaired sight or mobility.

The assessment will typically give you a scenario — a rooftop or public-area job
using power tools, ladders, brazing gear and an open electrical enclosure — and
ask what your duty of care requires. Answer with controls, not with intentions.
"Be careful" earns nothing.

## Start with the hierarchy of control

Every answer about controlling a hazard should be structured by the hierarchy,
because that is how the law expects risk to be managed:

1. **Eliminate** — can the hazard be removed entirely? Doing the noisy or
   hazardous work out of trading hours, or prefabricating pipework in the
   workshop, eliminates the public exposure altogether. This is the most
   powerful control and the most often forgotten.
2. **Substitute** — a press-fit connection or a mechanical joint instead of
   brazing; a battery tool instead of a lead across a walkway; a scissor lift
   instead of a ladder.
3. **Isolate** — separate people from the hazard: hard barriers, hoarding,
   exclusion zones, locking the plant room, closing an area.
4. **Engineering controls** — guarding, edge protection, mechanical extraction,
   fire blankets, screens, RCD protection on portable equipment.
5. **Administrative controls** — permits, signage, spotters, timing, sequencing,
   induction, procedure.
6. **PPE** — last, and never the whole answer.

## The specific controls for the hazards named

### Exclusion zones and barricading

- Set a zone large enough for the hazard, not just the equipment. Under a ladder
  the exclusion zone includes the **drop zone** for anything that could fall,
  and it grows with height.
- Use **hard physical barriers** where the public is present: interlocking
  barriers, mesh panels, hoarding. Bunting and cones mark a line; they do not
  stop a distracted person or a child, and they cannot be your only control in
  a public place.
- Barricade the **full perimeter**, not the three sides that are convenient.
- Add clear **signage** at every approach, in plain language, saying what the
  hazard is and where to go instead.
- Where a footpath or a public walkway is affected, arrange the **alternative
  route** rather than just closing the path, and keep it accessible — a
  wheelchair or a pram must be able to use the diversion.
- Occupying a footpath or roadway usually needs a **permit from the local
  authority** and a traffic or pedestrian management plan.

### Ladders and working at height

- Use a ladder for access and light, short-duration work only; use a platform or
  EWP where the task is longer or needs two hands.
- Secure the ladder top and bottom, correct angle, on firm level ground, with
  three points of contact.
- **Barricade beneath**, because the risk is not only you falling — it is a
  spanner falling onto someone walking past.
- Tether or restrain tools at height, and never carry them up in your hands.
- In a public area, post a **spotter** at any point where someone could walk
  into the zone from a direction you cannot see. A spotter is a person with no
  other task.

### Brazing and hot work

- Treat brazing in a public area as **hot work**, requiring a permit on most
  managed sites.
- Clear combustibles from the area, or protect them with fire blankets and
  screens. Check what is on the **other side** of the wall or ceiling you are
  heating — this is how building fires start.
- Have the correct extinguisher immediately at hand, and a **fire watch** kept
  during the work and for a set period after it — commonly at least half an
  hour, and longer on some sites.
- Purge with **oxygen-free nitrogen** when brazing on refrigerant pipework, both
  for joint quality and to avoid heating a system that still contains
  refrigerant, which can produce highly toxic decomposition products.
- Screen the work so the public cannot see the arc or flame, restrain cylinders
  upright, fit flashback arrestors and check hoses.
- Confirm the **fire detection** in the area — set-off of a sprinkler or an
  evacuation alarm in a public building is itself a serious incident, so isolate
  detection with the building manager and remember to restore it.

>! Never braze on a system that still holds refrigerant. Heating fluorocarbon
>! refrigerant produces decomposition products including hydrogen fluoride and
>! traces of highly toxic compounds, and a pressurised system can burst at the
>! joint. Recover, then purge with oxygen-free nitrogen, then heat.

### Open electrical enclosures

- An open enclosure with exposed live or potentially live parts must **never be
  left unattended**. If you have to walk away for any reason — a phone call, a
  part from the van, lunch — refit the cover or lock the enclosure and barricade
  it.
- Keep the enclosure isolated and locked out while work is in progress.
- Where energised testing is genuinely necessary, apply the full control set:
  risk assessment first, second competent person, insulated tools, correctly
  rated test instruments, insulating mats, and a defined exclusion zone with the
  public physically excluded.
- Manage leads: an RCD-protected supply for portable equipment, leads run
  overhead or under proper cable covers, never across a walkway loose.

### Housekeeping

Housekeeping in a public area is a safety control, not tidiness.

- Contain swarf, offcuts, insulation debris and packaging as you generate them.
- Clean up oil, water and condensate immediately; a wet floor in a walkway is a
  claim waiting to happen and it is your claim.
- Keep the work area compact, and keep tools inside the barricade.
- Do not stage materials outside the exclusion zone where the public will step
  around them.

### Leaving the site safe

The end of the shift is where good jobs turn bad:

- Nothing energised that should not be, nothing live and exposed, all covers
  refitted and secured.
- All isolations either removed properly or left locked and tagged with a clear
  record of what is isolated and why.
- Barricades and signage left in place if the hazard remains overnight, and
  substantial enough to stay put without you there.
- Refrigerant, gas cylinders, chemicals and tools secured or removed. Cylinders
  restrained upright, valves closed, out of public reach.
- Trip hazards removed, floors clean, access and egress clear.
- The site contact told what state the plant is in, what is off, and what has
  been left behind.
- Documentation completed: what you did, what condition the plant is in, and
  what remains outstanding.

### Practice — write your answer before opening

You are replacing a condensate pump on a fan coil unit above a ceiling in the
public concourse of a shopping centre, during trading hours. You will use a
ladder, a cordless drill, brazing equipment and will open the unit's electrical
enclosure. Describe the controls your duty of care requires.

>? **Work the hierarchy of control, then hazard by hazard.**
>?
>? **Eliminate or reschedule:** ask first whether the work can be done outside
>? trading hours or the area closed. That removes public exposure completely and
>? is the strongest control available.
>?
>? **The work area:**
>? - Hard physical barriers around the full perimeter, sized to include the
>?   drop zone beneath the ladder, not just the ladder footprint.
>? - Clear signage at every approach and an accessible alternative route for
>?   pedestrians, including prams and wheelchairs.
>? - A spotter at any blind approach, with no other task.
>? - Site permits arranged with centre management before starting.
>?
>? **Ladder work:** correct ladder for the duration and the task, secured top
>? and bottom, three points of contact, firm level base; tools tethered or
>? raised in a bag; nobody permitted beneath.
>?
>? **Brazing:** hot work permit; recover refrigerant first and purge with
>? oxygen-free nitrogen; clear or blanket combustibles and check above the
>? ceiling and behind the wall; extinguisher at hand; fire watch during and for
>? at least 30 minutes after; screen the flame from public view; cylinders
>? restrained upright with flashback arrestors; fire detection isolated with the
>? building manager and restored afterwards.
>?
>? **Electrical:** isolate, lock, tag, prove dead, discharge capacitors. Never
>? leave the enclosure open and unattended — cover and secure it if I step away.
>? Portable equipment on an RCD-protected supply, leads kept out of walkways.
>?
>? **Housekeeping and finish:** debris contained as generated, condensate
>? cleaned immediately, ceiling tiles refitted, covers on, isolations restored
>? or properly left locked and tagged, barricades kept if the hazard remains,
>? centre management told the state of the plant, and the paperwork completed.

### Practice — write your answer before opening

Explain why bunting tape and cones are not adequate as the only control when
working in a public area, and what to use instead.

>? **Because they mark a boundary but do not create one.**
>? - Tape and cones rely on people noticing them, understanding them and
>?   choosing to comply. Members of the public are distracted, in a hurry,
>?   pushing prams or supervising children, and some cannot see the tape at all.
>? - Children in particular treat tape as something to duck under. Tape also
>?   sags, blows down and gets moved by cleaners and other trades.
>? - The duty is to control the risk **so far as is reasonably practicable**, and
>?   a physical barrier is both available and affordable — so a control that
>?   merely informs will not meet the duty where a control that prevents is
>?   readily available.
>?
>? **Instead:** interlocking hard barriers or mesh panels around the full
>? perimeter, sized to include the drop zone; hoarding where the work is long or
>? the hazard significant; clear signage on every approach; an accessible
>? diversion route; and a spotter at any approach the barrier cannot cover.
>? Tape and cones are useful *in addition*, to make the barrier conspicuous.

### Practice — write your answer before opening

It is the end of the day and the job is not finished. The unit is dismantled,
the enclosure is open, and your barricades are up. List what you must do before
you leave, and why each matters.

>? **Leave it in a state a stranger cannot be hurt by.**
>? 1. **Refit and secure covers** on the electrical enclosure, or lock the
>?    enclosure — an open enclosure must never be left unattended, because
>?    anyone could reach into it and you cannot prove it stayed isolated.
>? 2. **Confirm isolations**: everything that should be off stays off, locked
>?    and tagged, with my name and contact on the tag and a written record of
>?    what is isolated and why, so nobody restores supply blindly.
>? 3. **Secure cylinders and chemicals** — oxygen and fuel gas cylinders closed,
>?    restrained upright and removed from public reach or locked away.
>? 4. **Remove or secure tools, leads and ladders** so they cannot be taken,
>?    tripped over or climbed.
>? 5. **Leave the barricades and signage** in place and substantial enough to
>?    stand up overnight without supervision, since the hazard remains.
>? 6. **Clean up** — debris contained, condensate and oil cleaned off the floor,
>?    access and egress clear.
>? 7. **Tell the site contact** what state the plant is in, what is switched off,
>?    what is expected to be affected overnight (product at risk in a coolroom,
>?    for instance) and when I am returning.
>? 8. **Complete the documentation** — work done, plant condition, isolations in
>?    place, outstanding items.
>?
>? Each of these exists because the site keeps operating after you drive away,
>? and the duty of care does not end when your shift does.

## What to remember

- The duty covers other persons, not just workers. In public, assume no
  knowledge and no caution.
- Structure every answer with the hierarchy of control, and consider
  eliminating the exposure — out of hours, or prefabricated — before anything
  else.
- Hard barriers, full perimeter, drop zone included. Tape and cones inform; they
  do not control.
- Brazing in public is hot work: permit, clearance, extinguisher, fire watch,
  screens, oxygen-free nitrogen, detection isolated and restored.
- An open electrical enclosure is never left unattended.
- Leaving the site safe is part of the job, and it is where the duty is most
  often breached.
`,
        quiz: [
          {
            q: "Which control sits highest in the hierarchy for a brazing job in a busy public concourse?",
            options: [
              "Issuing the technician with flame-resistant clothing and goggles",
              "Rescheduling the work to outside trading hours so the public is not exposed at all",
              "Placing warning signage at each approach to the area",
              "Posting a spotter to watch for approaching pedestrians",
            ],
            answer: 1,
            explain: "Removing the exposure entirely is elimination, the strongest control and the one most often overlooked. Signage and spotters are administrative controls and PPE is the last line — all useful, but all lower in the hierarchy than not having the public there.",
          },
          {
            q: "Why is a drop zone included when setting an exclusion zone beneath ladder work in a public area?",
            options: [
              "To give the technician room to reposition the ladder",
              "Because the hazard includes tools or materials falling from height, and the area at risk grows with the height of the work",
              "Because regulations require a fixed three-metre zone for all work",
              "To keep other trades from using the same access route",
            ],
            answer: 1,
            explain: "The person walking past is at risk from what falls, not only from the ladder itself, and a dropped spanner travels outward as well as down. The zone is sized to the hazard and the height, not to a single fixed figure or to the technician's convenience.",
          },
          {
            q: "You must leave an open electrical enclosure for ten minutes to collect a part from the van. What is required?",
            options: [
              "Nothing, provided the circuit is isolated and tagged",
              "Refit the cover or lock the enclosure and leave it barricaded before walking away",
              "Ask a member of centre staff to watch it",
              "Place a warning sign on the open panel",
            ],
            answer: 1,
            explain: "An open enclosure must never be left unattended, because you cannot control who reaches into it or prove the isolation was undisturbed while you were gone. A sign does not prevent access, and a member of the public or untrained staff member cannot be given a safety control role.",
          },
          {
            q: "Which of these is a genuine reason to isolate a building's fire detection before brazing, and what must follow?",
            options: [
              "It prevents heat damage to the detector, and it should stay isolated until the next service",
              "It prevents a false alarm evacuation of a public building, and detection must be restored and confirmed with the building manager on completion",
              "It is required so the hot work permit can be issued, and no further action is needed",
              "It reduces the fire risk of the work itself",
            ],
            answer: 1,
            explain: "The purpose is to avoid triggering an evacuation or a sprinkler discharge, which is itself a serious incident in a public building. Isolation is arranged with the building manager and must be restored and confirmed afterwards — leaving detection isolated is far more dangerous than the brazing was.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "documentation",
        title: "The paperwork you are expected to produce",
        minutes: 12,
        simple: "Every serious job leaves a paper trail: what could go wrong and how you controlled it, what you switched off and who held the key, what you measured, and what condition you left the plant in. If it is not written down, then legally and practically it did not happen — so the paperwork is part of the work, not an afterthought.",
        refs: R("job safety analysis, safe work method statements, risk assessment, isolation records and test records"),
        content: `
The written assessment asks what documentation a technician is expected to
produce because documentation is where a duty of care becomes evidence. After an
incident, an audit or a dispute, the paperwork is what shows whether the risk was
thought about before the job or only afterwards.

## The four families of document

| Document | Question it answers | Produced |
|---|---|---|
| Risk assessment | What could hurt someone here, how likely and how badly, and what controls will I use? | Before work starts, and again when conditions change |
| JSA or SWMS | Step by step, what am I doing, what is the hazard at each step and what is the control? | Before work starts; SWMS is mandatory for high risk construction work |
| Isolation record / permit | What is switched off, who locked it, when, and who may restore it? | At isolation, live until restoration |
| Test and service records | What did I measure, with what instrument, and what condition did I leave the plant in? | At completion |

## Risk assessment

A risk assessment identifies the hazards, assesses the risk from each, decides
controls using the hierarchy, and records the result. It is the underlying
process; the JSA and SWMS are formats for presenting it.

Do one before the job, and do another whenever something changes: the plant is
not what the work order said, the weather turns, the area becomes busy, another
trade arrives, or you find something unexpected when you open the panel. A risk
assessment written in the office three weeks ago and never looked at again is
paperwork, not safety.

## JSA and SWMS — related but not the same

A **job safety analysis** (also called a JSEA) breaks the job into steps, and
for each step lists the hazards and the controls. It is a general-purpose tool
and can be used for any task.

A **safe work method statement** does the same thing but is a specific,
legally-required document for **high risk construction work**. WHS Regulations
list the categories of high risk construction work, and several are ordinary
refrigeration jobs:

- work involving a risk of a fall of more than two metres;
- work on or near energised electrical installations or services;
- work in or near a confined space;
- work on or near pressurised gas mains or piping;
- work in an area with movement of powered mobile plant;
- work adjacent to a road or traffic corridor;
- demolition, asbestos, structural alterations and others.

Where the work falls into one of those categories, a SWMS must exist **before
the work starts**, must set out the hazards, the control measures and how they
will be implemented, monitored and reviewed, and the work must be done in
accordance with it. It must be available for inspection and kept for the
required period, and reviewed if the work changes.

The practical point for the paper: a rooftop package job in a public area
frequently ticks three of those boxes at once — height, energised electrical
work, and often mobile plant or traffic. A SWMS is not optional bureaucracy on
that job; it is a legal requirement.

>! A SWMS that is signed but not read is worse than none, because it creates a
>! record that everyone understood controls nobody applied. Walk the crew
>! through it on site, at the job, before starting, and sign it there.

## Isolation records and lockout

An isolation record — sometimes a permit to work, an isolation certificate or an
entry in a lockout register — states:

- what equipment or circuit is isolated;
- the isolation points used, and that each is locked and tagged;
- who applied each lock, with contact details and the date and time;
- what tests were done to prove de-energisation;
- what stored energy was discharged;
- who is authorised to remove the isolation, and when it was restored.

The rules that go with it are simple and absolute: **your lock, your key, your
removal**. Nobody removes another person's lock. Where several people work on
the same plant, each applies a personal lock through a multi-lock hasp, and the
plant cannot be restored until the last lock is gone. Where a lock must be cut
off because someone has gone home with the key, that is a formal, documented
process with management authorisation, not a favour with a pair of bolt cutters.

## Test results and compliance records

Every verification test you carry out should be recorded with enough detail that
someone else can rely on it:

- the equipment tested and its identification;
- each test carried out — earthing continuity, insulation resistance with the
  test voltage used, polarity, correct circuit connections, RCD operation where
  applicable;
- the **measured value**, not just "pass". "1.7 MΩ" is evidence; "OK" is an
  opinion;
- the instrument used, its identification and calibration status;
- the date, and the name and licence number of the person testing;
- the result and any defects found, and what was done about them.

Where your jurisdiction requires a compliance certificate for electrical work,
it must be completed and issued as the regulations require. The certificate has
a different name in each state and territory — a certificate of electrical
safety, a certificate of compliance for electrical work, a certificate of
testing and compliance, and so on — and the classes of work requiring one differ
too. Find out what applies to you and to your licence class, because issuing it
is usually the licensed contractor's obligation and knowing whose job it is
matters.

## Service reports and refrigerant records

On the refrigeration side, the service report and refrigerant record complete
the picture: plant identification, symptoms found, measurements taken (suction
and discharge pressures, superheat, subcooling, air-on and air-off, running
current), work performed, parts fitted, refrigerant recovered and charged by
type and quantity, leak test results, the condition the plant was left in and
what remains outstanding.

## Why records get made properly

Three reasons, and it is worth being able to state them:

1. **Safety.** The next technician relies on your isolation record and your test
   results. So does the person who restores supply.
2. **Legal.** Records are the evidence that the duty was met. Their absence is
   treated as the absence of the work, and regulators do treat it that way.
3. **Commercial.** Trend data across services is how a failing compressor gets
   caught before it fails, and how a claim about work done gets defended.

### Practice — write your answer before opening

State the documentation you would expect to produce for a job replacing a rooftop
packaged unit's compressor in a shopping centre car park during trading hours,
and say what each is for.

>? **Before the work:**
>? - **Risk assessment** — hazards of the whole job and the controls chosen using
>?   the hierarchy of control; reviewed on site against actual conditions.
>? - **SWMS** — required, because the job is high risk construction work on
>?   several counts: work on or near energised electrical installations, work at
>?   height, work adjacent to a traffic area, and likely mobile plant for
>?   lifting. Step by step, hazard by hazard, control by control, walked through
>?   with everyone on the job and signed on site.
>? - **Permits** — hot work permit for the brazing; site or centre management
>?   permits; any permit for occupying part of the car park; confirmation of
>?   fire detection isolation.
>?
>? **During the work:**
>? - **Isolation record** — isolation points, locks and tags applied with names
>?   and times, how de-energisation was proved, capacitors discharged, and who
>?   may restore.
>?
>? **At completion:**
>? - **Electrical test record** — earthing continuity, insulation resistance with
>?   the test voltage, polarity, correct circuit connections, RCD operation
>?   where fitted, each with its measured value, the instrument used and its
>?   calibration status, and the tester's name and licence.
>? - **Compliance certificate** if the work and my jurisdiction require one.
>? - **Refrigerant record** — quantity and type recovered and charged, cylinder
>?   identification, leak test result, disposal destination for anything not
>?   returned.
>? - **Service report** — plant details, fault found, work carried out, parts
>?   fitted, commissioning readings, condition on leaving, and anything
>?   outstanding.

### Practice — write your answer before opening

Explain the difference between a JSA and a SWMS, and give two examples of
refrigeration work for which a SWMS is legally required.

>? **Both break a job into steps with hazards and controls. The difference is
>? legal status.**
>? - A **JSA (or JSEA)** is a general-purpose risk-assessment format. It is good
>?   practice and often required by an employer or client, but it is not itself
>?   a statutory document.
>? - A **SWMS** is a specific document required by WHS Regulations for **high
>?   risk construction work**. It must exist before the work starts, must set out
>?   hazards, control measures and how they will be implemented, monitored and
>?   reviewed, must be complied with while the work is done, must be available
>?   for inspection and kept for the required period, and must be reviewed if
>?   the work changes.
>?
>? **Two examples requiring a SWMS:**
>? 1. Replacing a rooftop condensing unit where the work involves a risk of a
>?    fall of more than two metres.
>? 2. Fault-finding or working on or near an energised electrical installation —
>?    for instance, live testing a control circuit on a packaged unit.
>?
>? Others that come up regularly: work in or near a confined space such as a
>? plant pit, work adjacent to a road or traffic corridor, and work around
>? powered mobile plant on a construction site.

### Practice — write your answer before opening

A colleague has gone home with their personal lock still on the isolator, and
the plant needs to be restored tonight. Describe the correct process and explain
why nobody simply cuts the lock off.

>? **Nobody removes another person's lock informally — ever.**
>?
>? **Why:** the lock is that person's guarantee that the plant cannot become
>? live while any part of them, or their tools, is inside it. Cutting it off
>? assumes they have finished and are clear, and that assumption is exactly what
>? lockout exists to remove. People have been killed by plant restored while
>? they were still working on it, on the assumption that they had gone.
>?
>? **The correct process:**
>? 1. Attempt to contact the lock holder and have them return, or confirm
>?    directly with them that they and their equipment are clear.
>? 2. If they cannot return, follow the site's formal lock removal procedure.
>?    That normally requires authorisation by a responsible manager, a physical
>?    inspection of the plant by a competent person to confirm nobody is working
>?    on it and it is safe to restore, documented confirmation of the attempts to
>?    contact the holder, and a written record of the removal with names, times
>?    and reasons.
>? 3. Notify the lock holder before they return to work, so they never come back
>?    to plant they believe is still isolated.
>? 4. Record the whole thing on the isolation record.
>?
>? Anything less than that is a shortcut past the single control the person
>? relied on with their life.

## What to remember

- Risk assessment before the job and again when conditions change.
- SWMS is legally required for high risk construction work — height over two
  metres, energised electrical work, confined spaces, traffic and mobile plant
  all commonly apply to refrigeration jobs.
- Isolation records: what, where, who, proved how, restored by whom. Your lock,
  your key, your removal.
- Record measured values and the instrument used, not "OK".
- Find out which compliance certificate your jurisdiction requires and whose
  obligation it is to issue it.
- No record means no evidence, and no evidence is treated as no work.
`,
        quiz: [
          {
            q: "What distinguishes a SWMS from a JSA?",
            options: [
              "A SWMS is shorter and used for routine tasks",
              "A SWMS is a document legally required for high risk construction work, with prescribed content, review and retention requirements",
              "A JSA is prepared by the regulator and a SWMS by the employer",
              "They are different names for the same document",
            ],
            answer: 1,
            explain: "Both analyse a job step by step, but only the SWMS carries statutory obligations under WHS Regulations for high risk construction work, including that it exists before work starts, is complied with, is available for inspection and is reviewed when the work changes.",
          },
          {
            q: "Which of these refrigeration tasks would normally require a SWMS?",
            options: [
              "Changing a filter in a wall-mounted split system at bench height",
              "Live fault-finding on the control circuit of a packaged unit",
              "Ordering replacement parts from a wholesaler",
              "Completing a service report at the end of a job",
            ],
            answer: 1,
            explain: "Work on or near energised electrical installations is a listed category of high risk construction work, so a SWMS is required. A bench-height filter change involves none of the listed categories, and paperwork and purchasing are not construction work at all.",
          },
          {
            q: "Why is recording a measured value better than recording 'pass' on a test record?",
            options: [
              "It looks more professional to the client",
              "It is evidence: a value can be compared with the acceptance criterion and with future readings, whereas 'pass' records only an opinion",
              "Regulations prohibit the use of the word pass",
              "It allows the test to be repeated without the instrument",
            ],
            answer: 1,
            explain: "A recorded value of 1.7 MΩ can be checked against the required minimum, compared with the previous service to spot deteriorating insulation, and relied on by the next technician. 'Pass' asks the reader to trust a judgement they cannot verify.",
          },
          {
            q: "A colleague has left site with a personal lock still on an isolator. What is the correct action?",
            options: [
              "Cut the lock off, since the person has clearly finished for the day",
              "Follow the site's formal lock removal procedure: contact the holder, obtain management authorisation, have a competent person confirm the plant is clear, and document the removal",
              "Have the supervisor remove it without record, as supervisors have that authority",
              "Leave the plant isolated indefinitely until the person's next rostered shift, whatever the consequences",
            ],
            answer: 1,
            explain: "The lock is that person's guarantee that plant cannot be energised while they are inside it, so removal is a formal, authorised and documented process with a physical check that nobody is at risk. Cutting it off assumes what lockout exists to remove, and an unrecorded removal by a supervisor is the same shortcut with a title attached.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
