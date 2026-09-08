import Reveal from './Reveal.jsx'
import { subscribe } from '../data/content.js'

export default function Subscribe() {
  return (
    <section className="section subscribe" id="subscribe">
      <div className="container">
        <Reveal as="article" className="glass glass--green subscribe__card">
          <div className="subscribe__text">
            <h2 className="h3">{subscribe.title}</h2>
            <p className="small">{subscribe.body}</p>
          </div>
          <form className="subscribe__form" onSubmit={(e) => e.preventDefault()}>
            <label className="h5 subscribe__label" htmlFor="subscribe-email">
              {subscribe.label}
            </label>
            <div className="subscribe__controls">
              <div className="input-pill">
                <input id="subscribe-email" type="email" placeholder={subscribe.placeholder} autoComplete="email" />
              </div>
              <button type="submit" className="btn btn--primary subscribe__btn">
                {subscribe.cta}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
