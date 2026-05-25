import Reveal from './Reveal.jsx';
import { SUMAYA_DATA } from '../data.js';

export default function Pricing() {
  const tiers = SUMAYA_DATA.pricing;
  return (
    <section className="s pricing" id="pricing" data-screen-label="Pricing">
      <div className="container">
        <Reveal className="s-head">
          <div className="eyebrow">🎫 Boarding Pass — Engagements</div>
          <div>
            <h2 className="display">Three ways to <em style={{ fontStyle: "italic" }}>work</em> together.</h2>
            <p className="desc" style={{ marginTop: 24 }}>"We keep it simple: one flat planning fee, and trip costs passed on at supplier rate. We don't take a cent from the stays we recommend, so every suggestion is made for you alone."</p>
          </div>
        </Reveal>
        <div className="price-grid">
          {tiers.map((t, i) => (
            <Reveal className={`tier ${t.featured ? "feat" : ""}`} key={t.title} delay={i * 70}>
              <div className="tier-label">
                <span>§ {String(i + 1).padStart(2, "0")} · {t.label}</span>
                {t.pill ? <span className="pill">{t.pill}</span> : null}
              </div>
              <h3>{t.title}</h3>
              <div className="pr">
                <span className="amt">{t.price}</span>
                <span className="per">{t.per}</span>
              </div>
              <p className="desc">{t.desc}</p>
              <ul>{t.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
              <div className="tier-cta">
                <a href="#plan" className={`btn ${t.featured ? "btn-ghost-light" : "btn-outline"} btn-arrow`}>{t.cta}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
