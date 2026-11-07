import Icon from '../ui/Icon.jsx'
import badge from '../../assets/logo/badge.webp'
import { school, contacts, whatsappLink } from '../../data/siteContent.js'
import './CallToAction.css'

export default function CallToAction() {
  const principal = contacts[0]

  return (
    <section className="cta">
      <div className="container">
        <div className="cta__box reveal">
          <img src={badge} alt="" className="cta__badge" />
          <div className="cta__text">
            <span className="eyebrow">Admissions Open</span>
            <h2>
              Give your child a place to <em>shine</em>.
            </h2>
            <p>
              Affordable, quality education — school fees of about <strong>{school.fees}</strong>. Call or WhatsApp
              us to enquire or schedule a visit.
            </p>
          </div>
          <div className="cta__actions">
            <a href={whatsappLink(principal.intl)} target="_blank" rel="noreferrer" className="btn btn--gold">
              <Icon name="whatsapp" size={18} /> WhatsApp Us
            </a>
            <a href={`tel:+${principal.intl}`} className="btn btn--ghost">
              <Icon name="phone" size={16} /> {principal.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
