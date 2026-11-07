import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { offerings } from '../../data/siteContent.js'
import './Offerings.css'

export default function Offerings() {
  return (
    <section className="section offerings" id="offerings">
      <div className="container">
        <SectionHeading
          eyebrow="Why St. Piran's"
          title="What We"
          highlight="Offer"
          align="center"
          text="An education that develops the mind, shapes character and inspires students to serve."
        />
        <div className="offerings__grid">
          {offerings.map((o, i) => (
            <article key={o.title} className="offer-card reveal" style={{ '--d': `${i * 90}ms` }}>
              <span className="offer-card__icon">
                <Icon name={o.icon} size={26} />
              </span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
