---
name: atlas-design
description: "Atlas Assistants brand-lock for any Atlas-branded UI, site, slide, mock, or asset. Supplies the LOCKED brand invariants from the current brand guidelines: the six-color palette (Deep Blue, Pearl White, Soft Blue Violet, Electric Purple, Yellow Green, Vivid Purple), Poppins + Outfit type, the logo files and clear space, light-first color roles, and voice. Delegates layout, composition, and motion to the taste-skill (design-taste-frontend) engine, so Atlas work stays on-brand without looking templated."
user-invocable: true
---

# Atlas Design: brand-lock

**This skill is a brand-lock, not a layout template.** For any Atlas frontend, the design engine is the **taste-skill** (`design-taste-frontend`). This skill supplies the brand invariants it must respect.

## How to use it

1. **Load the rules first: `BRAND-GUIDELINES.md`.** It transcribes the current brand guidelines: logo variants and clear space, the six colors and their tints, the Poppins and Outfit hierarchy, and the visual language. Page renders are in `_reference/brand-guidelines/`.
2. **Load `design.md`.** It covers color roles and contrast, the web type scale, logo usage, components, light and dark modes, and voice (CONTENT FUNDAMENTALS). Start with its "Composition model" section.
3. **Drive layout, composition, and motion with taste-skill.** Let it run brief inference and set its dials. Composition should be fresh each build.
4. **Treat the LOCKED invariants as hard constraints:**
   - the palette and its roles
   - Poppins and Outfit
   - the logo image files and their clear space
   - the 4px grid and the `cubic-bezier(0.6, 0.6, 0, 1)` easing
   - pill buttons
   - the voice rules

   Two color rules are easy to miss:
   - **Light is the default.** The primary action is Vivid Purple with white text on light, and Yellow Green with Deep Blue text on dark.
   - **Yellow Green is never text on a light surface.**
5. **Logo rules.**
   - Use image files only. On light, the default is the full lockup `assets/atlas-logo-dark.png`. On Deep Blue, it is `assets/atlas-logo-white.png`. Use the mark alone for small or square spots.
   - Never typeset "atlas" next to the mark.
6. **Treat `ui_kits/` and `preview/` as a token source, not a layout to clone.**
7. **Conflict rule.** Brand-lock wins on brand: keep Poppins and Outfit, the palette, and the color roles. taste-skill wins on structure.
8. **Copy.** Read the Q4 2026 note in `design.md` → CONTENT FUNDAMENTALS before writing public copy. Never call Atlas a managed service. Never reuse claims from the guideline mockups.

## Output

- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the tokens, fonts, and logo files, then produce static HTML.
- **Production code:** apply the LOCKED tokens and voice, and design with taste-skill as an expert in the Atlas brand.
- **No other guidance:** ask what the user wants to build and a few scoping questions. Then act as an expert designer producing HTML artifacts or production code.
