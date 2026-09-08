import { useEffect, useState } from 'react'
import { Logo } from './Icons.jsx'
import Button from './Button.jsx'
import { nav } from '../data/content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="AusHFG home">
          <Logo />
        </a>
        <nav className="nav__pill" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="primary" href="#subscribe" className="nav__cta">
          Subscribe for alerts
        </Button>
      </div>
    </header>
  )
}
