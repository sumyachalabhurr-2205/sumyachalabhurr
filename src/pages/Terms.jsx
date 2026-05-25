import { Link } from 'react-router-dom'
export default function Terms() {
  return (
    <div style={{ padding: '120px 20px', maxWidth: '900px', margin: 'auto', lineHeight: '1.8' }}>
      <h1>Terms & Conditions</h1>

      <p>
        Welcome to Sumyachalabhurr. By using our website and services,
        you agree to the following Terms & Conditions.
      </p>

      <h3>1. Trip Planning Service</h3>
      <p>
        Sumyachalabhurr provides customized trip planning services only.
        We do not directly handle hotel, transport, or ticket bookings.
      </p>

      <h3>2. Payment Policy</h3>
      <p>
        Planning charges must be paid in advance before receiving the
        complete trip plan or itinerary.
      </p>

      <h3>3. Customer Responsibility</h3>
      <p>
        Customers are responsible for booking hotels, transport, and tickets
        based on the provided travel plan.
      </p>

      <h3>4. No Refund Policy</h3>
      <p>
        Once the trip plan or itinerary is delivered, the service fee is
        non-refundable.
      </p>

      <h3>5. Information Accuracy</h3>
      <p>
        Sumyachalabhurr provides travel suggestions based on available
        information, but prices, timings, and availability may change anytime.
      </p>
      <Link to="/">← Back To Home</Link>
    </div>
  )
}
