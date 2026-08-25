/* =========================================================================
   Course content, module 205 — R2.5 Service procedure.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 5 — Service procedure.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle, 5th edn — pub. AIRAH — Chapter 5, Service procedure",
    "Australia and New Zealand Refrigerant Handling Code of Practice (AIRAH) — leak testing, evacuation, charging, recovery and storage",
    "Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 (Cth) and Regulations 1995 — ARC refrigerant handling licence",
  ];

  const MODULES = [
    {
      id: "v2-service-procedure",
      stream: "v2",
      title: "R2.5 · Service procedure",
      blurb: "How a service call is actually run: safe refrigerant and cylinder handling, leak testing, contamination and evacuation, burn-out clean-up, charging, recovery, gauges, pump-down and lubricants.",
      lessons: [

        /* ============================================================== */
        {
          id: "service-technician-and-the-call",
          title: "The service technician and the service call",
          minutes: 11,
          simple: "A good service technician is not just someone who can undo a nut. They think before they touch, they follow the same order of steps every time, and they leave the job cleaner than they found it. Think of a doctor doing a proper examination instead of guessing at the first symptom. This lesson gives you the habits, and the running order of a service call from phone to final report.",
          refs: REFS,
          content: `
Refrigeration is a trade where the same fault can be fixed in twenty minutes or
chased for three days, and the difference is almost never the tools. It is the
technician's method. A few of the qualities below come naturally to some people,
but nearly all of them are learned deliberately, the way you learn to braze.

## What the trade expects of you

- **Problem solving.** Every diagnosis you make should trace back to refrigeration
  principles — pressures, temperatures, heat flow. Guesswork and parts-swapping
  are expensive and they do not teach you anything.
- **Curiosity.** Look at the valves, controls and components on a plant *before*
  it breaks down. Fault-finding is enormously easier when you already know how
  the thing is supposed to behave.
- **Judgement.** Knowing when to patch and when to replace is a commercial
  decision as much as a technical one. Labour is expensive, and spoiled stock or
  lost production can run into many thousands of dollars in a day.
- **Responsibility.** You own the decision and you own the work.
- **Intuition.** Experienced technicians appear to jump straight to the cause.
  That is not magic — it is a private priority list built from every job they
  have ever done. Build yours consciously.
- **Simplicity.** Look for the basic fault. Plenty of plants end up carrying a
  pile of modifications that only ever masked an original design or installation
  error. Step back and look at the whole system.
- **Thoroughness.** Failing to leak test, leaving a dust cap washer out, not
  cleaning a condenser, not aligning a pulley, not tightening a bolt — these are
  the small omissions that bring you back to the same site in a fortnight.
- **System.** Intuition may take you to the big fault; only systematic checking
  proves there is not a second one. Use maintenance checklists.
- **Neatness.** Most of your working life is spent in other people's homes,
  shops and factories. A mess left behind makes the customer doubt the work.
- **Time management.** Three visits to one job cost far more than one thorough
  visit. Speed matters, but it is worthless without everything above it. That
  said, when a plant needs a long settling-down period, a quick return visit
  after the next job often beats standing around.
- **Emotional control.** To most customers a technician is a necessary evil who
  is about to cost them money. Stay polite and courteous; it is what keeps the
  account.
- **Planning and risk awareness.** This industry combines high-voltage
  electricity with high-pressure fluids. Accidents come from carelessness and
  from failing to imagine what could go wrong.
- **Honesty.** There is no place in this trade for a technician who cannot be
  trusted with keys, stock or an invoice.

>! You cannot legally handle refrigerant in Australia without a licence. If you
>! are an apprentice or a student handling refrigerant as part of nationally
>! accredited training, you need an ARC trainee licence — either **Trainee**
>! (classroom and workplace) or **Trainee classroom** (classroom only).

## Running a service call

The order below is the general-purpose method. Experienced technicians shortcut
it on plant they know intimately; until then, work it in order.

1. **Read the history first.** Company records, the equipment manual, previous
   faults on that machine. Past service calls are the single best predictor of
   this one.
2. **Load the van deliberately** — the right refrigerant and the spare parts that
   suit that type of unit and its probable fault.
3. **Talk to the customer on arrival.** Ask what has been happening. This is
   priceless for intermittent faults that will not show themselves while you are
   standing there.
4. **Do a job safety analysis (JSA).** Look at the task, identify the hazards,
   decide the safest way to do it. It takes two minutes and it is the step that
   keeps you alive around live switchboards, hot brazing and pressurised gas.
5. **Use your eyes and ears before your gauges.** Slipping belts, a blocked
   condenser, filthy filters, oil stains, bearing or compressor noise, an iced
   evaporator.
6. **Fit gauges** and read system pressures. If the compressor will not run,
   go electrical instead — supply, fuses, overloads, controls and terminals for
   open circuits.
7. **Learn the plant.** Identify every control, relay, switch and valve before
   you start changing things.
8. **Decide what "normal" is.** With the compressor running, work out what the
   saturation temperatures *should* be for this application, then compare them
   with what the gauges are actually telling you. A pressure reading means
   nothing until you know the number you expected.
9. **Make the obvious repairs** — clean the condenser, replace the belt, defrost
   the coil — then keep going through the rest of the system. Trace it in one
   direction from a fixed starting point, say the liquid line, and check each
   component in turn.
10. **Fix each fault as you find it, and always ask why it happened.** A failed
    component is usually a symptom.
11. **When the room or cabinet is pulling down**, remove your gauges and cap and
    plug the service valves.
12. **Leak test everything**, even the parts you tested during the repair. More
    leaks come out of service valve caps and plugs than from anywhere else in
    the system.
13. **Report** — completion, or the further work required, preferably in writing.

Calls handed to you over the phone while you are on the road skip steps 1 and 2,
so squeeze every detail you can out of the dispatcher instead.

## Protecting the system through your tools

The two great enemies of a refrigeration system are moisture and dirt, and the
most common way they get in is on the technician's own equipment. Gauges, hoses,
charging lines, spare components and the van itself must be kept clean, dry and
capped. A set of hoses left open on the floor of the ute is a moisture injector
waiting for its next system.

## On the job

- Read the job history before you leave the branch, not in the car park.
- Predict the pressures before you fit the gauges — then the gauges tell you
  something.
- One systematic visit beats three quick ones.
- Cap your hoses. Every time.
- The job is not finished until the leak test and the report are done.
`,
          quiz: [
            {
              q: "Why does the standard service-call procedure put 'decide what the normal operating saturation temperatures should be' before comparing gauge readings?",
              options: [
                "Because gauges are unreliable until the system has run for an hour",
                "Because a pressure reading only has diagnostic meaning when you have an expected value to compare it against",
                "Because saturation temperature cannot be read from pressure on a modern refrigerant",
                "Because the low-pressure control must be bypassed first",
              ],
              answer: 1,
              explain: "A suction pressure of 320 kPa is neither good nor bad by itself — it is only low or high relative to what that application should produce. Technicians who skip this step end up chasing 'faults' that are normal operation, and missing real ones. Gauges are perfectly reliable; it is the interpretation that needs the reference point.",
            },
            {
              q: "A technician finishes a repair, tests the joints they brazed, and packs up without re-testing. Which specific risk does the procedure warn about?",
              options: [
                "Brazed joints commonly re-open as they cool",
                "The refrigerant charge changes overnight",
                "Service valve caps and plugs are the most frequent leak point of all, and they were disturbed after the joints were tested",
                "The vacuum pump oil will have absorbed moisture",
              ],
              answer: 2,
              explain: "The final leak test exists mainly because gauge ports, valve stem caps and plugs — all disturbed at the very end of the job — leak more often than any other part of a small system. Brazed joints do occasionally fail, but they were tested; the caps were fitted afterwards and never were.",
            },
            {
              q: "An apprentice wants to recover refrigerant from a training rig at TAFE and then do the same on a customer site during work placement. What licensing does that require?",
              options: [
                "No licence at all while under supervision",
                "A full ARC refrigerant handling licence in both cases",
                "An ARC Trainee licence, which covers both classroom and workplace handling",
                "An ARC Trainee classroom licence only",
              ],
              answer: 2,
              explain: "Two trainee licence types exist: 'Trainee classroom' covers handling in the classroom only, while 'Trainee' covers classroom and workplace. Because the work placement involves refrigerant on a customer site, the classroom-only licence is not enough. Supervision does not remove the licensing requirement.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "refrigerant-and-cylinder-safety",
          title: "Handling refrigerant and cylinders safely",
          minutes: 10,
          simple: "Refrigerant is not just gas in a bottle. Even the harmless-sounding ones push the oxygen out of a room, some of them burn, and a full cylinder left in the sun on a hot day carries enough pressure to fly through a brick wall if it lets go. This lesson covers the personal hazards, the law that governs handling, and the rules for storing, moving, heating and filling cylinders.",
          refs: REFS,
          content: `
Every gas except plain air is either toxic or asphyxiating. That is worth
sitting with for a moment, because it explains the single rule that covers all
refrigerants regardless of chemistry: **anything you add to the air in a room
lowers the proportion of oxygen in it**, and a suffocating atmosphere does not
smell, taste or look like anything. Wherever refrigerant or any volatile liquid
is handled, you need ventilation.

## Two different kinds of hazard

| Group | Examples | Main personal risk | Main regulatory driver |
|---|---|---|---|
| Natural refrigerants | R717 ammonia, R744 carbon dioxide, R290 propane, R600a isobutane | Flammable, explosive or asphyxiating; ammonia is also toxic and pungent | Work health and safety, AS/NZS installation rules |
| Fluorocarbons | R134a, R404A, R410A, R32, R1234yf | Asphyxiation and frost burns rather than acute toxicity | Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 and its Regulations |

Notice the trade-off. The natural refrigerants are not an environmental problem
but they will hurt *you*; the fluorocarbons are comparatively gentle on people
but are an environmental problem serious enough that Parliament legislated over
them. Handling scheduled fluorocarbon refrigerants in Australia requires a
current **refrigerant handling licence from the Australian Refrigeration Council
(ARC)**, and the work must be done within the Regulations. The mandatory parts of
the **Australia and New Zealand Refrigerant Handling Code of Practice** carry the
force of those Regulations; the non-mandatory recommendations in it are simply
good trade practice and you should follow them too.

>! A spray of liquid refrigerant on skin or in an eye causes immediate frost
>! burn. Safety glasses and gloves are not optional when you break a connection,
>! purge a hose, or crack a valve. Frost burn to the cornea can be permanent.

**Ammonia deserves its own note.** It has an enormous affinity for water — very
roughly 800 volumes of ammonia vapour will be absorbed into one volume of water.
That is why ammonia discharged through a drum of water is absorbed rather than
released, and it is also why an ammonia leak in a plant room finds the moisture
in your eyes, nose and lungs so aggressively.

Before you touch anything: **know which refrigerant is in the system**. Read the
nameplate and the cylinder label. The precautions, the leak detector you may
use, and even whether you are legally required to recover the charge all depend
on the answer.

## Cylinders: the part that kills people

On a hot day the pressure inside an R22 cylinder can exceed **3400 kPa**. If the
wall or the valve stem ruptures, the cylinder becomes a projectile capable of
killing someone, quite apart from the frost burns and blinding caused by the
escaping refrigerant.

1. **Store upright**, valves capped and leak-free.
2. **Store cool and out of the sun.** Surfaces in direct Australian sun can pass
   **65°C**, which takes R22, R717 and R507 above 3400 kPa — potentially above
   the cylinder's test pressure.
3. **Use the correct valve key and fittings.** A chewed-up spindle may refuse to
   open or close, and a weakened stem can snap off in your hand.
4. **Never heat any part of a cylinder above 50°C.** A bucket of warm water is
   the standard, accepted way to raise cylinder pressure. Direct flame, radiant
   heaters and uncontrolled contact heaters are prohibited. Indirect heating such
   as controlled-temperature airflow is only allowed where the control system is
   fail-safe.
5. **Leak-check cylinders** after every use, before storage, and at least every
   three months while in storage.
6. **Label everything clearly.**
7. **Never exceed the marked maximum gross weight**, and do not use a cylinder
   at all if the maximum gross weight is not marked on it.
8. **A cylinder owned by someone else** — manufacturer, wholesaler, hire company
   — may only be filled with the owner's permission. The same goes for
   transferring refrigerant between cylinders.
9. **Recovery cylinders that have held contaminated refrigerant** should be
   examined internally and cleaned before re-use, because acid and oil residues
   corrode and contaminate.
10. **Recovery cylinders must be labelled as recovery cylinders** and used only
    for the refrigerant marked on them.

>! Overfilling is the classic cylinder accident. Once a cylinder becomes
>! **liquid-full** there is no vapour space left to absorb expansion, so a small
>! temperature rise produces an enormous hydrostatic pressure rise — liquid
>! pressures can climb toward **7000 kPa gauge** and rupture the cylinder. Fill
>! by weight, on scales, to the limit in the Code. Never by pressure, never by
>! feel.

## Worked example: why the sun matters

A service van is left at a site with a part-used R22 cylinder lying on the tray
in the sun. Air temperature is 34°C, but the steel and the tray reach around
65°C. R22 saturation pressure at 65°C is over 3400 kPa gauge, against a cylinder
that may be tested to a similar order of pressure. The refrigerant did not
change; only its temperature did. Store cylinders upright, in the shade, secured
so they cannot roll or fall — and secure them in transit so a stem cannot be
knocked off.

## What to remember

- Any gas but air displaces oxygen; ventilate before you vent anything.
- Natural refrigerants hurt people, fluorocarbons hurt the atmosphere — both are
  regulated, and you need an ARC licence for the scheduled ones.
- Eye protection and gloves whenever a connection can spray.
- 50°C maximum on a cylinder, and warm water only.
- Fill by weight, never overfill, and never fill someone else's cylinder without
  permission.
`,
          quiz: [
            {
              q: "Why is a cylinder that has become liquid-full so dangerous?",
              options: [
                "The refrigerant decomposes into toxic gas once no vapour space remains",
                "With no vapour space to absorb thermal expansion, small temperature rises produce very large hydrostatic pressure rises",
                "The cylinder valve cannot be opened when the cylinder is liquid-full",
                "Liquid refrigerant corrodes the cylinder wall faster than vapour",
              ],
              answer: 1,
              explain: "Liquid is nearly incompressible. In a normally filled cylinder the vapour space compresses as the liquid expands with temperature, so pressure follows the saturation curve. Fill it liquid-full and there is nothing to give — pressure can run to around 7000 kPa gauge on a modest temperature rise, well past the cylinder's design. Decomposition and corrosion are real issues, but they are slow; this failure is sudden.",
            },
            {
              q: "A technician needs to speed up refrigerant transfer out of a cylinder on a cold morning. Which method is acceptable?",
              options: [
                "Playing a soft brazing flame over the base of the cylinder",
                "Standing the cylinder in a bucket of warm water, not above 50°C",
                "Wrapping the cylinder in an uncontrolled electric heating blanket",
                "Directing a radiant heater at the cylinder from one metre away",
              ],
              answer: 1,
              explain: "Warm water is the standard accepted method because water cannot exceed 100°C and a bucket at hand temperature keeps the cylinder well under the 50°C limit. Flames, radiant heaters and uncontrolled direct-contact heaters are prohibited — they heat one spot of the wall far past 50°C, weakening it while raising pressure. Indirect heating is only permitted where the control system is fail-safe.",
            },
            {
              q: "Why is the personal hazard profile of R290 (propane) treated differently from that of R134a?",
              options: [
                "R290 is a scheduled substance and R134a is not",
                "R290 is flammable and an asphyxiant, so the immediate risk is fire and oxygen displacement, while R134a's regulation is driven mainly by its environmental impact",
                "R134a is toxic and R290 is not",
                "R290 cannot cause frost burns",
              ],
              answer: 1,
              explain: "Natural refrigerants like propane and isobutane are not environmentally scheduled, but they burn and they displace oxygen, so the controls are about ignition sources and ventilation. Fluorocarbons like R134a are less acutely hazardous to a person but are controlled by the Ozone Protection and Synthetic Greenhouse Gas Management Act. Both will frost-burn skin, and both need eye protection.",
            },
            {
              q: "Which cylinder is legally unusable regardless of its condition?",
              options: [
                "One that has been stored for more than three months",
                "One with a plastic valve cap",
                "One with no maximum gross weight marked on it",
                "One that has previously held recovered refrigerant",
              ],
              answer: 2,
              explain: "If the maximum gross weight is not marked, there is no way to fill it safely by weight, so the cylinder must not be used. Long storage simply calls for a leak check every three months; a previously used recovery cylinder needs internal inspection and cleaning before re-use, not condemning.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "leak-testing",
          title: "Pressure testing and finding leaks",
          minutes: 15,
          simple: "A refrigeration system only works if the gas stays inside it, so testing for leaks is the job you will do more than any other. You pressurise the system with dry nitrogen — never oxygen, never acetylene — and then hunt for the escaping gas with soap, an electronic sniffer, a dye or your own senses. This lesson covers how to pressurise safely and how to find the leak once you have.",
          refs: REFS,
          content: `
Leak testing happens after installation, during every repair, after any component
change, and as the final act before you drive away. It is also the test most
often done badly, because it is the one where a technician is tempted to declare
victory early.

Two rules frame everything below. **Only a non-controlled gas may be used as a
test gas** — in practice dry nitrogen (chemical dye tracers are also permitted).
And **charging a known leaking system is illegal**: find it and fix it.

## Pressure testing a new installation

The purpose here is to prove the pipework *you* connected on site.

1. Remove and plug any control or relief valve that the test pressure would
   damage.
2. **Front-seat the compressor service valves** to isolate the compressor. High
   test pressures can damage the shaft seal, and on the high side can distort or
   even rupture compressor castings.
3. Open the liquid line isolation valve at the condenser and any other line
   valves. Open solenoid valves using the manual lifter, or by energising them.
4. Connect dry nitrogen to the discharge service port or the liquid line charging
   valve — through **an approved cylinder pressure regulator** *and* through a
   gauge manifold valve.

>! A nitrogen cylinder at room temperature can sit at around **14 000 kPa**.
>! That is roughly four times the pressure of a hot refrigerant cylinder. Never
>! connect nitrogen to a system without a regulator, and never leave the
>! regulator adjusting screw wound in when you crack the cylinder valve.

>! **Never use oxygen or acetylene** to pressure test or blow out a refrigeration
>! system. Free oxygen explodes on contact with oil — and there is oil in every
>! system you will ever touch. Acetylene explodes spontaneously under pressure
>! unless it is dissolved in acetone, which is why it lives in a special
>! cylinder. Either mistake is fatal.

5. **Set the regulator** to the saturation pressure of the system's refrigerant
   at **65°C for the high side** and **45°C for the low side**. Charge until the
   required pressure shows, checking *both* gauges in case one is faulty, then
   close the manifold and the cylinder shut-off valve.
6. Leak test every joint and connection with soap solution and watch for bubbles.
   Tapping each brazed joint with a hide mallet helps start a marginal leak that
   would otherwise appear later through vibration or thermal cycling.

>! Wear eye protection when tapping joints under test pressure. A sudden nitrogen
>! escape drives dust straight into your eyes.

7. **Repair properly.** A leaking joint gets cut out and re-made — never buttered
   over with more filler rod.
8. Re-pressurise and re-test, using soap bubbles or an ultrasonic detector.
9. Any further leak means relieving the pressure before repair, then recharging
   the test.
10. **Leave the system standing under pressure for about 24 hours** and look for
    an appreciable drop.
11. When the test passes, release the nitrogen, refit the controls and fittings,
    open the compressor service valves and connect the vacuum pump.

### Worked example: is that a leak or the weather?

System pressure moves roughly **21 kPa for every 6 K change in ambient
temperature**. Suppose you pressurise an R134a system at 4 pm on a 30°C day to
1790 kPa gauge (R134a saturation at 65°C) and return at 7 am to 1720 kPa.

- Overnight temperature fall: 30°C to 12°C, so 18 K.
- Expected pressure fall: 18 ÷ 6 = 3 increments, so 3 × 21 = **63 kPa**.
- Actual fall: 1790 − 1720 = **70 kPa**.

That is within the noise of ambient change and gauge resolution — this system is
probably tight. Had it fallen 400 kPa, no temperature argument would save it. For
the low side of the same system, the regulator would be set to R134a saturation
at 45°C, about 1060 kPa gauge.

### Pressurising a plant that has lost its charge

1. Look for the obvious first — oil stains, oil-caked dust, damaged fittings —
   and repair what you find.
2. Pressurise gently with dry nitrogen to about **70 kPa** and test. Mark any
   leak, reduce the pressure, then repair. Working at low pressure first means a
   large leak is found before you put full test pressure behind it.
3. Now pressurise to the 65°C high side / 45°C low side equivalents and test
   thoroughly with everything you have.
4. Repair, re-pressurise, re-test.
5. Only when it holds do you evacuate and recharge.

### Hydrostatic testing

Hydrostatic (liquid-filled) testing is used mainly on pressure vessels and on
water and steam pipework, not on refrigerant piping. Components and relief valves
that cannot take the test pressure come off, open ends are blanked, one
connection is left for the test, and the vessel is filled with a suitable fluid —
a chilled water line with water, for instance. Pressure is raised with a pump
bucket (a container with a hand pump and gauge, filled with the same fluid) to
the level set by the relevant Australian Standard, and held, typically 24 hours.
**Do not put water into refrigerant pipes or refrigerant pressure vessels.** If a
receiver has been tested with oil, every trace must be flushed out and the vessel
dehydrated before service.

## Finding the leak

Start with your senses. **Look** for oil, for dust stuck to an oil smear, for a
fractured tube. **Listen** — a big leak is audible. **Smell** — fluorocarbons are
nearly odourless but often carry a faintly sweet smell, while ammonia announces
itself unmistakably.

| Method | How it works | Best used for | Watch out for |
|---|---|---|---|
| Soap solution | Bubbles form at escaping gas | Pinpointing a leak already narrowed down; any positive-pressure system | Needs positive pressure; slow on very small leaks |
| Chemical / UV dye tracer | Liquid-charged tracer colours the leak point, UV types glow under a lamp | Very small leaks that take months to show | Dye purges out with gauge lines and stains the plant, confusing later tests |
| Electronic detector | Sniffer responds to halogenated vapour | General searching, hermetic systems | Extremely sensitive — reacts to exhaust fumes and foam insulation residues; always confirm with soap |
| Halide torch | Refrigerant burning near a red-hot copper ring turns the flame green | Legacy chlorinated refrigerants; understanding only | Produces poisonous halogen acids; needs shade and shelter; must never be used near hydrocarbons |
| Ultrasonic detector | Microphone hears the hiss of escaping gas | Any gas, any refrigerant | Noisy plant rooms; gives no confirmation of gas type |
| Immersion in water | Pressurised component submerged, bubbles observed | Factory and workshop testing | Impractical in the field |
| Vacuum (standing) test | Vacuum fails to hold or will not pull down | Proving a system is tight before charging | Tells you there is a leak, not where |
| Sulphur stick / indicator paper | White smoke or colour change in ammonia vapour | R717 plant only | Not applicable to fluorocarbons |

!FIG[vacuum-decay]

### Points that separate a good leak test from a bad one

- Move the sniffer **slowly** — most leaks are tiny and a fast pass misses them.
- Refrigerant is heavier than air and pools at the lowest point of a room, so a
  hit metres from the actual leak is common. Confirm every electronic hit with
  soap.
- Make sure there is **positive pressure** in the part you are testing. Nothing
  leaks out of a vacuum.
- Test with the **plant switched off** where you can. Fans blow escaping gas
  away from the leak, and a stopped plant lets the low side rise to a testable
  pressure.
- Never use a halide torch, or any other ignition source, on a system containing
  a hydrocarbon refrigerant.
- Ventilate when using a halide torch, and do not breathe the fumes.

## Leaks on domestic refrigerators

Domestic systems carry tiny charges — some as little as **150 grams** — so any
loss matters immediately. The low side normally runs only about **10 to 30 kPa
above atmospheric**, which means a small loss drops it *below* atmospheric, and
then the system starts drawing air and moisture in through the same hole the
refrigerant left by. That is the road to acid formation, contamination and
eventual burn-out.

Symptoms of a small loss: longer and longer running times with the evaporator
icing, a lower-than-normal suction pressure on the gauge, and a frost line that
recedes back along the evaporator. With a large loss the charge is gone quickly
and cooling stops altogether. Either way, if the leak was on the low side the
system must be evacuated and dehydrated; if on the high side, air may still have
been drawn in, so full evacuation follows the repair.

Where domestic leaks are found, roughly in order of frequency: copper-to-alloy
joints in the evaporator tubing (electrolytic corrosion — repairable with
compression fittings); corrosion pitting of the alloy evaporator surface;
silver-soldered joints in copper tube; the compressor charging valve; the
copper-to-steel suction line joint at the compressor; puncture holes from an
owner attacking ice with a screwdriver, or corrosion from spilled food acids;
discharge pipe cracks at the condenser from vibration; and seam tube opening
under pressure, which gives very small leaks that only show at high head
pressure.

To hunt one down: defrost the evaporator and make sure the system is
pressurised, look for oil, use soap to confirm, and **check the refrigerant type
first** — many domestic units now use R600a and need a detector suited to
hydrocarbons. If it still hides, warm the evaporator gently with hot water or a
hot cloth and test again. Raising the pressure using system refrigerant is a last
resort, and that refrigerant must be recovered and the system evacuated
afterwards. And remember the logic: if refrigerant has been lost, there *is* a
leak. Keep looking.
`,
          quiz: [
            {
              q: "Why must oxygen never be used to pressure test a refrigeration system?",
              options: [
                "It dissolves in the refrigerant and cannot be evacuated",
                "Free oxygen explodes on contact with the oil that is present in every system",
                "It attacks copper tubing",
                "Its cylinder pressure is too low to reach test pressure",
              ],
              answer: 1,
              explain: "Compressed oxygen and hydrocarbon oil react violently — and there is always oil in a refrigeration system. Acetylene is the other prohibited gas, because it detonates under pressure unless dissolved in acetone. Dry nitrogen is inert, dry and non-controlled, which is exactly why it is the test gas.",
            },
            {
              q: "A system is pressurised with nitrogen at 3 pm at 32°C and read again at 8 am at 14°C. The gauge has fallen 60 kPa. What is the most reasonable conclusion?",
              options: [
                "A significant leak — 60 kPa is far too much loss",
                "The gauge is faulty, since pressure cannot fall without a leak",
                "The fall is consistent with the 18 K temperature drop (about 21 kPa per 6 K), so the system is probably tight",
                "Nitrogen has been absorbed into the compressor oil",
              ],
              answer: 2,
              explain: "System pressure changes roughly 21 kPa for every 6 K of ambient change. An 18 K fall is three increments, about 63 kPa, so a 60 kPa drop is exactly what a tight system should do overnight. This is why the 24-hour standing test must always be interpreted alongside the ambient temperature — otherwise you condemn good pipework and chase leaks that do not exist.",
            },
            {
              q: "An electronic leak detector alarms strongly near the floor under a cool room evaporator, but soap testing finds nothing at that point. What is the most likely explanation?",
              options: [
                "The detector is faulty and should be replaced",
                "Refrigerant vapour is heavier than air and has pooled at the low point, so the leak is elsewhere and above",
                "Soap solution does not work on low-side leaks",
                "The system pressure is too high for soap testing",
              ],
              answer: 1,
              explain: "Fluorocarbon vapour sinks and collects at the lowest point of a space, so a detector will happily alarm metres from the actual leak. That is exactly why every electronic hit is confirmed with soap at a specific joint. Electronic detectors are also famously sensitive to exhaust gas and foam insulation residues, which is another source of false positives.",
            },
            {
              q: "Why must a halide torch never be used on a domestic refrigerator that runs on R600a?",
              options: [
                "R600a does not contain a halogen so the torch cannot detect it, and the open flame is an ignition source for a flammable refrigerant",
                "The copper ring is destroyed by isobutane",
                "R600a systems operate in a vacuum",
                "The flame turns the same colour for R600a as for air, so results are ambiguous",
              ],
              answer: 0,
              explain: "Two independent reasons, and the safety one is decisive: isobutane is flammable and a halide torch is an open flame. On top of that the torch works by burning halogenated refrigerant near red-hot copper, and a hydrocarbon has no halogen to detect. Use a detector rated for hydrocarbons.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "contamination",
          title: "Contamination: moisture, air, acid and heat",
          minutes: 11,
          simple: "Most big refrigeration breakdowns do not start with a broken part. They start with a few drops of water or a little air getting inside, which turns into acid, which eats the compressor from the inside over months. Think of it as rust in an engine you can never open up and look at. This lesson explains the chain reaction, how the contamination gets in, and what it does.",
          refs: REFS,
          content: `
The majority of serious refrigeration failures trace back to chemical
contamination of the refrigerant and the oil. Moisture, air and the acids they
create are the culprits, and that is the entire reason evacuation and dehydration
exist as trade procedures. A system can seem to "get away with it" for six or
twelve months. That is not success — a clean-up has to last the working life of
the plant.

## The three contaminants

**Moisture** is a threat to every system except ammonia plant, where small
quantities are tolerated because water and R717 mix so readily. In a fluorocarbon
system, water reacts with the refrigerant to form mineral acids such as
hydrochloric and hydrofluoric acid, and indirectly, through oil breakdown, forms
organic acids as well. Even a minute quantity starts the chain reaction.

**Air** cannot be tolerated in any system. It cannot condense at system
conditions, so it collects in the top of the condenser and receiver, adding its
own partial pressure to the condensing pressure. The result is high head
pressure, lost capacity, and — worst of all — high discharge temperature, which
is what breaks the oil down and manufactures acid. Large plants that run below
atmospheric pressure are normally fitted with a purging device, manual or
automatic, that separates air from refrigerant and expels it.

**Acid** is the product, and the destroyer.

!SIM[See what non-condensables do to the gauges](fault=nonCondensables)

## How moisture gets in — four doors

- **Poorly dehydrated new equipment.** Factory dehydration is generally
  trustworthy, but transit damage or careless storage lets air and moisture back
  in. Re-evacuating new components is cheap insurance.
- **Field assembly and service.** This is the big one. In humid weather a system
  left open for half an hour can absorb enough moisture to cause trouble, and in
  the heat, sweat from your hands or forehead is worse still. Components removed
  for service soak up moisture even faster, because their internal surfaces are
  coated in dry, thirsty oil. The worst case of all is a **TX valve**: it comes
  off the plant wet and cold, and unless it is dried and warmed to room
  temperature before you open it, it condenses fresh water on every internal
  surface while you work.
- **Wet oil or refrigerant.** Rarely from the manufacturer. Usually from oil
  tins left unsealed in the van, part-used cans, or refrigerant decanted into a
  contaminated service cylinder.
- **Leaks.** On a low-temperature low side, only a small loss is needed before
  evaporator pressure falls below atmospheric — after which air, and the surface
  water or ice around the leak, is drawn in. High-side leaks are usually caught
  earlier, but if the charge went all the way down, assume air got in and
  evacuate fully after the repair.

## What the contamination does

### Copper plating

Acids formed from water and refrigerant, with heat as the catalyst, dissolve
copper from the tubing. The copper is redeposited on the hot metal surfaces —
bearings, cylinder walls, valves — and the acid is released again to repeat the
cycle. The plating gradually fills the running clearances, excludes the oil film,
and the compressor seizes.

### Sludge

Sludge is the residue of everything corrodible in the system plus the carbon
released as the oil decomposes. Before it seizes the compressor it circulates,
blocking strainers, driers and refrigerant control valves. Again, heat drives it:
high head pressures from a dirty or undersized condenser, high ambient, or air in
the condenser all raise discharge temperature and accelerate breakdown.

**Mineral oil begins to break down above 100°C, and the rate doubles for every
10 K above that.** The consequences compound frighteningly:

| Discharge temperature | Relative oil breakdown (parts per million) |
|---|---|
| 110°C | 2 |
| 130°C | 8 |
| 150°C | 32 |
| 170°C | 128 |
| 190°C | 512 |
| 210°C | 2048 |

Read that as a doubling ladder rather than a lookup table: **every 10 K you let
the discharge temperature climb doubles the damage rate**. Discharge
temperatures in this range are genuinely reachable with R22 and R717 on freezer
duty, or whenever suction superheat is excessive. R134a and R507 are much less
likely to exceed 110°C.

### Freeze-up of refrigerant controls

Water circulating in the refrigerant is carried to the first point in the system
below 0°C — normally the expansion valve orifice — where it freezes and blocks
flow. The diagnostic is simple and elegant: **warm the valve body above 0°C**. If
flow restarts, it was ice, not sludge. Having proved moisture, fit a new drier
immediately, or the same water will circulate and freeze again.

>! Polyol ester (POE) and polyalkylene glycol (PAG) lubricants are strongly
>! hygroscopic. Once moisture is in them, **evacuation alone will not remove
>! it** — the water is chemically held in the oil. Filter-driers are the only
>! practical way to get it back out. This is why HFC systems demand generously
>! sized, high-efficiency driers and disciplined open-time.

### Acid corrosion of valves and windings

Acid attacks polished valve seats, so they leak. Worse, it embrittles the valve
reeds themselves — a corroded reed can be snapped between your fingers, which is
impossible with a new one. Reeds break inside the compressor, expensively.

In a hermetic or semi-hermetic machine, acid attacks the motor winding
insulation. Insulation resistance falls, then arcing (corona) begins, and finally
the winding short-circuits and burns out. The heat of that arcing accelerates oil
breakdown, so carbon sludge is pumped out through the whole system before the
motor finally stops. That is why a burn-out contaminates far more than the
compressor, and why every affected component must be cleaned out.

### Heat, and where the plant lives

Corrosion rate follows temperature. Equipment in tropical Australia has a
markedly shorter life than the same equipment in Hobart or Melbourne, and a
compressor in a hot, unventilated plant room dies before an identical one in a
cool room. Every degree you take off discharge temperature is life added.

### Metal filings and oxides

Copper and iron filings act as catalysts for the whole chain reaction. They come
from manufacturing and from installation — and above all from **brazing without a
dry nitrogen purge**, which grows a black copper-oxide scale on the inside of
every joint you make. That scale flakes off and circulates. Purging with nitrogen
while brazing is not fussiness; it removes one whole link in the chain.

## What to remember

- Moisture plus refrigerant plus heat equals acid. Acid plus a hermetic motor
  equals burn-out.
- Air is non-condensable: it raises head pressure, and head pressure raises
  discharge temperature, and discharge temperature makes acid.
- Every 10 K above 100°C doubles the rate of mineral oil breakdown.
- Ice at the TX valve is diagnosed by warming the valve body — then fit a drier.
- POE and PAG oils hold water chemically; only a filter-drier gets it out.
- Braze under a nitrogen purge, and keep the system open for as little time as
  possible.
`,
          quiz: [
            {
              q: "A TX valve is removed from a running freezer for inspection on a humid summer day. Why is it the single worst component to open carelessly?",
              options: [
                "Its internal spring corrodes on contact with air",
                "It arrives wet and well below room temperature, so it condenses fresh water on every internal surface unless it is dried and warmed first",
                "Its superheat setting drifts when exposed to atmosphere",
                "The bulb charge escapes when the valve is opened",
              ],
              answer: 1,
              explain: "A cold surface in humid air is a condensing surface — the same physics as a cold drink glass. The valve is the coldest thing on the bench and its internals are coated in moisture-hungry oil, so it collects liquid water where you cannot see it. Dry it and bring it to room temperature before opening.",
            },
            {
              q: "A compressor's discharge temperature rises from 130°C to 150°C after a condenser fouls up. Roughly what happens to the rate of mineral oil breakdown?",
              options: [
                "It increases by about 15%",
                "It roughly doubles",
                "It roughly quadruples",
                "It is unchanged, since breakdown only starts above 200°C",
              ],
              answer: 2,
              explain: "The rate doubles for every 10 K above 100°C, so a 20 K rise is two doublings — about four times the breakdown rate. Breakdown starts above 100°C, not 200°C, which is why a dirty condenser is not a cosmetic problem: it is silently manufacturing acid.",
            },
            {
              q: "A restriction is suspected at the expansion valve. Warming the valve body restores refrigerant flow. What has been proved, and what is the correct next step?",
              options: [
                "Sludge was blocking the valve; clean or replace it",
                "Moisture froze at the orifice; fit a new filter-drier immediately or it will refreeze",
                "The valve superheat setting was too low; readjust it",
                "The bulb had lost its charge; replace the valve",
              ],
              answer: 1,
              explain: "Only ice melts when the body is warmed — sludge does not care about temperature. So the system contains free water, which was carried to the first point below 0°C. Simply thawing it fixes nothing: the same water circulates and refreezes. A new drier is the actual repair.",
            },
            {
              q: "Why does the fact that POE oil is hygroscopic change your evacuation strategy on an HFC system?",
              options: [
                "POE requires a shallower vacuum than mineral oil",
                "Moisture held in POE is not removed by evacuation alone, so a generously sized filter-drier and minimum open time are essential",
                "POE boils off during evacuation and must be replaced afterwards",
                "POE prevents the vacuum pump from reaching 67 Pa",
              ],
              answer: 1,
              explain: "POE holds water chemically rather than merely mixing with it, so pulling a deep vacuum will not drag it out the way it would with free water. That is why HFC practice is short open times, capped components and a high-efficiency drier — the drier, not the pump, is what finally dries the oil.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "evacuation",
          title: "Evacuation and dehydration",
          minutes: 15,
          simple: "Before a system gets its refrigerant, everything else has to come out — air, nitrogen and especially water. You do that with a vacuum pump, which lowers the pressure until water boils away at room temperature. Doing it properly is mostly about the right pump, short fat hoses and enough patience. This lesson covers the pump, the hookup, the three accepted methods and the test that proves it worked.",
          refs: REFS,
          content: `
The aim of every evacuation is to reduce contaminants — air, water and water
vapour, non-condensable gases such as leftover nitrogen, and any cleaning fluids
— to below the level where they cause damage. A refrigeration system performs
best containing nothing but the specified refrigerant and its lubricant. Even
ammonia, which tolerates water better than any other refrigerant, works better
without it.

>! The system refrigerant must be **recovered before evacuation**. Venting a
>! scheduled refrigerant to atmosphere to make way for the vacuum pump is
>! illegal, and it is one of the fastest ways to lose a licence.

## The pump

A high-vacuum pump capable of pulling down to around **1.3 Pa absolute (roughly
0.010 mm Hg)** is a precision tool, not a piece of site gear. For general service
work the rotary oil-sealed mechanical pump is the practical choice, available as
a single-stage or as a **compound (two-stage)** pump where the discharge of the
first rotor becomes the suction of the second. Size for size the compound pump
pulls down much faster; both types have an ultimate vacuum rating well below
anything you actually need.

### Sizing — and why bigger is not better

For small units and air conditioning up to about **20 kW refrigerating capacity,
a pump of about 1 litre per second is adequate**. Long line runs and systems over
20 kW want something bigger. But do **not** put an oversize pump on a small
system, and the reason is genuinely counter-intuitive.

Pull a hard vacuum on a small dish of water and watch: within about five minutes,
so much water boils off that the latent heat taken from what remains chills it to
0°C and it **freezes**. Now imagine water trapped in motor windings or a low
pocket of pipe. An excessive evacuation rate freezes it instead of vaporising it,
the gauge drops beautifully to the target vacuum, and the technician packs up
convinced the system is dry — with a lump of ice still inside it. A smaller pump
vaporises the water slowly enough that heat leaking in from the surroundings
keeps it liquid.

There are three ways around the problem:

- Hold the system at a high vacuum for several hours — up to 24 hours if there is
  a lot of moisture.
- Warm every component likely to trap moisture, which both prevents freezing and
  speeds vaporisation.
- Use a multiple (triple) evacuation method, described below.

### Using and caring for the pump

- Use only the correct grade of vacuum pump oil from the maker's handbook — never
  refrigeration oil.
- After a burn-out, fit a filter between the system and the pump so contaminants
  never reach it.
- Where a system is very wet (a chiller that froze and split its tubes, for
  instance), fit a **cold trap** between system and pump.
- Check the oil level with the pump **running**, against the sight glass mark.
- If the pump seems weak, blank it off from the system, put the vacuum gauge
  straight on its inlet and see what it can pull. If it cannot make the number,
  change the oil — that usually restores it.

### The gas ballast

Vapour coming out of a wet system tends to condense inside the pump and mix with
the oil. Contaminated oil ruins the pump's ultimate vacuum and then corrodes its
internals. The gas ballast admits a small, adjustable bleed of atmospheric air
into the exhaust chamber each cycle, so the vapour is swept out as vapour instead
of condensing.

| Stage of evacuation | Ballast valve setting |
|---|---|
| Starting the pump | Closed (otherwise oil spits from the ballast orifice on the first revolution) |
| Once running, down to about 333 Pa absolute | Wide open (roughly 1.5 turns anticlockwise) |
| From 333 Pa down to about 133 Pa absolute | About a quarter open |
| Below 133 Pa, to reach ultimate vacuum | Closed — a pump cannot reach its ultimate vacuum with the ballast open |

## The hookup — and why hoses matter more than you think

For serious evacuation work a purpose-built high-vacuum manifold is used: four
vacuum-tight hand valves connected with **copper tube of at least 10 mm**, flared
or brazed. Ordinary charging hoses are the wrong material — rubber and plastic
are volatile under vacuum, deteriorate and leak. Two valves go to the high and
low sides of the system, one to the pump, one to the vacuum gauge, plus a
connection for the charging cylinder.

Working method: open the system valves and the pump valve and pull the
preliminary vacuum; when the pump stops discharging much gas, open the gauge
valve to read what has actually been achieved. Around 133 Pa, **close the pump
valve** and watch the gauge:

- **Rapid pressure rise** — a leak, in the system or in your connections. Isolate
  and pressurise to leak test; electronic detectors suit hermetic systems.
- **Slow pressure rise** — the system is still de-gassing: refrigerant dissolved
  in the oil and free water coming off slowly. Carry on evacuating.

To prove the leak is not in your own gear, pull a vacuum on the manifold alone
with the system valves closed and the charging line capped, stop the pump and
seal its discharge port so air cannot leak backwards through it, and watch for
the same rapid rise.

### Line size and length

This is where most field evacuations are quietly ruined. A vacuum pump can only
pump the molecules that reach it, and at deep vacuum there is almost no pressure
difference left to push them along. Think of a batsman who can only score off
balls the bowler actually delivers — restrict the delivery rate and the scoring
rate collapses no matter how good the batsman is.

The numbers are brutal: it takes about **eight times as long** to pull a given
vacuum through a 6 mm line as through a 12.5 mm line, and **twice as long**
through a 2 metre line as through a 1 metre line.

| Line length | Time with 6 mm tube | Time with 10 mm tube |
|---|---|---|
| 0.3 m | 12 min | 6 min |
| 0.6 m | 22 min | 8 min |
| 1 m | 33 min | 11 min |
| 2 m | 60 min | 16 min |
| 3 m | 90 min | 20 min |

(Times to reach 6.6 Pa / 50 microns with a 1 L/s pump.)

The rules that follow are simple:

- Match pump size and line size to the system volume and the time you have.
- **Connect to both the high and low sides.** You cannot evacuate through
  compressor valve reeds or a capillary tube.
- Keep lines as short as possible, minimum 10 mm diameter.
- Read the vacuum with the pump valved off, or you are measuring the vacuum at
  the pump instead of in the system.

### The cold trap

Water that reaches the pump oil limits the vacuum the pump can produce. A small
amount is pumped back out of the oil quickly enough; a lot means draining and
replacing the oil. Where contamination is heavy, a cold trap in the line between
system and pump is better still. A laboratory glass trap sitting in a vacuum
flask of dry ice with alcohol or acetone works for small systems and has the
advantage that you can see the ice collecting; for big plant a trap is easily
fabricated from 100 mm and 150 mm steel pipe with vacuum-tight welded joints.
The trap does two jobs — it keeps water out of the pump, and the large
temperature difference it creates actively pulls water vapour out of the system.

## The three evacuation methods

**1. Deep vacuum (50 to 100 microns, 6.6 to 13 Pa).** A single deep pull-down,
and the surest way to a system free of air and liquid water. It takes longer
because reaching below 13 Pa is slow, and it needs a good pump and a thermocouple
or electronic vacuum gauge. Run a drop test once or twice on the way to confirm
the system is tight and really reaching the target. When it passes, charge.

**2. 500 microns (67 Pa) with one purge.** The basic multiple-evacuation method,
faster, and workable with a thermocouple gauge.

1. Pull down to about 500 microns (67 Pa).
2. Break the vacuum with dry nitrogen up to atmospheric pressure.
3. Release the nitrogen.
4. Evacuate again to 500 microns.

The final drop test should show a rise of no more than about **37 Pa in three
minutes**. On systems with very long lines, add a second purge and third
evacuation.

**3. 50 000 microns (6660 Pa) with two or more purges.** Needs no specialist
equipment — even a modified compressor used as a rough pump and the normal
service gauges will do. Pull the best vacuum the pump can manage, break it with
dry nitrogen, release, evacuate again, break to atmospheric with nitrogen and
leave it standing for an hour, release, evacuate again, then break the vacuum
with refrigerant and charge.

Why purging works: the first evacuation removes perhaps 90% of the air and
moisture vapour. The nitrogen purge mixes with the remaining 10% and carries it
out on the second evacuation, leaving about 1%, which is diluted again and
removed on the third. **The limitation is important**: liquid water will not
readily vaporise at 6660 Pa, so on a genuinely wet system this method achieves
nothing unless components are heated and enough time is allowed.

### Heat, time and temperature

Adding heat shortens every evacuation. Heat lamps, electric heaters or warm air
blowers on crankcases and evaporators all help, but **do not exceed 45°C** — that
is already hot enough to vaporise water at 6660 Pa, and more heat starts risking
components. On an installed system the evaporator is often much colder than
everything else, and that is exactly where the moisture has gone, so warm it.

### The drop test

The drop test is the only honest proof of evacuation. Pull the system down to
50 microns (6.6 Pa), **close the manifold valve to isolate the pump** — never
rely on a switched-off pump to hold a vacuum — and watch.

| Result | Verdict |
|---|---|
| Rise no more than about 300 microns (40 Pa) in 3 minutes | Evacuation complete |
| Slow rise that levels off | Moisture still boiling off — keep pumping |
| Steady climb that does not level off | Leak — the system is drawing air in |

Design engineers and government authorities commonly specify a far harder
version: hold the vacuum for **24 hours** with a rise not exceeding about 700 Pa
before the system is accepted as dry.

!FIG[vacuum-decay]

## Evacuating a domestic refrigerator

Domestic work has to be quick or it is uneconomic for the customer. Check the
label first — many domestic units now run **R600a (isobutane)**, which is not a
controlled substance and so does not legally require recovery, but *is*
flammable, so the charge must be disposed of safely and away from ignition
sources.

If the system has been open, fit a new filter-drier. Then, where the repair was
done cleanly, a full dehydration is usually unnecessary:

1. Recover all refrigerant from the system.
2. Open the compressor charging valve.
3. Connect the vacuum pump.
4. Set the pump up and open its discharge valve.
5. Start the pump, then slowly open the suction valve and the valves to the
   compressor. Watch for oil foaming and throttle the valve until the pump runs
   smoothly.
6. Open the ballast valve, closing it progressively as system pressure falls.
7. Hold at least **67 Pa (500 microns) for 20 minutes**, then valve off the pump
   and watch for any pressure rise, which would mean a leak.
8. If it holds, admit dry nitrogen until the system is slightly above
   atmospheric, leave it a few minutes, release it and re-evacuate. The nitrogen
   carries trapped contaminants out with it.
9. After a further 20 minutes under good vacuum, close off and admit enough of
   the correct refrigerant to put a slight positive pressure in the unit. The
   pump can now be disconnected and the charge weighed in on digital scales or
   metered from a graduated charging cylinder.

## What to remember

- Recover first. Never vent to make room for the pump.
- 1 L/s suits units up to about 20 kW; an oversize pump on a small system can
  freeze the very water you are trying to remove.
- Connect to both sides, keep hoses short and at least 10 mm, and read the gauge
  with the pump valved off.
- Ballast open on the way down, closed for the final pull.
- The drop test, not the clock, says when you are finished.
`,
          quiz: [
            {
              q: "Why is it a mistake to use a large, fast vacuum pump on a small domestic system that may contain trapped water?",
              options: [
                "The pump will draw oil out of the compressor",
                "Rapid evacuation can freeze the water instead of vaporising it, so the gauge shows a good vacuum while ice remains inside",
                "Large pumps cannot reach 500 microns",
                "The system pipework will collapse under the vacuum",
              ],
              answer: 1,
              explain: "Boiling water under vacuum takes latent heat from the water left behind. Pull hard enough and the remainder chills to 0°C and freezes; ice has very little vapour pressure, so the gauge falls nicely and you believe the system is dry. A slower pull lets ambient heat flow in and keep the water liquid — or warm the components, or use the triple-evacuation method.",
            },
            {
              q: "A technician evacuates through 3 metres of 6 mm hose and reaches 6.6 Pa at the pump inlet in 20 minutes. What is wrong with concluding the system is evacuated?",
              options: [
                "Nothing — the target vacuum was reached",
                "The reading is at the pump, and a long, narrow line means the system itself is at a much poorer vacuum; the pump must be valved off and the gauge read on the system side",
                "6.6 Pa is not deep enough for any system",
                "Hoses of 6 mm cannot pass water vapour at all",
              ],
              answer: 1,
              explain: "At deep vacuum there is almost no pressure difference to move molecules, so a restrictive line lets the pump achieve a fine vacuum locally while the system stays far above it. Through 3 m of 6 mm tube the same job needs around 90 minutes, against 20 minutes with 10 mm. Always valve off the pump and read the system side.",
            },
            {
              q: "During a drop test the vacuum rises quickly at first, then levels off and stops climbing. What does this indicate?",
              options: [
                "A leak that will keep rising to atmospheric pressure",
                "Residual moisture still vaporising in the system — continue evacuating",
                "The vacuum gauge is faulty",
                "The system is dry and ready to charge",
              ],
              answer: 1,
              explain: "A leak keeps feeding air in, so the pressure climbs steadily until it reaches atmospheric. Moisture boiling off raises the pressure only until the vapour and remaining liquid reach equilibrium, so the trace flattens. Keep pumping — and consider warming the evaporator, where moisture usually hides.",
            },
            {
              q: "Why does the 50 000 micron (6660 Pa) triple-evacuation method fail on a genuinely wet system unless heat is added?",
              options: [
                "Nitrogen will not mix with water vapour at that pressure",
                "Liquid water will not readily vaporise at 6660 Pa, so it stays in the system while the gas is purged around it",
                "The rough pump cannot pass water vapour",
                "The purges dilute the water rather than removing it",
              ],
              answer: 1,
              explain: "The purging principle works on vapour: nitrogen mixes with residual vapour and carries it out, cutting contamination roughly 90%, then to 1%, then lower. But liquid water needs a much deeper vacuum, or heat, before it will boil at ambient temperature. Warm the components (never above 45°C) and allow time, or use the deep vacuum method instead.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "burn-out-cleanup",
          title: "Motor burn-out clean-up — and why it happened",
          minutes: 14,
          simple: "When a hermetic compressor motor burns out, it does not just fail — it pumps acid and carbon sludge through the whole system before it stops. Fitting a new compressor without cleaning that mess out is like putting a new engine into a car with dirty oil lines. This lesson covers proving the burn-out, judging how bad it is, cleaning up, and finding the reason so it does not happen again.",
          refs: REFS,
          content: `
A burn-out is the end point of the contamination chain: acid destroys the winding
insulation, arcing starts, the winding shorts, and the heat of the arc breaks the
oil down into carbon sludge which is pumped throughout the system before the
motor finally dies. If those contaminants are left in the components you keep,
the replacement compressor will burn out too — often within weeks. The
recommendations below are the ASHRAE-derived minimum; anything less carries an
unacceptable risk of a repeat. Cleaning and flushing a contaminated system is
also covered by the Refrigerant Handling Code of Practice.

Scope: this procedure covers reciprocating and rotary sealed compressors. For
centrifugal and screw machines, follow the manufacturer. Do not apply it to units
under warranty without the manufacturer's approval.

## Step 1 — Prove it is actually a burn-out

| Check | Tool | What it tells you |
|---|---|---|
| Supply voltage | Multimeter | Whether the motor was fed within its design limits |
| Compressor shell temperature | Hand / thermometer | If it is not cool to touch, an internal overload may simply be open |
| Insulation resistance to earth | Megger | Readings should exceed **1 megohm**; a healthy winding reads far higher |
| Winding resistance | Accurate ohmmeter | Compare against the manufacturer's figures for that model |
| Smell on opening | Your nose | A burnt-out system gives a characteristic scorched odour |

An overheated compressor sitting on an open internal overload will look
electrically dead and come back to life when it cools. Prove the difference
before you condemn a compressor.

## Step 2 — Safety

>! Decomposed refrigerant produces toxic gases. When you open a burnt-out
>! system, ventilate and stay out of the vapour path.

>! The oil and the recovered refrigerant from a burn-out can be strongly acidic.
>! Wear rubber gloves, eye protection and protective clothing when recovering,
>! stripping and cleaning. Acid burns from compressor oil are a real and common
>! injury in this trade.

## Step 3 — Mild or severe?

Classifying the burn-out decides how much work follows.

| Test | Severe result |
|---|---|
| Acid test kit on an oil sample | Acid number above **0.05** |
| Colour of the oil | Discoloured or black |
| Smell of a refrigerant sample | Strong burnt odour |
| Inspection of suction line at compressor, and liquid line drier | Any carbon deposits |

If none of these show up, treat it as **mild**.

## Step 4 (i) — Clean-up after a mild burn-out

In a mild burn-out the contaminants stayed largely inside the compressor and
leave with it. What remains will be picked up by a liquid line filter-drier.

1. On a system without service valves, fit a line-piercing valve and recover the
   charge. On larger systems with valves, close the valves that will trap the
   refrigerant.
2. Remove the failed compressor and fit the replacement to the maker's
   instructions.
3. Evacuate the compressor.
4. Open the valves and pump the system down if the charge is being kept in the
   system. Remove the original drier and fit an **oversize** replacement.
5. Recharge as required.

Mild burn-outs usually come from severe supply fluctuations or a discrete
electrical fault — a broken terminal lead, a wire damaged in assembly, a faulty
internal overload — rather than from acid slowly eating insulation. The motor
may be wrecked internally, but there was no time for contaminants to circulate.

## Step 4 (ii) — Severe burn-out, systems under 20 kW

1. Remove **all** refrigerant from the system by recovery.
2. Fit a **burn-out drier in the suction line** as well as an oversize liquid
   line drier. The suction drier is what protects the new compressor from the
   contamination now sitting in the evaporator. Fit a **pressure tap upstream**
   of the suction filter-drier so you can measure pressure drop across it, and
   change the drier when that drop exceeds **20 kPa**.
3. Check the expansion valve or capillary and clean or replace as necessary. A
   leaking refrigerant control will destroy the new compressor by liquid
   flood-back.
4. Remove the burnt-out compressor and fit the replacement. It is usually worth
   replacing the suction and discharge lines as far as the first bends, or about
   **300 mm**, to get the carbon and sludge deposits out — more if the deposits
   run further.
5. Evacuate to the manufacturer's recommendations.
6. Recharge and commission in accordance with the Refrigerant Handling Code of
   Practice.

## Step 4 (iii) — Severe burn-out, systems over 20 kW

Large systems get the same approach with a **replaceable-core** suction line
burn-out drier, and the cores are changed as often as needed until the system is
genuinely clean. That means a follow-up procedure, not a single visit.

1. Save the charge by closing the service valves (fit a line-piercing valve to
   recover it if there are none). **If the condenser is water-cooled, or the
   evaporator cools water, the water must be flowing or drained** — otherwise
   the falling refrigerant pressure will freeze and burst the tubes.
2. After recovery, fit the replaceable-core filter-drier in the suction line.
   Swab out or replace any line carrying carbon deposits.
3. Provide a means of taking oil samples in future.
4. Install the replacement or repaired compressor.
5. Evacuate the compressor and any component not holding refrigerant with a
   high-vacuum pump.
6. Open the service valves and pump the system down with the new compressor.
7. Remove the old liquid line drier and fit a new oversize one. Inspect solenoid
   valves, refrigerant controls, line valves and controls for cleaning or
   replacement.
8. Run the system, watching pressure drop across the suction burn-out drier and
   changing the core when needed.
9. Watch head pressure for **non-condensables**, which the burn-out itself can
   generate and which are now mixed with the original refrigerant. Purging the
   condenser after a 20-minute off period may clear them — recovered, not vented.
10. **After 8 to 24 hours, take an oil sample and acid-test it.** Dirty or acidic
    oil means change the suction core and re-test every 24 hours. Where possible
    drain and replace the compressor oil each time you change a core — the longer
    the system stays contaminated, the more damage the new compressor takes.
11. When the acid reading is below **0.05** and the oil is clean, remove the
    suction filter-drier entirely, replace the liquid line filter-drier, and fit a
    moisture indicator in the liquid line. **Do not fit the indicator earlier** —
    residual acid destroys the indicator element.
12. Recheck oil colour and acidity **within two weeks** to see whether another
    liquid line drier change is needed, and repeat later if necessary.

**Special cases.** On a heat pump, inspect the four-way reversing valve for
carbon and corrosion, and fit the clean-up drier between the four-way valve and
the compressor. On a critically charged system, allow for the extra volume of an
oversize liquid line drier when you set the charge. Use a high-vacuum pump for
any vacuum deeper than 6660 Pa, together with the triple evacuation method.

## Taking oil samples

Most acid tests need only about **30 grams** of oil. Where there is no drain
plug:

- **From the suction line drier** — a short piece of tube and a hand valve on the
  outlet end of the drier traps and drains a small sample.
- **From a dedicated oil sample tube** set into the suction line ahead of the
  clean-up drier, with a Schrader adaptor. Best on large systems.
- **From an oil trap** connected by gauge hoses between the discharge and suction
  service valves. When oil appears in the trap sight glass, isolate the trap and
  drain it.

Whatever method you use, **drain the trap completely each time** or the next
sample is contaminated by the last one. Collection time varies with system size
and oil circulation rate.

## Why did the burn-out happen?

Fitting a new compressor is half the job. The service is not finished until the
cause is found and removed, and the causes come down to four groups.

### Overload and overwork — running hotter than design

- Bad design or compressor selection, excessive product load, or air infiltration
  into the cabinet
- A hot unit housing, or ambient above design limits
- Undersized or inefficient condenser — wrong selection, dirt, or scale build-up
- Poor air circulation: condenser fan turning backwards, blades reset at the
  wrong pitch, or the fan cowl removed
- Air or other non-condensables in the condenser
- Highly superheated suction vapour returning to the compressor. Sealed units in
  particular rely on cool suction vapour to cool the motor windings — starve them
  of it and the windings cook.

### Voltage

- **Voltage above design limits raises current and motor temperature.** Nominal
  supply is 240 V ±5%, but many imported motors are designed for 220–230 V or
  less, so a high supply makes an already marginal motor worse.
- Voltage below design limits reduces available power, overloads the motor and
  raises temperature.
- Fluctuations, especially at start, can stall the motor or cause chattering and
  arcing in relays and starters, driving current surges through the winding.
- Lightning, supply faults, or **loss of one phase on a three-phase system** —
  overloads cannot always protect against these.

### System faults that hide in plain sight

- A defective relay, capacitor, contactor, switch, overload or thermostat — any
  component that interrupts or restricts current flow, arcs, or operates
  erratically
- A leaking refrigerant control, non-return valve, four-way reversing valve or
  solenoid, giving flood-back, high suction pressure or hot gas return
- Short-cycling from an incorrect LP control setting, a leaking discharge valve,
  shortage of refrigerant, a partial blockage in the liquid or suction line, oil
  logging, or a motor overload fault
- Incorrect wiring
- The wrong refrigerant for that compressor and motor rating
- Running in a high vacuum from a line restriction or lost charge
- The condenser fan cycling off on overload in hot weather

### Lubrication failure

Seizure or tightness overloads the motor directly. In open machines, tight
bearings from lack of oil or dirt in the grease do the same. Bad pipework design,
liquid flood-back, missing oil separator where one is needed, shortage of
refrigerant and oil logging of evaporators are all prime causes.

## On the job

- Megger and ohmmeter before you condemn — an open internal overload looks the
  same as a dead winding.
- Acid number above 0.05, black oil, carbon in the suction line: treat as severe.
- The suction burn-out drier protects the new compressor; the pressure tap tells
  you when to change it.
- Do not fit the moisture indicator until the acid has gone.
- Find the cause. A clean system with the original fault still in it burns out
  again.
`,
          quiz: [
            {
              q: "A hermetic compressor will not run. It is hot to the touch and the windings read open circuit. What is the most likely explanation before condemning it?",
              options: [
                "The winding has burnt out",
                "An internal overload has opened because the compressor is overheated — let it cool and re-test",
                "The run capacitor is short circuit",
                "The megger reading will confirm a burn-out regardless",
              ],
              answer: 1,
              explain: "A compressor that is not cool to the touch may simply have an internal overload open-circuited on temperature; it will read as an open winding until it cools. That is why the procedure checks shell temperature before winding continuity. A real burn-out is usually also confirmed by low insulation resistance to earth and the characteristic burnt smell when the system is opened.",
            },
            {
              q: "Why is a burn-out drier fitted in the SUCTION line after a severe burn-out, rather than relying on an oversize liquid line drier alone?",
              options: [
                "Suction driers dry the refrigerant better than liquid line driers",
                "It catches the acid and carbon left in the evaporator and suction pipework before that debris can reach the new compressor",
                "Liquid line driers cannot be oversized",
                "It reduces the pressure drop across the system",
              ],
              answer: 1,
              explain: "After a severe burn-out, contaminants have been pumped throughout the system, including the evaporator. The liquid line drier only protects what is downstream of it; the suction drier stands directly in front of the new compressor and intercepts what the low side gives back. A pressure tap upstream lets you measure the pressure drop and change the drier once it exceeds 20 kPa.",
            },
            {
              q: "During a severe burn-out clean-up, when should the liquid line moisture indicator be installed?",
              options: [
                "Immediately, so the system can be monitored from the start",
                "Only after oil acid readings fall below 0.05 and the oil is clean, because residual acid destroys the indicator element",
                "Never — moisture indicators are not used after burn-outs",
                "At the same time as the suction burn-out drier",
              ],
              answer: 1,
              explain: "Fitting the indicator too early wastes it: the acid attacks the indicator paper and its colour becomes meaningless. It goes in at the end, when the suction drier is removed and the liquid line drier is replaced, so that it can confirm the system stays dry from then on.",
            },
            {
              q: "A sealed unit repeatedly burns out despite correct clean-up. Gauges show very high suction superheat. How does that cause the failure?",
              options: [
                "High superheat causes liquid flood-back to the compressor",
                "Sealed units rely on cool suction vapour to cool the motor windings, so highly superheated return vapour lets the windings overheat",
                "High superheat raises the suction pressure and overloads the motor",
                "High superheat is harmless and is not a burn-out cause",
              ],
              answer: 1,
              explain: "In a hermetic machine the suction gas passes over the motor before it is compressed — it is the motor's cooling medium. Vapour returning highly superheated carries the windings' heat away far less effectively, so the insulation runs hot and degrades. Flood-back is the opposite fault (too little superheat) and damages the compressor mechanically instead.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "gauges-purging-pump-down",
          title: "Service gauges, purging the lines and pump-down",
          minutes: 13,
          simple: "Gauges are how you see inside a running system, but every time you connect them you risk letting air in or letting gas out. There is a set order for opening the valves, purging the hoses and taking the gauges off again. Pump-down is the trick of driving the charge into the condenser and receiver so you can open the low side without losing it.",
          refs: REFS,
          content: `
Fitting a gauge manifold is the most frequent thing a refrigeration technician
does, and the most frequently done sloppily. Service valves are the greatest aid
to diagnosis and simultaneously the greatest single source of leaks on small
plant — not because of any design flaw, but because of careless work.

## Compressor service valves

A compressor service valve has three working positions, and understanding them is
the foundation of everything else in this lesson.

| Position | Stem | System flow | Gauge port |
|---|---|---|---|
| **Back-seated** (normal running) | Wound fully out (anticlockwise) | Open | **Isolated** |
| **Front-seated** (closed) | Wound fully in (clockwise) | **Shut off** | Open to compressor |
| **Cracked / mid-position** | Between the two | Open | Open |

So a valve back-seated during operation lets refrigerant flow but keeps the port
sealed — that is how the plant runs safely with a Schrader cap or blanking plug
on the port. Crack the stem off the back seat and the port sees system pressure
and your gauge reads. Front-seat it and the compressor is isolated from the
system, which is what you do to pressure test site pipework, or at the end of a
pump-down.

### Looking after them

- **Never force the spindle** fully open or fully closed.
- **Use the correct valve key.** Never an adjustable spanner — a rounded spindle
  is a valve you cannot operate at the worst possible moment, and a weakened stem
  can snap in your hand under pressure.
- **Leave the valve slightly off the full back seat** so it cannot freeze in
  position.
- **The stem cap needs its soft copper washer.** When you unscrew a cap, the
  loose washer stays either in the cap or on the valve body — find it and refit
  it. Without the washer, refrigerant simply leaks back along the stem thread and
  out. Insufficiently tightened caps and missing washers are the number one leak
  source on small systems.
- Plastic caps split if over-tightened. Firm, not brutal.

## Schrader-type access valves

Where a compressor has no service valves but you still need to see suction and
head pressures, Schrader access valves can be fitted — screwed in, or brazed into
a tee. They work exactly like a bicycle or car tyre valve: self-sealing, opened
by the brass depressor in a standard gauge hose fitting. They can be used for
charging, purging or pressure testing anywhere on the system.

Their weakness is disconnection: whatever refrigerant is in the hose vents to
atmosphere when you pull it off. **Quick-release fittings** that seal the hose as
they release solve exactly this, and fit any standard manifold.

>! Always refit Schrader caps and leak test the valve after fitting one. The cap
>! is a sealing device, not a dust cover.

## Purging the lines

Air and moisture in your hoses go straight into the customer's system. Purging
the hoses with refrigerant before opening them to the system is what prevents
that — and it is permitted under the Code only in the minimal quantities the task
genuinely requires. Keep charging lines short and use fittings that minimise
loss.

### System with suction pressure above 0 kPa gauge

1. **Back-seat the service valves** you are connecting to, so the ports are
   isolated, and **close (front-seat) both manifold valves**.
2. Tighten the hoses onto both service valves. Make sure the manifold common hose
   connection is open.
3. **Crack the high-pressure manifold valve**, then crack the high-pressure
   service valve. Refrigerant bleeds through the discharge hose and out the
   common hose, sweeping the air out.
4. After a few seconds, close the high-pressure manifold valve. Repeat for the
   low side.
5. The manifold is now purged and connected.

### System where the low side may be in a vacuum

Here the low side cannot push anything out — it would pull air in — so **all
purging is done from the high side**.

1. Back-seat the service valves. Tighten the hose onto the high-pressure service
   valve only.
2. Leave the low-side hose connection **loose**, and cap or plug the common hose
   connection loosely.
3. Crack both manifold valves, then crack the high-pressure service valve.
   Refrigerant vapour bleeds out through both loose connections.
4. After a few seconds, tighten the low-side hose, then tighten the common cap.
5. Close both manifold valves, crack the low-pressure service valve, and the
   manifold is ready.

## Disconnecting the manifold

Just as ordered, and for good reason:

1. **Close the discharge service valve first.**
2. Open both manifold isolating valves with the service connection sealed, and
   let the pressures equalise. This pushes the trapped high-side refrigerant back
   into the system instead of onto the ground.
3. Close the suction service valve and disconnect the hoses, purging the small
   remaining pressure into a rag or open container — which stops you spraying oil
   over the condenser and the customer's plant room.
4. Cap the service valves. Reconnect any low-pressure or high-pressure control
   lines you disturbed.

## Non-condensables

A leak on the low side of an operating system draws air in, and air must come
out. Air does not condense at the temperatures and pressures of a refrigeration
or air conditioning system, so it collects in the top of the condenser and
receiver — trapped there by the liquid seal at the outlet — and adds its partial
pressure to the condensing pressure. Head pressure rises in proportion to how
much air is in there, capacity falls, and discharge temperature climbs into the
range where the oil starts breaking down.

>! Purging non-condensables to atmosphere is prohibited. That mixture is mostly
>! refrigerant, and it must be **recovered into a correctly marked cylinder**.
>! The system is then evacuated and recharged.

## System pump-down

Any work that opens the compressor or the sealed system needs the refrigerant
out of the way. On a small system without service valves that means recovering
the whole charge. On any system **with** service valves you can instead push the
charge into the condenser and receiver and shut it in there. That is pump-down.

The method: with the compressor running, **close the valve at the outlet of the
receiver** (or the condenser outlet valve where there is no receiver). No more
liquid can reach the evaporator, so the compressor empties the low side into the
high side.

1. Watch the gauges. When suction pressure reaches about **−7 kPa** (slightly
   below atmospheric), stop the compressor.
2. If the plant has a low-pressure control that would cut out at a higher
   pressure, bypass it so the compressor keeps running down to the target.
3. If suction pressure **rises quickly** after stopping, refrigerant is still
   boiling out of the compressor crankcase oil. Restart and pump down to −7 kPa
   again.
4. When the pressure holds, or rises only very slowly, **close the compressor
   discharge service valve**.
5. If the low side is left below atmospheric, disconnect power from the
   compressor and momentarily crack the receiver valve to admit just enough
   refrigerant for a **slightly positive pressure, around 7 kPa**.

That slight positive pressure is the whole point: with the liquid line, low side
and compressor sitting just above atmospheric, air cannot rush in when you break
a joint, so contamination is kept to a minimum.

>! Pump-down does nothing for you if the work involves the **discharge line, the
>! condenser or the receiver** — that is where the charge now is. For that work,
>! the refrigerant must be recovered.

Pump-down is also used as a **control strategy**, not just a service procedure.
A pump-down cycle run by a liquid line solenoid and the low-pressure control
empties the low side at every off cycle, so refrigerant cannot migrate to the
crankcase, condense there overnight and give you an oil-diluted, flooded start
next morning.

## What to remember

- Back seat = running with the port sealed. Front seat = compressor isolated.
- Correct valve key, copper washer under the cap, valve just off the back seat.
- Purge from the high side whenever the low side may be in a vacuum.
- Close the discharge service valve first when removing gauges, and equalise
  before you crack a hose.
- Non-condensables get recovered, never vented.
- Pump down to −7 kPa, then leave the opened section at about +7 kPa.
`,
          quiz: [
            {
              q: "A system's low side may be operating in a vacuum. Why must the hoses be purged from the high-pressure service valve only?",
              options: [
                "The high side purges faster because of its higher pressure",
                "A low side below atmospheric cannot push vapour out — cracking it would draw air and moisture into the system",
                "The low side valve cannot be cracked while the compressor runs",
                "Purging from the low side would trip the low-pressure control",
              ],
              answer: 1,
              explain: "Purging depends on refrigerant flowing outward and sweeping air ahead of it. If the low side is below atmospheric, opening it to a loose fitting reverses the flow and pulls air and water vapour straight into the system — the exact contamination the purge exists to prevent. So the high side supplies the purge gas and pushes it through both hoses.",
            },
            {
              q: "Why must the discharge service valve be closed FIRST when disconnecting a gauge manifold?",
              options: [
                "To protect the high-pressure gauge from damage",
                "So the trapped high-side refrigerant and oil can be equalised back into the system through the manifold instead of being blown to atmosphere and over the plant",
                "To stop the compressor from short cycling",
                "Because the suction valve cannot be closed while the discharge valve is open",
              ],
              answer: 1,
              explain: "The discharge hose holds high-pressure refrigerant with oil carried into it. Closing that valve first, then opening both manifold valves with the service connection sealed, lets it equalise back into the low side. Crack the hoses first and you lose the gas, and spray oil over the condenser and everything near it.",
            },
            {
              q: "During pump-down the suction pressure reaches −7 kPa, the compressor is stopped, and the pressure climbs back to 40 kPa within a minute. What does this mean?",
              options: [
                "The receiver outlet valve is leaking through",
                "Refrigerant is still coming out of solution in the compressor crankcase oil — restart and pump down again",
                "The low-pressure control is faulty",
                "The pump-down is complete and the discharge valve can be closed",
              ],
              answer: 1,
              explain: "A rapid rise means there is still refrigerant in the system's low side, most commonly dissolved in the crankcase oil and boiling out once pressure falls. Pump down again until the pressure holds or rises only slowly, then close the discharge service valve. Closing it now would trap that refrigerant and re-pressurise the section you were about to open.",
            },
            {
              q: "Why is the opened section of a pumped-down system left at about +7 kPa rather than in a vacuum?",
              options: [
                "To keep the low-pressure control satisfied",
                "So the outward pressure keeps air and moisture from rushing in when a joint is broken",
                "To make leak testing possible afterwards",
                "Because a vacuum would collapse the suction line",
              ],
              answer: 1,
              explain: "A slight positive pressure means gas flows out of any joint you open, not in. Leave the section in a vacuum and every fitting you crack becomes an inlet for humid air — the contamination chain starting over. If the pressure is still below atmospheric, isolate the compressor electrically and crack the receiver valve momentarily to bring it just positive.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "charging-recovery",
          title: "Charging, recovery and disposal of refrigerant",
          minutes: 15,
          simple: "Getting the right amount of refrigerant into a system is what makes it work properly, and getting refrigerant back out of a system without releasing it is what keeps you licensed. Too little starves the evaporator, too much floods the condenser. This lesson covers charging by liquid and by vapour, judging the charge, and recovering it again with a machine or by chilling a cylinder.",
          refs: REFS,
          content: `
System performance depends on the charge. An **undercharged** system starves the
evaporator: suction pressure runs excessively low, capacity is lost and the
compressor may overheat because it is not getting the cool return vapour it needs.
An **overcharged** system floods the condenser with liquid, so discharge pressure
rises, liquid can be driven back to the compressor, and mechanical damage
follows. Most systems tolerate some variation, but some small systems have a
**critical charge** where only the exact quantity will do.

Two systems with identical capacity ratings may need different refrigerants and
different charge masses, so start where the manufacturer left you the answer:
**the nameplate**, which normally states both refrigerant type and charge mass.

!SIM[Compare a low charge against a correct one on the gauges](fault=lowCharge)

## Liquid charging

Liquid charging is much faster than vapour charging, so it is used almost
universally on large field-installed plant. It needs either a **liquid line
charging valve** (a process fitting on the high side) or a **receiver outlet
valve with a charging port**. Charge through a filter-drier so nothing you
introduce ends up circulating.

>! Because so many modern refrigerants are **zeotropic blends**, liquid charging
>! should be used in all cases. Blends fractionate — drawing vapour from the
>! cylinder takes the more volatile components preferentially, so a
>! vapour-charged blend arrives in the system with the wrong composition and can
>! never be correct again.

1. Connect the refrigerant cylinder to the liquid line charging valve or receiver
   outlet valve. Confirm the cylinder holds the correct refrigerant.
2. With the fitting at the charging valve still loose, **briefly open the
   cylinder valve so refrigerant sweeps the air out of the hose** and away
   through that loose connection.
3. Tighten the connection and close the cylinder valve.
4. Connect a gauge manifold to the compressor service valves so suction and
   discharge pressures can be watched. If you cannot see the gauges from where
   you are charging, get someone to watch them.
5. Most cylinders have both liquid and vapour valves — with a liquid valve the
   cylinder stays upright. With a vapour valve only, the cylinder must be
   inverted. Either way, if the charge is being weighed in, stand the cylinder on
   scales.
6. Set the system thermostat to its lowest setting. Make sure water is flowing on
   water-cooled condensers, or fans and pump are running on an evaporative
   condenser.
7. **Close the receiver outlet valve** (or condenser outlet valve where there is
   no receiver) and open the liquid line charging valve.
8. Open the cylinder valve slowly. On an evacuated system the vacuum draws liquid
   in; it passes through the metering device and evaporator to the compressor.
9. When suction pressure reaches the low-pressure control cut-in, the compressor
   starts and pumps vapour from the evaporator into the condenser, where it
   condenses and is stored.
10. Continue until the estimated charge has gone in. Close the liquid line
    charging valve and the cylinder valve, and open the liquid line shut-off
    valve. Watch the liquid line sight glass: flash bubbles mean more refrigerant
    is needed, so close the shut-off valve and repeat in small increments until
    the glass runs clear.
11. Keep the system running, watching sight glass and both gauges. If discharge
    pressure reads high once load and condensing conditions are taken into
    account, suspect an overcharge and **remove refrigerant in small amounts with
    a recovery unit and cylinder** until the reading normalises.
12. Remove the charging line, refit the seal cap on the charging valve port, and
    leak test the caps.

## Vapour charging

Vapour charging is used for adding **small top-up quantities** to a system, and
it can be metered more precisely than liquid. It is done through the gauge
manifold into the compressor suction service valve port. On a welded compressor
with no port, a piercing valve or fitting is installed in the suction process
tube — and that valve must be removed, the tube welded shut and leak tested when
the job is done.

Connect the manifold to both suction and discharge service valves with the common
hose to the cylinder, purge the lines, open the cylinder **vapour** valve, start
the compressor and open the suction connection on the manifold, modulating the
rate with the manifold valve. Weigh what goes in on digital scales and record it.

The cylinder must stay **upright** and refrigerant must be drawn only through the
vapour valve, so nothing but vapour reaches the compressor. As liquid vaporises
inside the cylinder it chills what remains and cylinder pressure falls; warm the
cylinder gently — a heat lamp or warm water — to keep it going.

>! Never apply a flame to a refrigerant cylinder, and never let any part of it
>! exceed 50°C. To test progress, close the cylinder valve and watch the system
>! operate. Watch discharge pressure closely throughout so you do not overcharge.

**Do not vapour charge blends.**

## Judging the charge

| Method | How it is done | Where it is trustworthy | Traps |
|---|---|---|---|
| Weighed charge | Weigh the nameplate charge in on digital scales | Any system where the correct mass is known and a full charge is going in | Requires the system to be fully evacuated first |
| Liquid line sight glass | Charge until the glass runs clear of bubbles | Systems with a receiver and a TXV | Clear glass also means all vapour and no liquid; bubbles can be caused by a liquid line restriction, a surging TXV, or rapid condensing pressure swings; oil can make the liquid look cloudy at correct charge |
| Receiver level sight glass | Read liquid level in the receiver | Commercial and industrial plant with a receiver glass | The liquid line glass shows condition at the evaporator, not quantity — use each for its own job |
| Liquid level test port (tri-cock) | Charge until liquid appears at the receiver test port | Legacy plant only | Vents refrigerant — **must not be used with controlled substances** |
| Liquid subcooling | Compare liquid line temperature with saturation temperature for the condensing pressure | Small factory-packaged systems, and as an emergency field check | Needs stabilised conditions and maximum load |

### Worked example: charging by subcooling

An R134a packaged unit is running under stabilised full load. The high-side gauge
reads a condensing pressure equivalent to a **saturation temperature of 44°C**.
A clamp thermometer on the liquid line leaving the condenser reads **41°C**.

- Subcooling = 44 − 41 = **3 K**.

That sits in the 2–3 K band the method calls for at maximum load, so the charge
is about right. Had the liquid line read 43.5°C, subcooling would be only 0.5 K —
barely any solid liquid in reserve — and refrigerant should be added a little at
a time, re-checking after each addition.

!FIG[subcool-measure]

### Why a pressure-controlled condenser fan can fool you

Suppose the head pressure control starts the condenser fan and condensing
temperature drops **5 to 10°C** in seconds. The liquid already sitting in the
receiver is now *warmer* than the saturation temperature corresponding to the new
lower pressure, so it flashes — and the sight glass fills with bubbles on a
correctly charged system. Wait for conditions to stabilise before you judge
anything from a sight glass.

## Charging domestic refrigerators

Domestic systems must be charged to within about **7 grams**, so measurement
equipment is not optional. A graduated charging cylinder can be used; **digital
scales are better** in the field. Charging is done with the compressor
**switched off**.

1. Run the charging cylinder into the low-side process tube or service valve by
   way of the gauge manifold.
2. Purge refrigerant through the lines — preferably back from the compressor — to
   remove air, then tighten the connections.
3. Set the charging cylinder for the correct charge, compensating for ambient
   temperature (a graduated cylinder's scale is read against its own pressure and
   temperature).
4. Open the cylinder, gauge and suction line valves and let liquid flow into the
   compressor. Stop at the correct charge and close the cylinder.
5. Warm the charging line gently — a cloth dipped in warm water — to drive any
   liquid left in the line into the compressor.
6. Close off. Where a process tube was used, pinch it off with the proper tool and
   weld the end. If a Schrader valve was used, refit the cap.
7. Leak test that joint and every other fitting opened during the service.

>! To raise the pressure in a charging cylinder, stand it in a bucket of warm
>! water, **never above 50°C**. Never use hot water and never apply a flame — the
>! pressure rise can rupture the cylinder explosively.

**Charging to a frost line is not recommended** on critical charge capillary tube
systems. The frost line moves with ambient: a fridge charged on a 38°C day can
flood back in cool weather, and one charged on a cold day will run inefficiently
in summer.

**Digital scales** have largely replaced graduated cylinders. The cylinder sits
on the scale, the scale is zeroed, and the display counts down in grams as the
charge leaves the cylinder. The big advantage is that refrigerant never has to be
decanted into a separate charging cylinder, which removes one whole opportunity
for release.

## Recovery and disposal

Removing refrigerant is required for leak repairs, other major repairs, and to
correct an overcharge. All of it is governed by the **Refrigerant Handling Code
of Practice**.

Before you start: on chillers and water-cooled condensers, either **drain the
water completely or keep it circulating**, to prevent a freeze-up. If water
cannot be drained, do not drop the refrigerant pressure rapidly — falling
pressure means the refrigerant boils at a lower saturation temperature and can
freeze the water side, splitting tubes.

Have enough **clean, dry, empty** cylinders of the correct type, and accurate
scales.

!FIG[recovery-hookup]

### Recovery units

A portable recovery unit is essentially a small condensing unit with filters and
safety switches. It draws refrigerant out of the system as vapour, condenses it,
and discharges it into its own or an external cylinder for reuse or disposal.

- Take deliberate care against **cross-contamination** of refrigerants and
  lubricants inside the machine — the recovery unit is shared between jobs.
- Use hoses, fittings and procedures that minimise loss during the operation.
- On a **chiller**, remember the vessel is huge. A chiller sitting at atmospheric
  pressure with all the liquid gone can still hold many kilograms of refrigerant
  vapour. Recovery is not finished when the liquid stops.
- Recovered refrigerant carries a significant quantity of **oil** out with it.
  Whatever oil left the system must be replaced when the system goes back into
  operation.

### Charge migration

Where there is no recovery unit, or the system's own compressor is dead,
refrigerant can be transferred by migration. Evacuate the storage cylinder if you
can, connect it through the gauge manifold, and chill it as cold as possible —
pack it in ice or dry ice. Refrigerant then migrates from the warm, higher
pressure system to the cold, lower pressure cylinder.

Migration stops when system pressure equals the saturation pressure of the
refrigerant at the cylinder's temperature. **Worked example:** a cylinder held at
5°C, recovering R134a. R134a saturation pressure at 5°C is roughly **250 kPa
gauge**, so migration slows to nothing once the system reaches about 250 kPa —
and everything below that stays in the system. The other disadvantage is time:
migration is slow.

>! Watch the cylinder weight on the scales continuously and **do not overfill**.
>! Fill limits are set by weight in the Code — the machine's own gauge is not the
>! authority, the scale is.

>! A cylinder used to store refrigerant taken from an operating system must be
>! cleaned out afterwards. The recovered charge brings system oil with it, and
>! that oil stays behind when the refrigerant is used, contaminating whatever is
>! put into the cylinder next.

## What to remember

- Nameplate first: refrigerant type and charge mass.
- Liquid charge blends; never vapour charge them.
- Purge the hose at the cylinder before you tighten the fitting.
- A clear sight glass is evidence, not proof — stabilise conditions and back it
  up with subcooling or a weighed charge.
- Domestic charges are critical to about 7 grams. Use scales.
- Drain or circulate the water before recovering from a chiller.
- Recover into clean, dry, labelled cylinders on scales, and never overfill.
`,
          quiz: [
            {
              q: "Why does the Code-based practice call for liquid charging rather than vapour charging on blended refrigerants?",
              options: [
                "Vapour charging is too slow for large systems",
                "Blends fractionate — drawing vapour takes the more volatile components first, so what enters the system has the wrong composition",
                "Vapour charging cannot be weighed accurately",
                "Blends condense inside the manifold hoses",
              ],
              answer: 1,
              explain: "A zeotropic blend is a mixture of refrigerants with different boiling points. The vapour above the liquid in the cylinder is richer in the more volatile component, so vapour charging removes that component preferentially and leaves both the cylinder and the system off-composition. Charging as liquid transfers the mixture as formulated. Speed is a genuine advantage of liquid charging, but composition is the reason it is mandatory practice for blends.",
            },
            {
              q: "A liquid line sight glass shows bubbles on a system you have just charged to nameplate weight. What should you consider before adding more refrigerant?",
              options: [
                "Nothing — bubbles always mean undercharge",
                "A liquid line restriction, a surging expansion valve, or a sudden condensing pressure drop when the condenser fan started can all flash liquid at correct charge",
                "The sight glass is faulty and should be replaced",
                "The system should be evacuated and recharged from scratch",
              ],
              answer: 1,
              explain: "Bubbles mean flash gas at the glass, and flash gas has several causes besides shortage. A restriction upstream drops the pressure below saturation; a surging TXV creates the same effect when it swings wide open; and a pressure-controlled condenser fan can drop condensing temperature 5–10°C in seconds, leaving receiver liquid above its new saturation temperature. Charging blindly on bubbles is how systems end up overcharged.",
            },
            {
              q: "You are recovering refrigerant from a water-cooled condenser and the water cannot be drained. What precaution applies?",
              options: [
                "Recover as fast as possible to minimise the time at low pressure",
                "Keep the water circulating and do not drop the refrigerant pressure rapidly, or the refrigerant will boil at a low saturation temperature and freeze the water side",
                "Add antifreeze to the water circuit",
                "Recover the liquid only and vent the vapour",
              ],
              answer: 1,
              explain: "Recovery lowers the pressure, so the refrigerant left inside boils at a correspondingly low saturation temperature and absorbs heat from the water — which can freeze and split the tubes. Circulating water keeps heat flowing in, and a slow pressure reduction keeps the saturation temperature above freezing. Venting vapour is never an option for a controlled refrigerant.",
            },
            {
              q: "A recovery cylinder is packed in ice at 5°C for migration of R134a. Migration stops with the system still at about 250 kPa gauge. Why?",
              options: [
                "The cylinder is full",
                "The hoses have frozen",
                "Migration continues only until the system pressure falls to the saturation pressure of R134a at the cylinder temperature, roughly 250 kPa gauge at 5°C",
                "The manifold valves have front-seated themselves",
              ],
              answer: 2,
              explain: "Migration is driven purely by the pressure difference between the warm system and the cold cylinder. Once the system pressure equals the cylinder's saturation pressure, there is no driving force left, so refrigerant below that pressure stays in the system. Chilling the cylinder harder — dry ice rather than ice — lowers that end point and recovers more.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "refrigeration-lubricants",
          title: "Refrigeration lubricants",
          minutes: 13,
          simple: "Compressor oil does far more than stop metal rubbing on metal — it carries heat away, seals gaps and keeps the machine quiet. The catch is that the oil has to travel around the whole system with the refrigerant and come back, so it has to suit the refrigerant. Modern HFC systems need synthetic oils that soak up water like a sponge, so how you store and handle the tin matters as much as which one you buy.",
          refs: REFS,
          content: `
A compressor is supplied with enough oil for its own lubrication plus enough to
circulate around a small system. Long suction and liquid lines, a flooded or
oversized evaporator, or an oil separator added later all take oil out of
circulation, and it has to be made up.

**Rule of thumb: about one litre of oil for every eight kilograms of refrigerant
charged into the system.**

### Worked example

A supermarket pack is charged with **24 kg** of refrigerant, and long line runs
feed two remote evaporators.

- 24 kg ÷ 8 kg per litre = **3 litres** of oil in circulation allowance, on top of
  the compressor's own sump charge.

An oil separator normally has its own oil charge marked on it, and it may or may
not be pre-charged — **always check**. On a small sealed unit the quantity a
high-side float separator needs just to operate its return mechanism can equal
the entire oil charge of the compressor, so fitting one without adding oil starves
the compressor.

## Checking and adding oil

New compressors should be checked frequently during their first hours of running
and topped up with the correct oil if needed. Where there is a sight glass, that
is easy. Where there is not, a dipstick through the oil filler plug is the way —
a clean, dry drinking straw or a piece of wire makes a serviceable one. In many
sealed units the level cannot be measured at all, so if the oil must be checked
the system has to be drained completely and recharged to the manufacturer's
specification.

>! **Pump down and isolate the compressor before removing the oil plug**, and
>! **always fit gauges to check the sump pressure first**. Removing a plug from a
>! pressurised crankcase blasts hot oil and refrigerant out of the hole. Injury,
>! system damage and a plant room covered in oil are all avoidable with one gauge
>! reading.

Three ways to get oil in:

- **Funnel into the crankcase.** Acceptable only if the funnel is perfectly clean
  and the oil in use tolerates exposure to atmosphere — which rules it out for
  hygroscopic synthetics in humid weather.
- **Draw it in under vacuum.** Screw a fitting with a tube attached into the oil
  filler hole, put the other end of the tube into a new tin, and lower the
  crankcase pressure with a vacuum pump connected through the gauge manifold to
  the low side. Oil is pushed in by atmospheric pressure. **Keep the bottom of
  the tube below the oil surface at all times** or you will suck air straight
  into the compressor.
- **Oil pump.** A small hand pump, very like a bicycle pump, lets oil be added to
  a *running* compressor through the service port, or directly into the crankcase
  where there is no room for a gravity feed. Its check valve holds the refrigerant
  back while you develop enough pressure to beat the suction pressure.

After the system settles down, excess oil may need to be removed.

## What the oil actually does

Reducing friction and wear is only the headline. A refrigeration lubricant also:

- removes heat from the bearings and windings
- seals clearances, keeping contaminants out and pressure in
- maintains the seal between suction and discharge gas inside the compressor
- prevents corrosion
- carries away the debris created by wear
- reduces the noise of moving parts

## Choosing a compatible lubricant

Four properties decide it:

- **Viscosity** — enough film strength at operating temperature, without being so
  thick it will not return.
- **Electrical insulating properties** — essential in a hermetic machine, where
  the oil is in direct contact with the motor windings.
- **Miscibility with the refrigerant** — some oil always leaves with the
  refrigerant, so it must mix well enough to travel through the condenser and
  evaporator and come home. Poor miscibility means oil logging the evaporator,
  ruining heat transfer *and* starving the compressor.
- **Freedom from wax and suspended matter** — wax dropping out will block a
  capillary or expansion device, or coat the evaporator and destroy heat
  transfer.

New-generation refrigerants react differently with mineral oils, so check with
the equipment and refrigerant manufacturers rather than assuming.

| Refrigerant type | Compatible lubricants |
|---|---|
| HCFC (e.g. R22) | Mineral, mineral/alkyl benzene, alkyl benzene, polyol ester |
| HFC (e.g. R134a, R404A, R410A, R32) | Polyol ester (POE), poly-alpha-olefin (PAO), polyvinyl ether (PVE) |

**HFC systems work best on synthetic oils.** Mineral oil is essentially immiscible
with HFCs, so refrigerant and compressor manufacturers moved to POE, whose high
miscibility is what gets the oil back to the compressor in a large system.

PAG (polyalkylene glycol) sits slightly outside this picture: it is used mainly
in **automotive** air conditioning on R134a.

## The price of polyol ester

POE oils are good, stable lubricants, but not all POEs are identical and they
bring two characteristics that changed how equipment is designed, built and
installed.

### They are hygroscopic

POE absorbs water far more aggressively than mineral oil, and holds it
chemically, so **evacuation will not remove it**.

| Property | Polyol ester | Polyalkylene glycol |
|---|---|---|
| Maximum moisture absorbed | about 1100 ppm (0.11%) | about 12 000 ppm (1.2%) |
| Tolerable with hydrolytic stabiliser additives | up to about 600 ppm (0.06%) | — |
| Recommended working upper limit | **300 ppm**, to prevent water freezing out | — |

Reputable POE manufacturers include hydrolytic stabilisers that let the oil carry
up to about 600 ppm without damaging the system — over half of what it can
physically absorb. But lubricant makers recommend keeping working moisture below
**300 ppm** so water cannot freeze out at the expansion device. This is exactly
why HFC practice demands a high degree of dehydration and **generously sized,
high-efficiency filter-driers**.

### They are powerful solvents

Where mineral oil left oxidation products and degraded insulation material sitting
harmlessly in the dead corners of a system, POE dissolves that debris and carries
it around until it reaches the filter-drier — and blockages follow. This matters
most on **retrofits**: an old system converted to an HFC with POE already contains
oxidised oil and debris. Change the compressor oil filter or strainer along with
the liquid line filter-drier, and watch the system for blockage symptoms
afterwards.

### POE with an HCFC refrigerant

There is a trend to factory-charge HCFC plant with POE so that a later conversion
to a chlorine-free HFC is simple. It comes with two cautions:

- **More than double** the quantity of lubricant will dissolve in the refrigerant
  compared with mineral or alkyl benzene oil in the same duty, or with POE in an
  HFC system. Diluted oil means reduced viscosity, and reduced viscosity means
  accelerated compressor wear.
- The hygroscopic behaviour demands a high degree of dehydration — **50 ppm or
  less** — because the chlorine in an HCFC plus water plus POE gives hydrolysis
  and acid formation.

Retrofitted automotive systems commonly carry **300 to 400 ppm residual
chlorine**. Some specific POE lubricants tolerate CFC and chlorine residues;
**most PAGs do not** — chlorine forms mineral acids with polyalkylenes and those
acids attack the system. Modified, more tolerant PAGs exist but are expensive.

### The other synthetics

**PAO (poly-alpha-olefin)** and **PVE (polyvinyl ether)** are the other synthetic
options. PAO is essentially non-hygroscopic. PVE will take up moisture but,
unlike POE, it does not hydrolyse into acid — the water it holds can be taken out
by a drier. Both avoid POE's worst habit while keeping most of the advantages of
a synthetic.

**Very low temperature plant** (down into the −100°C region) has its own trap:
alkyl benzene can drop wax out at those temperatures, and the deposit interferes
with the operation of the system. Use only the lubricant the equipment maker
specifies for that duty.

## Handling refrigeration oil

Refrigeration oil is highly refined, de-waxed and dehydrated — that is what you
are paying for — and it is shipped in tightly sealed containers to protect
exactly those properties. Leave it exposed to air and moisture and it becomes
contaminated, which starts the same chain reaction as any other moisture ingress.

- Buy **only the container size you need for the immediate job**.
- Add oil to a compressor **only from a sealed container opened at the time of
  use**.
- **Do not decant** oil from one container into another, and never store it in an
  open container.
- Buying a big drum for the unit price is false economy. Compressor damage and
  customer ill will cost far more than the saving.

## Compressors suddenly short of oil

Here is the diagnostic that separates a technician from a parts fitter. **A
compressor that held its level for months and then suddenly runs low has not
"used" oil.** The oil is in the system somewhere — lying in the condenser and
receiver, or logged in the evaporator — because a fault put it there.

The two usual culprits are **shortage of refrigerant** and **liquid flood-back**:
in both cases the refrigerant is no longer sweeping oil back to the compressor at
the velocity the pipework was designed for.

So: **correct the system fault first, then deal with the oil.** For safety you may
have to add oil to keep the compressor lubricated in the meantime, but the moment
the fault is corrected the oil in circulation comes home — typically in
**20 to 30 minutes**, depending on the number of evaporators and line lengths —
and the surplus must be removed promptly or you will have flood-back of a
different kind.

Where a system chronically struggles to return oil because of line length or
multiple evaporators, an **oil separator** fitted between the compressor and
condenser is the proper answer. It stops the level swinging and removes the need
to carry a much larger oil charge.

## On the job

- One litre of oil per eight kilograms of refrigerant is the working rule.
- Gauges on, pumped down and isolated before the oil plug comes out.
- Match the oil to the refrigerant: mineral or alkyl benzene for HCFC, POE, PAO
  or PVE for HFC, PAG mainly for automotive R134a.
- POE holds water chemically — deep evacuation and a large drier, not hope.
- Sealed tin, opened at the time of use, and never decanted.
- A compressor suddenly short of oil has a system fault. Find it before you top up.
`,
          quiz: [
            {
              q: "A commercial system has been running for two years with a stable oil level, then the sight glass suddenly drops. What is the correct response?",
              options: [
                "Top the compressor up to the sight glass and return to normal service",
                "Find and correct the system fault — usually a refrigerant shortage or liquid flood-back putting oil elsewhere in the system — then manage the oil",
                "Change the oil to a lower viscosity grade so it returns more easily",
                "Fit a larger compressor sump",
              ],
              answer: 1,
              explain: "Compressors do not consume oil. If the level fell suddenly, the oil is lying in the condenser, receiver or evaporator because the refrigerant is no longer carrying it home — classically from a shortage of refrigerant or from flood-back. Top up blindly and once the fault is fixed all that oil returns at once and the compressor is badly overfilled. Add oil only for interim safety, fix the fault, and then remove the surplus.",
            },
            {
              q: "Why is a generously sized, high-efficiency filter-drier considered essential on an HFC system using POE oil?",
              options: [
                "POE oil breaks down faster than mineral oil and the drier removes the products",
                "POE holds moisture chemically, so evacuation alone will not remove it — and POE's solvent action also frees debris that must be captured",
                "The drier reduces the viscosity of POE oil",
                "HFC refrigerants require a drier for pressure drop reasons",
              ],
              answer: 1,
              explain: "Two properties drive it. POE absorbs water and holds it in a way a vacuum pump cannot extract, so the drier is the only practical dehydrator. And POE is a much better solvent than mineral oil, dissolving old oxidation products and insulation debris from dead corners of the system and delivering them downstream, where the drier has to catch them before they block something.",
            },
            {
              q: "Before removing the oil filler plug from a semi-hermetic compressor, what must be done?",
              options: [
                "Run the compressor for ten minutes so the oil is warm",
                "Pump the compressor down, isolate it, and fit gauges to confirm the sump pressure",
                "Recover the entire system charge",
                "Disconnect the crankcase heater only",
              ],
              answer: 1,
              explain: "The crankcase is a pressure vessel. If refrigerant pressure is still in it, pulling the plug produces a jet of hot oil and refrigerant — a genuine injury risk. Pumping down and isolating removes the pressure, and the gauge is what proves it, since a crankcase can hold pressure from refrigerant boiling out of the oil even after the plant is stopped. Recovering the whole charge is unnecessary when pump-down will do.",
            },
            {
              q: "A supermarket system is charged with 32 kg of refrigerant and has long line runs. Roughly what allowance of oil should be in circulation, on top of the compressor sump charge?",
              options: [
                "1 litre",
                "About 4 litres",
                "About 8 litres",
                "About 32 litres",
              ],
              answer: 1,
              explain: "The working rule is about one litre of oil for every eight kilograms of refrigerant charged, so 32 ÷ 8 = 4 litres. It is an allowance, not a precise figure — a flooded evaporator, an added oil separator (which has its own marked charge) or unusually long lines can all push it higher, and the manufacturer's figure always takes precedence.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
