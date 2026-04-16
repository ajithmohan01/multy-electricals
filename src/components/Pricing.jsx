import { useLanguage } from '../context/LanguageContext'
import './Pricing.css'

const planColors = ['#f59e0b', '#10b981', '#3b82f6']
const planPrices = ['₹78,000', '₹1,20,000', '₹2,20,000']
const featuredIndex = 1

export default function Pricing() {
  const { t } = useLanguage()
  const p = t.pricing

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="section-tag">{p.tag}</span>
          <h2 className="section-title">
            {p.title1}<br /><span>{p.title2}</span>
          </h2>
          <p className="section-desc">
            {p.desc.split('7%').map((part, i, arr) =>
              i < arr.length - 1
                ? <span key={i}>{part}<strong style={{ color: 'var(--primary)' }}>7%</strong></span>
                : <span key={i}>{part}</span>
            )}
          </p>
        </div>

        <div className="pricing-grid">
          {p.plans.map((plan, i) => {
            const color = planColors[i]
            const featured = i === featuredIndex
            return (
              <div key={plan.name} className={`pricing-card card ${featured ? 'pricing-featured' : ''}`}>
                {featured && <div className="pricing-ribbon">{p.bestValue}</div>}
                <div className="pricing-header-card">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price" style={{ color }}>
                    {planPrices[i]}
                  </div>
                  <span className="plan-price-note">{p.priceNote}</span>
                  <p className="plan-desc">{plan.desc}</p>
                </div>

                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f}>
                      <span style={{ color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="btn"
                  style={
                    featured
                      ? { background: `linear-gradient(135deg, ${color}, #059669)`, color: '#fff' }
                      : { background: `${color}18`, color, border: `1px solid ${color}40` }
                  }
                >
                  {featured ? p.mostPopular : p.getStarted}
                </a>
              </div>
            )
          })}
        </div>

        <div className="pricing-note">
          <span>💡</span>
          <p>
            {p.noteText.split('40%').map((part, i, arr) =>
              i < arr.length - 1
                ? <span key={i}>{part}<strong>40%</strong></span>
                : <span key={i}>{part}</span>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
