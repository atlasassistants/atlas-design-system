/* Atlas Marketing: the role. Text left, photo slot right.
   The photo slot is a PLACEHOLDER: use a real, consented photo of a person at
   work, graded toward Vivid or Electric Purple (design.md > Photography). */
const RoleSplit = ({ onNav = () => {} }) => (
  <section id="role" className="kit-section">
    <div className="container split">
      <div>
        <span className="t-eyebrow">The role</span>
        <h2>Meet your Exec Ops Partner</h2>
        <p>The Exec Ops Partner is the role Atlas places beside you. They work on the operating side of your business, so more of your week goes to the work only you can do.</p>
        <a href="#faq" className="btn btn-link" onClick={(e) => { e.preventDefault(); onNav("faq"); }}>Questions about the role <Icon name="arrowUpRight" /></a>
      </div>
      <div className="photo-slot">
        <Icon name="image" />
        <span>Photo placeholder: a real person at work, graded purple.</span>
        <div className="profile">
          <span className="avatar">PN</span>
          <div><b>Partner name</b><span style={{ fontSize: 14, color: "var(--fg-3)" }}>Placeholder profile</span></div>
          <span className="badge badge-highlight">Exec Ops Partner</span>
        </div>
      </div>
    </div>
  </section>
);
window.RoleSplit = RoleSplit;
