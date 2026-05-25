import { Link } from 'react-router-dom'
export default function PrivacyPolicy() {
  return (
    <div style={{ padding: '120px 20px', maxWidth: '900px', margin: 'auto', lineHeight: '1.8' }}>
      <h1>Privacy Policy</h1>

      <p>
        At Sumyachalabhurr, we respect your privacy and protect your personal information.
      </p>

      <p>
        We may collect basic details such as your name, phone number, email address,
        and travel preferences for trip planning purposes only.
      </p>

      <p>
        Your information is kept secure and is never sold or shared with third parties
        without your permission.
      </p>

      <p>
        Online payments are processed securely through trusted payment gateways.
      </p>

      <p>
        By using our website, you agree to our Privacy Policy and Terms & Conditions.
      </p>
      <Link to="/">← Back To Home</Link>
    </div>
  )
}
