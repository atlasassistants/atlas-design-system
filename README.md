# Atlas Design System

The shared design system for Atlas Assistants — a dark, cosmic, lavender-accented brand language used across Atlas marketing, product, and internal tools. This repo is the single source of truth for Atlas visual identity.

The system has **three** install paths:

1. **Claude Code skill** — symlink the repo into `~/.claude/skills/atlas-design/` and Claude Code will produce on-brand UI, slides, and assets without further explanation.
2. **Claude design import** — open Claude design, create a new design system, and point it at this repo's GitHub URL. Tokens, components, fonts, and assets import automatically.
3. **Standalone design system** — open `ui_kits/marketing/index.html` to see the canonical landing rendered live. Browse `preview/` for component primitives. Copy assets out of `assets/` and `fonts/` for Figma, Keynote, or any non-Claude tool.

Most teammates will use both Claude paths. Full setup steps for each are in [`INSTALL.md`](INSTALL.md).

## At a glance

| | |
|---|---|
| Surface | Dark by default — `#050314` (Cosmic Black) |
| Accent | Lavender `#ba9cff` — the only chromatic accent |
| Brand gradient | `linear-gradient(135deg, #5c70ff, #b675f5)` — used on the logomark, large display text, avatar fills |
| Typeface | **Inter** only (400 / 500 / 600 / 700) |
| Grid | 4px base — every dimension snaps to multiples of 4 |
| Easing | `cubic-bezier(0.6, 0.6, 0, 1)` |
| Atmosphere | Orbital glow + subtle starfield, fixed behind content |

Full guidance: [`design.md`](design.md). CSS tokens: [`colors_and_type.css`](colors_and_type.css).

## What's in here

```
.
├── SKILL.md                    Claude Code skill manifest
├── design.md                   Full guidance — voice, visual, motion, iconography
├── colors_and_type.css         CSS variables + semantic element styles
├── assets/                     Logomarks (mark + lockup, dark + light)
├── fonts/                      Inter (400 / 500 / 600 / 700)
├── preview/                    Component primitives (one HTML page per primitive)
├── ui_kits/
│   └── marketing/              Full marketing-site UI kit (React + Babel standalone)
│       ├── index.html          ← open this first
│       ├── kit.css
│       └── *.jsx               Nav, Hero, Services, Pricing, FAQ, etc.
└── _reference/                 Frozen reference (canonical landing target)
```

## Quick start

```bash
# Clone the repo
git clone https://github.com/atlasassistants/atlas-design-system.git ~/projects/atlas-design-system

# View the marketing kit
open ~/projects/atlas-design-system/ui_kits/marketing/index.html

# Browse component primitives
open ~/projects/atlas-design-system/preview/cards.html
```

## Use as a Claude Code skill

See [`INSTALL.md`](INSTALL.md) for the full team install flow. TL;DR:

```bash
ln -s ~/projects/atlas-design-system ~/.claude/skills/atlas-design
```

Once symlinked, invoke the skill in Claude Code with `/atlas-design` — Claude will read `design.md` and act as an expert designer producing on-brand Atlas UI, slides, or production code.

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
| Inter font files | `fonts/Inter-{Regular,Medium,SemiBold,Bold}.ttf` |
| CSS tokens | Copy `colors_and_type.css` into your project; `@import` it before your own styles |
| Reference HTML/CSS | Crib from `ui_kits/marketing/kit.css` and the JSX components |

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
