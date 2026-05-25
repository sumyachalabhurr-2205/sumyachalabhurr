import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : "over-dark"}`}>
      <div className="container">
        <nav className="nav">
          <a className="wordmark" href="#top">
            <img src={logo} alt= "logo" className="logo-img" />
            <span style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>sumayachalbhurr</span></a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#destinations">Destinations</a>
            <a href="#itinerary">Sample trip</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-cta">
            <a className="btn btn-primary" href="#plan" style={{ height: 40, padding: "0 18px" }}>Plan my trip</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
