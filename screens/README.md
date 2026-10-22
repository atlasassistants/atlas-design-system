# Screenshots

Rendered captures of the preview pages and the surface kits, for quick visual review. Regenerate them whenever a preview page, a kit, or `colors_and_type.css` changes.

```
screens/
├── preview/   One full-page capture per page in preview/ (1440px wide, 1x)
└── kits/      Captures of each surface kit
```

Captures of the retired 2026 cosmic system live in `_reference/legacy-cosmic-2026/screens/`.

## `preview/`

| Group | Files |
|---|---|
| Index and brand | `index`, `brand-board`, `logo`, `patterns`, `light-dark` |
| Foundations | `colors`, `gradients`, `type`, `spacing`, `radii`, `elevation` |
| Components | `buttons`, `badges`, `cards`, `inputs`, `nav`, `avatars`, `icons` |

## `kits/`

| File | Source | Size |
|---|---|---|
| `marketing-desktop-1440.png` | `ui_kits/marketing/index.html` | 1440 wide, full page |
| `marketing-mobile-390.png` | `ui_kits/marketing/index.html` | 390 wide, full page |
| `social.png` | `ui_kits/social/templates.html` | 1440 wide, boards at 40% |
| `deck.png` | `ui_kits/deck/master.html` | 1440 wide, slides at 31% |
| `email.png` | `ui_kits/email/template.html` | 760 wide (logo URLs pointed at `assets/` for the capture) |

## How to regenerate

Captures use headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --hide-scrollbars --allow-file-access-from-files --window-size=1440,<height> \
  --screenshot=<out.png> file://<absolute-path-to-page>
```

- **Height:** measure the page's full scroll height first (any browser automation works), then pass it as `<height>`.
- **Marketing kit:** it loads `.jsx` files through Babel, so add `--allow-file-access-from-files` and `--virtual-time-budget=5000` to let React render before the capture.
- **390px mobile:** headless Chrome on macOS will not lay out narrower than 500px. Render the page inside a 390px-wide `<iframe>` in a wrapper HTML file, capture the wrapper, then crop to 390px.
- **Email:** replace `LOGO_URL` with `file://<repo>/assets` in a scratch copy before capturing.
