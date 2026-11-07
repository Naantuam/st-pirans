import { useEffect, useState } from 'react'
import Icon from '../ui/Icon.jsx'
import badge from '../../assets/logo/badge.webp'
import { school, navLinks } from '../../data/siteContent.js'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__row">
        <a href="#home" className="brand" onClick={close}>
          <img src={badge} alt={`${school.name} badge`} width="52" height="52" />
          <span className="brand__text">
            <strong>{school.name}</strong>
            <small>{school.location}</small>
          </span>
        </a>

        <nav className={`navbar__menu ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary navbar__cta" onClick={close}>
            Apply Now
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
      <div className={`navbar__backdrop ${open ? 'is-open' : ''}`} onClick={close} />
    </header>
  )
}
