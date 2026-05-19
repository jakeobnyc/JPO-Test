import styles from './PWHLTeaser.module.css'

export default function PWHLTeaser() {
  return (
    <section id="pwhl" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>In Development</span>
          <h2 className={styles.heading}>
            Also in the works — <em>PWHL Fantasy</em>
          </h2>
          <p className={styles.kicker}>
            A weekly head-to-head fantasy league for the Professional Women's Hockey League.
            Live drafting, full commissioner controls, real PWHL data — built from scratch.
          </p>
        </div>

        <a href="#/pwhl" className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/PWHL/dashboard.png" alt="PWHL Fantasy dashboard preview" />
            <span className={styles.badge}>Coming Soon</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardMeta}>
              <span className={styles.metaItem}>React · Flask · Supabase</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>Q3 2026</span>
            </div>
            <h3 className={styles.cardTitle}>See the preview</h3>
            <p className={styles.cardDesc}>
              Four screens, a feature tour, and a look at where the project is headed.
            </p>
            <span className={styles.cardCta}>Open the preview →</span>
          </div>
        </a>
      </div>
    </section>
  )
}
