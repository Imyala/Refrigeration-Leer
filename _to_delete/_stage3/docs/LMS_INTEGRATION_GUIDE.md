# LMS Integration Guide (SCORM 1.2)

How to deliver the Refrigeration Learning Course through Moodle, Canvas,
Blackboard or D2L Brightspace, and what your gradebook will see.

## 1. Get the package

Either build it from the repository:

```sh
npm run build:scorm
# → dist/refrigeration-course-scorm12.zip
```

or use a pre-built `refrigeration-course-scorm12.zip` if one was provided.
The package is SCORM **1.2** — the most widely supported version across all
major LMSes.

The package contains the whole platform: all 64 course modules (516 lessons)
across the five streams, the simulator, the Service Bay and the instructor
page. It is a single SCO of roughly **2.1 MB zipped** (about 6.5 MB unpacked) —
comfortably inside the upload limits of Moodle, Canvas, Blackboard and D2L,
but worth knowing if your LMS has a tight per-file cap. The builder discovers
the course content files automatically, so a newly added module is packaged
without editing the build script.

## 2. Import

### Moodle
1. Course → **Turn editing on** → **Add an activity or resource → SCORM package**.
2. Upload `refrigeration-course-scorm12.zip`.
3. Recommended settings: *Display package* — New window (the course is a
   full-page app); *Attempts management* — Unlimited attempts, Grading method
   **Highest attempt**; *Mastery score overrides status* — Yes (mastery score
   is 80 in the manifest).

### Canvas
1. Enable the SCORM tool if not already active (Settings → Apps or via your
   admin).
2. Assignments → **+ Assignment → SCORM** (or Modules → Add → SCORM,
   depending on configuration), then upload the zip.
3. Choose **Graded assignment** so the score reaches the gradebook.

### Blackboard Learn
1. Content area → **Build Content → Content Package (SCORM)**.
2. Upload the zip; set *Grading* — Grade SCOs, due dates as desired.

### D2L Brightspace
1. Course content → **Existing Activities → SCORM/xAPI** (or via the Course
   Builder), upload the zip into the content service, then insert it.

## 3. What the LMS receives

| SCORM field | Value |
|-------------|-------|
| `cmi.core.lesson_status` | `incomplete` → `completed` (all 516 lessons of the whole program passed) → `passed` (lessons complete **and** the whole-program final exam ≥ 80%) |
| `cmi.core.score.raw` (0–100) | The **final-exam best score in %** once the whole-program final exam has been attempted; before that, the % of the 516 lessons completed. Stream exams are recorded in the learner's progress but are not what the gradebook score reports |
| `cmi.suspend_data` | The learner's lesson/exam progress as compact text — one short entry per lesson attempted |

Because progress lives in `suspend_data`, a learner can continue on any
machine where they open the activity from their LMS account. The browser's
localStorage is also used as a secondary cache and both are merged (best
result wins), so nothing is lost switching between machines.

### `suspend_data` and the size of the syllabus

SCORM 1.2 caps `cmi.suspend_data` at **4,096 characters**, and the whole
516-lesson syllabus fits inside it. Progress is stored in a compact encoding
("format 2"): each lesson key becomes a 4-character token — a hash of the
key — and each result a single character holding the done flag and the best
score, with the number of questions read back from the course itself at decode
time. That is 5 characters per lesson. Exam entries keep the longer readable
form, since there are only a handful of them.

Measured against the real course. The largest record a learner can produce is
**every one of the 516 lessons**, all **five** stream exams and the
whole-program final exam — **522 progress entries**. In the previous readable
per-lesson format those 522 entries encoded to **25,218 characters**: more
than six times the 4,096 the standard allows, so a complete record could not
be stored at all. In format 2 the same record is **2,691 characters of the
4,096 budget** — the 516 lessons account for 2,583 of that and the six exam
entries for the remaining 108 — and it decodes back to all 522 entries
intact.

The headroom is real but it is not unlimited: about **1,400 characters** are
spare, which at 5 characters per lesson is roughly **280 further lessons**, so
the syllabus could grow by about half again before the cap became a concern.
Past that the exam entries could move to the short token form too, and the
per-lesson result packed harder — but that work has not been done, so a much
larger syllabus should be re-measured before it is promised. The budget is
asserted by `tests/scorm.test.js` against the full syllabus, including that
the record still round-trips at that size, so it cannot silently regress as
content is added.

The format also degrades gracefully across course updates:

- Tokens are **hashes of the lesson key, not positions**, so adding, removing
  or reordering modules does not shift a learner's saved progress.
- A token that no longer matches any lesson is simply **dropped**; the rest of
  the record still loads. A learner never loses their whole history because the
  syllabus changed under them.
- Records written in the **older format still decode**, so progress saved
  before this change survives the upgrade.
- Entries the course does not recognise — exam results, anything a later
  version adds — are preserved rather than discarded.

Export/Import on the course overview page remains the right tool for moving a
record deliberately (archiving a cohort, migrating between LMS accounts, or
carrying progress to a plain web-hosted copy), but it is no longer needed to
work around a size limit.

## 4. Behaviour notes

- **Attempts:** every entry resumes from stored progress. Exam retakes draw a
  fresh random paper; the best score is kept and reported.
- **Exams:** the course has one exam per stream (two questions per module of
  that stream — so the ten-module capstone stream exam is 20 questions) and a
  whole-program final exam (one question per module, 64 questions). All use an 80% pass mark. Only the **final** exam's score is
  what reaches the gradebook; stream exam results appear in the course and in
  the instructor dashboard's cohort export.
- **The simulator inside the LMS:** lesson "▶ Try it" links open the
  simulator in a **new tab** — this is intentional, so the SCO (and its LMS
  connection) stays open while the student experiments. Allow pop-ups for
  your LMS domain if a browser blocks them.
- **No time tracking:** the package reports status and score; it does not
  report session time.
- **Offline/preview use:** the same content works outside the LMS (plain web
  hosting); it simply falls back to browser-local progress.

## 5. Troubleshooting

| Symptom | Cause / fix |
|---------|-------------|
| Activity completes but no grade | Grading method set to "Learning objects" / not graded — set grading to use the score, method Highest. |
| Status shows completed, never passed | "Passed" additionally requires the final exam at ≥ 80%. Check the learner's exam entry in the course sidebar. |
| Progress doesn't follow the student to another machine | They opened the plain web version, not the LMS activity. Progress can be moved manually with Export/Import on the course page. |
| Worried the record is too big for `suspend_data` | It isn't — progress is stored compactly and there is no per-lesson limit in practice: a fully complete 516-lesson course with every exam sat uses about 2,700 of the 4,096 characters SCORM 1.2 allows. See section 3. |
| Simulator links do nothing | Pop-up blocker — allow pop-ups for the LMS domain. |
| Import rejected | Ensure the zip is uploaded as-is (don't unzip/re-zip on macOS, which can add `__MACOSX` folders; rebuild with `npm run build:scorm` if needed). |

## 6. LTI 1.3

Institutions that require LTI 1.3 (deep linking, per-assignment grade
passback, roster services) rather than SCORM: this is on the roadmap and
will be built against the first pilot institution's requirements — contact
us. SCORM 1.2 covers standard gradebook delivery today.
