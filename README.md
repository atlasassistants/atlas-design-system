# Atlas Design System

The shared design system for Atlas Assistants, used across Atlas marketing, product, and internal tools. It follows the **current brand guidelines** (transcribed in [`BRAND-GUIDELINES.md`](BRAND-GUIDELINES.md)): the six-color palette, Poppins and Outfit, and light-first surfaces. This repo is the single source of truth for Atlas visual identity.

> **2026-10-22:** the system moved from the 2026 "cosmic" look (Cosmic Black, lavender, Inter) to the current brand guidelines, which the new atlasassistants.com website uses. Old token names still resolve through deprecated aliases until 2026-12-31.

The system has **three** install paths:

1. **Claude Code skill** — symlink the repo into `~/.claude/skills/atlas-design/` and Claude Code will produce on-brand UI, slides, and assets without further explanation.
2. **Claude design import** — open Claude design, create a new design system, and point it at this repo's GitHub URL. Tokens, components, fonts, and assets import automatically.
3. **Standalone design system** — start with `preview/brand-board.html`, then browse `preview/` (index at `preview/index.html`) for the primitives. The marketing kit in `ui_kits/marketing/` renders live from a local server (see Quick start). Copy assets out of `assets/` and `fonts/` for Figma, Keynote, or any non-Claude tool.

Most teammates will use both Claude paths. Full setup steps for each are in [`INSTALL.md`](INSTALL.md).

## At a glance

| | |
|---|---|
| Palette | Deep Blue `#0C013B` · Pearl White `#FBFEF7` · Soft Blue Violet `#5C70FF` · Electric Purple `#B675F5` · Yellow Green `#E0FE53` · Vivid Purple `#4500F9`, each with 80/60/40/20% tints |
| Surface | **Light by default**: Pearl White page, Deep Blue text. Dark (Deep Blue and purple gradients) for social, ads, deck covers, and hero objects. |
| Primary action | Vivid Purple + white text on light. Yellow Green + Deep Blue text on dark. |
| Accent | Yellow Green for highlights, badges, and CTA arrows. Never as text on light. |
| Brand gradient | `linear-gradient(135deg, #5C70FF, #B675F5)`: the logo gradient |
| Typefaces | **Poppins** (display, headings) + **Outfit** (body) |
| Grid · easing | 4px base · `cubic-bezier(0.6, 0.6, 0, 1)` |

Rules: [`BRAND-GUIDELINES.md`](BRAND-GUIDELINES.md). Full guidance: [`design.md`](design.md). CSS tokens: [`colors_and_type.css`](colors_and_type.css).

## What's in here

```
.
├── SKILL.md                    Claude Code skill manifest
├── BRAND-GUIDELINES.md         The current brand guidelines, transcribed (read first)
├── design.md                   Full guidance: color roles, type, logo, components, modes, voice
├── colors_and_type.css         CSS variables + semantic element styles
├── assets/                     Default logo files; logo/ (full package, SVG + PNG); patterns/; backgrounds/; elements/
├── fonts/                      Poppins (400/600/700 + italics), Outfit (variable), OFL licenses
├── preview/                    One HTML page per primitive, plus brand-board, patterns, light-dark; shared recipes in preview.css
├── ui_kits/
│   ├── marketing/              Marketing landing kit (React + Babel standalone); index.html, kit.css, *.jsx
│   ├── social/                 Social artboards (templates.html)
│   ├── deck/                   Slide masters (master.html)
│   ├── email/                  Email skeleton (template.html)
│   ├── internal/               Rules for internal docs, reports, dashboards
│   └── app/                    Rules for product UI
├── screens/                    Captures of every preview page and kit
└── _reference/                 Guideline page renders (brand-guidelines/) + retired cosmic files (legacy-cosmic-2026/, historical only)
```

## Quick start

```bash
# Clone the repo
git clone https://github.com/atlasassistants/atlas-design-system.git ~/projects/atlas-design-system

# See the brand at a glance
open ~/projects/atlas-design-system/preview/brand-board.html

# Browse component primitives
open ~/projects/atlas-design-system/preview/index.html

# View the marketing kit (its .jsx files need a local server)
cd ~/projects/atlas-design-system && python3 -m http.server 8765
# then open http://127.0.0.1:8765/ui_kits/marketing/
```

## Use as a Claude Code skill

See [`INSTALL.md`](INSTALL.md) for the full team install flow. TL;DR:

```bash
ln -s ~/projects/atlas-design-system ~/.claude/skills/atlas-design
```

Once symlinked, invoke the skill in Claude Code with `/atlas-design` — Claude will read `BRAND-GUIDELINES.md` and `design.md` and act as an expert designer producing on-brand Atlas UI, slides, or production code.

## Use in Claude design

Open Claude design, create a new design system, and link this repo:

```
https://github.com/atlasassistants/atlas-design-system
```

Claude design will import the tokens, components, fonts, and assets so the Atlas brand is available across your design sessions. Re-sync from the same URL when the system updates. Full steps in [`INSTALL.md`](INSTALL.md).

## Use the assets directly

| Need | Where |
|---|---|
| Logomark (gradient "A") | `assets/atlas-mark.png` (light bg) / `assets/atlas-mark-white.png` (dark bg) |
| Full lockup | `assets/atlas-logo-dark.png` (light bg) / `assets/atlas-logo-white.png` (dark bg) |
| Font files | `fonts/Poppins-*.ttf`, `fonts/Outfit-Variable.ttf` (SIL Open Font License; see `fonts/OFL-*.txt`) |
| Guideline page renders | `_reference/brand-guidelines/page-{1,2,3,5,6}.jpg` (the photo-mockup pages stay on the shared drive) |
| Full logo package (horizontal, vertical, symbol; 7 colorways; SVG + PNG) | `assets/logo/svg/`, `assets/logo/png/` (all-white lockup: `horizontal-all-white.svg`) |
| Watermark outlines (gradient texture) | `assets/patterns/logo-watermark-outlines.png` (+ `-web.png`) |
| Slide and social backgrounds (dark, light; 16:9, 4:5, 9:16) | `assets/backgrounds/` |
| Deck elements (orbs, glass cog, Yellow Green arrow) | `assets/elements/` |
| CSS tokens | Copy `colors_and_type.css` into your project; `@import` it before your own styles |
| Reference HTML/CSS | Crib from `preview/preview.css` (component recipes) and `ui_kits/marketing/kit.css` |

## Updating the system

The design system is a living artifact. Conventions:

- **Branch + PR for any change.** Even small tweaks should ship through a PR so the team sees them.
- **Update [`design.md`](design.md) before code.** If a new pattern emerges, write the guidance first, then encode it in CSS/components.
- **Bump tokens, don't add ad-hoc values.** New color, spacing, or radius? Add it to `colors_and_type.css` as a variable; never hardcode.
- **Mirror new components into [`preview/`](preview/).** Each new primitive gets a small isolation page so the team can review it without running the full kit.
- **Keep the marketing kit in sync.** When tokens change, refresh `ui_kits/marketing/` so it stays the canonical reference build.

## Brand source of truth

This repo encodes the **visual** brand. The **strategic** brand context (mission, voice, ICP, voice rules beyond UI) lives in Colin's brain at `colin-brain/context/brand.md`. The two should agree — if they conflict, treat this repo as authoritative for visuals and `brand.md` as authoritative for strategy.

## License

Internal to Atlas Assistants. Not for external distribution.
