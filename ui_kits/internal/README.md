# Atlas Internal Artifact Kit

Rules for internal surfaces: documents, reports, dashboards, training material, and HTML artifacts agents generate for the team. Internal work is brand work, but it optimizes for reading and deciding, not pitching.

## Theme

**Light by default** for every internal artifact: docs, reports, exported PDFs, dashboards, and scorecards (`design.md` > Light and dark). Use the dark theme only for an all-hands or pitch-adjacent deck, and build that with `../deck/`.

## Rules

- **Tokens always.** Load `colors_and_type.css`; use Poppins for headings and Outfit for body, the 4px grid, and the radius scale. Do not hard-code colors.
- **Surfaces:** Pearl White page (`--bg`), white cards (`--surface`), Deep Blue text (`--fg-1`), Vivid Purple for links and the one primary action (`--accent-text`, `--accent`).
- **Yellow Green** appears only as a fill behind Deep Blue text (a badge or a highlighter mark). Never as text, icons, or chart lines on light.
- **Charts:** one series in Vivid Purple; more series step through the 80/60/40/20 tints of Vivid Purple, then Soft Blue Violet and Electric Purple tints. Highlight the series that carries the takeaway in full Vivid Purple. Never use a gradient as a data scale. Numbers in tables use `font-variant-numeric: tabular-nums`.
- **No decoration:** no gradient objects, watermark outlines, or symbol watermarks in working documents. A small gradient symbol (20 to 24px) in the header is enough.
- **Header pattern:** symbol (`atlas-mark.png`), document title, date. No hero sections.
- **Voice:** declarative and precise, per `design.md` > CONTENT FUNDAMENTALS. A report ends with the decision it needs, or says none is needed.
