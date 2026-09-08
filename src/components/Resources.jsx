import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'
import { resources } from '../data/content.js'

export default function Resources() {
  return (
    <section className="section resources" id="resources">
      <div className="container resources__grid">
        <Reveal className="resources__intro">
          <div className="sec-head">
            <p className="eyebrow">{resources.eyebrow}</p>
            <h2 className="h2">{resources.title}</h2>
            <p className="body lead-in">{resources.body}</p>
          </div>
          <div className="resources__supporting">
            <h3 className="lead resources__supporting-title">{resources.supportingTitle}</h3>
            <ul className="resources__chips">
              {resources.supporting.map((s) => (
                <li key={s}>
                  <a className="chip" href="#">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal as="ul" className="rows resources__list" delay={0.1}>
          {resources.items.map((item) => (
            <li key={item.title}>
              <a className="row" href="#">
                <span className="row__main">
                  <span className="row__title">{item.title}</span>
                  {item.tag && <span className="tag tag--outline">{item.tag.toUpperCase()}</span>}
                </span>
                <ArrowUpRight className="row__arrow" />
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
