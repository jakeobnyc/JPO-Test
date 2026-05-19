import styles from './Navbar.module.css'

const IMDB_URL = 'https://www.imdb.com/name/nm14477749/'

export default function Navbar({ page }) {
  const isHome = page === 'home'

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#/" className={styles.logo}>JPO</a>
        <div className={styles.links}>
          {isHome ? (
            <>
              <a href="#about">About</a>
              <a href="#projects">Credits</a>
              <a href="#contact">Contact</a>
              <a href="#/pwhl" className={styles.pwhl}>PWHL Fantasy</a>
              <a href="#/toolbox" className={styles.toolbox}>Assistant Toolbox</a>
              <a
                href={IMDB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imdb}
              >
                IMDb
              </a>
            </>
          ) : (
            <>
              <a href="#/" className={styles.backLink}>← Portfolio</a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
