/* Atlas Marketing: proof. PLACEHOLDERS ONLY.
   Every stat and quote needs a current, checked source and Colin's approval
   before it ships (design.md > CONTENT FUNDAMENTALS). Do not fill these with
   invented numbers, names, or quotes. */
const Stat = ({ value = "Stat", label }) => (
  <div className="stat">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const Proof = () => (
  <section className="kit-section">
    <div className="container">
      <div className="stats">
        <Stat label="Stat placeholder: add a sourced proof point." />
        <Stat label="Stat placeholder: add a sourced proof point." />
        <Stat label="Stat placeholder: add a sourced proof point." />
      </div>
      <figure className="quote">
        <Icon name="quote" />
        <div>
          <blockquote>Testimonial placeholder. Add an approved, attributed client quote here, three lines at most.</blockquote>
          <figcaption><span className="avatar" style={{ "--size": "44px" }}>CN</span><span><b>Client name</b>Role, company (placeholder)</span></figcaption>
        </div>
      </figure>
    </div>
  </section>
);
window.Stat = Stat;
window.Proof = Proof;
