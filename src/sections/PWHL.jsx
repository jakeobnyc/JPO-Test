import styles from './PWHL.module.css'

const features = [
  {
    label: 'I · The Desk',
    title: 'A weekly story, told at a glance',
    description: `The Desk is the home dashboard — a managed editorial spread that reframes the week as a narrative.
      A short story-of-the-week, your live points, the head-to-head matchup with a win probability,
      injuries on your roster, and the league's three stars all sit on the same page.
      Tonight's slate streams live scores in the corner.`,
    bullets: [
      'Live week points with day-by-day trend',
      'Matchup vs. opponent with projected totals',
      'Injury feed surfaced from PWHL data',
      'Stars of the week — top three fantasy performers',
    ],
    image: '/PWHL/dashboard.png',
    alt: 'The Desk dashboard with live week points, matchup, injuries and stars of the week.',
    side: 'right',
  },
  {
    label: 'II · Available Talent',
    title: 'The full player pool, sortable and searchable',
    description: `Every PWHL skater and goaltender lives in one table — sorted by fantasy points per game by default,
      filterable by position, searchable by name. Each row carries the stats that matter for fantasy:
      games played, goals, assists, PIM, plus/minus, and ADP from the league's prior drafts.`,
    bullets: [
      '~400 real PWHL players, refreshed nightly via HockeyTech',
      'Default sort: fantasy points per game',
      'Roster panel tracks remaining slots at a glance',
      'One-click queue and draft from any row',
    ],
    image: '/PWHL/talent.png',
    alt: 'Available Talent page showing the full player pool with roster summary.',
    side: 'left',
  },
  {
    label: 'III · The Live Draft',
    title: 'Snake drafts, run live',
    description: `Twelve rounds, eight teams, snake order. The Draft room shows the round, the overall pick,
      a horizontally scrolling board of recent picks, and a prominent countdown clock when you're on the clock.
      The full player pool sits directly below the board so a pick is always one click away.`,
    bullets: [
      'Live timer with auto-pick fallback on expiry',
      'Scrollable pick board with your team highlighted',
      'Roster slot tracker — see what positions you still need',
      'Draft history persists for future ADP calculation',
    ],
    image: '/PWHL/draft.png',
    alt: 'Live snake draft room with timer, pick board and available talent.',
    side: 'right',
  },
  {
    label: 'IV · The Commissioner\'s Desk',
    title: 'Every rule, in the commissioner\'s hands',
    description: `League settings are a first-class page, not a buried form. Rules of the House lays out
      identity, scoring weights, roster shape, draft mechanics, trade rules, and waivers as a
      long-form editorial document — each section editable inline by the commissioner.
      Changes save as drafts and publish atomically.`,
    bullets: [
      'Inline editing for every league setting',
      'Draft / publish workflow — all changes staged before going live',
      'Custom scoring weights per stat category',
      'Commissioner transfer with one click',
    ],
    image: '/PWHL/rules.png',
    alt: 'Rules of the House page — the commissioner settings spread.',
    side: 'left',
  },
]

export default function PWHL() {
  return (
    <div className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Coming Soon · Q3 2026</span>
          <h1 className={styles.title}>
            <em>PWHL</em> Fantasy
          </h1>
          <p className={styles.subtitle}>
            A weekly head-to-head fantasy league for the Professional Women's Hockey League —
            with a live snake draft, full commissioner controls, and real PWHL data.
          </p>
          <div className={styles.metaRow}>
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>React · Flask · Supabase</span>
            </div>
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Format</span>
              <span className={styles.metaValue}>Head-to-head · 8 teams · 12 rounds</span>
            </div>
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Data</span>
              <span className={styles.metaValue}>HockeyTech live feed</span>
            </div>
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Status</span>
              <span className={`${styles.metaValue} ${styles.statusValue}`}>In development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <span className={styles.sectionLabel}>About the project</span>
          <p className={styles.aboutLead}>
            The PWHL is one of the fastest-growing pro leagues in North America — but there's no real
            fantasy hockey product built around it. This is that product, from the data ingestion up.
          </p>
          <p className={styles.aboutBody}>
            The app pulls live boxscores from the PWHL's HockeyTech feed, normalizes them into a
            Supabase Postgres database, runs them through a deterministic scoring engine, and renders
            the result through an editorial UI built in React. The same scoring code runs on the client
            for live mid-game projections and on the server when the week is finalized — so the
            projection you saw at puck-drop is the score you settle on.
          </p>
        </div>
      </section>

      {/* ── Feature tour ─────────────────────────────────────────── */}
      <section className={styles.tour}>
        <div className={styles.tourHeader}>
          <span className={styles.sectionLabel}>The Tour</span>
          <h2 className={styles.tourHeading}>Four pages, four stories</h2>
        </div>

        {features.map((f) => (
          <article
            key={f.label}
            className={`${styles.feature} ${f.side === 'left' ? styles.featureLeft : ''}`}
          >
            <div className={styles.featureImage}>
              <img src={f.image} alt={f.alt} loading="lazy" />
            </div>
            <div className={styles.featureCopy}>
              <span className={styles.featureLabel}>{f.label}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.description}</p>
              <ul className={styles.featureList}>
                {f.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* ── Outro ────────────────────────────────────────────────── */}
      <section className={styles.outro}>
        <div className={styles.outroInner}>
          <p className={styles.outroLead}>
            Built and designed by Jake O'Brien. Launching for the 2026–27 PWHL season.
          </p>
          <a href="#/" className={styles.backLink}>← Back to portfolio</a>
        </div>
      </section>
    </div>
  )
}
