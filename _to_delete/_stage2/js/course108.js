/* =========================================================================
   Course content, module 108 — Hand and power tools.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 8 — Hand and power tools.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 8, Hand and power tools",
    "AS/NZS 1336 — eye and face protection, and AS/NZS 1337.1 — eye protectors for occupational applications",
    "AS/NZS 3760 — in-service safety inspection and testing of electrical equipment (test and tag of portable power tools)",
    "AS 1102 / ISO 68-1 and ISO 261 — ISO general purpose metric screw threads: form, series and designation",
  ];

  const MODULES = [
    {
      id: "v1-hand-power-tools",
      stream: "v1",
      title: "R1.8 · Hand and power tools",
      blurb: "The everyday metalworking kit of a refrigeration technician — striking, cutting, marking, threading, drilling, grinding and measuring — how to select each tool, hold it correctly and keep it safe.",
      lessons: [

        /* ============================================================== */
        {
          id: "hammers-and-filing",
          title: "Hammers, mallets and filing",
          minutes: 12,
          simple: "A hammer is not one tool, it is a family: hard steel faces for driving steel, soft rawhide or plastic faces for anything you do not want to mark. A file is a row of tiny chisels dragged across metal, and like a bread knife it only cuts one way — forward. Push on the way out, float it back on the way home.",
          refs: REFS,
          content: `
Most of the metalwork a refrigeration technician does is small, awkward and out
of sight: making a bracket for a condensing unit, dressing the edge of a
penetration in a cabinet, freeing a seized fan hub off a shaft, squaring the end
of a length of angle. The tools are ordinary engineering hand tools, and the
difference between a tradesperson and a labourer with the same tools is almost
entirely technique — how the tool is held, which way the pressure goes, and
whether it has been maintained.

Before anything else, four ground rules that sit behind every page of this
module. Stay alert for the unsafe situation before it becomes an injury. Use the
right tool for the job. Use it the way it was designed to be used, because the
short cut rarely saves the time it promises. Keep the tool in safe condition,
and wear eye protection any time you use a power tool, handle refrigerant or
weld.

## Hammers

Engineers' hammers are named after the shape of the end opposite the flat
striking face — the *pein*.

| Hammer | Shape of the pein | What it is for |
|---|---|---|
| Ball pein | Rounded ball | The general-purpose engineers' hammer; the ball spreads and rounds over the ends of rivets and pins |
| Straight pein | Wedge, in line with the handle | Riveting and spreading in tight or awkward spots |
| Cross pein | Wedge, across the handle | The same work as the straight pein, where the access is the other way round |

Heads are forged from plain carbon steel and then hardened only on the working
faces, so the body of the head stays tough while the face resists denting.
Weights run from about 0.125 kg up to 1.5 kg. Choose by the work, not by
bravado: a heavy hammer drives collars and bushes onto shafts, while a light
hammer is right for small riveting, centre punching and tapping in cotters and
pins. A hammer that is too heavy for delicate work will overshoot and bruise
everything around the target.

Plenty of the things we hit would be ruined by a hardened steel face — an
aluminium fan hub, a copper fitting, a machined shaft end, a plated cabinet
panel. For those, use a soft hammer with rawhide or copper faces, or a mallet
whose head is entirely hide, copper or plastic. The soft face deforms instead of
the workpiece.

Technique is simple but worth doing properly. Grip the handle near its end, not
choked up near the head, so the weight of the head does the work rather than
your forearm. Swing from the elbow for control, keep your eye on the target and
not on the hammer, and start with a light positioning blow before committing.

>! Inspect the hammer before you swing it. A loose head can fly off, a split or
>! oil-soaked handle will let go mid-stroke, and a face that has spread into a
>! mushroom will throw hardened chips. The same applies to what you are hitting:
>! a mushroomed chisel or punch head is a chip waiting to reach an eye. Dress the
>! mushroom off on the grinder or scrap the tool, and always wear eye protection.

## Files and filing

A file is a controlled way of removing small amounts of metal. Its face carries
rows of parallel teeth, cut at an angle to the edge and then hardened, and each
tooth shaves a little metal as the file is pushed across the work.

Files are classified three ways: by **shape**, by **grade of tooth**, and by
whether they are **single-cut** or **double-cut**.

- Shapes include flat, square, round (rat-tail), half-round, three-square, warding and knife files — chosen to match the shape of the surface or slot being worked.
- A single-cut file has one set of teeth running one way across the face. It gives a smoother finish and is the choice for finishing and for sharpening.
- A double-cut file has a second row cut diagonally across the first. It removes metal much faster, but leaves a rougher surface.
- Grades, from finest to coarsest: dead smooth, smooth, second cut, bastard, coarse and rough. The coarser the grade, the greater the pitch and depth of the teeth.

A wooden handle is fitted before the file is ever used, seated onto the tang
with one firm blow. This is not a comfort item. The bare tang of a file that
catches in the work will drive straight into your palm or wrist.

### Cross filing

Cross filing is the general and heavy technique that produces the shape. The
file travels both along and across the work in one continuous movement on each
stroke, ideally sweeping the whole surface every stroke, and the direction of
filing is changed every so often so that high spots are cut down evenly rather
than a groove being worn in one place.

Downward pressure goes on the **forward stroke only**. On the return the file is
drawn back lightly while still touching the work. File teeth are made to cut
forwards; pressure on the return stroke only blunts them faster and buys you
nothing.

Most filing problems are stance and grip problems. Stand with the feet well
apart and weight evenly balanced. A right-handed filer puts the left foot
forward, in line with the direction of the stroke, and the right foot back. The
right hand holds the handle with the thumb on top and fingers wrapped round. For
heavy filing the heel of the left hand presses down near the tip of the file
with the fingers curled but not gripping; for fine work or a small file, pinch
the tip between thumb and index finger instead. Left-handers reverse all of it.

### Draw filing

Once cross filing has produced the shape, draw filing with a smooth file
finishes it. Hold the file across the work between the thumbs and fingers of
both hands, index fingers steering and applying pressure, with the file at right
angles to the direction of the stroke. The thumbs push it away and the fingers
draw it back. Keep the pressure even and do not let the file rock, or it will
round the edges. Do not draw file for long stretches: it takes more metal from
the centre of the stroke than from the ends, so the surface slowly goes convex.

### Cleaning a file

A clogged file behaves exactly like a blunt one — it skates and burnishes
instead of cutting. Clear the teeth regularly with a file brush (file card),
brushing *in line with* the grooves. Particles that have wedged in, called
pinning, are pushed out with a piece of soft metal such as brass or copper,
worked across the face and along the grooves. Rubbing chalk into a new file
reduces pinning on soft metals like aluminium.

## On the job

- Match the hammer to the target: steel face for steel, soft face or mallet for copper, aluminium, plastic and machined surfaces.
- Check the head, handle and face before every use; retire mushroomed tools.
- Never use a file without its handle fitted.
- Cut on the forward stroke, float on the return, and vary the direction so the surface stays flat.
- Shape with a double-cut bastard, finish with a single-cut smooth, and brush the teeth out as you go.
`,
          quiz: [
            {
              q: "You need to drive an aluminium fan hub onto a motor shaft without marking it. Which tool is correct?",
              options: [
                "A 1.5 kg ball pein hammer, struck squarely",
                "A hide, copper or plastic mallet",
                "A cross pein hammer used on its pein",
                "A ball pein hammer with the ball end leading",
              ],
              answer: 1,
              explain: "A soft-faced mallet deforms itself instead of the workpiece, which is exactly what you want on aluminium or copper. Any steel-faced hammer, whichever end you use, has a hardened face that will bruise the hub — and the ball pein is for spreading rivet ends, not for driving components on.",
            },
            {
              q: "Why is downward pressure applied only on the forward stroke when filing?",
              options: [
                "Because pressure on the return stroke would bend the file",
                "Because the teeth cut only in the forward direction, so return-stroke pressure just dulls them",
                "Because the file would otherwise cut too deeply and go undersize",
                "Because the handle would work loose from the tang",
              ],
              answer: 1,
              explain: "File teeth are formed to cut one way. Dragging them backwards under load rubs the cutting edges away with no metal removed, so the file goes blunt for nothing. The file is still kept lightly in contact on the return to keep the stroke on line.",
            },
            {
              q: "A file has stopped cutting and is sliding across the work leaving a shiny surface. What is the most likely cause and cure?",
              options: [
                "The grade is too coarse — change to a dead smooth file",
                "The teeth are pinned with metal particles — clear them with a file brush along the grooves",
                "The file is single-cut — change to double-cut",
                "The work is too hot — apply cutting oil to the file",
              ],
              answer: 1,
              explain: "Metal wedged between the teeth (pinning) makes a good file behave like a blunt one, and the burnished shine is the giveaway. A file card used in line with the grooves, plus a soft metal strip for stubborn particles, restores the cut. Cutting oil on a file makes clogging worse, not better.",
            },
            {
              q: "Which statement about file grades is correct?",
              options: [
                "Bastard is finer than smooth",
                "Double-cut files give a finer finish than single-cut files",
                "Grades from finest to coarsest run dead smooth, smooth, second cut, bastard, coarse, rough",
                "Rough files have the smallest tooth pitch",
              ],
              answer: 2,
              explain: "The grade sequence runs dead smooth, smooth, second cut, bastard, coarse, rough, with tooth pitch and depth increasing along the way. Double-cut files remove metal faster but leave a rougher surface, so shaping is done double-cut and finishing single-cut.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "hacksaws-and-snips",
          title: "Hacksaws and snips",
          minutes: 11,
          simple: "A hacksaw is a thin toothed blade stretched tight in a frame — the tension is what stops it wandering and snapping. Snips are scissors with enough leverage to shear sheet metal. Both fail in the same way: the wrong tooth pitch or the wrong blade for the thickness, and you end up with stripped teeth or twisted blades.",
          refs: REFS,
          content: `
Cutting steel and sheet by hand is still a daily job — cutting threaded rod and
angle to length for a plant frame, trimming duct and cabinet panels, opening up
a sheet-metal penetration. Neither the hacksaw nor the snips is difficult, but
both are unforgiving of the wrong selection.

## The hacksaw

A hacksaw is a steel frame, usually adjustable for blade length, into which a
heat-treated alloy steel blade is clipped and then tensioned with the wing nut
or tensioning screw. That tension is doing real work: a slack blade wanders off
line, twists in the cut and snaps.

Alternate teeth are **set** — bent slightly left and right, exactly as in a wood
saw — so that the cut, or kerf, is wider than the blade body. Without set, the
blade binds in its own cut and jams.

### Choosing the pitch

Blades come in a range of tooth pitches, and the choice is governed by one rule:

> At least two, and preferably three, teeth must be in contact with the material
> at all times. Fewer than that and the work straddles a single tooth, which
> then strips off.

Within that rule, use the coarsest pitch you can. Coarse teeth have bigger gullets,
clear the swarf and cut freely. So:

| Material | Pitch to choose | Why |
|---|---|---|
| Thin sheet, small tube, conduit, thin-wall angle | Fine | Thin walls need several fine teeth engaged at once |
| Solid bar, thick section | Coarser | Fast free cutting, and the section is thick enough to keep three teeth engaged |
| Soft metals — aluminium, brass, copper | Coarser | Big gullets stop the soft swarf clogging the teeth |

### Using it well

- Clamp the work in the vice close to the cut. Overhang means spring and chatter, which breaks teeth.
- Make sure the work is genuinely secure. Frail parts, thin tube and odd shapes need a proper clamping device or a shaped block, not just extra vice pressure — judgement is needed, because too much grip crushes tube.
- Hold the saw with both hands, one on the handle, one on the front of the frame. This kills sideways movement and saves blades.
- Use long, steady strokes over the full blade length, and vary speed and pressure to suit the material, its thickness and the state of the blade. Release the pressure on the return stroke.
- Ease off as the cut breaks through, and support any overhanging offcut, otherwise the last stroke jams and snaps the blade.
- If a blade breaks part way through a cut, do not finish with a new blade in the old cut. A new blade has more set and will jam in the narrower kerf. Turn the work and start a fresh cut, or use a part-worn blade in the old one.
- Keep the cut straight. A run wanders the blade sideways, cramps it, and breaks it.
- Clean rust, scale or grit off before starting a cut — abrasive surfaces destroy the teeth in the first few strokes.
- Sandwich thin sheet between two pieces of wood or soft metal and saw through all three; the sandwich supports the sheet and keeps several teeth engaged.

### Sawing pipe and tube

Sawing round a pipe, the teeth meet the far wall at a very different angle from
the near wall. On one side they enter the metal gradually; on the other they
slam into a sharp corner and strip. The fix is to rotate the pipe in the vice as
the cut progresses so that cutting always happens on the near side, keeping the
saw at an angle that keeps two — preferably three — teeth on the metal.

## Snips

Snips, or hand shears, are two levers each carrying a blade, pivoted on a bolt
or rivet. The metal is sheared between the blades as they pass one another, and
the long handles give the leverage to cut thin sheet one-handed. Blades are
usually in line with the handles; offset or cranked handles keep your knuckles
clear of the cut sheet.

Snips are sized by overall length in millimetres, with cutting edges between
about 50 mm and 115 mm long.

| Type | Blade form | Best used for |
|---|---|---|
| Straight-blade | Straight cutting edges | Straight cuts and gentle curves. Right-hand snips cut right to left with the sheet in the left hand; left-hand snips the reverse |
| Curved-blade | Curved, more sharply near the tip | Inside curves and circles of varying radius |
| Universal | Heavy, well-machined shaped blades | The best all-round choice — almost any cut with a clean edge |
| Aviation | Compound lever action, light serrated blades | All thicknesses up to about 1.2 mm; the compound linkage multiplies hand force |

### Matching snips to thickness

- Mild steel 0.8 mm and thinner: straight or combination snips.
- Mild steel 1.0 mm to 1.6 mm: universal heavy-duty snips with handles long enough to give proper purchase.

Do not force undersized snips through heavy sheet. The blades twist, and once
twisted they never shear cleanly again.

### Adjustment and sharpening

Snips must be oiled and correctly adjusted so they cut easily and leave a
burr-free edge. The pivot test: hold the snips up by one handle only — correctly
adjusted, the blades should just fall open under their own weight. If they are
stiff, the pivot bolt is too tight; if they flop and the blades bind or ride
apart, it is too loose.

Sharpening sequence:

1. Clamp the blade in a vice.
2. Draw file the cutting edge with a smooth single-cut file, holding an 86 degree angle, working the full length of the blade.
3. Refine the edge with a carborundum stone.
4. Take the small burr off the inside face with a light pass on the stone.

>! Sheet metal edges are as sharp as the snips that made them. Wear gloves when
>! handling freshly cut sheet, keep your free hand behind the cutting line, and
>! roll or dress cut edges before anyone reaches past them inside a cabinet or
>! plenum.

## What to remember

- Blade tension and two-to-three teeth in contact prevent nearly every hacksaw failure.
- Coarse pitch for thick and soft, fine pitch for thin and hard.
- Rotate pipe as you cut so the teeth never hit a sharp corner.
- Universal snips are the sensible general-purpose pair; aviation snips handle up to 1.2 mm.
- Correctly adjusted snips fall open under their own weight; sharpen the edge at 86 degrees and de-burr the inside face.
`,
          quiz: [
            {
              q: "You are cutting 0.9 mm wall copper tube with a hacksaw. Which blade and why?",
              options: [
                "A coarse-pitch blade, because copper is soft and clogs fine teeth",
                "A fine-pitch blade, so that at least two or three teeth are in contact with the thin wall at all times",
                "Any pitch, provided the blade is tensioned",
                "A coarse-pitch blade turned backwards in the frame",
              ],
              answer: 1,
              explain: "The two-to-three teeth rule wins here: a coarse blade would straddle the thin wall on a single tooth and strip it. The coarse-for-soft-metal guidance applies to thick sections of soft metal, where clogging matters and there is enough thickness to keep three teeth engaged.",
            },
            {
              q: "A blade snaps halfway through cutting a 25 mm bar. What is the correct next step?",
              options: [
                "Fit a new blade and carefully continue in the existing cut",
                "Fit a new blade, rotate the work and start a fresh cut — or use a part-worn blade in the old cut",
                "Fit a new blade and increase pressure to re-open the cut",
                "Fit the same blade type but with the teeth facing the handle",
              ],
              answer: 1,
              explain: "A new blade has full set, so its kerf is wider than the one already cut. Forced into the old cut it cramps and breaks immediately. Either start a fresh cut from another face, or use a worn blade whose set matches the existing kerf.",
            },
            {
              q: "How do you check that the pivot on a pair of snips is correctly adjusted?",
              options: [
                "The blades should stay wherever you leave them",
                "The blades should just fall open under their own weight when the snips hang from one handle",
                "The blades should require two hands to open",
                "The blades should overlap by 2 mm when closed",
              ],
              answer: 1,
              explain: "Held by one handle, correctly set snips just fall open. Too tight and cutting becomes hard work; too loose and the blades separate under load, leaving a torn, burred edge instead of a clean shear.",
            },
            {
              q: "Which snips would you select for a straight cut in 1.2 mm mild steel sheet?",
              options: [
                "Small straight-blade snips, worked in short bites",
                "Curved-blade snips",
                "Universal heavy-duty snips with long handles",
                "Aviation snips used with both hands on one handle",
              ],
              answer: 2,
              explain: "Above about 1.0 mm in mild steel the job calls for universal heavy-duty snips with handles long enough for proper purchase. Straight snips are rated for 0.8 mm and lighter, and forcing them twists the blades permanently; curved-blade snips are for inside curves.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "marking-out",
          title: "Marking out and layout tools",
          minutes: 10,
          simple: "Marking out is drawing the job full size on the metal before you cut it. You paint the surface dark, scratch fine lines on it with a hardened point, and dot the centres so the drill has somewhere to bite. Every measurement comes off one starting line so small errors do not pile up.",
          refs: REFS,
          content: `
Marking out is the step between the drawing and the cutting. Getting it right
costs a few minutes; getting it wrong costs the material. For a technician it
means laying out the fixing holes in a mounting plate, the cut line for a
penetration, the bend lines in a sheet-metal tray, or the bracket that has to
line up with holes already in a wall.

## The layout kit

| Tool | What it does | Points that matter |
|---|---|---|
| Steel rule | Direct measurement and straight edges | Read it standing on its edge so the graduations touch the work — this removes parallax error. Timber rulers and tape measures are not precision instruments |
| Scriber | Scratches the line | Must be sharp. One firm stroke should produce the line; repeated scratching gives a fuzzy double line |
| Marking blue (layout dye) | Dark background so scribed lines show | Thin with methylated spirits if it goes gluey. A weak copper sulphate solution also works, plating a thin copper film on cleaned steel |
| Surface plate | Flat reference for marking out and testing flatness | An accurately machined cast iron plate. Test flatness with dye and a figure-of-eight motion so the plate wears evenly. Keep it covered and use it for nothing else |
| Try square | Marks and checks right angles | Blade flat on the work. Many patterns also mark 45 degrees |
| Centre punch | Dots hole centres so the drill starts true | Point ground to a 90 degree included angle, kept sharp |
| Prick punch | Fine marking dots and witness marks | Same tool with a sharper 60 degree point, for delicate layout |
| Scribing block | Scribes lines a set height above the plate | Used on the surface plate to mark horizontal lines |
| Outside and inside calipers | Transfer external and internal sizes to a rule | Spring type or friction-joint type; they compare sizes, they do not read them |
| Jenny (odd-leg) calipers | Lines parallel to an edge, centres of bar, arcs from an edge | One leg hooks the edge, the other carries the scriber point |
| Centre square | Finds the centre of the end of round bar | Two strokes at roughly 90 degrees to each other cross at the centre |
| Combination set | Rule plus square head, centre head and protractor | Square and angle marking, centre finding, and the square head usually carries a spirit level and a small scriber |
| Bevel gauge | Checks an angle, or copies one from part to part | Set it on the original and transfer without ever reading the angle |

## Working from a datum

The single most useful habit in marking out is to scribe a **datum line** — one
clean reference line, on an edge or at some convenient place on the work — and
take every other measurement from that line.

Why it matters is easiest to see by doing it wrong. Suppose four holes are to be
spaced 50 mm apart. Measuring each one from the last, and being 0.5 mm generous
each time, puts the fourth hole 2 mm out of position, and the error is invisible
until the part will not fit. Measuring 50, 100, 150 and 200 mm from a single
datum keeps every hole within its own 0.5 mm and the accumulated error never
builds.

The same thinking applies to a datum face and a datum edge. On a mounting plate,
pick the edge that will locate against something in service, square everything
from it, and the part will sit right even if the outline is slightly out.

## A working sequence

1. Clean and de-burr the workpiece. Dye will not stick to oil, and a burr lifts the part off the surface plate.
2. Apply marking blue to the area to be marked and let it dry.
3. Scribe the datum line, then square the second datum from it with the try square or the combination set.
4. Measure and scribe all remaining lines from the datums, reading the rule on edge.
5. Check the layout against the drawing before touching a punch — a scribed line can be re-blued and redone, a drilled hole cannot.
6. Prick punch the intersections, check the dots are on the crossings, then open the ones that are to be drilled out with the centre punch.
7. For round work, find the centre with the centre square or the centre head of the combination set, and use jenny calipers to scribe lines parallel to an edge.

> Circles and arcs are scribed with dividers from a punched centre. Punch the
> centre before you scribe the circle, not after — the punch will push the metal
> and lose the line if you do it the other way round.

>! Scribers, dividers and punches are needle-sharp hardened points. Never carry
>! one loose in a pocket, cap or sheath the point in the toolbox, and never
>! strike a punch whose head has mushroomed — the hardened rim throws chips.
>! Safety glasses go on before the first punch blow.

## On the job

- Read a steel rule on its edge; keep tapes for rough sizing only.
- Blue the surface first, so a fine scribed line is actually visible.
- One firm scriber stroke, not several light ones.
- Everything comes off a datum line or datum edge, never chained measurement to measurement.
- Centre punch every hole before drilling, 90 degrees for drill starts and 60 degrees for fine layout marks.
- Look after the surface plate: covered, clean and used only for marking out.
`,
          quiz: [
            {
              q: "What is the point angle of a centre punch used to mark hole centres before drilling, and how does a prick punch differ?",
              options: [
                "Centre punch 60 degrees; prick punch 90 degrees for drill starts",
                "Centre punch 90 degrees; prick punch 60 degrees for fine layout marking",
                "Both are 118 degrees, matching the drill point",
                "Centre punch 120 degrees; prick punch 45 degrees",
              ],
              answer: 1,
              explain: "The centre punch is ground to 90 degrees, giving a wide cone that matches the chisel edge of a drill and stops it wandering. The prick punch has a finer 60 degree point for delicate layout dots and witness marks; it is too fine to locate a drill properly.",
            },
            {
              q: "Why should all measurements on a marked-out job be taken from a single datum line?",
              options: [
                "Because scribed lines fade if they are drawn from different directions",
                "Because it is faster than measuring step by step",
                "Because measuring each feature from the previous one lets small errors accumulate into a large positional error",
                "Because marking blue only holds a line in one direction",
              ],
              answer: 2,
              explain: "Chained measurement adds every small error together — four 50 mm steps each half a millimetre generous puts the last hole 2 mm out. Measuring 50, 100, 150 and 200 mm from one datum keeps each feature within its own tolerance, and the errors never compound.",
            },
            {
              q: "Which tool would you use to scribe a line parallel to the edge of a flat bar?",
              options: [
                "Outside calipers",
                "Jenny (odd-leg) calipers",
                "Bevel gauge",
                "Scribing block on a surface plate",
              ],
              answer: 1,
              explain: "Jenny or odd-leg calipers have one bent leg that rides the edge and one scriber point, so they trace a line at a set distance from that edge; they also find the centre of bar and scribe arcs from an edge. Outside calipers only compare external sizes, and the scribing block needs the work standing on a surface plate.",
            },
            {
              q: "A surface plate is being checked for flatness using marking dye. Why is a figure-of-eight motion used?",
              options: [
                "It applies the dye more evenly",
                "It spreads the wear over the whole plate instead of one track",
                "It is required to break the surface tension of the dye",
                "It prevents the workpiece from being magnetised",
              ],
              answer: 1,
              explain: "Rubbing the test piece backwards and forwards along one line would slowly wear a hollow in that track and destroy the plate's reference value. The figure-of-eight distributes contact over the plate. Surface plates are also kept covered and never used as an anvil or bench.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "threads-and-fasteners",
          title: "Vee-form screw threads, fasteners and torque",
          minutes: 14,
          simple: "A bolt is a ramp wrapped round a cylinder. Tightening it stretches the bolt slightly, and that stretch is what clamps the joint together — the friction from the stretch is what stops the nut undoing. Threads come in families that look alike but will not mix, so you measure the diameter and the pitch before you assume anything fits.",
          refs: REFS,
          content: `
Screw threads hold refrigeration plant together: compressor holding-down bolts,
flanged service valves, bolted valve plates, cabinet panels, threaded pipe
joints, brackets and rails. They also cause a large share of avoidable failures,
because a stripped thread, a cross-threaded fitting or a bolt that vibrated
loose usually means the machine comes down.

## Thread terminology

- **Pitch** — the distance from a point on one thread to the same point on the next, measured parallel to the axis.
- **Lead** — how far the screw advances along its axis in one full turn. On a single-start thread lead equals pitch; on a two-start thread the lead is twice the pitch.
- **Hand** — the direction of turning that advances the thread. A right-hand thread advances when turned clockwise; nearly everything is right-hand, but left-hand threads exist deliberately, such as the nut on the left-hand spindle of a bench grinder.
- **Major diameter** — the outside diameter of the male thread; **minor (root) diameter** — the diameter at the bottom of the thread, and the diameter that actually carries the tensile load.
- **Length of engagement** — how much thread is actually in mesh. Too little, and the threads strip before the bolt reaches its clamping load.

## The thread families

| Family | Thread angle | Where it is used | Notes |
|---|---|---|---|
| ISO metric coarse and fine | 60 degrees | The Australian standard for general engineering | Designated by major diameter in mm, with pitch stated: M8 x 1.25. If the pitch is not stated, the coarse series is implied |
| Unified coarse, UNC | 60 degrees | General-purpose imperial bolts and nuts | Replaced the older American national coarse (SAE) series and interchanges with it |
| Unified fine, UNF | 60 degrees | Where minor-diameter strength matters or where vibration would slacken a coarse nut | Finer pitch, larger minor diameter, more turns per unit length |
| British Standard Whitworth, BSW | 55 degrees, rounded crest and root | Older imperial general-purpose bolts, nuts and screws | Coarse series of the Whitworth form |
| British Standard Fine, BSF | 55 degrees | Older equipment needing a finer pitch | Bigger minor diameter and less tendency to loosen under vibration |
| British Standard Brass, BSB | 55 degrees | Brass fittings | 26 threads per inch at every diameter |
| British Standard Pipe, BSP | 55 degrees | Water, steam and gas pipework | Still met on plant rooms and older gauge and valve connections |

The critical practical point: metric and unified threads share a 60 degree
included angle, Whitworth-form threads use 55 degrees with rounded crests and
roots, and none of them are interchangeable. An M6 nut will start onto a 1/4 inch
UNC bolt and feel almost right for two turns before it wrecks both.

## Identifying an unknown thread

1. Measure the **major diameter** with a vernier caliper or micrometer. Round to the nearest nominal size — a nominal M10 bolt measures slightly under 10 mm.
2. Determine the **pitch** with a thread pitch gauge. The leaves are laid across the thread until one seats along the whole length with no rocking or light gaps. Metric gauges read the pitch directly in millimetres; imperial gauges read threads per inch. Separate gauges are needed for each thread form.
3. Look the diameter and pitch up in a **thread chart** to name the thread.

If you have no gauge, count the crests over a measured 25 mm with a rule and
divide: 20 crests in 25 mm means a 1.25 mm pitch.

## Fastener types

- **Bolt** — plain shank under the head, threaded only at the far end, used with a nut through a clearance hole.
- **Setscrew** — threaded the full length, usually screwed into a tapped hole.
- **Stud** — threaded at both ends, screwed permanently into one part with a nut on the other end. Used on compressor covers and valve plates so the tapped hole in the casting is not worn out by repeated bolting.
- **Grub screw** — headless, tightened with a hex key, as on fan and pulley hubs.
- **Self-tapping screw** — cuts or forms its own thread in sheet metal; a staple of ducting and cabinet work.
- **Metal thread screw, coach screw, carriage or cup-head bolt, tyre bolt** — variations on head form and shank for particular jobs.
- Head types include hexagon, socket (hex key), round, cup or mushroom, countersunk, and fillister or cheese head.

Washers and locking devices:

| Device | How it works |
|---|---|
| Flat washer | Spreads the clamping load, protects the surface, bridges an oversize hole |
| Spring washer | A split, sprung ring that keeps some load on the thread as the joint relaxes |
| Star (shakeproof) washer | Serrations bite into the nut face and the joint face |
| Tab washer | A lug is bent up against a flat of the nut to physically block rotation |
| Castellated or slotted nut with split pin | Positive mechanical lock, used where failure is unacceptable |
| Nyloc / lock nut | A nylon insert or deformed thread that grips the male thread |

**High-tensile bolts** carry a marking on the head — on metric bolts a property
class such as 8.8, 10.9 or 12.9. In class 8.8 the first figure is the tensile
strength in hundreds of megapascals (800 MPa) and the second gives the yield as
a fraction of it (0.8, so 640 MPa). Never replace a marked high-tensile bolt
with an unmarked commercial one; compressor and motor mountings are frequently
class 8.8 for a reason.

## Describing a fastener when ordering

Give diameter and pitch (M5 x 0.8, or 1/2 inch Whitworth), the thread name if it
is not metric, the head type, the type of fastener, the length in millimetres not
counting the head, the material, any plating, and anything needed with it such
as nuts and washers. "M10 x 1.5, hexagon head bolt, 60 mm, class 8.8, galvanised,
with nut and spring washer" leaves nothing to interpretation.

## Torque — why we measure it

Tightening a bolt stretches it. That stretch produces the clamping force, or
preload, that actually holds the joint and stops the threads moving under
vibration. We cannot measure the stretch on site, so we measure the torque
needed to produce it, using the relationship:

**T = K x d x F**

where T is torque in newton metres, d the nominal bolt diameter in metres, F the
required preload in newtons, and K a nut factor covering thread and face
friction — around 0.2 for plain dry steel, about 0.15 lightly lubricated.

### Worked example

An M10 class 8.8 bolt is to be tightened to a preload of 25 kN, dry.

- T = K x d x F
- T = 0.2 x 0.010 m x 25 000 N
- T = **50 N.m**

Now oil the same thread. K falls to about 0.15, so the torque needed for the
same 25 kN drops to 0.15 x 0.010 x 25 000 = 37.5 N.m. Apply the dry 50 N.m
figure to a lubricated bolt and the preload rises to about 33 kN — roughly a
third more than intended, which is how bolts get stretched past yield or snapped
by someone who thought they were being careful.

Typical published dry tightening torques for class 8.8 coarse-thread bolts run
close to 10 N.m at M6, 25 N.m at M8, 49 N.m at M10 and 85 N.m at M12 — but these
are a fallback only. Where a manufacturer specifies a torque, for example on a
compressor valve plate, cylinder head or a bolted flange, use that figure and
that tightening sequence.

>! Never guess torque on a pressure-containing joint. Under-tightening a valve
>! plate or flange leaks refrigerant; over-tightening distorts the gasket face so
>! it leaks anyway, or snaps a bolt inside a casting. Use a calibrated torque
>! wrench, tighten in the specified crossing pattern in two or three passes, and
>! never use a torque wrench as a breaker bar to undo bolts.

## What to remember

- Pitch, diameter and thread form together identify a thread; measure, do not guess.
- 60 degrees for metric and unified, 55 degrees for the Whitworth family.
- Fine pitches resist vibration loosening and leave more metal at the root.
- Torque is only a proxy for bolt stretch, and friction changes the relationship — lubricated threads need less torque, not the same.
- Match the class marking when replacing high-tensile bolts.
`,
          quiz: [
            {
              q: "A technician oils the threads of an M10 class 8.8 bolt and then tightens it to the manufacturer's dry torque figure. What is the consequence?",
              options: [
                "The preload will be lower than intended because oil reduces grip",
                "The preload will be roughly a third higher than intended, risking yielding or breaking the bolt",
                "The preload is unaffected — torque directly sets clamping force",
                "The bolt will loosen faster because oil prevents the threads from bedding in",
              ],
              answer: 1,
              explain: "Torque only sets preload through the friction factor K. Lubrication drops K from about 0.2 to about 0.15, so the same torque drives roughly 33 per cent more clamping force into the bolt. Applying dry torque values to oiled threads is a common cause of stretched and snapped fasteners.",
            },
            {
              q: "Which thread form uses a 55 degree thread angle with rounded crests and roots?",
              options: [
                "ISO metric coarse",
                "Unified fine (UNF)",
                "British Standard Whitworth (BSW)",
                "Unified coarse (UNC)",
              ],
              answer: 2,
              explain: "The Whitworth family — BSW, BSF, BSB and BSP — uses a 55 degree form with rounded crests and roots. ISO metric and both unified series share a 60 degree angle. That similarity in appearance but difference in form is exactly why a metric nut can start onto a unified bolt and then destroy both.",
            },
            {
              q: "Why is UNF (or any fine-pitch thread) chosen over UNC on equipment subject to vibration?",
              options: [
                "Fine threads are always made from higher-tensile material",
                "The finer pitch gives a larger minor diameter and less tendency for the nut to slacken",
                "Fine threads need no washers",
                "Fine threads have a larger major diameter for the same bolt size",
              ],
              answer: 1,
              explain: "A finer pitch removes less metal from the bolt, leaving a bigger minor diameter carrying the load, and the shallower helix angle plus more engaged turns resists loosening under vibration. Pitch is a geometry choice; it says nothing about the material grade, which is shown by the class marking.",
            },
            {
              q: "You have an unmarked bolt and need to identify the thread. What is the correct procedure?",
              options: [
                "Try nuts from the bin until one runs on freely",
                "Measure the minor diameter and count the flutes",
                "Measure the major diameter, determine the pitch with a thread pitch gauge, then look both up in a thread chart",
                "Measure the head across flats and use a spanner size chart",
              ],
              answer: 2,
              explain: "Major diameter plus pitch identifies the thread when read against a chart, and the pitch gauge leaf must seat along the full length with no rocking. Trial fitting risks damaging good threads on a near miss, and head or spanner size has no fixed relationship to the thread form.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "taps-and-dies",
          title: "Cutting threads: taps, dies and tap drill sizes",
          minutes: 13,
          simple: "A tap cuts a thread inside a hole; a die cuts one on the outside of a rod. The trick with a tap is the hole underneath it — drill it slightly bigger than the bottom of the thread, or the tap has to chew out too much metal and snaps off inside your job. Go half a turn forward, quarter turn back, and keep it wet with cutting fluid.",
          refs: REFS,
          content: `
Being able to cut and repair threads gets a technician out of trouble constantly:
tapping a mounting hole in a channel, running a die down a length of rod for a
hanger, chasing corrosion out of the threads in a condenser frame, or rescuing a
damaged valve boss. It is also the fastest way to make a small job much worse,
because a tap broken off in a blind hole is hardened steel and cannot be drilled
out.

## Taps

A tap is a hardened alloy steel screw with flutes machined along it. The flutes
create the cutting edges and give the chips somewhere to go. Most taps have four
cutting edges per thread, and those edges must stay sharp with a properly ground
cutting face and clearance. There is a tap for every thread diameter and every
thread form.

Taps come as a set of three, differing in the length of the lead taper:

| Tap | Lead taper | Use |
|---|---|---|
| Taper (first) tap | Long lead, around 8 threads tapered | Starting every thread; it aligns itself easily. On a through hole in thin material it may cut the whole thread |
| Second (intermediate) tap | Shorter lead, around 4 threads | Follows the taper tap and does most of the cutting, especially in blind holes |
| Plug (bottoming) tap | Almost no lead | Cuts full-depth thread right to the bottom of a blind hole |

The square on the end of the shank is gripped by a tap wrench — usually the
adjustable double-handled type, or a T-handle for small taps in awkward places.
Power tools can drive taps, but only with a proper tapping attachment that will
release or reverse before the tap breaks.

### Tap drill size — the number that matters most

The hole drilled before tapping must be slightly **larger** than the minor (root)
diameter of the thread. Drill it oversize and the thread is shallow and weak;
drill it undersize and the tap has to remove more metal than it can, jams and
snaps.

The convention is to cut a thread about **75 per cent of full depth**. That
sounds like a compromise, and it is a good one: the last 25 per cent of thread
depth adds only a few per cent of strength but roughly doubles the torque needed
to cut it. In coarse metric threads that lands neatly on a simple rule:

**tapping drill diameter = major diameter − pitch**

### Worked example

Tapping an M8 x 1.25 hole:

- Tapping drill = D − p = 8.00 − 1.25 = 6.75 mm
- The nearest standard drill is **6.8 mm**, which is exactly what the table gives.

Check a second one, M10 x 1.5: 10.0 − 1.5 = 8.5 mm, and the table again says
8.5 mm. The rule of thumb is reliable for coarse threads, but for fine pitches
and for any critical work, use the table.

### ISO metric coarse tapping drills

| Thread | Pitch (mm) | Tapping drill (mm) | Minor dia. of screw (mm) |
|---|---|---|---|
| M1.6 | 0.35 | 1.25 | 1.17 |
| M2 | 0.4 | 1.60 | 1.51 |
| M2.5 | 0.45 | 2.05 | 1.95 |
| M3 | 0.5 | 2.50 | 2.39 |
| M4 | 0.7 | 3.30 | 3.14 |
| M5 | 0.8 | 4.20 | 4.02 |
| M6 | 1.0 | 5.00 | 4.77 |
| M8 | 1.25 | 6.80 | 6.47 |
| M10 | 1.5 | 8.50 | 8.16 |
| M12 | 1.75 | 10.20 | 9.85 |
| M16 | 2.0 | 14.00 | 13.55 |
| M20 | 2.5 | 17.50 | 16.93 |
| M24 | 3.0 | 21.00 | 20.32 |
| M30 | 3.5 | 26.50 | 25.71 |
| M36 | 4.0 | 32.00 | 31.09 |

Notice that in every row the tapping drill sits a little above the minor
diameter of the screw — that gap is the 25 per cent of thread we deliberately
leave uncut.

## Tapping procedure

1. Drill the tapping-size hole square to the surface, and chamfer or countersink the mouth slightly. The chamfer helps the tap enter and stops the first thread lifting a burr.
2. Fit the taper tap in the wrench and start it by hand, pressing lightly.
3. Check for square in two directions at 90 degrees with a try square after the first turn or two. A tap started crooked cuts a crooked thread and there is no fixing it later.
4. Apply thread-cutting lubricant generously — it also acts as coolant.
5. Advance a quarter to half a turn, then reverse the wrench to break the chip, then advance again. This is the single most important habit in tapping. Chips that are not broken pack into the flutes and jam the tap.
6. In a blind hole, back the tap right out and clear the chips regularly, and remember the hole must be drilled deeper than the thread you need.
7. Follow with the second tap, and the plug tap if a full-depth blind thread is needed.

**Lubricant** is not optional. Use a proper thread-cutting compound on steel,
copper, brass and aluminium. The one exception is grey cast iron, which contains
enough free graphite to lubricate itself and is tapped dry.

>! A tap that suddenly feels springy rather than solid is about to break. Stop,
>! reverse, clear the chips and add fluid. Broken taps are hardened and cannot be
>! drilled out — recovery means spark erosion or scrapping the part. On a
>! compressor casting or a valve body that can mean replacing the component.

## Dies

A die cuts an external thread on round stock, matching the thread a tap cuts
internally. Dies are also hardened tool steel, and also need proper cutting
geometry and lubrication.

Unlike a tap, most dies are **adjustable**. A circular split die has a screw that
opens or closes it slightly, so you can take a first light pass and then close
it down until the thread matches a nut or the tapped hole it must fit. A
diestock holds the die: set the central adjusting screw first, then tighten the
two locking screws that hold the die in the stock.

Other forms are the loose die, used in pairs to cut larger threads or to take
progressively deeper cuts, the solid die, and the **die nut**, a hexagonal solid
die turned with a spanner and used only for cleaning up damaged or corroded
threads.

### Using a die

1. Size the stock accurately — it should be at, or a touch under, the nominal major diameter. Oversize stock overloads and can crack the die.
2. Chamfer the end of the rod so the die can lead on.
3. Open the die to its widest setting for the first pass.
4. Start it square, with the tapered lead side of the die facing the work, and press down while turning until it bites. A die starting guide helps here; starting crooked is the usual failure.
5. Lubricate, and again go forward a quarter to half turn, back off to break the chip, forward again.
6. Close the die progressively and repeat until the thread fits its mating nut with a firm, smooth run.

Both taps and dies double as thread-repair tools — running a tap through a
corroded tapped hole or a die nut down a rusted stud restores the fit without
recutting anything.

## On the job

- Tapping drill for coarse metric is major diameter minus pitch; check the table for anything critical.
- 75 per cent thread is the sweet spot between strength and tap breakage.
- Start square, and check with a square before you commit.
- Half a turn on, quarter turn back, every time — chip control is what saves the tap.
- Cutting fluid on everything except grey cast iron.
- Adjust a die open for the first cut, then close it down to fit the mating thread.
`,
          quiz: [
            {
              q: "What tapping drill size should be used for an M6 x 1.0 thread, and how is it derived?",
              options: [
                "6.0 mm — the same as the major diameter",
                "5.0 mm — major diameter minus the pitch",
                "4.77 mm — the minor diameter of the screw",
                "5.5 mm — halfway between major and minor diameter",
              ],
              answer: 1,
              explain: "For coarse metric threads the tapping drill is major diameter minus pitch: 6.0 − 1.0 = 5.0 mm, which matches the table. Drilling exactly to the screw's minor diameter (4.77 mm) would demand a full-depth 100 per cent thread, roughly doubling the cutting torque for a few per cent extra strength, and is a classic way to break a tap.",
            },
            {
              q: "Why is a tap advanced only a quarter to half a turn before being reversed?",
              options: [
                "To let the cutting fluid cool the workpiece between cuts",
                "To break the chip so it cannot pack into the flutes and jam the tap",
                "To allow the thread to be measured after every increment",
                "To stop the thread being cut oversize",
              ],
              answer: 1,
              explain: "Reversing snaps off the chip. Continuous chips wind up in the flutes, wedge between tap and hole, and the rising torque is what actually breaks taps — especially in blind holes. Cooling matters too, but it comes from the cutting fluid, not from the reversal.",
            },
            {
              q: "Which tap would you use to cut a full thread right to the bottom of a blind hole?",
              options: [
                "Taper (first) tap",
                "Second (intermediate) tap",
                "Plug (bottoming) tap",
                "A die nut of the same size",
              ],
              answer: 2,
              explain: "The plug or bottoming tap has almost no lead taper, so it cuts full-depth thread to the bottom. It is used last: the taper tap starts and aligns the thread, the second tap does most of the cutting, and only then can the plug tap follow without having to cut everything itself.",
            },
            {
              q: "Which material is threaded dry, without cutting lubricant?",
              options: [
                "Mild steel",
                "Copper",
                "Grey cast iron",
                "Aluminium",
              ],
              answer: 2,
              explain: "Grey cast iron carries enough free graphite in its structure to lubricate the cut, so it is worked dry. Everything else — steel, copper, brass, aluminium — needs a thread-cutting compound applied generously, which cools as well as lubricates.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "twist-drills",
          title: "Twist drills: geometry and sharpening",
          minutes: 12,
          simple: "A twist drill is two little chisels on the end of a spiral. The spiral grooves carry the chips out and the coolant in. If the two cutting edges are not exactly the same length and angle, only one of them does the cutting and the hole comes out oversize and wobbly.",
          refs: REFS,
          content: `
The double-fluted twist drill is the standard drill of engineering workshops and
of every technician's toolbox. Understanding its geometry is what separates
someone who buys new drills constantly from someone who gets clean, accurate
holes from a drill they sharpened themselves.

## Anatomy of a twist drill

- **Flutes** — the helical grooves. Because they run at an angle to the axis, they provide the *rake angle* at the cutting edges, letting them cut far more freely than the edges of a straight-fluted drill. They also carry cutting fluid down to the cutting edges and chips back out of the hole.
- **Web** — the metal remaining between the bottoms of the flutes. It is thinner at the cutting end and thickens toward the shank, so the drill gets stiffer and stronger the further back you go.
- **Body clearance** — metal relieved behind the lands so that the drill does not rub on the whole hole wall.
- **Lands** — the narrow raised strips left after body clearance is machined. Measured across the lands you get the true diameter of the drill. Because they follow the helix, the lands guide the drill right around a deep hole and keep it round and straight. They are made very slightly larger at the cutting end, to allow for wear and reduce friction.
- **Point** — the whole cutting end, comprising the **cutting edges**, the **lips** (the ground surfaces that form those edges), and the **dead centre** or **chisel point** where the two lips meet, about which the drill rotates.

### Shanks

- **Straight shank** — gripped in a drill chuck. The common form up to about 13 mm.
- **Taper shank** — ground to a standard **Morse taper** and fitted straight into the machine spindle nose, or into a Morse taper sleeve. Morse tapers are an international standard in eight sizes covering the range of drill diameters and machine capacities. The taper both locates and drives the drill; the flat **tang** at the end lets you knock the drill out with a **drift**. If shank and socket are dirty or a poor fit, the drill spins in the taper and the tang gets chewed or broken off.

The shank is stamped with the drill's size and type. Drills are made in
high-carbon steel (cheaper, but it softens if overheated) and in high-speed steel
(HSS), which is what you want for anything driven by a machine.

### Sizes

Metric drills run from 0.2 mm up to 100 mm diameter. Older imperial sets add
**number** drills from No. 80 (0.0135 inch) up to No. 1 (0.228 inch) and
**letter** drills from A (0.234 inch) to Z (0.413 inch) — worth knowing because
imperial tap drill charts and older equipment still refer to them.

## Point geometry

| Feature | Standard value | Why |
|---|---|---|
| Included point angle | 118 degrees | The general-purpose angle; on a standard drill it produces a straight cutting edge |
| Point angle, hard materials | 125 to 140 degrees | Blunter point for steel forgings and alloy steels — stronger corner, less chipping |
| Point angle, soft materials | 90 to 100 degrees | Sharper point penetrates brass, soft cast iron and light aluminium alloys easily |
| Angle of each cutting edge to the axis | 59 degrees, both sides equal | Half of 118 degrees; the two must match |
| Lip clearance | 12 to 15 degrees | Lets the edge cut instead of rubbing |
| Chisel point angle to cutting edge | 120 to 135 degrees | Controls how the dead centre penetrates |

Two rules override everything: the two cutting edge **angles must be equal**, and
the two cutting edge **lengths must be equal**.

## Sharpening

**Machine grinding** is recommended wherever it is available. A drill grinding
jig fixes the relationship between drill and wheel, so the angles come out
correct and the two edges come out equal without depending on the operator.

**Hand grinding** on a bench grinder is a real skill. The drill is presented to
the face of a plain wheel, or the side of a recessed wheel, and rolled and
dropped in one movement to generate the lip and its clearance. Check the result
with a **drill point gauge**, testing both sides so that the angles and the
cutting edge lengths match.

>! Do not overheat the drill while grinding. Take light passes and keep it cool.
>! An HSS drill that has gone very hot must not be quenched in water — the
>! thermal shock puts fine cracks in the cutting edge that break out the first
>! time it is used. Let it cool in air. Eye protection and the correct wheel rest
>! setting apply here just as for any grinding.

### Faults from bad sharpening

| Fault | What happens |
|---|---|
| Unequal cutting edge angles | Only one lip cuts, the drill runs off centre and cuts an oversize hole; a ridge is left where it breaks through |
| Unequal cutting edge lengths | The point is off the axis, so the drill cuts oversize and wanders |
| Excessive lip clearance | The cutting edge is unsupported and breaks away |
| Insufficient lip clearance | The lip rubs rather than cuts; the drill squeals, heats and will not penetrate |

The consequence of an oversize hole is not academic. A 10 mm bolt in a 10.6 mm
hole cut by a badly sharpened drill has lost its location, and a bracket bolted
through it will creep under vibration.

### Point thinning

After repeated sharpening the point works back into the thicker part of the web.
A thick web at the point means a long chisel edge that pushes rather than cuts,
so the drill needs heavy feed force and wanders on starting. **Point thinning** —
grinding a small relief at the centre to narrow the web — restores easy
penetration without changing the lip geometry.

## Lubrication

| Material | Cutting compound |
|---|---|
| Mild steel, copper, bronze | Soluble cutting oil |
| Aluminium | Kerosene or lard oil |
| Cast iron, brass bar | Drilled dry |

The compound lubricates the rubbing surfaces and, applied generously, carries
heat away from the cutting edge. Heat is what destroys drills: once the edge
loses its hardness it will never cut again until it is ground back past the
damage.

## What to remember

- 118 degrees included, 59 degrees each side, 12 to 15 degrees lip clearance is the general-purpose grind.
- Equal angles and equal lengths matter more than hitting the exact angle.
- Blunter points (125 to 140) for hard metals, sharper (90 to 100) for brass and aluminium.
- Machine grind if you can; check any hand grind with a gauge, both sides.
- Never quench a hot HSS drill in water.
- Cast iron and brass dry, soluble oil on steel and copper, kerosene on aluminium.
`,
          quiz: [
            {
              q: "A newly hand-sharpened drill produces a hole 0.5 mm oversize and leaves a ridge at breakthrough. What is the most likely cause?",
              options: [
                "Too little lip clearance",
                "Unequal cutting edge angles or unequal edge lengths, so only one lip is cutting",
                "The point angle was ground to 118 degrees instead of 140 degrees",
                "The drill was run too slowly",
              ],
              answer: 1,
              explain: "When the two lips are not identical, one takes all the cut and the drill swings about an axis offset from its centreline, sweeping an oversize hole and leaving a ridge where the effect is smallest at breakthrough. Too little lip clearance produces rubbing, heat and no penetration — a different symptom.",
            },
            {
              q: "An HSS drill has become very hot during hand sharpening. What should you do?",
              options: [
                "Quench it immediately in water to restore hardness",
                "Quench it in cutting oil to temper it",
                "Let it cool in air — water quenching can cause fine cracks",
                "Continue grinding; heat improves the temper of HSS",
              ],
              answer: 2,
              explain: "Quenching very hot high-speed steel in water thermally shocks the surface and puts fine cracks in the cutting edge, which break out in service. The correct practice is to avoid overheating by taking light passes, and to let a hot drill cool in air.",
            },
            {
              q: "What is the purpose of point thinning?",
              options: [
                "To reduce the point angle from 118 to 90 degrees for soft metals",
                "To narrow the web at the point so the long chisel edge does not need excessive feed force",
                "To increase the lip clearance angle",
                "To make the two cutting edges equal in length",
              ],
              answer: 1,
              explain: "The web thickens toward the shank, so a drill that has been shortened by repeated sharpening ends up with a thick web and a long chisel edge that pushes rather than cuts. Thinning grinds a relief at the centre to restore penetration. It does not alter the point angle, the lip clearance or the edge lengths.",
            },
            {
              q: "You are drilling a bracket from cast iron. Which cutting compound should be used?",
              options: [
                "Soluble cutting oil",
                "Kerosene",
                "Lard oil",
                "None — cast iron is drilled dry",
              ],
              answer: 3,
              explain: "Cast iron and brass bar are drilled dry; the graphite in grey cast iron provides its own lubrication, and adding fluid just makes an abrasive paste of the powdery swarf. Soluble oil is for mild steel, copper and bronze, and kerosene or lard oil for aluminium.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "drilling-machines",
          title: "Drilling: machines, speeds, feeds and holding the work",
          minutes: 14,
          simple: "The right drill speed is a matter of how fast the outside edge of the drill sweeps through the metal. Big drills must turn slowly and small drills fast, so the edge travels at the same speed either way. Then hold the work down properly — a loose piece of sheet spins into a metal propeller the instant the drill breaks through.",
          refs: REFS,
          content: `
Drilling looks like the easiest machining operation and produces more workshop
injuries than almost any other, nearly all from work that was not held down. It
also produces a lot of ruined holes, mostly from running the drill at the wrong
speed.

## The machines

**Portable electric rotary drill.** The site workhorse. With an HSS twist drill it
handles metal; with a carbide-tipped masonry bit it drills brickwork and
composition stone. For masonry the machine must have a **low speed range**, for
two reasons. The dust from masonry is highly abrasive and will grind the flutes
away at high speed, and the carbide tip overheats at high speed until the braze
holding it on melts and the tip comes off.

**Rotary hammer drill.** For larger or deeper masonry holes — anchoring plant
plinths, hanging pipe supports. It delivers rapid hammer blows along the axis of
the bit for penetration while rotating it slowly to stop it jamming and to help
clear the dust.

**Bench drill press.** Typically 15 mm chuck capacity. The spindle is fed by the
hand lever. A depth stop, in the form of a marked bar, a screwed ring or a dial
on the shaft, sets how deep the hole goes; depth is measured at the full diameter
of the hole, not to the tip of the point. The table height is set by releasing
the column clamp, and some presses have a second clamp to tilt the table.

**Column drilling machine.** The light-duty type is essentially a bench machine
on a long column with a Morse taper spindle and often a larger spindle pulley for
extra slow speeds. The heavy-duty type has a rigid frame to damp vibration, a
gearbox drive for a wide speed range, a direct-coupled motor with no belt slip,
power feed through a quick-change feed gearbox, forward and reverse for tapping,
and a coolant pump and tank.

**Radial arm drilling machine.** A heavy engineering machine, rarely met in
refrigeration work.

### Setting speed on a belt-driven press

Speed is changed by moving the vee-belt between the stepped pulleys:

**(driver pulley diameter ÷ follower pulley diameter) x motor rev/s = spindle rev/s**

Move the belt off the larger pulley first. Worked example: a motor running at
24 rev/s (1440 rpm) with a 50 mm driving pulley belted to a 100 mm follower gives
(50 ÷ 100) x 24 = 12 rev/s at the spindle, which is 720 rpm.

>! Never change the belt, adjust the table or touch the chuck with the machine
>! running or able to start. Isolate first. On any belt-driven machine the guard
>! over the pulleys is closed before the motor is started.

## Drill speed — the calculation

Speed is really about **cutting speed**, v: how fast the outer corner of the
cutting edge travels through the metal, in metres per minute. Each combination of
tool material and work material has a cutting speed it tolerates. The spindle
speed to achieve it is:

**N = 1000 v / (π D)**

where N is spindle speed in rpm, v the cutting speed in m/min, and D the drill
diameter in mm.

Typical cutting speeds for HSS drills:

| Material being drilled | Approximate cutting speed, v (m/min) |
|---|---|
| Aluminium, brass, bronze, plastics, hard rubber | 60 |
| Mild steel | 30 |
| Copper and tool steel | 18 |
| Alloy steel and cast steel | 12 |

### Worked example 1 — 10 mm hole in mild steel

- N = 1000 v / (π D)
- N = (1000 x 30) / (3.1416 x 10)
- N = 30 000 / 31.42
- N = **955 rpm**

Set the nearest available speed, which on a stepped-pulley press might be
1000 rpm. Published drill speed tables give 1018 rpm for this combination, so the
calculation and the table agree.

### Worked example 2 — 6 mm hole in aluminium

- N = (1000 x 60) / (3.1416 x 6)
- N = 60 000 / 18.85
- N = **3183 rpm**

Small drill, soft metal, high speed. Compare that with the same 6 mm drill in
alloy steel: N = 12 000 / 18.85 = 637 rpm, a fifth of the speed. Same drill,
completely different setting — the material decides.

Reference speeds for a few common combinations (rpm, HSS drills):

| Drill dia. (mm) | Aluminium / brass | Mild steel | Copper / tool steel | Alloy / cast steel |
|---|---|---|---|---|
| 2.5 | 8142 | 4071 | 2442 | 1649 |
| 5.0 | 4075 | 2073 | 1222 | 815 |
| 8.0 | 2445 | 1222 | 733 | 489 |
| 12.5 | 1528 | 764 | 458 | 306 |
| 19.0 | 1018 | 509 | 306 | 204 |
| 25.5 | 764 | 382 | 229 | 153 |

Select the machine speed nearest the figure. For **automatic (power) feed**, cut
these speeds to roughly half.

Excessive speed shows up as overheating of the drill, and heavy wear on the outer
corners and on the lands. Those corners are where the cutting speed is highest,
so they burn first.

## Feed

Feed is how far the drill advances into the work per revolution. Selecting it
depends on:

- **Drill size** — larger drills take coarser feeds.
- **The metal** — hard, tough materials need finer feeds.
- **The machine** — a large, rigid, powerful machine tolerates coarser feeds than a light bench press.

Feeding by hand needs care, especially as the point breaks through the far side,
where the drill grabs and snatches. And note the counter-intuitive one: running a
small drill *slower* than its correct speed increases breakage risk, because the
operator compensates with feed force the thin drill cannot take.

## Setting up the hole

Four conditions must be satisfied for a correctly positioned hole:

1. The drill is located so its axis coincides with the spindle axis.
2. The drill and spindle rotate together without slip — the drill is restrained by the chuck or taper.
3. The workpiece is located so the hole centre lines align with the spindle axis.
4. The workpiece is restrained so it cannot be dragged round by the drill or deflected by the feed force.

Practical rules that follow:

- Always centre punch the hole centre.
- Drill a pilot hole where accuracy matters on holes over about 10 mm. The minimum pilot diameter is the width of the point (the chisel edge) of the final drill, so the chisel edge has nothing to push. Do **not** pilot drill soft materials such as brass, wood, bakelite and plastics — the drill grabs and screws itself into the hole.
- Hold the work in a drill vice clamped to the table, or clamp larger pieces directly to the table. Use vee-blocks for round components so they cannot roll.

## Large holes in thin sheet

Cutting cable and pipe penetrations through cabinet panels is constant work, and
a twist drill is the wrong tool: thin sheet gives the point nothing to guide on
and cannot resist the cutting forces, so the hole comes out out-of-round and
jagged, often with the sheet torn.

The usual answer is the **hole saw** — a cylindrical saw blade with a pilot drill
in the centre. It is cheap, cuts a clean round hole and runs in a portable drill.
Its limits are a separate saw for each size, no possibility of regrinding, and a
fairly short blade life. Run it at **slow speed with gentle pressure** — hole saws
are killed by heat.

>! Drilling machine safety, without exception: hold the work in a vice or clamp,
>! never in your hand; safety goggles on; no loose clothing, no dangling lanyard,
>! long hair tied back and away from the chuck and drill; never clear swarf with
>! your fingers, use a brush or hook; do not lean on the feed lever. Sheet metal
>! spun off the table by a grabbing drill becomes a rotating blade at head height.

## On the job

- N = 1000 v / (π D); big drill, slow speed.
- Halve the calculated speed for power feed.
- Overheating, and worn outer corners and lands, mean the speed is too high.
- Centre punch always; pilot drill over 10 mm in metal, never in brass or plastics.
- Vee-blocks for round work, clamps or a drill vice for everything else.
- Hole saw for large diameters in sheet — slow and gentle.
`,
          quiz: [
            {
              q: "What spindle speed should be set to drill a 12.5 mm hole in mild steel with an HSS drill, taking the cutting speed as 30 m/min?",
              options: [
                "About 380 rpm",
                "About 760 rpm",
                "About 1500 rpm",
                "About 2400 rpm",
              ],
              answer: 1,
              explain: "N = 1000v / (πD) = 30 000 / (3.1416 x 12.5) = 30 000 / 39.27 = 764 rpm, which matches the published table figure. Roughly 380 rpm would be right for alloy or cast steel at that diameter, and 1500 rpm is the aluminium and brass figure.",
            },
            {
              q: "A drill is overheating and the outer corners and lands are wearing rapidly. What is the most likely cause?",
              options: [
                "The feed is too fine",
                "The spindle speed is too high",
                "The point angle is too small",
                "The pilot hole is too large",
              ],
              answer: 1,
              explain: "Overheating together with heavy wear on the outer corners and the lands is the classic signature of excessive speed — cutting speed is highest at the outer corner, so that is where the edge burns first. Too fine a feed causes rubbing and glazing but not this particular wear pattern.",
            },
            {
              q: "Why should a pilot hole not be drilled in brass or plastic before using the full-size drill?",
              options: [
                "The pilot hole would be oversize in soft material",
                "The full-size drill tends to grab and screw itself into the pilot hole",
                "Soft materials cannot be centre punched",
                "The pilot drill would overheat",
              ],
              answer: 1,
              explain: "With no chisel edge resistance, a drill with positive rake in a soft, free-cutting material self-feeds — it grabs, screws down into the hole and either snatches the work out of the vice or breaks. Pilot holes are for accuracy in metal over about 10 mm, where the chisel edge would otherwise push the drill off centre.",
            },
            {
              q: "A 65 mm cable penetration is needed in a 1.0 mm cabinet panel. What is the correct tool and technique?",
              options: [
                "A 65 mm twist drill at low speed with heavy feed",
                "A hole saw run at slow speed with gentle pressure",
                "A hammer drill with a masonry bit",
                "A 10 mm pilot hole opened out with a taper reamer at full speed",
              ],
              answer: 1,
              explain: "Twist drills have nothing to guide on in thin sheet, so the hole comes out out-of-round and jagged and the sheet may tear. A hole saw cuts a clean round hole and suits a portable drill, provided it is run slowly with light pressure — heat is what kills hole saws, and their blades cannot be reground.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "off-hand-grinding",
          title: "Off-hand grinding and wheel care",
          minutes: 12,
          simple: "A grinding wheel is thousands of tiny cutting stones glued together, spinning fast enough that a cracked one can explode. That is why the wheel is guarded, why the little rest must sit within 2 mm of the wheel, and why you tap a new wheel and listen for a clear ring before you fit it.",
          refs: REFS,
          content: `
Off-hand grinding means holding the workpiece by hand while an abrasive wheel
removes material — sharpening a drill or a chisel, dressing a weld, cleaning up a
bracket, taking the mushroom off a punch. It is convenient and it is the most
dangerous tool on most benches, because a wheel that bursts at speed throws
fragments like shrapnel.

Machines come as **pedestal grinders**, **bench-mounted grinders**, and
**portable electric or pneumatic grinders** (angle grinders and die grinders).

## The safety features and why they exist

**Work rests.** Pedestal and bench machines have adjustable rests to steady and
guide the workpiece. The rest must be set as close as possible to the wheel face
and **never more than 2 mm from it**. That gap is not about convenience: if the
work can be dragged into a wide gap, it jams between rest and wheel and either
shatters the wheel or takes your hand in with it. The rest is re-set as the wheel
wears down.

**Wheel guards.** Every off-hand grinder is guarded. The guard keeps the operator
away from the rotating wheel, physically prevents fitting a wheel too large for
the machine, and contains the fragments if the wheel does break.

**Wheel speed.** The maximum safe speed is marked on the side of the wheel.
Exceed it and centrifugal force can tear the wheel apart. A typical 250 mm wheel
is marked for a maximum of about 50 revolutions per second — 3000 rpm. Before
fitting any wheel, check that the machine's speed does not exceed the wheel's
marked maximum.

**Direction of rotation.** Off-hand grinders must rotate **downwards**, into the
work rest, so the wheel pushes the work down onto the rest instead of snatching it
upwards. The retaining nuts are threaded so that rotation tends to tighten them:
the left-hand spindle carries a **left-hand thread** and the right-hand spindle a
right-hand thread. Trying to undo the left-hand nut the usual way just tightens
it.

## Wheel construction and marking

A grinding wheel is abrasive grains — aluminium oxide or silicon carbide — held
together by a bonding material. It is the **grade of bond**, not the abrasive,
that makes a wheel "hard" or "soft":

- **Hard-bond** wheels for grinding **soft** materials such as mild steel.
- **Soft-bond** wheels for grinding **hard** materials such as high-speed steel cutting tools.

The logic is that a soft bond releases blunted grains, continually exposing fresh
sharp ones — which is what a hard workpiece needs. A hard material would blunt
the grains of a hard-bond wheel and glaze it.

Wheels are identified by a standard code, in this order:

| Position | Meaning | Range |
|---|---|---|
| 1. Abrasive | Type of grain | A = aluminium oxide, C = silicon carbide |
| 2. Grain size | Coarseness | 10 (coarse) to 600 (very fine) |
| 3. Grade | Strength of bond | A (soft) through to Z (hard) |
| 4. Structure | Spacing of grains | 1 (dense, close) to 12 (open, wide) |
| 5. Bond type | Bonding material | V vitrified, S silicate, B resinoid, R rubber, E shellac |

Reading a typical marking, **A16P5V** followed by a maker's own code letters: A
is aluminium oxide, 16 is a coarse grain, P is a medium-to-hard grade, 5 is a
medium structure, and V is a vitrified bond. Trailing letters are the
manufacturer's own bond identification.

### Selecting a wheel

- **Material to be ground** — strong, tough materials go on aluminium oxide; hard materials go on silicon carbide.
- **Amount of material to remove** — a coarse grit for heavy removal. Soft, ductile materials need an open structure so the swarf has somewhere to go.
- **Finish required** — fine grit for a smooth finish.

## Changing a wheel

1. Turn the isolating switch off and fit a Danger tag.
2. Loosen the work rest and slide it back clear.
3. Remove the outer guard plate.
4. Remove the nut and outer flange, remembering the left-hand spindle has a left-hand thread.
5. Remove the old wheel.
6. Clean the driving flange (remove any stuck blotter paper), the spindle, the threads and the inside of the guard.
7. Inspect the new wheel for damage and **ring test** it: suspend it and tap lightly with a wooden mallet. A sound wheel rings clearly; a cracked wheel thuds. Check the machine speed against the wheel's marked maximum safe speed.
8. Slide the wheel on with its lead or plastic centre bush intact and a blotter under each flange — the blotters grip and cushion. Most wheels have the maker's label doing this job. The bush must be a neat fit or the wheel runs out of balance.
9. Turn the wheel by hand to check it clears the guard.
10. Tighten just enough to stop the wheel slipping. Over-tightening cracks it.
11. Refit the outer cover plate.
12. Reset the work rest within 2 mm of the wheel and tighten the clamping bolts.
13. Rotate by hand again to check it runs true and free.
14. Remove the Danger tag and switch the isolator on.
15. Make sure everyone is clear, then start it from a position where you are not standing in front of the wheel.
16. Let it run at least one minute before grinding anything.

That one-minute run is the real proof test: if a flaw is going to let go, it
almost always does so in the first moments at full speed, when nobody is in front
of it.

## Trueing and dressing

**Trueing** removes material from the grinding face so the surface runs perfectly
concentric with the spindle and square across the face. Every wheel is trued after
mounting.

**Dressing** reconditions a face that has lost its cut through **glazing** (blunt
grains smoothed over) or **loading** (the pores packed with metal). Rough shaping
and cleaning up a badly worn wheel are dressing operations too.

Hand dressers — star and disc, lock disc, solid cylinder, corrugated types — are
used for off-hand wheels. Rest the dresser on the work rest, press it firmly into
the wheel face and traverse evenly across the face.

Precision wheels are trued with a **diamond dressing tool**, the diamond set in
soft brass in a steel holder, sized to the wheel — the larger the wheel, the
larger the diamond. Procedure:

1. Set the tool to the correct angle and position, gripped short in the holder to reduce vibration.
2. Adjust the traverse so the diamond clears the wheel face.
3. Run the wheel at normal speed, balanced.
4. Traverse at a steady uniform rate. Too slow glazes the wheel; too fast leaves it free-cutting.
5. Bring the diamond close, start the traverse, and feed in **0.02 mm per pass** until contact.
6. Keep in-feeding until true. Never take deep cuts — they wreck the diamond and mark the wheel. Use plenty of coolant on the diamond if the machine uses coolant; if grinding dry, dress dry but allow the diamond to cool between passes.

>! General grinding rules. Safety goggles every time, over prescription glasses
>! if needed. Never use a wheel that has been dropped, even if it looks sound.
>! Never hold work with a rag — it winds in and takes your hand with it. Never
>! adjust the work rest while the wheel is turning. Use the face of the wheel, not
>! the side. Never grind brass, aluminium, lead or copper on a wheel meant for
>! harder materials: soft metal clogs the surface, the wheel overheats and can fly
>! apart. Move the work across the face so the wheel wears evenly. Store spare
>! wheels flat, separated by cardboard.

## What to remember

- Work rest within 2 mm, guards fitted, goggles on, every time.
- Ring test a wheel before fitting; a dropped wheel is scrap.
- Hard wheels for soft metals, soft wheels for hard metals.
- Read the wheel code: abrasive, grain, grade, structure, bond.
- True after mounting, dress when the wheel glazes or loads.
- Run a new wheel for one minute, standing out of its line, before using it.
`,
          quiz: [
            {
              q: "Why must the work rest on a bench grinder be set within 2 mm of the wheel face?",
              options: [
                "To support the wheel against side loads",
                "So the workpiece cannot be dragged into the gap and jam between rest and wheel",
                "To keep the wheel cool by restricting airflow",
                "Because the guard cannot be fitted with a larger gap",
              ],
              answer: 1,
              explain: "A wide gap lets the wheel drag the work down into it, where it jams — shattering the wheel or pulling the operator's hand in. The rest also has to be re-set as the wheel wears down, and it is never adjusted with the wheel turning.",
            },
            {
              q: "You need to sharpen an HSS drill. What bond grade of wheel is appropriate, and why?",
              options: [
                "A hard-bond wheel, because HSS is hard and needs a hard abrasive",
                "A soft-bond wheel, because it releases blunted grains and keeps exposing fresh sharp ones",
                "Either — bond grade only affects wheel life, not cutting",
                "A hard-bond wheel, because soft bonds are only for polishing",
              ],
              answer: 1,
              explain: "The rule is counter-intuitive but consistent: soft-bond wheels for hard materials, hard-bond wheels for soft materials. Grinding hard HSS blunts grains quickly, so you want a bond that lets them break away and expose sharp ones. A hard bond would hold blunt grains in place and the wheel would glaze.",
            },
            {
              q: "A grinding wheel marked A16P5V is fitted. What does the '16' indicate?",
              options: [
                "A hard grade of bond",
                "A coarse grain size",
                "A dense grain structure",
                "The maximum safe speed in revolutions per second",
              ],
              answer: 1,
              explain: "Position two in the code is grain size, running from 10 (coarse) to 600 (very fine), so 16 is coarse. In A16P5V the A is aluminium oxide, P is a medium-to-hard bond grade, 5 is a medium structure and V is a vitrified bond. Maximum safe speed is printed separately on the wheel's label.",
            },
            {
              q: "Why should aluminium or brass not be ground on a wheel intended for harder materials?",
              options: [
                "The soft metal will blunt the abrasive grains permanently",
                "The wheel surface clogs with soft metal, which causes overheating and the wheel can fly apart",
                "It leaves a poor finish on the work",
                "The wheel's bond dissolves in contact with non-ferrous metal",
              ],
              answer: 1,
              explain: "Soft metals load the pores of the wheel. A clogged wheel stops cutting and starts rubbing, heat builds inside the wheel and it can burst. That is a safety issue, not just a finish issue — soft metals need an open-structure wheel chosen for the purpose.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "measuring-tools",
          title: "Measuring tools: rules, verniers, micrometers and feeler gauges",
          minutes: 15,
          simple: "A vernier and a micrometer both let you read fractions of a millimetre by using a second scale that is deliberately slightly out of step with the first. You read the whole millimetres from the main scale, then see which line on the second scale lines up perfectly — that line tells you the decimal part.",
          refs: REFS,
          content: `
Refrigeration work runs into precision measurement more often than people expect:
checking a shaft or bearing journal before ordering a replacement, checking tube
outside diameter before selecting a fitting, setting the clearance in a coupling,
checking a valve plate for flatness, aligning a direct-drive motor and compressor.
The instruments are common to all engineering trades, and the skill is in reading
them correctly and not wrecking them.

## Feeler gauges

A set of feeler gauges is a fan of blades of high-quality shim steel, each a known
thickness, used to feel the gap between two surfaces. Blade markings are usually
in hundredths of a millimetre, so a blade marked 20 is 0.20 mm.

Use them by trying blades until you find the one that slides through with a light
drag — not free, not forced. Blades can be stacked to make an intermediate size,
adding the thicknesses. Common uses are coupling alignment, checking compressor
valve plate or gasket clearances, and setting the gap on mechanical contacts. Wipe
each blade and fold it back into the holder; a kinked or rusted blade no longer
measures what it says.

## The micrometer

An outside micrometer reads directly to **0.01 mm**. Instruments are made for
outside and inside measurement, in 25 mm ranges — 0-25 mm, 25-50 mm, 100-200 mm
and so on. The parts are the **frame**, the fixed **anvil**, the moving
**spindle**, the **sleeve** carrying the fixed scale with its **datum line**, the
**thimble** carrying the rotating scale, and the **ratchet** at the end.

### How the resolution arises

The spindle thread has a pitch of **0.5 mm**, so one full turn of the thimble
moves the measuring face 0.5 mm. The thimble is divided into **50 divisions**, so
one division is 0.5 ÷ 50 = **0.01 mm** of movement between the faces. That is the
whole principle.

The sleeve is marked at 0.5 mm intervals — the marks above the datum line are the
whole millimetres and the marks below it are the half millimetres — so exactly one
division is uncovered per turn of the thimble.

### Reading a metric micrometer

1. Count the divisions uncovered on the sleeve, remembering the ones below the datum line are 0.5 mm each.
2. Read the thimble division that lies against the datum line; each is 0.01 mm.
3. Add them.

**Worked example 1.** The sleeve shows the 5 mm mark exposed and one half
millimetre mark below the line also exposed. The thimble reads 37.

- Sleeve, whole millimetres = 5.00 mm
- Sleeve, half millimetre = 0.50 mm
- Thimble, 37 x 0.01 = 0.37 mm
- **Total = 5.87 mm**

**Worked example 2.** The sleeve shows 7 mm with no half-millimetre mark exposed
beyond it; the thimble reads 22.

- Sleeve = 7.00 mm
- Thimble, 22 x 0.01 = 0.22 mm
- **Total = 7.22 mm**

Forgetting the half-millimetre mark is the single most common misreading, and it
gives an answer exactly 0.5 mm small. Sanity-check every reading against the
approximate size of the object.

Readings can be estimated to about 0.001 mm by judging the position between
thimble graduations, or read directly to 0.001 mm on micrometers fitted with an
additional vernier scale on the sleeve.

### Care of a micrometer

- Wipe the measuring faces with a clean cloth or thick paper, never with your fingers — skin oil and acid mark the faces.
- Store it with the faces slightly apart, never closed together.
- Do not use it on a dirty surface, and never on work turning in a lathe.
- Do not pre-set it and force it over the work; close it gently, using the ratchet, so the measuring pressure is consistent.
- Never use it as a clamp or a G-cramp.
- Check the zero every time you pick it up. A 0-25 mm micrometer closed on clean faces must read zero; if it does not, adjust the sleeve with the little spanner supplied, engaging the hole provided in the sleeve.
- Keep it clean, very lightly oiled, and in its case.

## The vernier caliper

A vernier caliper measures outside dimensions, inside dimensions and depth. It has
a **main scale**, graduated in millimetres with every 10 mm numbered, and a
sliding **vernier scale**.

The vernier works by being deliberately out of step. On a 20-division vernier,
the 20 divisions span 19 mm, so each vernier division is **0.05 mm shorter** than
a main scale millimetre. Only one vernier line can align exactly with a main scale
line at any setting, and its number tells you the fraction.

| Vernier divisions | Reads to |
|---|---|
| 20 | 0.05 mm |
| 25 | 0.04 mm |
| 50 | 0.02 mm |

### Reading a vernier caliper (0.05 mm type)

1. Read the main scale immediately to the **left** of the vernier zero, in whole millimetres.
2. Find the vernier graduation that lines up exactly with any main scale line. Taking 10 on the vernier as 1 mm, read off the fraction.
3. Add them.
4. Check by eye: look at where the vernier zero sits between the two main scale marks and make sure your fraction is consistent with it.

**Worked example.** The vernier zero sits just past 14 mm, and the vernier
graduation marked between 5 and 6 (that is, 5.5 on a scale numbered 0, 2, 4, 6, 8,
10) lines up with a main scale line.

- Main scale to the left of vernier zero = 14 mm
- Vernier alignment = 0.55 mm
- **Total = 14.55 mm**
- Check: the zero is a bit over halfway between 14 and 15, so 14.55 mm is consistent. If you had read 14.05 mm, the check would immediately expose it.

**Reading a 50-division vernier.** Read the main scale to the left of the zero,
find the aligned vernier line, and multiply its number by 0.02, then add.
A vernier line numbered 17 aligning gives 17 x 0.02 = 0.34 mm.

**Practice.** On a 20-division instrument the main scale zero-left reading is 7 mm
and the vernier line at 1 (that is, 0.5 on the 0 to 10 numbering) aligns, giving
0.05 mm. The reading is **7.05 mm**.

## Squares and flatness checking

The **try square** and the square head of a combination set check that two faces
are at 90 degrees. Hold the stock firmly against the datum face and look for light
between the blade and the work — a hairline of light along one end is a surface out
of square, and light through the middle is a hollow. A surface plate with marking
dye, tested with a figure-of-eight motion, shows flatness as the pattern of colour
transferred.

## Dial and test indicators

These magnify tiny displacements mechanically so they can be read off a
clock-style dial.

- A **dial indicator** transmits movement of the ball end of its spindle through a rack and pinion to a gear train, hugely amplifying it to the pointer. Spindle travel is typically 2 to 12 mm, and the usual graduation is **0.01 mm**. The small subsidiary dial counts full revolutions of the main pointer.
- A **test indicator** has a smaller range, usually about 1 mm, and magnifies the movement of a lever stylus through a worm or scroll to the pointer. Its lever form reaches into places a plunger cannot.

Both are used constantly for checking surfaces for flatness and concentricity —
and, importantly for us, for **aligning couplings in direct-drive applications**
where a misaligned motor and compressor will destroy bearings and seals within
months.

Most of these instruments now come in digital form as well, which removes the
reading errors but none of the care requirements.

>! Precision instruments are ruined by ordinary carelessness far more often than
>! by wear: dropped on a concrete plant room floor, left loose in a toolbag with
>! spanners, stored closed so the faces corrode together, or used to lever
>! something. Treat a micrometer or vernier like a gauge set, not like a tool.

## What to remember

- Micrometer: 0.5 mm thread pitch, 50 thimble divisions, so 0.01 mm per division.
- Add the sleeve whole millimetres, the sleeve half millimetre if exposed, and the thimble hundredths.
- Vernier: read main scale left of zero, then the one vernier line that aligns — 0.05, 0.04 or 0.02 mm per division depending on the instrument.
- Always sanity-check a reading against the rough size of the object.
- Zero-check a micrometer every time, use the ratchet, store with faces apart.
- Feeler blades should slide with a light drag, and they may be stacked.
`,
          quiz: [
            {
              q: "On a metric micrometer the sleeve shows the 12 mm graduation exposed plus the half-millimetre mark below the datum line, and the thimble reads 08. What is the measurement?",
              options: [
                "12.08 mm",
                "12.58 mm",
                "12.80 mm",
                "13.08 mm",
              ],
              answer: 1,
              explain: "Add 12.00 mm from the whole-millimetre marks, 0.50 mm from the exposed half-millimetre mark below the datum line, and 8 x 0.01 = 0.08 mm from the thimble, giving 12.58 mm. Reading 12.08 mm is the classic error of missing the half-millimetre mark, and it is always exactly 0.5 mm small.",
            },
            {
              q: "Why does one division on the thimble of a metric micrometer represent 0.01 mm?",
              options: [
                "Because the thimble has 100 divisions and the pitch is 1 mm",
                "Because the spindle thread pitch is 0.5 mm and the thimble has 50 divisions, so 0.5 ÷ 50 = 0.01 mm",
                "Because the sleeve scale is graduated in 0.01 mm steps",
                "Because the ratchet limits movement to 0.01 mm per click",
              ],
              answer: 1,
              explain: "One turn of the thimble advances the spindle by the thread pitch, 0.5 mm, and that turn is divided into 50 parts, so each part is 0.01 mm of face movement. The sleeve is graduated in 0.5 mm steps, and the ratchet only controls measuring pressure — neither sets the resolution.",
            },
            {
              q: "On a vernier caliper reading to 0.05 mm, the vernier zero lies just past the 23 mm mark and the vernier graduation numbered 8 lines up with a main scale line. What is the reading?",
              options: [
                "23.08 mm",
                "23.40 mm",
                "23.80 mm",
                "31.00 mm",
              ],
              answer: 2,
              explain: "On this type, 10 on the vernier represents 1 mm, so the line at 8 represents 0.80 mm; added to the 23 mm read to the left of the vernier zero, the result is 23.80 mm. The eye check confirms it — the zero should be sitting close to the 24 mm mark, not just past 23.",
            },
            {
              q: "Which instrument would you choose to check the alignment of a directly coupled motor and compressor?",
              options: [
                "A 0-25 mm outside micrometer",
                "A dial or test indicator mounted to sweep the coupling",
                "Feeler gauges alone, checking the gap at one point",
                "A steel rule read on its edge",
              ],
              answer: 1,
              explain: "A dial or test indicator mounted on one coupling half and swept around the other reads radial and angular misalignment continuously to 0.01 mm — exactly what alignment work needs. A micrometer measures a size, not a relationship, and a single feeler measurement at one point tells you nothing about how the error varies around the coupling.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
