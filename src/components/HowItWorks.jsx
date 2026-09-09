import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { howItWorks as data } from '../data/content.js'

const ease = [0.22, 1, 0.36, 1]
const STEPS = data.steps
const N = STEPS.length

/* Scroll choreography (fractions of the pinned scroll range) */
const P = {
  introIn: [0, 0.08],       // header fades in, centred
  headerUp: [0.12, 0.3],    // header travels to the top of the panel
  linesIn: [0.2, 0.36],     // lines draw, marker pops
  track: [0.36, 0.94],      // resources travel through the marker
}

const DWELL = 0.3 // each node rests on the marker for this share of a segment (either side)

/** Continuous node offset 0..N-1 with a rest at every integer. */
function dwell(t) {
  const k = Math.min(Math.floor(t), N - 2)
  const u = Math.min(Math.max(t - k, 0), 1)
  let f
  if (u < DWELL) f = 0
  else if (u > 1 - DWELL) f = 1
  else {
    const x = (u - DWELL) / (1 - 2 * DWELL)
    f = x * x * (3 - 2 * x) // smoothstep
  }
  return k + f
}

const lerp = (p, [a, b], [c, d]) => {
  const x = Math.min(Math.max((p - a) / (b - a), 0), 1)
  return c + (d - c) * x
}

function useMedia(query) {
  const [m, setM] = useState(() => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false))
  useEffect(() => {
    const mq = window.matchMedia(query)
    const fn = (e) => setM(e.matches)
    mq.addEventListener('change', fn)
    setM(mq.matches)
    return () => mq.removeEventListener('change', fn)
  }, [query])
  return m
}

export default function HowItWorks() {
  const simple = useMedia('(max-width: 960px), (prefers-reduced-motion: reduce)')
  return simple ? <StackedVersion /> : <PinnedVersion />
}

/* ------------------------------------------------------------------------ */

function PinnedVersion() {
  const sectionRef = useRef(null)
  const panelRef = useRef(null)
  const headerRef = useRef(null)
  const containerRef = useRef(null)

  const [dims, setDims] = useState({ panelH: 900, headerH: 220, w: 1280 })
  useLayoutEffect(() => {
    const measure = () =>
      setDims({
        panelH: panelRef.current?.offsetHeight ?? 900,
        headerH: headerRef.current?.offsetHeight ?? 220,
        w: containerRef.current?.offsetWidth ?? 1280,
      })
    measure()
    const ro = new ResizeObserver(measure)
    if (panelRef.current) ro.observe(panelRef.current)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const markerX = dims.w * 0.172 // (444 − 224) / 1280 in the Figma frame
  const spacing = Math.max(dims.w * 0.25, 240) // 320 / 1280

  const { scrollYProgress: p } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  /* header: fade in centred, then rise to the top */
  const headerTop = useTransform(p, (v) => lerp(v, P.headerUp, [dims.panelH / 2 - dims.headerH / 2, 56]))
  const headerOpacity = useTransform(p, (v) => lerp(v, P.introIn, [0, 1]))
  const bodyOpacity = useTransform(p, (v) => lerp(v, P.headerUp, [1, 0.72]))

  /* lines & marker */
  const tlOpacity = useTransform(p, (v) => lerp(v, [P.linesIn[0], P.linesIn[0] + 0.06], [0, 1]))
  const hLine = useTransform(p, (v) => lerp(v, P.linesIn, [0, 1]))
  const vLine = useTransform(p, (v) => lerp(v, [P.linesIn[0] + 0.05, P.linesIn[1] + 0.03], [0, 1]))
  const markerScale = useTransform(p, (v) => lerp(v, [P.linesIn[0] + 0.08, P.linesIn[1]], [0, 1]))
  const labelOpacity = useTransform(p, (v) => lerp(v, [P.linesIn[1] - 0.04, P.linesIn[1] + 0.04], [0, 1]))

  /* the moving pathway */
  const offset = useTransform(p, (v) => dwell(lerp(v, P.track, [0, N - 1])))
  const [active, setActive] = useState(0)
  const [showDetail, setShowDetail] = useState(false)
  useMotionValueEvent(offset, 'change', (o) => {
    const a = Math.round(o)
    if (a !== active) setActive(a)
  })
  useMotionValueEvent(p, 'change', (v) => {
    const s = v > P.track[0] - 0.02
    if (s !== showDetail) setShowDetail(s)
  })

  const jumpTo = (i) => {
    const el = sectionRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const range = el.offsetHeight - window.innerHeight
    const target = P.track[0] + (P.track[1] - P.track[0]) * (i / (N - 1))
    window.scrollTo({ top: top + target * range, behavior: 'smooth' })
  }

  const step = STEPS[active]

  return (
    <section className="hiw" ref={sectionRef} aria-label={data.eyebrow}>
      <div className="hiw__sticky">
        <div className="hiw__panel bleed" ref={panelRef}>
          <div className="container hiw__container" ref={containerRef}>
            {/* Header — centred intro that rises */}
            <motion.div className="hiw__header" ref={headerRef} style={{ top: headerTop, opacity: headerOpacity }}>
              <p className="eyebrow">{data.eyebrow}</p>
              <h2 className="h2">
                {data.title.split('\n').map((l, i) => (
                  <span key={i} className="hiw__line">
                    {l}
                  </span>
                ))}
              </h2>
              <motion.p className="body hiw__intro" style={{ opacity: bodyOpacity }}>
                {data.body}
              </motion.p>
            </motion.div>

            {/* Timeline */}
            <motion.div className="hiw__tl" style={{ opacity: tlOpacity, '--marker-x': `${markerX}px` }}>
              {/* horizontal pathway line */}
              <motion.div className="hiw__hline hiw__hline--before" style={{ scaleX: hLine }} />
              <motion.div className="hiw__hline hiw__hline--after" style={{ scaleX: hLine }} />
              {/* vertical entry line */}
              <motion.div className="hiw__vline hiw__vline--up" style={{ scaleY: vLine }} />
              <motion.div className="hiw__vline hiw__vline--down" style={{ scaleY: vLine }} />
              {/* entry-point label */}
              <motion.div className="hiw__entry" style={{ opacity: labelOpacity }}>
                <span className="hiw__tick" />
                <span className="eyebrow">{data.marker}</span>
              </motion.div>

              {/* fixed marker */}
              <motion.div className="hiw__marker" style={{ scale: markerScale }} aria-hidden="true">
                <span className="hiw__diamond hiw__diamond--active" />
              </motion.div>

              {/* moving nodes */}
              {STEPS.map((s, i) => (
                <Node key={s.id} i={i} step={s} offset={offset} markerX={markerX} spacing={spacing} active={active === i} onJump={() => jumpTo(i)} opacity={labelOpacity} />
              ))}

              {/* detail */}
              <div className="hiw__detail">
                <AnimatePresence mode="wait">
                  {showDetail && (
                    <motion.div
                      key={step.id}
                      className="hiw__detail-inner"
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14, transition: { duration: 0.28, ease } }}
                      transition={{ duration: 0.55, ease }}
                    >
                      <h3 className="h3">{step.title}</h3>
                      <p className="hiw__desc">{step.body}</p>
                      <Button variant="outline" size="lg" icon>
                        {step.cta}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* overview / progress */}
              <motion.nav className="hiw__progress" aria-label="Resources overview" style={{ opacity: labelOpacity }}>
                <span className="hiw__count">
                  {String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                </span>
                <ul>
                  {STEPS.map((s, i) => (
                    <li key={s.id}>
                      <button type="button" className={`hiw__dot ${i === active ? 'is-active' : ''} ${i < active ? 'is-past' : ''}`} onClick={() => jumpTo(i)} aria-label={`Go to ${s.name}`} aria-current={i === active ? 'step' : undefined}>
                        <span />
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Node({ i, step, offset, markerX, spacing, active, onJump, opacity }) {
  const x = useTransform(offset, (o) => markerX + (i - o) * spacing)
  return (
    <motion.div className={`hiw__node ${active ? 'is-active' : ''}`} style={{ x, opacity }}>
      <motion.span
        className="hiw__diamond"
        animate={{ backgroundColor: active ? 'var(--teal)' : 'var(--mist)', scale: active ? 1 : 0.86 }}
        transition={{ duration: 0.45, ease }}
        aria-hidden="true"
      />
      <button type="button" className="hiw__name" onClick={onJump} aria-pressed={active}>
        {step.name}
      </button>
    </motion.div>
  )
}

/* ------------------------------------------------------------------------ */

function StackedVersion() {
  return (
    <section className="section hiw hiw--stacked" aria-label={data.eyebrow}>
      <div className="hiw__panel bleed">
        <div className="container">
          <Reveal className="sec-head sec-head--center">
            <p className="eyebrow">{data.eyebrow}</p>
            <h2 className="h2">{data.title.replace('\n', ' ')}</h2>
            <p className="body lead-in">{data.body}</p>
          </Reveal>
          <div className="hiw__stack-list">
            <p className="eyebrow hiw__stack-marker">{data.marker}</p>
            {STEPS.map((s, i) => (
              <Reveal as="article" key={s.id} className="hiw__stack-item" delay={i * 0.05}>
                <div className="hiw__stack-rail" aria-hidden="true">
                  <span className="hiw__diamond hiw__diamond--active" />
                </div>
                <div className="hiw__stack-body">
                  <p className="hiw__stack-name">{s.name}</p>
                  <h3 className="h3">{s.title}</h3>
                  <p className="hiw__desc">{s.body}</p>
                  <Button variant="outline" size="md" icon>
                    {s.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
