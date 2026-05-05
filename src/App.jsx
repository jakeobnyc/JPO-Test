import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Toolbox from './sections/Toolbox'

function getPage() {
  return window.location.hash === '#/toolbox' ? 'toolbox' : 'home'
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
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}
