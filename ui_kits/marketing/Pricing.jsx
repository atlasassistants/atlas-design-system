/* Atlas Marketing — Pricing (3 plans, middle featured) */
const PricingPlan = ({ name, price, period, desc, features, cta, ctaStyle = "outline", featured = false, onCta = () => {} }) => (
  <div className={`plan ${featured ? "featured" : ""}`}>
    {featured && <div className="plan-tag">Most popular</div>}
    <div className="plan-name">{name}</div>
    <div className="plan-price">
      <span className="plan-price-value">{price}</span>
      {period && <span className="plan-price-period">{period}</span>}
    </div>
    <p className="plan-desc">{desc}</p>
    <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>
    <a href="#" className={`btn btn-${ctaStyle} btn-lg`} onClick={(e) => { e.preventDefault(); onCta(); }}>{cta}</a>
  </div>
);

const Pricing = ({ onBook = () => {} }) => (
  <section id="pricing" className="kit-section">
    <div className="container">
      <div className="section-header">
        <span className="section-badge">Pricing</span>
        <h2><span className="grad">Pick the layer of leverage</span></h2>
        <p className="section-desc">Start with a dedicated EA. Upgrade when you're ready to delegate the rest.</p>
      </div>
      <div className="pricing">
        <PricingPlan
          name="Core EA" price="$3,200" period="/ month"
          desc="A dedicated executive assistant matched to how you actually work."
          features={["40 hrs/week dedicated EA", "14-day placement", "90-day match guarantee", "Calendar, inbox, travel, ops", "US/EMEA timezone coverage"]}
          cta="Start with Core" ctaStyle="outline" onCta={onBook} />
        <PricingPlan featured
          name="Operator" price="$5,400" period="/ month"
          desc="EA + AI Operator stack. Same person. 10x the reach."
          features={["Everything in Core", "AI Operator certification", "Connected to your full toolstack", "Daily executive brief", "Quarterly ops review", "Atlas Community access"]}
          cta="Book a call" ctaStyle="primary" onCta={onBook} />
        <PricingPlan
          name="Managed" price="Custom"
          desc="A pod that runs entire functions for you — research, ops, comms."
          features={["Operator-led pod", "Defined SLAs and runbooks", "Workflow audits + design", "Direct ops lead", "Dedicated CSM"]}
          cta="Talk to sales" ctaStyle="outline" onCta={onBook} />
      </div>
    </div>
  </section>
);

window.PricingPlan = PricingPlan;
window.Pricing = Pricing;
