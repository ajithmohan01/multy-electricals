import './Pricing.css'

const plans = [
  {
    name: '3KW System',
    price: '₹78,000',
    priceNote: 'Starting price',
    desc: 'Best for small homes with monthly bills of ₹1,000–₹2,000',
    features: [
      '3KW on-grid solar panels',
      'Grid-tie inverter',
      'Net metering setup',
      'Government subsidy eligible',
      'Free installation',
      'Free after-service support',
      'Loan option available',
    ],
    cta: 'Get Started',
    color: '#f59e0b',
  },
  {
    name: '5KW System',
    price: '₹1,20,000',
    priceNote: 'Starting price',
    desc: 'Ideal for medium homes with monthly bills of ₹2,000–₹4,000',
    features: [
      '5KW on-grid solar panels',
      'High-efficiency inverter',
      'Net metering setup',
      'Government subsidy eligible',
      'Free installation',
      'Free after-service support',
      'Priority support',
      'Loan option available',
    ],
    cta: 'Most Popular',
    color: '#10b981',
    featured: true,
  },
  {
    name: '10KW System',
    price: '₹2,20,000',
    priceNote: 'Starting price',
    desc: 'For large homes & commercial units with bills above ₹5,000',
    features: [
      '10KW on-grid solar panels',
      'Commercial-grade inverter',
      'Net metering setup',
      'Government subsidy eligible',
      'Free installation',
      'Free after-service support',
      'Dedicated account manager',
      'Loan option available',
    ],
    cta: 'Get Started',
    color: '#3b82f6',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="section-title">
            Affordable Plans<br /><span>For Every Home</span>
          </h2>
          <p className="section-desc">
            Starting from ₹78,000 with government subsidies and flexible loan options
            at approximately <strong style={{ color: 'var(--primary)' }}>7% interest</strong> — solar has never been more accessible.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`pricing-card card ${plan.featured ? 'pricing-featured' : ''}`}>
              {plan.featured && <div className="pricing-ribbon">Best Value</div>}
              <div className="pricing-header-card">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price" style={{ color: plan.color }}>
                  {plan.price}
                </div>
                <span className="plan-price-note">{plan.priceNote}</span>
                <p className="plan-desc">{plan.desc}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f}>
                    <span style={{ color: plan.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="btn"
                style={
                  plan.featured
                    ? { background: `linear-gradient(135deg, ${plan.color}, #059669)`, color: '#fff' }
                    : { background: `${plan.color}18`, color: plan.color, border: `1px solid ${plan.color}40` }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <span>💡</span>
          <p>
            All prices are indicative. Final cost depends on site survey and panel brand.
            Government subsidy can reduce cost by up to <strong>40%</strong>.
            Loan options available at ~7% interest. Call us for an exact quote.
          </p>
        </div>
      </div>
    </section>
  )
}
