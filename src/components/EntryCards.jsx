import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { entryCards } from '../data/content.js'

export default function EntryCards() {
  return (
    <section className="section entry">
      <div className="container entry__grid">
        {entryCards.map((card, i) => (
          <Reveal
            as="article"
            key={card.id}
            id={card.id}
            className={`glass glass--${card.tone} entry__card ${card.wide ? 'entry__card--wide' : ''}`}
            delay={i * 0.1}
          >
            <div className="entry__content">
              <h2 className="h2">{card.title}</h2>
              <p className="lead">{card.body}</p>
              <Button variant="white" size="md" icon>
                {card.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
