import { useState } from 'react';
import React from 'react';
import Reveal from './Reveal.jsx';
import { SUMAYA_DATA } from '../data.js';

export default function Itinerary() {
  const data = SUMAYA_DATA.itinerary;
  const [active, setActive] = useState(0);
  const day = data.days[active];
  return (
    <section className="s itin" id="itinerary" data-screen-label="Sample itinerary">
      <div className="container">
        <Reveal className="s-head">
          <div className="eyebrow">🗓️ Itinerary — A Sample Week </div>
          <div>
            <h2 className="display">An itinerary <em style={{ fontStyle: "italic" }}>reads</em> like a letter.</h2>
            <p className="desc" style={{ marginTop: 24 }}>A real Konkan itinerary, day by day. Click through to see how a week unfolds along the Sindhudurg coast — each block vetted on the ground, refined for a guest in the last twelve months.</p>
          </div>
        </Reveal>
        <Reveal className="itin-card">
          <div className="itin-top">
            <div className="itin-overview">
              <div className="trip-sub">Designed itinerary · winter '26</div>
              <h3 className="trip-title">{data.title}</h3>
              <p style={{ color: "rgba(243,236,220,0.7)", margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>{data.sub}</p>
              <div className="itin-facts">
                {data.facts.map((f) => (
                  <div className="itin-fact" key={f.lbl}>
                    <span className="lbl">{f.lbl}</span>
                    <span className="val">{f.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="itin-map">
              {data.pins.map((p, i) => (
                <React.Fragment key={i}>
                  <span className="pin-label" style={{ left: `${p.x}%`, top: `${p.y}%` }}>{p.label}</span>
                  <span className="pin" style={{ left: `${p.x}%`, top: `${p.y}%` }} />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="itin-tabs" role="tablist">
            {data.days.map((d, i) => (
              <button key={i} className={`itin-tab ${i === active ? "active" : ""}`} onClick={() => setActive(i)} role="tab" aria-selected={i === active}>
                {d.day}<span className="day">{d.tab}</span>
              </button>
            ))}
          </div>
          <div className="itin-day">
            <div className="itin-day-meta">
              <div className="eyebrow">{day.day}</div>
              <h4>{day.title}</h4>
              <p>{day.intro}</p>
            </div>
            <div className="itin-blocks">
              {day.blocks.map((b, i) => (
                <div className="ib" key={i}>
                  <div className="ib-time">{b.time}</div>
                  <div className="ib-body">
                    <h5>{b.title}</h5>
                    <p>{b.desc}</p>
                  </div>
                  <span className={`ib-tag ${b.tag.toLowerCase()}`}>{b.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
