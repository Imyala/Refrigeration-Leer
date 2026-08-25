/* =========================================================================
   Course content, module 212 — Mechanical and construction drawing
   interpretation.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 12 — Mechanical and
   construction drawing interpretation.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle, 5th edn — pub. AIRAH — Ch 12, Mechanical and construction drawing interpretation",
  ];

  const REFS_AS1100 = REFS.concat([
    "AS 1100 Technical drawing (Standards Australia) — line types, dimensioning, projection symbols, scales and title blocks",
  ]);

  const REFS_SITE = REFS.concat([
    "AS 1100.301 Technical drawing — Architectural drawing (Standards Australia) — plans, elevations, sections and graphical symbols",
  ]);

  const MODULES = [

  /* ======================================================================
     Module R2.12 — Drawing interpretation
     ====================================================================== */
  {
    id: "v2-drawing-interpretation",
    stream: "v2",
    title: "R2.12 · Drawing interpretation",
    blurb: "Reading the drawings a refrigeration technician is handed: standards and title blocks, line types and dimensioning, scales and scale calculations, drawing types, architectural symbols, plant setout and BIM.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "standards-and-as1100",
        title: "Standards, Standards Australia and AS 1100",
        minutes: 10,
        simple: "A drawing only works if everyone reading it agrees what the marks mean. Standards are the agreed rulebook, written by committees of the people who actually use them, and AS 1100 is the one that covers technical drawing in Australia. It is like agreeing that a red light means stop - useless unless everybody signed up to the same meaning.",
        refs: REFS_AS1100,
        content: `
A drawing is a language. Like any language it only carries meaning if the
person who drew it and the person reading it agree on what a dashed line, a
hatched area or the letter R in front of a number means. That agreement is
what a technical standard is.

## What a standard actually is

A useful working definition: a standard is a published document that lays down
requirements and methods so that a product, material, system, service or
process does the job it is meant to do, and goes on doing it the same way every
time. Standards set criteria for performance, safety and
reliability.

Refrigeration and air conditioning is soaked in them. Refrigerant piping,
refrigerant cylinders, pressure vessels, thread types and sizes, electrical
installation, ventilation rates, and — the subject of this module — the
conventions used in technical drawings, are all standardised. Without that, a
100 mm copper elbow bought in Perth would not fit a pipe made in Brisbane.

## Who writes them

In Australia, standards are developed by **Standards Australia**, an
independent, not-for-profit organisation recognised by the Australian
Government and charged with producing current, internationally aligned
standards for the country.

Standards are not imposed by some remote outside body. They are written by the
people affected by them: a committee for a piece of safety equipment would be
balanced between designers, manufacturers, safety regulators, installers and
end users. A standard must represent the **consensus** of that balanced
committee. Consensus is not the same as unanimity — but it means a great deal
more than a bare majority.

Standards Australia also represents the country on the two big international
bodies:

| Body | Covers |
|---|---|
| ISO — International Organization for Standardization | General technical standards, including drawing conventions |
| IEC — International Electrotechnical Commission | Electrical and electronic standards |

International standards are adopted wherever practical, and roughly one-third
of current Australian Standards are fully or substantially aligned with an
international equivalent. Some fields — construction is the obvious one — have
no significant international equivalent, so the Australian document stands on
its own.

## Reading a standard number

Standards are cited by a code, and the pieces of the code carry information.

| Example | What it tells you |
|---|---|
| AS 1668.3:2001 | An Australian Standard, number 1668, Part 3, published in 2001 |
| AS/NZS 1677.1:1998 | A joint Australian and New Zealand Standard, number 1677, Part 1, 1998 |
| AS 1100.301 | Australian Standard 1100, Part 301 — the architectural drawing part |

The year matters. Standards are reviewed and reissued as needed: in fast-moving
areas that can be every few years, while a standard covering something stable
may run unchanged for decades. Quoting a superseded edition in a specification
or a report is a genuine error, so check the currency of any standard you rely
on rather than trusting the dog-eared copy in the workshop.

>! Referencing an out-of-date standard on a report, quote or compliance
>! certificate can invalidate the document. Check the edition and amendment
>! status before you cite one, particularly for anything touching pressure
>! equipment, electrical work or refrigerant handling.

## AS 1100 — technical drawing

All Australian technical drawings should conform to **AS 1100**, which sets the
conventions for technical drawing across mechanical, architectural and
engineering work: line types and thicknesses, dimensioning, projection,
sections, scales, title blocks, lettering and symbols.

Two points that catch people out:

- The standard applies equally whether the drawing was produced by hand or by
  **CAD (computer-aided drafting)**. CAD is overwhelmingly the way drawings are
  produced today, but the software does not relieve anyone of the conventions —
  it just makes them easier to apply consistently.
- Not every symbol you meet is in AS 1100 or any other Australian Standard.
  Consulting engineers, manufacturers and drafting offices all use variations.
  That is exactly why drawings carry a **legend**, and why reading the legend
  and the notes before you interpret the plan is a habit worth forming.

## Why a technician needs this

You will spend far more time reading drawings than producing them, and the
consequences of misreading are physical: a chiller that will not fit through
the plantroom door, a penetration cored through a structural beam, ductwork
that clashes with a sprinkler main, a coolroom drain with no fall available.

You will also, occasionally, produce drawings — usually a field sketch of
something that will be fabricated in a workshop by someone you never meet: a
bracket, a duct transition, a pipe spool, a machinery plinth. That sketch has
to say clearly what you meant, using the same conventions, or it comes back
wrong at your company's expense.

## What to remember

- A standard is a consensus document that makes parts, procedures and drawings
  interchangeable and predictable.
- Standards Australia develops Australian Standards and represents Australia at
  ISO and IEC; about a third align with international standards.
- The date in a standard code tells you the edition — always check currency.
- AS 1100 governs technical drawing in Australia, for CAD and hand drawing
  alike.
- Symbols vary between offices; read the legend and notes before the linework.
`,
        quiz: [
          {
            q: "What does the notation AS/NZS 1677.1:1998 tell you?",
            options: [
              "An international ISO standard adopted in 1998",
              "A joint Australian and New Zealand Standard, number 1677, Part 1, published in 1998",
              "Australian Standard 1677 with 1 amendment issued in 1998",
              "A New Zealand standard recognised in Australia since 1998",
            ],
            answer: 1,
            explain: "The AS/NZS prefix marks a joint Australian and New Zealand document, the digits after the point identify the part, and the year is the publication date — which is how you check whether the edition you are holding is still current.",
          },
          {
            q: "Which statement about consensus in standards development is correct?",
            options: [
              "It requires unanimous agreement of the committee",
              "It means a simple majority of committee members",
              "It implies substantially more than a simple majority, though not necessarily unanimity",
              "It means agreement between Standards Australia and the government only",
            ],
            answer: 2,
            explain: "Consensus sits deliberately between the two extremes: a bare majority is not enough, but one dissenting member cannot block a standard indefinitely. That balance is why standards committees are made up of designers, manufacturers, regulators and end users together.",
          },
          {
            q: "A drawing was produced in CAD rather than by hand. What follows for the drawing conventions?",
            options: [
              "CAD drawings are exempt from AS 1100",
              "AS 1100 applies equally; the production method does not change the conventions",
              "CAD drawings must use first-angle projection",
              "Only the title block requirements apply to CAD drawings",
            ],
            answer: 1,
            explain: "AS 1100 governs the content and conventions of the drawing, not the tool used to make it. CAD makes consistency easier to achieve but grants no exemption — and Australian practice remains third-angle projection, not first (C).",
          },
          {
            q: "Why should you read the legend on a services drawing before interpreting the symbols?",
            options: [
              "Because AS 1100 forbids the use of standard symbols on services drawings",
              "Because not every symbol in use is defined in AS 1100, and offices use variations",
              "Because the legend contains the scale",
              "Because symbols change meaning with the drawing scale",
            ],
            answer: 1,
            explain: "Symbol sets vary between consultants, manufacturers and drafting offices, and many symbols in daily use sit outside AS 1100 altogether. The legend is the drawing's own dictionary, which is why assuming a symbol means what it meant on the last job is a good way to install the wrong damper.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "line-types-and-title-block",
        title: "What a drawing is made of: title block and line types",
        minutes: 11,
        simple: "Every drawing has a box in the corner telling you what it is, who drew it and what scale it is at - read that first, always. Then the lines themselves carry meaning: thick lines are the edges you can see, dashed lines are edges hidden inside, and thin chain lines are centres. It is like punctuation - the same words mean different things depending on the marks around them.",
        refs: REFS_AS1100,
        content: `
A technical drawing is built from a small vocabulary: lines, circles, numerals,
letters and symbols. To make the shape of the object stand out, the linework is
deliberately graded — thick lines for what you can see, thin lines for the
information about it. If every line were the same weight the drawing would be
an unreadable tangle.

## Read the title block first

The title block sits in the bottom right corner (or down the right edge) of
every proper drawing sheet, and it is the first thing you should read — before
you look at a single line. It is the drawing's identity card.

| Title block field | Why a technician cares |
|---|---|
| Drawing number and sheet number | The unique identity; quote it in every email, RFI and report |
| Revision or amendment number and date | Tells you whether you are holding the current issue. Working from a superseded revision is one of the commonest causes of rework |
| Drawing title | What this sheet shows — for example "Level 2 mechanical services layout" |
| Project and client | Which job and whose site |
| Scale | The ratio between the paper and the real world; may be "as shown" if views differ |
| Projection symbol | First angle or third angle — changes how you read the view layout |
| Units note | Usually millimetres unless stated |
| Drawn by, checked by, approved by | Who to ask when something does not make sense |
| Sheet size | A1, A3 and so on. Vital, because a plan printed on A3 from an A1 original will not scale |
| Notes and legend | Symbol meanings, general notes, "do not scale" instructions |

A drawing with a stale revision number in your van is worse than no drawing at
all, because you will trust it.

## Line types and what they mean

AS 1100 grades lines by both **thickness** and **style**. Thick continuous
lines carry the visible shape; nearly everything else is thin.

| Line style | Weight | Used for |
|---|---|---|
| Continuous | Thick | Visible outlines and edges — the shape of the object |
| Continuous | Thin | Dimension lines, projection (extension) lines, leader lines, hatching, short break lines |
| Continuous with a zigzag, or freehand | Thin | Long break lines, where a length has been cut out of a long part |
| Dashed | Thin | Hidden outlines and edges — features behind or inside the material |
| Chain (long dash, short dash) | Thin | Centre lines, axes of symmetry, circle centres, pitch lines, pitch circles, paths of motion |
| Chain, thickened at each end and at every change of direction | Thin with thick ends | Cutting plane lines, labelled at the ends, for example X–X |
| Chain, double-dashed | Thin | Outlines of adjacent parts, extreme positions of moving parts, and material to be removed |
| Chain | Thick | A surface requiring special treatment or a special requirement |

### Centre lines

Chain lines mark the axis of anything symmetrical: the centre of a shaft, the
centre of a hole, the mirror line of a symmetrical bracket. They also show
pitch circles — the imaginary circle a ring of holes sits on — and paths of
motion, such as the arc a swinging damper blade sweeps through. A centre line
is not part of the object; you cannot measure to the metal from it unless a
dimension says so.

### Hidden detail

Thin dashed lines show edges that exist but are not visible from that
direction: the bore through a boss, a recess in the back of a casting, a duct
running above a ceiling. On architectural and services drawings, dashed lines
very often mean "above the ceiling" or "below the floor", so check the legend.

### Break lines

If a part is 3 m long and uniform, drawing it full length wastes the sheet.
A break line lets the middle be removed and the two ends brought together, with
the true length stated as a dimension:

- **short break lines** — a thin continuous irregular line, used for a short
  interruption;
- **long break lines** — thin lines with a zigzag, used to shorten long parts;
- **"S" break lines** — the curved pair used on round bar, tube and pipe, which
  also tells you at a glance that the section is round.

### Section hatching

Where the object has been cut, the cut material itself is shown with **section
lining** (cross-hatching): thin continuous lines, usually at 45 degrees. Where
several parts are cut in the same view, the hatch angle or spacing is varied
between them so you can see where one component ends and the next begins.

### Dimension, projection and leader lines

Three thin lines work together to state a measurement:

- **projection lines** (also called extension lines) run out from the exact
  points on the object being measured, defining the limits of the dimension;
- **dimension lines** run between them, parallel to the direction in which the
  measurement is taken, with arrowheads at each end and the value on the line;
- **leader lines** run from a feature to a note about it — for example a line
  from a hole to the note "4 holes Ø10 on 140 PCD".

Because these are thin and the object outline is thick, your eye separates the
object from the information about it without any effort. That is the whole
point of the line grading.

## Field sketching

When you sketch a bracket or a duct transition for a workshop, apply the same
grammar even in freehand: a heavier line for the outline, dashed for hidden
detail, thin chain for centres, and thin lines for dimensions with arrowheads.
Add the material, the quantity, your name, the date, the job, and which way is
up. A sketch that a fitter has to phone you about has not done its job.

## What to remember

- Title block first: number, revision, scale, projection symbol, sheet size.
- Thick continuous equals visible shape; everything else is thin.
- Dashed equals hidden; thin chain equals centres, pitch lines and paths.
- Chain with thick ends equals a cutting plane, labelled at both ends.
- Hatching marks cut material, varied between adjacent parts.
- Projection, dimension and leader lines are all thin, and are information
  about the object, not part of it.
`,
        quiz: [
          {
            q: "You are handed a mechanical services layout on site. What should you read first?",
            options: [
              "The duct sizes nearest the plantroom",
              "The title block — drawing number, revision, scale, projection symbol and sheet size",
              "The section marks",
              "The hatching legend",
            ],
            answer: 1,
            explain: "The title block tells you whether you are even holding the right sheet at the right revision, and at what scale and sheet size it can be trusted. Reading the duct sizes off a superseded revision (A) is precisely the mistake this habit prevents.",
          },
          {
            q: "A thin chain line with the ends thickened and labelled X at each end indicates:",
            options: [
              "A centre line of symmetry",
              "A hidden edge behind the material",
              "A cutting plane, showing where the object has been sectioned",
              "Material that is to be removed",
            ],
            answer: 2,
            explain: "Thickening at the ends and at every change of direction distinguishes the cutting plane from an ordinary centre line, which is thin throughout. Material to be removed (D) uses a chain double-dashed line, a different convention again.",
          },
          {
            q: "Why are visible outlines drawn thick while dimension and projection lines are drawn thin?",
            options: [
              "Because thick lines print more reliably",
              "So the reader's eye separates the shape of the object from the information about it",
              "Because AS 1100 requires all measurements to be faint",
              "So that hidden detail can be added later",
            ],
            answer: 1,
            explain: "The grading of line weight is a readability device: the object jumps out of the sheet and the annotation recedes. Without it, dimensions, projection lines, hatching and outlines would compete on equal terms and the drawing would be hard to read at a glance.",
          },
          {
            q: "What does an 'S' break line on a long member tell you, beyond the fact that length has been removed?",
            options: [
              "That the member is round in section — bar, tube or pipe",
              "That the member is to be cut on site",
              "That the drawing is not to scale",
              "That the member is hollow structural steel",
            ],
            answer: 0,
            explain: "The paired curved 'S' break is the convention for round sections, so it carries shape information as well as shortening the view. A plain irregular short break or a zigzag long break carries no such implication.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "dimensioning-and-projection",
        title: "Dimensioning, and first versus third angle projection",
        minutes: 11,
        simple: "Numbers on a drawing come in two flavours: how big something is, and where it sits. Both are in millimetres and the unit is not written, so a 1590 is 1590 mm. The other thing to check is the little cone symbol near the title block, because it tells you whether the side views were placed on the same side you looked from or flipped to the opposite side.",
        refs: REFS_AS1100,
        content: `
Once you can read the linework, the next job is reading the numbers — and
knowing where the views were placed relative to one another.

## Two kinds of dimension

Every dimension on a drawing is doing one of two jobs.

| Type | What it fixes | Examples on a condensing unit drawing |
|---|---|---|
| Size dimension | How big something is | Overall height 1080, overall width 1590, overall depth 800, slot 6 × 16 |
| Location dimension | Where a feature sits relative to something else | 108 from each end to the first fixing hole, 1374 between fixing hole centres |

Most drawings carry both, and you frequently need to combine them. If a
manufacturer's plan view gives you 108 to the first hole, 1374 between hole
centres and 108 to the far end, you can add them: 108 + 1374 + 108 = 1590, which
should equal the stated overall width. When those two routes disagree, the
drawing has an error and you ring the person named in the title block. Doing
that check before you drill the plinth costs a minute; not doing it costs a
plinth.

## The conventions you must know

- **Units are millimetres.** Because millimetres are the accepted norm in
  mechanical and construction drawing, the unit is not written after the
  numeral. "1590" means 1590 mm. If a drawing uses metres — some site plans do
  — it will say so in the notes.
- **Decimals.** A millimetre is already small, so dimensions rarely go past two
  decimal places except on precision work. The decimal is shown with a dot,
  as in 50.55.
- **Ø before a numeral means diameter.** Ø10 is a 10 mm diameter hole.
- **R before a numeral means radius.** R8 is an 8 mm radius arc.
- **PCD** means pitch circle diameter — the diameter of the imaginary circle
  that a ring of holes is set out on. A note reading "4 holes Ø10 on 140 PCD"
  means four 10 mm holes, equally spaced, on a 140 mm circle. That is the note
  you will meet on flanges, fan hubs and motor mounts.
- **Dimensions take precedence over scaling.** If a figure is written on the
  drawing, use it, even if it does not agree with your scale rule. Many
  drawings carry a blunt "DO NOT SCALE" note for exactly this reason.
- **But you may have to scale.** Dimensions are often missing or, occasionally,
  wrong. Where no dimension is given, a technician scales the drawing with a
  scale rule to get a working figure — and then verifies it on site before
  committing to anything expensive.

## Projection: where the other views were put

An orthographic drawing shows several views of the same object. There are two
systems for arranging them, and they are mirror images of one another.

**Third angle** is the system recommended by AS 1100, and it is what is used in
Australia and the United States. **First angle** is used mainly in Europe and
Asia, and has not been official Australian practice for a very long time — but
you will still meet it on imported equipment drawings.

The rule is simple once you hold on to it:

- In **third angle**, each view is placed on the **same side** as the direction
  you looked from. Look at the object from the left, and the resulting view is
  drawn on the left of the front view.
- In **first angle**, each view is placed on the **opposite side** from the
  direction you looked from. Look from the left, and the view lands on the
  right.

Applying third angle to a front view (call it View A) at the centre:

1. The view from the left of A is drawn to the left of A.
2. The view from the right of A is drawn to the right of A.
3. The view from above A is drawn above A.
4. The view from underneath A is drawn below A.
5. The view from the rear is drawn out on the far right.

How many views you get depends on how complicated the object is. A flat plate
may need one; a compressor bracket may need three; a sheet metal transition
piece may need four plus a development.

Two alignment facts follow automatically and are worth using as a check when
reading a drawing:

- The end views are the same **height** as, and horizontally in line with, the
  front and rear views.
- The top and bottom views are the same **width** as, and vertically in line
  with, the front view.

If a feature does not line up across views, you have either misread which view
is which, or the drawing is wrong.

## The projection symbol

Because getting this backwards mirrors the whole object, drawings carry an
internationally recognised symbol, usually in or beside the title block. Both
symbols show the same object — a truncated cone — drawn as a tapered side view
next to its round end view. The two symbols are mirror images: which side the
round view sits on tells you which system is in use, following exactly the
same rule as the views themselves. Learn to recognise the pair, and check it
before you interpret any imported drawing.

>! Getting the projection system wrong mirrors everything: left-hand and
>! right-hand connections swap, service access ends up on the wrong side, and
>! a bracket comes back from the workshop as a mirror image that will not fit.
>! On any drawing of foreign origin, find the projection symbol before you order
>! anything.

## How projections are constructed

Understanding how a draftsperson builds the views makes reading them much
easier, and lets you complete a missing view yourself from a field sketch.
Working from a front view and an end view to produce the top view:

1. Project enough vertical lines up from the front view and horizontal lines
   across from the end view to establish the outline. Darken them lightly.
2. Project the centre lines through, so hole positions can be placed.
3. Project the remaining lines — horizontals from the end view, verticals from
   the front view — to fill in the detail.
4. Clean out the construction lines and line in the finished view.

All vertical edges in the front view project vertically; all horizontal edges
in the end view project horizontally.

### Turning a projection through 90 degrees

When the missing view sits where a dimension cannot be projected straight
across, the dimension has to be turned through 90 degrees. This is done with a
compass or a 45 degree set square:

1. Project the top surface of the front view horizontally across the page.
2. Draw a vertical axis X–X to represent that surface in the end view,
   positioning it so the end view is evenly spaced on the sheet.
3. Project all horizontal lines across from the front view and swing them
   through 90 degrees with a compass, or reflect them off a 45 degree mitre
   line.
4. Project vertically to carry those dimensions into the end view.

The point at which the projection changes direction sets the position of the
missing view.

## What to remember

- Size dimensions say how big; location dimensions say where. Cross-check them.
- Millimetres are assumed and not written; Ø is diameter, R is radius, PCD is
  pitch circle diameter.
- Written dimensions beat scaled ones; scale only when there is no dimension,
  and verify on site.
- Third angle is Australian practice: the view goes on the side you looked from.
- First angle flips every view to the opposite side; find the symbol first.
- Views must align — heights across, widths up and down — which is a free check
  on your reading.
`,
        quiz: [
          {
            q: "A note on a fan hub reads '4 holes Ø10 on 140 PCD'. What does it mean?",
            options: [
              "Four holes of 140 mm diameter spaced 10 mm apart",
              "Four 10 mm diameter holes equally spaced on a 140 mm diameter pitch circle",
              "Four holes with a 10 mm radius on a 140 mm square",
              "Four holes drilled 140 mm deep with a 10 mm pilot",
            ],
            answer: 1,
            explain: "Ø marks a diameter, so Ø10 is the hole size, and PCD is the pitch circle diameter — the imaginary circle the hole centres sit on. R rather than Ø would have indicated a radius (C), which is a different measurement entirely.",
          },
          {
            q: "A drawing shows a dimension of 2400 for a wall, but your scale rule reads about 2360. Which do you use?",
            options: [
              "The scaled figure, because it reflects what was drawn",
              "The average of the two",
              "The written dimension of 2400, because dimensions take precedence over scaling",
              "Neither; the drawing must be reissued before any work proceeds",
            ],
            answer: 2,
            explain: "Written dimensions govern, which is why many drawings carry a 'do not scale' note — printing, copying and drafting tolerance all corrupt scaled measurements. Scaling is a fallback for where no dimension has been given, not a way to second-guess one that has.",
          },
          {
            q: "In third-angle projection, where is the view seen from the left of the front view placed?",
            options: [
              "To the right of the front view",
              "To the left of the front view",
              "Above the front view",
              "On the far right, beyond the rear view",
            ],
            answer: 1,
            explain: "Third angle places each view on the same side as the direction of viewing, which is why it feels intuitive once you know the rule. First angle does the opposite, putting the view from the left over on the right — the reason a projection symbol exists at all.",
          },
          {
            q: "Why must a technician check the projection symbol on an imported equipment drawing?",
            options: [
              "Because imported drawings use inches",
              "Because first-angle layout mirrors the views, so left-hand and right-hand features can be read backwards",
              "Because the symbol contains the scale",
              "Because first-angle drawings omit hidden detail",
            ],
            answer: 1,
            explain: "First and third angle are mirror arrangements of the same views, so reading one as the other reverses the sides of everything — connections, access panels, handing of a bracket. Units (A) are a separate check, made from the title block notes.",
          },
          {
            q: "On an orthographic drawing, which alignment check confirms you have identified the views correctly?",
            options: [
              "All views must be the same size",
              "End views share the height of, and line up horizontally with, the front view; top and bottom views share its width and line up vertically",
              "The top view must be directly to the right of the front view",
              "Hidden detail must appear in every view",
            ],
            answer: 1,
            explain: "Orthographic views are projected from one another, so heights carry across horizontally and widths carry up and down. If a feature fails to line up between views you have either misread the views or found an error in the drawing.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "scales-and-scale-calculations",
        title: "Scales and scale calculations",
        minutes: 13,
        simple: "A building will not fit on a sheet of paper, so drawings shrink it by a fixed ratio. At 1:100, every millimetre on the paper stands for 100 mm on site, so a 47 mm line is 4.7 m of real wall. Multiply to go from paper to reality, divide to go the other way. It is the same idea as a road map, just with tidier numbers.",
        refs: REFS_AS1100,
        content: `
Drawing sheets are a fixed size and buildings are not, so almost every drawing
you will handle has been reduced. Small components go the other way and are
drawn larger than life for clarity. The scale is the ratio between what is on
the paper and what exists in the world, and it is stated in the title block.

The key property is that a scale drawing is **the same shape** as the object —
every length is reduced or enlarged by the same factor, so proportions are
preserved. That is what lets you measure one length and trust another.

## The two calculations

A scale is written as **drawing : object**.

- **Reduction scale, for example 1:50.** One unit on the paper represents 50
  units on the object.
  - Paper to real: real length = measured length × 50
  - Real to paper: drawing length = real length ÷ 50
- **Enlargement scale, for example 5:1.** Five units on the paper represent one
  unit on the object.
  - Paper to real: real length = measured length ÷ 5
  - Real to paper: drawing length = real length × 5

Note the wording used on drawings: a scale of 1 mm to 10 mm, written 1:10,
means 1 mm on the drawing represents 10 mm on the object.

## Scales recommended by AS 1100

| Purpose | Recommended scales |
|---|---|
| Reductions | 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200 |
| Enlargements | 2:1, 5:1, 10:1 |

And the scales you will actually meet in the construction industry:

| Drawing | Typical scale |
|---|---|
| Floor plans | 1:100, 1:50 |
| Elevations | 1:100, 1:50 |
| Sections | 1:100, 1:50 |
| Site plans | 1:500, 1:200 |
| Details | 1:20, 1:10, 1:5, 1:2, 1:1 |

A scale rule carries several of these edges already divided, so you can read
real dimensions directly without doing arithmetic — provided you use the right
edge. Reading a 1:100 plan on the 1:200 edge halves everything you measure, and
the mistake is invisible until something does not fit.

## Worked example 1 — reading a length off a floor plan

A floor plan is drawn at **1:100**. You measure a plantroom wall with a scale
rule and get **47 mm** on the paper.

- real length = measured length × scale factor
- real length = 47 × 100 = 4700 mm
- real length = **4.70 m**

## Worked example 2 — going the other way

You need to check whether a coolroom 4.8 m long will fit in a space shown on a
**1:50** plan. How long will the coolroom be on the paper?

- drawing length = real length ÷ scale factor
- drawing length = 4800 ÷ 50 = **96 mm**

Now measure the space on the drawing. If the available run measures 91 mm, the
real space is 91 × 50 = 4550 mm, and the coolroom does not fit — you are
250 mm short, and you have found it in the office rather than on a truck.

## Worked example 3 — a site plan

On a **1:500** site plan, the distance from the loading dock to the proposed
condensing unit compound measures **62 mm**.

- real length = 62 × 500 = 31 000 mm = **31 m**

That is the number you use to work out cable and pipe runs, and to decide
whether a crane can reach.

## Worked example 4 — an enlargement

An expansion valve orifice with a real diameter of **1.6 mm** is shown on a
detail drawn at **5:1**.

- drawing length = real length × 5 = 1.6 × 5 = **8 mm**

Enlargements exist for exactly this reason: at full size, a 1.6 mm orifice on
paper is a dot with no room for dimensions or leader lines.

## Worked example 5 — estimating a pipe run for ordering

A split system is to be installed. From the **1:100** floor plan, the liquid
and suction lines run in three straight legs measuring **38 mm**, **74 mm** and
**21 mm** on the paper. From the **1:50** section, the vertical rise from the
ceiling space to the roof-mounted condensing unit measures **64 mm**.

Horizontal runs, at 1:100:

- 38 + 74 + 21 = 133 mm on paper
- 133 × 100 = 13 300 mm = 13.30 m

Vertical rise, at 1:50 (different sheet, different scale — always check):

- 64 × 50 = 3200 mm = 3.20 m

Total measured route:

- 13.30 + 3.20 = **16.50 m**

Now add a practical allowance for offsets around other services, the bends at
each end, and connection tails. At 10 per cent:

- 16.50 × 1.10 = 18.15 m

So you order a **20 m** coil per line and expect to trim it. Note two habits in
that example: the two measurements came off drawings at different scales, and
the scaled figure was treated as the starting point rather than the answer.

## Worked example 6 — comparing scales

A wall detail is drawn at **1:5** while the floor plan it comes from is at
**1:100**. How much larger is the detail?

- 100 ÷ 5 = **20 times larger**

That is why a detail can show a 25 mm cavity, a flashing and a sisalation
membrane that are simply invisible on the plan. Conversely, remember that
material hatching on a section is generally not shown at scales smaller than
1:50 — so the absence of a hatch pattern on a 1:100 plan tells you nothing
about the wall construction.

## Worked example 7 — checking a printed drawing before you trust it

Drawings get printed at reduced size, photocopied and emailed as PDFs. Any of
those can change the scale without changing the number in the title block. Test
it against a known dimension.

A wall is dimensioned **3600** on a plan whose title block says **1:100**. At
that scale it should measure 3600 ÷ 100 = 36 mm on the paper. Your rule says it
measures **34 mm**.

- print factor = 34 ÷ 36 = 0.944, so the sheet has been printed about 5.6 per
  cent small — very likely an A1 original reduced to A3.
- Any dimension you scale off it will be about 5.6 per cent short.
- Correction factor = 36 ÷ 34 = 1.059. A run measuring 50 mm is therefore
  50 × 1.059 × 100 = 5295 mm, not the 5000 mm you would have read.

Better still, print the sheet at full size, or work from written dimensions.

>! Never cut pipe, order a crane or core a wall on the strength of a scaled
>! dimension from a reduced print. Scale to plan and to price; measure on site
>! to commit. The cost of being wrong is a hole in the wrong place in someone
>! else's building.

## What to remember

- Scale is drawing : object. Multiply by the factor to go from paper to site,
  divide to go from site to paper.
- Reductions 1:2 to 1:200 and enlargements 2:1, 5:1, 10:1 are the AS 1100 set.
- Plans, elevations and sections at 1:100 or 1:50; site plans 1:500 or 1:200;
  details down to 1:1.
- Different sheets in one set are at different scales — check each title block.
- Verify the print with a known dimension before scaling anything off it.
- Add a realistic allowance to scaled pipe and duct runs before ordering.
`,
        quiz: [
          {
            q: "On a 1:200 site plan, a run measures 85 mm. What is the real distance?",
            options: [
              "0.425 m",
              "17 m",
              "1.7 m",
              "170 m",
            ],
            answer: 1,
            explain: "Real length = measured × scale factor = 85 × 200 = 17 000 mm = 17 m. The common error is dividing instead of multiplying (A), which is the calculation you would use to go the other way — from a real dimension to the length it occupies on paper.",
          },
          {
            q: "A coolroom panel is 2400 mm long. How long will it appear on a 1:50 plan?",
            options: [
              "120 mm",
              "48 mm",
              "4.8 mm",
              "24 mm",
            ],
            answer: 1,
            explain: "Drawing length = real length ÷ scale factor = 2400 ÷ 50 = 48 mm. Multiplying by 50 instead would give 120 m of paper, which is the sanity check that tells you the operation is the wrong way round.",
          },
          {
            q: "A wall dimensioned 3600 on a 1:100 plan measures only 34 mm on your printed sheet instead of 36 mm. What should you conclude?",
            options: [
              "The wall has been built shorter than drawn",
              "The sheet has been printed at reduced size, so every scaled dimension will be about 6 per cent short",
              "The drawing is at 1:200",
              "The scale rule is faulty and should be discarded",
            ],
            answer: 1,
            explain: "The written dimension is the truth and the paper is the suspect: 34 ÷ 36 = 0.944, so the print is about 5.6 per cent small, typically an A1 original run off on A3. At 1:200 (C) the same wall would measure 18 mm, which is nothing like the observation.",
          },
          {
            q: "Why are details commonly drawn at 1:5 when the plan they come from is at 1:100?",
            options: [
              "Because AS 1100 requires all details at 1:5",
              "Because the detail is 20 times larger, making cavities, flashings and membranes visible and dimensionable",
              "Because 1:5 drawings do not need dimensions",
              "Because details are always drawn full size",
            ],
            answer: 1,
            explain: "100 ÷ 5 = 20, so the detail shows the same construction twenty times bigger — enough room for a 25 mm cavity, a flashing and an insulation layer to be drawn and labelled. On the 1:100 plan those elements are thinner than the linework.",
          },
          {
            q: "You scale a pipe route from a plan and get 16.5 m. What is the sensible next step before ordering?",
            options: [
              "Order exactly 16.5 m to avoid waste",
              "Order double the length as a matter of course",
              "Add a realistic allowance for offsets, bends and connection tails, then verify the route on site",
              "Ignore the scaled figure entirely and guess from experience",
            ],
            answer: 2,
            explain: "A scaled route is a straight-line planning figure; real pipework detours around other services and needs tails at each end, so an allowance of roughly 10 per cent is normal before rounding up to a stock length. Ordering the bare scaled figure (A) reliably leaves you short.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "drawing-types",
        title: "Drawing types: orthographic, pictorial, sectional, detail, assembly and schematic",
        minutes: 13,
        simple: "Different drawings answer different questions. Flat views tell you exact sizes, a 3D-looking view tells you what the thing looks like, a cut-through view shows the inside, a detail zooms in, an exploded view names the parts, and a schematic ignores where things are and shows only how they connect. Knowing which drawing answers your question saves a lot of time.",
        refs: REFS_AS1100,
        content: `
No single drawing can do everything. A set of drawings gives you several views
of the same reality, each answering a different question. Here is the family,
and what each member is for.

| Drawing type | Answers the question | Typical use in this trade |
|---|---|---|
| Orthographic | Exactly how big, and where? | Fabrication of brackets, plinths, duct pieces, plantroom layouts |
| Pictorial (isometric) | What does it look like? | Explaining an assembly, pipework isometrics, sales and manuals |
| Sectional | What is inside it? | Component internals, building construction through a wall |
| Detail | Exactly how does this bit go together? | Flashings, penetrations, supports, at 1:20 to 1:1 |
| Assembly and exploded | What are the parts, and in what order? | Parts catalogues, ordering spares, rebuild sequence |
| Schematic | What connects to what, and in what order? | Refrigeration piping and electrical control circuits |

## Orthographic projection

An orthographic drawing is a set of views of one object, each showing the
shape, size and features of one face, and each positioned so that information
can be projected from one view to the next.

The classic teaching model is a cardboard box: imagine cutting the edges and
folding all six faces flat onto the table. You now have a top, bottom, front,
rear and two end views laid out around the front view — all true shapes, all
measurable, none of them showing depth.

Two structural facts follow, and they are the ones you use when reading:

- End views share the height of the front and rear views and line up with them.
- Top and bottom views share the width of the front view and line up with it.

Orthographic views are the drawings you actually build from, because every
length in them is true length.

## Pictorial projection — isometric

The weakness of orthographic views is that they are hard to visualise. Nobody
looks at three flat rectangles and instantly sees a condensing unit. Pictorial
projections solve that by showing three faces of the object at once, so it
looks three-dimensional.

The most common is **isometric**. Start from the orthographic position, rotate
the object, then tilt it forwards. Three faces become visible at once and the
viewer immediately grasps the shape. In an isometric drawing, vertical edges
stay vertical, and the two sets of horizontal edges are drawn at 30 degrees to
the horizontal; lengths along all three axes are drawn to the same scale, which
is what makes isometric drawings measurable as well as pictorial.

Pipework isometrics are worth knowing about specifically: on large jobs the
refrigerant or chilled water pipework is issued as a set of isometric sketches
with lengths, fittings and valve numbers, because a plan view cannot show a
riser without everything overlapping.

## Sectional drawings

Sometimes a projected view simply cannot convey what is inside a complicated
object. The answer is to imagine the object cut through and one half taken
away, then draw the exposed face.

On the cut surface, solid material is shown with **section lining**, or
cross-hatching — thin lines usually at 45 degrees. Where a section passes
through several components at once, the hatch angle or spacing is varied so
each part reads separately. That is how a section through, say, the magnetic
clutch on an automotive air-conditioning compressor lets you see the pulley,
the armature, the clutch coil, the hub and the rotor plate as distinct pieces
rather than as one blob of metal.

The plane along which the object was cut is shown on the other view as a
cutting plane line, labelled at each end — commonly X–X — with arrows showing
the direction of view.

## Detail drawings

A detail is an enlarged view of one small part of a larger drawing, drawn at a
much bigger scale so that construction can be shown. On building drawings the
plan may be at 1:100 and the elevation at 1:50, while details at nominated
points are drawn at 1:5. At that scale you can see the two leaves of brickwork,
the cavity, the flashing, the insulation and the stud work — none of which is
visible on the plan.

For a refrigeration technician, details matter most at penetrations, supports
and interfaces: how a pipe passes through a wall, how a roof-mounted unit is
supported and flashed, how a coolroom panel meets a slab.

## Assembly and exploded views

Because drawings communicate so much faster than words, manufacturers use them
in parts catalogues. An **exploded view** pulls a component apart along its
assembly axes, numbers every part with a leader, and lists the numbers in a
table underneath. An exploded view of a compressor, for example, will separately
identify the stator and rotor, crankshaft, connecting rod and piston
assemblies, piston rings, valve plate assembly, suction and discharge valves,
cylinder head and gaskets, oil sight glass assembly, terminal plate and
terminal box, and the capacity control valve.

When you order from one:

- Confirm the equipment model and serial number first, then use the catalogue
  that matches that model.
- Quote the part number and the description, not one or the other.
- If you are not sure the catalogue is current, ring the manufacturer's
  representative before ordering. Superseded catalogues are the source of a
  remarkable number of wrong parts.

## Schematic drawings

A schematic deliberately throws away physical position and scale, and shows
only function and connection. A refrigeration piping schematic puts the
compressor, condenser, receiver, drier, sight glass, expansion valve and
evaporator in a logical loop with the valves and controls in sequence — it does
not tell you the condenser is on the roof and the evaporator is 40 m away.

Electrical control circuits work the same way. A ladder diagram lays each
control circuit out as a horizontal rung between two supply rails, so you can
see at a glance every device that must close before a contactor coil can pull
in.

!FIG[ladder-rung]

Use the right one for the question: schematics for sequence and fault finding,
layouts and orthographic drawings for where things physically go.

## What to remember

- Orthographic for true sizes; pictorial for understanding shape.
- Isometric: rotate then tilt; verticals stay vertical, horizontals at 30
  degrees, all three axes to the same scale.
- Sections show the inside; hatching marks cut material and varies between
  parts; the cutting plane is labelled on the other view.
- Details are the same construction at a much larger scale — read them at
  penetrations and supports.
- Exploded views name and number parts; match the catalogue to the model and
  check it is current.
- Schematics show connection and sequence, never position.
`,
        quiz: [
          {
            q: "Which drawing type would you reach for to work out the order in which safety controls interrupt a compressor contactor?",
            options: [
              "An isometric view",
              "A schematic or ladder diagram",
              "A sectional drawing",
              "A site plan",
            ],
            answer: 1,
            explain: "Schematics discard physical position and show only connection and sequence, which is exactly what fault finding a control circuit requires. An isometric (A) would tell you what the panel looks like but nothing about which device opens first.",
          },
          {
            q: "What is the purpose of varying the hatch angle or spacing between adjacent parts in a sectional view?",
            options: [
              "To indicate different materials only",
              "To show which surfaces were machined",
              "So that separate components cut by the same section plane can be distinguished from one another",
              "To indicate the direction of assembly",
            ],
            answer: 2,
            explain: "Where one cutting plane passes through several parts, uniform hatching would make them read as a single mass of metal. Varying the hatching separates pulley from armature from hub. Material identification by hatch pattern is a related but separate convention used on building sections.",
          },
          {
            q: "In an isometric drawing, how are the horizontal edges of the object drawn?",
            options: [
              "At 45 degrees to the horizontal",
              "At 30 degrees to the horizontal, with vertical edges remaining vertical",
              "Horizontally, with verticals at 30 degrees",
              "At 60 degrees, with all lengths foreshortened differently",
            ],
            answer: 1,
            explain: "Isometric keeps verticals vertical and sets the two horizontal directions at 30 degrees, with the same scale used along all three axes — which is what allows an isometric to be measured as well as looked at. Differing foreshortening along each axis (D) describes other pictorial systems, not isometric.",
          },
          {
            q: "You are ordering a valve plate assembly from an exploded parts drawing. What is the most important precaution?",
            options: [
              "Order the next size up in case of variation",
              "Use the numbers from any catalogue for that brand",
              "Confirm the equipment model and serial number, use the matching catalogue, and check the catalogue is current with the manufacturer's representative",
              "Quote the part description only, since numbers change",
            ],
            answer: 2,
            explain: "Parts numbering is model-specific and catalogues are superseded regularly, so a number that is right for a similar-looking machine can be wrong for yours. Quoting the number together with the description gives the supplier a cross-check, which is why relying on description alone (D) is weaker.",
          },
          {
            q: "Why do building details get drawn at 1:5 when the plan is at 1:100?",
            options: [
              "Because details show a different building",
              "Because the elements that matter — cavities, flashings, insulation, studwork — are thinner than the linework at plan scale",
              "Because 1:5 is the only permitted detail scale",
              "Because plans may not carry dimensions",
            ],
            answer: 1,
            explain: "A 1:5 detail is twenty times larger than a 1:100 plan, which is the difference between a construction that can be drawn and dimensioned and one that vanishes into the line thickness. Details are drawn at a range of scales — 1:20, 1:10, 1:5, 1:2, 1:1 — not just 1:5.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "architectural-drawings-and-symbols",
        title: "Architectural drawings: plans, elevations, sections and symbols",
        minutes: 13,
        simple: "Building drawings are the same idea as engineering views with different names: the top view is the plan, the side views are elevations, and a cut-through is a section. A floor plan is really a horizontal slice about 1250 mm above the floor, which is why you see doorways and window openings. Because there is so much detail, almost everything is drawn as a symbol with a legend to translate it.",
        refs: REFS_SITE,
        content: `
Architectural drawing is orthographic projection with its own vocabulary. In
engineering, the inside of an object usually matters only where a section is
needed. In a building, the inside is the whole point — that is where the people
and your plant go — so the conventions are built around showing interior layout.

## The names change

| Engineering term | Architectural term |
|---|---|
| Top view | Plan |
| Front view | Front elevation |
| Right and left views | Right and left elevations |
| Rear view | Rear elevation |

An elevation is the geometrical drawing of the upright parts of a structure —
what you would see standing square in front of that face. Elevations are often
named by orientation instead of position: north elevation, west elevation and
so on. Get into the habit of finding the **north point** on the plan, because
solar load, condenser location and shading all depend on which way a face
looks.

## The floor plan is a section

Plans and elevations tell you nothing about the interior layout, so the floor
plan is drawn as a horizontal section — a cut made parallel to the floor at
about **1250 mm above it**, viewed from above. That single convention explains
most of what a floor plan looks like:

- walls appear as cut material, so you see their thickness and construction;
- doors and windows appear as openings, because the cut passes through them;
- anything above the cut line — a bulkhead, a ceiling-mounted unit, a beam — is
  shown dashed, if it is shown at all;
- benches, fixtures and floor wastes below the cut appear in plan.

The other sheets in a set complete the picture:

| Drawing | What it gives you |
|---|---|
| Site plan (1:500 or 1:200) | The building on its block: boundaries, levels, access, services, where a crane or truck can stand |
| Floor plan (1:100 or 1:50) | Room layout, wall positions and construction, door and window openings |
| Elevations (1:100 or 1:50) | Heights, roof pitch, eaves, external finishes, where an outdoor unit can sit |
| Section (1:100 or 1:50) | A vertical cut, usually along a marked line such as X–X, giving ceiling and floor levels and construction build-up |
| Details (1:20 to 1:1) | Exactly how a junction is built, at nominated points |

The section is the sheet a refrigeration technician under-uses. It is where you
find real ceiling heights, the depth of the ceiling space you have to run duct
and pipe through, roof pitch, slab and footing construction, and the make-up of
the wall you are about to penetrate.

## Symbols, and why they exist

There is far too much information on a floor plan to write out in words, so
almost everything is a symbol — an abbreviation drawn as a picture. Symbols
work only if the reader knows the convention or the drawing carries a legend to
translate them, and many symbols in daily use sit outside AS 1100.

### Door symbols

Door symbols look like small plans of the door and its swing, and they carry
information you need.

| Door arrangement shown | What the symbol tells you |
|---|---|
| Single swing, hinged on the left or on the right | Which way the door opens, and therefore where the leaf lands when open |
| Single double-acting door | Swings both ways — typical of kitchen and service doors |
| Pair of double-acting doors | A wide opening, trolley traffic expected |
| In-and-out pair, with or without a mullion | Whether a fixed post sits in the middle of the opening |
| Single sliding door on the face of the wall | The leaf parks on the wall face, so nothing can be mounted there |
| Single sliding door into a pocket or cavity | The wall is hollow at that point — you cannot penetrate or fix into it |
| Folding doors, centred on the track or to one side | Where the stacked leaves sit when open |

For your work, read door symbols for three things: whether the swing fouls a
proposed unit or isolator, whether the wall is solid enough to fix to, and
whether the traffic through that opening is going to wreck the air balance of
the space.

### Building material symbols on sections

Sectional views hatch the cut material to show what it is made of. Knowing the
material before you arrive decides which tools you load.

| Material group | Represented on section | What it means for a penetration |
|---|---|---|
| Masonry | Brickwork, concrete block, cut stone and masonry | Hammer drill or core drill; expect dust control and a cavity between leaves |
| In-situ and applied | Concrete, cement render | Core drill; scan for reinforcement and post-tensioning before you cut |
| Framing | Stud walls, timber, particle board | Easy to penetrate, but locate studs and check for concealed services |
| Structural | Structural steel | Never drill or cut without engineering approval |
| Ground | Earth, fill, hardcore, rock | Affects trenching, footings and underground services |
| Other | Glass, insulation | Glass is not penetrable; insulation indicates a sealed panel needing a proper sleeve and seal |

Note the scale limitation: material hatching is generally not shown at scales
smaller than 1:50. On a 1:100 plan the absence of a hatch pattern says nothing
about the construction, so go to the section or the detail.

### Air conditioning symbols

Mechanical services drawings carry their own symbol set. Grouped by what they
do:

| Group | Items you will meet |
|---|---|
| Air terminals | Supply air and return air fittings, in wall type and ceiling type |
| Ductwork | General ducting, supply ducting visible and hidden, return ducting visible and hidden, flexible ducting, air grilles |
| Dampers | Single-blade damper, opposed multi-blade damper, parallel multi-blade damper, single-blade fire damper |
| Air treatment plant | General fan, propeller fan, air filter, air cooler, humidifier, silencer, compressor |
| Duct treatment | Thermal insulation, acoustic insulation, direction of flow arrows |
| Pipe fittings | Pump, trap, general strainer, Y-type strainer |
| Valves | General valve, angle valve, three-way shut-off and regulating valve, diaphragm valve, globe, gate, butterfly, ball and non-return valves, pressure safety relief valve, vacuum safety relief valve, reducing valve |

The distinction between visible and hidden ducting matters on site: hidden
means it is above a ceiling or behind a bulkhead, which changes access,
support, insulation and whether you need a ceiling contractor.

A services layout carries numbers as well as symbols. Expect duct sizes in
millimetres written as width by depth (for example 300 × 150), air quantities
in litres per second at each outlet, neck sizes for diffusers, and notes
covering things like which ducting runs within the ceiling space, which is
fixed to the underside of the ceiling, relief paths through door grilles, and
which zones share a bypass control.

### Abbreviations

Abbreviations are as common as symbols, and again the legend rules. A typical
grouping:

| Category | Common abbreviations |
|---|---|
| Air paths | S/A supply air, R/A return air, O/A outside air, E/A exhaust air, F/A fresh air |
| Water services | CHWS and CHWR chilled water supply and return, CWS and CWR condenser water supply and return, HWS hot water service |
| Levels and setout | FFL finished floor level, NGL natural ground level, RL reduced level, CL centre line, o/all overall |
| Building fabric | BWK brickwork, B/HEAD bulkhead, LVL laminated veneer lumber, CCA treated pine, DP downpipe, WIR walk-in robe, SD smoke detector |
| Drawing conventions | TYP typical, NTS not to scale, U.N.O. unless noted otherwise, TBA to be advised, PCD pitch circle diameter, DIA diameter |

Never guess an abbreviation on a drawing that carries a legend. If it is not in
the legend and you are not certain, raise it with the person named in the title
block rather than assuming.

>! Before you drill, core or cut any part of a building, confirm the
>! construction from the section or detail, check for reinforcement, structural
>! members and concealed services, and get the builder's or engineer's approval
>! for anything structural. A penetration through a post-tensioned slab tendon
>! or a fire-rated wall is a very serious and very expensive mistake.

## What to remember

- Plan, elevation and section are the architectural names for top, front and
  cut views.
- The floor plan is a horizontal section about 1250 mm above the floor.
- The section sheet gives ceiling space, heights and wall construction — read it.
- Door symbols tell you swing, fixing surface and traffic.
- Material hatching decides your tooling, and is not shown below 1:50.
- Services symbols distinguish visible from hidden ductwork, which changes the
  job entirely.
- Read the legend; symbols and abbreviations vary between offices.
`,
        quiz: [
          {
            q: "A floor plan is best understood as which kind of drawing?",
            options: [
              "A pictorial view of the building from above",
              "A horizontal section taken about 1250 mm above the floor and viewed from above",
              "An elevation of the ground floor",
              "A site plan at a larger scale",
            ],
            answer: 1,
            explain: "The floor plan is a horizontal cut, which is exactly why walls show as cut material with their thickness and why doors and windows appear as openings. Thinking of it as a photograph from above (A) leaves you unable to explain why the window is a gap rather than a pane.",
          },
          {
            q: "Which sheet should a technician consult to find the depth of the ceiling space available for ductwork and pipework?",
            options: [
              "The site plan",
              "The floor plan",
              "The section",
              "The front elevation",
            ],
            answer: 2,
            explain: "Sections are vertical cuts through the building and are where floor-to-ceiling heights, ceiling space depth, roof pitch and construction build-up appear. The floor plan (B) gives positions in two dimensions only, and cannot tell you whether a 400 mm duct will fit above the ceiling.",
          },
          {
            q: "On a 1:100 floor plan a wall shows no material hatching. What can you conclude about its construction?",
            options: [
              "It is a stud wall",
              "It is unreinforced brickwork",
              "Nothing — material hatching is generally not shown at scales smaller than 1:50, so you must check the section or detail",
              "It is a temporary partition",
            ],
            answer: 2,
            explain: "The convention is a scale limitation, not a statement about the wall: below 1:50 the hatch pattern would be unreadable so it is omitted. Reading absence of hatching as evidence of light construction is how technicians end up trying to hammer-drill a stud wall or hand-drill a concrete one.",
          },
          {
            q: "A door on the plan is drawn as a single sliding door into a pocket or cavity. Why does that matter to you?",
            options: [
              "It shows the door is fire rated",
              "It means the wall is hollow at that point, so you cannot penetrate it or fix to it there",
              "It means the room is air conditioned",
              "It indicates the swing direction",
            ],
            answer: 1,
            explain: "A cavity slider needs a hollow pocket for the leaf, so that length of wall has no solid core to fix a bracket, isolator or pipe penetration into. A face-mounted slider has a different problem — the leaf parks against the wall face, so nothing can be mounted there either.",
          },
          {
            q: "On a mechanical services layout, what does the distinction between 'visible' and 'hidden' ducting tell you?",
            options: [
              "Whether the duct is insulated",
              "Whether the duct is above a ceiling or behind a bulkhead, which changes access, support and coordination",
              "Whether the duct carries supply or return air",
              "Whether the duct is rectangular or flexible",
            ],
            answer: 1,
            explain: "Visible and hidden refer to whether the duct is exposed in the space or concealed above a ceiling, and concealment changes access, support method, insulation requirements and which other trades you must coordinate with. Supply versus return (C) and duct construction are shown by separate symbols.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "plant-setout-and-bim",
        title: "Using drawings on the job: plant setout, pipework and BIM",
        minutes: 12,
        simple: "This is where drawings earn their keep. You combine the manufacturer's dimensions with the building drawing to prove the machine fits, mark out its fixing holes, plan the pipe route and the holes through walls, and check on site that reality matches the paper. Increasingly the whole building exists as a 3D computer model instead of a pile of sheets.",
        refs: REFS_SITE,
        content: `
Reading drawings is a genuinely useful skill the first time it stops you
delivering a chiller that will not fit through the door. This lesson is the
practical end of the module: putting equipment into a building using paper.

## Start with the manufacturer's dimensions

Manufacturers publish size and weight data for exactly this purpose, usually as
a small plan and elevation with a dimension table. A typical condensing unit
table reads:

| Dimension | Value (mm) |
|---|---|
| Overall height | 1080 |
| Overall width | 1590 |
| Overall depth | 800 |
| A — end of unit to first fixing hole | 108 |
| B — between fixing hole centres, across the width | 1374 |
| C, D, E — fixing hole setout in the depth direction | 687, 37, 726 |
| Fixing slot size | 6 × 16 |

Two things to do with that table. First, cross-check it: 108 + 1374 + 108 =
1590, which matches the stated overall width, so the setout is consistent.
Second, note that the slot is 6 mm wide and 16 mm long — the 16 mm gives you a
little adjustment along one axis, and no more. Your plinth or rail setout has
to be right to within a few millimetres.

## Worked example — will it fit, and can it breathe?

The plantroom deck is drawn at **1:50**. The alcove where the condensing unit is
to go measures **42 mm** wide on the plan.

- available width = 42 × 50 = 2100 mm

The unit is 1590 mm wide, so:

- total clearance = 2100 − 1590 = 510 mm
- if centred, that is 255 mm each side

Now check that against the manufacturer's required clearances. If the data
sheet calls for 500 mm at the coil face for airflow and 600 mm at the service
end for compressor access, 255 mm each side fails on both counts — the
condenser will recirculate its own discharge air, head pressure will climb, and
nobody will be able to change a contactor without dismantling something.

You have found that in the office, for the cost of one multiplication. Raise it
as a query against the drawing, with the numbers, before anything is ordered.
Notice also that the machine physically fits but does not work — clearance, not
outline, is what determines whether plant can be installed.

## Setting out on site

1. Establish a datum — a gridline, a wall face or a level mark shown on the
   drawing — and measure everything from it, not from the last thing you
   marked. Errors accumulate when you chain measurements.
2. Transfer the fixing hole setout (A, B, C, D and E in the table above) onto
   the plinth, rails or roof frame, and check the diagonals of the rectangle
   are equal before you drill.
3. Check weight against the structure. A roof-mounted unit needs the structural
   engineer's confirmation, not your optimism, and the drawing will usually
   nominate a structural detail for the mounting.
4. Check the access route to the position using the site plan and floor plan:
   door and corridor widths, lift car dimensions, crane standing area, and
   whether the unit will pass through on a pallet trolley.
5. Allow for anti-vibration mounts, drain falls and service space in the final
   position, then mark it out and confirm it with the site supervisor before
   drilling.

## Planning pipework and penetrations

Take the route off the plan, take the rises off the section, and add an
allowance as shown in the scales lesson. Then use the drawings for the things a
tape measure on site cannot tell you:

- **What each penetration passes through.** The section or detail identifies
  the material, whether the wall is a cavity, and whether it is fire rated. A
  fire-rated penetration requires a proprietary sealing system and
  documentation, and is not something to discover after you have cored it.
- **What else is in the space.** Other services drawings — hydraulic,
  electrical, fire, structural — share the same ceiling space. Overlaying them
  is how clashes with sprinkler mains and cable trays get found.
- **Insulated outside diameter.** Pipe fits through a hole; insulated pipe with
  a sleeve and a seal needs a bigger hole. Size the penetration for the finished
  assembly.
- **Falls.** Condensate drains need continuous fall to a legal discharge point,
  and suction lines need the rises and traps that oil return demands. Both are
  set by levels you read off the section.

>! Check your drawings against the actual site before you commit. Large jobs
>! run on hundreds of sheets and mistakes get into them: walls move, revisions
>! are missed, and what is built does not always match what was drawn. Where
>! you can, verify the location physically. Never core, cut or drill structure
>! without confirming the construction and obtaining approval.

## Mark up what you actually installed

When the job differs from the drawing — and it will — mark the change on the
drawing, date it and initial it, and get it back to the office so the as-built
or as-installed drawing set is correct. The person who has to service the plant
in five years is possibly you.

## Building information modelling (BIM)

BIM replaces much of that stack of paper with a **computer-generated 3D model**
of the facility. It is used through planning, design and construction, and then
continues to serve the building through its operational life, carrying
information about the assets in it and supporting simulation of how the
building performs.

A well-documented Australian example is the solar cooling system at Echuca
Regional Hospital in Victoria, which opened in 2011 and was at the time the
largest solar cooling installation in the country. The project involved a
300 square metre solar collection field generating hot water for an absorption
chiller of 500 kW cooling capacity, replacing two electric air conditioning
systems. When the chiller is not running, the solar hot water is diverted to
the hospital's hot water needs instead.

Building services engineers and environmentally sustainable design consultants
on that project reported that BIM:

- helped determine layouts, quantities and costs;
- gave an easy visual tool for design input;
- gave the client and contractor much better visualisation of the design and
  the final installation;
- was used to order construction materials;
- fed information into the building management system.

The single biggest advantage they identified over conventional CAD was that a
change made once was automatically carried into every drawing and schedule
generated from the model. On a traditional documentation set, one change has to
be found and repeated on many sheets, and the errors that follow from missing
one — or from poor coordination between disciplines — are a large part of why
site rework happens.

For a technician, the practical consequences are:

| BIM feature | What it means on site |
|---|---|
| Single coordinated model | Clashes between duct, pipe, cable tray and structure are found before delivery |
| Automatic quantities | Material orders come from the model, so lengths and counts are more reliable |
| 3D visualisation | You can see the plantroom before you get there, including access space |
| Asset data attached to objects | Model, serial, capacity and maintenance data available to the service technician and the BMS |
| Model handover to the owner | The service history and asset register start on day one instead of being reconstructed later |

BIM does not remove the need to read drawings. Models are still issued as
drawings for site use, and the same conventions — scales, sections, symbols and
title blocks — appear on every sheet that comes out of one.

## On the job

- Get manufacturer dimensions and weight before you plan anything.
- Check clearance, not just outline; plant that fits can still fail to work.
- Set out from a datum, check diagonals, and confirm structure for weight.
- Read the section for construction and levels before planning penetrations.
- Verify the drawing against the site, and get approval for anything structural.
- Mark up changes and return them, so the as-installed set is true.
- BIM propagates a change everywhere at once; that is its main advantage over
  drawing-by-drawing CAD.
`,
        quiz: [
          {
            q: "An alcove measures 42 mm on a 1:50 plan and the condensing unit is 1590 mm wide. What is the clearance each side if the unit is centred?",
            options: [
              "About 105 mm each side",
              "About 255 mm each side",
              "About 510 mm each side",
              "It will not fit at all",
            ],
            answer: 1,
            explain: "42 × 50 = 2100 mm available; 2100 − 1590 = 510 mm total, which is 255 mm on each side when centred. The trap is quoting the total clearance (C) as though it were per side, which can make a failing arrangement look acceptable.",
          },
          {
            q: "In that example the unit physically fits, but the manufacturer requires 500 mm at the coil face. What is the correct conclusion?",
            options: [
              "Install it anyway, since it fits within the alcove",
              "The arrangement fails: with insufficient clearance the condenser will recirculate discharge air and head pressure will rise, so query the drawing before ordering",
              "Reduce the required clearance by fitting a larger fan",
              "Turn the unit 90 degrees and ignore the clearance requirement",
            ],
            answer: 1,
            explain: "Clearance, not outline, determines whether plant works: a condenser that re-ingests its own hot discharge air runs high head pressure, loses capacity and shortens compressor life. Finding this on the drawing costs a multiplication; finding it after installation costs a relocation.",
          },
          {
            q: "Why should a technician read the building section before planning a wall penetration?",
            options: [
              "Because sections show the room layout",
              "Because the section identifies the wall construction, cavity and levels, which determine the tooling, the sleeve size and whether the penetration is structural or fire rated",
              "Because the section carries the north point",
              "Because penetrations may only be shown on sections",
            ],
            answer: 1,
            explain: "The section is where construction build-up and levels appear, and those decide whether you are core drilling reinforced concrete or screwing through studwork — and whether the wall is fire rated and needs a certified sealing system. Room layout (A) is the floor plan's job.",
          },
          {
            q: "What did the project team identify as the main advantage of BIM over conventional CAD documentation?",
            options: [
              "Drawings can be printed in colour",
              "Models can be viewed on a tablet",
              "A change made once is automatically carried into all drawings and information generated, eliminating the errors of updating many sheets separately",
              "BIM removes the need for site inspection",
            ],
            answer: 2,
            explain: "The reported benefit was automatic propagation of changes across all outputs, which removes the coordination errors that come from having to find and repeat one change across a large drawing set. BIM does not remove the obligation to verify against the actual site (D).",
          },
          {
            q: "Why is it advisable to verify site drawings physically on a large project?",
            options: [
              "Because drawings are not legally binding",
              "Because the sheer number of drawings on a big job means errors, missed revisions and changes between what is drawn and what is built are common",
              "Because scale rules are unreliable indoors",
              "Because site drawings are always at 1:200",
            ],
            answer: 1,
            explain: "The volume of documentation on a large site is itself the risk: revisions get missed, disciplines disagree, and what was built can differ from what was drawn. Checking what is actually there before you commit tools or materials is the standard defence.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
