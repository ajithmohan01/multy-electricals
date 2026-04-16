import './About.css'

const values = [
  { icon: '🤝', title: 'Teamwork', desc: 'Led by Jishnu with a skilled industrial electrical team committed to collaborative excellence.' },
  { icon: '🎯', title: 'Precision', desc: 'Every installation is executed with meticulous attention to detail and safety standards.' },
  { icon: '⭐', title: 'Quality', desc: 'We use only premium-grade solar components ensuring long-term reliability and performance.' },
  { icon: '🛡️', title: 'Trust', desc: 'Years of experience in Nilambur, Kerala, building lasting relationships with every client.' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">
              Kerala&apos;s Trusted<br /><span>Solar Partner</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              MULTY ELECTRICALS SOLAR is a trusted solar energy company based in
              Nilambur, Kerala, delivering reliable and cost-effective solar solutions
              for both residential and commercial needs.
            </p>
            <p className="section-desc" style={{ marginBottom: 36 }}>
              Founded by <strong style={{ color: 'var(--primary)' }}>Jishnu</strong>, who leads
              a skilled industrial electrical team, the company strongly believes in teamwork,
              precision, and quality service — making solar energy affordable and accessible
              across the region.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">📍</span>
                <div>
                  <strong>Based in Nilambur, Kerala</strong>
                  <p>Serving residential &amp; commercial clients</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <div>
                  <strong>Years of Experience</strong>
                  <p>Dedicated team of industrial electricians</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔧</span>
                <div>
                  <strong>Free After-Service Support</strong>
                  <p>Ensuring long-term performance &amp; satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="values-grid">
              {values.map(v => (
                <div key={v.title} className="value-card card">
                  <span className="value-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="about-quote">
              <span className="quote-mark">&ldquo;</span>
              <p>Driven by teamwork, powered by trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
