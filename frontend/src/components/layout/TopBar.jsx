import Icon from '../ui/Icon.jsx'
import { school, contacts, announcements, whatsappLink } from '../../data/siteContent.js'
import './TopBar.css'

export default function TopBar() {
  const items = [...announcements, ...announcements]

  return (
    <div className="topbar">
      <div className="topbar__info">
        <div className="container topbar__row">
          <div className="topbar__contact">
            {contacts.map((c) => (
              <a key={c.intl} href={`tel:+${c.intl}`}>
                <Icon name="phone" size={14} />
                <span className="topbar__role">{c.role.startsWith('Vice') ? 'VP' : c.role}:</span> {c.phone}
              </a>
            ))}
          </div>
          <nav className="topbar__links" aria-label="Quick links">
            <a href={whatsappLink(contacts[0].intl)} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={14} /> WhatsApp Us
            </a>
            <a href={school.socials.facebook} target="_blank" rel="noreferrer">
              <Icon name="facebook" size={14} /> Facebook
            </a>
          </nav>
        </div>
      </div>

      <div className="ticker" role="marquee" aria-label="Announcements">
        <div className="ticker__track">
          {items.map((text, i) => (
            <span key={i} className="ticker__item" aria-hidden={i >= announcements.length}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
