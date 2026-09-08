import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { news } from '../data/content.js'

export default function News() {
  return (
    <section className="section news" id="news">
      <div className="container news__grid">
        <div className="news__col">
          <Reveal className="sec-head">
            <p className="eyebrow">{news.eyebrow}</p>
            <h2 className="h2">{news.title}</h2>
          </Reveal>
          <ul className="news__list">
            {news.items.map((n, i) => (
              <Reveal as="li" key={n.title} className="news__item" delay={0.08 + i * 0.07}>
                <a href="#" className="news__link">
                  <span className="news__date">
                    <span className="news__rule news__rule--mint" />
                    {n.date}
                  </span>
                  <span className="news__body">
                    <span className="news__kind">
                      <span className="news__rule news__rule--teal" />
                      {n.kind}
                    </span>
                    <span className="news__title">{n.title}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.35}>
            <Button variant="outline" size="lg" icon>
              {news.cta}
            </Button>
          </Reveal>
        </div>
        <Reveal className="news__figure" delay={0.15} y={40}>
          <img src={news.image} alt="Illustration of guideline documents, an alert bell and an update cycle icon." loading="lazy" width="1300" height="1304" />
        </Reveal>
      </div>
    </section>
  )
}
