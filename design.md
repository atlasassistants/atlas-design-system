# Atlas Assistants Design System

Atlas pairs founders and executives with world-class, AI-trained executive assistants and AI Operators. The product surface is a marketing site (selling EA staffing, AI Operators, Managed AI Services, Executive Brief, and the Atlas Community) plus an executive workspace shown as a demo inside the hero. The brand is a cosmic, dark-mode aesthetic — deep purple-black surfaces, orbital starfields, lavender as the only true accent, and a signature blue→magenta brand gradient on the logo and buttons.

This system was reverse-engineered from the **`reflect-design`** reference codebase that the Atlas team uses as their structural starting point — Atlas borrows reflect's 4px grid, signature `cubic-bezier(.6,.6,0,1)` easing, layered orbital motion, and shadow/elevation pattern, then swaps in Atlas's own colors, type, and product copy.

---

## Sources

- **Reference codebase (read-only mount):** `reflect-design/`
  - `reflect-design/_target-atlas-landing.html` — the canonical Atlas landing page (the visual north star — every token decision in this system supports how this renders).
  - `reflect-design/CLAUDE.md` — explicit Atlas-vs-reflect deltas (kept colors, dropped fonts, replaced sections, signature gradient).
  - `reflect-design/SKILL.md` / `references/DESIGN.md` — reflect's structural language (4px grid, easing, shadow tokens, dark-mode mapping). Used for spacing/motion only — colors and type are Atlas's.
  - `reflect-design/fonts/` — Inter font files (Atlas keeps Inter only; KaTeX, AeonikPro, swiper-icons are reflect-specific and dropped).
- **Brand assets (uploaded):** `uploads/atlas-logo-dark.png`, `uploads/atlas-logo-white.png`.
- **Frozen copies:** the target landing page and reflect's homepage screenshot are mirrored under `_reference/` so this skill works offline if the mount disconnects.

---

## Index

```
.
├── design.md                  ← this file
├── SKILL.md                   ← Claude Code skill manifest (drop-in)
├── colors_and_type.css        ← CSS variables + semantic element styles
├── assets/                    ← logos, brand glyphs
│   ├── atlas-mark.png         ← Atlas "A" logomark, gradient-filled (use on light surfaces)
│   ├── atlas-mark-white.png   ← Atlas "A" logomark, white (use on dark surfaces)
│   ├── atlas-logo-dark.png    ← full lockup, navy-on-white
│   └── atlas-logo-white.png   ← full lockup, white-on-dark
├── fonts/                     ← Inter (regular, medium, semibold, bold)
├── preview/                   ← Design System tab cards
└── ui_kits/
    └── marketing/             ← Atlas marketing-site UI kit (the only product)
        ├── README.md
        ├── index.html
        └── *.jsx              ← Nav, Hero, Services, Pricing, etc.
```

---

## Brand at a glance

| | |
|---|---|
| Brand name | **Atlas Assistants** (lowercase "atlas" in product UI) |
| Tagline used | "Executive support, reimagined" / "Operate in your zone of genius" |
| Primary surface | Dark (Cosmic Black `#050314`) — marketing is dark-mode-first; a light theme exists for product surfaces (see ["Light mode"](#light-mode)) |
| Single accent | Lavender `#ba9cff` — the only true pop of color |
| Brand gradient | `linear-gradient(135deg, #5c70ff, #b675f5)` — periwinkle → magenta. Used on the logo orb, primary mark backgrounds, avatar fills, and large display text fades. |
| Type | **Inter** only (400 / 500 / 600 / 700) |
| Grid | 4px base; everything snaps to multiples of 4 |
| Signature easing | `cubic-bezier(0.6, 0.6, 0, 1)` |
| Atmosphere | Orbital glow + subtle starfield backdrop on dark, fixed behind content |

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, slightly literary, founder-grade. Atlas is talking to a CEO or partner — never down to a junior. Sentences are short and declarative, with the occasional well-placed em-dash. Avoids hype words and superlatives. Never explains the obvious.

**Tone.** Calm, premium, in control. The product promises *relief from operational drag* — the copy reads the way a great Chief of Staff would talk: direct, unflappable, never breathless.

**Casing.** Sentence case for everything in body and most headlines. The wordmark is set in lowercase ("atlas"). Eyebrows / section badges (e.g. `SERVICES`, `PRICING`, `EA STAFFING`) are uppercase with `0.08em` letter-spacing — these are the only place uppercase appears.

**Person.** Second-person ("you", "your week", "your calendar") in headlines and CTAs. First-person plural ("we", "our bench") when describing the Atlas team. Never "I". Never "we believe…" / "we think…" — Atlas states, doesn't speculate.

**Numerals.** Spelled out for emotional copy ("two weeks, not three months"); kept as digits for proof points ("90% match success", "14-day placement", "12hr reclaimed weekly", "$3,200 / month"). Always thin spaces, never random ALL-CAPS for emphasis.

**Emoji.** Almost never. Body copy is emoji-free. The one place they appear is as small inline icons inside the AI Operator mock chat bubble (`📧 Gmail`, `📝 Notion`, `🎙️ Otter`, `📊 Linear`) — there they read as tool-tags, not decoration. Don't add them anywhere else.

**Examples (verbatim from the target landing):**

- *"Operate in your zone of genius."* — primary headline; "zone of genius" is gradient-filled.
- *"Atlas pairs founders and executives with world-class assistants and AI operators — so the operational weight lifts off your calendar and your best work has room to breathe."* — sub-headline; one long sentence, em-dash break.
- *"Matched in two weeks, not three months."* — feature headline; uses the rhythm of contrast.
- *"Your EA, with 10x reach."* — short, declarative, gradient on the proof-point.
- *"We screen, interview, train, and back every match with a 90-day guarantee. The role is theirs, the support is yours."* — feature body; comma-list cadence + chiasmus.
- *"Reclaim your week."* — final CTA. Two words. That's the whole vibe.
- *"Made for operators who want their week back."* — footer pay-off line.

**Forbidden words/patterns.** "Revolutionary", "best-in-class", "next-gen", "leverage cutting-edge AI", "synergy", "platform that empowers". No exclamation marks (one per page max, and even that's a stretch). No "🚀". No ALL CAPS shouting.

---

## VISUAL FOUNDATIONS

**Color vibe.** Cosmic, indigo, premium. The whole experience lives on `#050314` — a deep blue-black that reads almost violet under the content. Surfaces step up in 5–10% lightness increments (`#0a0620` → `#110a2c` → `#1a1140`); borders sit between them at very low opacity. Lavender `#ba9cff` is the only chromatic accent — used for buttons, badges, focus rings, active list items, and gradient accent stops. Two cooler purples (`#9382ff` indigo, `#5c70ff` periwinkle) and one warmer one (`#b675f5` magenta) appear only inside gradients.

**Type.** Inter, four weights (400/500/600/700). Display sizes go big — H1 is `clamp(40px, 6vw, 78px)` with `-0.03em` tracking and `1.05` line-height. Body is 14–16px. There is no second typeface. Never introduce a serif, a mono display face, or a third weight outside Inter.

**Spacing.** Strict 4px grid. Common rhythm: 4 / 8 (tight, inside chips & cards) → 12 / 16 (between groups) → 24 / 32 (between sections inside a card) → 64 / 80 / 96 / 120 (between full sections). Page sections use `padding: 120px 0` on desktop, `80px 0` under 640px. The container is max-width 1296px with 24px gutters.

**Backgrounds.** No photography, no illustration. The brand is built entirely from light, gradient, and motion:
- A fixed `body::before` overlay paints two soft radial gradients — a `rgba(186,156,255,0.18)` ellipse at top-center and a `rgba(92,112,255,0.10)` ellipse at bottom-center.
- A fixed `.stars` layer scatters 1px white dots via `radial-gradient` background-images, with a duplicated layer that twinkles `opacity: 0.2 → 0.5` over 6s.
- Hero adds an orbital element — two nested concentric circles (1px lavender borders at 12% / 18% opacity) rotating at 100s and 80s in opposite directions, with a 200px-inset radial-blur core.
- Section CTAs and the featured pricing plan get small radial-gradient halos at the top.
- Imagery, where used, is suggested via abstract gradient orbs and circular avatar fills using the brand gradient — never warm, never grainy, never b&w.

**Animation.** Expressive but tasteful — never bouncy. Signature curve is `cubic-bezier(0.6, 0.6, 0, 1)` (slow→fast ease-out, dramatic feel). Durations cluster at 150ms (micro-interactions), 300ms (hover/state), 450ms (cards), 600ms (page-level reveals). Big pieces (orbital rings) animate at 80–100s linear loops. Twinkles run 6s ease-in-out infinite. Always respect `prefers-reduced-motion` — the system disables animation duration globally when set.

**Hover states.** Buttons: opacity → 0.92 + `translateY(-1px)`. Outline / ghost buttons: lift `background` from 4% to 8% white and border from 12% to 20% white. Cards: border-color shifts from `#1d1640` (border-soft) to `rgba(186,156,255,0.3)` and the card itself lifts `-2px` translateY; a top-radial accent tint fades from 0 → 1 opacity over 450ms. Nav links: text color goes from `--fg-2` (72%) → `--fg-1` (100%).

**Press states.** Subtle. The signature easing means we lean on color/opacity rather than scale punches. Buttons drop the `-1px` lift and dim opacity slightly during the active phase; we don't apply scale transforms.

**Borders.** Almost always 1px, almost always low-opacity-on-dark. The system has two: `--border` (`#2a1f55` — used on key cards, modals, hero app frame) and `--border-soft` (`#1d1640` — used on dividers, list rows, internal panels). On accent-tinted surfaces we use `rgba(186, 156, 255, 0.16–0.4)` for the ring instead.

**Inner / outer shadow system.** Cards use a layered shadow recipe:
- **Inset hairline highlight** — `inset 0 1px 0 rgba(255,255,255,0.04–0.06)` — gives a thin "lit edge" along the top of every card. This is universal.
- **Outer cool drop** — `0 8px 24px rgba(92,112,255,0.10–0.15)` — gives weight, but cool not warm.
- **Outer accent glow** — `0 0 80px rgba(186,156,255,0.08)` or `0 32px 64px rgba(186,156,255,0.08)` — used only on the hero app frame and the featured pricing plan to single them out.
- **Primary button glow** — `0 8px 24px rgba(186,156,255,0.28)` — the lavender shadow under primary CTAs.

**Protection gradients vs capsules.** Atlas uses protection gradients more than card chrome. Body has a fixed top/bottom radial pair so any text reads against light at the top and dark at the bottom regardless of scroll. The hero app frame and the CTA block both have an internal `radial-gradient` that lifts text off the surface. Capsules (pill-shaped) appear in three places: section eyebrows (badges), nav-link container, and the "live now" badge in the hero — all with `border-radius: 999px`.

**Layout rules.** A single fixed nav bar at the top with `backdrop-filter: blur(18px)` and `rgba(5,3,20,0.6)` background — sticky, never solid. The body itself never scrolls behind the orbital backdrop (it's `position: fixed`). Nothing else is fixed — Atlas avoids floating chrome, fixed CTAs, sticky sidebars.

**Transparency and blur.** Used surgically. The nav uses 18px blur over a 60% bg. Card surfaces are opaque. The accent button has a tiny inset 40% white highlight on top to look "lit". The "search" input inside the workspace mock uses 4% white over the surface for a recessed feel. Outside of these, surfaces are solid.

**Color vibe of imagery.** N/A — Atlas doesn't ship illustration or photography in v1. When real imagery is added later, it should bias **cool, slightly cyan-tinted, low-saturation** — never warm, never grainy, never sepia. Avatars are circular, filled with the brand gradient, and overlay 2-letter initials in white at `font-weight: 600`.

**Corner radii.** Tight, never pillowy. Use only the scale: 4 / 6 / 8 / 10 / 12 / 14 / 16 / 24 / 999. Most cards are 12 (`--r-xl`), the hero app frame is 14, the CTA block is 24, badges/pills are 999. Buttons are 8.

**Cards — full anatomy.** Background `#110a2c`. Border `1px solid #1d1640`. Radius `12px`. Padding `24–28px` depending on density. Inner highlight via `inset 0 1px 0 rgba(255,255,255,0.04)`. On hover: border becomes `rgba(186,156,255,0.3)`, card lifts `-2px`, a top-radial accent fades in. Featured cards (e.g. pricing "Most popular") add a `0 0 0 1px rgba(186,156,255,0.12)` ring + a top radial wash + a `plan-tag` capsule pinned at `top: -10px`.

---

## ICONOGRAPHY

Atlas uses **inline `<svg>` line icons** in the Lucide / Feather style — 24x24 viewBox, 1.6px stroke, `stroke-linecap: round`, `stroke-linejoin: round`, `fill: none`, stroke colored with `var(--accent)` (`#ba9cff`). They sit in 44x44 rounded squares (`--r-lg`, `border-radius: 10px`) with `rgba(186,156,255,0.12)` fill and `rgba(186,156,255,0.24)` border — this is the canonical "service icon" container.

The target landing inlines a small set: a "users + add" people icon (EA Staffing), a sun-burst (AI Operators), a 3D-cube (Managed AI), a document (Executive Brief), and a target/compass (Community). These are all hand-rolled inline SVGs in the `<svg viewBox="0 0 24 24">` style — Atlas does **not** ship a custom icon font and does not depend on any vendor library. The codebase has **no detected icon library** (per the reflect skill audit it was reverse-engineered from).

**For new work, prefer inline `<svg>` icons in the same line style** (24×24, 1.6px stroke, round caps/joins, `fill: none`, stroke colored with `var(--accent)`). The marketing kit ships them inline rather than depending on a CDN.

**If you need a broader icon set,** Lucide is the closest match to Atlas's inline style — same stroke weight, same line-cap. Use it via the React package or CDN:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="calendar" stroke="#ba9cff"></i>
<script>lucide.createIcons();</script>
```

**Substitution flag:** if Atlas later ships an official icon sprite, replace any Lucide usage with it.

**Emoji.** Used in exactly one place — the AI Operator chat mock — as 4 small tool-tag chips: `📧`, `📝`, `🎙️`, `📊`. Treat that as a one-off product detail, not a brand pattern. Don't sprinkle emoji elsewhere.

**Unicode chars.** A few well-chosen ones: `⌘` for the keyboard hint inside the workspace search input. The dot separator in the hero meta-row is a real `<span>` with a 4px circle background, not a `·`.

**Logo files.**
- `assets/atlas-mark.png` — the Atlas **logomark**: an "A" inscribed inside an open ring, both filled with the brand gradient (blue → purple). Transparent background. This is the canonical brand mark — use it on light surfaces.
- `assets/atlas-mark-white.png` — same logomark, solid white. Use on dark surfaces (the marketing site, dark hero panels, etc).
- `assets/atlas-logo-dark.png` — full lockup ("atlas" wordmark + "ASSISTANTS"), navy-on-white. Use on light surfaces / partner pages.
- `assets/atlas-logo-white.png` — full lockup, white-on-dark.
- Render the mark as an `<img>`, never as CSS shapes. At nav size (36px) apply `filter: drop-shadow(0 8px 24px rgba(92,112,255,0.32))` for the same lit-from-behind feel as the rest of the brand.
- Minimum size: 16px. Below that, switch to the wordmark-only.

---

## Light mode

Atlas is dark-by-default — the marketing site, the landing, anything pitch-facing stays cosmic. **Light mode is an opt-in layer for product surfaces** where dark is too heavy: auth screens, settings, in-app reading, exported documents.

### How it works

The light theme is defined in `colors_and_type.css` under `[data-theme="light"]`. Same token names, inverted surfaces. Apply via:

```html
<html data-theme="light">
<!-- or scope to a region -->
<body data-theme="light">
<section data-theme="light">
```

Components that use `var(--bg)`, `var(--surface)`, `var(--fg-1)`, etc. switch automatically. No component code changes are needed.

### What changes

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#050314` (Cosmic Black) | `#fafaff` (near-white, subtle cool tint) |
| `--bg-2` | `#0a0620` | `#f4f0ff` (lavender wash) |
| `--surface` | `#110a2c` | `#ffffff` (cards on bg) |
| `--surface-2` | `#1a1140` | `#f8f6ff` (hovered) |
| `--border` | `#2a1f55` | `#e5e1f5` |
| `--border-soft` | `#1d1640` | `#efebfa` |
| `--fg-1` | `#ffffff` | `#050314` (Cosmic Black for body text) |
| `--fg-2…4` | `rgba(255,255,255, 0.72/0.5/0.32)` | `rgba(5,3,20, 0.72/0.5/0.32)` |
| `--accent` (fills) | `#ba9cff` | `#ba9cff` (unchanged — lavender CTAs work on both) |
| **`--accent-text` (new)** | inherits `--accent` | `#5046e4` (darker indigo for AA contrast on white) |
| Stars overlay | visible | hidden (`--stars-opacity: 0`) |
| Atmosphere overlays | strong | reduced ~3× |
| Inset white highlights on cards | yes | dropped |
| Card shadows | cool drop + inset glow | subtle dark drop + inset white |

### Rules

- **Never mix freely.** A page is either dark or light, not both. The only exception is the executive workspace mock inside the marketing hero — it stays dark even if the surrounding shell is light.
- **CTA buttons stay lavender on both.** `var(--accent)` as background + `#0a0620` text reads on both modes — don't introduce a "light-mode CTA" variant.
- **Use `--accent-text` for accent text on light surfaces** — links, accent labels, list-item bullets. Never put body-sized `#ba9cff` text on white (fails AA contrast at 2.18:1).
- **The brand gradient is unchanged.** Use it on the logomark, headline accents, and avatar fills regardless of theme.
- **Atmosphere is subtler.** Stars are off; radial glows are dialed down. The light theme is *clean*, not cosmic.

### When to reach for it

- Auth flow (sign in, sign up, forgot password) — reading-heavy and ambient
- In-product reading surfaces — the exec workspace's "long form" view, exported PDFs/HTML
- Partner-facing pages where light is the convention (legal, security disclosure, RFP attachments)
- Anywhere the eye needs to live for >5 minutes

If you're not sure: **stay dark**. The Atlas brand is the cosmic one — light mode is a quiet utility layer, not the alternate identity.

### Reference

See [`preview/light-mode.html`](preview/light-mode.html) for the canonical light-mode primitive page.

---

## Use this with Claude Code

This folder is also a standalone Claude Code skill — see `SKILL.md`. Drop it under `.claude/skills/atlas-design/` and invoke it whenever you need on-brand UI, slides, or assets for Atlas.
