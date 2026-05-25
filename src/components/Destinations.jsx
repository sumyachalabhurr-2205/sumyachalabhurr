import Reveal from './Reveal.jsx';
import { SUMAYA_DATA } from '../data.js';

export default function Destinations() {
  const items = SUMAYA_DATA.destinations;
  return (
    <section className="s" id="destinations" data-screen-label="Destinations" style={{ background: "var(--paper)" }}>
      <div className="container">
        <Reveal className="s-head">
          <div className="eyebrow">🗺️ Destinations — Where We Work
</div>
          <div>
            <h2 className="display">Six corners of Maharashtra <em style={{ fontStyle: "italic" }}>worth</em> the long way around.</h2>
            <p className="desc" style={{ marginTop: 24 }}>From the Sahyadri ghats to the Himalayan north, the Konkan coast to Kerala's backwaters. We design across India for the quieter edges — places where the lodging matters as much as the landscape.</p>
          </div>
        </Reveal>
        <div className="dest-grid">
          {items.map((d, i) => (
            <Reveal key={d.name} className={`dest ${d.size}`} delay={i * 60}>
              <div className="pic" style={{ backgroundImage: `url(${d.img})` }} />
              <span className="tag">{d.tag}</span>
              <div className="body">
                <div>
                  <div className="sub">{d.country}</div>
                  <h3>{d.name}</h3>
                </div>
                <div className="price">from {d.from}<small>{d.duration}</small></div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <a href="#all" className="btn btn-outline btn-arrow">See every place we plan</a>
        </div>
      </div>
    </section>
  );
}
