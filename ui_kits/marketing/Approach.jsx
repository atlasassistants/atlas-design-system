/* Atlas Marketing: how the partnership works. A three-cell bento: one large
   light feature panel (corner wash + symbol watermark) and two cards.
   Copy paraphrases design.md: Atlas recruits and develops exceptional
   AI-capable talent and equips clients to work with them. */
const Approach = () => (
  <section id="approach" className="kit-section">
    <div className="container">
      <div className="section-head">
        <h2>How the partnership works</h2>
        <p>Three parts, one goal: more of your week spent on the work only you can do.</p>
      </div>
      <div className="bento">
        <div className="cell cell-lg">
          <img className="watermark" src="../../assets/atlas-mark.png" alt="" />
          <span className="icon-box"><Icon name="users" /></span>
          <h3>Recruit</h3>
          <p>We find exceptional people who already work fluently with AI.</p>
        </div>
        <div className="cell">
          <span className="icon-box"><Icon name="layers" /></span>
          <h3>Develop</h3>
          <p>We keep developing their craft and their AI skills over time.</p>
        </div>
        <div className="cell">
          <span className="icon-box"><Icon name="repeat" /></span>
          <h3>Equip</h3>
          <p>We equip you to work with them, so the partnership holds up week after week.</p>
        </div>
      </div>
    </div>
  </section>
);
window.Approach = Approach;
