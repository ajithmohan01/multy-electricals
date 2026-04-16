import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span>☀</span> Nilambur, Kerala&apos;s Trusted Solar Company
        </div>

        <h1 className="hero-title">
          Power Your Future<br />
          <span>With The Sun</span>
        </h1>

        <p className="hero-desc">
          MULTY ELECTRICALS SOLAR delivers reliable, cost-effective solar solutions
          for homes and businesses — from on-grid installations to complete electrical work.
          Starting at just <strong>₹78,000</strong> with government subsidies available.
        </p>

        <div className="hero-tags">
          <span>✓ On-Grid Systems</span>
          <span>✓ Battery Systems</span>
          <span>✓ Free Service Support</span>
          <span>✓ Govt. Subsidy Eligible</span>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get Free Quote
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#services" className="btn btn-outline">
            Explore Services
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Installations</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3KW–10KW</span>
            <span className="stat-label">System Range</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">7%</span>
            <span className="stat-label">Loan Interest</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">Free</span>
            <span className="stat-label">After Service</span>
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
