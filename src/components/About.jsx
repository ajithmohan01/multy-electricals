import { useLanguage } from '../context/LanguageContext'
import './About.css'

const valueIcons = ['🤝', '🎯', '⭐', '🛡️']

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-tag">{a.tag}</span>
            <h2 className="section-title">
              {a.title1}<br /><span>{a.title2}</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              {a.desc1}
            </p>
            <p className="section-desc" style={{ marginBottom: 36 }}>
              {a.desc2.split('Jishnu').map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<strong style={{ color: 'var(--primary)' }}>Jishnu</strong></span>
                  : <span key={i}>{part}</span>
              )}
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">📍</span>
                <div>
                  <strong>{a.h1}</strong>
                  <p>{a.h1sub}</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <div>
                  <strong>{a.h2}</strong>
                  <p>{a.h2sub}</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔧</span>
                <div>
                  <strong>{a.h3}</strong>
                  <p>{a.h3sub}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="values-grid">
              {a.values.map((v, i) => (
                <div key={v.title} className="value-card card">
                  <span className="value-icon">{valueIcons[i]}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="about-quote">
              <span className="quote-mark">&ldquo;</span>
              <p>{a.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
