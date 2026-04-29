/* Atlas Marketing — Proof bar (4 stats) + Testimonials (3 cards) */
const Stats = () => (
  <section className="kit-section" style={{ paddingTop: 0 }}>
    <div className="container">
      <div className="stats">
        {[
          { v: "90%",  l: "First-match success rate" },
          { v: "14d",  l: "Average time to placement" },
          { v: "12hr", l: "Reclaimed per executive, weekly" },
          { v: "98%",  l: "Client retention after 12 months" },
        ].map((s) => (
          <div key={s.l}>
            <div className="stat-value">{s.v}</div>
            <div className="stat-label">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Quote = ({ text, initials, name, role }) => (
  <article className="quote">
    <p className="quote-text">"{text}"</p>
    <div className="quote-author">
      <div className="quote-avatar">{initials}</div>
      <div>
        <div className="quote-name">{name}</div>
        <div className="quote-role">{role}</div>
      </div>
    </div>
  </article>
);

const Testimonials = () => (
  <section id="stories" className="kit-section">
    <div className="container">
      <div className="section-header">
        <span className="section-badge">Stories</span>
        <h2><span className="grad">Operators who got their time back</span></h2>
        <p className="section-desc">A few of the founders, partners, and CEOs running their week through Atlas.</p>
      </div>
      <div className="testimonials">
        <Quote initials="DK" name="Daniel K." role="CEO, Series B SaaS"
          text="I stopped trying to hire an EA myself two years ago. Atlas had Maya in my calendar in 11 days. She runs my week now." />
        <Quote initials="PA" name="Priya A." role="Partner, Helix Capital"
          text="The AI Operator layer is what sold me. I have an EA who can ship a research brief overnight without me writing a Loom about it." />
        <Quote initials="RM" name="Reuben M." role="Founder, Brightside"
          text="We tried three other agencies. Atlas is the only one that actually understood the role before sending candidates." />
      </div>
    </div>
  </section>
);

window.Stats = Stats;
window.Quote = Quote;
window.Testimonials = Testimonials;
