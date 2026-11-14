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

/* Slides visible at each screen width (min-width → slides). Shared by Swiper and the "does it fit?" check. */
const BREAKPOINTS = {
  0: { slidesPerView: 1.25, spaceBetween: 16 },
  480: { slidesPerView: 1.8, spaceBetween: 16 },
  768: { slidesPerView: 2.6, spaceBetween: 20 },
  1024: { slidesPerView: 3.6, spaceBetween: 24 },
  1440: { slidesPerView: 4.6, spaceBetween: 24 },
}

const perViewFor = (width) =>
  Object.entries(BREAKPOINTS).reduce((pv, [min, bp]) => (width >= Number(min) ? bp.slidesPerView : pv), 1)

function useSlidesPerView() {
  const [pv, setPv] = useState(() => perViewFor(typeof window === 'undefined' ? 0 : window.innerWidth))
  useEffect(() => {
    const onResize = () => setPv(perViewFor(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return pv
}

export default function Gallery() {
  // ?gallery=music opens the gallery on one skill (handy for sharing links)
  const [filter, setFilter] = useState(() => {
    if (typeof window === 'undefined') return 'all'
    const q = new URLSearchParams(window.location.search).get('gallery')
    return galleryCategories.some((c) => c.slug === q) ? q : 'all'
  })
  const [active, setActive] = useState(null)

  const images = useMemo(
    () => (filter === 'all' ? galleryMixed : galleryImages.filter((i) => i.category === filter)),
    [filter],
  )
  const count = images.length

  // Only slide when the photos don't all fit on screen; only loop when there are enough to fill the loop.
  const perView = useSlidesPerView()
  const isSlider = count > Math.floor(perView)
  const loop = count >= Math.ceil(perView) * 2 + 1

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

  const renderCard = (img, i) => (
    <button className="gallery__card" onClick={() => setActive(i)} aria-label={`Open photo: ${img.alt}`}>
      <img src={img.src} alt={img.alt} loading="lazy" />
      <span className="gallery__caption">{galleryCategories.find((c) => c.slug === img.category)?.title}</span>
    </button>
  )

  return (
    <section className="section gallery" id="gallery">
      <div className="container gallery__head">
        <SectionHeading
          eyebrow="Skill Acquisition Programme · Set 020 Elites"
          title="Our"
          highlight="Gallery"
        />
        <div className={`gallery__nav ${isSlider ? '' : 'is-hidden'}`}>
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

      {isSlider ? (
      <Swiper
        key={`${filter}-${loop}`}
        className="gallery__swiper"
        modules={[Autoplay, Navigation, Pagination, Keyboard, A11y]}
        loop={loop}
        centeredSlides
        centeredSlidesBounds={!loop}
        grabCursor
        speed={700}
        spaceBetween={16}
        slidesPerView={BREAKPOINTS[0].slidesPerView}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        keyboard={{ enabled: true }}
        navigation={{ prevEl: '.gallery__prev', nextEl: '.gallery__next' }}
        pagination={{ el: '.gallery__pagination', type: 'progressbar' }}
        breakpoints={BREAKPOINTS}
      >
        {images.map((img, i) => (
          <SwiperSlide key={img.src}>{renderCard(img, i)}</SwiperSlide>
        ))}
      </Swiper>
      ) : (
        <div className="container">
          <div key={filter} className="gallery__grid" style={{ '--cols': count }}>
            {images.map((img, i) => (
              <div key={img.src}>{renderCard(img, i)}</div>
            ))}
          </div>
        </div>
      )}
      <div className="container">
        <div className={`gallery__pagination ${isSlider ? '' : 'is-hidden'}`} />
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
