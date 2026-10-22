/* Atlas Marketing: client logo row. PLACEHOLDER SLOTS ONLY.
   Atlas has no approved client logo set. Replace each slot with an approved
   client logo file (one color, works on light) or delete the row. Never ship
   invented brand names here. */
const LogoBar = ({ count = 6 }) => (
  <div className="container logos">
    <div className="logos-label">Client logos (placeholder: add approved logos or remove this row)</div>
    <div className="logos-row">
      {Array.from({ length: count }).map((_, i) => <div key={i} className="logo-slot">Client logo</div>)}
    </div>
  </div>
);
window.LogoBar = LogoBar;
