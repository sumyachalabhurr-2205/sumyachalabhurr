
export default function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-img" />
      <div className="hero-grain" />
      <div className="container hero-inner">
        <div className="hero-grid">
          <div>
            <div className="eyebrow" style={{ color: "rgba(243,236,220,0.78)", marginBottom: 28 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 28, height: 1, background: "currentColor", opacity: 0.55 }} />
                Est. 2023 ·Pune
              </span>
            </div>
            <h1 className="display">Where unforgettable<br /><em>journeys begin..</em></h1>
          </div>
          <div className="hero-meta">
            <p>Tell us where you want to go, and we’ll design a journey filled with hidden places, beautiful stays, local experiences, and thoughtful details that turn trips into lifelong memories.</p>
            <div className="hero-cta">
              <a href="#plan" className="btn btn-primary btn-arrow">Plan my trip</a>
              <a href="#itinerary" className="btn btn-ghost-light">See a sample week</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="container row between">
          <div className="hero-press" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Featured in Condé Nast Traveller India · Outlook Traveller · Mint Lounge
          </div>
        </div>
      </div>
    </section>
  );
}
