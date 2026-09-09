import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Button from './Button.jsx'
import { principles } from '../data/content.js'

/**
 * Scroll-stacking principle cards.
 * Each card is sticky. Later cards sit 24px lower, so as a new card slides up
 * and covers the previous one, a 24px strip of the older card stays visible
 * above it — recreating the three-layer stack drawn in Figma. Covered cards
 * step back through the darker greens (#e6f3e9 → #cfe4d3 → #bbdec3) and their
 * content fades so the strip reads as a clean edge.
 */

const N = principles.length
const PEEK = 24 // px each covered layer peeks above the next
const CARD_H = 521

const TONES = ['#e6f3e9', '#cfe4d3', '#bbdec3']

function useMedia(q) {
  const [m, setM] = useState(() => (typeof window !== 'undefined' ? window.matchMedia(q).matches : false))
  useEffect(() => {
    const mq = window.matchMedia(q)
    const fn = (e) => setM(e.matches)
    mq.addEventListener('change', fn)
    setM(mq.matches)
    return () => mq.removeEventListener('change', fn)
  }, [q])
  return m
}

export default function IterationCard() {
  const simple = useMedia('(prefers-reduced-motion: reduce)')
  return simple ? <FlowVersion /> : <StackVersion />
}

/* ------------------------------------------------------------------------ */

function StackVersion() {
  const refs = useRef(principles.map(() => ({ current: null }))).current
  const [vh, setVh] = useState(() => (typeof window !== 'undefined' ? window.innerHeight : 1000))
  const [cardH, setCardH] = useState(CARD_H)
  useEffect(() => {
    const fn = () => setVh(window.innerHeight)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  // cards are a fixed 521 on desktop but grow on narrow screens — measure so the stack maths follows
  useEffect(() => {
    const els = refs.map((r) => r.current).filter(Boolean)
    if (!els.length) return
    const measure = () => setCardH(Math.max(...els.map((e) => e.offsetHeight)))
    const ro = new ResizeObserver(measure)
    els.forEach((e) => ro.observe(e))
    measure()
    return () => ro.disconnect()
  }, [refs])

  return (
    <section className="section principles" style={{ '--n': N, '--peek': `${PEEK}px`, '--card-h': `${cardH}px` }}>
      <div className="container principles__track">
        {principles.map((card, i) => (
          <StackCard key={card.id} card={card} i={i} refs={refs} vh={vh} cardH={cardH} />
        ))}
        <div className="principles__end" aria-hidden="true" />
      </div>
    </section>
  )
}

/** The y at which card k rests once stuck — centred, or pinned near the top if the card is taller than the viewport allows. */
const stickTop = (k, vh, cardH) => Math.max(24, vh / 2 - cardH / 2) + k * PEEK

function StackCard({ card, i, refs, vh, cardH }) {
  const self = refs[i]
  const next = refs[Math.min(i + 1, N - 1)]
  const after = refs[Math.min(i + 2, N - 1)]

  // progress of the following card travelling from the bottom of the viewport to its resting point
  const { scrollYProgress: c1 } = useScroll({ target: next, offset: ['start end', `start ${stickTop(i + 1, vh, cardH)}px`] })
  const { scrollYProgress: c2 } = useScroll({ target: after, offset: ['start end', `start ${stickTop(i + 2, vh, cardH)}px`] })
  const cover1 = useTransform(c1, (v) => (i + 1 < N ? v : 0))
  const cover2 = useTransform(c2, (v) => (i + 2 < N ? v : 0))

  const background = useTransform([cover1, cover2], ([a, b]) => {
    const mix = (c1, c2, t) => {
      const h = (c) => [1, 3, 5].map((k) => parseInt(c.slice(k, k + 2), 16))
      const [r1, g1, b1] = h(c1)
      const [r2, g2, b2] = h(c2)
      return `rgb(${Math.round(r1 + (r2 - r1) * t)}, ${Math.round(g1 + (g2 - g1) * t)}, ${Math.round(b1 + (b2 - b1) * t)})`
    }
    if (b > 0) return mix(TONES[1], TONES[2], b)
    return mix(TONES[0], TONES[1], a)
  })
  // content fades late in the travel, once the incoming card is actually covering it
  const contentOpacity = useTransform(cover1, [0.55, 0.95], [1, 0])
  const contentY = useTransform(cover1, [0.4, 1], [0, -20])

  return (
    <motion.article
      ref={self}
      className="principles__card"
      style={{ top: stickTop(i, vh, cardH), zIndex: i + 1, background }}
    >
      <motion.div className="principles__content" style={{ opacity: contentOpacity, y: contentY }}>
        <CardBody card={card} />
      </motion.div>
      <span className="grain grain--soft" aria-hidden="true" />
    </motion.article>
  )
}

function CardBody({ card }) {
  return (
    <>
      <div className="principles__text">
        <p className="eyebrow">{card.eyebrow}</p>
        <h2 className="h3">{card.title}</h2>
        <p className="body">{card.body}</p>
        <Button variant="white" size="lg" icon teal={card.ctaTone === 'teal'}>
          {card.cta}
        </Button>
      </div>
      <figure className="principles__figure">
        <img src={card.image} alt={card.imageAlt} loading="lazy" />
      </figure>
    </>
  )
}

/* ------------------------------------------------------------------------ */

function FlowVersion() {
  return (
    <section className="section principles principles--flow">
      <div className="container principles__flow">
        {principles.map((card) => (
          <article key={card.id} className="principles__card" style={{ background: TONES[0] }}>
            <div className="principles__content">
              <CardBody card={card} />
            </div>
            <span className="grain grain--soft" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
