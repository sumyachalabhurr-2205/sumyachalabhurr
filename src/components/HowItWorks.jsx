import Reveal from './Reveal.jsx';

export default function HowItWorks() {
  const steps = [
    { n: "01", t: " Tell us a feeling", d: "A short call. Where you've been, what stayed with you, what you're avoiding. We listen for the trip behind the trip." },
    { n: "02", t: "We draft a route", d: "Within five days, you receive a hand-built itinerary — lodges, drivers, meals, the rhythm of each day — written by the designer who'll see it through.." },
    { n: "03", t: "We perfect every detail", d: "Every destination, every stop, every quiet corner refined until it earns its spot. You receive a complete, ready-to-book plan — exactly what to reserve, where, and when, with our recommendations beside each choice." },
    { n: "04", t: "We stay on the line", d: "As you book and travel, your designer is one message away — suggestions, swaps, a better restaurant, a tweak to the timing. Plans bend, the trip stays yours." }
  ];
  return (
    <section className="s hiw" id="how" data-screen-label="How it works">
      <div className="container">
        <Reveal className="s-head">
          <div className="eyebrow">🛫 Departure — The Method
</div>
          <div>
            <h2 className="display">A trip you don't have to manage.</h2>
            <p className="desc" style={{ marginTop: 24 }}> You dream it, we map it, you pack, we handle the rest. The seams in between are where we earn our stripes."</p>
          </div>
        </Reveal>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="step" delay={i * 80}>
              <span className="marker" />
              <div className="num-tag">Step {s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
