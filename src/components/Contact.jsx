import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // In production: connect to backend / Formspree / EmailJS
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Ready To Go<br /><span>Solar?</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: 40 }}>
              Contact us today for a free site survey and customized quote.
              Our team will guide you through the entire process — from subsidy
              application to final installation.
            </p>

            <div className="contact-cards">
              <a href="tel:+917025523226" className="contact-card">
                <span className="contact-card-icon">📞</span>
                <div>
                  <strong>Call Us</strong>
                  <span>+91 70255 23226</span>
                </div>
              </a>
              <a href="tel:+919446633289" className="contact-card">
                <span className="contact-card-icon">📱</span>
                <div>
                  <strong>Alternate</strong>
                  <span>+91 94466 33289</span>
                </div>
              </a>
              <div className="contact-card">
                <span className="contact-card-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>Nilambur, Kerala, India</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <span>Mon–Sat: 8 AM – 6 PM</span>
                </div>
              </div>
            </div>

            <div className="contact-taglines">
              <p>&ldquo;Clean energy, smart savings.&rdquo;</p>
              <p>&ldquo;Power your future with the sun.&rdquo;</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success card">
                <span>✅</span>
                <h3>Thank You!</h3>
                <p>We&apos;ve received your enquiry. Our team will call you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h3>Get a Free Quote</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email (optional)</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="3kw">3KW On-Grid Solar</option>
                    <option value="5kw">5KW On-Grid Solar</option>
                    <option value="10kw">10KW On-Grid Solar</option>
                    <option value="battery">Solar Battery System</option>
                    <option value="inverter">Inverter Setup</option>
                    <option value="electrical">Complete Electrical Work</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Enquiry
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
