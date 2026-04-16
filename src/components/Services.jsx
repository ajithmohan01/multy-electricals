import { useLanguage } from '../context/LanguageContext'
import './Services.css'

const serviceColors = ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f97316']
const serviceIcons = ['⚡', '🌞', '🏭', '🔋', '🔌', '🛠️']
const featuredIndex = 1

export default function Services() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">{s.tag}</span>
          <h2 className="section-title">
            {s.title1} <span>{s.title2}</span><br />{s.title3}
          </h2>
          <p className="section-desc">{s.desc}</p>
        </div>

        <div className="services-grid">
          {s.items.map((item, i) => {
            const color = serviceColors[i]
            const featured = i === featuredIndex
            return (
              <div key={item.title} className={`service-card card ${featured ? 'service-featured' : ''}`}>
                {featured && <span className="service-badge">{s.mostPopular}</span>}
                <div className="service-icon" style={{ color, background: `${color}18` }}>
                  {serviceIcons[i]}
                </div>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
                <ul className="service-features">
                  {item.features.map(f => (
                    <li key={f}>
                      <span className="check" style={{ color }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-link" style={{ color }}>
                  {s.enquireNow}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
