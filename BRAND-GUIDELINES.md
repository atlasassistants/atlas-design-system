# Atlas Assistants Brand Guidelines (current)

This file transcribes the current Atlas Assistants brand guidelines. Everything in `design.md` and `colors_and_type.css` builds on it.

| | |
|---|---|
| Source file | `Atlas Assistant_Brand Guidelines.pdf`, 8 pages, CorelDRAW export dated 2025-01-08 |
| Location | Atlas shared drive › 3. Marketing › GRAPHIC DESIGN › AA New Logo › AA Brand Guidelines › AA Brand Guidelines — CURRENT |
| Status | Confirmed current by Colin Pal on 2026-10-22. It is the guideline set for the new atlasassistants.com website. It replaces the 2026 "cosmic" system (Cosmic Black, lavender accent, Inter). |
| Page renders | `_reference/brand-guidelines/page-{1,2,3,5,6}.jpg` (logo, clear space, palette, type). Pages 4, 7, and 8 are photo mockups; they stay out of this public repo. See the PDF on the shared drive. |

The PDF itself says: "The images and mockups in this presentation are for presentation purposes only, they are NOT part of the logo deliverables." So the specs on pages 2, 5, and 6 are rules. The mockups on pages 1, 4, 7, and 8 only show the brand in use.

Labels used below:
- **Spec**: printed in the PDF.
- **Measured**: read from the page renders by pixel sampling or measurement.
- **Observed**: seen in a mockup. It shows intent but is not a written rule.

---

## 1. Logo (pages 1–4)

**Construction (observed).** The symbol is a thick open ring with a stylized "A" figure inside it. A dot sits where the crossbar would be, so the "A" reads as a person. One gradient runs diagonally across the whole symbol, from Soft Blue Violet `#5C70FF` at the top left to Electric Purple `#B675F5` at the bottom right. The wordmark is lowercase "atlas" in a bold geometric sans. Under it, "ASSISTANTS" is set in widely tracked capitals, spanning the width of "atlas".

**Variants shown**

| Variant | Where in the PDF | File in this repo |
|---|---|---|
| Full lockup: gradient symbol and Deep Blue wordmark, on light | Page 1 (cover) | `assets/atlas-logo-dark.png` |
| Full lockup: gradient symbol and white wordmark, on Deep Blue | Page 3 | `assets/atlas-logo-white.png` |
| Full lockup, all white, on color, gradient, or photo backgrounds | Page 4 (top) | `assets/logo/svg/horizontal-all-white.svg` (+ PNG) |
| Symbol only, gradient | Page 1 (top right) | `assets/atlas-mark.png` |
| Symbol only, white, on Vivid Purple or on a Soft Blue Violet → Electric Purple gradient | Page 4 (bottom) | `assets/atlas-mark-white.png` |
| Wordmark only, Deep Blue (small, page corner) | Page 1 (bottom right) | Not in the designer's logo package. Do not typeset it. |

**Clear space (page 2, spec plus measurement)**
- **x** is the gap between the symbol and the wordmark. This is measured: the `x` bracket spans exactly that gap.
- The diagram labels `2x · x · 2x` above and below the logo, and `4.5x` on the left and right.
- **Measured reading:** about 2x of clear space above and below the logo, and about 4.5x on the left and right.
- The `4.5x` bracket is drawn along the logo's height, so the label is ambiguous. Use **2x on every side as the minimum**. Use 4.5x left and right where space allows.

**Not specified:** minimum logo size, misuse examples ("don'ts"), and logo use on photos beyond the page 4 example.

**The logo package (designer delivery, 2025-01-09).** The shared drive's Marketing › GRAPHIC DESIGN › AA New Logo folder holds the source files. They are in this repo under `assets/logo/` (SVG converted from the designer's vector PDFs, background boxes removed; PNG as delivered).

| Layout | Colorways (file suffix) |
|---|---|
| `horizontal-` | `gradient-deep-blue` (= `assets/atlas-logo-dark.png`), `gradient-white` (= `assets/atlas-logo-white.png`), `all-white`, `vivid-purple`, `electric-purple`, `soft-blue-violet`, `black` |
| `vertical-` (symbol above the wordmark) | the same seven |
| `mark-` (symbol only) | `gradient` (= `assets/atlas-mark.png`), `all-white` (= `assets/atlas-mark-white.png`), `vivid-purple`, `electric-purple`, `soft-blue-violet`, `black` |

The designer's AI, EPS, and PDF masters stay on the drive.

---

## 2. Color palette (page 6)

Six colors. Each is printed with its name, HEX, and RGB. **Measured:** pixel sampling of the base blocks matches every printed HEX exactly.

| Name (spec) | HEX (spec) | RGB (spec) | Text on the card |
|---|---|---|---|
| **Deep Blue** | `#0C013B` | 12, 1, 59 | White |
| **Pearl White** | `#FBFEF7` | 251, 254, 247 | Dark |
| **Soft Blue Violet** | `#5C70FF` | 92, 112, 255 | White |
| **Electric Purple** | `#B675F5` | 182, 117, 245 | White |
| **Yellow Green** | `#E0FE53` | 224, 254, 83 | Dark |
| **Vivid Purple** | `#4500F9` | 69, 0, 249 | White |

**Tints (spec plus measurement).** Each card ends in four lighter steps. The PDF prints no values for them. Pixel sampling shows each step is the base color at **80%, 60%, 40%, and 20% opacity** over the page background (`#DCDCE6`), with a fit error under 1 RGB unit. `colors_and_type.css` encodes them as `--<color>-80`, `-60`, `-40`, and `-20` opacity tokens.

Measured band colors on the PDF page (over `#DCDCE6`):

| Color | 80% | 60% | 40% | 20% |
|---|---|---|---|---|
| Deep Blue | `#352C5D` | `#5F587F` | `#8884A1` | `#B2B0C3` |
| Soft Blue Violet | `#7585FA` | `#8F9BF5` | `#A8B0F0` | `#C2C6EB` |
| Electric Purple | `#BD89F2` | `#C59EEF` | `#CCB2EC` | `#D4C7E9` |
| Yellow Green | `#DFF770` | `#DEF08D` | `#DDE9AB` | `#DCE2C8` |
| Vivid Purple | `#632CF5` | `#8158F1` | `#9F84ED` | `#BDB0E9` |

Pearl White's steps are slightly darker than its base, because the base is lighter than the page.

**Not specified:** CMYK, Pantone, color roles, and contrast pairings. Roles are in `design.md` → Color.

---

## 3. Typefaces (page 5)

| | |
|---|---|
| Display and headings | **Poppins**: Regular, Semi-Bold, Bold (spec) |
| Body copy | **Outfit** (spec; "Outfit Font", regular weight shown) |
| Other typefaces | None named |

**Type hierarchy (spec).** Sizes are in points, as printed. Samples are shown on a dark gradient.

| Role | Size | Typeface and style | Sample color on the page |
|---|---|---|---|
| Headings | 60 pt | Poppins Bold, upright | White |
| Sub-headings | 35 pt | Poppins Semi-Bold, upright | Yellow Green |
| Highlight text | 24 pt | Poppins Bold, ALL CAPS, wide tracking | White |
| Important lines | 18 pt | Poppins Semi-Bold, *italic* | Yellow Green |
| Eyebrow text | 14 pt | Poppins Semi-Bold, *italic*, ALL CAPS, tracked | Yellow Green |
| Body copy | 14 pt | Outfit Regular | White |

Note (observed): the eyebrow sample looks lighter than the "Semi-Bold" label suggests.

**Not specified:** line height, letter-spacing values, web sizes, and font fallbacks. The web scale is in `colors_and_type.css`.

---

## 4. Visual language (observed in the mockups)

These patterns repeat across pages 1, 2, 4, 5, 7, and 8. They show intent, not rules.

- **Light surface.** Page 1 uses an off-white, textured paper card with a soft lavender wash in one corner.
- **Gradients.** Three families repeat:
  - Electric Purple (top left) → Vivid Purple → Deep Blue (bottom right), on pages 2 and 5.
  - Soft Blue Violet → Electric Purple, on page 4 and in the symbol itself.
  - Deep Blue → Vivid Purple, on page 8.
- **Yellow Green is the accent.** Pages 7 and 8 use it for:
  - the second line of a headline ("Focus On What / **Matters Most.**")
  - pill CTA buttons with Deep Blue text ("GET STARTED ↗")
  - a circular CTA holding a dark diagonal arrow
  - small social-proof lines and icons

  It always sits on dark or gradient surfaces.
- **Headline color.** Headlines are white on gradients, and Deep Blue on the lighter Soft Blue Violet → Electric Purple gradient (page 8, center story).
- **Headline casing.** The mockups use Title Case ("Focus On What Matters Most", "Delegate Your Inbox To Your EA!").
- **Photography.** People (professionals, an eye close-up) graded or overlaid with brand purple. One story layers the headline behind the subject's head for depth.
- **Patterns.**
  - a large, faint logo-symbol watermark
  - thin white lines on gradients. These are the designer's "Logo Watermark Outlines" asset: concentric outlines of the symbol, used oversized and cropped.
  - on page 1, a strip of six overlapping, rounded color tabs
- **Shapes.** Cards and frames have generous rounded corners throughout.

**Mockup copy is not approved copy.** The mockups say "10-20hrs of your life back every week, guaranteed" and "Trusted by over 3,000 users". Per the PDF's own disclaimer, these are presentation-only. Do not reuse a claim without current claim review.

---

## 5. What the PDF does not cover

The PDF covers the logo, color, and type. It sets no rules for:

- Web or product UI: buttons, forms, states, grid, spacing, radii, shadows, motion, light and dark modes, iconography, or data visualization
- Minimum logo size, logo misuse, CMYK, or Pantone
- Voice and copy

`design.md` fills these gaps. It labels each one as an **Atlas convention**, so an agent can tell a brand rule from a house choice. If the designer publishes more guidance (a web kit, for example), add it here first.

---

## 6. Designer brand assets (in this repo)

From the shared drive's Marketing › GRAPHIC DESIGN › AA New Logo folder (`AA Brand Assets_img` and the `Backgrounds` folder next to the current PDF):

| Asset | File | Use |
|---|---|---|
| Logo Watermark Outlines | `assets/patterns/logo-watermark-outlines.png` (2934 px), `-web.png` (1200 px) | The thin-line texture on gradients (page 8): concentric outlines of the symbol, about 32% opaque grey lines. Use it oversized and cropped. |
| Backgrounds, dark and light | `assets/backgrounds/background-{dark,light}-{1920x1080,1080x1350,1080x1920}.jpg` | Slide (16:9), feed (4:5), and story (9:16) backgrounds. Vertical gradient with a large symbol watermark bleeding off the right edge. Keep copy on the open left and top area. |
| Arrow | `assets/elements/arrow-up-right-yellow-green.png` (96 px) | The Yellow Green diagonal CTA arrow. On the web, use an SVG arrow of the same shape. |
| Slide elements | `assets/elements/orb-soft.png`, `orb-vivid.png`, `cog-glass.png` | Grainy gradient orbs and a frosted glass cog for decks and social. Not for web pages or product UI. |

The `Atlas Assistant_Brand Guidelines` Google Doc in the same folder is an unfinished draft (a few lines). It does not change anything above.
