import SectionHeading from '../ui/SectionHeading.jsx'
import { faqs } from '../../data/siteContent.js'
import './Faq.css'

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq__inner">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently Asked"
          highlight="Questions"
          text="Everything parents usually ask about St. Piran's Anglican High School, Jos."
          align="center"
        />
        <div className="faq__list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq__item reveal" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
    </section>
  )
}
