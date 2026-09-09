import { useLayoutEffect, useRef, useState } from 'react'
import { Logo } from './Icons.jsx'
import Button from './Button.jsx'
import { footer } from '../data/content.js'

/**
 * Reveal footer: the footer is fixed to the viewport bottom behind the page,
 * and a clip-path'd placeholder of matching height in normal flow lets it
 * show through as the last section scrolls up off it.
 */
export default function Footer() {
  const inner = useRef(null)
  const [h, setH] = useState(0)
  useLayoutEffect(() => {
    const el = inner.current
    if (!el) return
    const ro = new ResizeObserver(() => setH(el.offsetHeight))
    ro.observe(el)
    setH(el.offsetHeight)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="footer-reveal" style={{ height: h || undefined }}>
    <footer className="footer" ref={inner}>
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo height={28} className="footer__logo" />
            <p className="footer__name">{footer.name}</p>
            <p className="footer__intro">{footer.intro}</p>
          </div>
          <nav className="footer__cols" aria-label="Footer">
            {footer.columns.map((col) => (
              <div key={col.title} className="footer__col">
                <h3 className="footer__col-title">{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="footer__link">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__signpost">
          <div>
            <p className="footer__signpost-title">{footer.signpost.title}</p>
            <p className="footer__signpost-body">{footer.signpost.body}</p>
          </div>
          <Button variant="primary" href="#subscribe">
            {footer.signpost.cta}
          </Button>
        </div>

        <div className="footer__bottom">
          <p className="footer__custodian">{footer.custodian}</p>
          <div className="footer__utility">
            <span>{footer.copyright}</span>
            <ul>
              {footer.utility.map((u) => (
                <li key={u}>
                  <a href="#">{u}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
