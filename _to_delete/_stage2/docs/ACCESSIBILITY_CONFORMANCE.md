# Accessibility Conformance Statement (WCAG 2.1 AA)

**Product:** Refrigeration Learning Platform (simulator, Service Bay, course, instructor dashboard)
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
| 1.4.3 Contrast (minimum) | Partially supports | Body text and controls exceed 4.5:1 on the dark theme. A small number of muted caption texts sit near the threshold; under review. |
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

1. **Single (dark) theme** — no user-selectable light or high-contrast theme
   yet. Planned.
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

## Motion & vestibular safety

All continuous animation (flow, particles, the moving P–h dot) stops under
`prefers-reduced-motion: reduce`; the platform is fully usable with animation
off.
