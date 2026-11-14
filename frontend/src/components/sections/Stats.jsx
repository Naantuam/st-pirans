import { useEffect, useRef, useState } from 'react'
import { stats } from '../../data/siteContent.js'
import './Stats.css'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(value > 1900 ? value - 20 : 0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      // Years (e.g. 2004) count up from 20 years earlier instead of from 0
      const from = value > 1900 ? value - 20 : 0
      const start = performance.now()
      const dur = 1600
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1)
        setN(Math.round(from + (value - from) * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats" aria-label="School at a glance">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>
              <Counter value={s.value} suffix={s.suffix} />
            </strong>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
