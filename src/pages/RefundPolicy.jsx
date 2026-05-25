import { Link } from 'react-router-dom'
export default function RefundPolicy() {
  return (
    <div style={{ padding: '120px 20px', maxWidth: '900px', margin: 'auto', lineHeight: '1.8' }}>
      <h1>Refund Policy</h1>

      <p>
        At Sumyachalabhurr, customer satisfaction is important to us.
        We provide customized trip planning services only and do not handle
        direct hotel, transport, or ticket bookings.
      </p>

      <p>
        If any payment issue, technical error, duplicate transaction,
        or service-related problem occurs from our side, eligible customers
        may request a refund.
      </p>

      <h3>Refund Conditions</h3>

      <p>
        <strong>1.</strong> Refunds are applicable only for genuine payment
        or technical issues.
      </p>

      <p>
        <strong>2.</strong> If an amount is deducted but the trip planning
        service is not delivered, the refund will be processed after verification.
      </p>

      <p>
        <strong>3.</strong> Duplicate payments made accidentally will also
        be refunded.
      </p>

      <p>
        <strong>4.</strong> Refund requests must be made within 3–7 days
        of the transaction.
      </p>

      <p>
        <strong>5.</strong> Once the customized trip plan or itinerary is
        delivered to the customer, the service fee is non-refundable.
      </p>
      <Link to="/">← Back To Home</Link>
    </div>
  )
}