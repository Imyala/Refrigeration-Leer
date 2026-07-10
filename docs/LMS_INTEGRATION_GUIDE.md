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
| `cmi.core.lesson_status` | `incomplete` → `completed` (all 28 lessons passed) → `passed` (lessons complete **and** final exam ≥ 80%) |
| `cmi.core.score.raw` (0–100) | The **final-exam best score in %** once the exam has been attempted; before that, the % of lessons completed |
| `cmi.suspend_data` | The learner's full lesson/exam progress (compact text, well under the 4,096-char SCORM 1.2 limit) |

Because progress lives in `suspend_data`, a learner can continue on any
machine where they open the activity from their LMS account. The browser's
localStorage is also used as a secondary cache and both are merged (best
result wins), so nothing is lost switching between machines.

## 4. Behaviour notes

- **Attempts:** every entry resumes from stored progress. Exam retakes draw a
  fresh random paper; the best score is kept and reported.
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
| Simulator links do nothing | Pop-up blocker — allow pop-ups for the LMS domain. |
| Import rejected | Ensure the zip is uploaded as-is (don't unzip/re-zip on macOS, which can add `__MACOSX` folders; rebuild with `npm run build:scorm` if needed). |

## 6. LTI 1.3

Institutions that require LTI 1.3 (deep linking, per-assignment grade
passback, roster services) rather than SCORM: this is on the roadmap and
will be built against the first pilot institution's requirements — contact
us. SCORM 1.2 covers standard gradebook delivery today.
