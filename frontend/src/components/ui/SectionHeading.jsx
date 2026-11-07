export default function SectionHeading({ eyebrow, title, highlight, text, align = 'left', light = false }) {
  return (
    <header className={`section-heading section-heading--${align} ${light ? 'is-light' : ''} reveal`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {title} {highlight && <em>{highlight}</em>}
      </h2>
      <span className="section-heading__bar" />
      {text && <p>{text}</p>}
    </header>
  )
}
