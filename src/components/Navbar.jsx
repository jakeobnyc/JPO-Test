import styles from './Navbar.module.css'

// TODO: replace IMDB_URL with your actual IMDB profile URL
const IMDB_URL = 'https://www.imdb.com/name/nm14477749/'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>JPO</span>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#projects">Credits</a>
          <a href="#contact">Contact</a>
          <a
            href={IMDB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imdb}
          >
            IMDb
          </a>
        </div>
      </div>
    </nav>
  )
}
