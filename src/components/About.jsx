import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { about } from '../data/content.js'

export default function About() {
  return (
    <section className="section about" id="about">
      <Reveal className="bleed about__panel" y={40} amount={0.15}>
        <div className="about__grid">
          <div className="about__text">
            <p className="eyebrow eyebrow--mint">{about.eyebrow}</p>
            <h2 className="h2">{about.title}</h2>
            <p className="about__body">{about.body}</p>
            <div className="about__actions">
              {about.ctas.map((c) => (
                <Button key={c.label} variant={c.variant} size="md">
                  {c.label}
                </Button>
              ))}
            </div>
          </div>
          <ul className="about__tiles">
            {about.tiles.map((t, i) => (
              <Reveal as="li" key={t.text} className={`glass glass--${t.tone} about__tile`} delay={0.1 + i * 0.08} amount={0.4}>
                <p className="h4">
                  {t.text.split('\n').map((l, j) => (
                    <span key={j} className="about__tile-line">
                      {l}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
