/* Atlas Marketing — Brand lockup
   Renders the OFFICIAL logo as a single image file. Two approved forms:
   - variant="lockup" (default): the full logo — mark + "atlas ASSISTANTS"
     wordmark. Use in navs, headers, footers, title slides.
   - variant="mark": the "A"-in-ring mark alone. Small/square spots only
     (favicon, avatar, watermark, page corner).
   NEVER typeset the wordmark — no <span>atlas</span> next to the mark.
   The wordmark is part of the logo artwork, not UI text. */
const Brand = ({ height = 30, variant = "lockup", theme = "dark" }) => {
  const src =
    variant === "mark"
      ? theme === "dark" ? "../../assets/atlas-mark-white.png" : "../../assets/atlas-mark.png"
      : theme === "dark" ? "../../assets/atlas-logo-white.png" : "../../assets/atlas-logo-dark.png";
  return (
    <a href="#" className="nav-brand" onClick={(e) => e.preventDefault()}>
      <img src={src} alt="Atlas Assistants" className="nav-logo" style={{ height, width: "auto" }} />
    </a>
  );
};

window.Brand = Brand;
