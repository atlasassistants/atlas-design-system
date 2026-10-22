/* Atlas Marketing: top nav. Light bar, lockup image left, links centered,
   one primary action right. Below 900px the links move into a sheet. */
const NavBar = ({ active = "approach", onNav = () => {}, onBook = () => {} }) => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: "approach", label: "How it works" },
    { id: "role", label: "The role" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
  ];
  const go = (e, id) => { e.preventDefault(); setOpen(false); onNav(id); };
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Brand />
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${active === l.id ? "active" : ""}`} onClick={(e) => go(e, l.id)}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#" className="btn btn-primary btn-sm" onClick={(e) => { e.preventDefault(); onBook(); }}>Book a call</a>
          <button className="nav-menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>
      <div className={`container nav-sheet ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="nav-link" onClick={(e) => go(e, l.id)}>{l.label}</a>
        ))}
      </div>
    </header>
  );
};
window.NavBar = NavBar;
