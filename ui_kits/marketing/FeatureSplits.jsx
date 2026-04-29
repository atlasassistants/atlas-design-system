/* Atlas Marketing — Two feature-split sections (EA matching + AI Operator chat). */
const FeatureList = ({ items }) => (
  <ul className="feature-list">
    {items.map((it) => <li key={it}>{it}</li>)}
  </ul>
);

const EAMatchVisual = ({ candidates }) => (
  <div className="feature-visual">
    <div className="ea-match">
      {candidates.map((c, i) => (
        <div key={c.initials} className={`ea-card ${i === 0 ? "match" : ""}`}>
          <div className="ea-avatar">{c.initials}</div>
          <div className="ea-info">
            <div className="ea-name">{c.name}</div>
            <div className="ea-meta">{c.meta}</div>
          </div>
          <div className="ea-score">{c.score}</div>
        </div>
      ))}
    </div>
  </div>
);

const AIOperatorVisual = () => (
  <div className="feature-visual">
    <div className="ai-panel">
      <div className="ai-msg user">
        <div className="ai-msg-from">You</div>
        Pull together everything you know about the Northwind deal and draft a one-pager for tomorrow's board.
      </div>
      <div className="ai-msg bot">
        <div className="ai-msg-from">Atlas Operator</div>
        Pulled from 14 emails, 3 meeting transcripts, and last week's exec memo. Draft saved in your Notion. Highlights:
        <div className="ai-tools">
          <span className="ai-tool">📧 Gmail</span>
          <span className="ai-tool">📝 Notion</span>
          <span className="ai-tool">🎙️ Otter</span>
          <span className="ai-tool">📊 Linear</span>
        </div>
      </div>
      <div className="ai-msg user">
        <div className="ai-msg-from">You</div>
        Schedule a 30-min review with Sarah before the board meeting.
      </div>
      <div className="ai-msg bot">
        <div className="ai-msg-from">Atlas Operator</div>
        Found three slots that work for both calendars. Tentative hold sent for tomorrow at 2pm — confirm?
      </div>
    </div>
  </div>
);

const FeatureEAMatch = () => {
  const candidates = [
    { initials: "MR", name: "Maya R. — Strategic EA",       meta: "7 yrs · Series B/C founders · Calendar + travel + ops", score: "98% fit" },
    { initials: "JC", name: "Jordan C. — Operations EA",    meta: "5 yrs · Solo CEOs · Inbox + project ops",              score: "91% fit" },
    { initials: "SP", name: "Sam P. — Chief of Staff EA",   meta: "9 yrs · VC partners · Comms + research",               score: "87% fit" },
    { initials: "KT", name: "Kai T. — Senior EA",           meta: "6 yrs · PE-backed CEOs · Board ops",                   score: "84% fit" },
  ];
  return (
    <section id="how" className="kit-section">
      <div className="container">
        <div className="feature-split">
          <div className="feature-text">
            <span className="section-badge">EA Staffing</span>
            <h2>Matched in <span className="grad">two weeks</span>, not three months</h2>
            <p>Most placements fail because the search starts with a job title. Ours starts with how you actually work — your calendar, your communication style, your sharpest pain. We match against fit, not just résumé.</p>
            <FeatureList items={[
              "Personalized intake, scoped in 48 hours",
              "Top 5% talent from a pre-vetted bench",
              "Onboarding, training, and ramp-up handled",
              "90-day match guarantee — no exceptions",
            ]} />
          </div>
          <EAMatchVisual candidates={candidates} />
        </div>
      </div>
    </section>
  );
};

const FeatureAIOperator = () => (
  <section className="kit-section" style={{ paddingTop: 0 }}>
    <div className="container">
      <div className="feature-split reverse">
        <AIOperatorVisual />
        <div className="feature-text">
          <span className="section-badge">AI Operators</span>
          <h2>Your EA, with <span className="grad">10x reach</span></h2>
          <p>Every Atlas EA is trained as an AI Operator — fluent in the same tools you'd hire a small team to run. Research, drafts, reports, inbox triage, calendar choreography, all delegated cleanly.</p>
          <FeatureList items={[
            "Trained on GPT-5, Claude, and your stack",
            "Connects to Gmail, Notion, Slack, Linear, Drive",
            "Audit trail on every automated action",
            "SOC 2 secured, with full data isolation",
          ]} />
        </div>
      </div>
    </div>
  </section>
);

window.FeatureEAMatch = FeatureEAMatch;
window.FeatureAIOperator = FeatureAIOperator;
window.FeatureList = FeatureList;
window.EAMatchVisual = EAMatchVisual;
window.AIOperatorVisual = AIOperatorVisual;
