/* =========================================================================
   Course content, module 409 — Refrigerant classification and site safety.
   Source: capstone knowledge-assessment revision; AS/NZS ISO 817 safety
   classification, the Australia and New Zealand Refrigerant Handling Code of
   Practice, the Australian Dangerous Goods Code, AS 4332 cylinder handling
   and the AS/NZS 3666 series on microbial control.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority. Every
   practice question is original revision material, not a reproduction of any
   assessment paper.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_CLASS = [
    "AS/NZS ISO 817 — Refrigerants: designation and safety classification (flammability classes 1, 2L, 2 and 3; toxicity classes A and B)",
    "Australia and New Zealand Refrigerant Handling Code of Practice — Appendix B, safety classifications and dangerous goods divisions",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigerant properties and classification",
  ];

  const REFS_ENV = [
    "Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 and Regulations 1995 (Cth) — scheduled substances, licensing and the HFC phase-down",
    "Australia and New Zealand Refrigerant Handling Code of Practice — Appendix A, scheduled refrigerants with GWP values on the AR4 basis",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — ozone depletion, global warming and refrigerant selection",
  ];

  const REFS_HANDLING = [
    "Australia and New Zealand Refrigerant Handling Code of Practice — Part 2, handling and storage of refrigerants; flammable refrigerant tools and equipment",
    "AS/NZS 5149.1 and 5149.4 — refrigerating systems and heat pumps: safety and environmental requirements, charge limits and operation",
    "Safe Work Australia — Workplace exposure standards for airborne contaminants (ammonia and carbon dioxide)",
  ];

  const REFS_CYL = [
    "Australia and New Zealand Refrigerant Handling Code of Practice — Part 2, cylinder filling, storage and transport including the filling ratio",
    "Australian Dangerous Goods Code (ADG) — Division 2.1 flammable gases, 2.2 non-flammable non-toxic gases, 2.3 toxic gases",
    "AS 4332 — The storage and handling of gases in cylinders",
  ];

  const REFS_3666 = [
    "AS/NZS 3666.1 — Air-handling and water systems of buildings, microbial control: design, installation and commissioning",
    "AS/NZS 3666.2 — Air-handling and water systems of buildings, microbial control: operation and maintenance",
    "AS/NZS 3666.3 — Air-handling and water systems of buildings, microbial control: performance-based maintenance of cooling water systems",
    "enHealth / state public health regulations — Legionella risk management for regulated water-cooling systems",
  ];

  const MODULES = [
    {
      id: "cap-refrigerants-and-site",
      stream: "capstone",
      title: "C.9 · Refrigerant classification and site safety",
      blurb: "Revision of refrigerant safety classification, ozone and greenhouse status, refrigerant-specific handling precautions, cylinder rules, asphyxiation hazards and AS/NZS 3666 cooling-tower safety.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "flammability-and-toxicity-groups",
          title: "How refrigerants are classified: flammability and toxicity",
          minutes: 13,
          simple: "Every refrigerant gets a two-part safety label. A letter says how poisonous it is (A is the safer group, B the more poisonous one) and a number says how easily it burns (1 will not burn, 3 burns readily). It works like a food allergy label: two pieces of information printed together so you know what you are dealing with before you open the container.",
          refs: REFS_CLASS,
          content: `A refrigerant safety class is not a brand or a marketing grade. It is a two-part code assigned by test, under AS/NZS ISO 817, and it is the single fastest way to know what a fluid will do to you and to the building if it gets out. The Code of Practice requires every refrigerant used in refrigeration and air-conditioning equipment to be classified this way !CITE[cop:1:1.2.3], which is why the class appears on the cylinder label, on the equipment nameplate and in the manufacturer's data.

Read the code left to right: a **letter for toxicity**, then a **number (and sometimes a letter) for flammability**. R134a is A1. R32 is A2L. R290 is A3. Ammonia is B2L. Once you can decode those four you can decode all of them.

## The flammability groups

Flammability is decided by testing the refrigerant in air and measuring three things: whether a flame will travel through the mixture at all, the **lower explosive limit** (also called the lower flammability limit — the leanest mixture in air that will still burn, expressed as a percentage by volume), and how much heat the fuel releases when it burns.

| Group | What the test shows | Where the lower explosive limit sits | Examples |
|---|---|---|---|
| 1 | No flame propagation in air at 60 degrees C and standard atmospheric pressure | Does not apply — it will not burn | R134a, R22, R404A, R410A, R744 |
| 2L | Flame propagates, but slowly and with low heat release | At or above 3.5% by volume | R32, R1234yf, R717 (with a B) |
| 2 | Flame propagates at ordinary speed, low heat release | At or above 3.5% by volume | Some blends and older fluids |
| 3 | Burns readily, high heat release | Below 3.5% by volume | R290 propane, R600a isobutane |

Two things separate the groups in practice. The first is **how much gas has to leak before the room can ignite**. A 3.5% lower explosive limit means the room air has to reach three and a half parts in a hundred before a spark matters. Propane's limit is about 2.1% and isobutane's about 1.8%, both below the 3.5% line, so a much smaller leak makes a much smaller room dangerous — that is exactly why they sit in group 3. R32's limit is about 14%, which takes a very large release in a very small space.

The second is **how fast the flame travels once it does light**. That is what the L in 2L means: lower flammability, a burning velocity low enough that the mixture burns rather than detonates, and a low enough heat of combustion that the energy released is modest. A 2L leak that finds an ignition source produces a slow flame front, not a blast. It is still a fire, and it can still ignite everything else in the plant room, but the difference matters for how the standards allow these fluids to be used.

## The toxicity groups

Toxicity is decided on the concentration at which harm appears.

- **Class A — lower toxicity.** No toxicity has been identified at concentrations at or above 10 000 parts per million.
- **Class B — higher toxicity.** There is evidence of toxicity below 10 000 parts per million.

Ten thousand parts per million is one per cent by volume, which is a useful way to remember it. A class A refrigerant will not poison you at ordinary leak concentrations; it will suffocate you by displacing oxygen long before it poisons you. A class B refrigerant will hurt you at concentrations far below the point where oxygen becomes a problem, so with class B the gas itself is the hazard and respiratory protection is part of the job, not an optional extra.

>! Class A does **not** mean safe. It means not toxic at the concentrations tested. Every refrigerant heavier than air can pool in a pit, a lift well or a plant room floor and suffocate a person who walks into it. Asphyxiation kills far more refrigeration workers than poisoning does.

## Putting the two halves together

Combine the letter and the number and you get the eight safety classes the standards use:

| | Group 1 | Group 2L | Group 2 | Group 3 |
|---|---|---|---|---|
| **Class A — lower toxicity** | A1 | A2L | A2 | A3 |
| **Class B — higher toxicity** | B1 | B2L | B2 | B3 |

The class drives real decisions. AS/NZS 5149 sets charge limits by class and by occupancy: how much of a given refrigerant may be put in a system serving a given room, whether a machinery room is required, whether leak detection and mechanical ventilation are required, and what the electrical fittings inside that space must be. The Code of Practice also identifies which classes count as flammable for handling purposes — A2L, A2, A3 and B2L !CITE[cop:1:1.2.4] — and reminds you that even where the refrigerant itself is class 1, a refrigerant and lubricant mixture can still be flammable.

## Why A2L exists at all

A2L was created because the industry needed a middle rung. The high-pressure HFCs that replaced R22 have very large greenhouse effects, and the only fluids with small greenhouse effects that also perform well are, chemically, either mildly flammable or toxic. Rather than force a jump from "will not burn" straight to "propane", the standards recognised a group whose leaks are hard to ignite and, once ignited, burn slowly. R32 is the one you will meet most: a single-component fluid, A2L, used in split systems and increasingly in packaged plant.

Working on A2L equipment changes your method, not your trade. You still evacuate, you still recover, you still braze — but you purge and prove the system is free of refrigerant before heat goes anywhere near it, you keep ignition sources controlled, you use recovery equipment rated for flammable refrigerant, and you ventilate.

## Written practice

**1.** A wholesaler offers you a fluid described only as "class A2L, lower explosive limit 14.4% by volume". Explain, without naming the refrigerant, what those two facts tell you about how it will behave in a leak and what precautions they justify.

>? Class A means no toxicity has been identified at or above 10 000 ppm, so at the concentrations a leak produces the gas is not expected to poison anyone; the realistic health hazard is oxygen displacement in a confined space, not poisoning.
>?
>? The 2L half means it is flammable but at the lower end: the flame travels slowly and the heat released is low. A lower explosive limit of 14.4% by volume means roughly one seventh of the room air has to be refrigerant before an ignition source matters, so only a large release into a small, poorly ventilated space creates a flammable atmosphere.
>?
>? Justified precautions: treat it as flammable for handling — control ignition sources during charging, recovery and any hot work; ventilate the space; use recovery equipment and leak detection rated for flammable refrigerant; observe the charge limit for the room size and occupancy from AS/NZS 5149; and still treat the space as an asphyxiation risk.

**2.** A first-year apprentice tells you that a class B refrigerant is "just a stronger version of class A". Correct him in writing, and state the concentration that separates the two classes.

>? The letter is not a strength rating, it is a toxicity classification, and the two classes describe different hazards rather than different amounts of the same hazard.
>?
>? Class A means no toxicity has been identified at concentrations at or above 10 000 ppm (one per cent by volume). Class B means toxicity has been shown below 10 000 ppm.
>?
>? The practical difference: with a class A fluid the gas will suffocate a person before it poisons them, so the controls are ventilation, oxygen monitoring and keeping people out of low spaces. With a class B fluid the gas itself is the hazard at concentrations far below anything that would affect the oxygen level, so respiratory protection, gas detection with alarms, and an evacuation plan are part of normal work — and a leak small enough to be harmless with a class A fluid can be a medical emergency with a class B one.

**3.** Two refrigerants both propagate a flame. One has a lower explosive limit of 2.1% by volume, the other 14.4%. Which is the higher flammability group, and explain the reasoning a marker wants to see.

>? The fluid with the 2.1% lower explosive limit is the higher flammability group — group 3. The fluid at 14.4% sits at or above the 3.5% by volume dividing line and falls in the lower flammability groups, 2L or 2 depending on burning velocity and heat of combustion.
>?
>? The reasoning: the lower explosive limit is the leanest mixture in air that will still burn, so a **low** limit means a **small** leak is enough to make a room dangerous. Below 3.5% by volume the standard classes the fluid as higher flammability; at or above 3.5% it is in the lower flammability groups. The 2.1% fluid needs only about one part in fifty of room air to become ignitable, while the 14.4% fluid needs about one part in seven.

## What to remember

- The code is toxicity letter first, flammability number second: A1, A2L, A2, A3, B1, B2L, B2, B3.
- 3.5% by volume is the flammability dividing line: at or above it, lower flammability; below it, higher flammability.
- 10 000 ppm is the toxicity dividing line: no identified toxicity at or above it is class A, evidence of toxicity below it is class B.
- The L in 2L means slow flame and low heat release, not "safe".
- Class and charge limit together decide machinery rooms, ventilation and leak detection under AS/NZS 5149.
- Every refrigerant, whatever its class, can displace oxygen.`,
          quiz: [
            {
              q: "A refrigerant is tested and found to propagate a flame in air, with a lower explosive limit of 2.9% by volume. Which flammability group does it fall into?",
              options: ["Group 1", "Group 2L", "Group 2", "Group 3"],
              answer: 3,
              explain: "The dividing line is 3.5% by volume. A lower explosive limit below 3.5% puts the fluid in the higher flammability group, group 3, regardless of how fast it burns. Groups 2 and 2L both require the limit to sit at or above 3.5%, and group 1 does not propagate a flame at all.",
            },
            {
              q: "What does the class A in the designation A2L tell you?",
              options: [
                "It is approved for use in occupied spaces without restriction",
                "No toxicity has been identified at concentrations at or above 10 000 ppm",
                "It has zero ozone-depletion potential",
                "It will not burn under any conditions",
              ],
              answer: 1,
              explain: "The letter is purely the toxicity group: class A means no toxicity identified at or above 10 000 ppm, class B means toxicity shown below that. It says nothing about ozone, greenhouse effect or approval for a given space — charge limits under AS/NZS 5149 decide that. And the 2L half means it does burn, just slowly.",
            },
            {
              q: "Ammonia is classified B2L. What does that combination mean for the way you plan work on an ammonia plant?",
              options: [
                "Non-toxic and non-flammable, so normal precautions apply",
                "Toxic below 10 000 ppm and mildly flammable, so respiratory protection and ignition control are both required",
                "Non-toxic but highly flammable, so only ignition control is required",
                "Toxic only above 10 000 ppm, so ventilation alone is enough",
              ],
              answer: 1,
              explain: "B means toxicity is evident below 10 000 ppm, which is why ammonia work needs gas detection, escape sets and breathing apparatus. 2L means it also propagates a flame, slowly, once the concentration is high enough, so ignition sources still have to be controlled. Planning has to cover both hazards, not pick one.",
            },
            {
              q: "Why was the 2L sub-group introduced into the classification?",
              options: [
                "To let manufacturers avoid charge limits",
                "To recognise fluids that propagate a flame slowly and release little heat, sitting between non-flammable and readily flammable",
                "To classify refrigerant blends that separate on leaking",
                "To identify refrigerants that are flammable only when mixed with oil",
              ],
              answer: 1,
              explain: "2L recognises a real middle rung: flame propagation happens, but at low burning velocity and low heat of combustion. That distinction lets the standards set different charge limits and ventilation requirements from group 3. It does not remove charge limits, and oil-mixture flammability is a separate warning that applies even to group 1 fluids.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "odp-and-gwp",
          title: "Ozone depletion and global warming are two different properties",
          minutes: 12,
          simple: "A refrigerant can damage two different things in the sky, and the two are not connected. One number says whether it eats the ozone layer; a separate number says how strongly it traps heat. It is like a car having a separate rating for the noise it makes and the fuel it burns — a quiet car can still be thirsty.",
          refs: REFS_ENV,
          content: `Candidates lose marks here for one reason: they treat ozone depletion and global warming as a single "is it bad for the environment" score. They are separate physical effects, measured on separate scales, controlled by separate international agreements and separate parts of Australian law. A fluid can be terrible on one and perfect on the other.

## Ozone-depleting potential

**Ozone-depleting potential (ODP)** measures how much stratospheric ozone a fluid destroys compared with the same mass of R11, which is defined as 1.0. Ozone destruction is caused by **chlorine and bromine** carried into the stratosphere. That single sentence answers most questions on the topic: if the molecule contains chlorine, it has an ODP; if it does not, its ODP is zero.

- **CFCs** — chlorine, fluorine, carbon, no hydrogen. Very stable, so almost all of the chlorine reaches the stratosphere. R11 and R12 have ODP around 1. Phased out.
- **HCFCs** — chlorine, but with hydrogen in the molecule, which makes them break down lower in the atmosphere. R22 has an ODP of about 0.055, so roughly one twentieth of R11. Phased out of new equipment in Australia and now only available from recovered and reclaimed stock.
- **HFCs, HFOs, hydrocarbons, ammonia, carbon dioxide** — no chlorine, so ODP is zero.

Ozone depletion is controlled by the Montreal Protocol, given effect in Australia by the Ozone Protection and Synthetic Greenhouse Gas Management Act and its Regulations.

## Global-warming potential

**Global-warming potential (GWP)** measures how much heat a mass of the gas traps in the atmosphere over a chosen period — normally 100 years — compared with the same mass of carbon dioxide, which is defined as 1. Two things drive it: how strongly the molecule absorbs infrared radiation, and how long it survives before breaking down.

That second factor is why the numbers are so spread out. A fluid can be a strong absorber but fall apart in a fortnight, giving a tiny GWP. HFCs absorb strongly **and** last for years to decades, which is where numbers in the thousands come from.

GWP is quoted on a stated assessment basis, and the values differ slightly between assessments. Australian refrigerant handling work quotes the AR4 (fourth assessment) values, which is what the Code of Practice tabulates, so use that basis unless a document tells you otherwise, and always check the current edition.

## The nine refrigerants you will be asked about

| Refrigerant | Chemical family | Safety class | ODP | GWP (100-year, AR4) |
|---|---|---|---|---|
| R134a | HFC | A1 | 0 | 1430 |
| R22 | HCFC | A1 | 0.055 | 1810 |
| R404A | HFC blend | A1 | 0 | 3922 |
| R410A | HFC blend | A1 | 0 | 2088 |
| R32 | HFC | A2L | 0 | 675 |
| R600a (isobutane) | Hydrocarbon | A3 | 0 | 3 |
| R290 (propane) | Hydrocarbon | A3 | 0 | 3 |
| R717 (ammonia) | Inorganic | B2L | 0 | 0 |
| R744 (carbon dioxide) | Inorganic | A1 | 0 | 1 |

Read down the ODP column: **only R22 is not zero**, because it is the only chlorinated fluid on the list. Read down the GWP column and the spread is enormous — R404A traps nearly four thousand times as much heat per kilogram as carbon dioxide, while the hydrocarbons and the naturals are effectively negligible.

### Worked example — putting a leak in perspective

A supermarket pack running R404A loses 18 kg over a year. Express the loss as carbon dioxide equivalent.

- CO2-e (tonnes) = leak mass (kg) x GWP / 1000
- CO2-e = 18 x 3922 / 1000
- CO2-e = 70 596 / 1000 = **70.6 tonnes CO2-e**

The same 18 kg of R290 would be 18 x 3 / 1000 = **0.054 tonnes**. Same leak, same trade fault, a factor of about 1300 in consequence. That arithmetic is the whole argument for the industry's move to low-GWP fluids, and it is also the argument your customer hears when the equipment levy on high-GWP refrigerant shows up on the invoice.

## What the law actually does about it

- **Ozone** — production and import of CFCs is finished; HCFCs including R22 are on a completed phase-out for new equipment, and existing plant runs on recovered stock until it is replaced.
- **Greenhouse** — HFCs are not banned, they are **phased down**: an import quota that steps down over time, backed by an equipment levy. The practical effect on you is price and availability, and pressure to keep systems tight.
- **Both** — venting a scheduled refrigerant is prohibited conduct, and so is charging a system with a higher-GWP refrigerant than it was designed for unless the design fluid was an ozone-depleting HCFC !CITE[cop:1:1.2.2]. That last exemption is what makes a legitimate R22 retrofit possible.

>! A low GWP does not make a refrigerant safe to release. Hydrocarbons have a GWP of about 3 and are still flammable; carbon dioxide has a GWP of 1 and will still asphyxiate you in a cool room. Environmental rating and personal safety are separate questions, and the assessment likes to test whether you know that.

## Written practice

**1.** A customer says he wants R22 kept in his plant because "it is the old gas, so at least it does not cause global warming". Write a correction using both properties and the numbers.

>? Both halves of the statement are wrong. R22 is an HCFC, so it contains chlorine and does have an ozone-depleting potential — about 0.055, which is roughly one twentieth of R11 but nowhere near zero. It is the only common refrigerant still in service that damages the ozone layer.
>?
>? It also has a global-warming potential of about 1810 on the 100-year AR4 basis, so a kilogram released traps roughly 1810 times as much heat as a kilogram of carbon dioxide. That is higher than R134a at 1430.
>?
>? So R22 is the worst of both worlds: an ozone-depleting substance and a strong greenhouse gas. It is also no longer imported, so the only supply is recovered and reclaimed stock, and it will get scarcer and dearer. The commercial argument for changing the plant is as strong as the environmental one.

**2.** From the table, name every refrigerant with a non-zero ODP and explain, from the chemistry, why the rest are zero.

>? Of the nine, only R22 has a non-zero ozone-depleting potential, at about 0.055.
>?
>? Ozone destruction in the stratosphere is caused by chlorine (and bromine) released from the refrigerant molecule. R22 is a hydrochlorofluorocarbon, so it contains chlorine. The hydrogen in it helps break the molecule down in the lower atmosphere, which is why its ODP is a small fraction of R11 rather than about 1.
>?
>? The other eight contain no chlorine at all. R134a, R32, R404A and R410A are HFCs or HFC blends — hydrogen, fluorine and carbon only. R290 and R600a are hydrocarbons, R717 is ammonia and R744 is carbon dioxide. No chlorine means no ozone-depletion mechanism, so ODP is zero. Zero ODP says nothing about their greenhouse effect, which for the HFCs is large.

**3.** A 6.5 kg charge of R410A is lost from a rooftop package over a year. Calculate the carbon dioxide equivalent of the loss, show your workings, and state what the same mass of R32 would have been.

>? Formula: CO2-e in tonnes = mass in kg x GWP / 1000.
>?
>? R410A: GWP 2088. CO2-e = 6.5 x 2088 / 1000 = 13 572 / 1000 = 13.6 tonnes CO2-e.
>?
>? R32: GWP 675. CO2-e = 6.5 x 675 / 1000 = 4387.5 / 1000 = 4.4 tonnes CO2-e.
>?
>? The same physical leak on the R32 machine costs about a third of the greenhouse impact — which is one of the reasons R32 has replaced R410A in new split and packaged equipment, at the cost of moving from A1 to A2L.

## On the job

- Chlorine causes ozone depletion; only R22 on the common list has any.
- GWP compares heat trapped per kilogram against carbon dioxide over 100 years; quote the AR4 basis used by the Code of Practice.
- CO2-e in tonnes = kilograms leaked x GWP / 1000. Learn that one line.
- HCFCs were phased out; HFCs are being phased down by quota and levy, not banned.
- Low GWP and low ODP tell you nothing about flammability, toxicity or asphyxiation.`,
          quiz: [
            {
              q: "Which property of a refrigerant molecule causes ozone depletion?",
              options: [
                "Its fluorine content",
                "Its chlorine (or bromine) content",
                "Its long atmospheric lifetime alone",
                "Its high infrared absorption",
              ],
              answer: 1,
              explain: "Chlorine and bromine released in the stratosphere destroy ozone catalytically. Fluorine does not, which is why HFCs have zero ODP despite being fluorinated. Long life and strong infrared absorption drive global-warming potential, a completely separate property.",
            },
            {
              q: "A 4 kg charge of R404A is vented to atmosphere. What is the carbon dioxide equivalent, using the AR4 GWP of 3922?",
              options: ["1.6 tonnes CO2-e", "3.9 tonnes CO2-e", "15.7 tonnes CO2-e", "39.2 tonnes CO2-e"],
              answer: 2,
              explain: "CO2-e = mass x GWP / 1000 = 4 x 3922 / 1000 = 15.688, so about 15.7 tonnes. The common error is dividing by the mass or forgetting the /1000 conversion from kilograms of CO2-e to tonnes.",
            },
            {
              q: "Which statement about R744 (carbon dioxide) as a refrigerant is correct?",
              options: [
                "GWP of 1 and zero ODP, but it can still asphyxiate in a confined space",
                "GWP of zero, so it has no environmental effect at all",
                "It is classed A3 because it is a natural refrigerant",
                "It has a small ODP because it contains oxygen",
              ],
              answer: 0,
              explain: "R744 is the reference gas for GWP, so its GWP is 1, not zero, and it contains no chlorine so ODP is zero. It is classed A1. None of that stops it displacing oxygen — a large CO2 release in a cool room is a genuine asphyxiation emergency, and CO2 is also toxic at high concentration.",
            },
            {
              q: "The Code of Practice generally prohibits charging a system with a refrigerant of higher GWP than it was designed for. What is the one exception?",
              options: [
                "Where the customer signs a waiver",
                "Where the system is under 2 kg charge",
                "Where the refrigerant the system was designed for was an ozone-depleting HCFC",
                "Where the work is done under a trainee licence",
              ],
              answer: 2,
              explain: "The exception exists so an ozone-depleting HCFC system such as an R22 plant can legitimately be retrofitted to a chlorine-free alternative even if the substitute's GWP is higher. Charge size, waivers and licence class have nothing to do with it.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "refrigerant-revision-table",
          title: "The refrigerant revision table: build it, cover it, check it",
          minutes: 14,
          simple: "This lesson is a study drill. You write out a blank grid of the nine refrigerants you are likely to be asked about, fill in what each one is, how it is classified and how you handle it, then cover the answers and do it again until it comes out clean. It is the same trick as covering a spelling list with your hand.",
          refs: REFS_CLASS.concat(REFS_HANDLING),
          content: `A classification question is worth a handful of marks and takes thirty seconds if the table is in your head, or five minutes of guessing if it is not. The most reliable way to get it in your head is to build the table yourself, from memory, repeatedly — not to read someone else's.

Here is the drill. Rule up nine rows and six columns on a blank page. Fill it in without looking. Then check it against the completed version further down, mark it, and note only the cells you got wrong. Do it again the next day using just those cells.

## The blank grid to reproduce

Columns, left to right:

1. **Refrigerant** — the R number and the common name.
2. **Family** — HCFC, HFC, HFC blend, hydrocarbon, inorganic.
3. **Safety class** — the two-part code.
4. **ODP** — zero or a value.
5. **GWP** — the 100-year AR4 figure.
6. **Handling precautions specific to this fluid** — this is where the marks are.

That last column is the one candidates skimp on, and it is the one that separates a pass from a good mark. "Wear PPE" earns nothing. What earns marks is the precaution that follows from *this fluid's* properties: the hazard, and the control that answers it.

## The completed table — check yourself against this

| Refrigerant | Family | Class | ODP | GWP | Handling precautions that earn marks |
|---|---|---|---|---|---|
| R134a | HFC | A1 | 0 | 1430 | Heavier than air, pools low: ventilate pits and plant rooms. Recover, never vent. Cold burns from liquid; gloves and eye protection. Do not expose to open flame — decomposes to hydrogen fluoride and other irritants. |
| R22 | HCFC | A1 | 0.055 | 1810 | The only ozone depleter on the list: recovery is a legal obligation and the recovered gas has resale value. Reclaimed stock only. Same asphyxiation, cold-burn and thermal-decomposition hazards as other halocarbons. |
| R404A | HFC blend | A1 | 0 | 3922 | Zeotropic blend: charge as **liquid** or the composition shifts. Never top up a leaking system after a large loss. Highest GWP of the group, so leak repair is the priority. Asphyxiant, cold burns. |
| R410A | HFC blend | A1 | 0 | 2088 | High pressure: gauges, hoses and recovery equipment rated for it, and the receiving cylinder pressure-rated. Charge as liquid. Asphyxiant, cold burns. |
| R32 | HFC | A2L | 0 | 675 | Mildly flammable: no ignition sources, purge and prove refrigerant free before brazing, flammable-rated recovery unit and leak detector, ventilate. Observe AS/NZS 5149 charge limits for room size. High pressure like R410A. |
| R600a isobutane | Hydrocarbon | A3 | 0 | 3 | Highly flammable, lower explosive limit about 1.8% and heavier than air, so it collects at floor level. No ignition sources within the exclusion zone, no smoking, no mobile phones or non-rated electrical gear, ventilate, non-sparking tools, hydrocarbon-rated recovery unit, small charges only. |
| R290 propane | Hydrocarbon | A3 | 0 | 3 | As isobutane: lower explosive limit about 2.1%, heavier than air, flammable-rated equipment, ignition control, ventilation, dedicated hydrocarbon gauges and hoses, left-hand-thread cylinder fittings. |
| R717 ammonia | Inorganic | B2L | 0 | 0 | Toxic well below 10 000 ppm: gas detection, escape respirator on the person, self-contained breathing apparatus for entry and rescue, full chemical splash suit and face shield for a release. Copious water for skin and eye contact and for knocking down a vapour cloud. Flammable at high concentration. Attacks copper — steel systems only. |
| R744 carbon dioxide | Inorganic | A1 | 0 | 1 | Very high pressure, including standing pressure in a shut-down system: pressure-rated gauges, relief protection, and never trap liquid between two closed valves. Forms dry ice at about minus 78 degrees C on rapid release — severe cold burns and blocked lines. Asphyxiant and toxic at high concentration; monitor oxygen and CO2 in plant rooms. |

## How to use the table so it sticks

1. **Cover the right-hand columns** with a sheet of paper and read down the refrigerant column, saying each row out loud. Slide the paper down one line to check.
2. **Cover the left-hand column instead** and work backwards: given "A3, ODP 0, GWP 3, flammable, heavier than air", name two refrigerants it could be.
3. **Group them.** There are only four A1 halocarbons, two A3 hydrocarbons, one A2L, one B2L and one A1 inorganic on this list. Remembering the groups is easier than remembering nine independent rows.
4. **Chunk the GWP numbers.** R744 is 1. The naturals and hydrocarbons are 0 to 3. R32 is under 700. R134a and R22 are in the 1400 to 1800 band. R410A is about 2000. R404A is the worst, near 4000. If you cannot recall the exact figure, the band is worth part marks; a wild guess is worth none.
5. **Say the hazard before the control.** "Heavier than air, so ventilate at low level" is a complete answer. "Ventilate" on its own is half of one.

>! Never top up a zeotropic blend such as R404A or R410A after a substantial leak, and never charge one as vapour from the cylinder. The components boil off at different rates, so vapour charging changes the composition of what is left in the cylinder and of what goes into the system. Charge liquid, and after a major loss recover the remaining charge and start again.

## Written practice

**1.** Reproduce the row for R404A in full: family, safety class, ODP, GWP, and three handling precautions specific to that fluid.

>? R404A is an HFC blend. Safety class A1 — lower toxicity, non-flammable. ODP is 0, because it contains no chlorine. GWP is 3922 on the 100-year AR4 basis, the highest of the common refrigerants.
>?
>? Three fluid-specific precautions:
>? - It is a zeotropic blend, so it must be charged as liquid from the cylinder. Vapour charging draws off the more volatile components first and changes the composition both in the cylinder and in the system.
>? - After a substantial leak it must not be topped up. The remaining charge is no longer the design composition, so recover it, repair the leak and recharge from new.
>? - Its very high GWP makes leak-tightness and full recovery the priority: every kilogram lost is nearly four tonnes of carbon dioxide equivalent, and it carries the highest levy cost of the group.
>?
>? General halocarbon precautions also apply: it is heavier than air and an asphyxiant in a confined space, liquid contact causes cold burns, and it decomposes into irritant and toxic products in a flame.

**2.** You are quoted a fluid as "A3, zero ODP, GWP 3". List the handling precautions you would put in the job safety analysis, and say what physical property drives each one.

>? A3 means higher flammability and lower toxicity, and a GWP of 3 with zero ODP identifies it as a hydrocarbon such as propane or isobutane.
>?
>? - Lower explosive limit around 2%: a small leak makes a flammable atmosphere, so exclude all ignition sources from the work zone — no naked flame, no smoking, no grinding, no switching of non-rated electrical equipment, and use non-sparking tools.
>? - Vapour density greater than air: the gas collects at floor level, in pits and in trenches, so ventilate at low level, keep the area clear below the work and never work over an open pit.
>? - Flammability during service: purge and prove the system free of refrigerant with oxygen-free nitrogen before any brazing, and use a recovery unit, hoses, gauges and leak detector rated for flammable refrigerant.
>? - Charge size limits: the charge permitted for the room volume and occupancy comes from AS/NZS 5149, so check it before adding refrigerant.
>? - Cylinder handling: flammable gas cylinders use left-hand-thread outlets, are stored and transported ventilated and upright, and carry a Division 2.1 flammable gas label.
>? - Still an asphyxiant if released in quantity into a confined space.

**3.** Explain why "low GWP" and "safe" are not the same statement. Use two refrigerants from the table to make the point.

>? Global-warming potential measures atmospheric heat trapping per kilogram against carbon dioxide. It says nothing about what the fluid does to a person in a plant room.
>?
>? R290 propane has a GWP of about 3, which is as close to environmentally harmless as a refrigerant gets, yet it is class A3: a leak with a lower explosive limit near 2% by volume can turn a small plant room into an explosive atmosphere, and it is heavier than air so it pools where people stand.
>?
>? R744 carbon dioxide has a GWP of 1 by definition and zero ODP, but it runs at very high pressure, forms dry ice at about minus 78 degrees C on a rapid release, causes severe cold burns, and will displace oxygen and become toxic at high concentration in a cool room or a plant room.
>?
>? The two ratings answer different questions: GWP answers "what does a release do to the atmosphere", and the safety class plus the fluid's physical properties answer "what does a release do to me". Both have to be checked.

## What to remember

- Build the table from memory, mark it, and re-drill only the cells you missed.
- Only R22 has a non-zero ODP; only R32 (A2L), R290 and R600a (A3) and R717 (B2L) are flammable.
- The handling column carries the marks: state the property, then the control that answers it.
- Charge zeotropic blends as liquid, and do not top up after a big loss.
- If you cannot recall a GWP exactly, give the band rather than nothing.`,
          quiz: [
            {
              q: "Which of these correctly gives the family, class and ODP for R32?",
              options: [
                "HFC blend, A1, ODP 0",
                "HFC, A2L, ODP 0",
                "HCFC, A2L, ODP 0.055",
                "Hydrocarbon, A3, ODP 0",
              ],
              answer: 1,
              explain: "R32 is a single-component HFC (difluoromethane), classed A2L — lower toxicity, lower flammability — with zero ODP because it contains no chlorine and a GWP of about 675. It is not a blend, and only chlorinated fluids such as R22 have a non-zero ODP.",
            },
            {
              q: "Why must R410A and R404A be charged into a system as liquid rather than vapour?",
              options: [
                "Liquid charging is faster",
                "They are zeotropic blends whose components boil off at different rates, so vapour charging shifts the composition",
                "Vapour charging would overheat the compressor",
                "The cylinder valve only passes liquid",
              ],
              answer: 1,
              explain: "Both are blends of components with different boiling points. Drawing vapour takes the more volatile components preferentially, so the mixture left in the cylinder and the mixture entering the system both drift away from the design composition, changing capacity and glide. Speed and valve design are not the reason.",
            },
            {
              q: "A handling precaution answer that will earn marks for ammonia is:",
              options: [
                "Wear appropriate PPE at all times",
                "Toxic well below 10 000 ppm, so gas detection, an escape respirator carried on the person and self-contained breathing apparatus for entry, plus copious water for skin and eye contact",
                "Ventilate the area",
                "Avoid ignition sources because it has a GWP of zero",
              ],
              answer: 1,
              explain: "Marks come from naming the property and the control it drives. Ammonia is class B, toxic at low concentration, so respiratory protection and detection are specific and justified; water is the specific first response for skin, eyes and knocking down a vapour cloud. Generic 'wear PPE' or 'ventilate' answers are not fluid-specific, and GWP has nothing to do with ignition.",
            },
            {
              q: "Which group of refrigerants on the revision list all share zero ODP and a GWP of 3 or less?",
              options: [
                "R134a, R22 and R404A",
                "R410A, R404A and R32",
                "R290, R600a, R717 and R744",
                "R22, R32 and R744",
              ],
              answer: 2,
              explain: "The hydrocarbons R290 and R600a sit at about 3, ammonia at 0 and carbon dioxide at 1 — all with zero ODP. The HFCs and the HFC blends are in the hundreds to thousands, and R22 has both a GWP of 1810 and the only non-zero ODP on the list.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "refrigerant-specific-precautions",
          title: "Refrigerant-specific handling precautions",
          minutes: 14,
          simple: "Different refrigerants hurt you in different ways, so the safety plan changes with the gas in the pipe. Flammable ones need every spark kept away, ammonia needs a breathing set and water, and carbon dioxide needs respect for pressure and extreme cold. Same job, different dangers, like cooking with oil, boiling water or a hot oven.",
          refs: REFS_HANDLING,
          content: `An examiner asking for "handling precautions" is asking you to prove you know what *this* fluid does when it escapes. The structure that always scores is: **hazard, then control, then why**. Work through the four families below in that structure and you will never write a generic answer again.

## Hydrocarbons — R290 propane and R600a isobutane

The hazard is fire and explosion. Isobutane's lower explosive limit is about 1.8% by volume and propane's about 2.1%, both well under the 3.5% line, so a leak of a few hundred grams into a small room can make an ignitable atmosphere. Both vapours are heavier than air and sink.

The controls follow directly:

- **Ignition control.** Establish an exclusion zone around the work and keep out naked flame, hot work, smoking, angle grinders, and switching of any electrical equipment that is not rated for the atmosphere. Switching a light on or unplugging a lead is an ignition source. Use non-sparking tools where a tool could strike a spark.
- **Ventilation at low level.** Because the vapour sinks, ventilation has to sweep the floor, not the ceiling. Never work over an open pit or trench, and clear the level below you.
- **Detection.** Use an electronic leak detector rated for hydrocarbons and, on a significant charge, a lower-explosive-limit monitor. A halide torch is an ignition source.
- **Purge before heat.** Recover the charge, then purge and prove the system free of refrigerant with oxygen-free nitrogen before brazing. Residual hydrocarbon in a line will find the torch.
- **Rated equipment.** Recovery unit, vacuum pump, gauges, hoses and cylinders certified for flammable refrigerant, with left-hand-thread connections. Do not cross-use halocarbon gear.
- **Charge limits.** AS/NZS 5149 limits the charge permitted for the room volume and occupancy category. Check it before you charge, and never substitute a hydrocarbon into equipment designed for a halocarbon.
- **Disposal.** Recovered hydrocarbon is normally not returned to a reclaimer with halocarbons — the preferred routes are re-use in the same system where the Code permits it, or controlled destruction through a licensed facility. Never vent it as a shortcut, and never mix it into a halocarbon recovery cylinder !CITE[cop:2:12.2.5].

## Ammonia — R717

The hazard is toxicity first and flammability second. Ammonia is class B: harm occurs well below 10 000 ppm. The workplace exposure standard is 25 ppm as an eight-hour average with a short-term limit of 35 ppm, and it is detectable by smell at a few parts per million — so if you can smell it strongly, you are already in a concentration that will damage your airway. It is also corrosive to eyes and moist skin, and flammable at high concentration, which is what puts the 2L in B2L.

Controls:

- **Fixed gas detection with alarms** in the machinery room, and a plant-room ventilation system that runs on alarm.
- **Escape respirator carried on the person** when entering an ammonia machinery room, so you can get out of a release rather than get through it.
- **Self-contained breathing apparatus** for entry into a known release and for any rescue, with a second trained person and full chemical splash suit, gloves and face shield. Do not enter a release on a cartridge respirator.
- **Copious water.** Water is the specific first response: flush skin and especially eyes for at least 20 minutes with running water, and a water fog or spray is used to knock down and absorb an escaping vapour cloud because ammonia is extremely soluble in water. Do not apply water to the liquid ammonia itself in a way that increases boil-off.
- **Materials.** Ammonia attacks copper and copper alloys, so the plant is steel. Never fit copper tube, brass fittings or a standard halocarbon gauge set to an ammonia system.
- **Emergency planning.** Alarm, evacuation route, muster point, and notification. Because ammonia is lighter than air when pure and dry it tends to rise and disperse, but a cold release carrying entrained liquid droplets behaves as a dense, rolling cloud at ground level — plan for both.

## Carbon dioxide — R744

The hazards are pressure and cold, plus asphyxiation.

- **Pressure.** A CO2 cylinder or a shut-down system sits at very high standing pressure — around 5700 kPa at 20 degrees C, and transcritical plant operates far above that. Use gauges, hoses and recovery equipment rated for CO2 service, and never fit a standard halocarbon manifold.
- **Trapped liquid.** Liquid CO2 shut in between two closed valves will develop enormous pressure as it warms. Never isolate a liquid-full section without a relief device. On a shut-down subcritical plant, standing pressure rises with ambient temperature, which is why CO2 systems carry pressure-relief and, on larger plant, an auxiliary condensing unit or a controlled blow-off.
- **Dry ice.** Rapid expansion to atmosphere drops CO2 below its triple point and it forms solid dry ice at about minus 78 degrees C. That plugs recovery hoses and valves, and skin contact causes an immediate severe cold burn.
- **Asphyxiation and toxicity.** CO2 is heavier than air and is toxic as well as asphyxiating: the exposure standard is 5000 ppm as an eight-hour average, and concentrations of a few per cent cause rapid breathing, headache and confusion. Plant rooms and cool rooms with CO2 plant need fixed CO2 monitoring, not just oxygen monitoring, because a dangerous CO2 concentration arrives before the oxygen reading looks alarming.

## Halocarbons — R134a, R22, R404A, R410A

These are class A1: not flammable, not toxic at ordinary leak concentrations. The hazards are the ones people forget.

- **Asphyxiation.** All are heavier than air. A large release into a plant room, a cool room, a lift pit or a trench displaces oxygen with no smell and no warning.
- **Cold burns.** Liquid boiling off at atmospheric pressure will freeze skin on contact and can freeze an eye permanently. Gloves and goggles when breaking a connection.
- **Thermal decomposition.** In a flame or on a hot surface these fluids break down into hydrogen fluoride, hydrogen chloride and other irritants — the sharp acrid smell around a burnt-out compressor. Ventilate, and do not braze on a system that still holds refrigerant.
- **Pressure.** R410A operates at roughly 50 to 60 per cent higher pressure than R22, so equipment ratings matter.
- **The blends.** R404A and R410A must be charged as liquid, and must not be topped up after a significant loss.

>! Never use oxygen or compressed air to pressure test or to blow through a refrigeration system. Oxygen with the oil in the system is an explosion. Use oxygen-free nitrogen with a regulator and a relief valve set below the weakest component's rating.

## Written practice

**1.** You are sent to replace a compressor on a display cabinet charged with 150 g of R290. Write the refrigerant-specific controls you will put in place before the recovery starts.

>? R290 is class A3, higher flammability, with a lower explosive limit near 2.1% by volume and a vapour heavier than air.
>?
>? - Establish an exclusion zone and remove ignition sources: no naked flame, no smoking, no hot work, no grinding, and no switching of electrical equipment that is not rated for the atmosphere. Isolate and lock out the cabinet before starting.
>? - Ventilate at low level, because the vapour sinks. Clear floor drains, pits and any lower level in the vicinity.
>? - Use a recovery unit, hoses, gauges and recovery cylinder rated for flammable refrigerant, with the correct left-hand-thread fittings, and a hydrocarbon-rated electronic leak detector.
>? - Recover the charge to the rated cylinder, then purge the system with oxygen-free nitrogen and prove it is free of refrigerant before any brazing.
>? - Keep a suitable fire extinguisher and a clear escape path at the work position, and tell others working nearby what is happening.
>? - Follow the Code of Practice route for the recovered hydrocarbon rather than mixing it into a halocarbon cylinder.

**2.** A pipe fitter has been splashed on the forearm with liquid ammonia from a weeping valve gland. Describe the immediate response and explain why water is the specific treatment.

>? Immediate response: move the person to fresh air away from the release, and flood the affected skin with copious running water without delay — continue for at least 20 minutes, removing contaminated clothing under the water stream as you go. If any has reached the eyes, hold the eyelids open and irrigate continuously for at least 20 minutes and treat it as a medical emergency. Seek medical attention regardless of how the skin looks, and report the incident.
>?
>? Why water: ammonia is extremely soluble in water, so flooding dilutes and carries away the ammonia rather than leaving it in contact with tissue. Ammonia injures by reacting with the moisture in skin, eyes and airway to form a strong alkali, and an alkaline burn keeps penetrating while any ammonia remains, so dilution has to be immediate and prolonged. Wiping or neutralising chemicals must not be used.
>?
>? Do not send an untrained person back into the release. Entry to stop the leak needs self-contained breathing apparatus, a chemical splash suit and a second trained person standing by.

**3.** Explain why a technician working on a transcritical CO2 rack must never isolate a section of liquid-filled pipework between two closed valves, and describe two other CO2-specific hazards.

>? Liquid CO2 trapped between two closed valves has nowhere to expand as it warms. Its pressure rises very steeply with temperature, so a section left liquid-full and isolated can exceed the pressure rating of the pipe, the valve or a joint and fail violently. Any section capable of being isolated liquid-full has to have a pressure-relief device, and the safe procedure is to relieve the trapped liquid to the low side before closing the second valve.
>?
>? Two other CO2-specific hazards:
>? - Dry ice formation. Released rapidly to atmosphere, CO2 drops below its triple point and forms solid dry ice at about minus 78 degrees C. It blocks recovery hoses, service valves and relief lines, and skin contact gives an immediate severe cold burn. Gloves and eye protection, and slow controlled venting through a proper device.
>? - Asphyxiation and toxicity. CO2 is heavier than air and is toxic as well as an asphyxiant, with an eight-hour exposure standard of 5000 ppm. A release into a plant room, a cool room or a pit becomes dangerous before the oxygen level alone would trigger a simple oxygen monitor, so fixed CO2 detection and mechanical ventilation are required.
>?
>? Also worth stating: high standing pressure in a shut-down system means gauges, hoses and recovery gear must be CO2-rated, and a subcritical plant left off will rise in pressure with ambient temperature until relief or auxiliary cooling acts.

## On the job

- Structure every precaution answer as hazard, control, reason.
- Hydrocarbons: ignition control and low-level ventilation, because the vapour is heavy and the explosive limit is low.
- Ammonia: detection, escape set, breathing apparatus for entry, and water for contact and for knocking down a cloud.
- CO2: pressure ratings, never trap liquid, dry ice cold burns, fixed CO2 monitoring.
- Halocarbons: asphyxiation, cold burns, thermal decomposition, and liquid charging for blends.
- Nitrogen for pressure testing, never oxygen or air.`,
          quiz: [
            {
              q: "Why must ventilation for a hydrocarbon leak be arranged at low level?",
              options: [
                "Because the vapour is lighter than air and would otherwise recirculate",
                "Because the vapour is heavier than air and collects at floor level, in pits and trenches",
                "Because low-level fans are less likely to be an ignition source",
                "Because the lower explosive limit only applies near the floor",
              ],
              answer: 1,
              explain: "Propane and isobutane vapour is denser than air, so it sinks and pools in the lowest available space. Extracting at ceiling level leaves the flammable layer exactly where people stand. Fan rating is a separate requirement, and the explosive limit is a property of the mixture, not of height.",
            },
            {
              q: "A technician plans to enter an ammonia machinery room where a release has been reported. What respiratory protection is required?",
              options: [
                "A P2 disposable respirator",
                "A half-face cartridge respirator with an ammonia cartridge",
                "Self-contained breathing apparatus, with a second trained person standing by",
                "No protection is needed if the room is ventilated",
              ],
              answer: 2,
              explain: "A known release means an unknown and potentially very high concentration in an atmosphere that may also be oxygen-deficient. Only self-contained breathing apparatus supplies independent air, and entry requires a standby person. Cartridge respirators depend on the surrounding air being breathable and can be overwhelmed; an escape respirator is for getting out, not going in.",
            },
            {
              q: "What forms when liquid CO2 is released rapidly to atmosphere, and why does it matter to a service technician?",
              options: [
                "A flammable vapour cloud that must be kept from ignition",
                "Dry ice at about minus 78 degrees C, which blocks hoses and valves and causes severe cold burns",
                "An acidic mist that corrodes the equipment",
                "Nothing unusual — it behaves like any other refrigerant",
              ],
              answer: 1,
              explain: "Below its triple point CO2 goes straight from liquid to solid, so a fast release makes dry ice in the hose, in the valve and on any skin it lands on. CO2 is not flammable, and the acrid decomposition products belong to halocarbons in a flame, not to CO2.",
            },
            {
              q: "Which precaution is specific to R404A rather than being a general halocarbon precaution?",
              options: [
                "Wear gloves and eye protection against cold burns",
                "Ventilate the plant room because the vapour is heavier than air",
                "Charge it as liquid and do not top up after a substantial leak, because it is a zeotropic blend",
                "Do not braze on a system that still contains refrigerant",
              ],
              answer: 2,
              explain: "Cold burns, asphyxiation and decomposition in a flame apply to every halocarbon. The blend behaviour is specific: R404A's components boil at different rates, so vapour charging or topping up after a big loss leaves the system running on the wrong composition.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "cylinders-storage-transport",
          title: "Cylinders: identification, storage, transport and the 80% rule",
          minutes: 14,
          simple: "A refrigerant cylinder is a pressure vessel full of liquid that expands hard when it warms up, so it is never filled right to the top. You leave a fifth of the space empty, keep it upright, keep it cool, strap it down and read the label rather than trusting the colour. Like never filling a saucepan to the brim before you put it on the heat.",
          refs: REFS_CYL,
          content: `More refrigeration workers are hurt by cylinders than by the refrigerant inside them. A cylinder is a pressure vessel that gets rolled, dropped, left in the sun and thrown in the back of a ute, and the arithmetic that keeps it safe is simple enough to do on a job sheet.

## Identifying what you have

Colour is a hint, not a fact. Cylinder colour schemes have changed, suppliers differ, and a repainted or relabelled cylinder is common. **Identify by the label and the stamped markings, every time.**

What to read before you connect anything:

- The **refrigerant designation** on the label, and the safety class.
- The **dangerous goods class**: Division 2.1 flammable gas for R290, R600a and R32; Division 2.2 non-flammable non-toxic gas for R134a, R22, R404A, R410A and R744; Division 2.3 toxic gas for ammonia.
- The **tare weight** stamped on the collar or the shoulder — the mass of the empty cylinder including its valve. You cannot do fill arithmetic without it.
- The **water capacity**, in litres — the volume the cylinder would hold if filled with water.
- The **test date and next test date**. An out-of-date cylinder must not be filled, and most suppliers will not accept it.
- **Valve outlet thread.** Flammable refrigerant cylinders use left-hand threads so that flammable and non-flammable gear cannot be cross-connected. If a fitting does not go on, that is the design working; do not force it or use an adaptor.
- **Recovery cylinders** are a separate item again: grey body with a yellow shoulder in common Australian practice, fitted with both a liquid and a vapour valve, and marked as recovery cylinders. Never recover into a disposable cylinder !CITE[cop:2:12.5].

## The 80% rule and why it exists

A cylinder holding saturated liquid and vapour is safe only while a vapour space remains. If the liquid expands to fill the cylinder completely — liquid full — any further rise in temperature raises the pressure hydraulically and violently, because liquid barely compresses. The cylinder can rupture.

So a refrigerant cylinder is never filled beyond about **80% of its volume with liquid** at the reference temperature. The remaining fifth is the vapour space that absorbs liquid expansion as the cylinder warms in a hot vehicle or in the sun.

The rule is applied as a **filling ratio** in kilograms of refrigerant per litre of water capacity. If you are given the filling ratio, use it directly. If you are given the liquid density, work it out:

**Maximum refrigerant mass (kg) = water capacity (L) x 0.80 x liquid density (kg/L)**

And then, since a cylinder on a set of scales reads gross:

**Maximum gross mass (kg) = tare mass (kg) + maximum refrigerant mass (kg)**
**Refrigerant currently in the cylinder (kg) = current gross (kg) - tare (kg)**

### Worked example 1 — may I use this cylinder?

A recovery cylinder is stamped **tare 11.8 kg, water capacity 22 L**. It currently reads **28.4 kg** on the scales and contains R134a. You need to recover **3.5 kg** of R134a. Liquid density of R134a at 25 degrees C is 1.21 kg/L.

1. Maximum refrigerant mass = 22 x 0.80 x 1.21
2. 22 x 0.80 = 17.6 L of liquid allowed
3. 17.6 x 1.21 = **21.3 kg** of R134a allowed
4. Maximum gross = 11.8 + 21.3 = **33.1 kg**
5. Refrigerant already in it = 28.4 - 11.8 = **16.6 kg**
6. Space remaining = 21.3 - 16.6 = **4.7 kg**

4.7 kg of space is more than the 3.5 kg to be recovered, so **yes, this cylinder may be used**, and it will finish at about 31.9 kg gross, under the 33.1 kg limit.

### Worked example 2 — the answer is no

A recovery cylinder is stamped **tare 8.2 kg, water capacity 13.6 L**. It reads **17.9 kg** gross and holds R410A. You need to recover **4.0 kg** of R410A. Liquid density of R410A at 25 degrees C is 1.06 kg/L.

1. Maximum refrigerant mass = 13.6 x 0.80 x 1.06
2. 13.6 x 0.80 = 10.88 L
3. 10.88 x 1.06 = **11.5 kg** allowed (11.53 kg)
4. Maximum gross = 8.2 + 11.5 = **19.7 kg**
5. Already in it = 17.9 - 8.2 = **9.7 kg**
6. Space remaining = 11.5 - 9.7 = **1.8 kg**

1.8 kg is less than the 4.0 kg required, so **this cylinder must not be used** for the job. Get an empty rated cylinder, or decant the contents properly first. Continuing to fill it would overfill it by more than 2 kg.

>! Never fill a cylinder by pressure or by feel, never rely on the recovery machine cutting out, and never mix refrigerants in one cylinder. Weigh it. A set of scales under the receiving cylinder throughout recovery is the only control that works, and a mixed cylinder is refused by the reclaimer and has to be destroyed at your cost.

## Storage

- Upright, valve uppermost, and **secured** with a chain, strap or stand so it cannot fall.
- In a **well-ventilated** area, ideally outdoors in a caged compound, away from heat sources, direct sun, and any source of ignition for flammable refrigerants !CITE[cop:2:13.6.2].
- **Valve caps and guards fitted** whenever the cylinder is not in use. A snapped-off valve turns the cylinder into a projectile.
- **Segregate by class**: flammable gases separated from oxidising gases and from ignition sources; toxic gases separated again.
- Full and empty cylinders identified and separated, so nobody takes an empty one to a job.
- Never store cylinders in stairwells, escape routes, lift wells, basements or below-ground plant rooms where a leak collects.

## Transport

- Secure the cylinder so it cannot move, roll or fall, valve end protected.
- Carry it in a **ventilated** space, never in the sealed cabin of a vehicle with the occupants. A ute tray or a ventilated van compartment.
- Placarding, documentation and quantity limits come from the Australian Dangerous Goods Code, and flammable refrigerants have tighter requirements again !CITE[cop:2:13.7.3].
- Turn the valve off and remove hoses before moving, so a hose caught on something cannot shear the valve.
- Do not lift cylinders by the valve or the cap, and do not drop them off a tailgate.

## Written practice

**1.** A recovery cylinder is stamped tare 9.6 kg, water capacity 18 L. It reads 21.4 kg on the scales and holds R404A, liquid density 1.05 kg/L at 25 degrees C. You need to recover 3.0 kg. Show all workings and state whether the cylinder may be used.

>? Step 1 — allowable liquid volume: 18 L x 0.80 = 14.4 L.
>? Step 2 — maximum refrigerant mass: 14.4 x 1.05 = 15.12 kg, say 15.1 kg.
>? Step 3 — maximum gross mass: 9.6 + 15.1 = 24.7 kg.
>? Step 4 — refrigerant already in the cylinder: 21.4 - 9.6 = 11.8 kg.
>? Step 5 — space remaining: 15.1 - 11.8 = 3.3 kg.
>?
>? 3.3 kg of space is more than the 3.0 kg to be recovered, so the cylinder may be used. It will finish at about 24.4 kg gross, just under the 24.7 kg limit — so keep it on the scales throughout and stop at the calculated figure rather than waiting for the machine to cut out.

**2.** Explain, in terms of what happens inside the cylinder, why the 80% figure exists and what would happen if a cylinder were filled liquid full.

>? A refrigerant cylinder holds saturated liquid with a vapour space above it. As the cylinder warms, the liquid expands and the vapour space shrinks; the pressure inside follows the saturation curve for the refrigerant, which the cylinder is designed to withstand.
>?
>? If the cylinder is filled so full that the expanding liquid reaches the top and the vapour space disappears, the cylinder becomes liquid full. Liquid is almost incompressible, so any further temperature rise no longer has anywhere to expand into: pressure then climbs hydraulically and extremely steeply for a very small rise in temperature, far faster than the saturation curve.
>?
>? The result is that the cylinder can be taken past its design pressure and rupture, with no warning and no relief. A cylinder left on a hot ute tray or in the sun is exactly the situation that does it.
>?
>? Filling to about 80% of the volume with liquid leaves roughly a fifth of the cylinder as vapour space, which is enough to absorb the liquid expansion over the temperature range the cylinder will realistically see.

**3.** List six requirements for storing refrigerant cylinders on a service branch site, and give the reason for each.

>? - Stored upright with the valve uppermost, so that the valve is in the vapour space and a leaking or damaged valve releases vapour rather than a stream of liquid.
>? - Secured by chain, strap or stand, so a cylinder cannot topple and shear its valve, which would turn it into an uncontrolled projectile.
>? - Valve caps and guards fitted when not in use, protecting the valve from impact damage for the same reason.
>? - Well ventilated, preferably outdoors in a caged compound, so that any leak disperses instead of building an asphyxiating or flammable atmosphere.
>? - Away from heat and direct sunlight, because cylinder pressure follows the saturation temperature of the contents and a hot cylinder is a high-pressure cylinder.
>? - Segregated by dangerous goods class, with flammable refrigerants kept away from oxidisers and from ignition sources, and toxic gases kept separate, so that one incident cannot escalate into another.
>?
>? Also creditable: full and empty cylinders identified and separated; no storage in stairwells, escape routes, basements or lift wells where a heavier-than-air leak collects; cylinders in test date; and access kept clear.

## What to remember

- Read the label and the stamped markings; colour is not proof.
- Maximum refrigerant mass = water capacity x 0.80 x liquid density. Gross = tare plus contents.
- Weigh every recovery; never fill by pressure, by feel or by machine cut-out.
- Never mix refrigerants in a cylinder, and never recover into a disposable cylinder.
- Store upright, secured, capped, ventilated, out of the sun and segregated.
- Transport secured, ventilated, valve off and hoses removed — never in the cabin.`,
          quiz: [
            {
              q: "A recovery cylinder has a water capacity of 25 L and holds a refrigerant with a liquid density of 1.20 kg/L. What is the maximum mass of refrigerant it may contain?",
              options: ["20.0 kg", "24.0 kg", "25.0 kg", "30.0 kg"],
              answer: 1,
              explain: "Maximum mass = water capacity x 0.80 x liquid density = 25 x 0.80 x 1.20 = 24.0 kg. Taking 80% of the mass equivalent without applying the density (20 kg) or ignoring the 80% rule entirely (30 kg) are the two usual errors.",
            },
            {
              q: "A cylinder is stamped tare 10.5 kg and reads 26.0 kg gross. Its calculated maximum refrigerant charge is 17.0 kg. How much more may be recovered into it?",
              options: ["1.5 kg", "9.0 kg", "15.5 kg", "It is already overfilled"],
              answer: 0,
              explain: "Contents = gross minus tare = 26.0 - 10.5 = 15.5 kg. Space remaining = 17.0 - 15.5 = 1.5 kg. Forgetting to subtract the tare gives the wrong contents figure, which is the classic mistake in this calculation.",
            },
            {
              q: "Why do cylinders for flammable refrigerants use left-hand-thread valve outlets?",
              options: [
                "To make them harder to steal",
                "Because flammable refrigerants are at higher pressure",
                "To prevent flammable and non-flammable service equipment being cross-connected",
                "Because they are filled from the opposite direction",
              ],
              answer: 2,
              explain: "The opposite thread is a physical interlock: hydrocarbon-rated gear will not connect to a halocarbon cylinder and vice versa, which stops both cross-contamination and the use of non-rated equipment on a flammable charge. Pressure and filling direction have nothing to do with it.",
            },
            {
              q: "Which of these is acceptable practice when transporting refrigerant cylinders?",
              options: [
                "Laid flat and loose in the tray so they cannot fall over",
                "Upright and secured on a ventilated ute tray with the valve closed and hoses removed",
                "Standing in the passenger footwell of the cabin where you can watch them",
                "Secured in a sealed toolbox with the hoses left connected for the next job",
              ],
              answer: 1,
              explain: "Upright, secured, ventilated, valve closed and hoses off is the safe combination: the valve stays in the vapour space, nothing can shear it, and a leak disperses. Loose cylinders shear valves, a sealed box concentrates a leak, and no cylinder belongs in an occupied cabin.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "asphyxiation-and-cold-burns",
          title: "Asphyxiation, oxygen depletion and cold burns",
          minutes: 12,
          simple: "Refrigerant does not have to be poisonous to kill you: if enough of it fills a room it pushes the air out and there is nothing left to breathe. It has no smell and no warning, and because most refrigerants are heavier than air they collect in the low spots. Liquid refrigerant on skin freezes it instantly, like grabbing metal in a freezer, only worse.",
          refs: REFS_HANDLING.concat([
            "AS 2865 — Confined spaces: entry permits, atmospheric testing and standby arrangements",
            "AS/NZS 5149.3 — Refrigerating systems: installation site, machinery rooms and ventilation",
          ]),
          content: `Every year somebody in this trade walks into a plant room, a cool room or a pit that has quietly filled with refrigerant, and does not walk out. There is nothing dramatic about it. The gas has no colour, most have no useful smell, and the first symptom of serious oxygen depletion is often the loss of judgement that stops you leaving.

## What oxygen depletion actually is

Air is about 20.9% oxygen by volume. Refrigerant leaking into a closed space does not react with the oxygen — it **dilutes** it. Every cubic metre of refrigerant vapour that enters displaces a cubic metre of air.

| Oxygen in the atmosphere | Effect |
|---|---|
| 20.9% | Normal air |
| 19.5% | The lower limit for a safe working atmosphere — below this the space is oxygen-deficient |
| 16 to 18% | Faster breathing and pulse, impaired judgement and coordination, headache |
| 12 to 16% | Poor judgement, exhaustion on light work, the person often does not recognise the problem |
| 10 to 12% | Confusion, blue lips, imminent collapse |
| Below 10% | Rapid unconsciousness, then death |

Two things make this dangerous in refrigeration specifically. First, **most refrigerants are heavier than air**, so the oxygen-deficient layer sits on the floor. A person standing may be fine while a person kneeling to braze, or lying in a pit, is not. Second, **the danger arrives before it is obvious**: a plant room with a large leak can be lethal without any frost, any hiss or any smell.

>! Never enter a plant room, cool room, pit, trench, lift well or roof void that may hold a refrigerant leak without testing the atmosphere first. Ventilate, test with an oxygen meter at floor level as well as head height, and treat any oxygen-deficient space as a confined space under AS 2865 — entry permit, standby person, rescue plan. Do not go in to drag a collapsed workmate out; that is how the second casualty happens.

## The right first response

If a person is overcome in a plant room:

1. **Do not enter.** Raise the alarm and call emergency services. State that it is a refrigerant leak and a possible oxygen-deficient atmosphere.
2. **Ventilate the space** from outside — open doors, start the mechanical extract, get airflow across the floor.
3. **Rescue only with breathing apparatus** and a standby person, by people trained and equipped to do it. Self-contained breathing apparatus, not a dust mask, not a cartridge respirator, and not a lungful of held breath.
4. Once the casualty is in fresh air, **check response and breathing and begin resuscitation** if needed. Give oxygen if it is available and you are trained to use it.
5. **Do not let the casualty exert themselves**, and get medical assessment even if they seem to recover — refrigerant exposure can sensitise the heart to adrenaline, so exertion and stress after a heavy exposure carry a real risk.
6. **Isolate the source** and secure the area before anyone goes back in.

## Cold burns and frostbite

Liquid refrigerant boils at atmospheric pressure at temperatures well below anything skin can survive — R404A around minus 46 degrees C, R410A around minus 51 degrees C, ammonia around minus 33 degrees C, and CO2 forming dry ice at about minus 78 degrees C. Contact freezes tissue on the spot.

Where it happens: breaking a flare or a Schrader while liquid is present, opening a liquid line valve, a hose whipping, a relief valve lifting, or charging liquid into a hose that is not properly connected. Eyes are the worst case — a splash can cause permanent damage in a second, which is why goggles or a face shield are not optional when you break into a charged system.

**First response to a cold burn:**

1. Get the person away from the source.
2. **Flood the area with lukewarm water** — around body temperature, up to about 40 degrees C — for at least 20 minutes. Never hot water, never dry heat, never rubbing. Rubbing frozen tissue tears it.
3. **Do not remove clothing that is frozen to the skin.** Thaw it with the water first.
4. Cover loosely with a clean dry dressing after thawing. Do not burst blisters.
5. For eye contact, irrigate continuously with clean lukewarm water or eyewash for at least 20 minutes, holding the lids open, and get urgent medical help.
6. Get medical attention for anything more than a trivial contact. Cold burns look mild and turn out deep.

## Controls that stop it happening

- **Ventilate before you work**, and keep ventilating. Mechanical extract at low level in machinery rooms is a design requirement under AS/NZS 5149.3 for exactly this reason.
- **Fixed detection with alarm** on plant above the charge thresholds — refrigerant detection for the leak, oxygen or CO2 monitoring for the atmosphere.
- **Gloves and eye protection** every time a connection is broken on a charged system. Break connections slowly and with the port pointed away from you.
- **Recover, do not vent.** Venting into a plant room is both illegal and the mechanism for the hazard !CITE[cop:1:1.2.1].
- **Never work alone** on a large charge in a confined space.
- **Purge with nitrogen and ventilate** before entering a space that has held a leak.

## Written practice

**1.** A shopping-centre plant room holds an R134a chiller. A large leak has occurred overnight and the room has been closed. Describe how you would make entry safe, and state the oxygen concentration below which the atmosphere is not safe to work in.

>? An atmosphere below 19.5% oxygen by volume is oxygen-deficient and not safe to work in. Normal air is about 20.9%.
>?
>? Making entry safe:
>? - Do not open up and walk in. Treat the room as a potential confined space under AS 2865 until it is proved otherwise.
>? - Isolate the plant electrically and stop the leak source remotely where possible, and stop anyone else entering.
>? - Ventilate from outside: run the mechanical extract, which in a machinery room should draw from low level because R134a vapour is heavier than air, and open doors to get a cross-flow.
>? - Test the atmosphere before entry with a calibrated oxygen meter, sampling at floor level as well as at head height, and with a refrigerant detector. Repeat the test after ventilation and continue monitoring during the work.
>? - Only enter when the oxygen reading is at or above 19.5% at all levels and stable, with ventilation still running, a standby person outside, and a means of communication and rescue arranged.
>? - Wear eye protection and gloves for the work itself, and if the atmosphere cannot be made safe, enter only with self-contained breathing apparatus under a permit with a trained standby.

**2.** An apprentice takes a splash of liquid R410A across the back of the hand while breaking a flare. Write the first-aid response in order, and explain the two things that must not be done.

>? 1. Move away from the source and shut off or isolate the leak if that can be done safely.
>? 2. Flood the affected area immediately with lukewarm running water, around body temperature and no hotter than about 40 degrees C, and keep it flooded for at least 20 minutes.
>? 3. If clothing, a glove or a watch band is frozen to the skin, leave it in place and thaw it under the water rather than pulling it off.
>? 4. After thawing, cover loosely with a clean dry non-adherent dressing. Do not burst any blisters.
>? 5. Seek medical attention, and report the incident. Cold burns often look far less serious than they are.
>?
>? Two things that must not be done:
>? - Do not apply direct or hot heat — hot water, a heater, a flame or hot air. Frozen tissue has no feeling and no normal blood flow, so it will be burnt without the person knowing.
>? - Do not rub or massage the area. Ice crystals in frozen tissue tear it mechanically when rubbed, making the injury far worse.
>?
>? If any liquid reached the eyes, irrigate continuously for at least 20 minutes holding the lids open and treat it as an emergency.

**3.** Explain why an odourless class A1 refrigerant, with no toxicity and no flammability, is still capable of killing a technician, and name two places on a typical site where the risk is highest.

>? Class A1 means lower toxicity and no flame propagation, so the fluid will not poison or burn the person. It kills by displacing the air.
>?
>? Every cubic metre of refrigerant vapour that enters a closed space pushes out a cubic metre of air, and with it the oxygen. Below 19.5% oxygen the atmosphere is deficient; in the mid teens judgement and coordination go, which means the person often loses the ability to recognise the problem and leave; below about 10% unconsciousness comes quickly and death follows. There is no smell, no irritation and no warning — the person simply gets confused and then collapses.
>?
>? The risk is worst wherever the vapour can collect, because these refrigerants are heavier than air. Two examples: a below-ground or basement plant room, especially one with no low-level mechanical extract; and a pit, trench, lift well or under-floor space near the plant. A cool room or freezer room with a leaking evaporator is a third, because the door seals and the person is working inside the leak.

## On the job

- Normal air is 20.9% oxygen; below 19.5% the atmosphere is not safe to work in.
- Most refrigerants are heavier than air and settle in pits, trenches and basements.
- Test the atmosphere before entry, ventilate at low level, and never enter to rescue without breathing apparatus and a standby.
- Cold burn first aid: lukewarm water for at least 20 minutes, no heat, no rubbing, do not pull frozen clothing away.
- Eye protection and gloves every time a charged connection is broken.
- After a heavy exposure, keep the casualty still and get them assessed.`,
          quiz: [
            {
              q: "What oxygen concentration marks the lower limit of a safe working atmosphere?",
              options: ["20.9%", "19.5%", "16%", "10%"],
              answer: 1,
              explain: "Normal air is about 20.9% oxygen; 19.5% is the accepted lower limit for a safe working atmosphere and the level at which a space is classed oxygen-deficient. By 16% judgement and coordination are already impaired, and 10% is close to immediately fatal — those are consequences, not limits.",
            },
            {
              q: "A workmate has collapsed inside a plant room after a large refrigerant leak. What is the correct first action?",
              options: [
                "Hold your breath, drag him out quickly, then call for help",
                "Raise the alarm, call emergency services, ventilate from outside and do not enter without breathing apparatus and a standby person",
                "Open a window and wait for the gas to clear before doing anything",
                "Enter wearing a P2 disposable respirator",
              ],
              answer: 1,
              explain: "Untrained rescue into an oxygen-deficient atmosphere is the single most common way a one-casualty incident becomes a two-casualty incident. Holding your breath fails as soon as you exert yourself, and a particulate respirator filters dust — it supplies no oxygen. Raise the alarm, ventilate from outside, and let equipped rescuers enter.",
            },
            {
              q: "Which is the correct first aid for a liquid refrigerant cold burn?",
              options: [
                "Rub the area briskly to restore circulation",
                "Immerse in hot water at 60 degrees C",
                "Flood with lukewarm water for at least 20 minutes, without rubbing, and leave frozen clothing in place until thawed",
                "Apply ice to reduce swelling, then bandage tightly",
              ],
              answer: 2,
              explain: "Lukewarm water rewarms the tissue gently and thaws anything frozen to the skin. Rubbing tears frozen tissue, hot water burns skin that cannot feel it, and ice makes a cold injury worse. Tight bandaging on a thawing cold burn also restricts the circulation the tissue needs.",
            },
            {
              q: "Why is a below-ground plant room a particular oxygen-depletion risk with common refrigerants?",
              options: [
                "Refrigerant vapour is lighter than air and rises to the ceiling where the extract cannot reach it",
                "Most refrigerant vapours are heavier than air, so they collect at low level and are not cleared by high-level ventilation",
                "The refrigerant reacts with concrete to consume oxygen",
                "Underground rooms naturally have less oxygen",
              ],
              answer: 1,
              explain: "The vapours are denser than air, so they sink and fill the space from the floor up. A basement or pit has no low point for them to drain away to, and extract taken from ceiling level leaves the deficient layer exactly where people kneel and work. Nothing chemical happens with the concrete.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "as3666-cooling-tower-ppe",
          title: "AS/NZS 3666: cooling towers, Legionella and the PPE that answers the hazard",
          minutes: 13,
          simple: "A cooling tower is a warm, wet box full of nutrients, which is a perfect home for the bacterium that causes Legionnaires' disease. You cannot catch it by drinking the water — you catch it by breathing the fine mist the tower throws out. So the protective equipment that matters most is the one that keeps that mist out of your lungs.",
          refs: REFS_3666,
          content: `This question catches people out because they answer it as a general PPE question. It is not. It is a question about **one specific hazard, delivered in one specific way**, and the marks are for showing you know why the equipment is what it is.

## What AS/NZS 3666 is for

The AS/NZS 3666 series covers **microbial control in the air-handling and water systems of buildings**. It exists because building services move warm water and warm air around occupied spaces, and warm water plus nutrients plus stagnation grows organisms that then get delivered to people through the air.

- **Part 1 — design, installation and commissioning.** Build it so it can be cleaned, drained and maintained: access to the pond and the fill, drift eliminators, drains that fall to the outlet, no dead legs, air intakes located away from tower discharge.
- **Part 2 — operation and maintenance.** The routine inspection, cleaning, water treatment and record-keeping regime once the plant is running.
- **Part 3 — performance-based maintenance of cooling water systems.** A risk-management approach based on monitoring water quality against action levels rather than fixed tasks alone.

A **regulated water-cooling system** — a cooling tower, evaporative condenser or similar — is also controlled by state public health legislation, which in most jurisdictions requires the system to be registered with the local authority, to have a documented risk management plan, and to be sampled and audited. Work to the current edition of the standard and to your own state's regulation, because the sampling frequency and notification rules differ between states.

## Why the aerosol is the hazard, not the water

*Legionella pneumophila* lives naturally in water. It multiplies in **warm water, roughly 20 to 45 degrees C**, with an optimum near body temperature, and it thrives where there is **biofilm, scale, sludge, corrosion products or organic debris** to feed on and shelter in — which describes the pond and fill of a neglected cooling tower exactly. It also lives inside amoebae in the biofilm, which protects it from mild disinfection.

But the organism has to get **into the deep lung** to cause disease. It infects the alveoli, so it must arrive as droplets small enough to be inhaled all the way down — a few micrometres or less. That is precisely what a cooling tower makes: fine water droplets carried out of the tower on the discharge air as **drift**, along with the aerosol thrown up by falling water and by any high-pressure cleaning.

The consequences of that mechanism:

- **Drinking the water does not give you Legionnaires' disease.** Swallowing contaminated water is not the infection route (aspiration is a separate, less common case).
- **It is not transmitted person to person.** The tower is the source, every time.
- **Distance is not protection.** Drift from a tower has been shown to travel hundreds of metres downwind, which is why building air intakes must not sit near a tower discharge.
- **Disturbing the system makes the hazard.** Starting a stagnant tower, hosing the fill down, cleaning the pond, opening the casing while the fan runs — all of these generate exactly the respirable aerosol that is dangerous.
- **Respiratory protection is therefore the primary PPE.** It is the only item that stands between the aerosol and the place the organism has to reach.

The disease itself is a pneumonia with an incubation period of roughly two to ten days, and it is most severe in older people, smokers and anyone whose immune system is suppressed. A milder, flu-like form without pneumonia is also recognised.

## The PPE required for work on a regulated water-cooling system

State the item **and** the hazard it answers — that is what earns the mark.

| PPE item | The hazard it answers |
|---|---|
| Respiratory protection — a fit-tested particulate respirator, at minimum P2, and a full-face respirator with P2 or P3 filters for cleaning, disinfection or any high-pressure work | Inhalation of respirable contaminated aerosol containing Legionella. This is the item the question is about. |
| Eye protection — goggles or a full face shield | Splash of contaminated water and of the treatment chemicals into the eyes; a full-face respirator covers both |
| Chemical-resistant gloves, such as nitrile or PVC gauntlets | Skin contact with contaminated water, sludge and biocides, and hand-to-mouth transfer |
| Waterproof coveralls or a disposable suit | Contamination of clothing and skin, and carrying contamination off site |
| Waterproof, non-slip safety boots | Wet, slippery surfaces and contaminated water underfoot |
| Hearing protection | Fan and gearbox noise where plant is running |
| Fall protection — harness, anchor, edge protection | Towers are commonly on roofs and plant decks, worked at height |

Add the procedural controls, because the PPE is the last line, not the first:

- **Shut down the fan and lock and tag it off** before opening the tower. A running fan is the aerosol generator.
- **Isolate the system electrically and hydraulically**, and follow safe isolation procedure.
- **Work upwind** of the tower where the plant cannot be stopped, and keep others out of the drift path.
- **Notify building management** and, where required, occupants, before disturbing the system.
- **Avoid high-pressure water** on the fill and pond wherever a low-pressure or chemical method will do the job, because pressure washing multiplies the aerosol.
- **Personal hygiene** — no eating, drinking or smoking during the work, wash hands and face thoroughly afterwards, and bag contaminated disposables.

>! Never open a cooling tower with the fan running, and never enter or lean into the tower body without respiratory protection. The moment you disturb the pond or the fill you become the person standing closest to a freshly generated aerosol.

## Written practice

**1.** You are scheduled to clean and disinfect a roof-mounted cooling tower. List the PPE you require and, for each item, state the hazard it protects you from.

>? - Fit-tested respiratory protection, P2 as a minimum and a full-face respirator with P2 or P3 filters for the cleaning and disinfection itself: protects against inhaling the respirable aerosol from the pond and fill, which is how Legionella reaches the deep lung. This is the critical item.
>? - Eye protection, goggles or a full face shield (or the face piece of the full-face respirator): protects against splashes of contaminated water and of the biocide and cleaning chemicals.
>? - Chemical-resistant gloves such as nitrile or PVC gauntlets: protects against skin contact with contaminated water, sludge and treatment chemicals, and prevents hand-to-mouth transfer.
>? - Waterproof coveralls or a disposable suit: keeps contaminated water and sludge off skin and clothing and stops contamination being carried off the roof.
>? - Waterproof non-slip safety boots: wet and slippery working surfaces, contaminated water underfoot.
>? - Hearing protection: fan and gearbox noise if adjacent plant is running.
>? - Fall protection — harness, anchor point and edge protection, or a compliant guardrail: the tower is on a roof, so working at height is a hazard in its own right.
>?
>? Procedural controls to state as well: shut down and lock out the fan before opening the tower, isolate electrically and hydraulically, notify building management, keep others out of the drift path, avoid high-pressure water where possible, and wash thoroughly afterwards with no eating or drinking during the work.

**2.** Explain why the aerosol from a cooling tower, rather than the water in it, is the hazard to health. Include the infection route and two consequences for how work is planned.

>? Legionella pneumophila lives in the water, multiplying in warm water around 20 to 45 degrees C where biofilm, sludge, scale and organic debris give it food and shelter. But it causes disease only when it reaches the alveoli of the deep lung, which means it has to be inhaled as droplets of a few micrometres or smaller.
>?
>? A cooling tower produces exactly that: fine droplets carried out on the discharge air as drift, plus the aerosol generated by falling water and by any cleaning. Swallowing the water is not the infection route, and the disease is not passed from person to person — the tower is the source.
>?
>? Two consequences for planning the work:
>? - The fan must be shut down and locked out before the tower is opened, and high-pressure hosing of the pond and fill is avoided where a lower-pressure or chemical method will do, because both of those are aerosol generators. Respiratory protection is the primary PPE, not an afterthought.
>? - Exposure is not limited to the person on the tower. Drift can travel a long way downwind, so building air intakes must be kept clear of the tower discharge, occupants and other trades must be kept out of the drift path, and where the plant cannot be stopped the work is done from upwind.

**3.** A building manager asks why his tower needs treating when "the water looks clean and nobody drinks it". Write your reply.

>? Clear water is not clean water in this sense. Legionella is a bacterium — it is invisible, and a tower can look perfectly clear while carrying a high count. What matters is whether the conditions favour the organism: water in the 20 to 45 degrees C range, which is normal operating temperature for a tower, plus biofilm on the fill, sludge in the pond, scale, corrosion products and any organic debris blown in from outside. Those give the bacteria both food and shelter from disinfectant, and they build up out of sight in the fill and on the pond walls.
>?
>? Nobody needs to drink it. The disease is caught by breathing in fine water droplets that the tower throws out as drift, or that get generated when the system is disturbed or cleaned. Those droplets can travel a long way downwind and can be drawn into building air intakes, so the people at risk include tenants, passers-by and anyone working on the roof — not just the maintenance contractor.
>?
>? That is why AS/NZS 3666 and the state public health regulation require a documented maintenance and water-treatment regime with routine inspection, monitoring against action levels, periodic cleaning and disinfection, and records. It is a system that has to be kept in a condition where the organism cannot multiply, and the only way to know it is in that condition is to test and record it.

## What to remember

- The AS/NZS 3666 series controls microbial growth in building air-handling and water systems.
- Legionella multiplies in warm water with biofilm, scale and sludge, roughly 20 to 45 degrees C.
- The infection route is inhaling respirable aerosol; drinking the water and person-to-person spread are not routes.
- The critical PPE is fit-tested respiratory protection — P2 minimum, full-face for cleaning and disinfection.
- Add eye protection, chemical-resistant gloves, waterproof coveralls and boots, hearing protection and fall protection.
- Shut down and lock out the fan before opening the tower, and avoid high-pressure water where you can.`,
          quiz: [
            {
              q: "Why is the aerosol from a cooling tower, rather than the water itself, treated as the health hazard?",
              options: [
                "Because the water is chemically treated and therefore safe",
                "Because Legionella must be inhaled as fine droplets to reach the alveoli of the deep lung",
                "Because the aerosol carries more bacteria per litre than the pond water",
                "Because the water in the pond is too cold for the organism to survive",
              ],
              answer: 1,
              explain: "The organism causes pneumonia by reaching the deep lung, so it has to arrive as respirable droplets a few micrometres across — which is what tower drift and cleaning aerosols produce. Swallowing the water does not cause the disease. The pond water is not sterile and is at an ideal growth temperature; concentration in the droplets is not the point.",
            },
            {
              q: "Which single PPE item most directly answers the Legionella hazard when cleaning a cooling tower?",
              options: [
                "Chemical-resistant gauntlets",
                "A fit-tested respirator, P2 minimum and full-face for cleaning and disinfection",
                "Waterproof safety boots",
                "A hard hat",
              ],
              answer: 1,
              explain: "The infection route is inhalation of respirable aerosol, so respiratory protection is the item that stands between the hazard and the target organ. Gloves, boots and head protection all address real but different hazards — skin contact, slips and impact.",
            },
            {
              q: "Before opening a cooling tower for inspection, what must be done first?",
              options: [
                "Run the fan at full speed to blow out any debris",
                "Hose down the fill with a high-pressure lance",
                "Shut down and lock and tag out the fan, and isolate the system",
                "Drain the pond into the stormwater system",
              ],
              answer: 2,
              explain: "The running fan is the aerosol generator, so it must be stopped and locked out before the casing is opened. High-pressure hosing multiplies the aerosol and is avoided where another method will do, and discharging untreated pond water to stormwater is an environmental offence as well as a hazard.",
            },
            {
              q: "In which temperature range does Legionella multiply most readily in a cooling water system?",
              options: ["0 to 10 degrees C", "20 to 45 degrees C", "55 to 70 degrees C", "Above 80 degrees C"],
              answer: 1,
              explain: "Roughly 20 to 45 degrees C, with an optimum near body temperature, which is squarely within normal cooling tower operating temperatures. Below about 20 degrees C growth is slow, and above about 55 to 60 degrees C the organism is progressively killed — which is the principle behind hot-water system controls.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "as3666-maintenance-and-records",
          title: "Cooling water systems: the maintenance and record obligations",
          minutes: 12,
          simple: "Keeping a cooling tower safe is a routine, not a one-off clean. Somebody competent has to inspect it every month, treat the water, sample it, clean and disinfect it at set intervals, and write down every bit of it in a log book the council can ask to see. Think of it as the service book for a car, except a health inspector can demand it.",
          refs: REFS_3666,
          content: `A cooling tower cannot be made safe once. It is a warm, wet, open system that collects dust, leaves, insects and nutrients continuously, so control is a **maintenance regime with evidence**. The evidence half matters as much as the work half: an inspector who asks for the log book and is handed nothing will treat the system as unmaintained regardless of how clean it looks.

## Who may do the work

The standard requires the work to be done by a **competent person** — someone with the training, knowledge and experience for the task. In practice that means a person trained in cooling water system maintenance and water treatment, working to the documented procedures for that system. Recording *who* did the work is part of the record, precisely because competence has to be demonstrable.

## The routine regime

The exact frequencies come from the current edition of AS/NZS 3666.2 and 3666.3 and from your state's public health regulation, so check both. The regime below is the shape you are expected to be able to describe.

**Monthly inspection and service** by a competent person, covering:

- Condition of the **pond or basin**: sludge, silt, debris, algae, corrosion products. The basin should be free of accumulated deposits.
- Condition of the **fill**: biofilm, scale, blockage, collapse, and whether water is distributing evenly across it.
- **Drift eliminators** in place, undamaged and correctly fitted — they are a primary engineering control, because they cut the amount of aerosol leaving the tower.
- **Water distribution** — nozzles clear, no channelling, no overflow.
- **Make-up water and bleed or blowdown** operating, so dissolved solids do not concentrate.
- **Water treatment**: biocide and corrosion or scale inhibitor dosing operating, chemicals in date and in stock, dosing equipment functioning.
- Water **temperature, pH and conductivity**, and the general condition of the structure, fan, drive and screens.
- Air **intakes and discharge**: no re-entrainment of drift into an air intake, no new obstruction, no change of use nearby.

**Water sampling and testing:**

- **Heterotrophic colony count (HCC)** as the routine indicator of general microbiological control.
- **Legionella count** on the frequency required by the standard and by your state — monthly is common, and some states require it explicitly.
- Results are compared against **action levels**. As an indication of the shape of the response: a low HCC and a Legionella result reported as not detected means continue as normal; a rising HCC or a detected Legionella count means review the treatment, re-sample and disinfect; a high result means immediate decontamination, investigation and, where the regulation requires it, notification to the health authority. Use the action levels and notification thresholds in the current standard and your state's regulation — do not work from memory on this one.

**Cleaning and disinfection** of the whole system — basin, fill, distribution, wetted surfaces — at intervals not exceeding those in the standard, commonly at least every six months, and additionally:

- Before a system is put into service or returned to service after a shutdown.
- After any period of stagnation.
- When monitoring shows loss of microbiological control.
- After any work that has disturbed or contaminated the system.

**Decontamination** is the escalated response: a documented disinfection procedure at elevated biocide concentration, with the system isolated, followed by re-sampling to confirm control has been regained.

## Air-handling systems as well

The same series covers the air side, and the same logic applies — do not leave warm, wet, dirty surfaces where air passes over them.

- **Cooling coils and drain pans**: clean, drain pans falling to the drain outlet, traps charged, no standing water.
- **Filters**: correct grade, correctly seated, changed on schedule, no bypass around the frame.
- **Humidifiers**: clean, correct water quality, no reservoir of stagnant water.
- **Ductwork and plenums**: internal cleanliness, no water ingress, no microbial growth on lining.
- **Outdoor air intakes**: located and maintained so they do not draw tower drift, exhaust or contaminated air.

## Records and the obligations that go with them

Keep a **log book on site** for the system, available to the building owner, the maintenance contractor and the regulator. It records:

1. The **unique identification** of each cooling water system, matching the registration held with the local authority where registration is required.
2. **Date of every inspection, service, test and clean**, and the name of the competent person who did it.
3. **Findings**: condition observed, defects, and what was done about them.
4. **Water treatment**: chemicals used, concentrations, dosing rates, and results of on-site tests such as pH, conductivity and biocide residual.
5. **Laboratory results** for HCC and Legionella, with sample dates and locations.
6. **Corrective actions** taken when a result exceeded an action level, including any decontamination and the confirming re-sample.
7. **Cleaning and disinfection** dates and procedures used.
8. The **risk management plan** for the system and the dates of its reviews and, where required, the independent audit.

Records are retained for the period the regulation requires — commonly several years — and must be produced on request. In most states the owner must also **register or notify** each cooling tower with the local council, display or record its identification number, and notify the health authority of results above the notification threshold.

>! Falsifying or back-filling a log book is not a paperwork offence. It is the record a public health investigation uses to trace the source of an outbreak, and signing for an inspection that was not done exposes both you and the building owner to prosecution.

## Written practice

**1.** List six items you would inspect during a routine monthly service of a cooling tower, and state what each tells you.

>? - The pond or basin: sludge, silt, debris and corrosion products indicate that nutrients and shelter for bacteria are accumulating and that cleaning or filtration is inadequate.
>? - The fill: biofilm, scale or blockage shows loss of microbiological and chemical control, and uneven water distribution reduces both cooling performance and the reach of the biocide.
>? - Drift eliminators: they are the primary engineering control on how much aerosol leaves the tower, so damaged, displaced or missing eliminators are a direct increase in the health hazard.
>? - Water treatment and dosing equipment: whether biocide and scale or corrosion inhibitor are actually being delivered at the right rate, and whether chemical stocks are in date.
>? - Bleed or blowdown and make-up water: if the bleed is not working, dissolved solids concentrate, scale forms and the treatment chemistry drifts out of range.
>? - On-site water tests such as pH, conductivity, temperature and biocide residual: they show whether the treatment programme is holding control between laboratory samples.
>?
>? Also creditable: fan, drive, belts and bearings; screens and strainers; structural condition and access; and the position of nearby air intakes and any new obstruction or change of use around the tower.

**2.** What records must be kept for a regulated water-cooling system, and why does the record itself matter as much as the work?

>? Records to keep in the on-site log book: the unique identification of the system, matching its registration with the local authority; the date of every inspection, service, test, clean and disinfection with the name of the competent person who performed it; what was found, including defects; the water treatment applied — chemicals, concentrations and dosing rates — with on-site test results such as pH, conductivity and biocide residual; laboratory results for heterotrophic colony count and Legionella with sample dates and points; any corrective action taken when a result exceeded an action level, including decontamination and the confirming re-sample; and the risk management plan with its review and audit dates.
>?
>? Why the record matters: it is the only evidence that control has actually been maintained, so an unrecorded inspection counts as an inspection that did not happen. It lets trends be seen — a slowly rising colony count over three months is a warning that a single result does not show. It is what a public health investigation uses to trace or exclude a system as an outbreak source. And it is what the regulator, the auditor and the building owner rely on to demonstrate the duty of care has been met, which is why records are retained for the period the regulation requires and produced on request.

**3.** A monthly sample comes back with a Legionella count above the action level. Describe the response.

>? - Treat it as a loss of control and act immediately rather than waiting for the next scheduled service. Notify the building owner or manager, and notify the health authority where the state regulation requires notification at that level.
>? - Review the system straight away: inspect the basin, fill and distribution, check the biocide dosing equipment and residual, check the bleed and make-up, and look for anything that has changed — a stagnant period, a dosing failure, a contamination event or new debris.
>? - Carry out decontamination of the system to the documented procedure: isolate as required, dose to the elevated biocide concentration for the specified contact time, circulate through all wetted surfaces, then clean the basin, fill and distribution and disinfect again as the procedure specifies.
>? - Control exposure while this is happening: shut down and lock out the fan before opening the tower, keep people out of the drift path, warn the building manager so occupants and other trades can be kept clear, and wear full PPE — fit-tested respiratory protection, eye protection, gloves, waterproof coveralls and boots.
>? - Re-sample after the specified interval to confirm that control has been regained, and continue at an increased sampling frequency until results are consistently satisfactory.
>? - Record everything: the result, the investigation and its findings, the decontamination procedure and chemicals used, the corrective actions, the notifications made and the confirming re-sample results. Then review the risk management plan and the treatment programme so the same failure does not recur.

## On the job

- Control is a regime, not a clean: monthly inspection, continuous treatment, periodic cleaning and disinfection.
- Drift eliminators are an engineering control on the hazard itself — check them every visit.
- Sample for heterotrophic colony count and Legionella and compare against the action levels in the current standard and your state's regulation.
- Clean and disinfect at the required interval and after any shutdown, stagnation or loss of control.
- The log book records who, when, what was found, what was done and what the results were — and is produced on request.
- Escalating a bad result means investigate, decontaminate, notify where required, re-sample and record.`,
          quiz: [
            {
              q: "What is the function of drift eliminators in a cooling tower, and why does their condition matter for health?",
              options: [
                "They filter the make-up water before it enters the pond",
                "They reduce the amount of water droplets carried out of the tower on the discharge air, which is the aerosol that carries Legionella",
                "They break up scale on the fill surface",
                "They prevent the fan from over-speeding in high wind",
              ],
              answer: 1,
              explain: "Drift is the fine droplet carry-over leaving with the discharge air, and it is the delivery mechanism for the organism. Eliminators strip most of that droplet load out, so damaged, displaced or missing eliminators directly increase the health hazard as well as wasting water.",
            },
            {
              q: "Which of these must appear in a cooling water system log book?",
              options: [
                "Only the laboratory Legionella results",
                "The date, findings and name of the competent person for each inspection, the treatment applied, test results and any corrective action",
                "Only the dates the system was cleaned",
                "Only the risk management plan",
              ],
              answer: 1,
              explain: "The record has to show who did what, when, what they found and what resulted — that is what lets a trend be seen and what an investigation or audit relies on. A file of laboratory results alone proves nothing about whether the system was inspected, treated or corrected.",
            },
            {
              q: "In addition to the scheduled interval, when must a cooling water system be cleaned and disinfected?",
              options: [
                "Only when the building changes ownership",
                "Before commissioning or return to service, after stagnation, when monitoring shows loss of control, and after work that contaminates the system",
                "Only when the tower is visibly dirty",
                "Only when the health authority directs it",
              ],
              answer: 1,
              explain: "The triggers are all events that either create growth conditions or reveal that control has been lost. Waiting for visible dirt or for a directive from the regulator means acting after the hazard has developed, and ownership changes have no bearing on microbiological control.",
            },
            {
              q: "A routine sample shows a rising heterotrophic colony count although Legionella is not detected. What does that indicate?",
              options: [
                "Nothing — only a Legionella result matters",
                "That general microbiological control is deteriorating, so the treatment programme should be reviewed and the system re-sampled",
                "That the tower must be shut down permanently",
                "That the laboratory has made an error",
              ],
              answer: 1,
              explain: "The colony count is a general indicator of how well the treatment is holding. A rising trend means biofilm and nutrient control is slipping and conditions are becoming favourable, which is a warning to act before Legionella appears. Trend information is one of the main reasons the results are recorded rather than just read once.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
