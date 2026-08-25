/* =========================================================================
   Course content, module 314 — Trade calculations.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 14 — Trade calculations.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_METHOD = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — solving problems: the written trade-calculation procedure",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — BODMAS and the order of operations",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — algebraic conventions for plus, minus and multiply, and calculator functions",
  ];

  const REFS_NUMBER = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — using decimals, place value and powers of ten",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — fractions, common denominators and reciprocals",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — percentages, significant figures and rounding off",
  ];

  const REFS_UNITS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the SI system of units, base units and derived units",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — scientific notation and engineering notation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — multiples and sub-multiples (engineering prefixes)",
    "AS ISO 1000 — SI units and recommendations for the use of their multiples",
  ];

  const REFS_ALGEBRA = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — ratios, proportion and the transformer turns ratio",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transposition of formulae and equations",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transposition by cross-multiplication and by applying a function to both sides",
  ];

  const REFS_MENS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — shapes, area and angles, including circle dimensions for cable and conduit",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — area of triangles, rhombuses and trapeziums",
    "AS/NZS 3000:2018 Wiring Rules — Clause 3.10, wiring enclosures and space factor",
  ];

  const REFS_PYTH = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Pythagoras' theorem and the 3:4:5 triangle",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — impedance and power triangles in a.c. calculations",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — scalar and vector quantities, and forces acting at 90 degrees",
  ];

  const REFS_TRIG = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — trigonometry: ratios of the lengths of sides of a right-angle triangle",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — parallelogram and polygon methods of adding vectors",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — rectangular versus polar form and vector components",
  ];

  const REFS_GRAPH = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — graphs and charts: pie, bar, histogram and line charts",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Cartesian graphs, axes, scales and co-ordinates",
  ];

  const REFS_DC = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — d.c. circuit calculations and the VIRP relationships",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — series and parallel resistance and capacitance calculations",
    "AS/NZS 3000:2018 Wiring Rules — Clause 3.6, voltage drop in consumers' mains, submains and final subcircuits",
    "AS/NZS 3008.1.1 — Selection of cables: current-carrying capacity and voltage drop",
  ];

  const REFS_POWER = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — energy, work and power",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — torque, T = Fr and P = 2 pi n T / 60",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — losses in a machine and efficiency",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — d.c. motor and generator current and voltage equations",
  ];

  const MODULES = [
    {
      id: "elec-trade-calculations",
      stream: "elec",
      title: "E.14 · Trade calculations",
      blurb: "The maths an electrical or refrigeration tradesperson actually uses: units, notation, transposition, mensuration, Pythagoras, trigonometry, graphs and costed job calculations.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "trade-calc-method",
          title: "Working through a trade calculation",
          minutes: 12,
          simple: "Every trade sum is the same eight moves: work out what is being asked, write down what you know, draw it, pick the formula, rearrange it, put the numbers in, work it out in the right order, then ask whether the answer looks sensible. Like following a recipe instead of guessing.",
          refs: REFS_METHOD,
          content: `A calculation on a job sheet is not a school exam question. It is a decision: what size cable, how many metres of conduit, will this motor trip the protective device, how much do I quote. Getting it wrong costs money, and sometimes it is a safety problem. So the trade approach to calculation is a *procedure*, not a flash of inspiration. Work the procedure and you will get the same answer today as you did last week, and so will the person checking your work.

## Three questions before you start

Before a single number goes on the page, ask:

1. **What am I being asked to provide?** The give-away words are find, calculate, determine, size, select. Underline them.
2. **What have I been given?** Usually values for quantities such as V, I, R, P, length, or a nameplate rating.
3. **What tools do I need?** Which formula or law connects the givens to the unknown, and in how many steps?

## The eight-step method

1. Read the question and identify the unknown.
2. Identify each piece of information given (the knowns).
3. List knowns and unknowns, with their unit symbols.
4. Draw a diagram and mark the known values on it.
5. Decide the steps and choose the formula or formulas.
6. Transpose the formula so the unknown is the subject.
7. Substitute the known values.
8. Calculate, and state the answer with its unit, rounded and in engineering notation.

### Worked example — the method end to end

*A component connected to a 12 V supply draws 500 mA. Find its resistance and the power it consumes.*

- Step 1-3. Unknowns: R (ohms) and P (watts). Knowns: V = 12 V, I = 500 mA = 0.5 A.
- Step 4. A single loop: source, one component, one current path.
- Step 5. Ohm's Law, I = V / R, and P = V x I.
- Step 6. Transpose: R = V / I.
- Step 7-8. R = 12 / 0.5 = 24 Ω. P = 12 x 0.5 = 6 W.

Note step 2. Converting 500 mA to 0.5 A *before* substituting is what stops the classic 1000-times error. Alternatively keep the prefix and write 12 / (500 x 10 to the power -3), which the calculator handles as 12 / 500E-3 = 24.

## Order of operations: BODMAS

A formula only means one thing if everyone evaluates it in the same order. The acronym is **BODMAS**:

| Letter | Meaning | Examples |
|---|---|---|
| B | Brackets | ( ), [ ], { } |
| O | Orders: powers, indices and roots | x squared, square root of x |
| DM | Division and multiplication, equal rank, left to right | 12 / 4, 3 x 5 |
| AS | Addition and subtraction, equal rank, left to right | 7 + 2, 7 - 2 |

You will also see BIDMAS (indices) and BOMDAS. They mean the same thing: division and multiplication share a rank, and so do addition and subtraction.

Both of these expressions come to 13, because the multiplication is done before the addition and subtraction:

- 2 + 4 x 3 - 1 = 2 + 12 - 1 = 13
- 2 - 1 + 4 x 3 = 2 - 1 + 12 = 13

### Brackets change everything

- 4 x 3 - 2 + 1 = 12 - 2 + 1 = **11**
- 4 x 3 - (2 + 1) = 12 - 3 = **9**
- 4 x (3 - 2) + 1 = 4 x 1 + 1 = **5**
- 4 x (3 - 2 + 1) = 4 x 2 = **8**

Four identical sets of digits, four different answers. This is exactly why impedance is written Z = square root of (R squared + (XL - XC) squared) with the inner bracket shown.

### Worked example — orders inside brackets

Evaluate 2 + 3 squared x (25 / 5).

- Brackets: 25 / 5 = 5, so the expression is 2 + 3 squared x 5.
- Orders: 3 squared = 9, so it is 2 + 9 x 5.
- Multiplication: 9 x 5 = 45.
- Addition: 45 + 2 = **47**.

### Worked example — a real one

A series circuit has R = 12 Ω, XL = 15 Ω and XC = 9 Ω. Find Z.

- Inner bracket first: XL - XC = 15 - 9 = 6 Ω.
- Orders: 12 squared = 144, 6 squared = 36.
- Addition: 144 + 36 = 180.
- Root: square root of 180 = 13.42 Ω.

If you had squared 12 and 15 and 9 separately and subtracted, you would have got a completely different and wrong number.

## Sign and multiplication conventions

- Two signs never sit side by side. Bracket the second: a + (-b), which simplifies to a - b.
- The multiplication sign is usually dropped in algebra. a x b is written a.b or just ab. So IR means I x R, and I squared R means (I squared) x R, not (IR) squared.

## Using the calculator without being fooled by it

Learn where these are on the model you are allowed to use in your course:

- Exponent entry: EXP, or the times-ten-to-the-x key.
- Powers and roots: x squared, x to the y, square root, cube root.
- Reciprocal: 1/x or x to the -1. This is the key that makes parallel resistance quick.
- Trigonometry and its inverses: sin, cos, tan, and sin-1, cos-1, tan-1.
- Percent, and the engineering-notation display mode (ENG), which forces the exponent to a multiple of three.

The calculator obeys BODMAS, so it will not fix a badly typed expression. 12 / 2 x 3 gives 18, while 12 / (2 x 3) gives 2. When a formula has anything on the bottom line other than a single number, put brackets around the whole denominator.

>! Never let a calculator answer overrule an obviously wrong result. A 2.5 mm squared circuit that "calculates" to 90 A, or a volt drop of 300 V on a 230 V supply, means you mis-keyed something. Recheck before you cut cable or energise anything.

## Estimating and checking for sense

Do a rough mental version first, then compare:

- Round the numbers to one figure. 230 V and 9.6 A is roughly 200 x 10 = 2000 W, so an answer of 2208 W is believable and an answer of 22 W is not.
- Check the magnitude. Currents in a domestic final subcircuit are single or low double digits of amperes, not kiloamperes.
- Check the unit. Ohms divided by ohms is a ratio with no unit. Volts divided by amperes must be ohms.
- Check by a second route. If P1 + P2 must equal the total power, add them up. If the branch currents must sum to the supply current, sum them.

## What to remember

- Write the givens down every time, with units. Most errors are entry errors, not maths errors.
- Convert prefixes to plain units before substituting, or enter them with EXP.
- BODMAS is not optional, and brackets are how you tell the calculator what you mean.
- Transpose *before* you substitute; it is far easier to rearrange letters than a page of digits.
- Estimate first, then calculate, then ask whether a tradesperson would believe the answer.`,
          quiz: [
            {
              q: "Evaluate 4 x (3 - 2 + 1) using BODMAS.",
              options: ["5", "8", "11", "9"],
              answer: 1,
              explain: "The bracket is worked out completely first: 3 - 2 + 1 = 2, then 4 x 2 = 8. The tempting answer 11 comes from ignoring the bracket and doing 4 x 3 - 2 + 1, and 5 comes from closing the bracket after the 2.",
            },
            {
              q: "A series circuit has R = 12 Ω, XL = 15 Ω, XC = 9 Ω. What is the first operation when finding Z = square root of (R squared + (XL - XC) squared)?",
              options: [
                "Square the 12",
                "Subtract XC from XL inside the inner bracket",
                "Take the square root of 12",
                "Add 15 and 9",
              ],
              answer: 1,
              explain: "Brackets come before orders, and the innermost bracket comes first: 15 - 9 = 6. Squaring the 12 first is harmless but out of order; adding 15 and 9 would give the wrong reactance entirely, because the two reactances oppose each other.",
            },
            {
              q: "Keyed into a calculator as written, 12 / 2 x 3 returns 18, but the intended value was 2. What went wrong?",
              options: [
                "The calculator ignores BODMAS",
                "Division and multiplication have equal rank and are worked left to right, so the denominator needed brackets",
                "The calculator needed the numbers entered in reverse",
                "Multiplication always comes before division",
              ],
              answer: 1,
              explain: "Division and multiplication share a rank and are evaluated left to right, so 12 / 2 was done first. Writing 12 / (2 x 3) forces the whole denominator to be evaluated first. Multiplication does not outrank division.",
            },
            {
              q: "In the eight-step method, why is the formula transposed before the values are substituted?",
              options: [
                "Because a calculator cannot handle letters",
                "Because rearranging symbols is simpler and less error-prone than rearranging an expression full of digits and units",
                "Because the answer would otherwise be in the wrong units",
                "Because the givens must be listed alphabetically",
              ],
              answer: 1,
              explain: "Transposing first keeps the algebra clean and makes the substitution a single, checkable step. Substituting first works, but every extra rearrangement of a numeric expression is another chance to drop a term or a decimal point.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "numbers-fractions-percentages",
          title: "Decimals, fractions, percentages, powers and roots",
          minutes: 13,
          simple: "Numbers on a job come as decimals, fractions and percentages, and they are all the same thing wearing different clothes. Half, 0.5 and 50 per cent are one number. This lesson shows how to move between them, when to round, and how squares and square roots behave.",
          refs: REFS_NUMBER,
          content: `Every measurement you take is a decimal, every parallel-resistance calculation is a fraction, and every efficiency, volt drop limit and derating factor is a percentage. Being quick and confident with all three is what lets you check a number in your head on a ladder instead of walking back to the ute for a calculator.

## Decimals and place value

A decimal number has a whole part on the left of the point and a fractional part on the right. Take 334.56:

| Digit | Column | As a power of ten | Value |
|---|---|---|---|
| 3 | hundreds | 3 x 10 squared | 300 |
| 3 | tens | 3 x 10 to the 1 | 30 |
| 4 | units | 4 x 10 to the 0 | 4 |
| 5 | tenths | 5 x 10 to the -1 | 0.5 |
| 6 | hundredths | 6 x 10 to the -2 | 0.06 |

Each column to the left is ten times bigger, each column to the right ten times smaller. Note 10 to the power 0 equals 1, so 4 x 10 to the 0 is simply 4.

The same breakdown for 765.432 gives 700 + 60 + 5 + 0.4 + 0.03 + 0.002. And 0.707, which you will meet constantly in a.c. work, is 7 tenths plus 0 hundredths plus 7 thousandths.

## Multiplying and dividing by powers of ten

Move the point, do not do long multiplication:

- 10 x 0.707 = 7.07
- 100 x 0.707 = 70.7
- 1000 x 1.414 = 1414
- 0.35 A / 1000 = 0.00035 A = 350 µA

When multiplying two decimals, count the decimal places in both numbers and give the answer that many places:

- 15 x 24 = 360 (no places)
- 15 x 2.4 = 36.0 (one place)
- 1.5 x 2.4 = 3.60 (two places)
- 0.15 x 2.4 = 0.360 (three places)

When dividing by a decimal, multiply top and bottom by the same power of ten first so the divisor becomes whole. 2.4 / 1.5 becomes 24 / 15 = 1.6. Same value, far less chance of a misplaced point.

## Fractions

A fraction is a numerator over a denominator: 7/16 means 7 parts out of 16. Divide the bottom into the top to get the decimal: 7 / 16 = 0.4375. A proper fraction is less than 1; an improper fraction such as 22/7 (a rough value for pi) is greater than 1.

Multiplying numerator and denominator by the same number changes the appearance but not the value: 1/2 = 2/4 = 4/8 = 8/16 = 16/32.

### Adding fractions: find a common denominator

This is exactly what parallel resistance calculations are.

*Three resistors of 2 Ω, 4 Ω and 8 Ω are connected in parallel. Find the total resistance, without a calculator.*

- 1/RT = 1/2 + 1/4 + 1/8.
- The lowest common denominator of 2, 4 and 8 is 8. Rewrite: 4/8 + 2/8 + 1/8.
- Add the numerators: 1/RT = 7/8.
- Invert both sides: RT = 8/7 = **1.143 Ω**.

Sense check: the total of any parallel group is always less than the smallest branch resistor. 1.143 Ω is less than 2 Ω, so it passes. If you get an answer bigger than the smallest resistor, you have almost certainly forgotten to invert at the end.

The 1/x reciprocal key does this in one pass: 2 [1/x] + 4 [1/x] + 8 [1/x] = [1/x] gives 1.142857.

## Percentages

Per cent means per hundred. To turn a fraction or decimal into a percentage, multiply by 100 and add the sign.

| Fraction | Decimal | Percentage |
|---|---|---|
| 1/4 | 0.25 | 25% |
| 1/3 | 0.333 | 33.3% |
| 1/2 | 0.5 | 50% |
| 2/3 | 0.667 | 66.7% |
| 3/4 | 0.75 | 75% |

### Worked example — the volt drop allowance

AS/NZS 3000 limits the total voltage drop from the point of supply to any point in the installation to 5 per cent of the nominal supply voltage. On a 230 V single-phase supply:

- 5% of 230 = 0.05 x 230 = **11.5 V**.

If a submain has already used 4.2 V, the fraction remaining is (11.5 - 4.2) / 11.5 = 7.3 / 11.5 = 0.635, which is 63.5 per cent of the allowance still available for the final subcircuits.

### Worked example — efficiency as a percentage

A device draws 160 W and delivers 120 W. Efficiency = output / input x 100 = 120 / 160 x 100 = **75%**. The 40 W difference is the loss.

### Percentage increase and decrease

A cable's resistance rises with temperature. If a conductor is 0.185 Ω at 20 °C and rises 24 per cent at operating temperature, the new value is 0.185 x 1.24 = 0.229 Ω. To go the other way, divide: 0.229 / 1.24 = 0.185 Ω. Do not subtract 24 per cent to undo a 24 per cent increase; that is a different number.

## Powers, roots and indices

An index (also called a power or exponent) is shorthand for repeated multiplication. 3 squared = 3 x 3 = 9, and the square root of 9 = 3. Likewise 4 squared = 16 and 5 squared = 25.

The index laws you will use most:

| Law | Example |
|---|---|
| Multiply: add the indices | 10 cubed x 10 squared = 10 to the 5 |
| Divide: subtract the indices | 10 to the 5 / 10 squared = 10 cubed |
| Power of a power: multiply the indices | (10 cubed) squared = 10 to the 6 |
| Anything to the power 0 equals 1 | 10 to the 0 = 1 |
| Negative index means reciprocal | 10 to the -3 = 1/1000 = 0.001 |

Squares and roots are everywhere in electrical work: P = I squared R, Z = square root of (R squared + X squared), and the RMS value of a sine wave is the peak divided by the square root of 2.

*A 12 Ω element carries 2.5 A. P = I squared R = 2.5 x 2.5 x 12 = 6.25 x 12 = 75 W.* Note the order: square the current first, then multiply. Doing (2.5 x 12) squared would give 900, which is nonsense for a domestic element.

## Significant figures and rounding

The number of significant figures shows how precise a measurement is.

| Rule | Example |
|---|---|
| All non-zero digits count | 6.25 mm, 0.514 cm and 25.3 cm each have three |
| Zeros between non-zero digits count | 401 cm, 20.5 cm and 1.03 mm each have three |
| Trailing zeros after the decimal point count | 0.400 cm and 2.00 mm each have three |
| Leading zeros never count | 0.000432 cm has three |
| Trailing zeros in a whole number with no decimal point shown do not count | 250 and 510 have two |

Rounding follows one rule: look at the next digit. If it is 5 to 9, round up; if it is 0 to 4, leave the digit alone.

- 3/16 = 0.1875. To one place, 0.2. To two places, 0.19. To three places, 0.188.
- 1.47 to one decimal place is 1.5 (the next digit is 7).
- 1.414 to two decimal places is 1.41 (the next digit is 4).
- 1.9792 to two decimal places is 1.98; to two significant figures it is 2.0.

>! Round only at the very end. In the parallel-resistance example, rounding 39.375 Ω to 39 Ω before multiplying by the current changes the supply voltage by nearly a volt. Carry the full calculator value through and round once, when you write the answer down.

## On the job

- Convert everything to plain units before you start, then work in decimals.
- Use the reciprocal key for parallel resistance and for capacitors in series.
- Sense-check parallel results against the smallest branch value.
- Trade answers are rarely needed beyond three decimal places, but the working must not be rounded early.
- Percentages are ratios, so they have no unit; efficiency of 89 per cent is written as a number and a per cent sign.`,
          quiz: [
            {
              q: "Resistors of 2 Ω, 4 Ω and 8 Ω are in parallel. What is RT?",
              options: ["14 Ω", "7/8 Ω", "1.143 Ω", "4.67 Ω"],
              answer: 2,
              explain: "1/RT = 4/8 + 2/8 + 1/8 = 7/8, so RT = 8/7 = 1.143 Ω. The answer 7/8 Ω is the value of 1/RT before inverting, and 14 Ω would be the series total. Any parallel total must be smaller than the smallest branch.",
            },
            {
              q: "A 12 Ω element carries 2.5 A. Using P = I squared R, what is the power?",
              options: ["30 W", "75 W", "900 W", "360 W"],
              answer: 1,
              explain: "Square the current first: 2.5 x 2.5 = 6.25, then 6.25 x 12 = 75 W. 30 W is I x R, and 900 W comes from squaring the product (2.5 x 12) instead of squaring only the current.",
            },
            {
              q: "What is 1.9792 rounded to two significant figures?",
              options: ["1.97", "1.98", "2.0", "1.9"],
              answer: 2,
              explain: "Two significant figures means two counted digits, so we round at the 9 in the tenths column; the next digit is 7, so it rounds up and carries: 2.0. The answer 1.98 is two decimal places, which is a different instruction.",
            },
            {
              q: "On a 230 V supply, what voltage is the 5 per cent total volt drop allowance?",
              options: ["4.6 V", "11.5 V", "23 V", "1.15 V"],
              answer: 1,
              explain: "0.05 x 230 = 11.5 V. 23 V would be 10 per cent, and 4.6 V would be 2 per cent. Knowing the allowance in volts, not just as a percentage, lets you compare it directly with a calculated drop.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "si-units-prefixes-notation",
          title: "SI units, prefixes and engineering notation",
          minutes: 13,
          simple: "Australia measures everything in one family of units built from seven basic ones. Prefixes such as kilo, milli and micro are just a shorthand for moving the decimal point in steps of a thousand, so you can say 4.7 kilohms instead of 4700 ohms.",
          refs: REFS_UNITS,
          content: `Australia adopted the metric system, properly called the Systeme international d'unites or SI, by legislation in the early 1970s, and the Australian standard for its use is AS ISO 1000. Every nameplate, every wiring rule, every data sheet you will read on the job uses it. Learning to move fluently between kilo, milli and micro is not academic tidiness; it is the difference between a 4.7 Ω resistor and a 4.7 kΩ resistor.

## The seven base units

| Quantity | Unit | Symbol |
|---|---|---|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Thermodynamic temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

Everything else is *derived* from these. That is the beauty of the system: the units multiply and divide together the same way the quantities do.

| Derived quantity | Unit | Symbol | Built from |
|---|---|---|---|
| Force | newton | N | kg.m/s squared |
| Work, energy | joule | J | N.m |
| Power | watt | W | J/s |
| Charge | coulomb | C | A.s |
| Potential difference | volt | V | W/A |
| Resistance | ohm | Ω | V/A |
| Capacitance | farad | F | C/V |
| Inductance | henry | H | Wb/A |
| Magnetic flux | weber | Wb | V.s |
| Frequency | hertz | Hz | 1/s |
| Pressure | pascal | Pa | N/m squared |

This is why unit checking works. Volts divided by amperes must come out in ohms; if your working produces amperes, you have transposed the wrong way.

## Quantity symbols versus unit symbols

Two different alphabets are in play and they occasionally use the same letter:

- The **quantity symbol** stands for the thing being measured: V for voltage, I for current, R for resistance, P for power, Q for charge or reactive power, Φ for magnetic flux.
- The **unit symbol** stands for the measuring unit: V for volt, A for ampere, Ω for ohm, W for watt.

So "V = 12 V" reads as "the voltage equals twelve volts". Unit symbols named after a person take a capital letter (A, V, W, N, K, Hz) but the word itself does not (ampere, volt, watt). Memorise both columns early; problems in this trade are written in them.

## Scientific notation

Very large and very small numbers are unmanageable written out. Scientific notation writes a number as a mantissa between 1 and just under 10, multiplied by a power of ten:

- 6 060 842 000 000 becomes 6.060842 x 10 to the 12. The exponent 12 says: move the point twelve places right to restore the number.
- 0.000 000 030 1 becomes 3.01 x 10 to the -8. The negative exponent says: move the point eight places left.

Significant-figure practice normally keeps the mantissa to three or four digits, so 6.06 x 10 to the 12 is usually enough.

## Engineering notation

Scientific notation is awkward to *say*. You do not order "four point seven times ten to the three ohms" over the counter; you order a 4k7. So the trades use engineering notation, in which:

- the exponent is always a multiple of three, and
- the mantissa is anywhere from 1 to 999.

Each multiple of three has a name, which is where prefixes come from.

| Prefix | Symbol | Multiplier | Exponential entry |
|---|---|---|---|
| tera | T | 10 to the 12 | E12 |
| giga | G | 10 to the 9 | E9 |
| mega | M | 10 to the 6 | E6 |
| kilo | k | 10 to the 3 | E3 |
| (none) | | 1 | E0 |
| milli | m | 10 to the -3 | E-3 |
| micro | µ | 10 to the -6 | E-6 |
| nano | n | 10 to the -9 | E-9 |
| pico | p | 10 to the -12 | E-12 |

Anchor them to something you already know. There are 1000 millimetres in a metre, so there are 1000 milliamperes in an ampere. There are 1000 metres in a kilometre, so there are 1000 ohms in a kilohm.

### Worked conversions

- **2.37 km to metres.** Kilo means thousand, so 2.37 x 1000 = **2370 m**.
- **125 pF to farads.** Pico means 10 to the -12, so 125 x 10 to the -12 = **0.000 000 000 125 F**. Keyed as 125 EXP -12. The prefixed form is obviously the one to write on a job sheet.
- **0.0002 Ω to microhms.** Micro means 10 to the -6, so 0.0002 / 0.000001 = **200 µΩ**.
- **470 000 Ω.** In engineering notation that is 470 x 10 cubed, said as **470 kΩ**, marked on a resistor as 470k.
- **0.0068 F.** That is 6.8 x 10 to the -3, said as **6.8 mF**, though capacitors of this size are usually written 6800 µF.

Note the resistor-code convention where the prefix replaces the decimal point: 1k2 is 1200 Ω, 1k8 is 1800 Ω, 4k7 is 4700 Ω, 2R2 is 2.2 Ω. It exists because a printed decimal point can rub off a component; a letter cannot.

## Converting composite units

The units that catch people out are the ones with a power in them.

- **Area.** 1 m = 1000 mm, so 1 m squared = 1000 x 1000 = 1 000 000 mm squared. Therefore 1 mm squared = 10 to the -6 m squared. A 2.5 mm squared conductor has a cross-sectional area of 2.5 x 10 to the -6 m squared.
- **Volume.** 1 m cubed = 1000 L. A 0.405 m cubed cable pit holds 405 L.
- **Energy.** 1 kWh = 1000 W x 3600 s = 3 600 000 J = **3.6 MJ**.
- **Flow.** 1 L/s = 3.6 m cubed per hour, useful when you cross into refrigeration and air-conditioning work.

### Worked example — resistance of a cable run

*Find the resistance of a 30 m length of 2.5 mm squared copper conductor. Take the resistivity of copper as 17.2 x 10 to the -9 Ω.m.*

- Formula: R = resistivity x L / A.
- Convert the area: A = 2.5 mm squared = 2.5 x 10 to the -6 m squared.
- Substitute: R = (17.2 x 10 to the -9 x 30) / (2.5 x 10 to the -6).
- Numerator: 17.2 x 30 = 516, so 516 x 10 to the -9.
- Divide: 516 / 2.5 = 206.4, and 10 to the -9 divided by 10 to the -6 = 10 to the -3.
- R = 206.4 x 10 to the -3 = **0.2064 Ω**.

Every part of that works because the indices were handled by the index laws instead of by counting zeros.

### Worked example — energy and cost

A 2.4 kW storage heater runs for 3.5 hours a day.

- Energy per day = 2.4 kW x 3.5 h = 8.4 kWh.
- In joules: 8.4 x 3.6 MJ = 30.24 MJ.
- At 32 cents per kilowatt-hour: 8.4 x 0.32 = **$2.69 per day**, or about $982 a year.

>! Prefix errors are the most expensive mistakes in this trade. A capacitor ordered as 100 nF when 100 µF was needed is a thousand times too small; a fuse sized from a current read as mA rather than A will not protect anything. Say the prefix out loud when you read a value off a nameplate.

## What to remember

- Seven base units; everything else is built from them, and units cancel like algebra.
- Quantity symbols and unit symbols are different things that sometimes share a letter.
- Scientific notation: one digit before the point. Engineering notation: exponent in multiples of three, which is what prefixes are.
- Convert to plain units or use EXP entry before substituting into a formula.
- Squared and cubed units convert by the square and cube of the length factor: 1 mm squared is 10 to the -6 m squared, not 10 to the -3.`,
          quiz: [
            {
              q: "A 2.5 mm squared conductor has what cross-sectional area in square metres?",
              options: [
                "2.5 x 10 to the -3 m squared",
                "2.5 x 10 to the -6 m squared",
                "2.5 x 10 to the -9 m squared",
                "2.5 x 10 to the 6 m squared",
              ],
              answer: 1,
              explain: "1 mm = 10 to the -3 m, and area involves the length twice, so 1 mm squared = 10 to the -6 m squared. Using 10 to the -3 is the classic error and makes any resistivity calculation a thousand times wrong.",
            },
            {
              q: "0.0002 Ω expressed with a prefix is:",
              options: ["0.2 mΩ", "200 µΩ", "Both of these are correct", "2 nΩ"],
              answer: 2,
              explain: "0.0002 Ω is 0.2 x 10 to the -3 Ω and also 200 x 10 to the -6 Ω. Engineering notation prefers a mantissa between 1 and 999, so 200 µΩ is the more natural way to say it, but both are numerically identical.",
            },
            {
              q: "What distinguishes engineering notation from scientific notation?",
              options: [
                "Engineering notation uses only positive exponents",
                "Engineering notation restricts the exponent to multiples of three, allowing a mantissa from 1 to 999",
                "Engineering notation never uses exponents",
                "Scientific notation always has three significant figures",
              ],
              answer: 1,
              explain: "Scientific notation keeps one digit before the point and any exponent; engineering notation fixes the exponent at multiples of three so it matches the named prefixes (kilo, mega, milli, micro). That is what makes it speakable on a job.",
            },
            {
              q: "One kilowatt-hour equals how many joules?",
              options: ["1000 J", "3600 J", "3.6 MJ", "60 000 J"],
              answer: 2,
              explain: "1 kWh = 1000 W x 3600 s = 3 600 000 J = 3.6 MJ. The answer 3600 J is one watt-hour; forgetting the kilo factor understates the energy by a thousand times.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "ratio-proportion-transposition",
          title: "Ratio, proportion and transposing formulae",
          minutes: 14,
          simple: "A ratio compares two things, like 240 volts in to 12 volts out. Transposition is rearranging a formula so the thing you want is on its own. Whatever you do to one side of an equals sign, do to the other, and it stays true, like keeping a set of scales balanced.",
          refs: REFS_ALGEBRA,
          content: `A formula is a recipe. Ohm's Law is written V = IR, but on the job you are just as likely to know V and I and want R. Rather than memorise three versions of every formula, learn one and learn to rearrange it. That skill, transposition, plus the closely related idea of ratio, covers most of the algebra an electrical worker ever needs.

## Ratio

A ratio compares two quantities of the same kind by division. It has no unit, because the units cancel.

The classic trade example is a transformer. A downlight transformer takes the nominal 240 V supply and delivers 12 V: 240 / 12 = 20, written **20:1**. Voltage and turns are directly proportional:

V1 / V2 = N1 / N2

where V1 and N1 are the primary voltage and turns, V2 and N2 the secondary.

### Worked example — secondary turns

*A transformer has 2000 primary turns and is supplied at 230 V. How many secondary turns give 12 V?*

- Transpose: N2 = N1 x V2 / V1.
- Substitute: N2 = 2000 x 12 / 230.
- 2000 x 12 = 24 000; 24 000 / 230 = 104.3.
- Answer: **104 turns** (you cannot wind a third of a turn, so round to a whole turn and accept the slight voltage error).

Sense check: the ratio 230:12 is roughly 19:1, and 2000 / 19 is roughly 105. The answer is believable.

### Scale drawings

Scale is a ratio too. A floor plan at 1:100 means 1 mm on paper is 100 mm on site. A run measured as 45 mm on the drawing is 45 x 100 = 4500 mm = **4.5 m**. Common architectural scales are 1:50, 1:100, 1:200 and, for site plans, 1:500 or 1:1000. Always confirm the scale from the title block, and always confirm against a figured dimension; drawings get photocopied and reduced.

### Direct and inverse proportion

- **Direct**: double one, double the other. Conductor length and resistance; transformer turns and voltage; power and time for a given energy price.
- **Inverse**: double one, halve the other. Current and resistance for a fixed voltage; conductor area and resistance.

Recognising which one applies saves a great deal of arithmetic. In the series-resistance problem later in this module, doubling the total resistance halves the current, which you can state in one line instead of three.

### Workplace scenario — the bain-marie element

You are called to a hotel kitchen where a flexible heating element in a bain-marie has failed. Flexible elements come in different lengths for the same wattage, and the broken one is in pieces, so you cannot simply measure it. But resistance is directly proportional to length:

R1 / R2 = L1 / L2

- The nameplate says 2400 W at 230 V, so the whole element should be R = V squared / P = 52 900 / 2400 = 22.04 Ω.
- You measure one surviving section: 6.5 Ω over a measured 0.42 m.
- Transpose for the total length: L2 = L1 x R2 / R1 = 0.42 x 22.04 / 6.5.
- 0.42 x 22.04 = 9.257; 9.257 / 6.5 = **1.424 m**.

Order the 1.42 m element. The maths turned a broken part into a part number.

## Transposition

Transposition rests on one idea: the two sides of an equation are equal and must stay equal. There are two ways of saying it.

1. **Do the same to both sides.** Add, subtract, multiply, divide, square, take the root, take the reciprocal, apply sine, whatever you like, provided you do it to *all* of both sides.
2. **Change sides, change signs.** A shortcut for the same thing. A term that is added on one side becomes subtracted on the other; a multiplier becomes a divisor.

BODMAS still applies. Do not pull a term out of a bracket, and deal with the bracket contents first where you can.

### Method 1 — divide both sides

Using P = V x I:

- To find V: divide both sides by I. The I on the right cancels, leaving **V = P / I**.
- To find I: divide both sides by V, leaving **I = P / V**.

### Method 2 — add or subtract the same quantity

The machine power balance is Pin = Pout + losses.

- Subtract losses from both sides: **Pout = Pin - losses**.
- Or start from Pout = Pin - losses and add losses to both sides to get back.

### Method 3 — cross-multiplication

Whenever the formula is one fraction equal to another (or equal to a single term, which is that term over 1), you can multiply diagonally.

Reluctance is Rm = mmf / Φ. Write it as Rm / 1 = mmf / Φ, cross-multiply, and Rm x Φ = mmf x 1, so **mmf = Rm.Φ**.

Similarly permeability, µ = B / H, gives **B = µH**, and flux density B = Φ / A gives **Φ = B.A**.

### Method 4 — apply a function to both sides

Reciprocals and roots count as functions.

- From 1/RT = 7/8, take the reciprocal of both sides: RT = 8/7 = 1.143 Ω.
- From P = V squared / R, multiply both sides by R to get P.R = V squared, then take the square root of both sides: **V = square root of (P.R)**.

### Worked example — a full transposition chain

*A coil has an inductive reactance of 47.5 Ω at 50 Hz. Find its inductance.*

- Formula: XL = 2.pi.f.L.
- Transpose: divide both sides by 2.pi.f, giving L = XL / (2.pi.f).
- Substitute: L = 47.5 / (2 x 3.1416 x 50) = 47.5 / 314.16.
- L = 0.1512 H = **151 mH**.

Note the bracket around the whole denominator. Without it the calculator would divide by 2 and then multiply by pi and by 50.

### Worked example — transposing under a root

The impedance triangle gives Z = square root of (R squared + X squared). Find X when Z = 25 Ω and R = 20 Ω.

- Square both sides: Z squared = R squared + X squared.
- Subtract R squared from both sides: X squared = Z squared - R squared.
- Root both sides: X = square root of (Z squared - R squared).
- Substitute: X = square root of (625 - 400) = square root of 225 = **15 Ω**.

## Solving equations

Once transposed, a formula with one unknown is just an equation to solve.

*Example.* A coil of 20 Ω is to carry no more than 10 mA when connected across a 24 V supply. What series resistor is needed?

- Total resistance required: RT = V / I = 24 / 0.01 = 2400 Ω.
- The coil supplies 20 Ω of that, so 20 + Rs = 2400.
- Subtract 20 from both sides: Rs = **2380 Ω**.

*Example.* A magnetic circuit has a reluctance of 20 000 ampere-turns per weber and needs 0.3 Wb of flux. The coil carries 5 A. How many turns?

- Formula: Rm = I.N / Φ.
- Cross-multiply: Rm x Φ = I.N.
- Divide both sides by I: N = Rm.Φ / I.
- Substitute: N = (20 000 x 0.3) / 5 = 6000 / 5 = **1200 turns**.

>! When you transpose a formula that appears in a wiring rule or a manufacturer's instruction, keep the original written down alongside your rearranged version. If your answer is later questioned, an inspector needs to see the source form as well as your working.

## What to remember

- Ratios have no units; make sure both quantities are in the same unit before dividing.
- Transformer voltage and turns are directly proportional; resistance and conductor length are too.
- Transpose by doing the same operation to both sides, or by the change-sides-change-signs shortcut.
- Cross-multiplication clears fractions in one move.
- Squaring, rooting and taking reciprocals are legitimate operations provided they are applied to the whole of both sides.`,
          quiz: [
            {
              q: "A transformer has 2000 primary turns on 230 V. How many secondary turns are needed for 12 V?",
              options: ["38 300 turns", "104 turns", "167 turns", "240 turns"],
              answer: 1,
              explain: "N2 = N1 x V2 / V1 = 2000 x 12 / 230 = 104. The huge answer comes from multiplying by 230 instead of dividing, which is what happens when the ratio is inverted; a step-down transformer must have fewer secondary turns than primary.",
            },
            {
              q: "Transposing Z = square root of (R squared + X squared) to make X the subject gives:",
              options: [
                "X = Z - R",
                "X = square root of (Z squared - R squared)",
                "X = square root of Z - square root of R",
                "X = Z squared - R squared",
              ],
              answer: 1,
              explain: "Square both sides, subtract R squared, then take the root of both sides. Simply subtracting R from Z ignores the squares, and would give 5 Ω instead of the correct 15 Ω for Z = 25 and R = 20.",
            },
            {
              q: "A broken flexible element should be 22.04 Ω in total. A surviving 0.42 m section measures 6.5 Ω. What total length should be ordered?",
              options: ["0.124 m", "1.424 m", "3.39 m", "0.42 m"],
              answer: 1,
              explain: "Resistance is directly proportional to length, so L2 = 0.42 x 22.04 / 6.5 = 1.424 m. The answer 0.124 m comes from inverting the ratio; a sense check catches it, because the whole element must be longer than a surviving piece.",
            },
            {
              q: "Why is L = XL / (2.pi.f) written with brackets around the denominator?",
              options: [
                "To show that pi is an approximation",
                "Because division and multiplication rank equally and are evaluated left to right, so without brackets the calculator divides by 2 and then multiplies by pi and f",
                "Because brackets are required by SI",
                "To force the answer into engineering notation",
              ],
              answer: 1,
              explain: "Without brackets the machine evaluates XL / 2 x pi x f, which is roughly 100 000 times the correct answer here. Brackets are how you tell the calculator that the whole product is on the bottom line.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "mensuration-area-volume",
          title: "Mensuration: length, area and volume on the job",
          minutes: 14,
          simple: "Mensuration just means measuring shapes: how far round, how much surface, how much space inside. It tells you the copper area of a cable, how many cables fit in a conduit, how much dirt comes out of a trench, and how many metres of cable to put on the quote.",
          refs: REFS_MENS,
          content: `Almost every quantity you order comes from a shape. Cable is sold by the metre and specified by an area. Conduit is specified by a diameter and filled according to an area. Trenches, pits and switchrooms are volumes. Get comfortable with a handful of formulas and a tape measure and you can price a job from a plan.

## Perimeter and circumference

Perimeter is the distance right around a shape.

| Shape | Perimeter |
|---|---|
| Rectangle | 2 x (length + width) |
| Square | 4 x side |
| Triangle | sum of the three sides |
| Circle (circumference) | pi x d, or 2 x pi x r |

*A switchroom is 6.0 m x 4.5 m. Skirting duct is run right around, less a 0.9 m doorway.* Perimeter = 2 x (6.0 + 4.5) = 21.0 m; less the door, 21.0 - 0.9 = **20.1 m of duct**.

## Area

| Shape | Area |
|---|---|
| Rectangle | length x width |
| Square | side squared |
| Triangle | (base x height) / 2 |
| Parallelogram | base x perpendicular height |
| Rhombus | (diagonal 1 x diagonal 2) / 2 |
| Trapezium | ((a + b) / 2) x height |
| Circle | pi x r squared, or pi x d squared / 4 |

The two circle forms are the same thing; use the d-squared-over-four version whenever you have measured a diameter, which on site is almost always.

### Worked example — conductor diameter from cable size

*What is the diameter of the copper in a 2.5 mm squared conductor?*

- A = pi.d squared / 4, so transpose: d = square root of (4A / pi).
- d = square root of (4 x 2.5 / 3.1416) = square root of (10 / 3.1416) = square root of 3.183.
- d = **1.784 mm**.

Cross-check the other way: A = pi x 1.784 squared / 4 = 3.1416 x 3.183 / 4 = 2.5 mm squared. Correct. (A real stranded conductor is made of many small wires, so its overall diameter is larger than this; the nominal area is what is used for current and volt-drop calculations.)

### Worked example — area of a combined shape

*A switchboard escutcheon is a 900 mm x 600 mm rectangle with a triangular corner cut off, the cut being 200 mm along one edge and 150 mm along the other. Find the sheet area.*

- Rectangle: 900 x 600 = 540 000 mm squared.
- Triangle removed: (200 x 150) / 2 = 15 000 mm squared.
- Area = 540 000 - 15 000 = 525 000 mm squared = **0.525 m squared**.

Note the conversion: 1 m squared = 1 000 000 mm squared.

## Conduit fill

A wiring enclosure must not be packed so tightly that cables cannot be drawn in without damage, or that heat cannot escape. AS/NZS 3000 deals with this through a space factor and through tables of permitted cable numbers. The design figure commonly used for a straightforward run is that cables should occupy no more than about 40 per cent of the internal cross-section; the Wiring Rules tables remain the authority, and long runs with several bends need more room, not less.

*Worked example.* A conduit has an internal diameter of 21 mm (take the figure from the manufacturer's data for the size and duty you are actually using). How many single-core cables of 3.4 mm overall diameter will it take at a 40 per cent space factor?

- Conduit internal area: A = pi x 21 squared / 4 = 3.1416 x 441 / 4 = 346.4 mm squared.
- Usable area at 40 per cent: 0.4 x 346.4 = 138.5 mm squared.
- Area of one cable: A = pi x 3.4 squared / 4 = 3.1416 x 11.56 / 4 = 9.08 mm squared.
- Number: 138.5 / 9.08 = 15.2, so **15 cables**.

Always round *down*. And check the result against the relevant table in the Wiring Rules before you commit, because the tables also take account of grouping and derating.

>! Overfilled conduit is a genuine hazard, not a workmanship issue. Cables that cannot be withdrawn get damaged during alteration work, and a bundle that cannot shed heat runs hotter than the current-carrying capacity tables assume, so the protective device no longer protects the cable.

## Volume

| Solid | Volume |
|---|---|
| Rectangular prism | length x width x depth |
| Cylinder | pi x r squared x height |
| Any prism | cross-sectional area x length |

- **Cable pit.** 900 mm x 600 mm x 750 mm deep = 0.9 x 0.6 x 0.75 = **0.405 m cubed**, which is 405 L of spoil to cart away.
- **Trench.** 600 mm wide, 600 mm deep, 45 m long = 0.6 x 0.6 x 45 = **16.2 m cubed**. At roughly 1.6 tonnes per cubic metre for compacted soil, that is around 26 tonnes; that number decides whether you hire an excavator.
- **Sand bedding.** The same trench with 100 mm of sand under and 150 mm over a cable: 0.6 x 0.25 x 45 = **6.75 m cubed** of sand.
- **Switchroom air volume.** 6.0 x 4.5 x 2.7 = 72.9 m cubed, which is where a ventilation or air-conditioning calculation starts.

## Quantity take-off

A take-off is a systematic list of everything the job needs, measured off the drawing and totalled. The method is:

1. Scale or read the figured dimensions for each run.
2. Add vertical drops and rises, which never appear on a plan view.
3. Add an allowance for terminations, slack in the switchboard and set-outs, typically 5 to 10 per cent.
4. Total by item, then by cable size.

*Worked example.* Six lighting runs measure 14.5, 12.0, 18.5, 9.5, 22.0 and 16.5 m on the plan. Each has a 2.7 m drop at the switch and 0.6 m of slack in the board.

- Plan lengths: 14.5 + 12.0 + 18.5 + 9.5 + 22.0 + 16.5 = 93.0 m.
- Drops and slack: 6 x (2.7 + 0.6) = 6 x 3.3 = 19.8 m.
- Subtotal: 112.8 m.
- Waste allowance at 8 per cent: 112.8 x 0.08 = 9.0 m.
- Order **121.8 m**, so a 150 m drum, not a 100 m one.

## Costing the job

Once the take-off is done, costing is arithmetic and percentages.

| Item | Quantity | Rate | Amount |
|---|---|---|---|
| 2.5 mm squared TPS | 180 m | $2.85/m | $513.00 |
| 25 mm conduit | 36 m | $4.20/m | $151.20 |
| Socket-outlets | 8 | $12.50 ea | $100.00 |
| Accessories, fixings | lot | | $95.00 |
| Materials subtotal | | | **$859.20** |
| Labour | 14 h | $86/h | $1204.00 |
| Cost subtotal | | | **$2063.20** |
| Margin at 15% | | | $309.48 |
| Price excluding GST | | | **$2372.68** |
| GST at 10% | | | $237.27 |
| Total to client | | | **$2609.95** |

Check the arithmetic two ways: 2063.20 x 1.15 = 2372.68, and 2372.68 x 1.10 = 2609.95. Note that margin is added *to* the cost, so a 15 per cent margin on cost is not the same as a 15 per cent margin on the selling price. Say which you mean.

## On the job

- Measure twice; the tape is cheaper than the cable.
- Diameters get squared, so a small error in a measured diameter becomes a large error in an area.
- Convert to a single unit before combining figures; mixing millimetres and metres is the most common take-off blunder.
- Round conduit fill down, and round cable orders up.
- Every allowance you add (waste, slack, margin) should be written on the take-off, not carried in your head.`,
          quiz: [
            {
              q: "A conduit has an internal diameter of 21 mm. Its internal cross-sectional area is:",
              options: ["66 mm squared", "346 mm squared", "1385 mm squared", "441 mm squared"],
              answer: 1,
              explain: "A = pi x d squared / 4 = 3.1416 x 441 / 4 = 346.4 mm squared. 66 mm squared is the circumference (pi x d), and 441 mm squared is d squared without the pi/4 factor.",
            },
            {
              q: "At a 40 per cent space factor, how many 9.08 mm squared cables fit in that 346 mm squared conduit?",
              options: ["38", "15", "18", "12"],
              answer: 1,
              explain: "0.4 x 346.4 = 138.5 mm squared usable, and 138.5 / 9.08 = 15.2, rounded down to 15. Ignoring the space factor gives 38, which would leave no room to draw the cables in or shed heat.",
            },
            {
              q: "A trench is 600 mm wide, 600 mm deep and 45 m long. What volume of spoil comes out?",
              options: ["1.62 m cubed", "16.2 m cubed", "162 m cubed", "16 200 m cubed"],
              answer: 1,
              explain: "Convert first: 0.6 x 0.6 x 45 = 16.2 m cubed. Leaving the width and depth in millimetres and the length in metres is what produces the other answers; a single unit system throughout prevents it.",
            },
            {
              q: "Six lighting runs total 93.0 m on plan, each needs a 2.7 m drop plus 0.6 m of slack, and an 8 per cent waste allowance applies. How much cable is ordered?",
              options: ["100.4 m", "112.8 m", "121.8 m", "93.0 m"],
              answer: 2,
              explain: "93.0 + 6 x 3.3 = 112.8 m, then 112.8 x 1.08 = 121.8 m. Working from the plan length alone leaves you 29 m short, because plan views do not show vertical drops.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "pythagoras-and-set-out",
          title: "Pythagoras' theorem, right-angle set-out and vectors",
          minutes: 12,
          simple: "In any triangle with a square corner, the long side squared equals the other two sides squared added together. That single fact squares up a set-out on site, gives the length of a diagonal cable run, and combines resistance with reactance to find impedance.",
          refs: REFS_PYTH,
          content: `Pythagoras' theorem is the most useful piece of geometry in the electrical trades, because so many of our quantities combine at right angles: resistance with reactance, true power with reactive power, a horizontal cable run with a vertical one, a force with another force at 90 degrees.

## The theorem

In a right-angle triangle, the square on the hypotenuse equals the sum of the squares on the other two sides:

h squared = a squared + b squared

and therefore

h = square root of (a squared + b squared)

The hypotenuse is always the side opposite the right angle, and it is always the longest side. If your calculated hypotenuse is shorter than one of the other sides, you have made an error.

### The 3:4:5 triangle

Count the squares: a side of 3 gives an area of 9, a side of 4 gives 16, and 9 + 16 = 25, which is 5 squared. Any multiple works: 6:8:10, 9:12:15, 300:400:500, 900:1200:1500.

This is the site tradesperson's square. To mark a right angle for a switchboard plinth or a cable tray run:

1. From the corner, measure 900 mm along the existing wall and mark it.
2. From the same corner, swing an arc 1200 mm out in roughly the direction you want.
3. Adjust until the distance between the two marks is exactly 1500 mm.

The corner is now a true right angle, checked with nothing but a tape.

### Checking a room or a frame is square

A rectangle is square when its two diagonals are equal. For a 6.0 m x 4.5 m switchroom:

- Diagonal = square root of (6.0 squared + 4.5 squared) = square root of (36 + 20.25) = square root of 56.25 = **7.5 m**.

That is a 3:4:5 triangle scaled by 1.5. If one diagonal measures 7.5 m and the other 7.62 m, the room is out of square and your equipment layout will not fit as drawn.

### Worked example — a diagonal cable route

*A cable must run from a point on a wall to a point 4.2 m along and 3.1 m up. What is the straight-line length?*

- h = square root of (4.2 squared + 3.1 squared) = square root of (17.64 + 9.61) = square root of 27.25.
- h = **5.22 m**.

Compare that with routing it as two legs: 4.2 + 3.1 = 7.3 m. The diagonal saves 2.08 m of cable, though on a real installation you fix cable to structure, so the two-leg route is usually what you buy.

## Impedance triangles

In an a.c. circuit, resistance and reactance are 90 degrees apart, so they combine by Pythagoras rather than by simple addition:

Z = square root of (R squared + X squared)

*A coil has R = 12 Ω and XL = 16 Ω. Find Z, and the current on 230 V.*

- Z = square root of (144 + 256) = square root of 400 = **20 Ω**.
- I = V / Z = 230 / 20 = **11.5 A**.

Notice that 12 + 16 = 28 Ω would have given 8.2 A, an error of nearly 30 per cent. Reactance and resistance never add arithmetically.

Where the circuit has both inductive and capacitive reactance, the net reactance is the difference, taken inside the bracket:

Z = square root of (R squared + (XL - XC) squared)

*R = 30 Ω, XL = 62 Ω, XC = 22 Ω.* Net X = 40 Ω, so Z = square root of (900 + 1600) = square root of 2500 = **50 Ω**.

### Finding a missing side

*An impedance of 25 Ω has a resistive component of 20 Ω. Find the reactance.*

- X = square root of (Z squared - R squared) = square root of (625 - 400) = square root of 225 = **15 Ω**.

## Power triangles

The same geometry describes power in an a.c. circuit:

- True power P, in watts, along the base.
- Reactive power Q, in reactive volt-amperes (var), vertical.
- Apparent power S, in volt-amperes (VA), the hypotenuse.

S = square root of (P squared + Q squared)

*A load draws 8 kW of true power and 6 kvar of reactive power.*

- S = square root of (64 + 36) = square root of 100 = **10 kVA**.
- Power factor = P / S = 8 / 10 = **0.8**.

That 10 kVA is what the supply cable and the transformer must carry, even though only 8 kW does useful work. This is exactly why power factor correction pays for itself.

## Scalars and vectors

A **scalar** has magnitude only: mass, volume, time, energy, resistance. Scalars add by ordinary arithmetic. Five seconds plus three seconds is eight seconds, and 1 km plus 2.6 km is 3.6 km.

A **vector** has magnitude *and* direction: force, velocity, acceleration. In electrical work a vector is called a **phasor**, but the rules are identical. Voltage, current, impedance and power in a.c. circuits are all handled as phasors.

You can add scalars graphically along a line. If you are given $110 and fined $60, draw 110 mm to the right and then 60 mm back to the left; the 50 mm remaining is your $50. Vectors need the direction taken into account as well.

### Forces at 90 degrees

When two vectors act at right angles, Pythagoras gives the resultant directly.

*Two forces of 25 N each act at right angles on a body. Find the resultant.*

- FR = square root of (25 squared + 25 squared) = square root of (625 + 625) = square root of 1250.
- FR = **35.36 N**.

Sense check: the resultant of two equal perpendicular forces is always the single force multiplied by the square root of 2, so 25 x 1.414 = 35.36 N. It must be bigger than either force and smaller than their sum (50 N).

>! This method works *only* when the two quantities are exactly 90 degrees apart. Two forces at 60 degrees, or two currents 120 degrees apart in a three-phase system, need the component method or trigonometry covered in the next lesson. Applying Pythagoras to non-perpendicular quantities gives a wrong answer that looks perfectly reasonable.

### Adding components

Where several vectors act, resolve each into horizontal and vertical parts, add all the horizontals, add all the verticals, then combine those two totals with Pythagoras.

*The horizontal components of three forces total -27.32 N and the vertical components total -5.33 N.*

- FR = square root of ((-27.32) squared + (-5.33) squared) = square root of (746.4 + 28.4).
- FR = square root of 774.8 = **27.83 N**, acting down and to the left.

The squares remove the minus signs, so the magnitude comes out positive; the signs tell you which quadrant the resultant lies in.

## What to remember

- h squared = a squared + b squared, and the hypotenuse is always the longest side.
- 3:4:5 (and 900:1200:1500 mm) squares a set-out with only a tape measure.
- Equal diagonals mean a rectangle is square.
- Resistance and reactance, and true and reactive power, combine at right angles, never by addition.
- Scalars add arithmetically; vectors and phasors need direction, and only combine by Pythagoras when they are perpendicular.`,
          quiz: [
            {
              q: "A coil has R = 12 Ω and XL = 16 Ω. What is its impedance?",
              options: ["28 Ω", "20 Ω", "4 Ω", "14 Ω"],
              answer: 1,
              explain: "Z = square root of (144 + 256) = square root of 400 = 20 Ω. The answer 28 Ω comes from adding R and X arithmetically, which is only valid for quantities in phase; resistance and reactance are 90 degrees apart.",
            },
            {
              q: "A load draws 8 kW and 6 kvar. What is its apparent power and power factor?",
              options: [
                "14 kVA at 0.57",
                "10 kVA at 0.8",
                "10 kVA at 0.6",
                "2 kVA at 0.75",
              ],
              answer: 1,
              explain: "S = square root of (64 + 36) = 10 kVA, and power factor is P / S = 8 / 10 = 0.8. Using Q / S = 0.6 gives the sine of the phase angle, not the power factor.",
            },
            {
              q: "To square up a cable tray set-out with a tape only, which set of distances forms a true right angle?",
              options: [
                "900 mm, 1200 mm, 1400 mm",
                "900 mm, 1200 mm, 1500 mm",
                "1000 mm, 1000 mm, 1500 mm",
                "900 mm, 1000 mm, 1500 mm",
              ],
              answer: 1,
              explain: "900:1200:1500 is the 3:4:5 triangle scaled by 300, and 900 squared + 1200 squared = 1500 squared exactly. 1400 mm is close enough to look right on site but leaves the corner about 4 degrees out, which compounds over a long run.",
            },
            {
              q: "Two forces of 25 N act at 60 degrees to each other. Why can Pythagoras not be used here?",
              options: [
                "Because the forces are equal",
                "Because Pythagoras only applies when the two quantities are exactly 90 degrees apart",
                "Because force is a scalar quantity",
                "Because 60 degrees is not a whole number of radians",
              ],
              answer: 1,
              explain: "The theorem describes a right-angle triangle. At any other angle the components must be resolved with trigonometry, or the parallelogram drawn to scale. Force is a vector, which is precisely why direction matters here.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "trigonometry-phasors-bends",
          title: "Trigonometry for phasors, bends and set-out",
          minutes: 14,
          simple: "Trigonometry links the angles of a right-angle triangle to the lengths of its sides. Three ratios, sine, cosine and tangent, let you find a side you cannot measure from one you can, which is how offset bends, phase angles and power factor are worked out.",
          refs: REFS_TRIG,
          content: `Draw a right-angle triangle with a 60 degree angle. Draw a bigger one with the same angles. The sides change length but the *ratios* between them do not; the triangles are similar. Trigonometry is simply the tabulated set of those ratios, and it lets you calculate a length or an angle you cannot reach with a tape.

## Naming the sides

For a chosen angle (call it theta) in a right-angle triangle:

- **Hypotenuse** — the longest side, always opposite the right angle.
- **Opposite** — the side directly across from theta.
- **Adjacent** — the remaining side, next to theta.

Rotate the triangle any way you like; the names follow the angle, not the page.

## The three ratios

| Ratio | Definition | Memory |
|---|---|---|
| sine theta | Opposite / Hypotenuse | SOH |
| cosine theta | Adjacent / Hypotenuse | CAH |
| tangent theta | Opposite / Adjacent | TOA |

The similar-triangle idea is why a table works: in any right-angle triangle containing a 60 degree angle, the adjacent side is exactly half the hypotenuse, which is why cos 60 degrees = 0.5, whether the triangle is 10 mm or 10 m across.

Each ratio has an **inverse** on the calculator (sin-1, cos-1, tan-1) which does the reverse job: give it a ratio and it returns the angle.

>! Check the calculator is in degrees, not radians or grads. A display showing RAD will give sin 30 as 0.9880 instead of 0.5, and every angle you calculate afterwards will be wrong. Look for DEG before you start.

### Worked example — solving a triangle

*A right-angle triangle has an angle of 55 degrees and an adjacent side of 37.6 mm. Find the hypotenuse and the opposite side.*

Hypotenuse, using cosine:

- cos theta = Adj / Hyp, so Hyp = Adj / cos theta.
- cos 55 degrees = 0.5736.
- Hyp = 37.6 / 0.5736 = **65.55 mm**.

Opposite, using tangent:

- tan theta = Opp / Adj, so Opp = tan theta x Adj.
- tan 55 degrees = 1.4281.
- Opp = 1.4281 x 37.6 = **53.7 mm**.

Check with Pythagoras: square root of (37.6 squared + 53.7 squared) = square root of (1413.8 + 2883.7) = square root of 4297.5 = 65.56 mm. Agrees within rounding.

### Worked example — finding an angle

*An impedance triangle has R = 8 Ω and X = 6 Ω. Find the phase angle and the power factor.*

- tan theta = Opp / Adj = X / R = 6 / 8 = 0.75.
- theta = tan-1 (0.75) = **36.87 degrees**.
- Power factor = cos theta = cos 36.87 degrees = **0.8**.

You can also get there without the angle: Z = square root of (64 + 36) = 10 Ω, and power factor = R / Z = 8 / 10 = 0.8. Two routes, same answer, which is a good check.

## Phasors: polar and rectangular form

A phasor has magnitude and angle. Written as a magnitude at an angle it is in **polar form**; written as horizontal and vertical parts it is in **rectangular form**.

- Polar to rectangular: horizontal = magnitude x cos theta, vertical = magnitude x sin theta.
- Rectangular to polar: magnitude = square root of (h squared + v squared), theta = tan-1 (v / h).

*A 40 N force acts at 60 degrees.*

- Horizontal = 40 x cos 60 = 40 x 0.5 = 20 N.
- Vertical = 40 x sin 60 = 40 x 0.866 = 34.64 N.
- Rectangular form: **[20, 34.6] N**.

*A load current of 11.5 A lags the voltage by 36.87 degrees.*

- In-phase (active) component = 11.5 x cos 36.87 = **9.2 A**.
- Quadrature (reactive) component = 11.5 x sin 36.87 = **6.9 A**.

The in-phase component is what does the work; the quadrature component is what power factor correction cancels. Most scientific calculators convert between the two forms directly, but knowing the trigonometry behind the keys is what lets you check the result.

## Adding vectors that are not at right angles

### Parallelogram method

Draw both vectors to scale from a common point, at the correct angle between them. Complete the parallelogram by drawing a line from the tip of each parallel to the other vector. The diagonal from the common origin to the far corner is the resultant. Measure its length against your scale and its angle with a protractor. Accuracy is limited only by your drafting.

*Two forces of 8 N and 5 N act outward from a point with 60 degrees between them.*

Drawn at 1 N = 5 mm, the resultant scales at about **11.4 N at 22 degrees** to the 8 N force.

Check it by components:

- Horizontal: 8 + 5 x cos 60 = 8 + 2.5 = 10.5 N.
- Vertical: 5 x sin 60 = 4.33 N.
- Resultant = square root of (110.25 + 18.75) = square root of 129 = **11.36 N**.
- Angle = tan-1 (4.33 / 10.5) = **22.4 degrees**.

The drawing and the trigonometry agree, which is exactly how you verify a graphical solution.

### Polygon (tip-to-tail) method

With three or more vectors the parallelogram gets clumsy. Instead, draw each vector to scale starting at the tip of the previous one, in any order. The resultant runs from the origin of the first to the tip of the last. Changing the order changes the shape of the polygon but not the resultant. The resultant can replace all of the original vectors and produce the same effect.

## Trigonometry in conduit and tray bending

This is where trigonometry earns its keep on site. To step a conduit around an obstruction you put in an **offset**: two equal bends of angle theta.

- Travel (the sloping length between the bends) = offset / sin theta.
- Run (the horizontal distance covered) = offset / tan theta.
- Shrink (the length the conduit appears to lose) = travel - run = offset x tan (theta / 2).

| Bend angle | Multiplier for travel (1 / sin) | Shrink per mm of offset |
|---|---|---|
| 22.5 degrees | 2.613 | 0.199 |
| 30 degrees | 2.000 | 0.268 |
| 45 degrees | 1.414 | 0.414 |
| 60 degrees | 1.155 | 0.577 |

*Worked example.* Step a conduit 150 mm around a beam using 30 degree bends.

- Travel = 150 / sin 30 = 150 / 0.5 = **300 mm** between bend centres.
- Run = 150 / tan 30 = 150 / 0.5774 = 259.8 mm.
- Shrink = 300 - 259.8 = **40.2 mm**, which also equals 150 x tan 15 = 150 x 0.2679.

So mark the first bend, measure 300 mm along the conduit for the second, and add 40.2 mm to your overall cut length to make up the shrink. With 45 degree bends the same 150 mm offset needs a travel of 212.1 mm and a shrink of 62.1 mm: sharper bends are more compact but lose more length and make cable drawing harder.

### The 90 degree bend

For a bend of centre-line radius R, the arc is a quarter of a circle:

- Arc length = 2 x pi x R / 4 = 1.571 x R.
- Gain (the amount saved compared with two square legs) = 2R - 1.571R = 0.429 x R.

*For R = 150 mm:* arc = 235.6 mm, and the gain is 300 - 235.6 = **64.4 mm**. When you mark out a length of conduit with a 90 degree bend, subtract the gain from the sum of the two leg dimensions before you cut.

## On the job

- SOH CAH TOA, and check the calculator is in DEG.
- Use the inverse functions to get angles from ratios (power factor angle from R and X).
- Polar form for a phasor you are quoting; rectangular form for one you are adding.
- Only perpendicular quantities combine by Pythagoras; anything else resolves into components first.
- Offset travel = offset / sin theta, shrink = offset x tan (theta / 2). Write these on the inside of your toolbox lid.`,
          quiz: [
            {
              q: "A right-angle triangle has an angle of 55 degrees and an adjacent side of 37.6 mm. What is the hypotenuse?",
              options: ["21.6 mm", "53.7 mm", "65.55 mm", "45.9 mm"],
              answer: 2,
              explain: "cos 55 = Adj / Hyp, so Hyp = 37.6 / 0.5736 = 65.55 mm. 21.6 mm comes from multiplying by the cosine instead of dividing, and would be shorter than the adjacent side, which is impossible for a hypotenuse.",
            },
            {
              q: "A conduit is offset 150 mm using 30 degree bends. What is the travel between bend centres?",
              options: ["75 mm", "260 mm", "300 mm", "212 mm"],
              answer: 2,
              explain: "Travel = offset / sin 30 = 150 / 0.5 = 300 mm, the familiar multiplier of 2 for 30 degree offsets. 260 mm is the run (offset / tan 30) and 212 mm would be the travel for 45 degree bends.",
            },
            {
              q: "An impedance triangle has R = 8 Ω and X = 6 Ω. What is the power factor?",
              options: ["0.6", "0.75", "0.8", "1.25"],
              answer: 2,
              explain: "Z = square root of (64 + 36) = 10 Ω, so power factor = cos theta = R / Z = 0.8. The value 0.6 is X / Z (the sine), and 0.75 is X / R (the tangent) which gives the angle, not the power factor.",
            },
            {
              q: "A 40 N force acts at 60 degrees. Its rectangular form is:",
              options: [
                "[34.6, 20] N",
                "[20, 34.6] N",
                "[40, 60] N",
                "[20, 20] N",
              ],
              answer: 1,
              explain: "Horizontal = 40 cos 60 = 20 N, vertical = 40 sin 60 = 34.64 N. Swapping them uses sine for the horizontal component, which would place the force at 30 degrees instead of 60.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "graphs-and-charts",
          title: "Graphs and charts: reading, plotting and interpreting",
          minutes: 11,
          simple: "A graph turns a table of numbers into a picture, so you can see a trend at a glance. Learn to read the scales on the two axes, find a value by tracing across and down, and recognise whether a line is straight or curved and what that means.",
          refs: REFS_GRAPH,
          content: `Data sheets, derating tables, motor curves, energy bills and commissioning reports all use graphs. Reading one correctly is a trade skill: the difference between a motor that will start its load and one that will not can be a single point on a speed-torque curve.

## Types of chart

| Type | Shows | Typical trade use |
|---|---|---|
| Pie chart | Parts of one whole, as percentages | Breakdown of a job cost or an energy bill |
| Bar chart | Comparison of separate categories | Monthly kWh by department |
| Histogram | Distribution across ranges of a continuous quantity | Number of readings falling in each voltage band |
| Line chart (graph) | How one quantity varies with another | Motor speed-torque curve, cable derating |

A pie chart shows proportions of a single total, so the slices must add to 100 per cent. A job might break down as materials 40 per cent, labour 45 per cent, overheads 10 per cent and margin 5 per cent. Bar charts compare things that are not parts of one whole, so their bars do not have to add to anything.

## Axes, scales and co-ordinates

A line graph plots data against two axes:

- The **x-axis** is horizontal and normally carries the quantity you control or vary, called the independent variable.
- The **y-axis** is vertical, at 90 degrees to the x-axis, and carries the quantity that responds, the dependent variable.
- The point where they meet is the **origin**. On many graphs it is (0, 0), but not always; a graph of voltage variation might have its origin at 200 V, and a graph of a bipolar quantity might put (0, 0) in the middle.

A point is written as a pair of **Cartesian co-ordinates**, (x, y): the x value first, then the y value.

Before reading anything off a graph, do three things:

1. Read both axis labels and both units.
2. Work out what one small division is worth on each axis. If the x-axis runs 0 to 1.2 in six divisions, each division is 0.2.
3. Check whether the axis starts at zero. A truncated axis exaggerates a trend.

## Reading a value

To find y for a given x, go up from the x value to the line, then straight across to the y-axis and read it. To find x for a given y, do the reverse.

*Worked example.* A voltmeter and ammeter are used to plot V against I for two resistors, giving two straight lines through the origin.

| Current (A) | Voltage, line A (V) | Voltage, line B (V) |
|---|---|---|
| 0.2 | 20 | 10 |
| 0.4 | 40 | 20 |
| 0.6 | 60 | 30 |
| 0.8 | 80 | 40 |
| 1.0 | 100 | 50 |

- At 0.4 A, line A reads **40 V**.
- At 0.8 A, line B reads **40 V**.
- Line A reaches 40 V at **0.4 A**; line B reaches 30 V at **0.6 A**.

## Gradient and what it means

For a straight line, the gradient is rise over run, and it usually *is* a physical quantity.

- Line A: gradient = 100 V / 1.0 A = **100 Ω**.
- Line B: gradient = 50 V / 1.0 A = **50 Ω**.

The steeper line is the larger resistance. A straight line through the origin means the two quantities are directly proportional, which is what Ohm's Law predicts for a resistor at constant temperature. If the line bends, the resistance is changing, which is exactly how you spot a filament lamp or a thermistor on a test bench.

A straight line that does not pass through the origin follows y = mx + c, where m is the gradient and c is the value of y where the line crosses the y-axis.

## Curves

Not every relationship is a straight line.

*Power dissipated in a 10 Ω resistor, P = I squared R:*

| Current (A) | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Power (W) | 10 | 40 | 90 | 160 | 250 | 360 |

Plotted, this is a curve that gets steeper and steeper, because power depends on the *square* of the current. Doubling the current from 3 A to 6 A does not double the power from 90 W to 180 W; it quadruples it to 360 W. That is the whole reason overload protection matters, and why a small overcurrent produces a large amount of extra heat.

## Two quantities on one x-axis

Motor and engine data sheets often show two curves against a common x-axis, with a separate y-axis on each side: power output on the left and torque on the right, both against speed in revolutions per minute. Read each curve against its own axis. Reading torque off the power scale is a common and expensive mistake when selecting a drive.

## Interpolation and extrapolation

- **Interpolation** is reading a value *between* plotted points. It is reliable, provided the line is smooth.
- **Extrapolation** is extending the line beyond the measured data. It is a guess, and it goes wrong wherever real behaviour changes: a motor curve beyond breakdown torque, a cable beyond its rated temperature, a transformer approaching saturation.

>! Never extend a manufacturer's curve past the end of the printed data to justify running equipment harder. The curve stops where the manufacturer stopped testing, and beyond that point the device may behave in a completely different way.

## Plotting your own graph

1. Choose which quantity goes on which axis: the one you set goes on x.
2. Choose scales that use most of the page, with easy divisions (1, 2, 5 or 10 units per square, never 3 or 7).
3. Label each axis with the quantity and its unit.
4. Plot the points as small crosses or dots.
5. Draw a smooth line or a line of best fit through them; do not join the points with a zig-zag if the underlying relationship is smooth.
6. Title the graph, and identify each curve if there is more than one.

A point that sits well off the trend is worth investigating rather than ignoring. On a commissioning sheet it usually means a measurement error, a loose connection, or a genuine fault.

## What to remember

- Read the axis labels, units and division values before you read any number.
- (x, y): across first, then up.
- The gradient of a straight-line graph is usually a real quantity, such as resistance in volts per ampere.
- A straight line through the origin means direct proportion; a curve means the relationship involves a power or is changing.
- Interpolate freely, extrapolate never.`,
          quiz: [
            {
              q: "A V-against-I graph for a resistor is a straight line through the origin, passing through (1.0 A, 100 V). What does the gradient represent?",
              options: [
                "The power, 100 W",
                "The resistance, 100 Ω",
                "The conductance, 100 siemens",
                "Nothing physical; it is just the slope",
              ],
              answer: 1,
              explain: "Volts divided by amperes is ohms, so the gradient of a V-I graph is the resistance. Checking the units of the gradient is the quickest way to identify what it means on any graph.",
            },
            {
              q: "Power in a 10 Ω resistor is plotted against current. Why is the result a curve rather than a straight line?",
              options: [
                "Because the resistance changes with current",
                "Because P = I squared R, so power depends on the square of the current",
                "Because the axes have different scales",
                "Because power is measured in watts and current in amperes",
              ],
              answer: 1,
              explain: "Squaring the current makes each equal step in current produce a bigger step in power, so the plot curves upward. The resistance in this example is fixed at 10 Ω; the curvature comes entirely from the squared term.",
            },
            {
              q: "A motor data sheet shows power and torque curves against speed, with a y-axis on each side. What is the main risk?",
              options: [
                "The x-axis will not start at zero",
                "Reading one curve against the wrong y-axis and getting a badly wrong value",
                "The curves cannot be interpolated",
                "Torque and power cannot share an x-axis",
              ],
              answer: 1,
              explain: "Each curve belongs to its own vertical scale, and the two scales usually have completely different ranges and units. Tracing a torque value across to the power axis can produce an error of several times, which then flows into the drive selection.",
            },
            {
              q: "Which practice is unsafe when using a manufacturer's performance curve?",
              options: [
                "Interpolating between two plotted points",
                "Extrapolating beyond the end of the printed data to justify a higher duty",
                "Checking the units on both axes",
                "Noting where the curve was measured from",
              ],
              answer: 1,
              explain: "The printed curve ends where testing ended. Beyond that the device may saturate, stall or overheat, so an extrapolated value is not evidence of anything. Interpolation between measured points is normal and reliable.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-circuit-calculations",
          title: "Circuit calculations, volt drop and cable sizing",
          minutes: 15,
          simple: "This lesson puts the maths to work on real circuits: finding voltage, current, resistance and power, splitting them between series and parallel parts, and then checking that a cable is long enough and fat enough to keep the voltage at the far end within limits.",
          refs: REFS_DC,
          content: `Everything so far has been technique. Here it is applied to the calculations you will do most often: solving series and parallel circuits, and sizing a cable so that the appliance at the end of it actually receives a usable voltage.

## VIRP

Four quantities, six relationships:

| Find | From V and I | From V and R | From I and R |
|---|---|---|---|
| V | | V = P / I | V = I x R |
| I | | I = V / R | I = P / V |
| R | R = V / I | R = V squared / P | R = P / I squared |
| P | P = V x I | P = V squared / R | P = I squared R |

Choose the version that uses the two values you actually have, rather than calculating an intermediate value you do not need.

## Series and parallel

| Connection | Resistance | Capacitance |
|---|---|---|
| Series | RT = R1 + R2 + R3 | 1/CT = 1/C1 + 1/C2 + 1/C3 |
| Parallel | 1/RT = 1/R1 + 1/R2 + 1/R3 | CT = C1 + C2 + C3 |

Capacitors behave the opposite way round to resistors because putting capacitors in parallel effectively adds their plate areas together.

In a series circuit the current is common and the voltages divide. In a parallel circuit the voltage is common and the currents divide. Deciding which quantity is common is the first move in every circuit problem.

### Worked example 1 — a series ballast resistor

*A coil draws 10 mA and has a resistance of 20 Ω. What resistance must be added in series so the coil can be connected across 24 V?*

- The current must stay at 10 mA, so the total resistance is RT = V / I = 24 / 0.01 = 2400 Ω (2.4 kΩ).
- The coil provides 20 Ω, so the added resistor is 2400 - 20 = **2380 Ω**.
- Check the power in the added resistor: P = I squared R = 0.01 x 0.01 x 2380 = 0.238 W, so a 0.5 W resistor is adequate.

### Worked example 2 — a parallel pair

*Resistors of 90 Ω and 70 Ω are in parallel and the supply delivers 2 A. Find the supply voltage and the branch currents.*

- RT = (R1 x R2) / (R1 + R2) = (90 x 70) / 160 = 6300 / 160 = 39.375 Ω.
- V = RT x I = 39.375 x 2 = **78.75 V**.
- I1 = V / R1 = 78.75 / 90 = **0.875 A**.
- I2 = V / R2 = 78.75 / 70 = **1.125 A**.
- Check: 0.875 + 1.125 = 2 A. Correct.

Do not round 39.375 Ω before multiplying by the current; rounding to 39 Ω would give 78 V and throw both branch currents out.

### Worked example 3 — a series circuit with a known volt drop

*Two resistors are in series across 200 V. R1 = 140 Ω and the drop across R2 is 88 V. Find the current, the power in each resistor and the total power.*

- V1 = 200 - 88 = 112 V.
- I = V1 / R1 = 112 / 140 = **0.8 A** (the same current flows in both).
- P1 = I x V1 = 0.8 x 112 = **89.6 W**.
- P2 = I x V2 = 0.8 x 88 = **70.4 W**.
- PT = I x V = 0.8 x 200 = **160 W**.
- Check: 89.6 + 70.4 = 160 W. Correct.

### Worked example 4 — series-parallel

*A 100 Ω and a 150 Ω resistor in parallel are in series with a 75 Ω resistor. The current through the 75 Ω resistor is 0.45 A. Find the current in the 100 Ω resistor.*

- Parallel pair: (100 x 150) / 250 = 15 000 / 250 = 60 Ω.
- Total: 60 + 75 = 135 Ω.
- Supply voltage: V = 135 x 0.45 = 60.75 V.
- Drop across the 75 Ω: 75 x 0.45 = 33.75 V.
- Drop across the parallel section: 60.75 - 33.75 = 27 V.
- Current in the 100 Ω: I = 27 / 100 = 0.27 A = **270 mA**.

Sense check: 27 V across 60 Ω gives 0.45 A total for the pair, and the 150 Ω branch takes 27 / 150 = 0.18 A. 0.27 + 0.18 = 0.45 A. Correct.

### Worked example 5 — working back from power

*Three resistors are in parallel. The supply current is 8 A, branch 1 carries 1.5 A, branch 3 carries 4 A, and branch 2 dissipates 600 W. Find the supply voltage and all three resistances.*

- I2 = 8 - (1.5 + 4) = **2.5 A**.
- V = P2 / I2 = 600 / 2.5 = **240 V** (common to all three branches).
- R1 = 240 / 1.5 = **160 Ω**.
- R2 = 240 / 2.5 = **96 Ω**.
- R3 = 240 / 4 = **60 Ω**.

### Worked example 6 — resistor codes and power sharing

*A 1k2 and a 1k8 resistor are in series across 300 V. Find the power in each and the total.*

The code 1k2 means 1.2 kΩ = 1200 Ω, and 1k8 means 1800 Ω; the prefix letter replaces the decimal point so it cannot be lost in printing.

- RT = 1200 + 1800 = 3000 Ω.
- I = 300 / 3000 = 0.1 A.
- P1 = I squared R = 0.01 x 1200 = **12 W**.
- P2 = 0.01 x 1800 = **18 W**.
- PT = V x I = 300 x 0.1 = **30 W**, and 12 + 18 = 30 W. Correct.

In a series circuit the largest resistance drops the most voltage and dissipates the most power. In parallel it is the other way around.

### Worked example 7 — limiting current

*25 Ω and 35 Ω in series draw 2 A from a d.c. supply. What must be added in series to limit the current to 1 A?*

- Present total: 60 Ω, so V = 60 x 2 = 120 V.
- For 1 A: R needed = 120 / 1 = 120 Ω.
- Added resistance = 120 - 60 = **60 Ω**.

Or reason it out in one line: to halve the current at fixed voltage you must double the resistance, so add another 60 Ω.

## Voltage drop

Every conductor has resistance, so current flowing in it produces a voltage drop that never reaches the appliance. AS/NZS 3000 limits the total drop from the point of supply to any point in the installation to 5 per cent of the nominal voltage: on 230 V single-phase that is **11.5 V**, and on a 400 V three-phase supply it is 20 V.

Two ways to calculate it:

**From conductor resistance.** For a single-phase circuit, current flows out along the active and back along the neutral, so both conductors count:

Vd = I x (2 x resistivity x L / A)

*A 20 A load is 45 m from the board on 4 mm squared copper. Taking resistivity as 22.5 x 10 to the -9 Ω.m at operating temperature:*

- Loop resistance = 2 x 22.5 x 10 to the -9 x 45 / (4 x 10 to the -6).
- Numerator: 2 x 22.5 x 45 = 2025, so 2025 x 10 to the -9.
- Divide by 4 x 10 to the -6: 2025 / 4 = 506.25, and the indices give 10 to the -3.
- Loop resistance = 0.506 Ω.
- Vd = 20 x 0.506 = **10.13 V**, which is 10.13 / 230 x 100 = **4.4 per cent**. Within the 5 per cent limit.

**From the mV/A.m tables.** AS/NZS 3008.1.1 tabulates a figure Vc in millivolts per ampere per metre for each cable size and arrangement, which already accounts for the return conductor and the operating temperature:

Vd = (Vc x I x L) / 1000

Using a tabulated Vc of about 11.2 mV/A.m for this cable and arrangement:

- Vd = (11.2 x 20 x 45) / 1000 = 10 080 / 1000 = **10.08 V**.

The two methods agree, as they should. Always read the actual figure from the current edition of the table rather than remembering one.

### Transposing for the maximum length

The tables become far more useful when you rearrange the formula to answer the question you actually have on site:

Lmax = (Vd allowed x 1000) / (Vc x I)

- Lmax = (11.5 x 1000) / (11.2 x 20) = 11 500 / 224 = **51.3 m**.

So 4 mm squared will carry this load up to about 51 m. If the run were 70 m, you would go up a size.

### Checking a smaller cable

Would 2.5 mm squared do? With a Vc of about 18 mV/A.m:

- Vd = (18 x 20 x 45) / 1000 = **16.2 V**, which is 7.0 per cent. **Fails.**

## Sizing a cable properly

Volt drop is only one of the checks. The full sequence is:

1. Calculate the design (load) current, including any diversity or maximum-demand assessment.
2. Select a protective device rated at or above the design current.
3. Find the cable's current-carrying capacity for the installation method, then apply derating factors for ambient temperature, grouping and thermal insulation.
4. Confirm the derated capacity is at least the protective device rating.
5. Check voltage drop over the actual route length.
6. Check the earth fault loop impedance allows disconnection in the required time.
7. Check short-circuit thermal withstand.

Whichever check demands the largest conductor wins.

*Worked example.* A 230 V single-phase load draws 18 A, run 38 m, grouped with two other circuits (grouping factor 0.8) in an ambient of 40 °C.

- Protective device: 20 A.
- A cable with a base capacity of 27 A derates to 27 x 0.8 = 21.6 A, which exceeds 20 A. Step 4 passes.
- Volt drop at Vc = 11.2: Vd = (11.2 x 18 x 38) / 1000 = 7.66 V = **3.3 per cent**. Passes.

>! Voltage drop is not a comfort issue. Undervoltage at a motor increases its current, which increases heating and can prevent it starting against load. Undervoltage at a refrigeration compressor is a common cause of repeat callouts and burnt-out windings, and the cause is often a long final subcircuit that was never volt-drop checked.

## On the job

- Identify the common quantity first: current in series, voltage in parallel.
- Never round an intermediate parallel resistance before using it.
- Check every answer by a second route: branch currents must sum, powers must sum.
- 5 per cent of 230 V is 11.5 V, and of 400 V is 20 V. Know these two figures.
- Cable size is decided by whichever of capacity, volt drop, earth fault loop impedance and fault withstand needs the biggest conductor.`,
          quiz: [
            {
              q: "Resistors of 90 Ω and 70 Ω are in parallel with a total supply current of 2 A. What is the supply voltage?",
              options: ["320 V", "78.75 V", "160 V", "39.4 V"],
              answer: 1,
              explain: "RT = (90 x 70) / 160 = 39.375 Ω, and V = RT x I = 78.75 V. The answer 320 V comes from adding the resistors as if in series; a parallel total must always be less than the smallest branch.",
            },
            {
              q: "A 20 A load is 45 m from the board and the cable has a tabulated 11.2 mV/A.m. What is the voltage drop?",
              options: ["1.01 V", "10.08 V", "100.8 V", "0.5 V"],
              answer: 1,
              explain: "Vd = (Vc x I x L) / 1000 = (11.2 x 20 x 45) / 1000 = 10.08 V. The division by 1000 converts millivolts to volts; forgetting it gives 10 080 V, and dividing twice gives 1.01 V.",
            },
            {
              q: "A 1k2 and a 1k8 resistor are in series across 300 V. Which dissipates more power, and why?",
              options: [
                "The 1k2, because a smaller resistance always takes more power",
                "The 1k8, because in series the current is common so the larger resistance drops more voltage",
                "They dissipate equally, because they carry the same current",
                "The 1k2, because it drops more voltage",
              ],
              answer: 1,
              explain: "The current is common in series, so P = I squared R makes power proportional to resistance: 18 W in the 1k8 against 12 W in the 1k2. The smaller-resistance-takes-more-power rule applies to parallel circuits, where voltage is common instead.",
            },
            {
              q: "A cable passes the current-carrying capacity check after derating but fails the voltage drop check. What must be done?",
              options: [
                "Nothing; capacity is the only mandatory check",
                "Increase the conductor size until every check passes",
                "Increase the protective device rating",
                "Reduce the ambient temperature assumption",
              ],
              answer: 1,
              explain: "Cable selection is governed by whichever check needs the largest conductor, so the cable must be increased until volt drop is also satisfied. Raising the protective device rating would make matters worse, because the cable would then be under-protected.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "work-power-torque-efficiency",
          title: "Work, energy, power, torque and efficiency",
          minutes: 14,
          simple: "Energy is the ability to do work, work is energy actually spent, and power is how fast you spend it. Torque is twisting force. No machine gives out as much as it takes in, and efficiency is the percentage that survives the trip.",
          refs: REFS_POWER,
          content: `To understand electrical machines you have to understand mechanics, because a motor is a device for turning electrical energy into mechanical work and a generator does the reverse. The three words that get muddled most often are energy, work and power, so start there.

- **Energy** is the capacity to do work, measured in joules (J).
- **Work** is energy actually expended converting one form into another, also in joules.
- **Power** is the rate of doing work or expending energy, in watts (W), where 1 W = 1 J/s.

The relationship is:

energy = work = power x time

## Work

When a force moves an object through a distance, work is done:

W = F x d

where W is work in joules, F is force in newtons and d is distance in metres.

*A force of 100 N moves a box 5 m along a floor.* W = 100 x 5 = **500 J**.

Note that mass and force are not the same thing. Mass is measured in kilograms, weight and force in newtons, and the two are linked by gravity: F = m x g, with g taken as 9.81 m/s squared.

*Worked example.* A 250 kg condensing unit is hoisted 3.5 m onto a roof.

- Force: F = 250 x 9.81 = 2452.5 N.
- Work: W = 2452.5 x 3.5 = 8583.75 J = **8.58 kJ**.

## Power

power = work / time

*The 500 J box move above, done in 10 s and then in 5 s:*

- P = 500 / 10 = **50 W**.
- P = 500 / 5 = **100 W**.

Same work, twice the power, because it was done in half the time. This is why a hoist motor is sized by how fast you want the lift, not just by the weight.

*Back to the condensing unit.* If the 8583.75 J of lift happens in 25 s, P = 8583.75 / 25 = **343 W** of useful mechanical output. The motor must be larger than this to cover its own losses and the friction of the hoist.

Rearranging gives energy:

energy = power x time

*A 2.4 kW heater for 3.5 h:* 2.4 x 3.5 = 8.4 kWh, which is 8.4 x 3.6 = 30.24 MJ.

## Torque

Torque is a turning effect: a force applied at a distance from the axis of rotation.

T = F x r

where T is torque in newton metres (Nm), F is force in newtons and r is the radius in metres from the axis to the point where the force acts.

*A force of 150 N is applied at the end of a 0.4 m spanner.* T = 150 x 0.4 = **60 Nm**.

Torque exists even when nothing turns. Lean on a spanner on a seized nut and you are applying torque without doing any work, because nothing moves through a distance. Work only begins when rotation begins.

### Linking torque to power

For a rotating machine:

P = 2 x pi x n x T / 60

where n is the speed in revolutions per minute and T is in Nm. The 2 x pi converts revolutions to radians and the 60 converts minutes to seconds.

*Worked example.* Find the full-load torque of a 3 kW motor running at 1440 rpm.

- Transpose: T = (P x 60) / (2 x pi x n).
- Substitute: T = (3000 x 60) / (2 x 3.1416 x 1440).
- Numerator: 180 000. Denominator: 9047.8.
- T = **19.89 Nm**.

Sense check: at half the speed, the same power would need double the torque. A 4-pole motor at 1440 rpm gives roughly 20 Nm per 3 kW, which is a useful figure to carry in your head.

*Second example.* A 7.5 kW motor at 2880 rpm:

- T = (7500 x 60) / (2 x 3.1416 x 2880) = 450 000 / 18 095.6 = **24.9 Nm**.

Two and a half times the power but only 25 per cent more torque, because the speed doubled. This is why high-torque applications such as crushers and hoists use low-speed, high-pole machines or gearboxes.

## Losses and efficiency

No machine delivers all the energy put into it. The main losses in a rotating machine are:

| Loss | Cause | Roughly varies with |
|---|---|---|
| Copper loss (I squared R) | Current in the winding resistance | Load squared |
| Iron loss (hysteresis and eddy current) | Alternating flux in the core | Roughly constant with load |
| Friction | Bearings and brushes | Speed |
| Windage | The rotor and fan moving air | Speed |

Friction and windage together are often the largest mechanical losses. Copper and iron losses appear as heat in the machine, which is why a motor enclosure is a cooling design, not just a cover.

The power balance is simply:

Pin = Pout + losses, or Pout = Pin - losses

Efficiency is the ratio of output to input, expressed as a percentage. Its symbol is the Greek letter eta:

efficiency = (Pout / Pin) x 100

Because it is a ratio of two powers, efficiency has no unit.

*Worked example.* A device takes 160 W and delivers 120 W.

- Efficiency = 120 / 160 x 100 = **75 per cent**.
- Loss = 160 - 120 = **40 W**.

*Worked example.* A 3 kW motor has losses of 357 W. Find its efficiency.

- Output = 3000 W (the nameplate rating is the *output*).
- Input = 3000 + 357 = 3357 W.
- Efficiency = 3000 / 3357 x 100 = **89.4 per cent**.

That last point catches people out constantly: a motor "rated at 3 kW" delivers 3 kW at the shaft and draws more than that from the supply.

*Worked example — from nameplate to line current.* A 5.5 kW three-phase motor is 87 per cent efficient at a power factor of 0.85 on a 400 V supply.

- Input power: Pin = 5500 / 0.87 = 6322 W.
- Line current: I = P / (square root of 3 x V x power factor) = 6322 / (1.732 x 400 x 0.85).
- Denominator: 1.732 x 400 = 692.8, and 692.8 x 0.85 = 588.9.
- I = 6322 / 588.9 = **10.7 A**.

*Worked example — running cost.* That motor runs 6 hours a day, 250 days a year, at 28 cents per kWh.

- Hours: 6 x 250 = 1500 h.
- Energy: 6.322 kW x 1500 = 9483 kWh.
- Cost: 9483 x 0.28 = **$2655 per year**.

If a premium-efficiency replacement raised efficiency from 87 to 93 per cent, the input becomes 5500 / 0.93 = 5914 W, the annual energy 8871 kWh and the cost $2484: a saving of about $171 a year, which is how motor replacement decisions get justified.

## d.c. machine equations

Two equations, one for current and one for voltage, solve most d.c. machine problems. Both come from Kirchhoff's laws, and they differ between generators and motors because the machines work in opposite directions.

| | Generator | Motor |
|---|---|---|
| Current | Ia = If + IL | Ia = IL - If |
| Voltage | Eg = V + Ia x Ra | Eb = V - Ia x Ra |

Here Ia is armature current, If is shunt field current, IL is load or line current, V is terminal voltage, Ra is armature resistance, Eg is generated EMF and Eb is back EMF. In a shunt machine the field winding sees the full terminal voltage, so If = V / Rf.

*Worked example — shunt motor.* A 230 V shunt motor draws 25 A from the line. The field resistance is 115 Ω and the armature resistance is 0.4 Ω. Find the back EMF.

- If = 230 / 115 = 2 A.
- Ia = 25 - 2 = 23 A.
- Eb = 230 - (23 x 0.4) = 230 - 9.2 = **220.8 V**.

*Worked example — shunt generator.* A shunt generator supplies 40 A at 240 V. The field is 120 Ω and the armature 0.25 Ω. Find the generated EMF.

- If = 240 / 120 = 2 A.
- Ia = 40 + 2 = 42 A.
- Eg = 240 + (42 x 0.25) = 240 + 10.5 = **250.5 V**.

Note the pattern: a generator has to generate *more* than its terminal voltage to push current out through its own armature resistance, while a motor's back EMF is always *less* than the applied voltage. If your answer breaks that pattern, you have used the wrong equation.

>! A motor that has lost its shunt field current runs away to a dangerous speed, because back EMF collapses and armature current rises sharply. Never open a shunt field circuit while the machine is running, and treat any field-circuit fault as an immediate shutdown.

## What to remember

- Energy and work are both joules; power is joules per second, which is watts.
- F = m x g when you need force from a mass; g is 9.81 m/s squared.
- T = F x r, and P = 2 x pi x n x T / 60.
- A motor nameplate states the *output*; input is always larger by the losses.
- Efficiency = output / input x 100, has no unit, and always leads to a running-cost figure the customer understands.`,
          quiz: [
            {
              q: "Find the full-load torque of a 3 kW motor running at 1440 rpm.",
              options: ["2.08 Nm", "19.89 Nm", "125 Nm", "31.4 Nm"],
              answer: 1,
              explain: "T = (P x 60) / (2 x pi x n) = 180 000 / 9047.8 = 19.89 Nm. Forgetting the factor of 60 that converts minutes to seconds gives 0.33 Nm; omitting the 2 x pi gives about 125 Nm.",
            },
            {
              q: "A motor is rated 3 kW and its losses total 357 W. What is its efficiency?",
              options: ["88.1%", "89.4%", "91.5%", "11.9%"],
              answer: 1,
              explain: "The nameplate rating is the output, so input = 3000 + 357 = 3357 W and efficiency = 3000 / 3357 x 100 = 89.4 per cent. Treating 3 kW as the input gives 88.1 per cent, which is the classic error.",
            },
            {
              q: "A 230 V shunt motor draws 25 A. Field resistance is 115 Ω, armature resistance 0.4 Ω. What is the back EMF?",
              options: ["220.8 V", "239.2 V", "230 V", "220 V"],
              answer: 0,
              explain: "If = 2 A, so Ia = 25 - 2 = 23 A, and Eb = 230 - (23 x 0.4) = 220.8 V. The value 239.2 V comes from adding the armature drop, which is the generator equation; a motor's back EMF must always be less than the applied voltage.",
            },
            {
              q: "A 250 kg unit is hoisted 3.5 m in 25 s. What useful mechanical power does the lift require?",
              options: ["35 W", "343 W", "8584 W", "2452 W"],
              answer: 1,
              explain: "F = 250 x 9.81 = 2452.5 N, W = 2452.5 x 3.5 = 8583.75 J, and P = 8583.75 / 25 = 343 W. 8584 W would be the power if the lift took one second, and 35 W comes from using kilograms as newtons.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
