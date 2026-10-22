# Atlas Marketing UI Kit

A modular React recreation of an Atlas marketing landing page, built on the current brand guidelines: light-first, Pearl White page, Deep Blue text, Vivid Purple actions, one deep-gradient hero object, and one vivid-gradient CTA band. Use it as a token and pattern source, not a layout to clone (see `design.md` > Composition model).

Open `index.html` through a local server, because Chrome blocks the `.jsx` fetches on `file://`:

```bash
cd ~/projects/atlas-design-system && python3 -m http.server 8765
# then open http://127.0.0.1:8765/ui_kits/marketing/
```

React 18 and Babel standalone load from unpkg (pinned versions with SRI hashes). That predates this migration and is the only CDN in the kit. Fonts are local (`fonts/`).

## Files

| File | What it renders |
|---|---|
| `index.html` | The full page, composed with React |
| `kit.css` | Component layer on top of `colors_and_type.css` |
| `Brand.jsx` | Logo lockup as an image file (`theme="light"` or `"dark"`, `variant="lockup"` or `"mark"`), plus the inline Lucide icon set |
| `NavBar.jsx` | Light sticky bar: lockup, four links, one "Book a call" pill; links move into a sheet below 900px |
| `Hero.jsx` | Left-aligned copy, Vivid Purple accent phrase, one deep-gradient hero object with the watermark outlines, white symbol watermark, and the circular arrow |
| `LogoBar.jsx` | Six labeled "Client logo" placeholder slots |
| `Approach.jsx` | Three-cell bento: Recruit (light feature panel with corner wash and watermark), Develop, Equip |
| `RoleSplit.jsx` | The Exec Ops Partner role: copy plus a labeled photo slot and a profile card |
| `Proof.jsx` | Three "Stat placeholder" slots and one testimonial placeholder |
| `Pricing.jsx` | Three placeholder plans; the featured plan is a vivid-gradient card |
| `FAQ.jsx` | Single-open accordion |
| `CTAFooter.jsx` | Vivid-gradient CTA band and a light footer |

## Copy status

All copy is neutral placeholder copy built from `design.md`: Atlas is a talent partnership, the public role is the Exec Ops Partner, and the north-star belief is "Operate in your zone of genius." Nothing here is approved marketing copy.

- **Placeholders that must be replaced or removed before use:** client logos, stats, the testimonial, plan names, prices, inclusions, two FAQ answers, the photo slot, and the booking link (the button shows a toast).
- **Never fill placeholders with invented numbers, customer counts, names, or quotes.** Every proof point needs a current, checked source and Colin's approval.
- Do not name retired offers, call Atlas a managed service, or frame hiring or assistants as a false solution.

## Implementation notes

- Gradient regions carry `data-theme="dark"`, so their buttons and accents switch to Yellow Green with Deep Blue text automatically.
- Elevation for a gradient object goes on a light-scoped wrapper (`.hero-lift`, `.plan-lift`). Inside `data-theme="dark"`, `--shadow-4` is a black drop that looks muddy on a light page.
- The hero corner wash is flipped to the top-right so it never meets the next section with a hard edge.
- The gradient texture is the designer's watermark outlines, `assets/patterns/logo-watermark-outlines-web.png`, oversized and cropped.
- No scroll animations. Hover transitions use the signature easing and honor `prefers-reduced-motion` through the token file.

## Screens

`screens/kits/marketing-desktop-1440.png` and `screens/kits/marketing-mobile-390.png`.
