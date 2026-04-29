/* Atlas Marketing — FAQ (controlled accordion, single-open) */
const FAQItem = ({ q, a, open, onToggle }) => (
  <div className={`faq-item ${open ? "open" : ""}`} onClick={onToggle}>
    <div className="faq-q">
      <span>{q}</span>
      <span className="faq-toggle">+</span>
    </div>
    <div className="faq-a">{a}</div>
  </div>
);

const FAQ = () => {
  const items = [
    { q: "How does the matching process work?", a: "We start with a 30-minute discovery call to understand your role, calendar shape, and the highest-leverage tasks an EA could absorb. From there we shortlist three candidates from our pre-vetted bench, each interviewed and trained against your profile. Most clients are matched within 14 days." },
    { q: "What if my first match doesn't work out?", a: "Every placement comes with a 90-day match guarantee. If something isn't clicking, we re-match — no extra cost, no questions. Our first-match success rate sits at 90%, but the guarantee is there because matching is hard." },
    { q: "What is an AI Operator?", a: "An AI Operator is an Atlas EA who has been trained on the modern AI tool stack — large language models, agent orchestration, and workflow automation. They use AI to extend their reach so a single EA can handle the work of a small team." },
    { q: "Is my data secure?", a: "Yes. We're SOC 2 compliant, run isolated workspaces per client, and give every EA a tooling environment that keeps your data inside your tenant. AI tools are configured with zero-data-retention agreements." },
    { q: "Can I start with one service and add more later?", a: "Yes — most clients start on Core EA and graduate to Operator once they see what they want to delegate next. You can change plans monthly." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="kit-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FAQ</span>
          <h2><span className="grad">Questions, answered</span></h2>
        </div>
        <div className="faq">
          {items.map((it, i) => (
            <FAQItem key={it.q} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

window.FAQ = FAQ;
window.FAQItem = FAQItem;
