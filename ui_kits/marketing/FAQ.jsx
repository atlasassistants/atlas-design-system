/* Atlas Marketing: FAQ. Single-open accordion. Answers marked
   "placeholder" need approved copy before use. */
const FAQItem = ({ q, a, open, onToggle, id }) => (
  <div className={`faq-item ${open ? "open" : ""}`}>
    <button className="faq-q" aria-expanded={open} aria-controls={id} onClick={onToggle}>
      <span>{q}</span><Icon name="plus" />
    </button>
    {open && <p className="faq-a" id={id}>{a}</p>}
  </div>
);

const FAQ = () => {
  const items = [
    { q: "What is an Exec Ops Partner?", a: "The Exec Ops Partner is the role Atlas places with you: exceptional, AI-capable talent that Atlas recruits and develops." },
    { q: "What does a talent partnership mean?", a: "Atlas stays involved. We keep developing your partner, and we equip you to work with them." },
    { q: "Who is Atlas for?", a: "Placeholder answer: describe who Atlas serves in current, approved language." },
    { q: "How do we get started?", a: "Book a call. We start by learning how you work today." },
    { q: "What does it cost?", a: "Placeholder answer: link to current pricing once it is approved." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="kit-section">
      <div className="container faq-wrap">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <h2>Questions</h2>
          <p>Short answers. Book a call for the rest.</p>
        </div>
        <div>
          {items.map((it, i) => (
            <FAQItem key={it.q} id={`faq-${i}`} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};
window.FAQ = FAQ;
window.FAQItem = FAQItem;
