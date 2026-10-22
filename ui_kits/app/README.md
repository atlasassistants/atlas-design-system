# Atlas App-Surface Guidance

Rules for product UI: the Atlas App, client dashboards, settings, and auth flows. The product should feel calm and in control.

## Design engine

Product UI is dense, stateful work. Drive layout with a product-UI skill (for example `ui-ux-pro-max`) and apply this brand-lock on top: tokens, Poppins and Outfit, the radius scale, the signature easing, and the voice rules.

## Rules

- **Theme:** the product team owns the Atlas App's design and plans light and dark modes (Colin, 2026-10-22). Both modes use these tokens: `:root` is light, `data-theme="dark"` is dark. On dark, Yellow Green with Deep Blue text marks action.
- **Vivid Purple means action.** `--accent` marks the interactive layer only: primary buttons, focus rings, active states, the recommended option. If everything is purple, nothing is.
- **Yellow Green on light is a fill only:** "New" or "Included" badges with Deep Blue text. Never text, icons, or thin lines.
- **Gradients** appear only on the logo symbol, avatar fills (`--gradient-brand` with Deep Blue initials), and, rarely, an empty-state illustration. Never on buttons, never as chart color, never behind working content.
- **No brand texture on work screens:** no watermark outlines, symbol watermarks, or corner washes on task lists, tables, or forms.
- **Motion:** `cubic-bezier(0.6, 0.6, 0, 1)`; 150ms micro, 300ms state, 450ms surface. Motion shows a state change. Honor `prefers-reduced-motion`.
- **States are the product:** skeleton loading that matches the layout, composed empty states that say how the screen will fill, inline errors with the next step. The palette has no red: errors use a 2px `--fg-1` border, an alert icon, and a plain sentence.
- **Density:** 4px grid; cards per `design.md`; tables use hairline rows (`--border-soft`), Outfit, tabular numbers.
- **Icons:** inline Lucide-style line icons, 1.75px stroke, in the 44px icon box (`preview/icons.html`).
- **Voice in UI:** buttons are verbs ("Approve", "Send", "Book a call"), never "OK" or "Submit". System messages state facts calmly.
