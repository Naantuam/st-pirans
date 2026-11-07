import SectionHeading from '../ui/SectionHeading.jsx'
import { coverFor } from '../../utils/images.js'
import { skills, skillsProgramme } from '../../data/siteContent.js'
import './Skills.css'

/* Clicking a card jumps to the gallery filtered to that skill. */
const showInGallery = (slug) => {
  window.dispatchEvent(new CustomEvent('gallery:filter', { detail: slug }))
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow={skillsProgramme.eyebrow}
          title={skillsProgramme.title}
          highlight={skillsProgramme.highlight}
          text={skillsProgramme.text}
          align="center"
        />
        <p className="skills__host reveal">
          Hosted by <strong>Set 020 Elites</strong>
        </p>

        <div className="skills__grid">
          {skills.map((s, i) => {
            const cover = coverFor(s.slug)
            return (
              <a
                key={s.slug}
                href="#gallery"
                onClick={() => showInGallery(s.slug)}
                className="skill reveal"
                style={{ '--d': `${(i % 4) * 80}ms` }}
              >
                {cover && <img src={cover} alt={`${s.title} session`} loading="lazy" />}
                <div className="skill__body">
                  <span className="skill__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="skill__link">View photos →</span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
