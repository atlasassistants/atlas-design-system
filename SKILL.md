---
name: atlas-design
description: "Atlas Assistants brand-lock for any Atlas-branded UI, site, slide, mock, or asset. Supplies the LOCKED brand invariants — cosmic palette, lavender accent, blue→magenta gradient, Inter type, logo, signature easing, and voice — and delegates layout, composition, and motion to the taste-skill (design-taste-frontend) engine, so Atlas work stays on-brand without looking templated."
user-invocable: true
---

# Atlas Design — brand-lock

**This skill is a brand-lock, not a layout template.** For any Atlas frontend, the design engine is the **taste-skill** (`design-taste-frontend`); this skill supplies the brand invariants it must respect.

## How to use it

1. **Load the identity first — `brand-identity.md`.** The brand concept ("put the weight down" / the Leverage Line), positioning, messaging pillars, and canonical vocabulary. Every asset stands on one of the five pillars; the vocabulary table wins over any conflicting copy.
2. **Drive layout / composition / motion with taste-skill.** Let it run brief inference and set its `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY` dials for what you're building. Composition should be *fresh each build*.
3. **Load this skill's LOCKED brand invariants as hard constraints** — palette, Inter, logo, gradient, `cubic-bezier(0.6, 0.6, 0, 1)` easing, 4px grid, and the voice rules in `design.md` → CONTENT FUNDAMENTALS. These never bend. **Logo especially:** image files only — full lockup (`assets/atlas-logo-white/dark.png`) by default, mark alone for small/square spots, and NEVER typeset "atlas" next to the mark (see `design.md` → LOGO USAGE).
4. **Treat the reference landing + `ui_kits/marketing/` as a token source, not a layout to clone.** Do not reproduce the exact target page unless explicitly asked — cloning it is what makes every Atlas build look identical.
5. **Conflict rule:** brand-lock wins on brand (keep Inter; keep the occasional em-dash in Atlas copy; keep the palette + gradient). taste-skill wins on structure (layout, spacing rhythm, section variety, motion).

Read **`brand-identity.md`** first, then **`design.md`** for the full system — start with its "Composition model" section — and explore `colors_and_type.css`, `assets/`, and `fonts/`.

## Output

- **Visual artifacts** (slides, mocks, throwaway prototypes): copy assets out and produce static HTML for the user to view.
- **Production code:** apply the LOCKED tokens + voice and design with taste-skill as an expert in the Atlas brand.
- **If invoked with no other guidance:** ask what they want to build, ask a few scoping questions, then act as an expert designer outputting HTML artifacts _or_ production code as needed.
