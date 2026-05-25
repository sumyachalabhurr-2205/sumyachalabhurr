import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Destinations from './components/Destinations.jsx'
import Itinerary from './components/Itinerary.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import PlanForm from './components/PlanForm.jsx'
import Footer from './components/Footer.jsx'

import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import RefundPolicy from './pages/RefundPolicy'
import Contact from './pages/Contact'

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Destinations />
      <Itinerary />
      <Testimonials />
      <Pricing />
      <FAQ />
      <PlanForm />
    </>
  )
}

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}