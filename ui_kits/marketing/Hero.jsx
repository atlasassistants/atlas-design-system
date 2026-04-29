/* Atlas Marketing — Hero with orbital backdrop + workspace mock app frame.
   The app frame shows a fake "Today's brief" view with togglable tasks. */
const HeroAppFrame = () => {
  const [tasks, setTasks] = React.useState([
    { id: 1, text: "Approve weekly investor update", tag: "comms", done: true },
    { id: 2, text: "Confirm SF travel for board offsite (May 14\u201316)", tag: "travel", done: false },
    { id: 3, text: "Review draft of Q2 OKRs before exec sync", tag: "strategy", done: false },
    { id: 4, text: "15 min — sign off on new brand assets", tag: "brand", done: false },
    { id: 5, text: "Reply to Sarah re: portfolio company intro", tag: "network", done: false },
  ]);
  const [active, setActive] = React.useState("Today's brief");
  const sideItems = ["Today's brief", "Inbox triage", "Calendar", "Travel"];
  const projects = ["Q2 board prep", "Investor update", "Hiring loop"];

  const toggle = (id) => setTasks((t) => t.map((x) => x.id === id ? { ...x, done: !x.done } : x));
  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div className="app-frame" style={{ marginTop: 64 }}>
      <div className="app-bar">
        <div className="app-bar-dots"><span></span><span></span><span></span></div>
        <span className="app-bar-title">atlas / executive workspace</span>
      </div>
      <div className="app-grid">
        <aside className="app-side">
          <div className="app-side-search">⌘ Search workspace</div>
          <div className="app-side-section">Workspace</div>
          <ul className="app-side-list">
            {sideItems.map((label) => (
              <li key={label} className={active === label ? "active" : ""} onClick={() => setActive(label)}>{label}</li>
            ))}
          </ul>
          <div className="app-side-section">Projects</div>
          <ul className="app-side-list">
            {projects.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </aside>
        <main className="app-main">
          <h3>Tuesday, April 28</h3>
          <p className="app-main-meta">{remaining} priorities · drafted by your EA at 6:42am</p>
          {tasks.map((t) => (
            <div key={t.id} className={`app-task ${t.done ? "done" : ""}`} onClick={() => toggle(t.id)}>
              <div className="app-task-check"></div>
              <div>
                <span className="app-task-text">{t.text}</span>
                <span className="app-task-tag">{t.tag}</span>
              </div>
            </div>
          ))}
        </main>
        <aside className="app-aside">
          <h4>Up next</h4>
          {[
            { time: "9:00 — 9:30", title: "Exec sync", desc: "Pre-read attached" },
            { time: "11:00 — 12:00", title: "Investor 1:1 — Andreessen", desc: "Brief sent yesterday" },
            { time: "14:00 — 15:00", title: "Deep work block", desc: "Slack on snooze" },
          ].map((e) => (
            <div className="app-aside-event" key={e.title}>
              <div className="app-aside-event-time">{e.time}</div>
              <div className="app-aside-event-title">{e.title}</div>
              <div className="app-aside-event-desc">{e.desc}</div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

const Hero = ({ onPrimary = () => {}, onSecondary = () => {} }) => (
  <section className="hero">
    <div className="hero-orb"><div className="hero-orb-inner"></div></div>
    <div className="container hero-content">
      <span className="badge"><span className="badge-dot"></span>Now hiring AI-trained Executive Assistants</span>
      <h1>Operate in your<br /><span className="grad">zone of genius</span></h1>
      <p className="hero-sub">
        Atlas pairs founders and executives with world-class assistants and AI operators —
        so the operational weight lifts off your calendar and your best work has room to breathe.
      </p>
      <div className="hero-actions">
        <a href="#" className="btn btn-primary btn-lg" onClick={(e) => { e.preventDefault(); onPrimary(); }}>Book a discovery call</a>
        <a href="#services" className="btn btn-outline btn-lg" onClick={(e) => { e.preventDefault(); onSecondary(); }}>See services</a>
      </div>
      <div className="hero-meta">
        <span>2-week match guarantee</span>
        <span className="hero-meta-dot"></span>
        <span>90% match success rate</span>
        <span className="hero-meta-dot"></span>
        <span>SOC 2 secured</span>
      </div>
      <HeroAppFrame />
    </div>
  </section>
);

window.Hero = Hero;
window.HeroAppFrame = HeroAppFrame;
