import Icon from '../ui/Icon.jsx'
import badge from '../../assets/logo/badge.webp'
import { school, navLinks, contacts, skills, whatsappLink } from '../../data/siteContent.js'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={badge} alt="" width="88" height="88" />
          <p className="footer__name">{school.name}</p>
          <p className="footer__motto">“{school.motto}” · Est. {school.founded}</p>
          <div className="footer__socials">
            <a href={school.socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <Icon name="facebook" size={18} />
            </a>
            <a href={whatsappLink(contacts[0].intl)} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="pin" size={18} />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${school.name}, ${school.address}`)}`}
                target="_blank"
                rel="noreferrer"
              >
                {school.address}
              </a>
            </li>
            {contacts.map((c) => (
              <li key={c.intl}>
                <Icon name="phone" size={18} />
                <span>
                  <a href={`tel:+${c.intl}`}>{c.phone}</a>
                  {' · '}
                  <a href={whatsappLink(c.intl)} target="_blank" rel="noreferrer" className="footer__wa">
                    WhatsApp
                  </a>
                  <small>
                    {c.name}, {c.role}
                  </small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Skills</h3>
          <ul className="footer__links">
            {skills.map((s) => (
              <li key={s.slug}>
                <a href="#skills">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {YEAR} {school.name}, {school.location}. All rights reserved.
        </p>
        <p>Let your light shine.</p>
      </div>
    </footer>
  )
}
