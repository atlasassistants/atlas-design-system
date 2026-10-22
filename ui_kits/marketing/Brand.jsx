/* Atlas Marketing: brand lockup + shared icon set.
   The logo is an image file, always. Two forms:
   - variant="lockup" (default): symbol + wordmark artwork.
   - variant="mark": the symbol alone, for small or square spots.
   theme="light" (default) uses the Deep Blue wordmark file; theme="dark"
   uses the white wordmark file. Never typeset "atlas" next to the mark. */
const Brand = ({ height = 32, variant = "lockup", theme = "light" }) => {
  const src =
    variant === "mark"
      ? theme === "dark" ? "../../assets/atlas-mark-white.png" : "../../assets/atlas-mark.png"
      : theme === "dark" ? "../../assets/atlas-logo-white.png" : "../../assets/atlas-logo-dark.png";
  return (
    <a href="#" className="nav-brand" aria-label="Atlas Assistants home" onClick={(e) => e.preventDefault()}>
      <img src={src} alt="Atlas Assistants" className="nav-logo" style={{ height, width: "auto" }} />
    </a>
  );
};

/* Lucide icon paths (ISC license), inlined so the kit needs no icon CDN. */
const ICON_PATHS = {
  arrowUpRight: <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  plus: <><path d="M5 12h14" /><path d="M12 5v14" /></>,
  menu: <><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>,
  x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  layers: <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></>,
  repeat: <><path d="m17 2 4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></>,
  image: <><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></>,
  quote: <><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /></>,
};
const Icon = ({ name, className = "i" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{ICON_PATHS[name]}</svg>
);

window.Brand = Brand;
window.Icon = Icon;
