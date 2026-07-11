# Atlas Internal Artifact Kit

Rules for internal surfaces: documents, reports, dashboards, training material, HTML artifacts agents generate for the team. Internal work is brand work — the team lives in the brand before clients do — but internal surfaces optimize for *reading and deciding*, not pitching.

## Theme choice per artifact

| Artifact | Theme | Why |
|---|---|---|
| Written docs, reports, exported PDFs | **Light** (`design.md` → Light mode tokens) | The eye lives there >5 minutes |
| Dashboards, scorecards, status boards | **Dark** | Glanceable, matches the workspace world |
| Presentations / all-hands decks | **Dark** (use `../deck/`) | Pitch-adjacent surfaces stay cosmic |
| One page, one theme | — | Never mix per `design.md` theme-lock |

## Rules

- **Tokens always.** Even a quick internal HTML artifact uses the palette (`colors_and_type.css`), Inter, the 4px grid, and the radius scale. "It's just internal" is how brand drift starts.
- **Light surfaces:** bg `#fafaff`, cards `#ffffff`, text `#050314`, accent text `#5046e4` (never `#ba9cff` body text on white). No starfield, no orbital decoration — light mode is clean, not cosmic.
- **Dark dashboards:** full token map, card anatomy from `design.md`, atmosphere dialed low (dashboards inform; they don't perform). Numbers in tables get `font-variant-numeric: tabular-nums`.
- **Charts and data visuals:** sequential scales built from the indigo→lavender family; lavender marks the highlighted series only. Never use the brand gradient as a chart scale — it encodes nothing.
- **Header pattern:** mark (20–24px) + document title + date. No hero sections in internal docs.
- **Voice carries over:** declarative, precise, no hype — an internal report written in Atlas voice is the training set for the brand ("the exhaust of your judgment becomes the training").
- **Decided-shaped documents:** every internal report ends with the decision it's asking for (or states that none is needed). That's the Five Verbs applied to our own artifacts — work arrives at humans decided-shaped.
