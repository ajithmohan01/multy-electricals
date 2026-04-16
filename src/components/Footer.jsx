import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>☀</span>
              <div>
                <span className="footer-logo-main">MULTY ELECTRICALS</span>
                <span className="footer-logo-sub">SOLAR</span>
              </div>
            </div>
            <p>{f.tagline}</p>
            <div className="footer-contacts">
              <a href="tel:+917025523226">📞 +91 70255 23226</a>
              <a href="tel:+919446633289">📱 +91 94466 33289</a>
            </div>
          </div>

          {Object.entries(f.links).map(([group, items]) => (
            <div key={group} className="footer-col">
              <h4>{group}</h4>
              <ul>
                {items.map(item => (
                  <li key={item}><a href="#services">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-taglines">
          {f.taglines.map((tl, i) => (
            <span key={i}>{tl}</span>
          ))}
        </div>

        <div className="footer-bottom">
          <p>{f.copyright}</p>
          <p>{f.founded}</p>
        </div>
      </div>
    </footer>
  )
}
