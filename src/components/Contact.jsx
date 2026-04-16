import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()
  const c = t.contact

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">{c.tag}</span>
            <h2 className="section-title">
              {c.title1}<br /><span>{c.title2}</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: 40 }}>
              {c.desc}
            </p>

            <div className="contact-cards">
              <a href="tel:+917025523226" className="contact-card">
                <span className="contact-card-icon">📞</span>
                <div>
                  <strong>{c.callUs}</strong>
                  <span>+91 70255 23226</span>
                </div>
              </a>
              <a href="tel:+919446633289" className="contact-card">
                <span className="contact-card-icon">📱</span>
                <div>
                  <strong>{c.alternate}</strong>
                  <span>+91 94466 33289</span>
                </div>
              </a>
              <div className="contact-card">
                <span className="contact-card-icon">📍</span>
                <div>
                  <strong>{c.location}</strong>
                  <span>{c.locationVal}</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card-icon">🕐</span>
                <div>
                  <strong>{c.workingHours}</strong>
                  <span>{c.workingHoursVal}</span>
                </div>
              </div>
            </div>

            <div className="contact-taglines">
              <p>{c.tagline1}</p>
              <p>{c.tagline2}</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success card">
                <span>✅</span>
                <h3>{c.successTitle}</h3>
                <p>{c.successMsg}</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  {c.sendAnother}
                </button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h3>{c.formTitle}</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>{c.nameLbl}</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={c.namePh}
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>{c.phoneLbl}</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={c.phonePh}
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>{c.emailLbl}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={c.emailPh}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>{c.serviceLbl}</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">{c.serviceDefault}</option>
                    {c.serviceOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>{c.messageLbl}</label>
                  <textarea
                    name="message"
                    placeholder={c.messagePh}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {c.sendBtn}
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
