# Accessibility Conformance Statement (WCAG 2.1 AA)

**Product:** Refrigeration Learning Platform (simulator, Service Bay, System Builder, Diagnosis Workshop, course, instructor dashboard)
**Evaluation:** internal self-assessment, July 2026, against WCAG 2.1 Level AA
**Format:** VPAT-style summary

> This is an honest internal assessment intended for procurement screening.
> Before contractual accessibility commitments, commission an independent
> audit with assistive-technology users — and we will fix what it finds.

**Scope note — the syllabus expansion.** This statement was written when the
course held 11 modules; it now holds **64 modules / 516 lessons** grouped into
five streams. The expansion added lesson content through the same lesson
template, markdown renderer, figure library and quiz components assessed here,
so the findings below apply to it unchanged. It added two UI patterns that
were not part of the original assessment:

- **Collapsible stream headings** in the sidebar, which are native `<button>`
  elements carrying `aria-expanded`; the course overview page has a section
  per stream with a heading.
- **Model-answer disclosure blocks** in lesson content: the `>?` markdown
  prefix renders as a native `<details>` with a `<summary>` ("Show a model
  answer"), so written-answer practice stays hidden until the learner asks for
  it. It is used 237 times in the capstone stream. Native `<details>`/
  `<summary>` is keyboard-operable and announced by screen readers without
  custom ARIA, which is why no ARIA was added. The styling suppresses the
  default disclosure marker (`list-style: none` plus
  `::-webkit-details-marker { display: none }`) and supplies its own text
  indicator in `::before` (▸ closed, ▾ open), and a visible focus style is
  defined for the summary (`:focus-visible`, a 2px accent outline).

Neither pattern has been separately re-assessed, and neither has been tested
with assistive technology — see *Known gaps* below.

**Scope note — the System Builder and the Diagnosis Workshop.** Two pages were
added after this assessment was written and are **outside its scope**:
`build.html` (a drag-and-drop circuit builder) and `diagnose.html` (a
measurement-led fault-finding workshop). Factually, and without any claim of
conformance:

- Both are built from the same page furniture as the assessed pages — skip
  link, the shared site navigation, semantic headings, the global
  `:focus-visible` outline.
- Every interactive control on both pages is a native `<button>`, `<select>`,
  `<input>` or `<label>`; there are no custom-role widgets and no
  keyboard-only-inaccessible controls.
- Both use `aria-live="polite"` regions for the text that changes in response
  to what the learner does: the builder's verdict panel, and the workshop's
  coach line, readings, derived values and evidence panels.
- The builder's drag-and-drop has a **keyboard equivalent that does the same
  work, not a reduced one**: a component can be added to the loop by
  activating it in the palette, and every placed component carries
  move-earlier (▲), move-later (▼) and remove (×) buttons, each with an
  `aria-label` naming the component and the action ("Move TX valve earlier in
  the flow"). Buttons are disabled at the ends of the loop rather than
  silently doing nothing.
- The workshop's schematic is an `<svg>` with `role="img"` and an
  `aria-labelledby` pointing at a `<title>` and a `<desc>` that describes the
  circuit layout in words; the measurement points over it are buttons, not
  SVG click targets.

**Neither page has been tested with assistive technology**, neither has been
assessed against the WCAG criteria in the table below, and **no conformance
claim is made for either of them**. The description above is what the markup
does, not a substitute for testing it.

## Summary

| Principle | Level | Status |
|-----------|-------|--------|
| Perceivable | AA | Partially supports |
| Operable | AA | Supports |
| Understandable | AA | Supports |
| Robust | AA | Supports |

## Detail

### Perceivable

| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.1.1 Non-text content | Partially supports | Schematic components, gauges and charts carry `role="img"` and `aria-label`s; all gauge/chart values are duplicated as text in the readout bar and captions. The P–h chart's *shape* itself has a text caption but not a full data table alternative. |
| 1.3.1 Info & relationships | Supports | Semantic headings, lists, tables, fieldsets/legends for quizzes, labelled form controls. |
| 1.4.1 Use of colour | Supports | Pipe states are labelled with text and a text legend; quiz feedback pairs colour with symbols (✓/✗) and words. |
| 1.4.3 Contrast (minimum) | Partially supports | Body text and controls exceed 4.5:1 on both the light and the dark theme; the light theme's accent (`#0b6fae`) and status inks were chosen for 4.5:1 or better as text on white. A small number of muted caption texts sit near the threshold; under review. |
| 1.4.10 Reflow / 1.4.4 Resize | Supports | Responsive layout to 320px; wide tables scroll within their own container; text resizes without loss. |
| 1.4.13 Content on hover/focus | Supports | No hover-only content. |

### Operable

| Criterion | Status | Notes |
|-----------|--------|-------|
| 2.1.1 Keyboard | Supports | All controls are native elements or carry `tabindex`/key handlers (schematic components respond to Enter/Space). No keyboard traps. |
| 2.2 Timing | Supports | No time limits anywhere, including exams. |
| 2.3.1 Flashes | Supports | No flashing content; fault pulse is a slow 1.1s opacity cycle, disabled under reduced motion. |
| 2.4.1 Bypass blocks | Supports | Skip links on all pages. |
| 2.4.3 / 2.4.7 Focus order & visibility | Supports | Logical order; global `:focus-visible` outline; focus moves to the new view on course navigation. |
| 2.4.4 Link purpose | Supports | Links and buttons are self-describing. |

### Understandable

| Criterion | Status | Notes |
|-----------|--------|-------|
| 3.1.1 Language of page | Supports | `lang="en"` on all pages. |
| 3.2 Predictable | Supports | Consistent navigation and component behaviour; no context changes on focus/input. |
| 3.3.1 / 3.3.3 Error identification & suggestion | Supports | Quiz and trainer errors are announced in text (`aria-live="polite"`) with the correct answer and an explanation. |

### Robust

| Criterion | Status | Notes |
|-----------|--------|-------|
| 4.1.2 Name, role, value | Supports | Native controls; ARIA roles/labels on custom SVG components; status regions use `aria-live`. |

## Known gaps and roadmap

1. **Themes** — a light theme (the default) and a dark theme, chosen with a
   toggle button in the site nav (`aria-pressed`, constant name) and
   remembered per browser; the OS `prefers-color-scheme` setting applies
   until a choice is made. Drawn instruments (the schematic, gauges, charts,
   the service rig, lesson figures) keep a dark face in both themes. No
   high-contrast theme yet, and the light theme has not been re-audited for
   contrast beyond the token-level check above. Planned.
2. **Chart data alternatives** — a tabular alternative for the P–h diagram
   and PT chart for screen-reader users. Planned.
3. **Formal audit** — no third-party assessment or AT-user testing has been
   performed yet.
4. **Re-assessment after the expansion** — the self-assessment predates the
   growth to 64 modules / 516 lessons and the two patterns it introduced: the
   stream-grouped navigation and the `<details>`/`<summary>` model-answer
   blocks in lesson content. All of it should be covered by the next
   assessment (and by any independent audit); no claim of conformance is made
   for those patterns beyond the factual description in the scope note.
5. **The System Builder and the Diagnosis Workshop are unassessed** —
   `build.html` and `diagnose.html` post-date this statement, have not been
   assessed against the criteria above and have not been tested with
   assistive technology. The scope note records what their markup does; it is
   not a conformance claim. Both pages, and in particular the builder's
   drag-and-drop / keyboard-reorder equivalence and the workshop's SVG
   schematic, should be a priority for the next assessment and for any
   independent audit.

## Motion & vestibular safety

All continuous animation (flow, particles, the moving P–h dot) stops under
`prefers-reduced-motion: reduce`; the platform is fully usable with animation
off.
