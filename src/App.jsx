import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import PWHLTeaser from './sections/PWHLTeaser'
import Contact from './sections/Contact'
import Toolbox from './sections/Toolbox'
import PWHL from './sections/PWHL'

function getPage() {
  if (window.location.hash === '#/toolbox') return 'toolbox'
  if (window.location.hash === '#/pwhl') return 'pwhl'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHashChange = () => setPage(getPage())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Navbar page={page} />
      <main>
        {page === 'toolbox' ? (
          <Toolbox />
        ) : page === 'pwhl' ? (
          <PWHL />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <PWHLTeaser />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}
