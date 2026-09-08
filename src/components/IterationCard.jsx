import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { iteration } from '../data/content.js'

/* Three stacked cards, as drawn — the two behind peek 23–24px above the front card. */
export default function IterationCard() {
  return (
    <section className="section iteration">
      <div className="container">
        <Reveal className="stack">
          <div className="stack__layer stack__layer--back" aria-hidden="true" />
          <div className="stack__layer stack__layer--mid" aria-hidden="true" />
          <article className="stack__front">
            <div className="stack__text">
              <p className="eyebrow">{iteration.eyebrow}</p>
              <h2 className="h3">{iteration.title}</h2>
              <p className="body">{iteration.body}</p>
              <Button variant="white" size="lg" icon teal>
                {iteration.cta}
              </Button>
            </div>
            <figure className="stack__figure">
              <img src={iteration.image} alt="Three connected floor plans progressing from outline to completed room layout." loading="lazy" width="1300" height="975" />
            </figure>
            <span className="grain grain--soft" aria-hidden="true" />
          </article>
        </Reveal>
      </div>
    </section>
  )
}
