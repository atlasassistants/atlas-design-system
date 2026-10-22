/* Atlas Marketing: hero. Light, left-aligned copy with one gradient hero
   object on the right (the screen's single dark object). The object is a
   placeholder for a graded photo of a real person at work (design.md >
   Photography); until one exists it carries the watermark outlines and the
   white symbol watermark. */
const Hero = ({ onPrimary = () => {}, onSecondary = () => {} }) => (
  <section className="hero">
    <div className="container hero-grid">
      <div>
        <span className="t-eyebrow">A talent partnership</span>
        <h1>Operate in your <span className="accent nowrap">zone of genius.</span></h1>
        <p className="hero-sub">Atlas recruits and develops exceptional <span className="nowrap">AI-capable</span> talent, and equips you to work with them.</p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary btn-lg" onClick={(e) => { e.preventDefault(); onPrimary(); }}>Book a call <Icon name="arrowUpRight" /></a>
          <a href="#approach" className="btn btn-link" onClick={(e) => { e.preventDefault(); onSecondary(); }}>How it works <Icon name="arrowUpRight" /></a>
        </div>
      </div>
      <div className="hero-lift">
      <div className="hero-object g-object g-deep contour" data-theme="dark">
        <img className="watermark" src="../../assets/atlas-mark-white.png" alt="" />
        <span className="t-eyebrow">The Exec Ops Partner</span>
        <div className="row">
          <h2>Your partner on the operating side of the business.</h2>
          <a href="#role" className="btn btn-arrow" aria-label="Meet the role" onClick={(e) => { e.preventDefault(); onSecondary("role"); }}><Icon name="arrowUpRight" /></a>
        </div>
      </div>
      </div>
    </div>
  </section>
);
window.Hero = Hero;
