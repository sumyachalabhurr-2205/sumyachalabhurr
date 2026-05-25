import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { SUMAYA_DATA } from '../data.js';

export default function FAQ() {
  const items = SUMAYA_DATA.faqs;
  const [open, setOpen] = useState(0);
  return (
    <section className="s" id="faq" data-screen-label="FAQ" style={{ background: "var(--paper)" }}>
      <div className="container">
        <Reveal className="s-head">
          <div className="eyebrow">ℹ️ Information Desk — Questions</div>
          <div>
            <h2 className="display">Asked <em style={{ fontStyle: "italic" }}>often.</em></h2>
            <p className="desc" style={{ marginTop: 24 }}>The six we hear most. If yours isn't here, write to us — we tend to answer within the same business day.</p>
          </div>
        </Reveal>
        <div className="faq-list">
          {items.map((it, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="num-tag">{String(i + 1).padStart(2, "0")}</span>
                <span className="qtext">{it.q}</span>
                <span className="icon">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <div className="body">{it.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
