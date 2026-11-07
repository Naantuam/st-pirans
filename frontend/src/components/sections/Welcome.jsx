import badge from '../../assets/logo/badge.webp'
import welcomePhoto from '../../assets/images/welcome.jpg'
import { staffPhoto } from '../../utils/images.js'
import { welcome, school, contacts } from '../../data/siteContent.js'
import './Welcome.css'

const initials = (name) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

export default function Welcome() {
  return (
    <section className="section welcome" id="about">
      <div className="container welcome__grid">
        <div className="welcome__text reveal">
          <span className="eyebrow">{welcome.eyebrow}</span>
          <span className="section-heading__bar" />
          <p className="welcome__lead">{welcome.lead}</p>
          {welcome.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="leaders">
            {contacts.map((c) => {
              const photo = staffPhoto(c.staffPhoto)
              return (
                <figure key={c.intl} className="leader">
                  {photo ? (
                    <img className="leader__avatar" src={photo} alt={c.name} />
                  ) : (
                    <div className="leader__avatar">{initials(c.name)}</div>
                  )}
                  <figcaption>
                    <strong>{c.name}</strong>
                    <span>{c.role}</span>
                  </figcaption>
                </figure>
              )
            })}
          </div>

          <blockquote className="welcome__quote">
            {staffPhoto('principal') && (
              <img className="welcome__quote-photo" src={staffPhoto('principal')} alt={contacts[0].name} />
            )}
            <div>
              <span className="eyebrow">From the Principal</span>
              <p>“{welcome.quote}”</p>
              <cite>— {contacts[0].name}</cite>
            </div>
          </blockquote>
        </div>

        <div className="welcome__visual reveal" style={{ '--d': '120ms' }}>
          <div className="welcome__frame">
            <img src={welcomePhoto} alt={`Students of ${school.name}`} loading="lazy" />
          </div>
          <div className="welcome__badge-card">
            <img src={badge} alt="" />
            <div>
              <strong>Est. {school.founded}</strong>
              <span>{school.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
