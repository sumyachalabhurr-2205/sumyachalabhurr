import Reveal from './Reveal.jsx';
import { SUMAYA_DATA } from '../data.js';

export default function Testimonials() {
  const items = SUMAYA_DATA.testimonials;
  return (
    <section className="s" data-screen-label="Testimonials" style={{ background: "var(--paper)" }}>
      <div className="container">
        <Reveal className="s-head quotes-head">
          <div>
            <div className="eyebrow">🧳 Passengers — Travelers</div>
            <h2 className="display" style={{ marginTop: 18 }}>The trips, in their words.</h2>
          </div>
          <p className="desc">We don't ask for reviews. These arrived in our inbox, unprompted, and our travelers gave us permission to share.</p>
        </Reveal>
        <div className="quotes">
          {items.map((q, i) => (
            <Reveal className="quote" key={i} delay={i * 80}>
              <div className="mark">"</div>
              <blockquote>{q.quote}</blockquote>
              <div className="who">
                
                <div>
                  <div className="name">{q.name}</div>
                  <div className="trip">{q.trip}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
