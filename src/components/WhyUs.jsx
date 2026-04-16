import './WhyUs.css'

const reasons = [
  { icon: '🆓', title: 'Free After-Service Support', desc: 'We don\'t just install and leave. Our team provides ongoing support to ensure your system performs at its best.' },
  { icon: '🏛️', title: 'Government Subsidy Assistance', desc: 'We guide you through every step of the government subsidy application, reducing your installation cost by up to 40%.' },
  { icon: '💰', title: 'Flexible Loan Options', desc: 'Avail easy financing at approximately 7% interest rate. Solar energy is now within reach for every household.' },
  { icon: '👷', title: 'Skilled Industrial Team', desc: 'Our team has hands-on industrial electrical experience — not just solar technicians, but certified electricians.' },
  { icon: '⚡', title: 'Fast & Clean Installation', desc: 'Minimal disruption to your daily life. We complete most residential installations within 1–2 days.' },
  { icon: '📜', title: 'End-to-End Service', desc: 'From initial site survey to net metering registration, we handle everything so you don\'t have to.' },
]

const testimonials = [
  { name: 'Rajan M.', location: 'Nilambur', text: 'Excellent service! The team installed our 5KW system within a day. Our electricity bill dropped by 90%.' },
  { name: 'Priya K.', location: 'Wandoor', text: 'Jishnu and his team were very professional. They helped us get the government subsidy too. Highly recommended!' },
  { name: 'Suresh P.', location: 'Mampad', text: 'Free after-service is a game changer. They came and fixed a minor issue immediately. Top-class company.' },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="whyus">
      <div className="container">
        <div className="whyus-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Your Reliable Partner<br /><span>In Solar Solutions</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We bring years of field experience, a dedicated skilled team, and a genuine
            commitment to your satisfaction — before and after installation.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map(r => (
            <div key={r.title} className="reason-card card">
              <span className="reason-icon">{r.icon}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-wrap">
          <h3 className="testimonials-title">What Our Customers Say</h3>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <span className="author-avatar">{t.name[0]}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
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
