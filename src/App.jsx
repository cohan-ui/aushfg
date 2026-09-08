import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import EntryCards from './components/EntryCards.jsx'
import IterationCard from './components/IterationCard.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Resources from './components/Resources.jsx'
import News from './components/News.jsx'
import UnderReview from './components/UnderReview.jsx'
import Subscribe from './components/Subscribe.jsx'
import About from './components/About.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <EntryCards />
        <IterationCard />
        <HowItWorks />
        <Resources />
        <div className="band">
          <News />
          <UnderReview />
        </div>
        <Subscribe />
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
