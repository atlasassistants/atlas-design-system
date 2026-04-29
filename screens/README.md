# Screenshots

Rendered captures of the Atlas design system. Sourced from the marketing kit and the preview primitive pages — regenerated on every meaningful change so the visuals stay in sync with the code.

## Contents

```
screens/
├── home/        Marketing landing — full page + section captures
├── sections/    (reserved for cropped section studies)
├── preview/     One per primitive page in /preview
└── light/       Light-mode renders
```

### `home/`
Captured at viewport `1440×900` with `deviceScaleFactor: 2` (Retina).

| File | Shows |
|---|---|
| `full-page.png` | The complete marketing landing, top to bottom |
| `01-hero.png` | Hero — orbital backdrop, gradient headline, dual CTAs |
| `02-app-frame.png` | Executive workspace mock with toggleable tasks |
| `03-services.png` | 5-card service grid (EA Staffing spans 2 cols) |
| `04-feature-ea.png` | EA matching panel with candidate cards + fit scores |
| `05-feature-ai.png` | AI Operator chat panel with tool tags |
| `06-stats.png` | 4-stat proof bar + testimonials |
| `07-pricing.png` | 3 plans, middle one featured with "Most popular" tag |
| `08-faq.png` | Accordion FAQ |
| `09-cta-footer.png` | Final CTA block + 4-column footer |

### `preview/`
One static page per design primitive — useful for quick visual QA.

| Group | Pages |
|---|---|
| Color | `colors-surfaces`, `colors-foreground`, `colors-accent`, `gradients` |
| Type | `type-display`, `type-body` |
| Layout | `spacing`, `radii`, `elevation` |
| Components | `buttons`, `cards`, `nav`, `inputs`, `badges`, `avatars`, `icons`, `logo` |
| Brand | `brand-orb`, `atmosphere` |

### `light/`
| File | Shows |
|---|---|
| `light-mode.png` | The light-theme primitive page (`preview/light-mode.html`) — same components on white |

## How to regenerate

```bash
cd /tmp
npm install --no-save playwright@1.59.1
npx playwright install chromium
node /tmp/atlas-screenshots.js       # full landing + all preview pages
node /tmp/atlas-screenshots-fix.js   # re-shoots section captures using element-anchored scroll
```

The capture scripts spin a tiny static server on `127.0.0.1:8765`, render each page through Chromium, and write into `screens/`. Both scripts live in `/tmp/` rather than the repo — they're capture tooling, not part of the design system.

If you change the marketing kit (`ui_kits/marketing/`) or any preview primitive, re-run the relevant script before committing.
