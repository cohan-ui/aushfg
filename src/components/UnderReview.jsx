import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { ArrowUpRight } from './Icons.jsx'
import { underReview } from '../data/content.js'

export default function UnderReview() {
  return (
    <section className="section review" id="review">
      <div className="container review__inner">
        <Reveal className="sec-head sec-head--center">
          <p className="eyebrow">{underReview.eyebrow}</p>
          <h2 className="h2">{underReview.title}</h2>
        </Reveal>
        <Reveal as="ul" className="rows review__list" delay={0.1}>
          {underReview.items.map((item, i) => (
            <li key={item.title}>
              <a className="row row--review" href="#">
                <span className="row__main">
                  <span className="row__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="row__title">{item.title}</span>
                  <span className={`tag tag--${item.tone}`}>{item.tag}</span>
                </span>
                <ArrowUpRight className="row__arrow" />
              </a>
            </li>
          ))}
        </Reveal>
        <Reveal delay={0.25} className="review__cta">
          <Button variant="outline" size="lg" icon>
            {underReview.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
