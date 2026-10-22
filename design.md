# Atlas Assistants Design System

Atlas Assistants helps people operate in their zone of genius. It recruits and develops exceptional AI-capable talent and equips clients to work with them.

This file sets the visual and verbal system for every Atlas surface: websites, product UI, decks, social, email, and internal tools.

- **Brand rules** come from the current brand guidelines, transcribed in **`BRAND-GUIDELINES.md`**. Read that file first.
- **Gaps** are wherever the guidelines say nothing (web UI, states, motion, modes). This file fills them with **Atlas conventions**, and each one is labeled.

> **2026-10-22 change.** Atlas moved from the 2026 "cosmic" system to the current brand guidelines.
> - **Retired:** Cosmic Black `#050314`, lavender `#ba9cff`, Inter, the starfield, and the orbital rings.
> - **Current:** the six-color palette, Poppins and Outfit, light-first surfaces, and Yellow Green accents.
>
> Old token names still resolve through deprecated aliases in `colors_and_type.css`. Do not use them in new work.

---

## Read order

1. `BRAND-GUIDELINES.md`: the rules (logo, palette, type, visual language).
2. This file: color roles, type scale, logo use, layout, components, and modes.
3. `brand-identity.md`: brand concept and vocabulary. Its positioning predates the Q4 2026 reset; read its status note first.
4. `colors_and_type.css` (tokens), `assets/` (logos), `fonts/` (Poppins and Outfit), `preview/` (primitives), and `ui_kits/` (surface kits).

---

## Composition model: read this first

**This is a brand-lock, not a layout template.** The design engine for any Atlas frontend is the **taste-skill** (`design-taste-frontend`). This system supplies the brand invariants it must respect; taste-skill decides how the page is composed.

- **taste-skill owns (vary per build):** layout family, section structure, composition, spacing rhythm, hero treatment, motion choreography, and its `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY` dials.
- **This brand-lock owns (LOCKED):**
  - **Color.** The six guideline colors and their 80/60/40/20 tints. Use the color roles and contrast rules below; do not add new hues.
  - **Type.** Poppins for display, headings, eyebrows, and buttons. Outfit for body and UI text. Add no third typeface; monospace is allowed only for code and agent terminals.
  - **Logo.** The image files in `assets/`, the clear space, and the usage rules below.
  - **Voice.** The CONTENT FUNDAMENTALS rules.
  - **Conventions treated as locked:** the 4px grid, the `cubic-bezier(0.6, 0.6, 0, 1)` easing, pill buttons, and light-first surfaces.
- **Reference only, do not clone:** `ui_kits/` and `preview/` are one expression of the brand. Use them as a token and pattern source.

**Conflict rule.**
- **Brand-lock wins on brand.** Keep Poppins and Outfit, even where taste-skill flags them as common fonts. Keep the palette and the color roles. Keep the occasional em dash in Atlas marketing copy; taste-skill's em-dash ban does not apply to Atlas voice.
- **taste-skill wins on structure:** layout, composition, spacing rhythm, section variety, and motion patterns.

Net: **on-brand always, composition fresh per build.**

---

## Index

```
.
├── BRAND-GUIDELINES.md        ← the current brand guidelines, transcribed. READ FIRST.
├── design.md                  ← this file
├── brand-identity.md          ← concept, pillars, vocabulary (read its status note)
├── SKILL.md                   ← Claude Code skill manifest
├── colors_and_type.css        ← tokens: palette, tints, gradients, light + dark roles, type
├── assets/                    ← default logo files; logo/ (full package, SVG + PNG); patterns/; backgrounds/; elements/
├── fonts/                     ← Poppins (400/600/700 + italics), Outfit (variable), OFL licenses
├── preview/                   ← one page per primitive + brand-board.html, patterns.html, light-dark.html
├── ui_kits/                   ← marketing, social, deck, email, internal, app
├── screens/                   ← captures of the preview pages and kits
└── _reference/
    ├── brand-guidelines/      ← page renders of the guidelines PDF (pages 1, 2, 3, 5, 6)
    └── legacy-cosmic-2026/    ← retired cosmic files; historical, not a token or layout source
```

---

## Brand at a glance

| | |
|---|---|
| Brand name | **Atlas Assistants**. The logo is image files only (see Logo). |
| Palette | Deep Blue `#0C013B` · Pearl White `#FBFEF7` · Soft Blue Violet `#5C70FF` · Electric Purple `#B675F5` · Yellow Green `#E0FE53` · Vivid Purple `#4500F9` |
| Default surface | **Light**: Pearl White page, Deep Blue text. Dark (Deep Blue and the purple gradients) for social, ads, deck covers, hero objects, and feature bands. |
| Primary action | Light: Vivid Purple with white text. Dark: Yellow Green with Deep Blue text. |
| Accent | Yellow Green: highlights, badges, CTA arrows. **Never as text on a light surface.** |
| Brand gradient | The logo gradient: `linear-gradient(135deg, #5C70FF, #B675F5)`. Deep and vivid gradient families are in Color. |
| Type | **Poppins** (Regular / Semi-Bold / Bold) for display; **Outfit** for body |
| Grid · easing | 4px · `cubic-bezier(0.6, 0.6, 0, 1)` (convention) |
| Tagline in use | "Operate in your zone of genius" (north star). Check current campaign lines against the Q4 sources. |

---

## CONTENT FUNDAMENTALS

> **Q4 2026 note.** The positioning and copy bank in `brand-identity.md` predate the Q4 2026 reset. Before writing public copy:
> - Do not call Atlas a "managed service".
> - Do not name retired offers ("Executive OS", "AI Operator").
> - Do not frame talent as optional or disposable.
> - The public role is the **Exec Ops Partner**.
> - Check offer language, prices, and claims with Colin.

**Voice.** Confident, calm, founder-grade. Atlas talks to a CEO or partner, never down to a junior. Sentences are short and declarative, with the occasional well-placed em dash. Avoid hype words and superlatives. Never explain the obvious.

**Tone.** Calm, premium, in control. The copy reads the way a great Chief of Staff talks: direct, unflappable, never breathless.

**Casing.** Sentence case for body copy, UI, web pages, product screens, emails, and decks. Title Case is allowed for short social and ad headlines (a few words), as in the guideline mockups. Eyebrows and highlight text are uppercase; these are the only places uppercase appears. The lowercase "atlas" wordmark exists only inside the logo files; never set it in type. (Decided by Colin, 2026-10-22.)

**Person.** Second person ("you", "your week") in headlines and CTAs. First-person plural ("we") for the Atlas team. Never "I". Never "we believe" or "we think": Atlas states, it does not speculate.

**Numerals.** Spell out numbers in emotional copy ("two weeks, not three months"). Use digits for data and prices ("3 conflicts", "$97/mo"). Every proof point needs a current, checked source. Never use ALL CAPS for emphasis.

**Emoji.** None in body copy or UI.

**Examples (still usable):**
- *"Operate in your zone of genius."* The north-star belief.
- *"You don't have a time problem. You have a leverage problem."* The diagnosis; rhythm of contrast.
- *"Work stops when you don't respond."* Pain line: short, declarative, second person.
- *"Put the weight down."* Prior brand promise. Use it only where it fits the current offer.

**Forbidden words and patterns.**
- Words: "Revolutionary", "best-in-class", "next-gen", "leverage cutting-edge AI", "synergy", "platform that empowers".
- No exclamation marks (one per page at most). No "🚀". No ALL CAPS shouting.
- No "buy back your time", except when naming it as outdated advice.
- No claims copied from the guideline mockups ("10-20hrs … guaranteed", "Trusted by over 3,000 users").

---

## Color

### Roles

| Role | Light (default) | Dark (`data-theme="dark"`) |
|---|---|---|
| Page background `--bg` | Pearl White `#FBFEF7` | Deep Blue `#0C013B` |
| Lifted band `--bg-2` | `#F4F4F7` | `#12014E` |
| Card `--surface` | `#FFFFFF` | `#1A1046` |
| Primary text `--fg-1` | Deep Blue | Pearl White |
| Secondary text `--fg-2` / tertiary `--fg-3` | `#4F4870` / `#6C6686` | `#B8B7C2` / `#9B99AC` |
| Primary action `--accent` + `--on-accent` | Vivid Purple + white | Yellow Green + Deep Blue |
| Accent text and links `--accent-text` | Vivid Purple | Yellow Green |
| Highlight `--highlight` | Yellow Green **fill** behind Deep Blue text (marker, badge) | Yellow Green text or fill |
| Support | Soft Blue Violet, Electric Purple: gradients, illustration, charts, icons, large display only | Same |

### Contrast (WCAG 2.x, computed)

| Pair | Ratio | Use |
|---|---|---|
| Deep Blue on Pearl White | 19.0:1 | All text |
| Vivid Purple on Pearl White | 7.9:1 | Links, accent text, any size |
| White on Vivid Purple | 8.0:1 | Primary buttons, labels |
| Deep Blue on Yellow Green | 17.1:1 | Badges, highlighter marks, dark-mode buttons |
| Yellow Green on Deep Blue | 17.1:1 | Accent text on dark |
| Yellow Green on Vivid Purple | 7.0:1 | Accent text on vivid gradients |
| Soft Blue Violet on Pearl White | 3.9:1 | Large text only (≥24px, or ≥19px bold) |
| Electric Purple on Pearl White | 3.0:1 | Large display and decoration only |
| **Yellow Green on Pearl White** | **1.1:1** | **Never: not as text, icons, or thin lines** |

### Rules
1. **Yellow Green on light surfaces is a fill only.** Use it as a highlighter mark, a badge, or a button with Deep Blue text. On dark and gradient surfaces it is the accent text and the CTA color, as in the guideline mockups.
2. **One primary action color per surface.** On light, that is Vivid Purple; on dark, Yellow Green.
3. **No new hues.** For softer fills, tags, and chart series, use the 80/60/40/20 tint tokens (`--vivid-purple-20` and so on).
4. **Gradients come from three families** (observed in the guidelines):
   - **Brand:** `--gradient-brand`, Soft Blue Violet → Electric Purple. This is the logo gradient; use it on the symbol, avatars, and accent fills.
   - **Deep:** `--gradient-deep`, Electric Purple → Vivid Purple → Deep Blue. Use it for hero objects, feature bands, deck covers, and social backgrounds.
   - **Vivid:** `--gradient-vivid`, Vivid Purple → Deep Blue. Use it on CTA bands and the featured pricing card.
5. **Restraint on light pages (convention).** Show at most one dark or gradient object and one gradient band per screen. Let the Pearl White space do the work.
6. **Headline accent phrase.** On light, set one phrase per headline in Vivid Purple. For large display text, you may use `.grad-text` (Vivid Purple → Electric Purple) or a `.mark-highlight` Yellow Green marker. On dark, set the phrase in solid Yellow Green, matching the guideline mockups. Never apply the accent to a whole headline.
7. **Text on gradients (convention).** Body copy on a gradient is Pearl White; `--fg-2` drops to 4.0:1 on Vivid Purple. On the deep gradient, keep small text and Yellow Green off the Electric Purple corner (Yellow Green there is 2.7:1). On the brand gradient, type is Deep Blue.

---

## Typography

| Guideline role (spec) | Web token / class | Typeface and style (spec) | Web size, line height, tracking (convention) |
|---|---|---|---|
| Headings (60pt) | `h1`, `.t-heading` | Poppins Bold | `clamp(40px, 5.2vw, 72px)`, line height 1.08, tracking -0.02em |
| Sub-headings (35pt) | `h2`, `.t-subheading` | Poppins Semi-Bold | `clamp(28px, 3.2vw, 42px)` |
| Highlight text (24pt) | `.t-highlight` | Poppins Bold, uppercase | 18–24px, tracking 0.14em |
| Important lines (18pt) | `.t-important` | Poppins Semi-Bold *italic* | 18–21px |
| Eyebrow (14pt) | `.t-eyebrow`, `.eyebrow`, `h5` | Poppins Semi-Bold *italic*, uppercase | 13px, tracking 0.08em |
| Body (14pt) | `body`, `p`, `.t-body` | Outfit Regular | 17px web body; 15–16px dense UI; never below 14px |
| Card titles, UI headings | `h3`, `h4` | Poppins Semi-Bold | 18–24px |
| Buttons | | Poppins Semi-Bold | 15–16px |

**Rules**
- Poppins carries the voice; Outfit carries the reading. Body copy, tables, forms, and long UI text are Outfit.
- Use italic only for important lines and eyebrows, as the guidelines do.
- Keep to three type sizes per screen, plus the eyebrow.
- Line length: 60–75 characters for body copy.

---

## Logo

| File | Use |
|---|---|
| `assets/atlas-logo-dark.png` | **Default on light surfaces.** Full lockup: gradient symbol and Deep Blue wordmark (guidelines page 1). |
| `assets/atlas-logo-white.png` | **Default on Deep Blue and dark surfaces.** Gradient symbol and white wordmark (page 3). |
| `assets/atlas-mark.png` | The symbol alone, gradient: favicon, avatar, watermark on light, small or square spots. |
| `assets/atlas-mark-white.png` | The symbol alone, white: on Vivid Purple and on gradients (page 4). |
| `assets/logo/svg/horizontal-all-white.svg` | **The all-white lockup** (page 4): on Vivid Purple, mid-tone gradients, and photos. |
| `assets/logo/svg/vertical-*.svg` | The vertical lockup (symbol above the wordmark), for square or tall spaces. Same colorways as the horizontal lockup. |
| `assets/logo/svg/*-{vivid-purple,electric-purple,soft-blue-violet,black}.svg` | One-color versions, for uses the gradient cannot reproduce (single-ink print, stamps, embroidery). On screens, prefer the gradient lockups. |

**The full logo package** (horizontal, vertical, and symbol-only, each in seven colorways) is in `assets/logo/svg/` and `assets/logo/png/`. Prefer SVG on the web. The four files at the top of `assets/` are the defaults and stay put. The wordmark-only version is not in the designer's package; never typeset it. See `BRAND-GUIDELINES.md` § 1 for the colorway names.

**LOGO USAGE (LOCKED)**
- **Image files only.** Render the logo as `<img>`. Never recreate it with CSS shapes or type.
- **Never typeset the wordmark.** Never place text ("atlas", "Atlas Assistants") next to the mark to simulate a lockup. The brand name may appear as plain text in prose.
- **Clear space.**
  - Page 2 defines **x** as the gap between the symbol and the wordmark (measured). It prints `2x · x · 2x` above and below the logo and `4.5x` beside it, without a written rule.
  - **Atlas convention, derived from that diagram:** keep at least **2x on every side**, and use about **4.5x on the left and right** where space allows.
- **Contrast.** Use the gradient-symbol lockups only on Pearl White, white, or Deep Blue. On Vivid Purple, mid-tone gradients, or photos, use the all-white lockup or the white symbol.
- **Minimum size (convention).** The lockup is at least 24px tall; below that, switch to the mark. The mark is at least 16px.
- **Retired.** The pre-2026 flat-violet logo is retired. Flag every instance you find.

---

## Visual language

From the guideline mockups (observed). Pages are named in `BRAND-GUIDELINES.md` § 4.

- **Light surfaces.**
  - The page is Pearl White.
  - A soft lavender corner wash (`--wash-corner`) may sit in one corner of a hero or section, as on the cover page.
  - A subtle paper texture is optional; keep it below 4% visible.
- **Gradient objects and bands.** Use the deep and vivid gradients, with Pearl White or white headlines and Yellow Green accents.
- **CTA devices.**
  - Pill buttons.
  - The **circular arrow button**: a circle with a diagonal up-right arrow (SVG). On dark, it is Yellow Green with a Deep Blue arrow. On light (convention), it is Vivid Purple with a white arrow. On the lighter brand gradient (convention), it is Deep Blue with a Yellow Green arrow, because a Yellow Green circle is 2.7:1 against Electric Purple.
- **Patterns.**
  - **Symbol watermark:** `atlas-mark-white.png` at 6–10% opacity on gradients, or `atlas-mark.png` at 4–6% on light, very large and cropped by the edge.
  - **Watermark outlines:** the designer's concentric outlines of the symbol (`assets/patterns/logo-watermark-outlines-web.png`), oversized and cropped on gradients.
  - **Six-tab color strip:** for brand boards and covers only.
  - **Combining:** at most two textures on one object. On gradients, the watermark outlines may pair with the symbol watermark. On light, the watermark may pair with the corner wash. On covers, the strip pairs with the corner wash.
- **Photography.**
  - Show real people at work, not glossy stock.
  - Grade or overlay with Vivid Purple or Electric Purple.
  - Layered depth (a headline behind the subject) is allowed on social and ads.
  - Use no photos of identifiable clients without consent.
- **Designer backgrounds and deck elements.** `assets/backgrounds/` holds dark and light backgrounds in 16:9, 4:5, and 9:16, each with the symbol watermark on the right; keep copy on the open left and top. `assets/elements/` holds grainy gradient orbs, a glass cog, and the Yellow Green arrow, for decks and social only. See `BRAND-GUIDELINES.md` § 6.
- **Retired:** the starfield, orbital rings, lavender glows, and Cosmic Black.

---

## Layout and components (Atlas conventions)

- **Grid and spacing.**
  - The base grid is 4px.
  - The container is 1200px, with 24px gutters.
  - Section padding is 96–120px on desktop and 64–80px on mobile.
  - Separate sections with whitespace and hairlines, not with stacked color bands.
- **Radii.**
  - Cards are 16px (`--r-xl`).
  - Feature panels and hero objects are 24px (`--r-3xl`).
  - Large gradient bands are 32px.
  - Buttons, badges, and single-line inputs are pills.
  - Text areas are 12px.
- **Buttons.**
  - **Primary:** a pill, 48px tall, with `--accent` fill and `--on-accent` text, in Poppins Semi-Bold. It may carry a trailing arrow icon and uses `--shadow-3`.
  - **Secondary:** a pill with a 1px `--border` outline and `--fg-1` text.
  - **Text link:** `--accent-text` with an arrow icon.
  - **Circular arrow:** see Visual language.
  - **Hover:** a `translateY(-1px)` lift and `--accent-hover`.
  - **Focus:** `--focus-ring`.
  - **Press:** no scale.
- **Cards.**
  - A `--surface` fill on `--bg`, a 1px `--border-soft` border, 16px radius, and 24–32px padding.
  - On hover: `--shadow-2` and a 2px lift.
  - Featured cards use `--shadow-glow`, or a vivid-gradient fill with Pearl White text.
- **Badges.**
  - For "Free", "New", or "Included" emphasis, use a Yellow Green fill with Deep Blue text.
  - For neutral tags, use `--accent-bg` with `--accent-text`.
- **Inputs.** 48px tall, with a `--surface` fill and a 1px `--border`. On focus: `--focus-ring`. Labels sit above, in Outfit 14–15px Medium. Errors add no new hue: a 2px `--fg-1` border, an alert icon, and a plain sentence that says how to fix it.
- **Avatars.** `--gradient-brand` fill with Deep Blue initials in Poppins Semi-Bold (4.8:1 or better; white initials fall to 3.1:1 at the Electric Purple end).
- **Elevation.**
  - On light, use soft Deep Blue-tinted drops (`--shadow-1`, `--shadow-2`).
  - The hero object uses `--shadow-4`. Put it on a light-scoped wrapper: inside `data-theme="dark"`, `--shadow-4` is a black drop.
  - Do not use glow halos on light.
- **Motion.**
  - Use the signature easing throughout.
  - Durations are 150ms (micro), 300ms (hover), 450ms (cards), and 600ms (page).
  - Never bounce or overshoot.
  - Always honor `prefers-reduced-motion`.
  - Never hide content behind a scroll animation that needs JavaScript to reveal it.

---

## Iconography

- Use inline `<svg>` line icons in the Lucide style: 24×24 viewBox, 1.75px stroke, round caps and joins, `fill: none`.
- **Icon color.** On light, use `--fg-1` or `--accent-text`. On dark, use Pearl White or Yellow Green.
- **Icon container.** A 44px rounded square (12px radius) with an `--accent-bg` fill.
- **CTA arrows.** Use a diagonal up-right arrow icon (SVG), never a unicode arrow character.
- **Broader sets.** Lucide is the closest match. Prefer inline SVG over a CDN.

---

## Light and dark

**Light is the default** for:
- websites and landing pages
- product UI (the Atlas App's product team plans both light and dark modes; both use these tokens)
- documents and reports
- email

Set nothing: `:root` is light.

**Dark** (`data-theme="dark"` on `<html>`, `<body>`, or a section) is for:
- social posts and ads
- deck covers and dividers
- hero objects and feature bands inside light pages
- footers, if the page wants a dark close

**Mixing.**
- A light page may contain dark regions; scope each with `data-theme="dark"`.
- A light region inside a dark page uses `data-theme="light"`.
- Keep to the restraint rule: at most one dark object and one gradient band per screen.
- **Logo:** switch the file with the surface. Use `atlas-logo-dark.png` on light and `atlas-logo-white.png` on Deep Blue.

---

## Surfaces

| Surface | Kit | Default |
|---|---|---|
| Marketing websites and landing pages | `ui_kits/marketing/` | Light, with one gradient hero object or band |
| Social and ads | `ui_kits/social/` | Gradient or Deep Blue, Yellow Green accent, circular arrow CTA |
| Decks | `ui_kits/deck/` | Deep gradient covers and dividers, light content slides |
| Email | `ui_kits/email/` | Light body, logo lockup header |
| Internal docs, dashboards, reports | `ui_kits/internal/` | Light, tokens and fonts apply |
| Product UI (Atlas App) | `ui_kits/app/` | Light and dark modes, owned by the product team. Vivid Purple (light) or Yellow Green (dark) only for actions. |

---

## Open questions

1. **The new website.** Its web kit (buttons, forms, layout) is not in the PDF. When the site is live, check this file against it and adopt its component choices.

Resolved on 2026-10-22: headline casing (see CONTENT FUNDAMENTALS); the all-white lockup and the watermark-outlines pattern (now in `assets/`); the Atlas App, which the product team owns and plans to build in light and dark modes.

---

## Use this with Claude Code

This folder is a standalone Claude Code skill; see `SKILL.md`. Symlink it to `.claude/skills/atlas-design/` and invoke it for on-brand Atlas UI, slides, or assets.
