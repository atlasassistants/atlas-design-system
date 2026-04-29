/* Atlas Marketing — Brand Mark
   The Atlas "A" logomark + wordmark used in nav and footer. */
const Brand = ({ size = 36, showWord = true }) => (
  <a href="#" className="nav-brand" onClick={(e) => e.preventDefault()}>
    <img src="../../assets/atlas-mark.png" alt="Atlas" className="nav-logo" style={{ width: size, height: size }} />
    {showWord && <span>atlas</span>}
  </a>
);

window.Brand = Brand;
