import { useEffect, useState } from 'react'
import Icon from '../ui/Icon.jsx'
import badge from '../../assets/logo/badge.webp'
import { heroImages } from '../../utils/images.js'
import { heroSlides, school } from '../../data/siteContent.js'
import './Hero.css'

const INTERVAL = 6500

export default function Hero() {
  const [index, setIndex] = useState(0)
  const count = Math.max(heroSlides.length, heroImages.length)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL)
    return () => clearInterval(id)
  }, [count, index])

  const slide = heroSlides[index % heroSlides.length]

  return (
    <section className="hero" id="home">
      {heroImages.length > 0 && (
        <div className="hero__bg" aria-hidden="true">
          {heroImages.map((img, i) => (
            <div
              key={img.src}
              className={`hero__bg-img ${i === index % heroImages.length ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${img.src})` }}
            />
          ))}
        </div>
      )}
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content" key={index}>
          <span className="hero__eyebrow">{slide.eyebrow}</span>
          <h1>
            {slide.title[0]}
            <br />
            {slide.title[1]} <em>{slide.highlight}</em>
          </h1>
          <p>{slide.text}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--gold">
              Begin Admission <Icon name="arrow" size={18} />
            </a>
            <a href="#gallery" className="btn btn--ghost">
              Explore Our School
            </a>
          </div>
        </div>

        <div className="hero__emblem" aria-hidden="true">
          <svg className="hero__ring" viewBox="0 0 200 200">
            <defs>
              <path id="ring" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
            </defs>
            <text>
              <textPath href="#ring" textLength="512" lengthAdjust="spacing">
                {`${school.motto} • ${school.motto} • `.toUpperCase()}
              </textPath>
            </text>
          </svg>
          <span className="hero__rays" />
          <img src={badge} alt="" />
        </div>
      </div>

      <div className="container hero__dots">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
          >
            <span style={{ animationDuration: `${INTERVAL}ms` }} />
          </button>
        ))}
      </div>
    </section>
  )
}
