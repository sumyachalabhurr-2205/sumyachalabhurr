import { useState } from 'react';
import React from 'react';
import Reveal from './Reveal.jsx';

export default function PlanForm() {
  const [channel, setChannel] = useState("email");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", region: "", when: "", days: "", travelers: "2", budget: "", contact: "", note: "",plan: ""
  });
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const valid = form.name && form.region && form.contact;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
  };
  return (
    <section className="plan-band" id="plan" data-screen-label="Plan form">
      <div className="container">
        <Reveal className="plan-grid">
          <div className="plan-intro">
            <div className="eyebrow">🛬 Now Boarding — Begin</div>
            <h2>Tell us where you'd <em>like</em> to be next.</h2>
            <p>A short note is enough. We'll write back within a day with the name of the designer best matched to where you're headed.</p>
            <div className="plan-promise">
              <div className="row3"><span className="num-tag">01</span><span>You fill the form. Five fields, no account, no password.</span></div>
              <div className="row3"><span className="num-tag">02</span><span>A trip designer reads it within a day and writes back personally.</span></div>
              <div className="row3"><span className="num-tag">03</span><span>Your full plan arrives on email or WhatsApp — whichever you chose.</span></div>
            </div>
          </div>

          <form className="plan-form" onSubmit={onSubmit}>
            {sent ? (
              <div className="plan-success">
                <span className="tick">✓</span>
                <h3>Thank you, {form.name.split(" ")[0]}.</h3>
                <p>We've received your note. A designer will be in touch on {channel === "email" ? "email" : "WhatsApp"} within one business day with a first sketch of your trip.</p>
              </div>
            ) : (
              <React.Fragment>
                <div className="form-eyebrow">
                  <span>Plan request · Form 01</span>
                  <span>5 min</span>
                </div>
                <div className="field-grid">
                  <div className="field full">
                    <label>Your name</label>
                    <input type="text" placeholder="e.g. Priya Nair" value={form.name} onChange={upd("name")} required />
                  </div>
                  <div className="field full">
                    <label>Where would you like to go?</label>
                    <input type="text" placeholder="a region, a country, or a feeling" value={form.region} onChange={upd("region")} required />
                  </div>
                  <div className="field full">
                    <label>Roughly when (Date or Day)</label>
                    <input type="text" placeholder="e.g. October, 2 weeks" value={form.when} onChange={upd("when")} />
                  </div>
                  <div className="field">
                    <label>How many days</label>
                    <select value={form.days} onChange={upd("days")}>
                      <option value="">Select length</option>
                      <option>1 — 2 days</option>
                      <option>3 — 4 days</option>
                      <option>5 — 7 days</option>
                      <option>8 — 10 days</option>
                      <option>11 — 14 days</option>
                      <option>3+ weeks</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Travelers</label>
                    <select value={form.travelers} onChange={upd("travelers")}>
                      <option>1</option><option>2</option><option>3</option><option>4</option>
                      <option>5–6</option><option>7+</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>Approximate budget </label>
                    <select value={form.budget} onChange={upd("budget")}>
                      <option value="">Select a range</option>
                      <option>Under ₹5,000</option>
                      <option>₹5,000 — ₹10,000</option>
                      <option>₹10,000 — ₹20,000</option>
                      <option>₹30,000 — ₹40,000</option>
                      <option>Above ₹50,000</option>
                      <option>I'd rather discuss</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>How should we reach you?</label>
                    <div className="seg" role="tablist">
                      <button type="button" className={channel === "email" ? "on" : ""} onClick={() => setChannel("email")}>Email</button>
                      <button type="button" className={channel === "whatsapp" ? "on" : ""} onClick={() => setChannel("whatsapp")}>WhatsApp</button>
                    </div>
                  </div>
                  <div className="field full">
                    <label>{channel === "email" ? "Email address" : "WhatsApp number (with country code)"}</label>
                    <input
                      type={channel === "email" ? "email" : "tel"}
                      placeholder={channel === "email" ? "name@domain.com" : "+91 98765 43210"}
                      value={form.contact}
                      onChange={upd("contact")}
                      required
                    />
                  </div>
                  <div className="field full">
                    <label>A short note (optional)</label>
                    <textarea placeholder="Anything we should know — anniversaries, dietary needs, things you're avoiding, the last trip you loved." value={form.note} onChange={upd("note")} />
                  </div>
                </div>
                <div className="plan-submit-row">
                  <span className="micro">We reply within 1 business day</span>
                  <button type="submit" className="btn-rust" disabled={!valid}>Send to a designer →</button>
                </div>
                <div>
  <label className="block mb-2 font-semibold">
    Choose Your Package
  </label>

  <select
    value={form.plan}
    onChange={upd("plan")}
    className="w-full border p-3 rounded-lg"
  >
    <option value="">Select Package</option>

    <option value="compass">
      Compass Plan - ₹99
    </option>

    <option value="atlas">
      Atlas Plan - ₹199
    </option>

    <option value="cartografar">
      Cartografar Plan - ₹399
    </option>
  </select>
</div>
              </React.Fragment>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
