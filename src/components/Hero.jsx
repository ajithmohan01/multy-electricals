import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span>☀</span> {h.badge}
        </div>

        <h1 className="hero-title">
          {h.title1}<br />
          <span>{h.title2}</span>
        </h1>

        <p className="hero-desc">
          {h.desc.split('₹78,000').map((part, i, arr) =>
            i < arr.length - 1
              ? <span key={i}>{part}<strong>₹78,000</strong></span>
              : <span key={i}>{part}</span>
          )}
        </p>

        <div className="hero-tags">
          <span>{h.tag1}</span>
          <span>{h.tag2}</span>
          <span>{h.tag3}</span>
          <span>{h.tag4}</span>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            {h.cta1}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#services" className="btn btn-outline">
            {h.cta2}
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">{h.stat1Label}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3KW–10KW</span>
            <span className="stat-label">{h.stat2Label}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">7%</span>
            <span className="stat-label">{h.stat3Label}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">{h.stat4Value}</span>
            <span className="stat-label">{h.stat4Label}</span>
          </div>
        </div>
      </div>

      <div className="hero-solar-visual">
        <div className="solar-panel-wrap">
          <div className="sun-ring" />
          <div className="sun-core">☀</div>
          <div className="panel-grid">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="panel-cell" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
