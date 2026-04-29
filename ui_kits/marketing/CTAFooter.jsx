/* Atlas Marketing — End-of-page CTA block + Footer */
const CTABlock = ({ onPrimary = () => {} }) => (
  <section className="kit-section" style={{ paddingTop: 0 }}>
    <div className="container">
      <div className="cta-block">
        <h2><span className="grad">Reclaim your week</span></h2>
        <p>30 minutes with our team is enough to map where your operational drag lives — and what an Atlas EA could absorb on day one.</p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary btn-lg" onClick={(e) => { e.preventDefault(); onPrimary(); }}>Book a discovery call</a>
          <a href="#services" className="btn btn-outline btn-lg" onClick={(e) => e.preventDefault()}>See services</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Executive support, reimagined for the AI era. Atlas Assistants pairs founders and execs with world-class EAs and AI operators.</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#" onClick={(e) => e.preventDefault()}>EA Staffing</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>AI Operators</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Managed Services</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Executive Brief</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#" onClick={(e) => e.preventDefault()}>About</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Careers</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Community</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Blog</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Playbooks</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Security</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Status</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Atlas Assistants. All rights reserved.</div>
        <div>Made for operators who want their week back.</div>
      </div>
    </div>
  </footer>
);

window.CTABlock = CTABlock;
window.Footer = Footer;
