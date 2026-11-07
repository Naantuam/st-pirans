import { useEffect } from 'react'

/*
 * Adds `is-visible` to any `.reveal` element when it scrolls into view.
 * Also watches for `.reveal` elements added later (e.g. a section re-rendering, or
 * hot-reload during development) so nothing is ever left invisible.
 */
export default function useReveal() {
  useEffect(() => {
    const pending = () => document.querySelectorAll('.reveal:not(.is-visible)')

    if (!('IntersectionObserver' in window)) {
      pending().forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    const observeAll = () => pending().forEach((el) => io.observe(el))
    observeAll()

    const mo = new MutationObserver(observeAll)
    mo.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
