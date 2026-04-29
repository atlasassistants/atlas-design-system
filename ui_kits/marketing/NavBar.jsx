/* Atlas Marketing — Top nav (sticky pill nav with brand + links + CTA) */
const NavBar = ({ active = "services", onNav = () => {} }) => {
  const links = [
    { id: "services", label: "Services" },
    { id: "how", label: "How it works" },
    { id: "pricing", label: "Pricing" },
    { id: "stories", label: "Stories" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Brand />
        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              className={`nav-link ${active === l.id ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); onNav(l.id); }}
              href={`#${l.id}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost" onClick={(e) => e.preventDefault()}>Login</a>
          <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); onNav("cta"); }}>Book a call</a>
        </div>
      </div>
    </header>
  );
};
window.NavBar = NavBar;
