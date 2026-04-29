# Atlas Marketing UI Kit

The marketing site is Atlas's only public surface. It pitches the four service tiers (EA Staffing, AI Operators, Managed AI, Executive Brief, Atlas Community), shows a workspace mock in the hero, lists pricing, and books discovery calls. This kit is a high-fidelity, modular React recreation of the canonical landing page (`_reference/atlas-landing-target.html`).

## Files

- `index.html` — full landing page; all components composed with React. Open this to see the kit.
- `kit.css` — component-layer styles. Loads on top of `colors_and_type.css` (the design system tokens).
- `Brand.jsx` — Atlas logomark (gradient "A") + wordmark.
- `NavBar.jsx` — sticky pill nav, brand left, links centered, CTA right. Active link state wired.
- `Hero.jsx` — orbital backdrop, headline, sub, dual CTAs, meta-row, plus the `HeroAppFrame` workspace mock with toggleable tasks and clickable sidebar.
- `LogoBar.jsx` — "Trusted by operators at" plus 6 text logos.
- `Services.jsx` — 5-card service grid with lavender chip icons; first card spans 2 columns.
- `FeatureSplits.jsx` — `FeatureEAMatch` (EA candidate stack with match indicator) and `FeatureAIOperator` (chat-style AI Operator panel).
- `Stats.jsx` — 4-stat proof bar + 3-card `Testimonials`.
- `Pricing.jsx` — 3 plans, middle one featured with top tag.
- `FAQ.jsx` — single-open accordion.
- `CTAFooter.jsx` — final CTA block + 4-column footer.

## Interactive bits

- Nav links scroll-to-section and update the active pill.
- Hero tasks check/uncheck; sidebar items switch active state.
- "Book a call" / "Book a discovery call" / pricing CTAs all surface a confirmation toast.
- FAQ accordion opens one question at a time.

## Caveats

- Customer logos in the trust bar are text placeholders — Atlas hasn't shipped an official customer wordmark set.
- Avatar initials in EA matching and testimonials use the brand gradient as a fill stand-in for real headshots.
- Service icons are inline SVGs in the Lucide line style. If Atlas adopts a custom icon sprite, swap the `SERVICE_ICONS` map in `Services.jsx`.
