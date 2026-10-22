/* Atlas Marketing: pricing. PLACEHOLDERS ONLY: plan names, prices, and
   inclusions must come from the current approved offer. The featured plan
   uses the vivid gradient (design.md: CTA bands and the featured pricing card). */
const Plan = ({ name, desc, items, featured = false, onCta = () => {} }) => {
  const card = (
  <div className={`plan ${featured ? "featured g-object g-vivid" : ""}`} data-theme={featured ? "dark" : undefined}>
    <div className="plan-top">
      <span className="plan-name">{name}</span>
      {featured && <span className="badge badge-highlight">Featured</span>}
    </div>
    <div className="plan-price">Price<small>Price placeholder</small></div>
    <p className="plan-desc">{desc}</p>
    <ul>{items.map((it, i) => <li key={i}><Icon name="check" />{it}</li>)}</ul>
    <a href="#" className={`btn ${featured ? "btn-primary" : "btn-secondary"}`} onClick={(e) => { e.preventDefault(); onCta(); }}>Book a call</a>
  </div>
  );
  /* Elevation goes on a light-scoped wrapper: inside data-theme="dark", --shadow-4 is a black drop. */
  return featured ? <div className="plan-lift">{card}</div> : card;
};

const Pricing = ({ onBook = () => {} }) => {
  const items = ["Inclusion placeholder", "Inclusion placeholder", "Inclusion placeholder"];
  return (
    <section id="pricing" className="kit-section">
      <div className="container">
        <div className="section-head">
          <span className="t-eyebrow">Pricing</span>
          <h2>Plans</h2>
          <p>Plan names, prices, and inclusions here are placeholders. Use the current approved offer.</p>
        </div>
        <div className="plans">
          <Plan name="Plan name" desc="One line on who this plan is for." items={items} onCta={onBook} />
          <Plan featured name="Plan name" desc="One line on who this plan is for." items={[...items, "Inclusion placeholder"]} onCta={onBook} />
          <Plan name="Plan name" desc="One line on who this plan is for." items={items} onCta={onBook} />
        </div>
      </div>
    </section>
  );
};
window.Plan = Plan;
window.Pricing = Pricing;
