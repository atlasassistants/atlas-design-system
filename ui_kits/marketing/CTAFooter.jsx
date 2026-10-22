/* Atlas Marketing: closing CTA band (vivid gradient, the screen's one
   gradient band) and a light footer. */
const CTABlock = ({ onPrimary = () => {} }) => (
  <section className="kit-section">
    <div className="container">
      <div className="cta-band g-object g-vivid contour" data-theme="dark">
        <div>
          <h2>Start with a <span className="accent">conversation.</span></h2>
          <p>Book a call to see whether an Exec Ops Partner fits how you work.</p>
        </div>
        <a href="#" className="btn btn-primary btn-lg" onClick={(e) => { e.preventDefault(); onPrimary(); }}>Book a call <Icon name="arrowUpRight" /></a>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const cols = [
    { h: "Company", links: ["About", "Careers", "Contact"] },
    { h: "Resources", links: ["Guides", "Blog"] },
    { h: "Legal", links: ["Privacy", "Terms"] },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>Atlas Assistants helps people operate in their zone of genius.</p>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.links.map((l) => <li key={l}><a href="#" onClick={(e) => e.preventDefault()}>{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">© 2026 Atlas Assistants. All rights reserved.</div>
      </div>
    </footer>
  );
};
window.CTABlock = CTABlock;
window.Footer = Footer;
