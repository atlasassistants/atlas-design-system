# Atlas App-Surface Guidance

Rules for product UI: the executive workspace, the Founder Brain surfaces, client dashboards, auth flows. The app is where the brand's promise gets proven — a calm system that carries the weight — so the UI's job is to *feel like relief*.

## Design engine

Product UI is dense, stateful work — the marketing taste-skill is the wrong engine for it. Drive layout with a product-UI skill (e.g. `ui-ux-pro-max`) and apply this brand-lock on top: tokens, Inter, radius scale, signature easing, voice.

## The one product principle

**Work arrives decided-shaped.** Every screen answers: what did the system notice, what does it recommend, what's the one call the human needs to make? If a screen presents raw chaos to assemble, it's below the line — redesign it.

## Rules

- **Theme:** workspace surfaces are dark by default; reading-heavy views (long-form, settings, exports, auth) may opt into light mode per `design.md` → Light mode. One theme per screen, never mixed — except the canonical exception: the workspace mock inside a marketing hero stays dark.
- **Lavender = action.** `#ba9cff` marks exactly the interactive/primary layer: CTAs, focus rings, active states, the recommended option. If everything is lavender, nothing is decided-shaped.
- **The gradient** appears only on the logomark, avatar fills, and (sparingly) display-text accents. Never on buttons, never as chart color.
- **Atmosphere is earned.** Starfield/orbital backdrops belong to marketing and empty states, not to work screens. A task list with a starfield is decoration fighting legibility.
- **Motion:** signature easing `cubic-bezier(0.6, 0.6, 0, 1)`; 150ms micro / 300ms state / 450ms surface transitions. Motion communicates state change, never delight-for-its-own-sake. Respect `prefers-reduced-motion`.
- **States are the product:** loading (skeletons matching layout), empty (composed, tells you how the system will fill it), error (inline, calm, next step included). An empty Founder Brain page that says what the system will learn is on-brand; a blank pane is not.
- **Density:** 4px grid; cards per the `design.md` anatomy; tables prefer hairline rows (`--border-soft`) over card-per-row. Numbers tabular.
- **Iconography:** inline Lucide-style line icons, 1.6px stroke, `--accent` stroke in the 44px rounded-square container (canonical service-icon recipe in `design.md` → ICONOGRAPHY).
- **Voice in UI:** buttons are verbs ("Approve", "Redirect", "Ship it"), never "OK"/"Submit". System messages state facts calmly: "3 loops ran overnight. 1 needs your call."
