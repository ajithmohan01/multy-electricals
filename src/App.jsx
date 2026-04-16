import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />

      {/* Floating Call Button */}
      <a href="tel:+917025523226" className="float-call-btn" aria-label="Call us now">
        📞
      </a>
    </>
  )
}
