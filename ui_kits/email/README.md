# Atlas Email Kit

Template + rules for every Atlas email: funnel sequences, newsletter, onboarding, transactional. `template.html` is a table-based, client-safe skeleton — copy it per email and swap the content blocks.

## Why email is light-mode

Email is the one Atlas surface that inverts the dark-by-default rule, for two reasons the brand system already anticipates:

1. `design.md` → Light mode: reading-heavy surfaces where the eye lives are light. Email is a reading surface.
2. Email clients (Gmail, Outlook, Apple Mail dark mode) mangle dark backgrounds unpredictably — a hand-tuned cosmic background becomes a blotchy invert. We keep brand recognition in the **header band, accent, and voice**, not in a fragile dark canvas.

The header band stays Cosmic Black with the white lockup — every email opens with the brand world, then reads on light.

## Rules

- **Layout:** single column, 600px, table-based. No CSS grid/flex in email.
- **Type:** font stack `Inter, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`. Inter won't load in most clients — the stack degrades gracefully. Body 16px/1.6, headline 26–32px/700.
- **Colors:** body bg `#fafaff`, card `#ffffff`, text `#050314`, secondary `rgba(5,3,20,.72)`, borders `#e5e1f5`. Links + accent text `#5046e4` (the AA-safe accent — never `#ba9cff` text on white). CTA button: `#ba9cff` background, `#0a0620` text.
- **Header:** `#050314` band, `atlas-logo-white.png` at 28–32px height, hosted at a public URL (never a file path).
- **The gradient** appears once, max — as the 3px bar under the header band. Never gradient text in email.
- **Voice:** the email IS the brand here more than the visuals. Copy follows `brand-identity.md`: one pillar per email, diagnosis-before-solution, a number on every claim, no exclamation marks, sentence case.
- **CTA:** one primary CTA per email, bulletproof-button markup (in the template), label ≤ 3 words.
- **Footer:** physical address + unsubscribe (legal), mark-only logo, muted text. No social-icon rows unless the channel exists and is active.
- **Plain-text part:** always generate one; the voice survives without any styling — that's the test that the copy is doing the work.
