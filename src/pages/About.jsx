import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div style={{ padding: '120px 20px', maxWidth: '900px', margin: 'auto' }}>

      <h1>About Sumyachalabhurr</h1>

      <p>
        Welcome to <b>Sumyachalabhurr</b> — your travel planning partner for memorable adventures and relaxing journeys.
      </p>

      <p>
        We create customized travel plans for every type of traveler, whether you want to travel with family, friends, groups, solo trips, trekking adventures, nature exploration, or peaceful relaxation trips.
      </p>

      <p>
        Our goal is to make trip planning simple and stress-free by providing complete travel guidance and well-organized plans according to your needs and budget. From destination ideas to travel schedules, we help you enjoy your journey without confusion.
      </p>

      <p>
        The name <b>“Sumya Chala Bhurr”</b> represents the feeling of freely exploring new places, enjoying nature, creating memories, and experiencing the excitement of travel.
      </p>

      <p>
        Currently, our website focuses on creating personalized travel plans, and in the future we are planning to add more exciting features such as:
      </p>

      <ul>
        <li>Trip Bookings</li>
        <li>Hotel & Stay Booking</li>
        <li>Complete Trip Organizing</li>
        <li>Group Tours</li>
        <li>Travel Assistance and more</li>
      </ul>

      <p>
        At <b>Sumyachalabhurr</b>, we believe every trip should feel special, exciting, and unforgettable.
      </p>

      <p style={{ marginTop: '40px', fontStyle: 'italic' }}>
        — Sumit Pandurang Petkar
      </p>

      <br />

      <Link to="/">← Back To Home</Link>

    </div>
  )
}