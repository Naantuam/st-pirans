import { useState } from 'react'
import Icon from './Icon.jsx'
import { contacts, whatsappLink } from '../../data/siteContent.js'
import './WhatsAppButton.css'

/* Floating chat button — opens a small menu to message the Principal or the VP. */
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className={`wa ${open ? 'is-open' : ''}`}>
      <div className="wa__menu" role="menu">
        <p>Chat with us on WhatsApp</p>
        {contacts.map((c) => (
          <a key={c.intl} href={whatsappLink(c.intl)} target="_blank" rel="noreferrer" role="menuitem">
            <strong>{c.name}</strong>
            <span>
              {c.role} · {c.phone}
            </span>
          </a>
        ))}
      </div>
      <button
        className="wa__toggle"
        aria-label={open ? 'Close WhatsApp menu' : 'Chat on WhatsApp'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? 'close' : 'whatsapp'} size={28} strokeWidth={2} />
      </button>
    </div>
  )
}
