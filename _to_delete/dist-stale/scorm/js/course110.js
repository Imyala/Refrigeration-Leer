/* =========================================================================
   Course content, module 110 — Brazing and welding.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 10 — Brazing and welding.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 10, Brazing and welding",
    "AS 1674.1 and AS 1674.2 — Safety in welding and allied processes (fire precautions; eye and face protection)",
    "AS/NZS 1337.1, AS/NZS 1338.1 — eye protectors and welding filters; AS 2030 — gas cylinders; AS/NZS 3000 — Wiring Rules",
    "Australian Refrigerant Handling Code of Practice, Part 1 — recovery before hot work on a charged system",
  ];

  const MODULES = [
    {
      id: "v1-brazing-welding",
      stream: "v1",
      title: "R1.10 · Brazing and welding",
      blurb: "How a refrigeration technician makes permanent, leak-free metal joints — oxyacetylene plant, silver brazing, arc welding — and how to do it without hurting anyone.",
      lessons: [

        /* ============================================================== */
        {
          id: "oxyacetylene-plant",
          title: "The oxyacetylene plant and its cylinders",
          minutes: 13,
          simple: "An oxyacetylene set is two bottles of gas, a pressure knob on each, two rubber hoses and a torch. One bottle holds fuel and the other holds pure oxygen, and mixing them at the torch gives a flame far hotter than a normal gas burner. Think of it like a gas barbecue that has been given its own supply of pure oxygen instead of ordinary air, so it burns fierce enough to melt metal.",
          refs: REFS,
          content: `
Almost every permanent joint in a refrigeration system is made with heat. A
silver-brazed joint is leak-tight, permanent, and as strong as the tube around
it, which is exactly what you want on a pipe that will sit at 2 500 kPa and
vibrate for fifteen years. Compression fittings and flares have their place, but
they are the joints that call you back. To make a brazed joint you need a heat
source that can put roughly 700 degrees Celsius into a copper joint in a few
seconds, and in Australian refrigeration that heat source is almost always an
oxyacetylene plant.

Oxyacetylene is not just "a torch". It is a small high-pressure gas installation
that you carry to site, assemble, pressurise and take apart again, often several
times a day. Knowing the parts and what each one is protecting you from is the
first competency in this chapter.

## What makes up a plant

- An **oxygen cylinder**, painted black in Australia.
- An **acetylene cylinder**, painted maroon.
- **Cylinder valves** and the **cylinder key** that opens the acetylene valve.
- Two **pressure regulators**, each with two indicators.
- Two **hoses** — red for acetylene, blue for oxygen.
- **Flashback arrestors**, fitted at the regulators and usually at the blowpipe.
- The **welding torch** or **blowpipe**, made up of a handpiece, two control
  valves, a mixer and an interchangeable tip.
- A trolley to keep the cylinders upright and secured.

## The cylinders are not the same animal

Industrial gas cylinders are manufactured to strict specifications and are
inspected by the gas supplier every time they are refilled. But oxygen and
acetylene store their gas in completely different ways, and that difference
drives most of the safety rules.

**Oxygen** is simply compressed. A full cylinder sits at up to about
20 000 kPa — roughly 200 times atmospheric pressure. Nothing is dissolved and
nothing is absorbed; it is raw stored energy behind a brass valve. The regulator
knocks that down to a working outlet pressure, typically a couple of hundred
kilopascals or less for brazing work.

**Acetylene** cannot be stored as a simple compressed gas. Above roughly
200 kPa, free acetylene becomes unstable and can decompose explosively without
any oxygen present at all. So an acetylene cylinder is packed solid with a
porous mass which is soaked with **acetone**. Acetylene dissolves into the
acetone the way carbon dioxide dissolves into a soft drink, and the cylinder is
filled to about 1500 kPa in that dissolved state. The porous filling means there
is no large open space in which a decomposition wave can build.

That storage method has two consequences you must respect:

1. The delivery pressure of acetylene **must never exceed 105 kPa**. Draw it
   harder than that and liquid acetone comes out of the cylinder with the gas,
   ruining the flame, attacking the hoses and carrying a fire risk down the line.
2. An acetylene cylinder is used and stored **standing upright**. Lay it down
   and the acetone can run to the valve and be discharged into the hose. If a
   cylinder has been transported lying down, stand it up and leave it for a good
   while before use.

>! Never use oxygen as a substitute for compressed air — not to blow out a
>! coil, not to dust off your clothes, not to pressure-test. Oxygen enriches
>! anything it touches. Oil, grease and even ordinary overalls that are lightly
>! oil-soaked will ignite spontaneously in an oxygen-rich stream. For the same
>! reason, never let oil or grease near an oxygen regulator, valve or fitting,
>! and never oil a cylinder thread "so it turns easier".

## Regulators, gauges and hoses

Each regulator has a pressure-adjusting screw and two indicators. One indicator
reads **cylinder contents** (the high pressure still in the bottle) and the
other reads **outlet pressure** (what you are actually feeding to the torch).
Students routinely confuse them. The contents gauge tells you how much gas you
have left; the outlet gauge is the one you set.

Screwing the adjusting screw **in** raises outlet pressure. Screwing it **out**
until it is loose closes the regulator. A regulator left wound in with the
cylinder shut is a regulator that will slam full cylinder pressure into its
diaphragm the moment somebody opens the bottle.

Fuel-gas connections use **left-hand threads** and are usually marked with a
notch cut around the nut, so that an acetylene hose physically cannot be fitted
to an oxygen regulator. Oxygen fittings are right-hand. Both cylinder valve
spindles, however, open the normal way — anticlockwise, right-hand thread.

Hoses are colour-coded so there is no guessing: **red is acetylene, blue is
oxygen**. Hoses must be kept clear of sparks, hot metal and the work itself, and
a hose with a cut, a bulge or a leak is scrap, not a repair job.

## Flashback arrestors

A flashback arrestor is a one-way, flame-stopping device fitted in each gas line.
Inside is a sintered metal element and a non-return valve. If flame ever travels
back up a hose, the element quenches it before it can reach the regulator and the
cylinder; the non-return valve stops one gas backfeeding into the other hose and
creating an explosive mixture inside the rubber. Arrestors are mandatory
equipment on a modern plant, not an accessory, and they have a service life —
many carry a date and are replaced on a schedule or after any flashback event.

## Inside the blowpipe

The torch has four functional parts:

| Part | Job |
|---|---|
| Control valves | Meter how much of each gas passes from the hoses into the torch — this is how you set the flame |
| Handpiece | The body you hold; carries both gases separately up to the mixer |
| Mixer | Brings oxygen and acetylene together in the right proportion just before the tip |
| Welding tip (nozzle) | The burner. Its bore size fixes the flame size and therefore the heat input |

Tips are interchangeable and come in a numbered range, plus cutting nozzles and
heating nozzles for other work. Oxy-cutting nozzles are a different design again
— they carry a ring of preheat flames around a central high-pressure oxygen
stream that burns the steel away — and are rarely used in refrigeration beyond
occasional bracket and plant-room steelwork.

## What to remember

- Oxygen: black cylinder, up to 20 000 kPa stored, right-hand threads.
- Acetylene: maroon cylinder, dissolved in acetone in a porous mass at up to
  about 1500 kPa, left-hand fuel threads, **105 kPa absolute maximum** delivery.
- Acetylene cylinders live and work upright.
- Red hose fuel, blue hose oxygen, flashback arrestor in each line.
- No oil, no grease, no oxygen used as air, ever.
`,
          quiz: [
            {
              q: "Why is acetylene dissolved in acetone inside a porous filling rather than simply compressed like oxygen?",
              options: [
                "Acetone makes the flame burn hotter",
                "Free acetylene becomes unstable above roughly 200 kPa and can decompose explosively even without oxygen",
                "Acetone stops the cylinder rusting internally",
                "It allows the cylinder to be filled to the same 20 000 kPa as oxygen",
              ],
              answer: 1,
              explain: "Acetylene is chemically unstable under pressure on its own, so it is dissolved in acetone held in a porous mass, which removes the free gas space a decomposition could travel through. It has nothing to do with flame temperature — and the whole point is that the cylinder is filled to only about 1500 kPa, far below oxygen's pressure.",
            },
            {
              q: "A trainee winds the acetylene regulator up to 150 kPa to 'get more heat into a big joint'. What is the immediate risk?",
              options: [
                "The oxygen hose will burst first",
                "Nothing — 150 kPa is within the normal working range",
                "Liquid acetone can be drawn out of the cylinder with the gas, spoiling the flame and creating a fire hazard in the hose",
                "The flashback arrestor will lock out permanently",
              ],
              answer: 2,
              explain: "The 105 kPa ceiling exists because above it the gas is being pulled out faster than it can come out of solution cleanly, so acetone comes with it. More heat comes from a bigger tip, not more pressure — and running a tip beyond its rated pressure is also a classic cause of flashback.",
            },
            {
              q: "What is the difference between the two indicators fitted to one regulator?",
              options: [
                "One shows cylinder contents pressure, the other shows the outlet pressure you are delivering to the torch",
                "One shows pressure and the other shows temperature",
                "One is for oxygen and one is for acetylene",
                "One reads in kPa and the other reads in kg of gas remaining",
              ],
              answer: 0,
              explain: "Each regulator carries a contents indicator (high-side, how much gas is left in the bottle) and an outlet indicator (what you have set for the torch). Mixing them up is why beginners try to 'set' a pressure on the contents gauge and get nowhere.",
            },
            {
              q: "Why do acetylene hose and regulator connections use left-hand threads?",
              options: [
                "Left-hand threads seal better against a lighter-than-air gas",
                "It is a legacy of imperial tooling with no safety purpose",
                "So a fuel-gas hose physically cannot be connected to an oxygen fitting, or vice versa",
                "So the nuts can be tightened with the same spanner as the cylinder key",
              ],
              answer: 2,
              explain: "The thread direction — plus a notch cut in the nut — is a mechanical poka-yoke that makes cross-connection impossible. Cross-connecting fuel and oxygen would push oxygen into the fuel line and create an explosive mixture inside the hose.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "opening-and-tip-selection",
          title: "Safe practice, opening the plant and choosing a tip",
          minutes: 12,
          simple: "There is a set order for turning an oxy set on, and a set order for turning it off, and doing it out of order is how people get hurt. You also have to pick the right size torch tip — too small and the copper never gets hot, too big and you melt it. It is like picking the right ring on a stove for the size of the pot.",
          refs: REFS,
          content: `
Oxyacetylene work kills and maims a small number of Australian tradespeople every
year, and almost none of it happens because someone did not know how to hold a
torch. It happens on set-up, on shutdown, in the back of a van, or because a
plant was used with a fault someone had been living with for a month. The habits
in this lesson are the difference.

## The standing safety rules

- Wear the gear: tinted goggles or a face shield to the correct shade, a leather
  apron, gauntlets, cotton or wool clothing with no cuffs, and enclosed footwear.
  Tie back or cover long hair.
- Keep oil and grease away from anything on the oxygen side. Do not work in
  oil-soaked overalls. Do not use oxygen as compressed air.
- Keep the plant and the work area tidy and free of combustibles. Know where the
  extinguisher is before you light up.
- Keep cylinders cool and out of direct sun, upright and restrained.
- Open a main cylinder valve only about **half a turn**, never more, and leave
  the key on the acetylene cylinder so anyone can shut it in an emergency.
- Never exceed 105 kPa acetylene.
- Keep hoses out of the line of sparks and hot work. Do not use a plant with
  leaking hoses — replace them.
- Ventilate. Fume from flux, brazing alloy, coatings and cleaning residues is
  not harmless.

>! Do not play a flame onto concrete, masonry or fibre-cement sheeting. Trapped
>! moisture flashes to steam and blows the surface apart, throwing fragments at
>! head height. Old fibre-cement sheeting may also contain asbestos, which makes
>! heating it a notifiable exposure event, not just a mess.

>! Disposable butane lighters explode. Take them out of your pocket before you
>! braze — a lighter in a chest pocket that is hit by spatter has the energy of
>! a small grenade at exactly the wrong height.

>! Transporting cylinders: secure them so they cannot roll or fall, and only in
>! a vehicle that is properly ventilated and set up for the job. Cylinders must
>! not travel inside a closed service van or a passenger car that has not been
>! specifically designed for it. A slow acetylene leak in an enclosed cabin is a
>! bomb waiting for the next spark from the ignition.

## Opening the plant, in order

1. **Check both regulators are closed** — that is, the adjusting screws wound
   fully out so they are loose. Do this before you touch a cylinder valve.
2. **Open each main cylinder valve slowly, about half a turn.** Both cylinder
   spindles are right-hand thread. Slowly matters: cracking a 20 000 kPa oxygen
   valve open fast heats the gas by rapid compression against the closed
   regulator seat and can damage or ignite it. Stand so the valve outlet is not
   pointing at you or anyone else.
3. **Leave the key in the acetylene cylinder valve.**
4. **Set the working pressures with gas actually flowing.** Crack the torch
   valve for that gas, wind the regulator screw in until the outlet indicator
   reads the pressure you want, then close the torch valve. A pressure set with
   no flow will sag as soon as you open the torch.
5. A typical starting point for refrigeration brazing tips is about **50 kPa on
   each regulator**, oxygen and acetylene equal.

The reason for setting pressures with flow is worth understanding. A regulator
holds outlet pressure by balancing a spring against the downstream gas pushing on
a diaphragm. With no flow, the downstream side simply fills up to the set point
and the valve shuts. Once gas starts moving there is a pressure drop through the
hose and tip, and the regulator has to open further to keep up. What you see on
a static gauge is not what the tip sees.

## Choosing a welding tip

Tip size, not pressure, sets the heat you can deliver. The right tip is the one
that brings the joint to brazing temperature **in a reasonable time**. Too small
and you stand there for a minute while heat conducts away up the tube, oxidising
everything and cooking the fitting; too big and you melt the copper before the
alloy flows.

Two things drive the choice: the process, and the thickness of the metal.

| Process and metal | 0.8 mm | 1.6 mm | 2.4 mm | 3.2 mm | 4.0 mm | 5.0 mm | 6.3 mm | 13 mm |
|---|---|---|---|---|---|---|---|---|
| Silver brazing, steels | 6-8 | 6-8 | 8 | 12 | | | | |
| Silver brazing, copper and brasses | 8 | 8 | 8 | 12 | | | | |
| Braze welding, steel | 6-8 | 6-8 | 8 | 12 | 12 | 15 | 15 | 20 |
| Braze welding, copper and brasses | 10 | 12 | 12 | 15 | 15 | 20 | 26 | |
| Fusion welding, steel | 8 | 8 | 8-12 | 15 | 15 | 20 | 20 | |

(Tip numbers as recommended for oxyacetylene equipment; treat them as a starting
guide. The physical size and mass of the parts also matters — a 1.6 mm wall tube
brazed into a heavy brass valve body needs more tip than the tube thickness alone
suggests, because the valve body is a heat sink.)

Bigger tips need more gas, but at the same pressure. Note in the table below that
regulator settings stay at 50 kPa across the range while consumption climbs — the
tip bore is doing the work.

| Tip size | Oxygen pressure (kPa) | Acetylene pressure (kPa) | Gas used, each gas (cubic metres/hour) |
|---|---|---|---|
| 10 | 50 | 50 | 0.128 |
| 12 | 50 | 50 | 0.210 |
| 15 | 50 | 50 | 0.34 |
| 17 | 50 | 50 | 0.45 |
| 21 | 50 | 50 | 0.68 |
| 26 | 50 | 50 | 1.04 |

### Worked example — will the bottle last the shift?

You are brazing a run of joints with a size 15 tip and expect roughly 2.5 hours
of actual flame-on time across the day.

- Consumption per gas: 0.34 cubic metres per hour.
- Acetylene used: 0.34 x 2.5 = **0.85 cubic metres**.
- Oxygen used: the same again, 0.85 cubic metres.

A common size G acetylene cylinder holds in the order of 8 cubic metres of gas,
so this is roughly a tenth of a bottle — comfortable. Run the same sum on a size
26 heating tip (1.04 cubic metres per hour) and you get 2.6 cubic metres in the
same 2.5 hours, three times the draw. That is how a job that "should have been
fine" runs a bottle dry at four o'clock.

If a particular job needs pressures changed from the nominal 50 kPa, change both
gases together so they stay roughly equal, and never take acetylene above
105 kPa.

## On the job

- Regulators wound out before cylinder valves are opened. Every time.
- Half a turn on the cylinder valve, opened slowly, key left in the acetylene.
- Set outlet pressures with gas flowing, oxygen and acetylene about equal.
- Pick the tip for the mass of metal, not just the tube wall.
- No lighters in pockets, no flames on concrete, no cylinders in the van cabin.
`,
          quiz: [
            {
              q: "Why should regulator pressures be set with the gas flowing rather than with the torch valves shut?",
              options: [
                "It makes the gauge needle easier to read",
                "Because the regulator must be warmed by flowing gas before it holds a setting",
                "Because pressure drops through the hose and tip once gas moves, so a static setting is not what the tip actually receives",
                "It is the only way to purge the flashback arrestor",
              ],
              answer: 2,
              explain: "A regulator holds a set outlet pressure by balancing spring force against downstream pressure on a diaphragm. Static, the line simply fills and the gauge reads the set point; flowing, there is a real pressure drop and the regulator opens further. Setting under flow is the only setting that reflects the working condition.",
            },
            {
              q: "Why is a main cylinder valve opened only about half a turn?",
              options: [
                "It limits gas flow so the regulator cannot be over-pressured",
                "So the gas can be shut off in a fraction of a second in an emergency, without a long unwinding",
                "It reduces gas consumption over the shift",
                "Because opening further would damage the regulator diaphragm",
              ],
              answer: 1,
              explain: "The half-turn rule is about speed of shut-off — combined with leaving the key on the acetylene valve, anyone can kill the gas supply instantly. It does not throttle flow in any useful way, because the regulator downstream is what governs delivery pressure.",
            },
            {
              q: "You must braze a 1.6 mm wall copper tube into a heavy brass service valve body. Compared with the tip size the table suggests for 1.6 mm copper, what should you do?",
              options: [
                "Use a smaller tip and take longer, to avoid overheating the tube",
                "Use the table size but raise acetylene pressure to 120 kPa",
                "Use the same tip and add a second torch",
                "Consider a larger tip, because the heavy valve body is a heat sink that will drag heat out of the joint",
              ],
              answer: 3,
              explain: "Tip selection follows the mass of metal to be heated, not just the thin part. A too-small tip on a heavy fitting means a long dwell, which oxidises the copper and cooks the valve internals. Raising acetylene pressure above 105 kPa is never the answer — it draws acetone out of the cylinder.",
            },
            {
              q: "With a size 21 tip, roughly how much acetylene is consumed in 90 minutes of flame-on time?",
              options: [
                "About 0.34 cubic metres",
                "About 1.02 cubic metres",
                "About 0.68 cubic metres",
                "About 2.04 cubic metres",
              ],
              answer: 1,
              explain: "A size 21 tip draws 0.68 cubic metres per hour of each gas. 0.68 x 1.5 h = 1.02 cubic metres. The 0.68 figure is the hourly rate, not the total, and 2.04 would be three hours' worth.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "flame-adjustment-and-faults",
          title: "Lighting up, flame types, backfires and shutting down",
          minutes: 14,
          simple: "The same torch can give three different flames depending on how much oxygen you let in, and picking the wrong one can wreck the joint even though it looks fine. You also need to know the two noises that mean trouble — a bang and a shriek — and exactly what to do about each. Turning the set off has its own order too, like locking up a workshop.",
          refs: REFS,
          content: `
A brazed joint fails for one of three reasons: it was dirty, it was the wrong
temperature, or it was made under the wrong flame. This lesson covers the third,
plus the two ways an oxyacetylene flame can misbehave and the shutdown routine
that stops the plant becoming somebody else's problem.

## Lighting up

1. Fit the tip you selected to the handpiece and nip it up. A loose or distorted
   tip is a leading cause of flashback.
2. **Purge the hoses.** Crack each torch valve in turn and let gas flow for a few
   seconds to blow out dust, moisture or residual mixed gas. Do this away from
   any ignition source and with ventilation.
3. **Light the acetylene first**, using a **flint gun** (spark lighter). Adjust
   the acetylene valve until the flame stops smoking heavily but is still sitting
   on the tip rather than blowing off it.
4. **Open the oxygen valve slowly** and bring the flame to the setting you want.

>! Use a flint gun, never a match and never a cigarette lighter. Lighting a torch
>! with a match puts your fingers in the gas stream at the moment it ignites, and
>! a butane lighter is a pressurised fuel container held next to a flame front.

An oxyacetylene flame burns at about **3200 degrees Celsius** when oxygen and
acetylene are supplied in roughly equal parts. That is comfortably above the
melting point of copper (1085 degrees Celsius), which is why brazing technique is
about *control*, not about maximum heat.

## The three flames

As you feed in more oxygen, the flame passes through three recognisable states.

| Flame | Mixture | How it looks | Typical use |
|---|---|---|---|
| Carburising | Excess acetylene | A long, feathery white inner cone with a hazy secondary feather around it | Hard facing, high-carbon steels, some cast iron, Inconel and Monel work |
| Neutral | Roughly equal oxygen and acetylene | A short, sharply defined blue-white inner cone; the feather has just disappeared | General purpose — the flame for silver brazing copper, and for mild steel, cast iron, lead, aluminium, magnesium alloys, stainless steel, copper-nickel alloys and low-melting-point alloys |
| Oxidising | Excess oxygen | Inner cone shorter still, sharper, noisier, with a slight hiss | Brass and bronze welding, bronze welding of cast iron and of galvanised iron, die-cast work — a slightly oxidising flame for braze welding |

The practical way to find neutral is to set a clearly carburising flame with the
acetylene feather showing, then slowly add oxygen until the feather **just**
retracts into the inner cone. That point is neutral. Add more oxygen from there
and you are into the oxidising range.

Why it matters: a carburising flame pushes carbon into the weld pool, hardening
and embrittling steel. An oxidising flame burns out alloying elements and forms
oxides that stop the brazing alloy wetting the copper. Neither fault is visible
until the joint leaks in service. Learning to recognise the three flames on sight
is a competency, not a nicety.

>! Silver brazing copper is done with a **neutral** flame, and the flame should
>! stay over the joint for the whole operation. Pulling the flame away part-way
>! lets the hot copper grab oxygen from the air and oxidise, and the alloy will
>! then refuse to flow into that area.

## Nozzle maintenance

The tip bore is precision work in soft copper alloy and it damages easily. Even
a slightly bell-mouthed or spatter-clogged bore distorts the gas stream, makes
the flame lean or wander, and invites backfire.

Clean tips with the **tip-cleaning reamers** sold in a wallet as a matched set —
a set of fine files sized to each bore. Use the right size, push straight in and
out, and do not twist. Never clear a tip with drill bits, welding wire, a nail or
a pocket knife: you will bell the mouth or score the bore and the tip is then
scrap. Wipe spatter off the face; do not scrape it.

## Backfire

A **backfire** is a momentary extinguishing of the flame, or the flame burning
back into the tip and popping. What you hear is a sharp bang at the tip. Causes:

- Touching the hot tip against the work, or letting spatter or particles get into
  the bore and obstruct flow.
- Overheating the tip, or using pressures too low for that tip size.

Often it clears itself — if the job is hot the torch simply relights. If it does
not relight immediately, **close both torch valves at once**. Then check your gas
pressures, let the tip cool, clean it if needed, and relight.

## Flashback

A **flashback** is far more serious: the flame burns back **into the blowpipe**,
or an explosive mixture ignites inside one of the gas lines. It can travel right
back down the hose. The sound is a **shrill hiss or squeal**, quite unlike the
bang of a backfire, often with black smoke and heat felt in the handpiece.

Response, in this order:

1. **Close the torch oxygen valve immediately.** Oxygen first — it removes the
   oxidiser that is sustaining the internal flame.
2. Close the torch acetylene valve.
3. Wait a few moments and confirm the flame is out.
4. If in any doubt, or if the hiss continues, shut both cylinder valves.
5. Let the tip and torch cool fully before relighting.

Most common causes: wrong gas pressures, a distorted or loose tip, and an
overheated or clogged tip.

>! A flashback always means something is wrong — with the plant or with the way
>! you are using it. Do not simply relight and carry on. Find the cause and fix
>! it. After any flashback, inspect the hoses along their length and have the
>! flashback arrestors checked or replaced; an arrestor that has done its job
>! once may not be fit to do it again.

## Closing down the plant

1. Close the **acetylene** valve on the handpiece — the flame goes out. Then
   close the **oxygen** valve on the handpiece.
2. Close **both cylinder valves**, firmly but without overtightening. Cylinder
   valve seats are soft and gorilla-tightening ruins them.
3. Bleed the oxygen side: open the oxygen valve on the handpiece and let the
   hose blow down. When **both** oxygen indicators fall to zero, close the
   handpiece valve, then wind the oxygen regulator screw right out.
4. Repeat step 3 for the acetylene side.
5. Coil the hoses neatly and hang them on the trolley — **not over the gauges**.
   Hoses draped over a regulator bend the gauge stems and eventually crack them.

Leaving the plant depressurised with the regulators wound out means the next
person to open a cylinder does not fire full bottle pressure into a loaded
diaphragm, and any hose that develops a leak overnight leaks nothing.

## What to remember

- Acetylene lit first with a flint gun, oxygen added slowly.
- Neutral flame is the feather just disappearing; that is the brazing flame.
- Bang at the tip is a backfire; shrill hiss is a flashback.
- Flashback: oxygen valve first, then acetylene, then investigate.
- Shut down torch valves, cylinder valves, bleed each hose, wind regulators out,
  hang the hoses off the gauges.
`,
          quiz: [
            {
              q: "You are silver brazing a copper joint and hear a shrill hissing from the torch. What is your first action?",
              options: [
                "Close the torch oxygen valve, then the acetylene valve",
                "Close the torch acetylene valve first so the fuel is removed",
                "Pull the torch away from the work and wait for it to settle",
                "Wind the acetylene regulator down to reduce pressure",
              ],
              answer: 0,
              explain: "A shrill hiss is a flashback — flame burning inside the blowpipe or gas line. Oxygen is closed first because removing the oxidiser stops the internal combustion fastest; the acetylene valve follows. Walking away or fiddling with a regulator leaves flame travelling toward the hose.",
            },
            {
              q: "How do you positively identify a neutral flame?",
              options: [
                "It is the loudest setting the tip will produce",
                "The inner cone glows orange rather than blue",
                "Add oxygen from a carburising setting until the acetylene feather just disappears into a sharp inner cone",
                "It is the setting with the longest, softest feather around the cone",
              ],
              answer: 2,
              explain: "Setting rich then adding oxygen until the feather just retracts gives a repeatable neutral flame. A long soft feather is carburising — excess acetylene — and going further past neutral produces a noisier, shorter oxidising cone that will oxidise the copper and stop the alloy wetting.",
            },
            {
              q: "A tip has become partly blocked with spatter. What is the correct way to clear it?",
              options: [
                "Use the matched tip-cleaning reamer of the correct size, straight in and out",
                "Run a drill bit slightly larger than the bore through it",
                "Increase oxygen pressure to blow the blockage clear",
                "Tap the tip on the bench until the debris falls out",
              ],
              answer: 0,
              explain: "Tip cleaners are sized files matched to each bore; used straight they restore the bore without changing it. A drill bit, wire or nail bells the mouth and scores the bore, permanently distorting the gas stream — which then causes the lean flames and backfires the technician was trying to cure.",
            },
            {
              q: "When shutting down, why are the hoses bled down and the regulator screws wound out?",
              options: [
                "To stop the acetone in the acetylene cylinder from congealing overnight",
                "So the next start-up does not fire full cylinder pressure into a loaded regulator diaphragm, and so a hose that develops a leak holds no gas",
                "Purely so the gauges read zero for the stocktake",
                "To keep the flashback arrestors dry",
              ],
              answer: 1,
              explain: "A depressurised plant with regulators unwound is safe to open next time and cannot leak gas from the hoses. The habit protects both the equipment and whoever opens the cylinder next — including the person who did not shut it down.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "soldering-and-joint-preparation",
          title: "Soft soldering, capillary action and joint preparation",
          minutes: 12,
          simple: "Brazing and soldering do not melt the pipe — they draw a molten metal glue into the tiny gap between two parts, and it gets sucked in the same way a paper towel soaks up a spill. That means the gap has to be small and the metal has to be clean, or nothing gets sucked anywhere. Most failed joints failed before anyone lit the torch.",
          refs: REFS,
          content: `
There is a fundamental difference between welding and the joining processes used
on refrigeration pipework. In **welding** the parent metals are melted and fuse
into each other. In **soldering and brazing** the parent metal is never melted;
a different, lower-melting filler metal is drawn into a close-fitting gap between
the parts and bonds to their surfaces. The parts stay solid the whole time.

The dividing line between the two filler processes is temperature:

| Process | Filler melts | Typical fillers | Where you meet it in refrigeration |
|---|---|---|---|
| Soft soldering | Below 450 degrees Celsius | Tin-lead, tin-silver, tin-copper lead-free solders | Electrical connections, some low-pressure drain and water work, occasional sensor pockets |
| Brazing (silver brazing, hard soldering) | Above 450 degrees Celsius | Silver brazing alloys, phos copper | Virtually all refrigerant pipework |
| Fusion welding | Parent metal melts | Filler rod of similar composition | Steel brackets, plant frames, heavy pipe |

Soft solder has no place in a refrigerant circuit. Its strength is a small
fraction of a brazed joint, it creeps under sustained load, and it will not
survive discharge line temperatures. You solder wires and you braze pipe. The
chapter is blunt about it: soft soldering, bronze welding and fusion welding all
exist as oxyacetylene processes, but their use in refrigeration is minor
alongside silver brazing.

## Capillary action — the physics you are relying on

Hold two clean, close-fitting surfaces together and touch molten filler to the
edge. The filler runs *into* the gap, against gravity if need be. That is
capillary action: the liquid metal wets the solid surface, and the surface
tension of the liquid in a narrow gap pulls it along.

Three conditions have to be met, and every one of them is something you control:

1. **The surfaces must be clean and oxide-free.** Molten filler cannot wet an
   oxide film. This is what mechanical cleaning and flux are for.
2. **The gap must be narrow and uniform.** Too tight and the filler cannot enter;
   too wide and capillary action collapses, leaving a thick, weak cast lump of
   alloy instead of a bonded joint.
3. **Both parts must be at temperature.** Filler flows toward heat. If one side
   of the joint is cold the alloy simply will not go there.

That second point produces one of the most counter-intuitive facts in the trade:
**the thinner the layer of filler in the joint, the stronger the joint**. A
brazed joint is not strong because it is full of silver — it is strong because a
thin film of alloy is metallurgically bonded to a large area of copper on both
sides. Thick filler is just weak cast metal.

## Designing and fitting the joint

The parts must fit accurately, and there must be enough overlapping contact area
for the load. A useful rule from the chapter: the length of contacting surface
needs to be about **three times the thinnest section** — for 1.0 mm wall tube,
about 3 mm of engagement is the minimum, and standard fittings give you far more
than that. Contact area does not have to be large; it has to be *correct*.

The tube should **slide** into the fitting. A press fit is wrong — it leaves no
capillary space at all. Equally, a sloppy fit gives no capillary action. If the
tube end is dented, oval, or out of round, size it properly with a sizing tool
before you go anywhere near a torch. Bent, distorted or partly collapsed ends
never braze reliably no matter how much alloy you feed in.

Good and poor designs follow a pattern:

- **Tube into a socket or fitting** with a uniform annular gap — good.
- **An unnecessary flare** on a tube before it enters the socket — poor. It
  opens the capillary gap out at exactly the point where the alloy has to enter.
- **A large step or restriction** at the joint — poor. It obstructs flow and
  creates a stress raiser.
- **Butting two tube ends together** and running alloy over the outside — poor.
  There is no capillary gap and no overlap, so it is a bead of alloy, not a joint.
- **Joining a light part to a heavy part** — design so the heavier part can be
  heated without cooking the light one, and always direct the greater share of
  heat into the heavier member.

## Cleaning — the step people skip

Clean the **outside** of the tube end and the **inside** of the fitting socket,
right down to bare bright metal, over the full length that will be inside the
joint. Use fine abrasive cloth, a fitting brush, or purpose-made cleaning tools.

Point the tube **downwards** while cleaning so abrasive grit and copper filings
fall out of the tube rather than into the system. Grit left inside a liquid line
ends up in the expansion valve.

Once cleaned, braze it. Copper starts re-oxidising immediately, and a joint
cleaned in the morning and brazed after lunch is a joint that was not cleaned.
Do not touch the cleaned surfaces with bare fingers — skin oil is a contaminant.

## What flux actually does

Where flux is required, apply a **thin** layer to the outside contact surface of
the tube only, over the area that will enter the socket. Its three jobs are:

- **Protect** the hot joint surfaces from oxidising while you heat them.
- **Dissolve** oxides already present on the metal.
- **Reduce the surface tension** between the molten alloy and the metal so that
  the alloy wets and spreads instead of balling up.

>! Do not slather flux on. Excess flux runs into the tube bore, where it becomes
>! a corrosive contaminant circulating in the refrigerant and oil. Flux inside a
>! system attacks copper, poisons the oil and blocks the drier. Apply a thin film
>! to the tube, not to the inside of the fitting.

## Assembly

With the parts cleaned and fluxed, assemble them, align them properly and
**support them securely** so nothing can move. A joint that shifts while the
alloy is freezing is a cracked joint. Use clamps, a vice, wire, a pipe stand or a
purpose-made support — never your hand and never "she'll hold".

Check the tube is fully home in the socket and that it is square, not cocked to
one side. A cocked tube gives you a gap that is tight on one side and wide on the
other, and the alloy will run through the wide side and out.

## On the job

- Solder is for wires; pipework is brazed.
- Capillary action needs clean metal, a narrow uniform gap, and even heat.
- Thin filler layer, strong joint; thick filler layer, weak joint.
- Overlap about three times the thinnest section; tube slides in, never a press
  fit.
- Clean pointing down, braze straight away, thin flux on the tube only.
- Clamp and align before you light up.
`,
          quiz: [
            {
              q: "Why does a thinner layer of brazing filler in the joint give a stronger joint?",
              options: [
                "Thin layers cool faster and so harden more",
                "Strength comes from a thin film metallurgically bonded over a large contact area; thick filler is just weak cast metal",
                "Thin layers use less silver so cost less",
                "It is not true — thicker filler is always stronger",
              ],
              answer: 1,
              explain: "The bond between filler and copper across the overlap area carries the load, not the bulk of the alloy. A wide gap filled with alloy behaves like a small casting: it has no bonded area advantage and the alloy alone is weaker than the bonded interface.",
            },
            {
              q: "A technician flares the tube end slightly before pushing it into a fitting socket, thinking it will help the alloy get in. What is the result?",
              options: [
                "Better capillary action because the entry is wider",
                "No change, since the alloy is fed at the socket mouth anyway",
                "The capillary gap is opened out at the entry, so the alloy does not draw into the joint properly",
                "The joint becomes stronger because the flare adds mechanical grip",
              ],
              answer: 2,
              explain: "Capillary action depends on a narrow uniform gap. A flare destroys that gap exactly where the alloy has to enter, so the alloy sits in the widened mouth as a bead instead of being drawn along the overlap. The chapter lists the unnecessary flare as a poor design.",
            },
            {
              q: "Why is the tube pointed downwards while its end is being cleaned?",
              options: [
                "So flux runs out of the tube",
                "So abrasive grit and copper filings fall clear instead of dropping into the tube bore and later into the system",
                "So the operator can see the joint more easily",
                "To let the tube cool faster after previous brazing",
              ],
              answer: 1,
              explain: "Anything that gets inside the tube stays in the system. Grit and swarf end up in the drier and expansion valve. Flux is applied after cleaning and is a separate concern — it also must be kept out of the bore, but by using a thin film rather than by orientation.",
            },
            {
              q: "What is the essential difference between brazing and fusion welding?",
              options: [
                "Brazing uses electricity and welding uses gas",
                "Brazing is only for steel and welding is only for copper",
                "Brazing melts the parent metal; welding does not",
                "In brazing the parent metal is never melted — a lower-melting filler is drawn into a close gap and bonds to the surfaces; in fusion welding the parent metals melt and fuse",
              ],
              answer: 3,
              explain: "This is the defining distinction. It also explains why joint fit-up and cleanliness dominate brazing quality: you are relying on capillary flow and surface bonding, not on melting the parts together.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "silver-brazing",
          title: "Silver brazing: filler alloys, fluxes and the procedure",
          minutes: 14,
          simple: "Silver brazing is the standard way to join refrigeration pipe. You heat the joint evenly, watch the flux change appearance as it gets hotter to tell you when the metal is ready, then touch the rod in and let it get sucked into the gap. Blowing dry nitrogen through the pipe while you do it stops black soot forming inside.",
          refs: REFS,
          content: `
Silver brazing joins copper to copper, copper to brass and brass to steel — the
three combinations you meet constantly in refrigeration. Done properly it gives a
joint that is leakproof, permanent and at least as strong as the tube. Done
badly it gives a joint that passes a pressure test and leaks in eighteen months.

The whole operation reduces to seven steps:

1. Clean the joint mechanically.
2. Fit the joint closely and support it.
3. Apply flux to match the alloy, if the alloy needs one.
4. Heat evenly to the correct temperature.
5. Apply the brazing alloy as directed.
6. Cool the joint properly.
7. Clean the joint thoroughly afterwards.

Steps 1 to 3 were the previous lesson. This lesson is about what to feed the
joint and how to control the heat.

## Choosing a filler alloy

| Filler | Silver content | Melting behaviour | Tensile strength | Flux on copper? | Notes |
|---|---|---|---|---|---|
| Phos copper (copper-phosphorus) | none, or very low | Melts about 715 degrees Celsius | about 370 MPa | Not required on copper and copper-base alloys | Cheap, self-fluxing on copper. Low ductility. **Never on steel or on ferrous fittings** — brittle iron phosphides form |
| SBA 115 (15 per cent silver alloy) | 15 per cent | Melts over about 645 to 700 degrees Celsius | about 700 MPa | Not required on copper and copper-base alloys | The workhorse for refrigeration pipework — lower melting point and higher tensile strength than phos copper |
| SBA 245 (dark blue tip) | High silver | Alloy melts at 610 degrees Celsius, flows at 620 degrees Celsius | High | **Yes — a silver brazing flux is required** | Free-flowing, low temperature, used for joining dissimilar metals such as copper to steel |
| SBA 102 / SBA 105 | Low | — | Adequate joint strength | — | Adequate strength but **low ductility** |

Two engineering points follow from that table.

**Lower melting point is a real advantage.** SBA 115 flows around 645 to
700 degrees Celsius against 715 for phos copper. Seventy degrees may not sound
like much, but at brazing temperatures every degree of extra heat is more
oxidation, more annealing of the tube, more risk to nearby valve seats and
solenoid coils, and more thermal distortion. Combine that with roughly double the
tensile strength and you can see why the silver-bearing alloy dominates
refrigeration work despite costing more.

**Low ductility is a real disqualifier.** Phos copper, SBA 102 and SBA 105 have
adequate static strength but they are brittle. Anywhere the joint will be
strained repeatedly — a suction line that expands and contracts through a wide
temperature swing, a line near a reciprocating compressor, a joint that carries
vibration — the brittle alloys will eventually crack. Use a higher-silver,
ductile alloy in those positions.

>! Phos copper on steel is a classic apprentice mistake. Phosphorus reacts with
>! iron to form brittle iron phosphides at the interface. The joint looks
>! perfect, tests fine, and snaps. On any joint involving steel — a filter drier
>! shell, a steel accumulator, a steel valve body — use a silver alloy with a
>! suitable flux.

Silver brazing also needs a flux whenever the alloy calls for it or a ferrous
part is involved. The self-fluxing behaviour of phos copper and SBA 115 applies
only to copper and copper-base alloys.

## Reading the flux — your temperature gauge

You have no pyrometer on a copper joint, so the flux tells you where you are.
Watch it go through these stages as the joint heats:

| What the flux does | Approximate temperature | What it means |
|---|---|---|
| Dries out, water boils off | 100 degrees Celsius | Just getting started; keep the flame moving |
| Turns milky white | rising | Water gone, flux beginning to work |
| Bubbles up | about 315 degrees Celsius | Well short of temperature; keep heating |
| Turns to a clear, glassy liquid | about 600 degrees Celsius | Almost there — just short of brazing temperature |
| Alloy touched to joint melts | 610 degrees Celsius (SBA 245) | At temperature |
| Alloy flows into the joint | 620 degrees Celsius (SBA 245) | Correct — feed the rod |

Clear glassy flux is the signal to bring the rod in. If the flux has gone dark,
crusty or black, it is spent — the joint has been overheated or held too long,
and you should stop, let it cool, clean everything back to bright metal and start
again. Adding more flux to a burnt joint does not fix it.

## Purging with dry nitrogen

Heat plus oxygen plus copper gives copper oxide — the black flaky scale that
forms on the **inside** of the tube where you cannot see it. That scale
eventually breaks loose and travels: it blocks screens and expansion valves,
scores compressor bearings and loads the drier.

The fix is to flow **dry oxygen-free nitrogen** through the pipe while brazing
and while it cools, so there is no oxygen inside the tube to react.

- Connect the nitrogen cylinder through a **pressure-regulating valve**. A dry
  nitrogen cylinder sits at around **14 000 kPa** — no cylinder is ever used
  without a regulator.
- Set a low, gentle flow — enough to displace the air, not enough to blow the
  molten alloy out of the joint. A soft flow you can just feel on the back of
  your hand at the open end is about right.
- Provide an escape path. Nitrogen must flow *through*, so leave an open end or
  a cracked valve, otherwise pressure builds and the alloy is blown out.
- Keep it flowing until the joint has cooled.

>! Never purge with refrigerant, and never with compressed air. Refrigerant
>! passing through a flame decomposes into hydrogen fluoride, hydrogen chloride
>! and other highly toxic products. Compressed air contains oxygen (defeating the
>! purpose) and moisture and can, in the presence of oil, form an explosive
>! mixture. Only nitrogen or carbon dioxide are acceptable, and nitrogen is the
>! standard.

>! Where any soldering or brazing is done on a **complete mechanism**, inert gas
>! must be circulated through the system to prevent an explosion. Before hot work
>! on a charged system, the refrigerant charge must be recovered by a licensed
>! person under the Australian Refrigerant Handling Code of Practice — you do not
>! braze on a live charge.

## Making the joint

1. Light up and set a **neutral** flame.
2. Apply heat to the joint with the torch in **constant motion**. Never park the
   flame on one spot.
3. Direct the greater share of heat at the **heavier** member. A tube entering a
   heavy fitting needs most of the flame on the fitting, or the tube will be at
   temperature while the fitting is still cold and the alloy will not run into
   the socket.
4. Move the flame back and forth until both parts are evenly heated and the flux
   is clear and glassy.
5. Apply the alloy **at the point where the tube enters the socket**, not into
   the flame. If the joint is at temperature the joint will melt the rod; if you
   have to melt the rod with the flame, the joint is not hot enough.
6. Keep feeding alloy until a **continuous fillet** appears all the way around
   the mouth of the socket.
7. Keep the flame covering the joint throughout, to limit oxidation of the
   prepared surfaces.

## Cooling, cleaning and inspecting

The joint may be cooled quickly or slowly — either is acceptable. Water cooling
is permitted and has the advantage of washing the joint at the same time, but
take care that water cannot enter the tube or fittings through any unsealed end.

Where flux has been used, **wash and scrub the finished joint thoroughly**. Two
reasons, and the second one is the sneaky one:

- Flux residue left on copper or brass is corrosive and will attack the metal.
- Residual flux can **temporarily plug a small leak**. The joint passes your
  pressure test, the plant is commissioned, and the flux washes or bakes out
  weeks later. The customer then has a slow leak that you signed off on.

Inspect visually all the way around. A continuous, bright fillet with the alloy
visibly wetted onto both parts is good. Dull, balled, pitted or missing alloy
means it did not adhere there. Better still, watch adherence *while* you are
brazing and correct it then, because a re-braze on a cold joint means cleaning
and refluxing all over again.

## On the job

- Neutral flame, torch always moving, most heat on the heavy part.
- Flux clear and glassy is the go signal; black crusty flux means start again.
- Feed the rod at the socket mouth and let the joint melt it.
- Dry nitrogen flowing through the tube during brazing and cooling, regulated,
  gentle, with a vent path.
- Never purge with refrigerant or compressed air.
- Wash all flux off, then inspect the full circumference of the fillet.
`,
          quiz: [
            {
              q: "The flux on a joint has turned to a clear glassy liquid. What does this tell you?",
              options: [
                "The joint is at roughly 315 degrees Celsius and needs much more heat",
                "The joint is close to brazing temperature — bring the alloy in",
                "The joint has been overheated and the flux is spent",
                "The flux was applied too thickly",
              ],
              answer: 1,
              explain: "Clear glassy flux corresponds to roughly 600 degrees Celsius, just short of the temperature at which a common silver alloy melts at 610 and flows at 620. Bubbling is the 315 degree stage, well short; a black crusty appearance is the overheated, spent condition that means starting again.",
            },
            {
              q: "Why must a nitrogen purge have a vent path out of the system and only a gentle flow?",
              options: [
                "Because nitrogen is toxic and must be exhausted outdoors",
                "So the nitrogen can be reclaimed at the far end",
                "So the gas actually flows through to displace air, and so pressure does not build up and blow the molten alloy out of the joint",
                "Because the regulator will freeze if there is no flow",
              ],
              answer: 2,
              explain: "A dead-ended purge does not displace anything and can pressurise the joint at exactly the moment the alloy is liquid, blowing a hole in it. The nitrogen must flow through and out. Nitrogen is not toxic, but it is an asphyxiant in a confined space — a separate ventilation concern.",
            },
            {
              q: "You need to braze a copper suction line into a steel filter drier shell. Which filler is inappropriate and why?",
              options: [
                "SBA 245 with flux, because it flows at too low a temperature for steel",
                "Phos copper, because phosphorus forms brittle iron phosphides with steel",
                "SBA 115, because 15 per cent silver is too little for a drier",
                "Any silver alloy, because steel cannot be brazed",
              ],
              answer: 1,
              explain: "Phos copper is self-fluxing and excellent on copper-to-copper, but on any ferrous part the phosphorus produces brittle interfacial compounds and the joint will crack in service. A silver alloy with an appropriate flux is the correct choice — SBA 245 is specifically noted for dissimilar metals.",
            },
            {
              q: "Why must all flux residue be washed off a completed joint?",
              options: [
                "Because flux is flammable once dry",
                "Only for appearance — flux residue is chemically inert",
                "Because it corrodes the metal, and because it can temporarily seal a small leak that then shows up weeks later",
                "Because it prevents the joint from being pressure tested",
              ],
              answer: 2,
              explain: "Both effects matter, but the second is the one that catches technicians out. A flux-plugged leak passes commissioning, then the plug washes or bakes out and the customer has a slow leak on a job you certified. Wash and scrub, then inspect the fillet all the way round.",
            },
            {
              q: "Where should the brazing alloy be applied?",
              options: [
                "Into the flame, so that it melts and drips onto the joint",
                "At the point where the tube enters the socket, letting the heat of the joint itself melt the rod",
                "On the far side of the fitting so it draws right through",
                "Onto the flux before heating begins",
              ],
              answer: 1,
              explain: "If the joint is at temperature it will melt the rod on contact, and capillary action pulls the alloy into the gap. If you have to melt the rod with the flame, the joint is too cold and the alloy will sit on the surface without wetting or drawing in.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "brazing-field-and-heat-treatment",
          title: "Brazing in the field, protecting components, and heat treatment",
          minutes: 12,
          simple: "On site you are brazing next to valves, driers and wiring that a torch will destroy, so you shield them with wet rags or take them apart first. Heating metal also changes how hard or soft it is — you can soften copper so it bends, or harden steel so it holds an edge. It is the same idea as tempering a knife blade.",
          refs: REFS,
          content: `
Bench brazing in a training bay is easy. Brazing a joint 300 mm from a solenoid
valve, above a suspended ceiling, in a plant room with an unrated timber wall
behind it, is where technicians damage plant and start fires. This lesson is the
field craft, plus the heat-treatment knowledge that explains why heating metal
changes its properties.

## Ventilation and the working area

Silver brazing generates fume — from the flux, from the alloy, from any residue
or coating on the metal. The working area must be **adequately ventilated**, but
**not subject to excessive draught**. That is a genuine balance, not a
contradiction:

- Too little air movement and fume accumulates in your breathing zone.
- Too much and the draught strips heat from the joint, chills one side of it
  unevenly, and can blow the nitrogen shield out of an open pipe end.

The practical answer is general ventilation or local extraction placed so it
draws fume away from your face without blowing across the joint.

## Shielding the work

Two shielding methods are standard:

- **A wet cloth or wet rag** laid over or wrapped around whatever must not get
  hot. Water absorbs a very large amount of heat as it evaporates, so a
  water-soaked cloth holds the part it covers near 100 degrees Celsius until it
  dries out. Re-wet it if the job runs long.
- **A sheet of non-flammable shielding material** placed between the flame and
  whatever is behind the joint — a wall, insulation, cable trays, a ceiling tile.

>! Hot work in an occupied building needs a hot work permit, a fire watch, and a
>! serviceable extinguisher within reach. Sparks and hot alloy travel a long way,
>! fall through gaps and smoulder for hours in insulation or dust. Never light up
>! with combustible material or foam insulation in the line of the flame, and
>! check the area again before you leave site.

## Protecting components from heat

Silver brazing temperatures will destroy most of the things bolted into a
refrigeration circuit. Solenoid valve seats and coils, shut-off valve seats and
stem packing, expansion valve powerheads, sight glasses, driers, Schrader cores
and any elastomer seal all fail well below 600 degrees Celsius.

Three techniques, in order of preference:

1. **Remove the vulnerable parts.** Unbolt the solenoid coil, remove the valve
   internals if the valve is designed for it, take out the Schrader core. This is
   the only method that is completely reliable.
2. **Direct the flame away** from the vulnerable item, so the body of the valve
   is between the flame and the seat. Braze from the far side of the joint.
3. **Wrap the item in water-soaked cloths** and keep them wet, and cool the
   brazed connection afterwards to stop heat soaking along the tube.

>! Excessive heat will damage a valve's tube-to-body gasket and the packing on
>! its manual opening stem. The damage is invisible — the valve looks fine and
>! leaks refrigerant slowly from the stem for the rest of its life. If in doubt,
>! strip the valve.

Remember also that heat soaks *along* copper after you stop. Cooling the joint
with a damp cloth once the alloy has frozen limits how far that heat travels
toward a component 200 mm down the line.

## Heat treatment of metals

Brazing and welding are heat treatment whether you intend it or not, so it pays
to understand the four classical processes.

### Annealing — making metal soft

Annealing softens a metal and relieves internal stress.

- **Carbon steels:** heat uniformly to a red heat, then cool **slowly** — in
  still air, or buried in hot ashes or powdered lime to slow the cooling further.
- **Mild steel** contains very little carbon and is already comparatively soft,
  so there is not much to anneal out of it.
- **Copper:** heat uniformly to a red heat and then **quench in water**. This is
  the opposite of the steel rule and catches people out. Quenching copper also
  helps clean the surface.

Annealed copper is what you want before bending or flaring work-hardened tube.
Note that every brazed joint anneals the copper around it — which is why a tube
that has been brazed near a bend behaves differently to new tube.

### Hardening — making steel hard

Most carbon steels harden by heating slowly to a red heat and then quenching in
clean water or oil. The result is hard and, in high-carbon steels, **very
brittle**. Mild steel cannot be significantly hardened this way because there is
not enough carbon in it.

**Copper does not harden by heating and quenching — it hardens by working.**
Bending it, hammering it, or drawing it through a die hardens it. This is exactly
why copper tube stiffens as you work it and why refrigeration tube arrives as
either soft annealed coil or hard drawn straight lengths.

### Tempering — trading hardness back for toughness

Hardened steel is too brittle to use as a tool, so it is tempered: reheat the
hardened steel to a specific, lower temperature and then quench it again in water
or oil. This reduces brittleness and increases toughness at the cost of some
hardness.

The temperature is judged by the **temper colours** that form on a clean, bright
steel surface as it heats — a sequence running from pale straw through gold,
brown, purple and blue. Different tools need different temperatures, read from a
temper colour chart: a scriber or a lathe tool wants the harder, paler end; a
cold chisel or a screwdriver blade wants the tougher, darker end.

### Case hardening — a hard skin on a soft core

Low-carbon steels such as mild steel cannot be through-hardened, but they can be
**surface hardened**. Heat the steel to cherry red, plunge it into a commercial
case-hardening compound, then quench in water. The process converts a thin
surface layer into a carbon steel that will harden.

Repeating the cycle builds a deeper case. Even so, the hardened layer is
typically only **hundredths of a millimetre** deep. That is enough for wear
resistance on a bearing surface or a pin, while the tough, ductile mild-steel
core underneath resists shock.

| Process | What it does | Typical method |
|---|---|---|
| Annealing | Softens, relieves stress | Steel: red heat, slow cool. Copper: red heat, quench |
| Hardening | Makes carbon steel hard and brittle | Red heat, quench in water or oil (mild steel will not respond) |
| Tempering | Reduces brittleness after hardening | Reheat to a colour from the chart, quench |
| Case hardening | Hard wear surface on a soft core | Cherry red, case-hardening compound, quench; repeat for depth |

## On the job

- Ventilate, but do not braze in a draught.
- Wet cloths for what must stay cool, non-flammable sheet for what is behind.
- Strip valve internals and coils where you can; shielding is the fallback.
- Copper anneals by quenching and hardens by working — the reverse of steel.
- Mild steel will not through-harden; case harden it if you need a wear surface.
- Hot work permit, fire watch, and a look back at the area before you leave.
`,
          quiz: [
            {
              q: "How do you anneal copper tube, and why does it surprise people who have annealed steel?",
              options: [
                "Heat to red heat and cool slowly in ashes — the same as steel",
                "Heat to red heat and quench in water — the opposite of the slow cooling used for carbon steel",
                "Heat gently to 200 degrees Celsius and let it stand overnight",
                "Copper cannot be annealed; it must be replaced",
              ],
              answer: 1,
              explain: "Copper anneals by heating to red heat and quenching, which also cleans the surface. Carbon steel anneals by cooling slowly and would in fact be hardened by quenching. Applying the steel rule to copper leaves it no softer than it started.",
            },
            {
              q: "You must braze a joint 150 mm from a solenoid valve with its coil fitted. What is the best course of action?",
              options: [
                "Remove the coil and, where possible, the valve internals before brazing",
                "Braze quickly on full flame so the heat has no time to travel",
                "Wrap the whole valve in dry rag",
                "Fit a larger tip so the joint is finished sooner",
              ],
              answer: 0,
              explain: "Removal is the only fully reliable protection; wet cloths and directing the flame away are fallbacks when removal is not possible. Dry rag is worthless — it is the evaporating water that absorbs the heat, and dry rag is simply fuel. Going faster with a bigger tip still soaks heat down the copper.",
            },
            {
              q: "Why is a case-hardened mild steel component useful even though the hardened layer is only hundredths of a millimetre deep?",
              options: [
                "The layer grows thicker in service",
                "Because mild steel is already hard throughout, so the case is decorative",
                "The thin hard case gives wear resistance while the tough ductile core underneath resists shock",
                "It prevents the part from rusting",
              ],
              answer: 2,
              explain: "Case hardening is deliberately a composite: hard skin for wear, ductile core for impact. Through-hardening a part would make it brittle all the way through. The case does not thicken in service, and it is not a corrosion treatment.",
            },
            {
              q: "Why is 'adequate ventilation but not excessive draught' the requirement for a brazing area?",
              options: [
                "Draught makes the flux burn faster than the alloy melts",
                "Draught causes the acetylene regulator to freeze",
                "Ventilation removes fume from your breathing zone, but a strong draught chills the joint unevenly and can strip away the nitrogen shield",
                "Ventilation is only needed when using phos copper",
              ],
              answer: 2,
              explain: "Both halves of the requirement are real. Fume from flux and alloy must be moved away from the operator, but a strong cross-draught takes heat out of the joint unevenly and can blow the inert gas shield out of an open pipe end, which brings the internal oxide scale straight back.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "mmaw-equipment",
          title: "Manual metal arc welding: equipment and electrodes",
          minutes: 13,
          simple: "Stick welding uses an electric spark between a metal rod and the job to melt both together. The rod has a chalky coating that burns to make a gas shield and a slag crust, which keeps air away from the hot metal so the weld does not go brittle. It is like a candle that makes its own draught shield.",
          refs: REFS,
          content: `
Some refrigeration technicians arc weld every week — brackets, plant frames,
pipe supports, condenser stands. Others never touch it. It is a hand skill that
has to be practised to gain and to keep, and this material outlines the
principles and equipment so that you can practise simple welds under supervision.
Anything beyond that belongs in a proper welding course.

**Manual metal arc welding (MMAW)** — also called stick welding — strikes an
electric arc between a consumable flux-coated electrode and the work. The arc
melts the parent metal and the electrode core together into a weld pool, and the
flux coating burns to form a shielding gas and a slag blanket.

## What a MMAW set-up needs

- An electric arc welding machine, AC or DC.
- Two flexible insulated cables — an electrode lead and a work (return) lead.
- An electrode holder.
- A work clamp (earth clamp).
- Miscellaneous tools — welding screen, chipping hammer, wire brush.
- Personal protective equipment.

### The machine

Welding machines fall into four groups:

| Type | Output | Notes |
|---|---|---|
| DC generating unit | Direct current | Engine-driven or motor-generator; terminals marked positive and negative so polarity can be chosen |
| AC transformer unit | Alternating current | Simple and cheap; terminals marked "electrode" and "work" |
| AC machine with high-frequency or pilot arc attachment | AC with superimposed HF | Needed for thin plate and some non-ferrous work |
| Rectifier unit | AC or DC | Transformer plus rectifier |

All of them provide **variable current control** so the output can be matched to
the electrode size. For most general applications an AC machine with a secondary
(open circuit) voltage of about **70 volts** is quite suitable. Some electrodes,
however, will only run on DC — check the electrode packet against the machine you
have before you start.

### Cables

The electrode lead must be **fully insulated over its whole length** and as
flexible as possible so your hand can move freely. The work lead must also be
fully insulated but does not need the same flexibility.

Both must be sized for the maximum welding current of the plant. An undersized
cable overheats, cooks its own insulation and — because of the voltage drop along
it — delivers less current than the machine thinks it is delivering, so the weld
suffers too.

Cable **length** matters for the same reason: resistance rises with length,
voltage drops, and welding power at the arc falls. If the electrode lead plus
work lead together exceed **30 metres**, step up a cable size to compensate.

Terminations must be clean, tight and metal-to-metal. A dirty or loose connection
is a resistance, a resistance dissipates heat, and that heat destroys insulation.
Usefully, this gives you a free diagnostic: run a hand along the leads and
terminations after a period of welding, and any point that is noticeably warm is
a bad connection.

>! Replace cables when the insulation is damaged. A cable with worn insulation
>! lying across a damp concrete floor puts open-circuit voltage where you will
>! kneel on it.

### Electrode holders

Choose a holder on current-carrying capacity, light weight, balance and comfort.
The jaws must grip the electrode firmly but release it quickly, and must allow
the electrode to be gripped **at different angles** so you never have to bend it.

Bending electrodes is bad practice, and common. It cracks and flakes the flux
coating. Where the coating is missing, that part of the electrode has no
shielding gas and no slag — so it makes a defective weld, or you have to break
the arc and discard the damaged section, which on a long electrode is expensive.

For most applications the holder should be **fully insulated**, so live metal
cannot touch a metal surface (causing a short and a flash) or any part of your
body. This is essential where you may be in contact with the work — inside tanks
and vessels, or in a confined space — or where you might touch both the holder
and the work at once and put current through your body.

A faulty holder is a real hazard. Loose parts or a poor cable termination make it
overheat. Keep the cable properly connected and replace springs, washers and jaw
parts before they deteriorate.

### Work (earth) clamps

Good return connection is essential. The bush practice of splaying the cable end
out and weighing it down with scrap, or wedging it between the job and the
concrete floor, causes real damage. If the work lead is not fully contacting the
job, some current finds its way through the (often damp, and therefore
conductive) concrete and returns to the machine through its **earthing
conductor**. That earth wire is comparatively thin, it overheats badly under
welding current, and it can melt or damage the machine.

Fit an approved earth clamp — alligator style or G-screw style — and check
frequently that it is gripping properly. Spring-clip clamps weaken through
straining and overheating; keep spare springs in the welding bay.

### Tools

Cleaning the job before a run, and again once it is finished, calls for two hand
tools every operator carries: a **chipping hammer** and a **wire brush**. Slag
removal throws hard fragments, so shield the eyes and face behind a chipping
screen — a light fibre screen with a clear lens. Subsidiary tools: engineer's
hammer, cold chisels, tongs for hot work, and clamps.

### Protective equipment

- **Screens.** A hand-held screen of lightweight, insulating, non-reflecting
  material, large enough to shield your face, throat, wrist and the hand holding
  it, is adequate for many jobs. A **helmet screen** frees both hands — necessary
  when you need to hold the work, or simply to hold on so you do not overbalance.
- **Filter lens.** The filter must be the correct shade for the amperage in use.
  Filters are expensive; protect them with clean plain cover glasses on **both**
  sides.
- **Gloves.** Leather, always. They protect against shock, infra-red radiation
  and hot spatter. Keep them **dry** — wet gloves conduct electricity. Do not
  ruin them handling hot work; use tongs.
- **Body protection.** A leather apron covering from about the throat to the
  knees. For overhead work, add leather spats, shoulder capes and sleeves.

>! Welding fume from MMAW is hazardous, exactly as it is for GMAW. Everything
>! covered in the arc welding safety lesson about ventilation, extraction,
>! confined spaces and respiratory protection applies here too.

## Electrode design

Electrodes divide into three families:

**Bare wire** predates covered electrodes. Its deposited metal is unprotected
from the atmosphere, so oxygen and nitrogen combine with the molten metal to form
oxides and nitrides — giving welds that are brittle and low in ductility and
strength. It is also difficult or impossible to run on a standard AC plant.
Except in special automatic applications, it is obsolete.

**Carbon or graphite electrodes** supply the heat of fusion only, like an oxy
flame; filler is added separately with a rod of composition similar to the parent
metal. Carbon arc welding is not extensively used in Australia.

**Covered (flux-coated) electrodes** are now almost universal. A core wire is
surrounded by a flux coating that does seven jobs:

1. Produces a **gaseous shield** protecting the metal as it crosses the arc gap.
2. Contains **arc stabilisers** that ionise the gap and give a steady arc.
3. Carries **deoxidisers** that remove oxygen from the weld metal.
4. **Cleans** the work piece, as flux does in soldering.
5. Can **introduce alloying elements** into the deposit even when the core wire
   is plain mild steel.
6. Forms a **protective slag** over the cooling weld, preventing oxide formation
   and slowing the cooling rate.
7. The slag helps produce a bead of the desired **contour**.

What typically goes into a coating: rutile, silica, felspar, limestone and
fluorspar, which between them build the slag and the gaseous shield;
ferro-silicon and ferro-manganese, which act as deoxidisers; nickel powder,
ferromolybdenum and ferrochromium, which add alloy for hardness and tensile
strength; and sodium and potassium silicates, which bind the whole coating onto
the core wire.

## Types of covered electrode

| Type | Character | Use |
|---|---|---|
| General purpose | Easy running, slightly convex, smooth regular bead; usable in all positions | The main shop electrode |
| Downhand | Heavily coated, high mechanical properties, not suited to out-of-position work | Flat and horizontal work where properties matter |
| Positional | Formulated for vertical and overhead; bead less convex than general purpose | Out-of-position welds |
| Deep penetration | Lightly coated, largely cellulosic, fierce arc | Where deep penetration is required |
| Low hydrogen | Developed for low-alloy steels; combats hydrogen pickup | Low-alloy and hardenable steels |

**Low-hydrogen electrodes** deserve a note. Welding low-alloy steel with ordinary
mild steel electrodes gave poor results because hydrogen enters the weld and the
transition zone, and in the transition zone hydrogen causes **underbead
cracking**. Low-hydrogen coatings are formulated to avoid this — but they must be
kept **thoroughly dry**, because moisture in the coating is itself a source of
hydrogen. That is why low-hydrogen rods live in a heated quiver or oven, not in
the bottom of a damp toolbox.

Because characteristics vary between manufacturers, always consult the maker's
data when selecting an electrode for a particular purpose.
`,
          quiz: [
            {
              q: "Why must the work lead be clamped properly to the job rather than relying on contact through a concrete floor?",
              options: [
                "Concrete floors damage the cable insulation",
                "Some welding current returns through the machine's thin earthing conductor, overheating it and damaging the machine",
                "It makes the arc harder to strike but is otherwise safe",
                "The concrete would be permanently discoloured",
              ],
              answer: 1,
              explain: "Damp concrete conducts well enough to carry part of the welding current, which then finds its way back to the machine through the earthing conductor. That conductor is sized for fault protection, not welding current, so it overheats and can melt or damage the machine.",
            },
            {
              q: "A welder habitually bends electrodes to reach awkward joints. What is wrong with this?",
              options: [
                "It shortens the electrode and wastes core wire",
                "It changes the electrode's current rating",
                "It cracks and flakes the flux coating, so those sections have no gas shield or slag and produce defective weld",
                "Nothing — it is standard practice for positional work",
              ],
              answer: 2,
              explain: "The coating is what provides shielding gas, deoxidisers, arc stabilisers and slag. Where it flakes off, the weld metal is exposed to the atmosphere and becomes porous and brittle. The right answer is a holder whose jaws grip at different angles so bending is unnecessary.",
            },
            {
              q: "Why must low-hydrogen electrodes be kept thoroughly dry?",
              options: [
                "Damp coatings will not ignite an arc on an AC machine",
                "Moisture makes the slag impossible to chip off",
                "Water in the coating is itself a source of hydrogen, which causes underbead cracking in the transition zone",
                "Damp electrodes rust the core wire and lower the tensile strength",
              ],
              answer: 2,
              explain: "The entire point of a low-hydrogen electrode is to keep hydrogen out of the weld and the heat-affected transition zone, where it causes underbead cracking in hardenable steels. A damp coating defeats the process completely, which is why these rods are stored in a heated oven or quiver.",
            },
            {
              q: "The combined length of your electrode lead and work lead is 45 metres. What should you do?",
              options: [
                "Nothing — cable length has no effect on welding",
                "Turn the machine current down to compensate",
                "Coil the surplus cable neatly next to the machine",
                "Use a larger cable size, because resistance over that length drops the voltage and reduces power at the arc",
              ],
              answer: 3,
              explain: "Beyond about 30 metres of total lead length, resistive voltage drop starts to rob the arc of power. Stepping up a size restores it. Coiling surplus cable is actively bad practice — it forms an inductive coil and, per the EMF guidance, should never be looped around the body.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "mmaw-technique",
          title: "MMAW technique: striking up, arc length, current and sound welds",
          minutes: 14,
          simple: "Striking an arc is like striking a match — scratch it along the metal and lift slightly. Then you hold that tiny gap steady while moving along at the right speed, which is the whole skill. Too much current and the weld spreads out flat and spatters; too little and the rod sticks to the job.",
          refs: REFS,
          content: `
Everything in arc welding technique comes back to three variables you control
with your hands and one you set on the machine: **arc length**, **rate of
travel**, **electrode angle**, and **current**. Get those right and the weld is
sound. Get them wrong and no amount of extra passes will save it.

## Setting up to practise

Run beads on scrap. Use mild steel plate about **13 mm thick**, a general-purpose
electrode of **3.25 mm or 4.0 mm**, and set the plate firmly on the bench so you
can weld in the **downhand** (flat) position. Clean off paint, loose scale and
grease. Confirm the earth clamp is making good contact, directly or through the
bench.

| Electrode diameter | Run length per 400 mm of electrode (min to max) | Current range | Approximate fillet size |
|---|---|---|---|
| 3.25 mm | 125 mm to 230 mm | 95 to 135 A | 4.8 mm |
| 4.0 mm | 175 mm to 305 mm | 130 to 180 A | 6.4 mm |

Start at the middle of the range: about **115 A** for a 3.25 mm electrode and
about **160 A** for a 4.0 mm. Suitable amperages are printed on the electrode
packet and, because the variety of electrodes is enormous, the maker's figure
always beats a general table.

>! Test the current setting on a piece of scrap of the **same thickness** as the
>! job before starting the weld proper. A setting that behaved on 6 mm plate will
>! burn straight through 3 mm sheet.

## Effects of incorrect current

| Symptom | Cause |
|---|---|
| Excessive spatter, very hot pool, flat bead with elongated ripples, electrode glowing red | Current too high |
| Electrode sticks, arc hard to hold, bead high and rounded, poor edge fusion, slight penetration | Current too low |
| Narrow strung-out bead, sometimes broken into separate globules | Travel too fast |
| Bead too large, weld metal piled up | Travel too slow |

Over-current does more than look bad. An overheated electrode and overheated weld
metal **oxidise**, meaning alloying elements combine with oxygen to form
impurities. Losing those alloying elements leaves the weld weak and brittle. So a
weld that ran too hot is not merely ugly — it is metallurgically inferior.

## Posture and set-up

Comfort is a technical requirement, not a nicety. Get a seat of suitable height
and sit down for as much work as you can. Do not hold your body tense — a tense
body tires quickly and makes the electrode impossible to hold steady; at fine arc
lengths even your breathing moves the rod. Relax and the job gets easier.

Position the work so you weld **across** your body rather than toward or away
from it — right-handers left to right, left-handers right to left. Keep the
electrode lead clear of obstructions so your arm can travel as the rod burns
down. Slinging the lead over your shoulder takes weight off your hand and gives
freedom of movement. Do not grip the holder tightly.

>! Check the insulation on the cable and holder every time before you start. If
>! it is faulty you are risking electric shock, and you are usually holding the
>! holder in one hand and touching the work with the other.

## Striking the arc

Practise on scrap. The beginner's problem is the electrode **freezing on** —
sticking to the plate. It is caused by making contact too heavily and not
withdrawing quickly enough, and low amperage makes it worse. The cure is to
**scratch** the electrode along the plate, exactly like striking a match, rather
than stabbing at it.

The moment the arc strikes, raise the tip **6.0 to 10.0 mm** clear of the work.
At that height the arc spreads its heat over a larger area and preheats the spot
where the weld will start — or the crater of the previous run. Then, with the
electrode fusing and the work preheated, bring the tip down to the **working arc
length**.

Strike smoothly and unhurriedly. Jerky, snatched movements produce a poor-looking
start that has to be ground out.

## Arc length

Working arc length is roughly **1.6 to 3.2 mm**, varying with electrode type and
welding position. Small-diameter electrodes want a shorter arc than large ones,
and vertical and overhead welding both want a shorter arc than downhand.

Why it matters so much: for the deposited metal to fuse properly, the base metal
immediately around the arc must be molten and the metal arriving from the
electrode must be molten too. Arc length largely determines how liquid both are.

| Arc too short | Arc too long |
|---|---|
| Electrode sticks frequently | Spluttering sound |
| Difficult to manipulate | Metal crosses in large irregular blobs |
| Insufficient heat to form the molten crater | Heat not localised enough to form a crater |
| Irregular, excessively high bead | Blobs land on relatively cold metal — poor fusion |
| Poor penetration | Poor penetration, heavy spatter, rough flat bead |

A long arc also lets the **atmosphere diffuse into the arc stream**. Oxygen and
nitrogen react to form oxides and nitrides, and the weld comes out porous, hard
and brittle. A short, uniform arc gives good fusion, few impurities and a smooth,
uniform bead with adequate penetration.

One special case: some electrodes can actually be **touched** on the work. Their
flux coating melts more slowly than the core wire, so the coating forms a
protruding sleeve — the **gun-barrel effect** — and there is still an arc length
between the work and the core wire tip, hidden inside the coating.

## Rate of travel and electrode angle

Once the arc is struck you have two simultaneous movements: feeding the electrode
*down* toward the pool at the same rate it melts away, and moving it *along* the
joint so that a bead is laid down.

Point the electrode into the weld pool **10 to 30 degrees off the vertical**,
leaning it the way you are travelling, and keep it square to the plate — **90
degrees to the plate surface** — when viewed from the end. Travel rate is adjusted to produce a
well-formed bead — refer back to the run-length limits in the table.

## Factors governing selection of welding current

**Thickness and mass of the parent metal.** A heavy plate presenting a large
surface area draws off a great deal of heat and chills the weld, so thicker
material needs more current at the same electrode gauge. Welding near the **edge** of a plate
needs less current than welding near the **centre**, because there is less
surrounding metal to soak up heat.

**Type and gauge of electrode.** A 4.0 mm rod needs more current than a 3.25 mm.
Type matters too — general purpose, low hydrogen and iron powder electrodes all
draw differently. Read the packet.

**Size and shape of run.** Short and large means the weld metal stays molten too
long and some constituents oxidise. Long and narrow means the metal cools so fast
that necessary chemical reactions do not have time to occur. High amperage gives
a flat wide bead; low amperage gives a high narrow bead. For a sealing or weather
run, where a small flat weld is needed, high amperage compensates for the fast
travel.

**Position and direction.** Downhand fillets with the work tipped into a trough
or vee can take higher currents than usual. Vertical-up welding takes slightly
lower current than downhand on equal plate. Beware overheating the electrode with
too much current — an overheated rod causes porosity, poor penetration and a
coarse-looking weld.

**Slag from previous runs.** In multi-run welds, clean slag off properly. Slag
clinging to the toes of a weld, especially in vertical fillets, can be very hard
to remove; when it cannot be, raise the amperage slightly on the next run so the
slag re-melts and floats out to the surface.

**Wind and low temperature.** Field conditions demand higher current and still
give lower deposition and poorer physical properties, particularly ductility. A
strong wind can blow the ionised gases away and **extinguish the arc** outright,
forcing constant re-strikes and a poor weld. Screen the work — and the operator —
from wind wherever you can.

## Main factors promoting a sound weld

- **Suitable parent metal.** Know what you are welding before you strike an arc.
  Some metals are almost unweldable without heat treatment plant.
- **Correct electrode type and diameter.** Choose a deposit similar in
  composition to the parent metal as a general guide. Size the electrode to the
  weld: a 9.0 mm fillet in one pass with a 3.25 mm rod is impractical, and a
  3.0 mm fillet with a 5.0 mm rod would need an impossible travel speed.
- **Suitable equipment.** An AC machine at about 70 V secondary suits most work,
  but thin plate and some non-ferrous metals need a superimposed high-frequency
  (pilot arc) attachment, and some electrodes are DC only.
- **Correct preparation.** A single vee butt weld requires a **70 degree included
  angle**, a root face (landing) of **1.6 mm maximum** and a root gap of
  **1.6 mm minimum**. Poor preparation gives undercutting, poor fusion and
  excessive or insufficient penetration.
- **Correct amperage**, as above.
- **Correct arrangement and number of runs.** In a three-run fillet, run 2 should
  form a shelf supporting run 3. Keep the number of runs as low as practicable,
  using the largest electrode the job allows, because fewer runs means less
  distortion.
- **Correct sequence of runs.** Sequence to oppose distortion — the contraction
  of one weld should counteract the pull of the opposite weld. This is
  **balancing the weld**, used on double vee butts and when building up worn
  shafting. Other techniques are step-back, chain and staggered sequences.
- **Sensible run length per electrode.** Too much weld in too short a length
  overheats the parent metal (coarse grain structure), keeps the weld red hot
  long enough for atmospheric attack, and risks trapping slag. Too long a run
  deposits metal onto plate that never reached fusion temperature, so the weld
  sticks on rather than fuses in.

### Fillet size and throat thickness — a worked check

Fillet welds are specified by **nominal size**, which is the effective leg
length. The **throat thickness** must be at least **70 per cent** of the nominal
size.

Take a specified 8.0 mm fillet:

- Minimum throat = 0.70 x 8.0 = **5.6 mm**.
- A correctly formed mitre (flat-faced) fillet has a throat of 0.707 x leg
  length = 0.707 x 8.0 = **5.66 mm** — just over the minimum, so the mitre
  profile is the ideal shape and nominal size equals actual leg length.

This is why a fillet can only be very slightly concave. Scoop the face in and the
throat falls below 5.6 mm even though the legs still measure 8 mm, and the weld
fails inspection despite looking generously sized. A slightly convex or mitre
face is what you are aiming for.

## What to remember

- Scratch to strike, lift to 6-10 mm to preheat, settle to 1.6-3.2 mm to weld.
- Electrode 10 to 30 degrees from vertical in the direction of travel, square to
  the plate side to side.
- 3.25 mm rod: about 115 A. 4.0 mm rod: about 160 A. Then read the packet.
- More current for thick sections and plate centres, less near edges.
- Clean the slag; if you cannot, lift the current slightly to float it out.
- Fillet throat must be at least 70 per cent of nominal leg size.
`,
          quiz: [
            {
              q: "Immediately after striking the arc, why is the electrode lifted to 6 to 10 mm before settling to the working arc length?",
              options: [
                "To burn off moisture in the flux coating",
                "To spread the arc heat over a wider area and preheat the start point or the previous crater",
                "To let the slag from the previous run float clear",
                "To check the current setting on the machine",
              ],
              answer: 1,
              explain: "A longer arc spreads heat over a larger area, which is exactly what you want at a cold start or when restarting into a crater. Once that area is preheated, dropping to 1.6 to 3.2 mm concentrates the heat and forms a proper molten crater.",
            },
            {
              q: "A weld shows heavy spatter, a flat bead with long stretched ripple marks, and the electrode glows red. What is the most likely fault, and why does it matter beyond appearance?",
              options: [
                "Current too low; the weld will simply need a second pass",
                "Travel too fast; only the bead shape is affected",
                "Current too high; overheating oxidises alloying elements, leaving the weld weak and brittle",
                "Arc too short; the bead will be high and rounded",
              ],
              answer: 2,
              explain: "Those are the classic over-current signs. The metallurgical consequence is the important part: alloying elements combine with oxygen and are lost as impurities, so a weld that ran too hot is genuinely weaker, not just untidy. Low current gives the opposite picture — sticking and a high rounded bead.",
            },
            {
              q: "A drawing specifies a 10.0 mm fillet weld. What is the minimum acceptable throat thickness?",
              options: [
                "10.0 mm",
                "7.0 mm",
                "5.0 mm",
                "7.07 mm",
              ],
              answer: 1,
              explain: "The throat must be at least 70 per cent of the nominal leg size: 0.70 x 10.0 = 7.0 mm. A correctly formed mitre fillet actually achieves 0.707 x 10.0 = 7.07 mm, just above the minimum — which is why an excessively concave face fails even when the legs still measure 10 mm.",
            },
            {
              q: "Why does welding near the centre of a large plate require more current than welding near its edge?",
              options: [
                "The centre of a plate is always thicker",
                "The greater mass of surrounding metal conducts heat away and chills the weld",
                "The earth clamp is further away, adding resistance",
                "Edges are already preheated by the shearing process",
              ],
              answer: 1,
              explain: "Surrounding mass acts as a heat sink. At an edge there is less metal to absorb heat, so the same current produces a hotter pool and risks burn-through. This is the same principle that makes thick plate need more current than thin plate for the same electrode.",
            },
            {
              q: "You cannot fully remove slag from the toes of a vertical fillet before the next run. What is the recommended action?",
              options: [
                "Weld over it — slag inclusions are not considered a defect in fillets",
                "Reduce the current so the slag is not disturbed",
                "Grind the entire weld back to parent metal and start again",
                "Raise the amperage slightly on the next run so the slag re-melts and floats to the surface",
              ],
              answer: 3,
              explain: "A modest amperage increase re-melts trapped slag and lets it float out. Welding over cold slag traps it as an inclusion. Reducing current makes it worse, and a full grind-out is a large amount of unnecessary work when the simple remedy is available.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "gmaw-process",
          title: "Gas metal arc welding: principles, equipment and metal transfer",
          minutes: 14,
          simple: "MIG welding feeds a wire out of a gun automatically and blows a shield of gas over the weld, so you only have to aim and move. Depending on how you set the machine, the metal crosses the gap either by dipping and short-circuiting, in big falling drops, or as a fine spray. Choosing that mode is like choosing a spray, stream or jet setting on a hose nozzle.",
          refs: REFS,
          content: `
Since the 1940s, **gas metal arc welding (GMAW)** has become the most widely used
welding process in Australian industry, and it suits light and general fabrication
particularly well. It is a semi-automatic process: the wire feeds itself into the
weld pool continuously, giving much higher deposition rates and better efficiency
than stick welding.

In Australia GMAW is still commonly called **MIG welding** — metal inert gas —
but that name is misleading, and understanding why is a good way into the process.
All GMAW of carbon and low-alloy steels uses an **active** shielding gas: there
is a deliberate chemical reaction between the gas and the metal droplets crossing
the arc. Genuinely inert gases are used for stainless steels and non-ferrous
metals.

## Principle

Heat for fusion is produced by an electric arc between a **continuously fed wire
electrode** and the work. The hot weld zone, the molten pool and the consumable
wire are all shielded from the atmosphere by a shroud of gas fed out through the
welding gun.

In semi-automatic GMAW, current level, arc length, wire feed speed and gas flow
are all regulated automatically by the equipment. The only things the operator
controls while welding are **gun position, gun guidance and travel speed**. That
is what makes it easy to learn — and also what makes it unforgiving if the
machine is set wrong before you start.

| Advantages | Limitations |
|---|---|
| High deposition rate compared with MMAW | High initial equipment cost, high maintenance |
| High operating factor (little stopping to change rods) | Cannot be used in windy conditions — shielding gas blows away, so generally unsuitable for site work |
| Versatile: most metals, and all positions depending on transfer mode | Lack of fusion can be a major problem in some circumstances |
| No slag to chip | More variables to set |
| Deposit is low in hydrogen | |
| Thin material distorts less | |
| Quickly picked up by new operators | |
| Nothing wasted as electrode stubs | |

## Equipment

A GMAW plant is made up of the power source, the wire feed unit, the gun and
cable assembly, the gas supply system, and the interconnecting cables.

### Power source

GMAW requires a heavy-duty **constant voltage** (constant potential) power source,
commonly a transformer-rectifier. Output is **direct current at constant
voltage**, adjustable for the application, and **all solid wires for GMAW run on
DC electrode positive (DC+)**.

Constant voltage is the clever part. The process is intolerant of variations in
arc voltage, so the supply holds voltage steady; if the arc shortens, current
rises and burns the wire off faster, and if it lengthens, current falls. The arc
length becomes **self-adjusting** and the burn-off rate stays constant. That
self-regulation is why you can move the gun in and out a little without ruining
the weld.

### Wire feed unit

The wire feed unit houses the wire reel and a DC motor driving feed rollers, and
pushes wire through a hollow conduit to the gun. Motor speed is set by a
potentiometer — the wire feed control.

Here is a point that confuses beginners: **increasing wire feed speed increases
amperage**. Feeding faster shortens the arc slightly; the constant-voltage machine
sees the loaded arc voltage and raises welding current to compensate. Wire speed
and amperage are therefore the same control.

The unit also carries the shielding gas connections, the gas solenoid valve, and
water connections for a water-cooled torch. Most units have a **gas purge**
control, so gas flow can be set with no current or wire feed, and a **cold inch**
control, so wire can be fed through without live welding current. Some also offer
pre-gas and post-gas flow, useful on aluminium and stainless steel.

### Gun and cable assembly

The gun and cable carry wire, current and shielding gas to the arc. Inside the
cable, the wire runs through a **conduit and liner**; welding current travels
through a heavy copper lead; shielding gas travels alongside and is distributed
at the weld by the gas diffuser and nozzle.

The liner must be the right material for the wire: **tightly wound hardened steel
wire** for hard electrodes such as carbon and stainless steels, and **nylon or
PTFE** for soft aluminium. It must be cut to the correct length, fitted properly,
kept dust-free, and the gun cable kept as straight as possible in use.

Pulling the trigger initiates three things at once:

1. The welding current contactor pulls in and current becomes available at the
   contact tip.
2. The gas solenoid opens and shielding gas flows.
3. The wire feed motor starts and feeds wire at the preset speed.

Most torches are **air-cooled**; water-cooled torches are used where high
amperages run continuously. Guns usually have a bent neck for operator comfort,
though a straight neck feeds wire better.

The **contact tip** does two jobs: it guides the wire to the arc, and it transfers
welding current into the wire. It is usually copper, matched to each wire size,
and it must be kept clean, free of spatter on the end, with a smooth internal
bore. A worn tip transfers current inefficiently and causes uneven feeding —
replace it. It must be held firmly and centred in the gas nozzle. The **nozzle**
directs an even flow of gas into the weld zone to exclude the atmosphere.

### Gas supply system

- A cylinder of gas — typically CO2 or argon-CO2 mixtures for carbon steels.
- A regulator, to reduce cylinder pressure.
- A flow meter, to hold a preset flow rate.
- A **heater**, fitted between cylinder and regulator when CO2 is used, to
  prevent the regulator freezing.

The CO2 heater is worth explaining: CO2 leaves the cylinder as a liquid-vapour
mixture and absorbs a large latent heat as it expands, which will freeze the
regulator solid and choke the gas supply.

### Interconnecting cables

The work return lead; the electrode lead from power source to the wire feeder's
gun cable adaptor; and the control cable from the power source to the wire feeder.

## Wire feed systems

| System | How it works | Suits | Drawbacks |
|---|---|---|---|
| Push | Feeder pushes wire from the drive rolls through the conduit to the gun. Most popular and least expensive | Hard wires (steel, stainless), cables up to 4.5 m, 15 kg or larger spools | Friction and conduit dust cause unreliable feeding; soft wires kink; the live conduit can arc internally from dust or a dirty tip |
| Pull ("spool on gun") | Drive motor and rollers built into the gun handle; short direct wire travel | Soft wires such as aluminium; work remote from the power source | High equipment cost, torch easily damaged, small spools are dearer, gun is heavy |
| Push-pull | Push motor at the feeder plus a pull motor at the torch | Both hard and soft wires up to 10 m from the machine, with 15 kg spools | Most expensive |

**Drive rollers.** Feeding relies on friction from pressure applied to the wire
between rotating rolls. Resistance in the gun cable makes the wire slip; more
top-roller pressure increases friction and stops the slip — but excessive
pressure deforms the wire and makes it *harder* to feed. Two-roll systems are
cheaper and suit hard wires through short cables. Four-roll feeders give more
grip at less pressure, so the feed is smoother with less wire distortion, and are
better for soft wires, long cables and cored wires. A common general-purpose
arrangement for hard wire is a flat-faced top roller against a bottom roller with
a vee groove.

## Metal transfer

In most welding processes the operator has little control over how metal crosses
the arc. In GMAW you choose. The primary control is **arc voltage**, with wire
diameter and shielding gas also having an influence, and the mode you select
defines the character of the whole process. Set it before you start welding.

### Dip (short-arc) transfer

Low current and low voltage. The wire tip touches the plate, short-circuits, and
the current surge heats and melts the tip off; an arc forms, then extinguishes as
the gap grows and the low voltage can no longer overcome the resistance across it;
the wire feeds forward, dips again, and the cycle repeats. This happens up to
**200 times per second** and produces enough heat for fusion while keeping the
pool fluid.

Cycle, step by step:

1. Trigger depressed, wire starts to feed.
2. Wire contacts the work, heats by electrical resistance, starts to melt.
3. Wire melts off, an arc is established.
4. Arc length grows as the wire end melts back.
5. Arcing ceases — low arc voltage cannot overcome the resistance across the gap.
6. Wire feeds into the pool and the cycle begins again.

Features: low currents, low heat input, low penetration, moderate spatter, low
deposition rate, relatively cold pool, ideal for thin material, suits positional
welding — and **tends to give lack-of-fusion defects, particularly once plate
thickness exceeds 5 mm**.

### Globular transfer

Between dip and spray. Voltage is high enough for a continuous arc, but amperage
is below the threshold that produces spray. The wire melts into a growing globule
on the end of the electrode until its own weight detaches it. Droplet detachment
is erratic, arc forces repel droplets, and considerable spatter results. Droplets
are considerably larger than the wire diameter.

Features: moderate amperage, low to moderate penetration, moderate to high
spatter, coarse appearance, gravity-driven detachment, largely unsuitable for
positional work (normally flat and horizontal only). Note that globular transfer
**occurs even at high amperages whenever the shielding gas contains more than
about 23 per cent CO2**.

### Spray transfer

The arc burns continuously. For steel, arc voltage must be above about **23 volts**
(depending on wire size and gas composition), and amperage must be above the
**threshold current** — the current above which small droplets are pinched off
and projected **axially** across the arc gap. Those droplets are equal to or
smaller than the wire diameter. Below threshold current, droplets simply grow
until gravity takes them, which is globular transfer.

Features: high current, high heat input, moderate to deep penetration, high
deposition, low spatter, good appearance, fluid pool, unsuitable out of position,
and it **requires a shielding gas high in argon**. Because the pool is hot and
fluid, spray transfer is suited only to plate above about **5 mm** and to the
downhand position — but it does not suffer the lack-of-fusion problems of dip
transfer.

### Pulsed-current transfer

Available on more sophisticated machines. Welding current alternates between a
high **pulse peak current** for fusion and a low **background current** for
solidification, with both levels and their durations adjustable. Pulse rate varies
from about **ten per second down to about one per second**, and raising the pulse
rate raises average current. Metal transfer is in the spray mode throughout.

The effect is a series of overlapping spot welds: good penetration during the high
cycle, cooling of the pool during the low cycle. Pulsed current is especially
useful on very thin material and difficult positional welds, minimises distortion,
improves control, and gives out-of-position welding at a higher energy level than
dip transfer. Some machines offer a **droplet transfer** option, in which
background current, pulse frequency and pulse current are controlled so that
exactly one droplet melts off per pulse.

| Mode | Voltage / current | Penetration | Spatter | Position | Best for |
|---|---|---|---|---|---|
| Dip | Low / low | Low | Moderate | All | Thin sheet |
| Globular | Medium / medium | Low to moderate | Moderate to high | Flat, horizontal | Rarely chosen deliberately |
| Spray | High (above about 23 V) / above threshold | Moderate to deep | Low | Downhand only | Plate over 5 mm |
| Pulsed | Alternating high and low | Good, controlled | Low | All | Thin material, positional work |

## Electrode selection

Match the mechanical properties and physical characteristics of the base metal.
The filler wire generally needs to chemically match the base metal — true for most
non-ferrous metals, stainless steels and many alloy steels — and at minimum equal
it in strength, toughness or ductility. Corrosion and wear resistance may also
matter. The wire must additionally suit the process itself: arc stability,
solidification rate, deposition rate, transfer mode and welding position.

Diameters from **0.6 mm to 1.6 mm** are typical, with sizes from 0.5 mm to over
3 mm available. Selection is based on base metal thickness, transfer mode and
welding position, and should fit the weld size and deposition rate wanted. Larger
electrodes allow higher welding speeds and amperages and are usually more
economical — but the smaller the wire, the easier the gun is to operate by hand.

**Deoxidisers** are added to wires to stop reactions with oxygen (present in the
shielding gas as well as the air) forming metal oxides, which are a source of weld
defects. Silicon and manganese are the common deoxidisers in steel wires; titanium
and silicon or phosphorus in copper-based wires.

Various classification systems code a wire's chemical composition, shielding
method and mechanical strength into groups of letters and numbers. Learn to read
the system your supplier uses — it is how you identify and select the right
consumable for a job.
`,
          quiz: [
            {
              q: "Why does a GMAW power source use constant voltage rather than the constant current used for stick welding?",
              options: [
                "Constant voltage machines are cheaper to build",
                "So the arc length becomes self-adjusting and the wire burn-off rate stays constant despite small gun movements",
                "Because the wire cannot carry constant current",
                "So the same machine can run both AC and DC",
              ],
              answer: 1,
              explain: "With constant voltage, a shortening arc draws more current and burns wire off faster, and a lengthening arc draws less — the arc regulates its own length. The GMAW process is intolerant of arc voltage variation, so this self-regulation is what makes it workable with a continuously fed wire.",
            },
            {
              q: "A welder is running dip transfer on 8 mm plate and getting repeated lack-of-fusion defects along the side wall. What is the most likely explanation?",
              options: [
                "The wire diameter is too large for the plate",
                "Dip transfer is inherently cold and low in penetration, and cold lapping is common once plate thickness exceeds 5 mm",
                "The gas flow rate is too high",
                "Constant voltage machines cannot weld plate over 6 mm",
              ],
              answer: 1,
              explain: "Dip transfer keeps heat input deliberately low, which is its advantage on thin sheet and its weakness on thick plate. Above about 5 mm the low heat input struggles to fuse the side wall and cold lapping results. Spray transfer, or at least higher voltage and amperage with a CO2-rich gas, is the answer.",
            },
            {
              q: "Why is a heater fitted between a CO2 cylinder and its regulator?",
              options: [
                "To raise the gas temperature so it shields the weld better",
                "To keep the cylinder pressure constant as it empties",
                "Because CO2 absorbs a large latent heat as it expands and will otherwise freeze the regulator and choke the supply",
                "To burn off moisture in the gas before it reaches the weld",
              ],
              answer: 2,
              explain: "CO2 leaves the cylinder as a liquid-vapour mixture; the latent heat absorbed on expansion chills the regulator to the point of icing up. The heater keeps it above freezing. It is a refrigeration effect happening in reverse in the welder's own gas line.",
            },
            {
              q: "Increasing the wire feed speed control on a GMAW machine has what effect?",
              options: [
                "It increases wire speed only; amperage is set separately",
                "It reduces amperage because more wire absorbs more heat",
                "It has no effect until arc voltage is also increased",
                "It increases both wire feed speed and amperage, because the shortened arc loads the voltage and the machine raises current to compensate",
              ],
              answer: 3,
              explain: "Wire speed and amperage are one control on a GMAW plant and cannot be adjusted independently. Feeding faster shortens the arc; the constant-voltage supply responds by increasing current, which raises deposition rate, heat input, bead size and penetration.",
            },
            {
              q: "What distinguishes spray transfer from globular transfer?",
              options: [
                "Spray transfer uses pure CO2 shielding gas",
                "Above a threshold current, small droplets equal to or smaller than the wire diameter are pinched off and projected axially, rather than growing until gravity detaches them",
                "Spray transfer occurs at lower voltage than globular",
                "Globular transfer only occurs with aluminium wire",
              ],
              answer: 1,
              explain: "The threshold current is the dividing line: above it, electromagnetic pinch forces detach fine droplets and throw them across the arc; below it, droplets simply grow until they fall. Spray also needs above about 23 V and an argon-rich gas — high CO2 content forces globular transfer even at high amperage.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "gmaw-variables-defects",
          title: "GMAW variables, shielding gases, defects and troubleshooting",
          minutes: 14,
          simple: "Once the machine is running there are only about six things you can change, and each one moves the weld in a predictable direction. Most GMAW faults come back to the gas shield failing or the weld running too cold. Knowing which knob does what turns fault-finding into a short checklist instead of guesswork.",
          refs: REFS,
          content: `
GMAW gives you more adjustment than stick welding, which is both its strength and
the source of most of its problems. There are six variables, and they interact.

## The six variables

| Variable | Increasing it does this |
|---|---|
| Wire speed / amperage | Increases wire feed rate, amperage, deposition rate and heat input; for a given travel speed, a larger bead with more penetration |
| Arc voltage | Lengthens the arc, widens and flattens the bead, and shifts the transfer mode toward globular then spray |
| Travel speed | Narrows the bead and lowers heat input; slowing down makes the bead more convex and raises heat input |
| Electrical stick-out | Increases resistance heating in the wire, so amperage and penetration fall while deposition rate for a given current rises |
| Torch angle | Changes shielding efficiency and how the weld metal is distributed in the joint |
| Shielding gas and flow rate | Sets arc character, penetration profile, spatter level and transfer mode |

### Wire speed and amperage

These share one potentiometer and cannot be adjusted independently. **Amperage is
the most important factor in determining heat input** into the metal being welded.
Deposition rates (kg/hour) relate directly to wire feed speed (m/minute), so
accurate settings begin with setting wire feed speed properly.

### Arc voltage

Arc voltage determines the **mode of metal transfer**. At low voltage the arc
cannot overcome the resistance across the gap and extinguishes, giving dip
transfer; at higher voltages the arc is sustained continuously. Increasing arc
voltage increases arc length, which lets more wire melt off without **stubbing**
(the wire driving into the plate before it can melt, which happens with high wire
speed and low voltage), and widens the bead.

Increase voltage alone, with wire speed and travel speed unchanged, and you get a
**wider, flatter bead**.

### Stick-out

Two measurements share the name:

- **Visible stick-out** — how far the wire protrudes beyond the gas nozzle. It has
  little effect on welding conditions, except that excessive visible stick-out
  reduces shielding efficiency.
- **Electrical stick-out** — how far the wire protrudes from the **contact tip**.
  This one matters.

Current is transferred to the wire at the contact tip, so the length of wire
between tip and arc has resistance. Lengthen the electrical stick-out and you add
resistance and **resistance heating** in the wire, which means less arc energy is
needed to melt it. Consequently:

- Increasing electrical stick-out with no change in wire feed speed **decreases
  amperage**, reducing heat input and penetration.
- But because less arc energy is needed to melt the wire, deposition rate for a
  given current effectively **increases**. On a constant-voltage system you can
  get higher deposition at a given amperage by increasing stick-out and wire feed
  speed together in balance.

### Torch angle

**Angle of approach** — the angle across the joint — is adjusted to distribute
weld metal evenly, and differs for a fillet and a butt.

**Angle of travel** — the gun is normally **pushed** in the direction of travel at
**10 to 30 degrees**. The exception is heavy welds in spray transfer, where the
gun is **dragged** so the shielding gas covers the solidifying weld metal, which
stays hot for a long time. The operator picks the actual angle as the best
compromise between visibility and shielding.

>! As the travel angle is lowered toward the plate, shielding efficiency falls
>! because of the **Venturi effect** — the fast gas stream running along the plate
>! draws surrounding air into the shield. A low gun angle combined with a high
>! flow rate is a reliable recipe for porosity.

## Shielding gases

The shielding gas excludes the atmosphere from the weld zone, preventing reaction
with oxygen and nitrogen. For carbon and low-alloy steels, however, some oxidising
action in the arc is actually **required** for arc stability, achieved either by
using CO2 or by adding CO2 and/or O2 to an argon base.

| Gas | Chemical behaviour | Effects and uses |
|---|---|---|
| Argon | Inert | All metals except carbon and low-alloy steels |
| CO2 | Oxidising | High spatter, deep penetration; used with deoxidised wire on carbon steels |
| Argon + CO2 | Oxidising | Carbon and low-alloy steels; low spatter, moderate penetration |
| Argon + CO2 + O2 | Oxidising | Extra oxygen increases penetration; deoxidised wire, carbon and low-alloy steels |
| Argon + O2 | Oxidising | Carbon and low-alloy steels, and stainless steels with under 2 per cent O2 |
| Argon + helium | Inert | Aluminium, copper alloys and similar |

**CO2** produces a highly reactive arc and is the only reactive gas usable alone as
a GMAW shield. Its characteristics are deep penetration, high spatter, high
deposition rate and high heat input. True spray transfer **cannot** be achieved
with CO2; it is best suited to dip transfer, where the extra heat helps overcome
the lack-of-fusion tendency and raises deposition. CO2 tends to produce convex
beads.

**Argon** alone cannot weld carbon and low-alloy steel. On non-ferrous metals it
gives a smooth arc, lower penetration, lower heat input, lower spatter and
improved bead shape, and it promotes spray transfer.

**Mixtures** use argon as the base. The more CO2 or O2 added, the more the arc
behaves like CO2; the less added, the more it behaves like pure argon. As a rough
guide for carbon and low-alloy steels:

- **CO2** — dip transfer, particularly on thicker plate.
- **Argon + 25 per cent CO2** — general use in dip transfer.
- **Argon + 15 per cent CO2** — multi-purpose, dip and spray.
- **Argon + 5 per cent CO2** — spray transfer.

Bead shape follows the gas: argon gives a narrow finger of penetration, argon-helium
a broader profile, CO2 a deep, rounded, convex profile.

### Flow rates

- CO2: **16 to 18 L/min**.
- Argon-CO2 mixtures: **12 to 14 L/min**.

Set flow to give adequate shielding and no more. **Excessively high flow rates
cause turbulence** and worsen the Venturi effect when travel angles are too low —
so cranking the flow meter up to cure porosity often makes the porosity worse.

## Defects

Every common weld defect except slag inclusion can occur in GMAW, but **porosity**
and **lack of fusion** are the characteristic problems.

### Porosity

A pore or group of pores of gas in the weld metal.

- **Gas pore** — a cavity, usually spherical, from gas trapped as the metal
  solidifies.
- **Wormhole** — an elongated or tubular cavity, from trapped gas being forced
  ahead of the solidifying metal.
- **Cluster** — a group of pores close together.

Moisture or surface contaminants on the plate can cause it, but in GMAW **by far
the most common cause is inadequate gas shielding**: flow rate too low, flow rate
too high, no gas at all, wind or air movement at the gun, contaminated gas,
stick-out too long, or gun angle too low.

### Lack of fusion (cold lapping)

Portions of the weld deposit not fused to the metal surface or joint edge. In GMAW
it usually shows as lack of **side wall** fusion over a long stretch of joint.

Common in **dip transfer**, especially over 5 mm plate. Welding downhill, or with
high wire speed and low arc voltage, increases the risk, as does dirt or heavy
scale. It does not generally occur in spray transfer.

Remedies: weld in spray transfer; clean the plates; if in doubt set arc voltage
slightly higher; set enough amperage for fusion; keep electrical stick-out short;
use CO2 or a gas mixture high in CO2.

### Lack of root penetration

Weld metal fails to fill the root of the joint. Root runs in butt welds are
normally made in dip transfer (spray only in heavy plate), and dip transfer is
inherently cold, so root penetration is limited. The solution is a **thinner root
face than other processes use — typically 0.5 mm to 1 mm**. In fillet welds, use
comparatively high amperage in dip transfer, and CO2 or a CO2-rich mixture helps.

### Excessive penetration

Excess weld metal protruding through the root of a butt weld. Normally only on
thin sheet or when using spray transfer. Adjusting wire speed and arc voltage
usually fixes it easily.

### Contour defects

Over-roll or overlap, excessive convexity, excessive concavity, or simply a rough
uneven appearance. Travel speed and torch angle adjustments fix many of them. Arc
voltage is the other lever: **increase** arc voltage to cure excessive convexity;
**decrease** it if beads are too wide or too concave.

### Undercut

A groove or channel in the parent metal along the toe or edge of a weld. Not
common in GMAW, but likely in two situations:

1. **Fillet welding in spray transfer** — usually caused by arc voltage set too
   high, giving a long arc that undercuts the toe on the vertical plate. Remedy:
   use the **lowest arc voltage that will still give smooth spray transfer**,
   which is good practice for all spray welds.
2. **Vertical-up welds** — solid wires are largely unsuitable for stringer beads
   vertical up, giving convex beads with undercut; weaving gives a bead convex in
   the middle with undercut toes. Remedy: reduce arc voltage, reduce overall heat,
   and pause longer at the toes.

### Cracking

Discontinuities from tearing while plastic (**hot cracks**) or fracturing when
cold (**cold cracks**).

- **Hot cracking** occurs at elevated temperature soon after solidification, in
  materials with high coefficients of expansion or which suffer **hot shortness**
  (a tendency to crack near melting point). Common in aluminium and stainless
  steel, usually in the weld metal, as longitudinal and crater cracks.
- **Cold cracking** is most common in hardenable materials with rapid cooling,
  usually in the base metal next to the fusion zone; underbead cracking in a
  hardenable steel is the classic example.
- **Crater cracks** come from hot shrinkage. Solidification of the crater runs
  inward from every side toward the centre, which concentrates stress there. If
  the metal lacks ductility or the hollow crater cannot take up the shrinkage,
  it cracks.

Cracking is a serious defect and rarely tolerated in any amount. Fortunately it is
not usually a major GMAW problem, because GMAW is a low-hydrogen process, hollow
craters are not typical of GMA welds, and the inherently low heat input suits
stainless steels and other hot-crack-prone metals.

### Excessive spatter

Metal particles thrown onto the parent metal or weld that form no part of the
weld. Usual causes: shielding gas or plate contaminated with moisture; high levels
of CO2 or O2 in the gas; excessive arc voltage in dip transfer; or welding in
globular transfer. Spatter does not usually occur in spray transfer.

### Stray arcing

Damage to the parent metal from accidentally striking an arc away from the weld.
Minor in GMAW because the wire is only live while the trigger is pressed — but do
not put the gun down with its weight resting on the trigger, and make sure arcing
does not occur at the work return lead connection.

## Troubleshooting

GMAW needs a higher level of equipment care than manual processes. The biggest
source of frustration is **wire feeding**, particularly with aluminium wire, long
gun cables, or a poorly maintained cable.

### Electrical faults

| Problem | Likely cause | Action |
|---|---|---|
| Machine completely dead | Blown fuse, or the mains switch or the machine's own switch left off | Work through the switches and the fuses; if all are sound, get an electrician |
| Mains present but no welding output | Wire feeder unconnected, or a faulty trigger switch | Test the trigger; see whether the feeder runs and the wire advances |
| Wire feeds but no arc | Work return not connected, blown fuse | Check work return; check fuses |

### Wire feeding faults

| Problem | Likely cause | Action |
|---|---|---|
| No wire feed at all | Spool brake too tight | Check spool brake tension |
| | No friction at drive rolls | Check and adjust drive rolls |
| | Wire jammed at drive rolls or in gun cable | Check guide tubes and conduit |
| Uneven wire feed | Dirty or damaged liner | Clean or replace the liner |
| | Slippage at drive rolls | Increase roll pressure |
| | Liner cut too short | Replace the liner |
| | Kinks in the gun cable | Keep the cable as straight as possible |
| | Insufficient roll pressure | Tighten the drive rolls |
| | Wire distorted by excessive roll pressure | Check roll alignment and reduce pressure |
| | Contact tip worn or dirty | Inspect and replace |
| | Spool brake too tight | Check spool brake tension |
| Spool overrun | Spool brake too loose | Tighten it |
| Wire welded into the contact tip | Arc voltage set too high | Wind the arc voltage back |
| | Burn-back time too long | Shorten the burn-back time |
| | Feed of wire is intermittent | Work through the causes listed above |

### Feeding aluminium wire

Aluminium is soft, so every source of friction has to be minimised:

- Reduce spool braking.
- Use a PTFE liner, and make sure the correct liner is fitted.
- Keep the gun cable as straight as possible.
- Avoid small-diameter wire where possible.
- Fit a straighter gooseneck to the gun.
- Pay careful attention to drive roll pressure.
- Use good-quality wire.
- Use a push-pull system with a four-roll feeder.

## On the job

- Amperage sets heat input; arc voltage sets transfer mode and bead width.
- Long stick-out cuts amperage and penetration but raises deposition per amp.
- Porosity is a shielding failure until proven otherwise — check flow, wind,
  stick-out and gun angle before blaming the wire.
- Cold lap means the weld ran too cold: more voltage, more amperage, shorter
  stick-out, CO2-rich gas, or move to spray.
- More flow is not more shielding — turbulence and Venturi make it worse.
- Most GMAW downtime is wire feeding: liner, rolls, tip, cable routing.
`,
          quiz: [
            {
              q: "A GMAW weld shows scattered porosity. The welder increases gas flow from 14 L/min to 25 L/min and the porosity gets worse. Why?",
              options: [
                "Higher flow cools the weld too quickly and traps gas",
                "The regulator has frozen at the higher flow rate",
                "Excessively high flow causes turbulence and worsens the Venturi effect, drawing more air into the shield",
                "More gas dissolves into the weld metal at higher flow",
              ],
              answer: 2,
              explain: "Shielding depends on smooth laminar gas coverage, not on volume. Too much flow becomes turbulent and, with a low gun angle, actively entrains surrounding air. The correct ranges are 16 to 18 L/min for CO2 and 12 to 14 L/min for argon-CO2 mixtures.",
            },
            {
              q: "Increasing electrical stick-out with no change in wire feed speed has what effect?",
              options: [
                "Amperage and penetration fall, because added resistance heating in the wire means less arc energy is needed to melt it",
                "Amperage rises because the wire is closer to the plate",
                "Nothing measurable — only visible stick-out matters",
                "Arc voltage falls and the transfer mode changes to spray",
              ],
              answer: 0,
              explain: "The wire between the contact tip and the arc is a resistor. A longer stick-out heats the wire more before it reaches the arc, so less arc current is needed to melt it — amperage, heat input and penetration all drop. The trade-off is a higher deposition rate for a given current, which is exploited deliberately by raising stick-out and wire speed together.",
            },
            {
              q: "A fillet weld made in spray transfer shows undercut along the toe on the vertical plate. What is the correct remedy?",
              options: [
                "Increase arc voltage to widen the bead over the undercut",
                "Reduce arc voltage to the lowest setting that still gives smooth spray transfer",
                "Switch to globular transfer",
                "Increase travel speed so less metal is deposited",
              ],
              answer: 1,
              explain: "Undercut in spray fillets comes from arc voltage set too high, giving a long arc that eats into the toe. Backing the voltage down to the minimum that sustains smooth spray is the fix, and is good practice for all spray welds. Raising voltage further would make it worse.",
            },
            {
              q: "Why is a thinner root face (0.5 to 1 mm) used on GMAW butt welds compared with other processes?",
              options: [
                "To save on filler wire",
                "Because GMAW shielding gas cannot reach into a deep root",
                "Because root runs are usually made in dip transfer, which is inherently cold and gives limited root penetration",
                "Because spray transfer would burn through a thicker root face",
              ],
              answer: 2,
              explain: "Root runs in butt joints are normally dip transfer, which uses low amperage and low voltage and therefore penetrates poorly. Thinning the root face gives the cold process less metal to penetrate. In fillets, the equivalent remedy is comparatively high amperage plus a CO2-rich gas.",
            },
            {
              q: "The wire feeds unevenly and the weld parameters wander. Which of these is NOT a likely mechanical cause?",
              options: [
                "A dirty or damaged liner",
                "A worn or dirty contact tip",
                "Kinks in the gun cable",
                "The work return lead disconnected",
              ],
              answer: 3,
              explain: "A disconnected work return produces the fault 'wire feeds, but no arc' — an electrical fault, not a feeding fault. Uneven feeding is a mechanical problem: liner condition, roll pressure and alignment, tip wear, cable routing and spool brake tension are where to look.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "arc-welding-safety",
          title: "Arc welding safety: shock, fume, arc rays, fire, EMF and pacemakers",
          minutes: 14,
          simple: "An arc welder can kill you with electricity, poison you with fume, blind you with light or set the building on fire, and each of those needs a different precaution. The invisible one is the magnetic field around the cables, which matters most to anyone wearing a pacemaker. This lesson is the list of rules that people who have been hurt wish they had followed.",
          refs: REFS,
          content: `
Arc welding concentrates several serious hazards into one small area: live
conductors at working voltage, an intensely bright ultraviolet source, toxic fume,
molten metal, and compressed gas. Each has its own controls. Australian
requirements are set out in **AS 1674 Parts 1 and 2 — Safety in welding and allied
processes**, in the WTIA technical notes, and in the harmonised work health and
safety laws, and they must be followed alongside the manufacturer's instructions
and your employer's safety practices.

## Electric shock can kill

The electrode and work circuits are electrically live whenever the machine is on.
In semi-automatic and automatic wire welding the electrode, the wire reel, the
welding head and the gun nozzle are live as well.

- Do not touch live parts with bare skin or wet clothing. Wear **dry, hole-free**
  gloves.
- **Insulate yourself from work and ground** with dry insulation. In damp
  locations, on metal floors, gratings or scaffolds, and when sitting or lying
  down, make sure the insulation covers your entire area of contact with the work
  and ground.
- Make sure the work cable makes good electrical contact with the metal being
  welded, and connect it **as close as possible to the area being welded**.
- Earth the work or metal being welded to a good electrical earth.
- Keep the holder, work clamp, cables and machine in good condition. Replace
  damaged insulation.
- **Never dip the electrode holder in water to cool it.**
- Never touch live parts of two holders connected to two different welders at the
  same time — the voltage between them can be the sum of both machines' open
  circuit voltages.
- Working above floor level, protect yourself against a fall should you get a
  shock.
- Turn off input power at the disconnect switch at the fuse box before working on
  equipment. Install and earth equipment in accordance with **AS/NZS 3000** (the
  Wiring Rules), local codes and the manufacturer's recommendations.

## Fumes and gases can be dangerous

Welding produces fume and gases hazardous to health. **Keep your head out of the
fume.** Use enough ventilation or extraction at the arc to keep fume and gas out
of your breathing zone. Galvanised, lead-plated and cadmium-plated steel demand
far greater care because their fume is acutely toxic.

**Ozone.** UV light from the arc acts on oxygen in the surrounding air to produce
ozone, a toxic gas. Higher current densities produce more of it, and humidity and
shielding gas type affect concentrations. In confined spaces with restricted
ventilation, use exhaust extraction; natural ventilation and exhaust fans help
too. Whatever ventilation is used, it **must leave the shielding gas over the
weld zone undisturbed**. Where safe ozone levels still cannot be held, a
respirator must be worn.

**Metal fume.** Assess each operation individually — the material being welded,
the size of the work area, the degree of confinement and the obstruction to air
circulation all matter. Work Safe Australia recommends a time-weighted-average
exposure limit of **5 mg per cubic metre** for welding fume not otherwise
classified, with exposure standards for individual components published in the
*Workplace Exposure Standards for Airborne Contaminants*. **AS 3853** Parts 1
and 2 give sampling methods for the particulate and gaseous content of fume.

>! Do not heat, cut or weld tanks, drums or containers until proper steps have
>! been taken to make sure the procedure will not release flammable or toxic
>! vapours from whatever was inside. A drum that has been "cleaned" can still
>! explode. AS 1674.1 covers this.

>! Vent hollow castings and closed containers before heating, cutting or welding
>! them. Trapped air expands and they burst.

>! Never weld near chlorinated hydrocarbon vapours from degreasing, cleaning or
>! spraying. The heat and UV from the arc react with solvent vapour to form
>! **phosgene**, a highly toxic gas, and other irritants. Degreasing operations
>! and welding bays do not belong in the same room.

>! Shielding gases displace air and can cause injury or death by asphyxiation.
>! Always ventilate properly, especially in confined spaces.

Read and understand the manufacturer's instructions and the safety data sheet for
every consumable.

## Arc rays can burn

The open arc in GMAW produces radiant energy intensities **much greater** than
MMAW electrodes, so a **filter one shade darker** than you would use for MMAW at
the same amperage is required for GMAW. Because UV emission is high and arc flash
is more frequent and more severe, **clear safety glasses must be worn at all
times** in a welding area.

Australian Standards set the requirements: **AS/NZS 1338.1** specifies shade
numbers for welding filters, **AS/NZS 1337.1** covers assembled eye protectors
incorporating those filters, and **AS 1674.2** covers helmets, hand shields,
goggles, face masks and gloves. Protect the filter with clean plain cover glasses
both sides.

**Body protection.** The arc will burn exposed skin, and even reflected UV
bouncing off a light-coloured wall causes an uncomfortable ray burn. Cover the
body completely. Cotton has less resistance to ultraviolet than wool, and cotton
and especially synthetics break down and disintegrate under UV — so **leather and
wool are preferred**. Leather and wool are also less flammable than cotton and far
less flammable and more spark-resistant than synthetics.

Protect other people nearby with non-flammable screens, or warn them not to watch
the arc or expose themselves to arc rays or hot spatter.

## Welding sparks cause fire and explosion

- Remove hazards from the welding area, or cover them so sparks cannot start a
  fire. Sparks and hot material travel through small cracks and openings into
  adjacent areas. Keep a fire extinguisher readily available.
- Where compressed gases are used on site, take special precautions — refer to
  **AS 1674** Parts 1 and 2 and WTIA Technical Note 7.
- When not welding, make sure no part of the electrode circuit touches the work or
  ground. Accidental contact causes overheating and a fire hazard.
- Wear **oil-free** protective garments: leather gloves, heavy shirt, **cuffless**
  trousers, high shoes and a cap over your hair. Cuffs catch spatter. Ear plugs
  are needed for confined-space work and for welding out of position. Safety
  glasses with side shields must be worn at all times in a welding area.
- Connect the work cable to the work as close to the weld as possible. A work
  cable connected to the building framework lets welding current find alternative
  paths — through lifting chains, crane cables and other circuits — creating fire
  hazards and overheating lifting gear until it fails.

## Cylinders

- Use only cylinders containing the correct shielding gas for the process, with
  properly operating regulators designed for that gas and pressure. Hoses and
  fittings must suit the application and be in good condition.
- Keep cylinders **upright and securely chained** to an undercarriage or fixed
  support.
- Locate them away from areas where they can be struck or damaged, and a safe
  distance from welding, cutting, heat, sparks or flame.
- Never let an electrode, holder or other live part touch a cylinder.
- Keep your head and face away from the valve outlet when opening a cylinder valve.
- Leave valve protection caps fitted and hand-tight at all times, other than
  while a cylinder is actually in use or coupled up ready for use.
- Follow **AS 2030** Parts 1 and 2 and the instructions on the cylinder.

## Engine-driven equipment

- Stop the engine before troubleshooting or maintenance, unless the work requires
  it running.
- Run engines in the open or vent the exhaust outdoors.
- Never refuel near an open flame, a welding arc or while the engine is running.
  Stop and cool the engine first, do not spill fuel, and if you do, wipe it up and
  wait for the fumes to clear before starting.
- Keep guards, covers and safety devices in place and in repair. Keep hands, hair,
  clothing and tools away from V-belts, gears and fans.
- Remove guards only when a job genuinely requires it, and replace them afterwards.
- Keep hands clear of the engine fan and do not override the governor.
- Disconnect spark plug leads, distributor cap or magneto wire before turning the
  engine or generator by hand.
- Do not remove the radiator cap while the engine is hot — scalding risk.

All installation, operation, maintenance and repair work must be done by qualified
people.

## Welding, EMF and pacemakers

Electric and magnetic fields (EMF) are created whenever current flows in a
conductor. Whether such exposure affects health is not settled — some researchers
have reported links to leukaemia and other illnesses, claims that originated with
high-voltage power lines and remain very much in dispute — but the sensible
position is to minimise exposure and therefore minimise whatever risk exists.

Four facts govern exposure:

1. With **direct current**, field strength is relatively constant.
2. With **alternating current**, field strength constantly changes.
3. The **higher the current**, the stronger the field.
4. The **closer** the conductor or device is to the body, the greater the exposure.

### Minimising exposure — every welder

- Route the electrode (or gun) lead and the work lead **together**, taped if
  possible.
- **The electrode lead must never be coiled around your body.**
- Keep yourself out from **between** the two cables: if the electrode cable runs
  on your right, put the work cable on your right as well.
- Connect the work cable to the work piece as close as possible to the weld. (This
  also cures the most common welding fault of all — a poor work connection.)
- Do not work right next to the welding power source.

### Welders with pacemakers

There is no question that arc welding fields **can interfere with a pacemaker's
function**. Generally the interference does not permanently damage the device, and
once the wearer leaves the welding environment the pacemaker returns to normal
operation. Some designs — bipolar units, or units designed to filter interference
— are affected little or not at all. For anyone working around electrical
equipment, pacemaker selection matters: the treating doctor should advise which
device is least sensitive to interference while remaining medically suitable, and
may consult the manufacturer.

In addition to all the normal precautions, a welder with a pacemaker should:

- Use **gas welding** instead, where the application allows it.
- Use the **lowest current setting** suitable, and **do not exceed 400 amps**. If
  arc welding is necessary, use **low-current (75 to 200 A) direct current**. Do
  **not** TIG weld with high frequency.
- Not make repeated short welds. Wait about **ten seconds** between stopping one
  weld and starting the next, and do not re-strike a sticking electrode
  repeatedly.
- Stop welding immediately if feeling light-headed, dizzy or faint: lay the
  electrode holder down clear of the work and move away from any welding in
  progress. Arrange the work in advance so that a dropped holder cannot fall on
  your body or strike the work.
- Not work on a ladder, in any elevated position, or in a cramped or confined
  place.
- **Not work alone** — only in the presence of someone who understands these
  precautions and the possible effect on the pacemaker.
- Keep away from spot welding equipment.
- Discuss the decision to continue welding with their doctor and follow that
  advice.

>! Do not reason from someone else's experience. Another welder with a pacemaker
>! who has worked for years without incident may have a completely different
>! device, a different condition and a different work pattern. The precautions are
>! individual and the medical advice must be individual too.

## What to remember

- Live parts, dry gloves, dry insulation, work lead close to the weld.
- Head out of the fume; ventilate without disturbing the gas shield.
- No welding on drums, closed castings, or near chlorinated solvent vapour.
- GMAW needs a filter one shade darker than MMAW at the same amperage; clear
  safety glasses always.
- Leather and wool, not cotton and never synthetics; cuffless trousers.
- Cylinders upright, chained, capped, clear of the arc.
- Cables routed together, never coiled around the body, body never between them.
- Pacemaker: gas weld if you can; if not, 75 to 200 A DC, never above 400 A, never
  alone, never up a ladder, and follow your doctor's advice.
`,
          quiz: [
            {
              q: "Why must a welder never simultaneously touch live parts of two electrode holders connected to two different welding machines?",
              options: [
                "The two machines will short circuit and blow their fuses",
                "The voltage between them can be the sum of both machines' open circuit voltages",
                "It causes an arc flash at both holders",
                "The two work leads will carry each other's current",
              ],
              answer: 1,
              explain: "Each machine has its own open circuit voltage referenced to its own work circuit, so bridging two holders can put the total of both across your body. A single machine's open circuit voltage is already dangerous; doubling it is far worse.",
            },
            {
              q: "Why should welding never be done near chlorinated hydrocarbon vapours from a degreasing operation?",
              options: [
                "The vapours are flammable and will ignite",
                "The vapours contaminate the shielding gas and cause porosity",
                "Arc heat and UV react with the solvent vapour to form phosgene, a highly toxic gas",
                "The solvent attacks the insulation on the welding cables",
              ],
              answer: 2,
              explain: "The reaction between arc radiation and chlorinated solvent vapour produces phosgene and other irritants. The hazard is chemical, not fire, and it is why degreasing baths and welding bays are kept apart. Porosity would be a nuisance; phosgene is life-threatening.",
            },
            {
              q: "Which pair of EMF precautions is correct for any arc welder?",
              options: [
                "Coil surplus electrode lead neatly around your waist, and stand beside the power source",
                "Keep the electrode and work leads on opposite sides of your body, and connect the work lead to the building steel",
                "Route the electrode and work leads together, and keep your body from being between them",
                "Use AC in preference to DC, and increase current to shorten exposure time",
              ],
              answer: 2,
              explain: "Running the two leads together makes their opposing fields largely cancel, and keeping your body out from between them avoids sitting inside the loop. Coiling a lead around the body creates a solenoid around you, and AC fields fluctuate constantly whereas DC fields are steady — the opposite of the suggested option.",
            },
            {
              q: "Why is a welding filter one shade darker required for GMAW than for MMAW at the same amperage?",
              options: [
                "GMAW electrodes emit more infra-red but less UV",
                "The open arc in GMAW produces much greater radiant energy intensity, with high UV emission",
                "Because the gas nozzle reflects light back at the operator",
                "Because GMAW is always used at higher amperage",
              ],
              answer: 1,
              explain: "The GMAW arc is not covered by a flux and slag blanket, so the radiant intensity reaching the operator is far higher. That is also why clear safety glasses are required at all times in a GMAW area — arc flashes are more frequent and more severe.",
            },
            {
              q: "A welder with a pacemaker must arc weld. Which set of limits applies?",
              options: [
                "Any current up to 600 A provided AC is used",
                "Low-current DC in the 75 to 200 A range, never exceeding 400 A, no high-frequency TIG, and never working alone",
                "AC only, above 400 A, with a ten-minute gap between welds",
                "Gas welding is forbidden; only arc welding is safe with a pacemaker",
              ],
              answer: 1,
              explain: "Gas welding is in fact the first preference where the application allows it. If arc welding is necessary, low-current DC in the 75 to 200 A range is recommended with an absolute ceiling of 400 A, no high-frequency TIG, about ten seconds between welds, no ladders or confined spaces, and never working alone.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
