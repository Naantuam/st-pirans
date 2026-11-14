import TopBar from './components/layout/TopBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Offerings from './components/sections/Offerings.jsx'
import Welcome from './components/sections/Welcome.jsx'
import Stats from './components/sections/Stats.jsx'
import Skills from './components/sections/Skills.jsx'
import Gallery from './components/sections/Gallery.jsx'
import Faq from './components/sections/Faq.jsx'
import CallToAction from './components/sections/CallToAction.jsx'
import WhatsAppButton from './components/ui/WhatsAppButton.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Offerings />
        <Welcome />
        <Stats />
        <Skills />
        <Gallery />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
