/* Atlas Marketing — Services grid (5 cards, lavender chip icons) */
const SERVICE_ICONS = {
  ea: <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>,
  ai: <svg viewBox="0 0 24 24"><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/></svg>,
  managed: <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  brief: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  community: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>,
};

const ServiceCard = ({ icon, title, desc, span = 1 }) => (
  <div className={`service ${span === 2 ? "span-2" : ""}`}>
    <div className="service-icon">{SERVICE_ICONS[icon]}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const Services = () => (
  <section id="services" className="kit-section">
    <div className="container">
      <div className="section-header">
        <span className="section-badge">Services</span>
        <h2><span className="grad">A complete support stack</span><br />for serious operators</h2>
        <p className="section-desc">From a dedicated EA to AI managed services — choose the layer of leverage that matches where you are.</p>
      </div>
      <div className="services">
        <ServiceCard span={2} icon="ea" title="World-class EA staffing" desc="Hand-matched executive assistants who already operate in the top 5%. We screen, interview, train, and back every match with a 90-day guarantee. The role is theirs, the support is yours." />
        <ServiceCard icon="ai" title="AI Operators" desc="EAs upskilled into AI Operators — extending their reach with the same models you'd hire a team for." />
        <ServiceCard icon="managed" title="Managed AI Services" desc="We run the workflows. You see the results. Recurring operational work handled by an AI-powered team." />
        <ServiceCard icon="brief" title="Executive Brief" desc="A daily brief delivered to your inbox at 6am — priorities, calendar, decisions waiting." />
        <ServiceCard icon="community" title="Atlas Community" desc="A private network of operators and executives. Share playbooks, hire from inside, learn what works." />
      </div>
    </div>
  </section>
);

window.Services = Services;
window.ServiceCard = ServiceCard;
