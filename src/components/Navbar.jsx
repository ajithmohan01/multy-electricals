import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

const navKeys = ['home', 'about', 'services', 'pricing', 'whyUs', 'contact']
const navHrefs = ['#home', '#about', '#services', '#pricing', '#whyus', '#contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-sun">☀</span>
          <div>
            <span className="logo-main">MULTY ELECTRICALS</span>
            <span className="logo-sub">SOLAR</span>
          </div>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navKeys.map((key, i) => (
            <li key={key}>
              <a href={navHrefs[i]} onClick={() => setMenuOpen(false)}>
                {t.nav[key]}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+917025523226" className="btn btn-primary navbar-cta">
              {t.nav.callNow}
            </a>
          </li>
        </ul>

        <div className="navbar-right">
          <button className="lang-toggle" onClick={toggleLang}>
            <span className="full-label">{lang === 'en' ? 'Malayalam' : 'English'}</span>
            <span className="short-label">{lang === 'en' ? 'ML' : 'EN'}</span>
          </button>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
