import { motion } from 'motion/react'
import Button from './Button.jsx'
import { Search } from './Icons.jsx'
import { hero } from '../data/content.js'

const ease = [0.22, 1, 0.36, 1]
const item = (d) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease, delay: d },
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <motion.h1 className="display hero__title" {...item(0.05)}>
          {hero.title}
        </motion.h1>

        <motion.div className="hero__actions" {...item(0.35)}>
          <Button variant="primary">Explore the guidelines</Button>
          <Button variant="outline">Learn about AusHFG</Button>
        </motion.div>

        <motion.div className="body hero__body" {...item(0.2)}>
          <p>{hero.body}</p>
          <p>{hero.bodyCta}</p>
        </motion.div>

        <motion.form
          className="hero__search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
          {...item(0.45)}
        >
          <label className="sr-only" htmlFor="hero-search">
            Search AusHFG
          </label>
          <input id="hero-search" type="search" placeholder={hero.searchPlaceholder} />
          <button type="submit" className="hero__search-btn">
            <span className="hero__search-icon" aria-hidden="true">
              <Search />
            </span>
            <span className="hero__search-label">Search</span>
          </button>
        </motion.form>
      </div>

      <motion.figure
        className="bleed hero__figure"
        initial={{ opacity: 0, y: 40, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.5 }}
      >
        <img src={`${import.meta.env.BASE_URL}img/hero-room.jpg`} alt="A single inpatient bedroom with a window to trees, a bed, over-bed table and visitor chairs." width="2400" height="1350" fetchPriority="high" />
        <span className="grain" aria-hidden="true" />
      </motion.figure>
    </section>
  )
}
