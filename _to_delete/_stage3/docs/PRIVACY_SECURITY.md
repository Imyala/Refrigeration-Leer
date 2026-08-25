# Privacy & Security One-Pager

**Product:** Refrigeration Learning Platform
**Architecture:** static web content — HTML, CSS and JavaScript files only.
**Last updated:** July 2026

## The short version

The vendor operates **no servers, no databases and no accounts**. The
platform collects **no personal information**, sets **no cookies**, runs
**no analytics**, and makes **no third-party network requests**. Everything
a learner does stays on their device or inside the institution's own LMS.

## Data inventory

| Data | Where it lives | Leaves the device? |
|------|----------------|--------------------|
| Lesson/quiz/exam progress | Browser `localStorage` (`refrigSim.progress`) | Only if the learner exports it |
| Learner name (optional) | Browser `localStorage` (`refrigSim.learnerName`) | Only on exports/certificates the learner creates |
| Unit preferences (kPa/psi, °C/°F) | Browser `localStorage` (`refrigSim.units`) | No |
| Progress exports | A JSON file the learner explicitly downloads and chooses to share | Learner-controlled |
| SCORM data (progress, scores, status) | The **institution's own LMS** via the standard SCORM API | Stays inside the institution's LMS |
| Instructor dashboard data | Loaded from files into the instructor's browser memory; cleared on tab close | No — nothing is uploaded |
| Certificates | Generated in-browser; the ID is a deterministic checksum of name+score+date, containing no hidden data | Learner-controlled |

**Data deletion:** clear the browser's site data. There is nothing to delete
anywhere else, because nothing is stored anywhere else.

## Compliance posture

- **Australian Privacy Act / APPs, GDPR, FERPA:** the vendor processes no
  personal information, so vendor-side obligations are minimal by
  architecture. Where the platform runs inside an institutional LMS, the
  **institution remains the data controller** under its existing LMS
  arrangements; this product adds no new data recipient.
- **Student-data agreements:** typically unnecessary — there is no data flow
  to the vendor to govern. Security review can be completed by inspecting
  the source, which is fully readable (no build step, no minification).

## Security

- **Attack surface:** no server-side code, no API endpoints, no
  authentication system, no database — the classic web attack classes
  (injection, credential theft, server compromise) have nothing to target.
- **Content integrity:** the product is distributed as version-controlled
  source (git history) and should be served over HTTPS (default on GitHub
  Pages and institutional hosting).
- **Third-party code:** none at runtime. No CDNs, no trackers, no fonts, no
  frameworks. The only network requests are for the product's own files.
- **Input handling:** all learner-visible rendered content is authored
  in-repo; text is HTML-escaped before markup is applied. Imported progress
  files are parsed as JSON with format validation, and names are escaped
  before display.
- **SCORM:** communication uses the LMS's own JavaScript API within the
  LMS session — no external transmission.

## What we would need for future features

The roadmap's LTI 1.3 / SSO / hosted-dashboard tier would introduce a server
and therefore real data-processing obligations (DPAs, hosting region,
retention). Those will be designed with the pilot institution's requirements
and documented before any such feature ships. Today, none of it exists — and
that is a feature.
