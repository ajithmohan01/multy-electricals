import { useLanguage } from '../context/LanguageContext'
import './WhyUs.css'

const reasonIcons = ['🆓', '🏛️', '💰', '👷', '⚡', '📜']

export default function WhyUs() {
  const { t } = useLanguage()
  const w = t.whyUs

  return (
    <section id="whyus" className="whyus">
      <div className="container">
        <div className="whyus-header">
          <span className="section-tag">{w.tag}</span>
          <h2 className="section-title">
            {w.title1}<br /><span>{w.title2}</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {w.desc}
          </p>
        </div>

        <div className="reasons-grid">
          {w.reasons.map((r, i) => (
            <div key={r.title} className="reason-card card">
              <span className="reason-icon">{reasonIcons[i]}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-wrap">
          <h3 className="testimonials-title">{w.testimonialsTitle}</h3>
          <div className="testimonials-grid">
            {w.testimonials.map(testimonial => (
              <div key={testimonial.name} className="testimonial-card card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="testimonial-author">
                  <span className="author-avatar">{testimonial.name[0]}</span>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
