
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);
  const onSubscribe = () => { if (email) setSubbed(true); };

  return (
    <footer data-screen-label="Footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="wordmark">sumayachalbhurr<span className="dot" /></div>
            
            <p>From a small effort, we strive to make your trips simple, beautiful, and unforgettable. Working from Pune, across all of India — especially Maharashtra. Wherever you go, travel with Sumayachalabhurr.</p>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <Link to="/about">About</Link>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@sumayachalbhurr.in">sumyachalabhurr@gmail.com</a></li>
              <li><a href="#plan">Send a plan request</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2023 Sumayachalbhurr </span>
          <span> Pune,Maharashtra</span>
          <div style={{display:'flex', gap:'15px', flexWrap:'wrap'}}>
  <Link to="/privacy-policy">Privacy Policy</Link>
  <Link to="/terms-conditions">Terms & Conditions</Link>
  <Link to="/refund-policy">Refund Policy</Link>
  <Link to="/contact">Contact Us</Link>

  <div style={{ marginTop: "30px" }}>
  <h3 style={{ marginBottom: "14px" }}>Follow Us</h3>

  <div
    style={{
      display: "flex",
      gap: "22px",
      alignItems: "center",
      flexWrap: "wrap"
    }}
  >
    <a
      href="https://www.instagram.com/sumyachalabhurr?igsh=MTMwOXRwN3NncHI3&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "white",
        textDecoration: "none",
        fontSize: "17px"
      }}
    >
      <FaInstagram size={24} />
      Instagram
    </a>

    <a
      href="https://youtube.com/@sumyachalabhurr?si=z6ehOTUPfhde9gjD"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "white",
        textDecoration: "none",
        fontSize: "17px"
      }}
    >
      <FaYoutube size={24} />
      YouTube
    </a>
  </div>
</div>

</div>
        </div>
      </div>
    </footer>
  );
}
