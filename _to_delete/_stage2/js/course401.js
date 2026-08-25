/* =========================================================================
   Course content, module 401 — C.1 How the knowledge assessment works.
   Source: capstone revision notes written for this course from the published
   knowledge-evidence requirements of the Certificate III in Refrigeration and
   Air Conditioning, together with AS/NZS 3000, AS/NZS 3760, AS/NZS 5149.2 and
   the Australia and New Zealand Refrigerant Handling Code of Practice.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority. Every
   practice question here is original teaching material. Nothing in this
   module reproduces, paraphrases or renumbers the questions of any real
   assessment paper.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const BASE = "Capstone revision notes for this course — ";

  const REFS = [
    BASE + "knowledge-evidence requirements of the Certificate III in Refrigeration and Air Conditioning",
  ];

  /* Each lesson cites the revision notes plus the topics it draws on. */
  const R = function () {
    const extra = Array.prototype.slice.call(arguments).map(function (t) { return BASE + t; });
    return REFS.concat(extra);
  };

  const MODULES = [

  /* ======================================================================
     Module C.1 — How the knowledge assessment works
     ====================================================================== */
  {
    id: "cap-exam-approach",
    stream: "capstone",
    title: "C.1 · How the knowledge assessment works",
    blurb: "What a written knowledge assessment is really testing, how to answer each question shape it uses, how workings are marked, and where in this course every assessed topic is taught.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "what-it-tests",
        title: "What the written paper is actually testing",
        minutes: 11,
        simple: "For years someone has watched you work and judged whether the job came out right. The written paper judges something else: whether the knowledge behind the job is actually in your head, where you can get at it with no gauges, no manual and no workmate to ask. It is like the difference between being able to drive and being able to explain a give-way rule.",
        refs: R("performance evidence and knowledge evidence in trade assessment"),
        content: `
You have spent most of your apprenticeship being assessed on outcomes. Did the
coolroom pull down? Did the joint hold pressure? Did the compressor start and
keep running? Somebody watched you do it, or looked at what you left behind, and
signed it off. The end-of-apprenticeship written paper does not work like that,
and candidates who treat it as more of the same come unstuck.

The written paper is **knowledge evidence**. It exists to prove that the
understanding underneath your hands is genuinely yours — that you can state a
rule, a value, a sequence or a reason with no equipment in front of you, no
manufacturer's data sheet open, and nobody to check with. That is not an
academic exercise. On a Saturday callout, alone, at a servo at 11 pm, the only
resource you have is what you know.

## Two kinds of evidence, and why both are collected

| | Practical assessment | Written knowledge assessment |
|---|---|---|
| What it looks at | What you did, and what you produced | What you can state and justify |
| How it is gathered | Observation, third-party report, workplace product, logbook | A paper sat under supervised conditions |
| Typical proof | The joint passed a tightness test; the unit ran to spec | You can name the tests that make a repaired unit safe to re-energise, and the value each must meet |
| Weakness it covers | Cannot show whether you understood or just copied the last bloke | Cannot show whether your brazing is any good |

Neither one on its own is enough. A candidate can produce a tidy flare and still
not know that an insulation resistance test is done at 500 V DC. A candidate can
recite every acceptance value in AS/NZS 3000 and still gas a coolroom because
they never learned to recover properly. The two assessments are deliberately
aimed at different blind spots.

There is also a hard practical reason for a written paper. Some knowledge cannot
be assessed by watching. Nobody is going to stage an arc flash so an assessor can
watch you respond, and your assessor cannot follow you around for three years
waiting for a cooling tower job to come up so they can observe your PPE
selection. Asking is the only workable way to check.

## What "under exam conditions" changes

Supervised conditions strip away the three things you lean on every day:

- **Reference material.** You cannot look up the fill limit rule or the design
  temperature table. Anything you would normally read, you must now recall.
- **Colleagues.** No ringing the wholesaler, no asking the leading hand.
- **The job in front of you.** Normally the equipment tells you half the story —
  you see the nameplate, you hear the compressor, you feel the suction line. On
  paper, all you get is the words in the question.

That last one is the biggest shift. On the job, understanding is *distributed*
between you, the equipment and your mates. In the exam room it all has to be in
one head.

## The marker only sees what you wrote

This is the single most expensive lesson to learn late. Your marker is a
qualified person who is not psychic and is not allowed to give you credit for
what you probably meant. Consider two answers to the same question about
returning a repaired packaged unit to service:

- "Megger it and check the earth, then fire it up."
- "Continuity of the protective earthing conductor, insulation resistance at
  500 V DC, polarity, then correct circuit connections — verified before the
  unit is energised, because a fault in any one of them puts the frame live."

Both come from the same knowledge. Only the second one gets the marks, because
only the second one names the tests, gives the value, puts them in order and
says why. Marking is done against a list of the points the question was written
to collect. Points you did not put on the page are points you do not get.

## The depth expected of a Certificate III answer

A good rule of thumb for a written answer at this level: **name it, value it,
justify it, and say where it comes from.**

- *Name it* — use the trade or standard term. "Insulation resistance", not
  "the megger test". "Suction accumulator", not "the ball on the suction line".
- *Value it* — where there is a number, give the number with its unit. A minimum
  of 1 MΩ. A test voltage of 500 V DC. A fill limit of 80 per cent.
- *Justify it* — one clause on why. The reason is usually worth a mark on its
  own and it is the part candidates skip.
- *Where it comes from* — name the standard, regulation or code. AS/NZS 3000,
  AS/NZS 3760, AS/NZS 5149.2, the Refrigerant Handling Code of Practice, your
  state's electrical safety regulations. And work to the current edition: values
  are revised, so quote what the edition in force says, not what an old set of
  notes says.

>! Values quoted anywhere in this course are teaching values. Before you rely on
>! one in the field or in an assessment, confirm it against the current edition
>! of the standard or regulation, and against your own state or territory
>! regulator. Editions change and jurisdictions differ.

## Where good tradespeople lose marks

1. **Answering from habit instead of from rule.** "We always leave it on vac
   overnight" is what your crew does. The question asked what the code requires.
2. **Describing when the question said name or list.** A paragraph that circles
   the answer without ever stating it scores poorly.
3. **Giving one answer where the question asked for four.** Nobody gets four
   marks for one item, however good it is.
4. **Assuming the marker will fill in the obvious.** If a step matters, write it.
5. **Answering a different question.** Usually the one you revised for rather
   than the one in front of you.

### Practice — write your answer before opening

A candidate is asked why a written paper bothers to test acceptance values that
a technician would normally read off a chart or an app in the van. Write a
two-sentence answer.

>? **Because the knowledge has to be portable and immediate.**
>? - A technician who does not carry the values in their head cannot tell, at
>?   the moment of testing, whether a reading is a pass or a fail — and that
>?   decision is what makes re-energising safe.
>? - Reference material is not always available: no signal, no manual on site,
>?   a flat phone, an after-hours callout. Knowledge evidence exists precisely
>?   to prove you are not dependent on it.

### Practice — write your answer before opening

Rewrite this candidate answer so it would earn full marks. The question was:
*state the tests you must complete on a single-phase packaged unit after
replacing its contactor, before it is returned to service.*
Candidate answer: "Megger it and check the earth's ok then start it up."

>? **A marks-earning version names each test, in order, with its value and its
>? purpose.**
>? 1. **Continuity of the protective earthing conductor** — prove a low
>?    resistance path from the frame back to the earthing point, so a fault
>?    current is large enough to operate the protective device fast.
>? 2. **Insulation resistance**, tested at 500 V DC, with a minimum acceptable
>?    value of 1 MΩ — proves no breakdown between live parts and earth.
>? 3. **Polarity** — proves active, neutral and earth land where they should,
>?    so switching and protection break the active conductor.
>? 4. **Correct circuit connections** — proves the reconnection matches the
>?    manufacturer's diagram before power is applied.
>?
>? Then energise and confirm operation. Note what changed between the two
>? answers: nothing about the knowledge, everything about what reached the page.

### Practice — write your answer before opening

Your supervisor's third-party report says you have competently recovered
refrigerant from commercial systems on many occasions. Explain why a written
question about recovery equipment is still asked of you.

>? **The two pieces of evidence prove different things.**
>? - The third-party report proves *performance*: you did the task, on real
>?   plant, to an acceptable standard, repeatedly.
>? - The written question proves *knowledge*: that you can name what safe and
>?   efficient recovery of a commercial charge requires and explain why each
>?   item is there — which shows the good outcomes were understood rather than
>?   copied from whoever trained you.
>? - Observation also cannot cover everything. A supervisor may never have seen
>?   you handle a flammable hydrocarbon charge or a burnout; asking is the only
>?   way to check that knowledge exists before you meet it alone.

## What to remember

- The paper collects knowledge evidence; the workplace collects performance
  evidence. They are aimed at different blind spots on purpose.
- Under supervised conditions you lose your references, your mates and the
  equipment itself. Everything must already be in your head.
- The marker credits what is on the page, never what you probably meant.
- Name it, value it, justify it, source it — and work to the current edition.
- The most common cause of lost marks is not ignorance. It is an answer that is
  shorter, vaguer or differently aimed than the question required.
`,
        quiz: [
          {
            q: "Why is a written knowledge assessment used at the end of an apprenticeship when the candidate has already been observed doing the work?",
            options: [
              "Because written work is cheaper to assess than observing a technician",
              "Because observation shows what was done but cannot reliably show whether it was understood, and some knowledge cannot safely or practically be assessed by watching",
              "Because regulators require every trade qualification to include a written examination of at least two hours",
              "Because practical assessment results are not accepted by employers",
            ],
            answer: 1,
            explain: "The two forms of evidence cover different gaps. Observation cannot distinguish understanding from imitation, and events like an emergency response or a rarely encountered refrigerant cannot be staged for an assessor. Cost is not the reason, and practical evidence is very much accepted — it is simply not sufficient on its own.",
          },
          {
            q: "A question asks for the minimum acceptable insulation resistance and the test voltage used. Which answer is at the depth expected?",
            options: [
              "A high reading on the megger",
              "At least 1 MΩ, measured at 500 V DC, in accordance with AS/NZS 3000 — confirm against the current edition",
              "Whatever the manufacturer's service manual specifies for that model",
              "Enough resistance that no current flows to earth",
            ],
            answer: 1,
            explain: "The expected depth is the value, the unit, the test condition and the source. 'A high reading' has no number; 'no current flows' is not a measurable criterion; and while manufacturers may add requirements, the acceptance value here comes from the wiring rules, not the model.",
          },
          {
            q: "Two candidates have identical knowledge of return-to-service testing. One scores full marks and one scores two out of five. What most likely caused the difference?",
            options: [
              "The lower-scoring candidate wrote a shorter, vaguer answer that left required points off the page",
              "The lower-scoring candidate used trade terms instead of textbook terms",
              "The marker interpreted the same answer differently on the day",
              "The higher-scoring candidate wrote considerably more words",
            ],
            answer: 0,
            explain: "Marking runs against the list of points the question was written to collect, so an answer that omits points loses them regardless of what the candidate knows. Trade terms are fine when they are the correct terms, and length is not itself worth marks — a padded answer scores no better than a precise one.",
          },
          {
            q: "Which of these is the clearest example of answering from habit rather than from rule?",
            options: [
              "Stating that the fill limit for a recovery cylinder is 80 per cent of its capacity",
              "Answering a question on required evacuation practice with 'we leave the pump on overnight and it always comes up fine'",
              "Naming AS/NZS 3000 as the source of an acceptance value",
              "Giving the reason a polarity test is carried out",
            ],
            answer: 1,
            explain: "What your crew customarily does is not evidence of what the code requires, and a marker cannot award a requirement mark for a workshop habit. The other three answers each name a rule, a source or a reason, which is exactly what the question shapes are built to collect.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "question-shapes",
        title: "The six question shapes and how each one wants to be answered",
        minutes: 12,
        simple: "A written paper only really asks questions in about six different ways. Once you can spot which one you are looking at, you know what a full answer looks like before you write a word. It is like knowing whether you have been handed a flare nut or a compression fitting — the tool you reach for is decided the moment you recognise it.",
        refs: R("question formats used in trade knowledge assessment and how each is marked"),
        content: `
Whatever the topic, a knowledge paper asks in a small number of ways. Learn the
six shapes and you stop wasting thinking time on *what does it want* and spend
it on *what is the answer*.

| Shape | Looks like | What full marks needs |
|---|---|---|
| List-N | "List four…", "Name five…" | Exactly N separate items, each a distinct thing, no explanation asked for |
| Single-answer multiple choice | Four options, one correct | One selection, the best-fitting option |
| Multi-answer multiple choice | "Select two", "choose three" | Exactly the number asked, from a longer option list |
| Short written answer | "Explain why…", "Describe how…", "State the purpose of…" | A stated point plus its reason, in a few sentences |
| Show-all-workings calculation | Data supplied, "show all workings" | Formula, substitution, arithmetic, answer with units |
| Draw and label | "Draw a control circuit…", "Sketch and label…" | A legible diagram with every named item present and labelled |

## List-N

A list-N question is a counting exercise for the marker. Usually one mark per
correct item, up to N. Three rules:

1. **Give exactly N.** Give fewer and you cannot reach full marks. Give more and
   many marking schemes take only the first N, so a padded list can bury a good
   item behind a weak one.
2. **Make each item genuinely separate.** "Insulation resistance" and "test the
   insulation with a megger at 500 V" are one item written twice. Two lines, one
   mark.
3. **Do not explain unless asked.** A list-of-five question is not asking for
   five paragraphs. Write the item, move on, protect your time.

The best defence against drying up at item four is to have learned *why* each
item is on the list rather than the list itself. A memorised list of five falls
over under pressure; a list you can rebuild from purpose does not. If a question
asks for five work practices a restricted licence holder may carry out, and you
have understood that the licence is built around disconnecting and reconnecting
in-scope equipment, the items regenerate themselves.

## Single-answer multiple choice

The trap is rarely that you do not know the topic. It is that two options are
both true and only one answers the question. Method:

- Read the stem to the end before looking at the options.
- Decide your own answer before reading them.
- Eliminate the clearly wrong, then choose between what is left on the basis of
  which one the *stem* asked for.
- If two options say the same thing in different words, neither is usually the
  answer.
- Never leave one blank. An unanswered multiple choice scores zero for certain;
  a considered guess does not.

## Multi-answer multiple choice

"Select two" and "choose three" are marked strictly. Select one when two were
asked and you have capped yourself. Select three when two were asked and many
schemes mark the question wrong outright, because ticking everything is not
knowledge. Circle the number the moment you read it, then count your ticks
before you move on. This one instruction is where more marks are thrown away
than on any other shape.

## Short written answer

This is a stated point plus its reason. "State the purpose of a polarity test"
wants both the *what* — that it proves active, neutral and earth conductors are
connected to their correct terminals throughout — and the *why* — so that
switches, fuses and circuit breakers interrupt the active conductor and no
appliance is left live when it is switched off. Two or three sentences will
usually do it. Marks are lost by describing the procedure when the purpose was
asked, or by giving the purpose when the procedure was asked.

Watch the instruction verb:

- **State / name** — the item alone.
- **Describe** — what it is or what happens, in order.
- **Explain** — the mechanism or the reason. This verb almost always wants a
  "because".
- **Compare** — both things, and the difference between them stated explicitly.

## Show-all-workings calculation

Never write only the answer. The full treatment is covered in the next lesson,
but the shape is: formula, substitution with units, arithmetic, answer with
units, then a one-line sanity check.

## Draw and label

A drawing question is marked on content, not artistry. Marks sit on components
present, connections correct and labels readable. Work in pencil, rule your
lines, use standard symbols, and label everything the question named. If the
question lists the components, that list is your checklist — tick each one off
your drawing before you move on. Add a legend if you have used a symbol that
could be read two ways.

>! In a control-circuit drawing question, safety devices are the marks. If the
>! specification says the low pressure and high pressure switches are in the
>! control path, they must appear in the control path in series, not tacked onto
>! a load. A drawing that would let a compressor run with its safeties bypassed
>! is wrong in the exam for the same reason it would be dangerous on site.

### Practice — write your answer before opening

A question reads: *List four items of information you would record on a service
report after attending a walk-in coolroom that was running warm.* Write your
answer exactly as you would in the paper, then say what shape it is and what
would cost you marks.

>? **Shape: list-four. One mark per item, no explanations wanted.**
>? 1. Site, plant identification and date and time of attendance.
>? 2. The fault reported and the symptoms found on arrival, with measured
>?    values such as room temperature, suction and discharge pressures.
>? 3. The work carried out, including any parts fitted and any refrigerant
>?    added or recovered, with quantity.
>? 4. The condition the plant was left in, with test or performance readings
>?    taken at completion, plus any recommendation and the technician's name and
>?    licence details.
>?
>? What would cost marks: writing three items; writing eight items so the
>? marker reads only the first four; turning each item into a paragraph and
>? running out of time later in the paper.

### Practice — write your answer before opening

Explain the difference in what a marker expects between "describe how superheat
is measured on a system" and "explain why superheat is measured on a system".

>? **The verb changes the whole answer.**
>? - *Describe how* asks for the procedure, in order: measure the suction
>?   pressure at the point of interest, convert that pressure to its saturation
>?   temperature from the PT data for the refrigerant, measure the actual line
>?   temperature at the same point with a securely fixed and insulated sensor,
>?   and subtract the saturation temperature from the measured temperature.
>? - *Explain why* asks for the reason: superheat tells you whether the
>?   evaporator is being fed correctly. Too little and liquid can reach the
>?   compressor; too much and part of the evaporator is doing no useful work and
>?   the compressor loses suction-gas cooling. It is the measurement that says
>?   whether the metering device and the charge suit the load.
>?
>? An answer that gives the procedure to an "explain why" question can score
>? zero even though every word of it is true.

### Practice — write your answer before opening

A multiple-choice question reads: *Select TWO instruments suitable for measuring
air volume flow at a supply grille.* The options are: pitot tube and manometer;
clamp meter; rotating vane anemometer; sling psychrometer; infrared thermometer;
capture hood. Write which you would select and explain the two errors a
candidate can make on this question shape.

>? **Select: rotating vane anemometer and capture hood.** A pitot tube with a
>? manometer measures duct velocity pressure and is also a legitimate airflow
>? instrument, but at a supply grille the vane anemometer and the capture hood
>? are the two direct choices — the hood reads volume flow at the face
>? directly. A clamp meter reads current, a sling psychrometer gives wet and dry
>? bulb temperatures for humidity, and an infrared thermometer reads surface
>? temperature.
>?
>? **The two errors:**
>? - Selecting only one, which caps the mark even if that one is right.
>? - Selecting three or four to hedge. Ticking extra options is not partial
>?   knowledge and is commonly marked wrong outright.

## On the job

- Identify the shape before you start writing. It tells you the length, the
  structure and when to stop.
- Circle the number in any "list four" or "select two" and count before moving
  on.
- Match the instruction verb: state, describe, explain and compare want
  different answers.
- Never leave a multiple choice blank.
- In a drawing question, the component list in the question is your checklist.
`,
        quiz: [
          {
            q: "A question says 'Select TWO'. A candidate is confident about one option and thinks two others might also be right, so ticks all three. What is the likely result?",
            options: [
              "Two marks, because two of the three ticked are correct",
              "One mark, because at least one tick is correct",
              "Zero for the question in many marking schemes, because selecting more than the number asked is treated as not answering the question",
              "Full marks, because the correct options were included among those ticked",
            ],
            answer: 2,
            explain: "Multi-answer questions are marked against an exact count. Ticking extra options demonstrates uncertainty rather than knowledge, so schemes commonly void the question. Count your ticks against the number in the stem before moving on.",
          },
          {
            q: "A list-four question is answered with seven items, of which items five and six are the strongest. What usually happens?",
            options: [
              "The marker selects the four best items and awards accordingly",
              "The marker takes the first four items only, so the strongest answers are never read",
              "The extra items earn bonus marks",
              "The answer is void because the count is wrong",
            ],
            answer: 1,
            explain: "Marking schemes for list-N questions typically read only the first N responses, which is why padding is dangerous rather than safe — a weak item written early can displace a strong one written later. Voiding is not usual for over-listing on a written answer, but the buried marks are lost all the same.",
          },
          {
            q: "Which answer correctly matches the instruction verb 'explain'?",
            options: [
              "Listing the steps of the procedure in order",
              "Naming the component and its location in the system",
              "Giving the reason or mechanism, typically containing a 'because'",
              "Comparing two devices and stating which is better",
            ],
            answer: 2,
            explain: "'Explain' asks for cause, reason or mechanism. Steps in order answer 'describe'; naming and locating answers 'state'; and comparison is its own verb. Answering the wrong verb is one of the cheapest ways to lose marks on material you actually know.",
          },
          {
            q: "In a draw-and-label control circuit question, the specification requires the evaporator fan to run continuously while the compressor and condenser fan are switched by the thermostat. Where do the LP and HP safety switches belong?",
            options: [
              "In series in the control path, so that either one opening drops out the compressor contactor",
              "In parallel with the thermostat, so the compressor can still run if the thermostat fails",
              "In the evaporator fan supply, so the fan stops on a pressure fault",
              "Across the active and neutral rails as an indicating circuit only",
            ],
            answer: 0,
            explain: "Safeties earn their marks by being in series in the control path where either device opening de-energises the compressor contactor. Putting them in parallel with the thermostat would let the compressor run with a safety tripped, and wiring them to the evaporator fan leaves the compressor unprotected while stopping the airflow you actually want to keep.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "showing-workings",
        title: "Show all workings: how a calculation is actually marked",
        minutes: 13,
        simple: "In a calculation question the answer is usually worth less than the road you took to get there. Markers give marks for the formula, for putting the right numbers in it and for the units, then one for the final figure. So a right answer with nothing written around it can score badly, and a wrong answer with good workings can still score most of the marks.",
        refs: R("marking of calculation questions, and worked method for trade calculations"),
        content: `
"Show all workings" is not a politeness. It is a statement about how the
question is marked. A typical four-mark calculation is marked something like
this:

| Mark | Awarded for |
|---|---|
| 1 | Selecting and stating the correct formula or method |
| 1 | Substituting the given values correctly, with units |
| 1 | Carrying the arithmetic through correctly |
| 1 | Final answer, correctly rounded, with the correct unit |

Two consequences follow, and both surprise people.

**A correct answer on its own can lose marks.** Write "2.5 kW" and nothing else
and you may pick up the answer mark and no more, because there is no evidence
you selected a method, substituted correctly or worked it out rather than
guessed. The marker is not being difficult — they genuinely cannot award method
marks for method they cannot see.

**A wrong answer can still score well.** This is the part worth internalising.
If you state the right formula, substitute the right values and then fumble the
arithmetic in the last step, three of the four marks are still there. Candidates
who work in their head and write only a final figure hand back that safety net
for nothing.

## The five-line habit

Do every calculation the same way, every time, so it becomes automatic under
pressure:

1. **Write what you know**, with units. Extracting the data is thinking, and it
   catches the value you were about to misread.
2. **Write the formula** in symbols.
3. **Substitute**, with units in place.
4. **Work it through**, showing intermediate values rather than jumping.
5. **State the answer with its unit**, rounded sensibly, and sanity-check it.

The sanity check is the cheapest insurance in the paper. A defrost heater that
comes out at 25 kW, a recovery cylinder that may hold 400 kg, a superheat of
90 K — all of these are arithmetic slips that a single second of judgement
catches.

## Worked example 1 — a defrost heater

*A defrost element in a freezer evaporator measures 21.2 Ω. It is supplied at
230 V AC. Calculate the current it draws and its power. Show all workings.*

Known: V = 230 V, R = 21.2 Ω.

Current, from Ohm's law:

I = V / R

I = 230 V / 21.2 Ω = **10.85 A**

Power, using the values already known:

P = V × I

P = 230 V × 10.85 A = 2495 W = **2.50 kW**

Sanity check: a 2.5 kW element on a 230 V supply drawing about 11 A is an
entirely ordinary defrost heater, and it is comfortably inside a 16 A circuit.
If the answer had come out at 250 W or 25 kW, a decimal point has moved.

You could equally have used P = V² / R = 52 900 / 21.2 = 2495 W. Either route
earns the method mark, provided you write it down.

## Worked example 2 — may this recovery cylinder be used?

*A recovery cylinder is stamped with a tare weight of 22.4 kg and a water
capacity of 47.6 L. It currently reads 61.0 kg gross on the scales. You need to
recover 9 kg of R134a. May this cylinder be used? Show all workings.*

Method: a refrigerant cylinder is filled by mass, not by volume, and must not be
filled beyond 80 per cent of its capacity, so that liquid has room to expand as
it warms without the cylinder becoming liquid-full.

Maximum refrigerant mass = water capacity × 0.80 × relative density of the
liquid refrigerant.

R134a liquid has a relative density of about 1.21 at normal ambient.

Maximum refrigerant mass = 47.6 L × 0.80 × 1.21 = **46.1 kg**

Maximum gross weight = tare + maximum refrigerant

Maximum gross weight = 22.4 kg + 46.1 kg = **68.5 kg**

Refrigerant already in the cylinder = 61.0 kg − 22.4 kg = 38.6 kg

Remaining capacity = 68.5 kg − 61.0 kg = **7.5 kg**

Answer: **no.** The cylinder has only 7.5 kg of capacity left and the job needs
9 kg, so a second cylinder is required or this one must be decanted first.

Note how much of that is marks: the 80 per cent rule, the relative density, the
tare addition, the subtraction and the decision. A bare "no" collects almost
none of it.

>! Never judge a cylinder by feel or by how full it sounds. Overfilling is a
>! hydraulic hazard: a liquid-full cylinder that warms has nowhere to expand to,
>! and pressure rises extremely quickly. Weigh it, and keep the scales in
>! calibration.

## Worked example 3 — additional charge for a long pipe run

*A split system is factory charged for a 7.5 m pipe run. The installation has a
21 m run. The manufacturer specifies 22 g per metre of additional charge beyond
the base length. The base charge is 1.45 kg. Calculate the total charge. Show
all workings.*

Extra length = 21 m − 7.5 m = 13.5 m

Additional charge = 13.5 m × 22 g/m = 297 g = 0.297 kg

Total charge = 1.45 kg + 0.297 kg = **1.747 kg, say 1.75 kg**

Sanity check: adding about 300 g to a 1.45 kg charge is roughly a 20 per cent
increase for nearly three times the pipe run — plausible, because the base
charge is mostly in the coils, not the pipe. If your extra charge had come out
larger than the base charge, check whether you multiplied by the whole 21 m
instead of the extra 13.5 m. That is the classic error, and it is worth reading
your own substitution line back to catch it.

## Worked example 4 — design suction pressure from air-on and TD

*A coolroom on R404A is to hold an air-on temperature of +2 °C with an
evaporator TD of 8 K. What is the design saturated suction pressure? Show all
workings.*

Evaporating temperature = air-on temperature − TD

Evaporating temperature = 2 °C − 8 K = **−6 °C**

Read the saturation pressure for R404A at −6 °C from PT data. Between −10 °C
(about 439 kPa absolute) and 0 °C (about 612 kPa absolute), −6 °C sits about
four tenths of the way up: 439 + 0.4 × 173 ≈ 508 kPa absolute.

Gauge pressure = absolute − atmospheric ≈ 508 − 101 = **about 405 kPa gauge**

State clearly which you have given. Writing "508 kPa" when the marker wanted
gauge, or the reverse, is the commonest error on this question, and naming
absolute or gauge explicitly protects you.

!SIM[Open the gauges and check a suction pressure against the PT ring](r=R404A)

### Practice — write your answer before opening

A 240 V defrost heater is measured at 48 Ω. Calculate the current and the power,
showing all workings, and sanity check the result.

>? **Known:** V = 240 V, R = 48 Ω.
>?
>? I = V / R = 240 V / 48 Ω = **5.0 A**
>?
>? P = V × I = 240 V × 5.0 A = 1200 W = **1.2 kW**
>?
>? Sanity check: 1.2 kW at 5 A on a 240 V supply is a reasonable small defrost
>? element and sits well inside a 10 A circuit. Cross-check by the other route:
>? P = V² / R = 57 600 / 48 = 1200 W. The two methods agree, which is a strong
>? sign the substitution was right.

### Practice — write your answer before opening

A recovery cylinder has a tare weight of 18.6 kg and a water capacity of 26.5 L.
It currently weighs 41.0 kg gross. You must recover 6 kg of R134a. May you use
this cylinder? Show all workings.

>? **Method: fill by mass, to a limit of 80 per cent of capacity.**
>?
>? Maximum refrigerant = 26.5 L × 0.80 × 1.21 = **25.7 kg**
>?
>? Maximum gross = 18.6 kg + 25.7 kg = **44.3 kg**
>?
>? Remaining capacity = 44.3 kg − 41.0 kg = **3.3 kg**
>?
>? **Answer: no.** Only 3.3 kg may be added and the job needs 6 kg. Fit a second
>? cylinder, or decant this one before starting. Marks here sit on the 80 per
>? cent rule, the relative density, the tare addition and the decision — not on
>? the word "no".

### Practice — write your answer before opening

A manufacturer charges a split system for a 5 m pipe run and specifies 18 g/m
beyond that. The base charge is 980 g. The installed run is 16.5 m. Calculate
the total charge in kilograms, showing all workings.

>? Extra length = 16.5 m − 5 m = 11.5 m
>?
>? Additional charge = 11.5 m × 18 g/m = **207 g**
>?
>? Total charge = 980 g + 207 g = 1187 g = **1.187 kg, say 1.19 kg**
>?
>? Sanity check: the additional charge is about a fifth of the base charge for
>? more than three times the base pipe length, which is the right order. The
>? trap is multiplying 16.5 m by 18 g/m, which would give 297 g and an answer
>? about 90 g too high — always subtract the base length first, and show that
>? subtraction so the marker can see you did.

## What to remember

- Method marks exist and they are invisible unless you write the method down.
- A bare correct answer can score one mark out of four. Workings are not
  optional decoration.
- Wrong arithmetic with right method still scores. Never work in your head.
- Always carry units through the substitution — units catch errors on their own.
- Say whether a pressure is absolute or gauge. Every time.
- Sanity check the magnitude before you move on.
`,
        quiz: [
          {
            q: "A four-mark calculation is answered with the correct final figure and no other writing. What is the most likely outcome?",
            options: [
              "Full marks, since the answer is correct",
              "Around one mark, because the method, substitution and working marks cannot be awarded for work the marker cannot see",
              "Zero, because unsupported answers are void",
              "Three marks, with one deducted for presentation",
            ],
            answer: 1,
            explain: "Marks are distributed across method, substitution, working and answer. A bare figure can only collect the answer mark. It is not usually voided, but the candidate has given away three quarters of the question for the sake of a few lines of writing.",
          },
          {
            q: "A recovery cylinder has a tare of 20 kg and a water capacity of 40 L. Using a relative density of 1.21 for R134a, what is the maximum permitted gross weight?",
            options: [
              "48.4 kg",
              "58.7 kg",
              "68.4 kg",
              "40.0 kg",
            ],
            answer: 1,
            explain: "Maximum refrigerant is 40 × 0.80 × 1.21 = 38.7 kg, and the gross weight adds the tare: 38.7 + 20 = 58.7 kg. Option 48.4 kg forgets the 80 per cent limit is applied before adding tare in a different way, 68.4 kg comes from using the full water capacity as mass, and 40.0 kg confuses litres of water capacity with kilograms of refrigerant.",
          },
          {
            q: "A candidate states the correct formula, substitutes correctly, then makes an arithmetic slip in the final line. What is the effect on marks?",
            options: [
              "The whole question is lost, because the answer is wrong",
              "Only the final answer mark is lost; the method and substitution marks still stand",
              "Half marks are awarded automatically",
              "The marker corrects the arithmetic and awards full marks",
            ],
            answer: 1,
            explain: "This is exactly why workings are demanded. The visible method and substitution earn their marks independently of the final figure. A candidate who works in their head and writes only the wrong figure loses everything instead of one mark.",
          },
          {
            q: "A coolroom on R404A runs an air-on of +4 °C with an evaporator TD of 7 K. What is the design evaporating temperature?",
            options: [
              "+11 °C",
              "−3 °C",
              "−7 °C",
              "+4 °C",
            ],
            answer: 1,
            explain: "TD is the difference between the air entering the coil and the saturated evaporating temperature, so the evaporating temperature is 4 − 7 = −3 °C. Adding the TD instead of subtracting gives +11 °C, which would have the coil warmer than the room it is cooling.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "reading-the-question",
        title: "Reading the question: the traps that cost most marks",
        minutes: 11,
        simple: "Most marks lost in a written paper are not lost to ignorance. They are lost because the candidate answered a slightly different question from the one printed. A handful of small words — two, legally, maximum, no more than — completely change what a full answer looks like, and they are easy to skim straight past.",
        refs: R("interpreting question stems, qualifiers and instruction words"),
        content: `
When results are analysed, the pattern is remarkably consistent: candidates who
know the material still drop marks because of how they read. The good news is
that misreading is a fixable, mechanical problem. Here are the traps, in the
order they cost the most.

## Trap 1 — the number in the stem

"Select **two**." "List **five**." "Name **three**." The number is the marking
scheme in miniature and it is usually printed in the middle of a sentence where
your eye slides over it.

Fix: as you read each question, put a circle around the number, then count your
answers against the circle before you turn the page. It takes two seconds and it
is the single highest-value habit in the paper.

## Trap 2 — "legally allowed" and "permitted"

A question that asks what you are **legally allowed** to do is asking a
different thing from what you are **able** to do, what you have been **trained**
to do, or what happens on your site.

A refrigeration mechanic with a restricted electrical licence can physically
rewire a switchboard. They are not legally permitted to. A question that asks
"which of the following work may the holder of a restricted electrical licence
legally carry out" is asking about the boundary of the licence, and the tempting
wrong option is nearly always the task the candidate has watched someone do.

The same words change other topics too:

- "Which refrigerants may **legally** be vented to atmosphere?" — the answer is
  effectively none of the scheduled ones, whatever might happen on some sites.
- "Who may **legally** carry out this work?" — asks about licence class and
  authorisation, not about who is competent.

Fix: when you see legally, permitted, required, mandatory or must, underline it.
Then answer the rule, not the practice.

## Trap 3 — "maximum of no more than", "minimum of at least"

Doubled-up limit wording is common and it inverts easily under pressure. Two
values in the trade sit at opposite ends and get swapped constantly:

| Quantity | Direction | Typical acceptance |
|---|---|---|
| Insulation resistance | **Minimum** — bigger is better | Not less than 1 MΩ, tested at 500 V DC (AS/NZS 3000) |
| Earthing conductor resistance | **Maximum** — smaller is better | Not more than the value the wiring rules allow, typically well under an ohm |
| Earth resistance of a flexible-cord appliance | **Maximum** | Not more than 1 Ω (AS/NZS 3760) |
| Cylinder fill | **Maximum** | Not more than 80 per cent |

Fix: before you answer any limit question, say to yourself which direction is
safe. Insulation wants to be *high*, because the whole point is that current
does not get to earth. Earth paths want to be *low*, because the whole point is
that fault current does get to earth, fast and in quantity. If your answer has
those the wrong way around, it is not a near miss — it is backwards.

>! Confirm every acceptance value against the current edition of the standard
>! and against your own jurisdiction's requirements before you rely on it. The
>! values in this course are taught to give the reasoning a shape, not to
>! replace the standard.

## Trap 4 — the question that quotes a clause number

Some questions name a standard, a section or a clause: what a particular section
requires before electrical work starts, or what a numbered clause of the wiring
rules requires you to verify.

Two failure modes:

- **Freezing** because you cannot recall the clause number itself. You are not
  being asked to recite the numbering. The number is there to point you at the
  subject. Answer the subject.
- **Answering the number.** "Section 8" is not an answer to "what does Section 8
  require". Write the requirement.

Fix: mentally replace the clause reference with a topic label. A question about
the section of the wiring rules covering verification is a question about
verification: visual inspection first, then earthing continuity, insulation
resistance, polarity, correct circuit connections, and operation of protective
devices such as RCDs. A question naming the standard for safe working on low
voltage installations is a question about safe working practice — risk
assessment, authorisation, isolation, testing for de-energisation, and
protective equipment before work starts.

## Trap 5 — the qualifier that narrows the scope

Look for the words that shrink the question:

- "…on a **single-phase** system" — a three-phase answer misses.
- "…**before** the equipment is returned to service" — post-energising checks
  are outside the scope asked for.
- "…in a **public** area" — controls that would be adequate in a locked plant
  room will not score.
- "…for a **flexible cord** appliance" — points you at the in-service testing
  standard rather than the wiring rules.
- "…**other than** " or "…which is **not**" — reverses the whole question.

Fix: underline every qualifier as you read. If you find yourself writing an
answer that would be equally true with the qualifier deleted, you have probably
missed the point of the question.

## Trap 6 — the two-part question with one part answered

"State the purpose of a suction accumulator **and** the type of system it is
normally found on." Half an answer, half the marks. Two-part questions hide the
second part behind an "and", a comma, or a second sentence. Number the parts in
the margin as (a) and (b), then answer both.

### Practice — write your answer before opening

A question reads: *A refrigeration mechanic holding a restricted electrical
licence is called to a rooftop packaged unit. State which of the following work
they are legally permitted to carry out: (a) replacing the failed compressor
contactor, (b) running a new sub-circuit from the switchboard to the unit,
(c) replacing the damaged flexible supply lead on the condensate pump,
(d) altering the fixed wiring in the isolator.* Write your answer and explain
what the word "legally" is doing in that stem.

>? **Permitted: (a) and (c).** Both are disconnect and reconnect work on the
>? equipment the licence covers — replacing a failed component and reconnecting
>? it, and replacing a damaged flexible cord on the appliance. Both must be
>? followed by the required verification tests before the unit is re-energised.
>?
>? **Not permitted: (b) and (d).** Installing a new sub-circuit and altering
>? fixed wiring are electrical installation work, which requires a full
>? electrician's licence. That the mechanic is capable of the work is beside the
>? point.
>?
>? **What "legally" is doing:** it moves the question from competence to
>? authorisation. The tempting wrong answer is whichever task the candidate has
>? seen done on site. Licensing detail varies between states and territories, so
>? state the principle and work to your own regulator's scope.

### Practice — write your answer before opening

Two candidates answer a question on acceptance values. One writes "insulation
resistance must not exceed 1 MΩ". The other writes "the earth conductor must
have a resistance of at least 1 Ω". Explain what has gone wrong in each and how
a candidate can avoid it.

>? **Both have the direction inverted, which is worse than being close.**
>? - Insulation resistance is a **minimum**: not less than 1 MΩ. Saying it must
>?   not exceed 1 MΩ describes a failed insulation test as a pass.
>? - Earth conductor resistance is a **maximum**: as low as practicable, well
>?   under an ohm. Requiring at least 1 Ω would demand a poor earth path.
>?
>? **How to avoid it:** ask which direction is safe before writing. Insulation
>? high means current cannot reach earth. Earth path low means fault current
>? can reach earth quickly and in enough quantity to trip the protective device.
>? Reason it out from the purpose and the direction cannot come out backwards.

### Practice — write your answer before opening

A question names a section of the wiring rules and asks what it requires you to
verify on a completed installation. You cannot recall the section number at all.
Describe how you would answer, and give the answer.

>? **Do not answer the number. Answer the subject: verification.**
>?
>? A completed installation is verified by visual inspection first, confirming
>? the work matches the design and that connections, enclosures and equipment
>? selection are correct — then by testing:
>? - continuity of the earthing system, including protective earthing conductors
>?   and any equipotential bonding;
>? - insulation resistance, tested at 500 V DC, against the minimum acceptable
>?   value;
>? - polarity, confirming active, neutral and earth land on their correct
>?   terminals;
>? - correct circuit connections;
>? - operation of protective devices, including RCD operation and, where
>?   required, earth fault-loop impedance.
>?
>? Write the requirement and you collect the marks even with the numbering
>? completely forgotten. Work to the current edition of the standard.

## What to remember

- Circle the number. Count your answers against it before moving on.
- Underline legally, must, required, before, not, single-phase, public.
- Decide which direction is safe before quoting a limit.
- A clause number points at a topic. Answer the topic.
- Number two-part questions (a) and (b) in the margin so neither is orphaned.
`,
        quiz: [
          {
            q: "A stem asks which work the holder of a restricted electrical licence may 'legally carry out'. What is that wording testing?",
            options: [
              "Whether the candidate is technically capable of the task",
              "The boundary of the licence's authorisation, regardless of the candidate's skill or what is commonly done on site",
              "Whether the task appears in the manufacturer's service manual",
              "Whether the employer permits the task under its own procedures",
            ],
            answer: 1,
            explain: "'Legally' shifts the question from competence to authorisation. Skill, custom and employer policy do not extend a licence, and the tempting distractor is nearly always a task the candidate has watched someone perform.",
          },
          {
            q: "Which pair of directions is correct?",
            options: [
              "Insulation resistance is a maximum; earthing conductor resistance is a minimum",
              "Both insulation resistance and earthing conductor resistance are minimum values",
              "Insulation resistance is a minimum; earthing conductor resistance is a maximum",
              "Both are maximum values",
            ],
            answer: 2,
            explain: "Insulation must be at least the stated value because its job is to stop current reaching earth. The earthing conductor must be no more than the stated value because its job is to carry fault current to earth fast enough to operate protection. Getting these the wrong way round turns a fail into a pass.",
          },
          {
            q: "A question quotes a clause number the candidate cannot recall. What is the best approach?",
            options: [
              "Leave the question blank rather than risk a wrong clause reference",
              "Write the clause number that seems closest and stop there",
              "Identify the subject the clause covers and answer the requirement in full",
              "Answer a different question from the same topic area",
            ],
            answer: 2,
            explain: "The clause reference is a pointer to a subject, not a request to recite numbering. Marks sit on the requirement itself, so answering the subject collects them even with the numbering forgotten. A blank scores nothing at all.",
          },
          {
            q: "Which qualifier most changes what a full answer about safety controls must contain?",
            options: [
              "'…using hand tools' rather than '…using tools'",
              "'…in a public area' rather than '…in a plant room'",
              "'…on a Monday' rather than '…during the week'",
              "'…on a packaged unit' rather than '…on a unit'",
            ],
            answer: 1,
            explain: "Working in a public area brings in people who have had no induction and no reason to expect a hazard, so the answer must add barricading, exclusion zones, signage, spotters and leaving the site safe. The other qualifiers barely move the required controls.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "time-and-order",
        title: "Managing the clock and deciding what to attempt first",
        minutes: 10,
        simple: "A written paper is partly a knowledge test and partly a time-management test. Nearly everyone who runs out of time did so because they spent too long early on something worth few marks. Treat the paper like a service call sheet: do the quick certain jobs first, book the awkward one for later, and keep an eye on the clock the whole way.",
        refs: R("examination time management and answering strategy"),
        content: `
Time is the resource most candidates manage worst. The knowledge is there; it
just does not all reach the page before the invigilator calls stop. Managing the
clock is a skill you can practise like any other, and it is worth marks
regardless of topic.

## Work out your minutes-per-mark before you start

Two minutes spent at the beginning saves twenty at the end.

Suppose a paper is worth 90 marks and you have 120 minutes. Leave 15 minutes for
reading and checking, and you have 105 minutes of writing time:

105 min ÷ 90 marks = **1.17 minutes per mark**

Round it to a rule you can use in your head: **just over a minute a mark**. That
immediately tells you a one-mark multiple choice deserves about a minute, and a
six-mark calculation deserves about seven. If you have been on a three-mark
question for eight minutes, the clock says move, whatever your pride says.

Work the same sum for whatever paper you actually sit. If it is 60 marks in 90
minutes, that is a comfortable minute and a half a mark. If it is 100 marks in
90 minutes, you must not linger anywhere.

## The reading pass

Spend the first five minutes reading the whole paper without writing anything
except marks in the margin:

1. Note the total marks and check the marks-per-question printed.
2. Mark each question with a quick code: a tick for *I know this cold*, a dash
   for *I can do this with a think*, a cross for *this one is trouble*.
3. Note which questions carry the biggest mark values.

You now have a plan, and your brain has quietly started working on the crosses
in the background while you answer the ticks.

## The order to attempt

**Ticks first, biggest marks first inside that group.** There are three reasons,
and they are all about protecting marks:

- **Certainty.** Marks you can definitely get should be banked before the clock
  becomes a factor. Nothing is worse than knowing an answer perfectly and never
  reaching the question.
- **Momentum.** Starting with something you know settles the nerves. Starting
  with the hardest question on the paper does the opposite, and anxiety costs
  recall.
- **Incubation.** Hard questions genuinely do get easier after twenty minutes of
  doing something else. You will often walk back to a cross and find the answer
  waiting.

The one exception: if a question carries a very large share of the marks — a
full piping schematic or a control circuit drawing worth a fifth of the paper —
do not leave it to the last ten minutes even if it is a dash. Give it a
deliberate slot in the middle of your plan, with a hard finish time.

## Attempt everything

There is no negative marking on a trade knowledge paper. Every blank is a
guaranteed zero.

- **Multiple choice:** never blank. Eliminate what you can and choose.
- **List questions:** write the items you have even if you cannot reach the
  full count. Three of five is three marks; a blank is none.
- **Calculations:** if you cannot finish, write the formula and the substitution
  anyway. Method marks are still there.
- **Written answers:** one correct sentence beats an empty space.

## Parking and returning

When you stall, park deliberately rather than grinding:

1. Write down whatever you do have — even a formula or two list items.
2. Mark the question number clearly at the top of your paper or on the question
   sheet.
3. Move on immediately.
4. Come back in your reserved time at the end.

Grinding on a stalled question is the classic way a well-prepared candidate ends
up with three unattempted questions at the back of the paper.

## The last ten minutes

Reserve them, and use them in this order:

1. **Fill every blank.** Guesses on multiple choice, partial lists, formulas on
   unfinished calculations.
2. **Check the counting questions.** Every "select two" and "list four" — count.
3. **Check units and gauge-versus-absolute** on every calculation.
4. **Check the two-part questions** for an orphaned second half.
5. Only then reread answers for content, and change one only if you have a
   definite reason. Second-guessing a considered first answer usually costs.

>! Do not leave a drawing question until the last ten minutes. Drawings take
>! longer than candidates estimate, and a rushed control circuit that puts a
>! safety switch in the wrong branch loses more marks than a slow one would
>! have cost in time.

### Practice — write your answer before opening

A paper is worth 75 marks and runs for 100 minutes. Work out your working rate
and state what it tells you about a five-mark question and a one-mark multiple
choice. Show your reasoning.

>? Reserve 10 minutes for the reading pass and 10 for checking, leaving
>? 80 minutes of writing time.
>?
>? 80 min ÷ 75 marks = **about 1.07 minutes per mark** — call it a minute a
>? mark.
>?
>? - A five-mark question deserves roughly **five minutes**. At eight minutes,
>?   park it and come back.
>? - A one-mark multiple choice deserves about **one minute**. If two options
>?   still look equal after a minute, choose the better one and move — a further
>?   three minutes of staring rarely changes the outcome and costs you a
>?   question elsewhere.

### Practice — write your answer before opening

You are 70 minutes into a 100-minute paper. You have 4 questions left, worth
6, 3, 3 and 8 marks. You have been stuck on the 8-mark drawing question for
12 minutes and have drawn nothing you are happy with. Describe exactly what you
would do next and why.

>? **Leave the drawing and bank the certain marks first.**
>? 1. Before leaving it, put down what you already know: the supply rails, the
>?    isolation switch, and every component the question named, even roughly.
>?    Partial credit on a drawing is real.
>? 2. Answer the 6, 3 and 3 mark questions — 12 marks that are reachable, in
>?    perhaps 14 minutes at a minute a mark.
>? 3. Return to the drawing with about 12 minutes left and build it from the
>?    component list in the question, one item at a time: rails, isolator,
>?    thermostat, safeties in series in the control path, contactor, then the
>?    loads in parallel.
>? 4. Keep the final 3 minutes to fill blanks and check the counting questions.
>?
>? **Why:** 12 marks that are within reach must not be risked for an 8-mark
>? question that has already proved slow, and the drawing genuinely becomes
>? easier after a break spent on something else.

### Practice — write your answer before opening

Explain why leaving a multiple-choice question blank is always worse than
guessing, and why that is not equally true of changing an answer you have
already thought about.

>? **Blanks:** a trade knowledge paper has no negative marking, so a blank is a
>? guaranteed zero while a guess is a real chance. After eliminating the clearly
>? wrong options that chance is often close to even. There is nothing to lose.
>?
>? **Changing answers:** this is a different situation. Your first considered
>? answer was made while you were reading the stem carefully and with your
>? reasoning fresh. A late change made under time pressure, without a definite
>? reason, more often moves away from the right answer than towards it. Change
>? it when you have found an actual error — a misread qualifier, a missed
>? "not", a value you have now recalled properly — and leave it alone when the
>? only new input is nerves.

## On the job

- Calculate minutes per mark before writing anything.
- Read the whole paper first and code every question tick, dash or cross.
- Ticks first, biggest marks first — but give any large drawing question a
  deliberate mid-paper slot.
- Park a stalled question after writing down what you have; do not grind.
- Reserve ten minutes: blanks, counts, units, orphaned second halves.
`,
        quiz: [
          {
            q: "A paper is 80 marks over 110 minutes. Allowing 10 minutes to read and 10 to check, roughly what working rate should the candidate plan on?",
            options: [
              "About 1.1 minutes per mark",
              "About 1.4 minutes per mark",
              "About 2.0 minutes per mark",
              "About 0.5 minutes per mark",
            ],
            answer: 0,
            explain: "110 minus 20 leaves 90 minutes of writing time; 90 divided by 80 marks is about 1.1 minutes per mark. Working the rate out first is what tells you when a question has taken too long, rather than discovering it with three questions unattempted.",
          },
          {
            q: "Why should a candidate generally attempt the questions they know cold before the ones they find hard?",
            options: [
              "Because early questions are usually worth more marks",
              "Because it banks certain marks before time pressure arrives, builds momentum, and lets hard questions incubate while you work elsewhere",
              "Because markers give credit for answering in order",
              "Because hard questions are usually optional",
            ],
            answer: 1,
            explain: "The reasons are all about protecting marks: certainty, momentum and incubation. Mark values are not tied to position in the paper, order of answering is not itself credited, and hard questions are rarely optional.",
          },
          {
            q: "With five minutes left, a candidate has one unfinished calculation, two blank multiple choices and an answer they now feel uneasy about. What is the best use of the time?",
            options: [
              "Rewrite the uneasy answer in full",
              "Fill the two multiple choices, write the formula and substitution on the calculation, then check counts and units",
              "Recheck every answer on the paper from the start",
              "Leave the blanks and add detail to answers already written",
            ],
            answer: 1,
            explain: "Blanks are certain zeros and cost nothing to fill, and an unfinished calculation still attracts method and substitution marks. Rewriting or padding existing answers adds little, and a full recheck is not achievable in five minutes.",
          },
          {
            q: "A drawing question is worth a fifth of the paper. When should it be attempted?",
            options: [
              "Last, so the remaining time can be given entirely to it",
              "First, before anything else, regardless of confidence",
              "In a deliberate slot in the middle of the plan, with a hard finish time",
              "Only if time remains after every written question is complete",
            ],
            answer: 2,
            explain: "Drawings take longer than candidates estimate, so leaving one until last risks a rushed and dangerous circuit. Doing it first can burn the clock before any marks are banked. A planned mid-paper slot with a stop time protects both.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "revision-map",
        title: "Revision map: what is assessed and where this course teaches it",
        minutes: 13,
        simple: "This is your index. Every subject the final knowledge assessment reaches into is listed here with the modules of this course that teach it, so revision becomes a matter of working down a list rather than wondering where to start. Treat it like a parts list before a job: check off what you have, then go and get what you are missing.",
        refs: R("mapping of assessed knowledge topics to the modules of this course"),
        content: `
Revision falls apart when it has no shape. This lesson gives it one. Work down
the table topic by topic: read the modules listed, then come back and try the
practice questions in the capstone stream. Where a topic is assessed heavily,
more modules are listed, because it deserves more of your time.

## The assessed topics, and where they are taught

### Electrical verification and safety testing

The largest single block. Expect the mandatory tests after replacing an
electrical component, the acceptance values and the test voltage, why a low
frame-to-earth-pin resistance matters, the purpose of a polarity test and of an
RCD, the steps that prove a system is de-energised, and what is required before
electrical work starts.

| Study | Module |
|---|---|
| Testing and fault-finding practice | **v1-electrical-testing** — R1.15 · Electrical testing and fault-finding |
| Instruments, ranges and safe use | **v1-measuring-instruments** — R1.16 · Measuring and test instruments |
| Circuit theory behind the tests | **elec-circuits** — E.3 · Electrical circuits |
| Safe working, isolation, authorisation | **elec-energy-sector** — E.1 · Working safely in the energy sector |
| Electrical safety in the RAC context | **safety** — 10 · Safety |
| Wiring practice and terminations | **v1-electrical-wiring** — R1.13 · Electrical wiring |

### Restricted electrical licence and legislation

What a refrigeration mechanic holding a restricted licence may lawfully do, duty
of care in a public area, and the Acts and Regulations that govern electrical
work in your state.

| Study | Module |
|---|---|
| The whole topic, in depth | **cap-licence-and-law** — C.2 · Restricted electrical licence, duty of care and the law |
| Authorisation, licensing and standards | **elec-energy-sector** — E.1 · Working safely in the energy sector |
| Hazard control and site safety | **safety** — 10 · Safety |
| Reporting and documentation | **v2-technical-communication** — R2.11 · Technical communication |

### Wiring diagrams and safeties

Reading a manufacturer's circuit diagram with its legend to find the safety
devices in a lockout string, and drawing a control circuit from a written
specification.

| Study | Module |
|---|---|
| Control drawings and lockout strings | **v2-controls-drawings** — R2.13 · Controls and control drawings |
| Reading drawings and symbols | **v2-drawing-interpretation** — R2.12 · Drawing interpretation |
| Building and connecting control circuits | **elec-control-circuits** — E.13 · Develop and connect electrical control circuits |
| Contactors, relays, pressure switches | **v1-electrical-components** — R1.12 · Electrical components |
| Ladder logic in the core stream | **electrical** — 7 · Electrical fundamentals for RAC |

### Calculations under exam conditions

Ohm's law and power for a defrost heater; design suction pressure from air-on
and TD; the cylinder fill limit; TX valve superheat; additional charge for a long
pipe run.

| Study | Module |
|---|---|
| Trade arithmetic and formula handling | **elec-trade-calculations** — E.14 · Trade calculations |
| Ohm's law, power, series and parallel | **elec-circuits** — E.3 · Electrical circuits |
| Electrical principles for RAC | **v1-electrical-principles** — R1.11 · Electrical principles for refrigeration |
| Reading PT data and service charts | **v2-service-charts** — R2.7 · Service charts, tables and cycle analysis |
| Superheat and subcooling arithmetic | **superheat-subcooling** — 5 · Superheat & subcooling |
| Cylinder handling and fill limits | **code-of-practice** — 11 · The Refrigerant Handling Code of Practice |
| Line length and charge adjustment | **v2-piping** — R2.2 · Refrigeration piping and line sizing |

### Installation, pressure testing and commissioning

The mandatory tests at the end of a new installation, pressure testing with
oxygen-free nitrogen and reading a design temperature table, where liquid is
charged into a newly evacuated system, and which instruments measure airflow.

| Study | Module |
|---|---|
| Installation practice and testing | **v2-installation** — R2.9 · Installation and maintenance |
| Commissioning and balancing | **v2-commissioning** — R2.10 · Commissioning and system balancing |
| Repair, evacuation and charging | **repair** — 9 · Repair procedures |
| Air-side measurement and instruments | **v2-air-conditioning** — R2.3 · Air-conditioning: ventilation, psychrometrics and air treatment |
| Service equipment for evacuation | **v1-specialised-tools** — R1.9 · Specialised tools and service equipment |

### Recovery, evacuation and disposal

Equipment for safe and efficient recovery of a commercial charge, disposal
routes for hydrocarbon refrigerants, and the two evacuation methods in the
Refrigerant Handling Code of Practice.

| Study | Module |
|---|---|
| The Code, clause by clause | **code-of-practice** — 11 · The Refrigerant Handling Code of Practice |
| Recovery units, vacuum pumps, gauges | **v1-specialised-tools** — R1.9 · Specialised tools and service equipment |
| Doing the work | **repair** — 9 · Repair procedures |
| Refrigerant properties and environment | **refrigerants** — 4 · Refrigerants & the environment |

### TX valves and operating conditions

How and where superheat is measured, what an undercharge does to TX superheat,
and the three pressures acting on a TX valve with the function of each.

| Study | Module |
|---|---|
| Metering devices in depth | **v1-refrigerant-controls** — R1.5 · Refrigerant controls and metering devices |
| Superheat and subcooling | **superheat-subcooling** — 5 · Superheat & subcooling |
| Symptoms and diagnosis | **v2-service-diagnosis** — R2.8 · Service diagnosis and repair |
| Reading faults on the gauges | **diagnosis** — 8 · Fault diagnosis |

!FIG[txv-balance]

!SIM[Watch superheat move as the charge is reduced](fault=lowCharge)

### Components and schematics

Purpose, location and typical application of components such as a suction
accumulator, an EPR valve, a burnout drier and an oil separator; and drawing a
full piping schematic from a written component list.

| Study | Module |
|---|---|
| Ancillary components in depth | **v1-ancillary-equipment** — R1.6 · Ancillary equipment |
| Major components | **components** — 3 · Components deep-dive |
| Piping layout and schematics | **v2-piping** — R2.2 · Refrigeration piping and line sizing |
| Drawing conventions and symbols | **v2-drawing-interpretation** — R2.12 · Drawing interpretation |
| Multi-evaporator and packaged systems | **v1-system-types** — R1.7 · Domestic, commercial and industrial systems |
| Reverse cycle and system types | **system-types** — 6 · System types in the field |

### Refrigerants and site safety

Flammability and toxicity classification, ozone-depleting and global-warming
status, refrigerant-specific handling precautions, and PPE for work on a
regulated water-cooling system such as a cooling tower.

| Study | Module |
|---|---|
| Classification and environmental status | **refrigerants** — 4 · Refrigerants & the environment |
| Handling, storage and safety | **code-of-practice** — 11 · The Refrigerant Handling Code of Practice |
| Cooling towers and water systems | **v1-condensers** — R1.3 · Condensers and cooling towers |
| Site safety and PPE | **safety** — 10 · Safety |

## How to use this map

1. **Audit first.** Go down the topic list and mark each one confident,
   shaky or blank. Be honest — an optimistic audit wastes the weeks you have.
2. **Weight your time by the assessment, not by your interest.** Electrical
   verification is the biggest block and it is also the block most refrigeration
   candidates find least comfortable. That combination is where marks are won.
3. **Read, then close the book and write.** Reading a module feels like
   revision and often is not. After each one, write the key list or the key
   procedure from memory, then check it.
4. **Practise the calculations with different numbers.** Rework the examples in
   this stream with your own figures until the method is automatic.
5. **Finish with the shapes.** A week out, stop learning new content and
   practise answering: list-N, select-two, show-all-workings, draw-and-label.

### Practice — write your answer before opening

You have three weeks. Your audit says you are confident on refrigerants,
components and the cycle; shaky on electrical verification values; blank on
what a restricted licence permits. Write the plan you would follow.

>? **Weight the time to the gap and to the size of the assessed block.**
>?
>? *Week 1 — electrical verification.* R1.15 electrical testing and fault-finding,
>? then R1.16 measuring instruments, then E.3 electrical circuits for the theory
>? underneath. Write the return-to-service test list from memory every day until
>? it comes out complete and in order, with the value and the reason beside each
>? test.
>?
>? *Week 2 — licensing and law.* C.2 in this stream end to end, plus E.1
>? working safely in the energy sector. Learn the scope of the restricted
>? licence by understanding disconnect and reconnect, not by memorising five
>? bullet points. Check your own state or territory regulator's scope statement.
>? Add duty of care in a public area, and the documentation list.
>?
>? *Week 3 — consolidate and practise.* Rework every calculation in C.1 with
>? your own numbers. Skim the confident topics once for values only. Then spend
>? the last few days on question shapes and timed practice.
>?
>? Note what the plan does *not* do: spend week 1 rereading refrigerants because
>? it is enjoyable and already solid.

### Practice — write your answer before opening

A question asks you to state the purpose of a suction accumulator, where it sits
in the system, and what type of system it is normally found on. Which modules
of this course would you revise for that question shape, and what does the
three-part structure tell you about how to answer?

>? **Modules:** R1.6 ancillary equipment for the component itself, module 3
>? components deep-dive for the surrounding system, and R2.2 piping for where it
>? physically sits in the pipework. R1.7 and module 6 cover the system types.
>?
>? **Structure:** three parts means three separate answers, almost certainly one
>? mark each. Number them (a), (b), (c) in the margin.
>? - *(a) Purpose* — it holds liquid refrigerant returning down the suction line
>?   and meters it back to the compressor slowly as vapour with the oil, so the
>?   compressor is protected from liquid slugging.
>? - *(b) Location* — in the suction line between the evaporator outlet and the
>?   compressor suction.
>? - *(c) Typical system* — systems where liquid floodback is likely: low
>?   temperature and hot gas defrost systems, heat pumps, and multi-evaporator
>?   commercial systems with varying load.
>?
>? Answering only (a) beautifully is one mark out of three.

### Practice — write your answer before opening

Explain why "reading the module again" is a weak revision method for a written
knowledge assessment, and what to do instead.

>? **Because reading tests recognition, and the paper tests recall.**
>? Familiar text feels like knowledge. The page supplies the structure, the
>? order and the vocabulary, so nothing is being retrieved from memory — which
>? is exactly what the exam room removes.
>?
>? **Instead:**
>? - Close the book and write the list, the procedure or the value from memory,
>?   then check it and note only what you missed.
>? - Rework calculations with new numbers, not the worked ones.
>? - Say the reason out loud for each item on a list, so the list can be rebuilt
>?   rather than recited.
>? - Use the practice questions in this stream and the quizzes at the end of
>?   each lesson under something like exam conditions: no notes, timed.
>? - Revisit what you got wrong a few days later, not the same evening.

## What to remember

- The map is the plan. Audit honestly, then weight time to the biggest assessed
  blocks and your biggest gaps, not to what you enjoy.
- Electrical verification is the largest block and the one most refrigeration
  candidates neglect.
- Recall beats rereading. Close the book and write it out.
- Practise the shapes as well as the content in the final week.
`,
        quiz: [
          {
            q: "Which module of this course goes into the lockout string of a manufacturer's control circuit in the most depth?",
            options: [
              "R2.13 · Controls and control drawings",
              "R1.3 · Condensers and cooling towers",
              "E.14 · Trade calculations",
              "4 · Refrigerants & the environment",
            ],
            answer: 0,
            explain: "Controls and control drawings is where safety devices in a control path, lockout relays and manufacturer circuit conventions are taught. Condensers, trade calculations and refrigerants are all assessed topics, but none of them covers a lockout string.",
          },
          {
            q: "A candidate is blank on the acceptance values for return-to-service testing. Which combination of modules is the most direct revision path?",
            options: [
              "R2.6 load estimating and R2.3 air-conditioning",
              "R1.15 electrical testing and fault-finding with R1.16 measuring instruments",
              "R1.10 brazing and welding with R1.8 hand and power tools",
              "R2.12 drawing interpretation with R2.11 technical communication",
            ],
            answer: 1,
            explain: "Testing and fault-finding teaches the tests and their acceptance criteria, and measuring instruments teaches the meters that take them and how to use them safely. The other combinations are all real modules but none of them covers verification testing.",
          },
          {
            q: "Why should revision time be weighted toward electrical verification for most refrigeration candidates?",
            options: [
              "Because it is the easiest block to learn quickly",
              "Because it is the largest assessed block and commonly the least comfortable area for refrigeration candidates, so it is where most marks are available to gain",
              "Because refrigerant topics are not assessed",
              "Because electrical questions are always worth more marks each",
            ],
            answer: 1,
            explain: "The value of revision time is size of block multiplied by size of gap. Electrical verification scores high on both for most refrigeration candidates. Refrigerant topics are certainly assessed, and per-question mark values are not decided by topic.",
          },
          {
            q: "What is the main weakness of revising by rereading a module?",
            options: [
              "It takes longer than writing answers out",
              "It builds recognition of familiar text rather than the recall the paper actually tests",
              "Module content is not aligned with the assessment",
              "It covers too many topics at once",
            ],
            answer: 1,
            explain: "Reading supplies structure, order and vocabulary, so nothing is retrieved from memory — and retrieval under supervised conditions is exactly what is being assessed. Writing the list or procedure from memory and then checking it is what converts reading into recall.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
