import Reveal from './Reveal.jsx'
import { Plus, ArrowUpRight } from './Icons.jsx'
import { faq } from '../data/content.js'

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__main">
          <Reveal>
            <h2 className="h2">{faq.title}</h2>
          </Reveal>
          <Reveal as="ul" className="rows faq__list" delay={0.1}>
            {faq.items.map((q) => (
              <li key={q}>
                <button type="button" className="row row--faq" aria-expanded="false">
                  <span className="faq__q">{q}</span>
                  <Plus className="faq__plus" />
                </button>
              </li>
            ))}
          </Reveal>
        </div>
        <Reveal className="faq__aside" delay={0.15}>
          <h2 className="h4">{faq.contactTitle}</h2>
          <ul className="faq__contacts">
            {faq.contacts.map((c) => (
              <li key={c.title}>
                <a href="#" className="faq__contact">
                  <span className="faq__contact-head">
                    <span className="faq__contact-title">{c.title}</span>
                    <ArrowUpRight className="faq__contact-arrow" />
                  </span>
                  <span className="faq__contact-body">{c.body}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
