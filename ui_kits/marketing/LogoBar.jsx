/* Atlas Marketing — Logo bar (text logos, "Trusted by operators at") */
const LogoBar = ({ items = ["Northwind", "Lattice", "Helix Capital", "Foundry", "Ascent", "Brightside"] }) => (
  <div className="container">
    <div className="logos">
      <div className="logos-label">Trusted by operators at</div>
      <div className="logos-row">
        {items.map((l) => <div key={l} className="logo-item">{l}</div>)}
      </div>
    </div>
  </div>
);
window.LogoBar = LogoBar;
