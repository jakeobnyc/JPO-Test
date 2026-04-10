import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>About</span>
          <h2 className={styles.heading}>The ear behind the edit</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              I'm a freelance sound editor based in Brooklyn, NY, and a member of MPEG.
              I specialize in dialogue editing, ADR and loop group editing, and assistant
              sound editing, with additional experience in sound design.
            </p>
            <p>
              My work spans major studio features, prestige streaming series, and
              independent shorts. Recent credits include <em>Ripley</em> (Netflix),
              <em> Weapons</em> (Warner Bros.), <em>Pachinko</em> (Apple TV+),
              and <em>Kiss of the Spider Woman</em>.
            </p>
          </div>
          <div className={styles.photoWrap}>
            <img
              src="/jake-at-work.jpg"
              alt="Jake O'Brien at work"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
