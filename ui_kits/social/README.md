# Atlas Social Kit

Fixed-size HTML artboards for social posts and link previews. Open `templates.html` in a browser; boards preview at 40%. Add `?full` to the URL to render each board at export size, then screenshot the board at 1x.

## Boards in `templates.html`

| Board | Size | Treatment |
|---|---|---|
| `#statement` | 1080×1080 | Deep gradient, watermark outlines, two-line statement, circular arrow |
| `#north-star` | 1080×1080 | Vivid gradient, large symbol watermark, eyebrow, circular arrow |
| `#carousel-cover` | 1080×1350 | Deep gradient, hook headline, one setup line, circular arrow |
| `#carousel-slide` | 1080×1350 | Brand gradient with Deep Blue type, Deep Blue circle with a Yellow Green arrow |
| `#story` | 1080×1920 | Deep gradient, pill CTA; 250px kept clear at top and bottom for platform UI |
| `#og` | 1200×630 | Flat Deep Blue with the white lockup and one gradient object |

## Rules

- **Social sits on gradients or Deep Blue** (`design.md` > Surfaces). Accents are Yellow Green: the accent phrase, the eyebrow, the pill, and the circular arrow.
- **Keep small text and Yellow Green off the Electric Purple corner** of the deep gradient (Yellow Green is 2.7:1 there). Place copy over the Vivid Purple and Deep Blue stretch, as the boards do.
- **On the lighter brand gradient** (Soft Blue Violet to Electric Purple), type is Deep Blue, as on guidelines page 8, and the circular arrow flips to a Deep Blue circle with a Yellow Green arrow.
- **Logo:** on gradients use the white symbol (`atlas-mark-white.png`). Use the white lockup (`atlas-logo-white.png`) only on flat Deep Blue, as on `#og`. Never type "atlas" next to the symbol.
- **One accent phrase per headline.** Sentence case by default; Title Case is allowed for short social and ad headlines (`design.md` → Casing).
- **Watermark outlines** come from `assets/patterns/logo-watermark-outlines-web.png` (the designer's file), oversized and cropped.
- **Copy:** the boards use lines `design.md` lists as still usable ("You don't have a time problem. You have a leverage problem.", "Work stops when you don't respond.", "Operate in your zone of genius.") plus neutral sample copy. Never reuse claims from the guideline mockups (hours saved, user counts). Every number on a board needs a current, checked source.
- No hashtag walls or emoji in the graphic.

## Export

1. Open `templates.html?full`.
2. Screenshot each board element at 1x.
3. Name exports `atlas-social-YYYY-MM-DD-<slug>.png`.
