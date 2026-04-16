import './Services.css'

const services = [
  {
    icon: '⚡',
    title: '3KW On-Grid Solar',
    desc: 'Perfect for small homes. Feeds power back to the grid and reduces your electricity bill significantly.',
    features: ['Grid tie-up ready', 'Net metering', 'Govt. subsidy eligible', 'Quick ROI'],
    color: '#f59e0b',
  },
  {
    icon: '🌞',
    title: '5KW On-Grid Solar',
    desc: 'Ideal for medium-sized homes and small businesses. Balanced power output with premium efficiency.',
    features: ['Higher savings', 'Net metering', 'Best seller', 'Premium panels'],
    color: '#10b981',
    featured: true,
  },
  {
    icon: '🏭',
    title: '10KW On-Grid Solar',
    desc: 'Built for large homes and commercial establishments. Maximum output for heavy power consumers.',
    features: ['Commercial grade', 'High output', 'Govt. subsidy eligible', 'Priority service'],
    color: '#3b82f6',
  },
  {
    icon: '🔋',
    title: 'Solar Battery Systems',
    desc: 'Store excess solar energy for use during night-time or power outages. Energy independence 24/7.',
    features: ['Backup power', 'Night usage', 'Long battery life', 'Smart management'],
    color: '#8b5cf6',
  },
  {
    icon: '🔌',
    title: 'Inverter Setup',
    desc: 'Professional inverter installation and configuration for optimal solar energy conversion efficiency.',
    features: ['Expert setup', 'Efficiency tuned', 'All brands', 'Warranty support'],
    color: '#ec4899',
  },
  {
    icon: '🛠️',
    title: 'Complete Electrical Work',
    desc: 'End-to-end electrical solutions from wiring to distribution boards by our industrial electrical team.',
    features: ['Full wiring', 'DB setup', 'Safety checks', 'Industrial grade'],
    color: '#f97316',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">
            Complete <span>Solar Solutions</span><br />For Every Need
          </h2>
          <p className="section-desc">
            From small residential setups to large commercial installations, we provide
            end-to-end solar and electrical services with expert support.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className={`service-card card ${s.featured ? 'service-featured' : ''}`}>
              {s.featured && <span className="service-badge">Most Popular</span>}
              <div className="service-icon" style={{ color: s.color, background: `${s.color}18` }}>
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f}>
                    <span className="check" style={{ color: s.color }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-link" style={{ color: s.color }}>
                Enquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
