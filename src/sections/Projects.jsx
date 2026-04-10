import styles from './Projects.module.css'
import AwardBadge from '../components/AwardBadge'

const upcoming = [
  {
    title: 'The Revenge of La Llorona',
    year: '2026',
    role: 'Dialogue Editor',
    type: 'Feature Film',
    description: 'Dir. Santiago Menghini',
    imdb: 'https://www.imdb.com/title/tt37897207/',
  },
  {
    title: 'Furious',
    year: '2026',
    role: 'Assistant Sound Editor',
    type: 'TV Series',
    description: 'Dir. Liz Meriweather · Hulu',
    imdb: 'https://www.imdb.com/title/tt36303968/',
  },
  {
    title: 'Matchbox',
    year: '2026',
    role: 'Dialogue Editor / Assistant Sound Editor',
    type: 'Feature Film',
    description: 'Dir. Sam Hargrave · Apple TV+',
    imdb: 'https://www.imdb.com/title/tt28498219/',
  },
]

const released = [
  // --- With posters, sorted by Rotten Tomatoes score (descending) ---
  {
    title: 'Pachinko',
    year: '2024',
    role: 'Dialogue Editor',
    type: 'TV Series · Season 2',
    description: 'Showrunner Soo Hugh · Apple TV+',
    poster: 'https://media.themoviedb.org/t/p/w500/wUTXdmL6oNjhiStGveOaPeuFOYQ.jpg',
    rt: 100,
    imdb: 'https://www.imdb.com/title/tt8888462/',
  },
  {
    title: 'Mr. Scorsese',
    year: '2025',
    role: 'Dialogue Editor',
    type: 'Miniseries',
    description: 'Dir. Rebecca Miller · Apple TV+',
    poster: 'https://media.themoviedb.org/t/p/w500/atok9lbfro3hZxGTlaJZWN0BWRM.jpg',
    rt: 98,
    imdb: 'https://www.imdb.com/title/tt36998986/',
  },
  {
    title: 'Weapons',
    year: '2024 – 2025',
    role: 'Dialogue Editor',
    type: 'Feature Film',
    description: 'Dir. Zach Cregger · Warner Bros.',
    poster: 'https://media.themoviedb.org/t/p/w500/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg',
    rt: 93,
    imdb: 'https://www.imdb.com/title/tt26581740/',
  },
  {
    title: 'Ripley',
    year: '2023 – 2024',
    role: 'Assistant Sound Editor',
    type: 'Limited Series',
    description: 'Dir. Steven Zaillian · Netflix',
    poster: 'https://media.themoviedb.org/t/p/w500/rpSo8z9alultGVTqQ3dkLEyU8xx.jpg',
    rt: 86,
    awards: [
      { type: 'emmy', text: 'Outstanding Sound Editing For A Limited Or Anthology Series, Movie Or Special' },
    ],
    imdb: 'https://www.imdb.com/title/tt11016042/',
  },
  {
    title: 'Kiss of the Spider Woman',
    year: '2024',
    role: 'Dialogue Editor',
    type: 'Feature Film',
    description: 'Dir. Bill Condon',
    poster: 'https://media.themoviedb.org/t/p/w500/nLQcyl6XTu17CfT6g739PbsePDO.jpg',
    rt: 76,
    imdb: 'https://www.imdb.com/title/tt30400277/',
  },
  {
    title: 'Franklin',
    year: '2024',
    role: 'Assistant Sound Editor',
    type: 'Limited Series',
    description: 'Dir. Tim Van Patten · Apple TV+',
    poster: 'https://media.themoviedb.org/t/p/w500/a9YV5QCdg95Zp02rKzkVxLxDtUC.jpg',
    rt: 71,
    imdb: 'https://www.imdb.com/title/tt18351584/',
  },
  {
    title: 'Ezra',
    year: '2024',
    role: 'Dialogue Editor / Assistant Sound Editor',
    type: 'Feature Film',
    description: 'Dir. Tony Goldwyn',
    poster: 'https://media.themoviedb.org/t/p/w500/uXSajviZLZhYUSNL41y1PJ9RisB.jpg',
    rt: 69,
    imdb: 'https://www.imdb.com/title/tt20315818/',
  },
  {
    title: 'She Came to Me',
    year: '2023',
    role: 'Assistant Sound Editor',
    type: 'Feature Film',
    description: 'Dir. Rebecca Miller · Protagonist Pictures',
    poster: 'https://media.themoviedb.org/t/p/w500/2lG18RqCK8qTk7R5jA1L7ZRMWXu.jpg',
    rt: 48,
    imdb: 'https://www.imdb.com/title/tt6689014/',
  },
  {
    title: 'The Parenting',
    year: '2025',
    role: 'Assistant Sound Editor / Editing Room Assistant',
    type: 'Feature Film',
    description: 'Dir. Craig Johnson · Max',
    poster: 'https://media.themoviedb.org/t/p/w500/5lMu14IMuHo0hKYCwCIogt7IioX.jpg',
    rt: 47,
    imdb: 'https://www.imdb.com/title/tt14041896/',
  },
  {
    title: 'Best. Christmas. Ever!',
    year: '2023',
    role: 'Assistant Sound Editor',
    type: 'Feature Film',
    description: 'Dir. Mary Lambert · Netflix',
    poster: 'https://media.themoviedb.org/t/p/w500/yNPgjXeeb7vdNI7AQB5SWkkk6si.jpg',
    rt: 40,
    imdb: 'https://www.imdb.com/title/tt7038762/',
  },
  {
    title: 'Light of the Setting Sun',
    year: '2024',
    role: 'Dialogue Editor',
    type: 'Documentary',
    description: 'Dir. Vicky Du · PBS Independent Lens',
    poster: '/posters/setting-sun.jpg',
    imdb: 'https://www.imdb.com/title/tt31809838/',
  },
  // --- No poster, sorted by year (descending) ---
  {
    title: 'Lightning Bug',
    year: '2025',
    role: 'Dialogue Editor / SFX Editor',
    type: 'Feature Film',
    description: 'Dir. Zane Pais',
  },
  {
    title: 'The Cost of Living',
    year: '2025',
    role: 'Supervising Sound Editor / Re-Recording Mixer',
    type: 'Short Film',
    description: 'Dir. Gabriel Josephs',
  },
  {
    title: 'The Gift',
    year: '2024',
    role: 'Sound Effects Editor',
    type: 'Short Film',
    description: 'Dir. Ben Jacoby',
  },
  {
    title: '!ALBUM_FINAL-REAL',
    year: '2024',
    role: 'Sound Designer / Dialogue Editor / Re-Recording Mixer',
    type: 'Short Film',
    description: 'Dir. Patrick Linehan',
  },
]

function CreditCard({ credit }) {
  const inner = (
    <div className={styles.cardInner}>
      {credit.poster && (
        <div className={styles.posterWrap}>
          {/* Inner div clips the zoom effect without clipping the badge tooltip */}
          <div className={styles.posterClip}>
            <img
              src={credit.poster}
              alt={`${credit.title} poster`}
              className={styles.poster}
            />
          </div>
          {credit.awards && credit.awards.length > 0 && (
            <div className={styles.badgeTopRight}>
              {credit.awards.map((award, i) => (
                <AwardBadge key={i} type={award.type} text={award.text} />
              ))}
            </div>
          )}
        </div>
      )}
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <span className={styles.type}>{credit.type}</span>
          <span className={styles.year}>{credit.year}</span>
        </div>
        <h3 className={styles.title}>{credit.title}</h3>
        <p className={styles.role}>{credit.role}</p>
        <p className={styles.description}>{credit.description}</p>
      </div>
    </div>
  )

  if (credit.imdb) {
    return (
      <a
        href={credit.imdb}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        aria-label={`View ${credit.title} on IMDb`}
      >
        {inner}
      </a>
    )
  }

  return <div className={styles.card}>{inner}</div>
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Credits</span>
          <h2 className={styles.heading}>Select sound editing experience</h2>
        </div>

        <div className={styles.grid}>
          {released.map((credit) => (
            <CreditCard key={credit.title + credit.year} credit={credit} />
          ))}
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerLabel}>Upcoming</span>
        </div>

        <div className={styles.grid}>
          {upcoming.map((credit) => (
            <CreditCard key={credit.title + credit.year} credit={credit} />
          ))}
        </div>
      </div>
    </section>
  )
}
