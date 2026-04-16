import './Footer.css'

const links = {
  Services: ['3KW Solar', '5KW Solar', '10KW Solar', 'Battery Systems', 'Inverter Setup', 'Electrical Work'],
  Company: ['About Us', 'Why Choose Us', 'Pricing', 'Contact'],
  Support: ['Free After-Service', 'Govt. Subsidy Help', 'Loan Assistance', 'Site Survey'],
}

export default function Footer() {
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
            <p>
              Delivering reliable and cost-effective solar solutions in Nilambur, Kerala.
              Powered by trust, driven by teamwork.
            </p>
            <div className="footer-contacts">
              <a href="tel:+917025523226">📞 +91 70255 23226</a>
              <a href="tel:+919446633289">📱 +91 94466 33289</a>
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
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
          <span>&ldquo;Power your future with the sun.&rdquo;</span>
          <span>&ldquo;Clean energy, smart savings.&rdquo;</span>
          <span>&ldquo;Your reliable partner in solar solutions.&rdquo;</span>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MULTY ELECTRICALS SOLAR. All rights reserved. | Nilambur, Kerala, India</p>
          <p>Founded by Jishnu · Industrial Electrical Team</p>
        </div>
      </div>
    </footer>
  )
}
