import { useEffect, useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { galleryImages, galleryMixed, galleryCategories } from '../../utils/images.js'
import './Gallery.css'

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const images = useMemo(
    () => (filter === 'all' ? galleryMixed : galleryImages.filter((i) => i.category === filter)),
    [filter],
  )
  const count = images.length

  // Skill cards elsewhere on the page can ask the gallery to filter itself.
  useEffect(() => {
    const onFilter = (e) => setFilter(e.detail)
    window.addEventListener('gallery:filter', onFilter)
    return () => window.removeEventListener('gallery:filter', onFilter)
  }, [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % count)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + count) % count)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, count])

  const current = active !== null ? images[active] : null

  return (
    <section className="section gallery" id="gallery">
      <div className="container gallery__head">
        <SectionHeading
          eyebrow="Skill Acquisition Programme · Set 020 Elites"
          title="Our"
          highlight="Gallery"
        />
        <div className="gallery__nav">
          <button className="gallery__btn gallery__prev" aria-label="Previous photos">
            <Icon name="chevronLeft" size={22} />
          </button>
          <button className="gallery__btn gallery__next" aria-label="Next photos">
            <Icon name="chevronRight" size={22} />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="gallery__filters" role="tablist" aria-label="Filter photos">
          {[{ slug: 'all', title: 'All' }, ...galleryCategories].map((c) => (
            <button
              key={c.slug}
              role="tab"
              aria-selected={filter === c.slug}
              className={filter === c.slug ? 'is-active' : ''}
              onClick={() => setFilter(c.slug)}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        key={filter}
        className="gallery__swiper"
        modules={[Autoplay, Navigation, Pagination, Keyboard, A11y]}
        loop={count > 5}
        centeredSlides={count > 2}
        grabCursor
        speed={700}
        spaceBetween={16}
        slidesPerView={1.25}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        keyboard={{ enabled: true }}
        navigation={{ prevEl: '.gallery__prev', nextEl: '.gallery__next' }}
        pagination={{ el: '.gallery__pagination', type: 'progressbar' }}
        breakpoints={{
          480: { slidesPerView: 1.8, spaceBetween: 16 },
          768: { slidesPerView: 2.6, spaceBetween: 20 },
          1024: { slidesPerView: 3.6, spaceBetween: 24 },
          1440: { slidesPerView: 4.6, spaceBetween: 24 },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={img.src}>
            <button className="gallery__card" onClick={() => setActive(i)} aria-label={`Open photo: ${img.alt}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery__caption">{galleryCategories.find((c) => c.slug === img.category)?.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <div className="gallery__pagination" />
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            <Icon name="close" size={26} />
          </button>
          <button
            className="lightbox__arrow lightbox__arrow--prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i - 1 + count) % count)
            }}
          >
            <Icon name="chevronLeft" size={28} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              {current.alt} · {active + 1} / {count}
            </figcaption>
          </figure>
          <button
            className="lightbox__arrow lightbox__arrow--next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i + 1) % count)
            }}
          >
            <Icon name="chevronRight" size={28} />
          </button>
        </div>
      )}
    </section>
  )
}
