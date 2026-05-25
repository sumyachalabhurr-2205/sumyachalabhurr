import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <div style={{ padding: '120px 20px', maxWidth: '900px', margin: 'auto', lineHeight: '1.8' }}>
      <h1>Contact Us</h1>

      <p>
        We are here to help you plan your perfect trip with ease and comfort.
      </p>

      <p>
        Feel free to contact us anytime for customized travel planning and support.
      </p>

      <p>
        <strong>Email:</strong> sumyachalabhurr@gmail.com
      </p>

      <p>
        <strong>Phone:</strong> +91 9096165675
      </p>

      <p>
        Thank you for choosing Sumyachalabhurr ❤️
      </p>
      <Link to="/">← Back To Home</Link>
    </div>
  )
}