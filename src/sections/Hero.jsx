import styles from './Hero.module.css'

const IMDB_URL = 'https://www.imdb.com/name/nm14477749/'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Sound Editor · MPEG</p>
        <h1 className={styles.name}>Jake P. O'Brien</h1>
        <p className={styles.role}>Supervising Sound Editor | Dialogue Editor</p>
        <p className={styles.tagline}>
          Shaping performance and presence through sound — for film, television, and everything in between.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View Credits
          </a>
          <a
            href={IMDB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            IMDb Profile ↗
          </a>
        </div>
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
