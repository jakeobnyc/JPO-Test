import styles from './Contact.module.css'

const links = [
  {
    label: 'Email',
    href: 'mailto:jakeobnyc@gmail.com',
    display: 'jakeobnyc@gmail.com',
  },
  {
    label: 'IMDb',
    href: 'https://www.imdb.com/name/nm14477749/',
    display: 'imdb.com/name/nm14477749',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jaketheirishman',
    display: '@jaketheirishman',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jake-obrien-nyc/',
    display: 'linkedin.com/in/jake-obrien-nyc',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Contact</span>
          <p className={styles.sub}>
            Available for features, episodic, and shorts. Based in Brooklyn, NY.
          </p>
        </div>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.label} className={styles.item}>
              <span className={styles.linkLabel}>{link.label}</span>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.link}
              >
                {link.display}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.footer}>
          &copy; {new Date().getFullYear()} Jake Patrick O'Brien · MPEG. All rights reserved.
        </p>
      </div>
    </section>
  )
}
