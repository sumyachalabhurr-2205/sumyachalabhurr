import { useState } from 'react';
import React from 'react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal.jsx';

const PLANS = {
  compass:     { label: 'Compass Plan',     price: 99 },
  atlas:       { label: 'Atlas Plan',       price: 199 },
  cartografar: { label: 'Cartografar Plan', price: 399 },
};

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (document.getElementById('rzp-script')) { resolve(true); return; }
    const s = document.createElement('script');
    s.id  = 'rzp-script';
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload  = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function PlanForm() {
  const [channel, setChannel] = useState('email');
  const [sent, setSent]       = useState(false);
  const [paying, setPaying]   = useState(false);
  const [error, setError]     = useState('');
  const [form, setForm] = useState({
    name: '', region: '', when: '', days: '', travelers: '2',
    budget: '', contact: '', note: '', plan: '',
  });

  const upd   = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const valid = form.name && form.region && form.contact && form.plan;

  async function sendEmails(paymentId) {
    const base = {
      customer_name:  form.name,
      destination:    form.region,
      travel_date:    form.when,
      days:           form.days,
      travelers:      form.travelers,
      budget:         form.budget,
      contact_info:   form.contact,
      contact_channel: channel,
      note:           form.note || '—',
      plan_name:      PLANS[form.plan].label,
      plan_price:     `₹${PLANS[form.plan].price}`,
      payment_id:     paymentId,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_BUSINESS_TEMPLATE_ID,
      { ...base, to_email: import.meta.env.VITE_BUSINESS_EMAIL },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    if (channel === 'email') {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID,
        { ...base, to_email: form.contact },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    setError('');
    setPaying(true);

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      setError('Could not load payment gateway. Please check your connection and try again.');
      setPaying(false);
      return;
    }

    const plan = PLANS[form.plan];
    const options = {
      key:         import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:      plan.price * 100,
      currency:    'INR',
      name:        'Sumaya Chalbhurr',
      description: plan.label,
      prefill: {
        name:    form.name,
        email:   channel === 'email'    ? form.contact : '',
        contact: channel === 'whatsapp' ? form.contact : '',
      },
      theme: { color: '#B74B2E' },
      modal: {
        ondismiss: () => setPaying(false),
      },
      handler: async (response) => {
        try {
          await sendEmails(response.razorpay_payment_id);
        } catch (err) {
          console.error('Email send failed:', err);
        }
        setPaying(false);
        setSent(true);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', () => {
      setError('Payment failed. Please try again.');
      setPaying(false);
    });
    rzp.open();
  }

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
                <h3>Thank you, {form.name.split(' ')[0]}.</h3>
                <p>Payment confirmed! We've received your booking for the <strong>{PLANS[form.plan].label}</strong>. A designer will be in touch on {channel === 'email' ? 'email' : 'WhatsApp'} within one business day with a first sketch of your trip.</p>
                {channel === 'email' && <p style={{ opacity: 0.7, fontSize: '0.85em' }}>A confirmation email has been sent to {form.contact}.</p>}
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
                    <input type="text" placeholder="e.g. Priya Nair" value={form.name} onChange={upd('name')} required />
                  </div>
                  <div className="field full">
                    <label>Where would you like to go?</label>
                    <input type="text" placeholder="a region, a country, or a feeling" value={form.region} onChange={upd('region')} required />
                  </div>
                  <div className="field full">
                    <label>Roughly when (Date or Day)</label>
                    <input type="text" placeholder="e.g. October, 2 weeks" value={form.when} onChange={upd('when')} />
                  </div>
                  <div className="field">
                    <label>How many days</label>
                    <select value={form.days} onChange={upd('days')}>
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
                    <select value={form.travelers} onChange={upd('travelers')}>
                      <option>1</option><option>2</option><option>3</option><option>4</option>
                      <option>5–6</option><option>7+</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>Approximate budget</label>
                    <select value={form.budget} onChange={upd('budget')}>
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
                    <label>Choose your package</label>
                    <select value={form.plan} onChange={upd('plan')} required>
                      <option value="">Select a package</option>
                      <option value="compass">Compass Plan — ₹99</option>
                      <option value="atlas">Atlas Plan — ₹199</option>
                      <option value="cartografar">Cartografar Plan — ₹399</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>How should we reach you?</label>
                    <div className="seg" role="tablist">
                      <button type="button" className={channel === 'email' ? 'on' : ''} onClick={() => setChannel('email')}>Email</button>
                      <button type="button" className={channel === 'whatsapp' ? 'on' : ''} onClick={() => setChannel('whatsapp')}>WhatsApp</button>
                    </div>
                  </div>
                  <div className="field full">
                    <label>{channel === 'email' ? 'Email address' : 'WhatsApp number (with country code)'}</label>
                    <input
                      type={channel === 'email' ? 'email' : 'tel'}
                      placeholder={channel === 'email' ? 'name@domain.com' : '+91 98765 43210'}
                      value={form.contact}
                      onChange={upd('contact')}
                      required
                    />
                  </div>
                  <div className="field full">
                    <label>A short note (optional)</label>
                    <textarea placeholder="Anything we should know — anniversaries, dietary needs, things you're avoiding, the last trip you loved." value={form.note} onChange={upd('note')} />
                  </div>
                </div>
                {error && <p style={{ color: '#c0392b', fontSize: '0.9em', margin: '0.5rem 0' }}>{error}</p>}
                <div className="plan-submit-row">
                  <span className="micro">We reply within 1 business day</span>
                  <button type="submit" className="btn-rust" disabled={!valid || paying}>
                    {paying ? 'Opening payment…' : `Pay ${form.plan ? `₹${PLANS[form.plan].price}` : ''} & Submit →`}
                  </button>
                </div>
              </React.Fragment>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
