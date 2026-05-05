import styles from './Toolbox.module.css'

const tools = [
  {
    name: 'FileFinder',
    image: '/toolbox/filefinder.png',
    description:
      'Reads a Pro Tools "Offline Files" session text export — or a screenshot of one — and automatically locates each missing file across mounted drives or a specified search directory. Copies all found media to a chosen destination and generates a CSV report. Eliminates the tedious manual process of re-linking offline clips one by one, especially on large sessions with hundreds of missing files.',
  },
  {
    name: 'Duplicate Cleaner',
    image: '/toolbox/duplicatecleaner.png',
    description:
      'Scans a source folder against a destination and identifies duplicate audio files by name and content. Surfaces conflicts clearly before any action is taken, then moves or removes duplicates on confirmation. Keeps session media folders clean and prevents the storage bloat and confusion that accumulates across long projects with multiple turnovers.',
  },
  {
    name: 'MetadataHelper',
    image: '/toolbox/metadatahelper.png',
    description:
      'Given an AAF and the accompanying Avid sync media folder, MetadataHelper parses the AAF, infers Scene, Take, and Soundroll metadata from clip names where it is absent, matches clips to their media files by MobID, and writes corrected metadata into copies of those files — originals are never touched. Directly enables Pro Tools\' guide track field-recorder expansion, eliminating the need for manual EDILOAD workarounds on every session.',
  },
  {
    name: 'Timecode Updater',
    image: '/toolbox/timecodeupdater.png',
    description:
      'Ingests an Avid changelist (.txt) or two CMX 3600 EDLs, computes frame-accurate offsets across six frame rates, and outputs a corrected timecode table. Paste rows directly from a music or sound notes spreadsheet and all columns are preserved. Solves the painful problem of stale timecodes in supervisor notes after a picture re-cut — a task that would otherwise require updating every entry by hand.',
  },
]

export default function Toolbox() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        <header className={styles.header}>
          <span className={styles.label}>Tools</span>
          <h1 className={styles.title}>The JPO Assistant Editor Toolbox</h1>
          <p className={styles.subtitle}>Designed and Created by Jake O'Brien</p>
        </header>

        <div className={styles.grid}>
          {tools.map((tool) => (
            <article key={tool.name} className={styles.card}>
              <div className={styles.screenshotWrap}>
                <img
                  src={tool.image}
                  alt={`${tool.name} interface`}
                  className={styles.screenshot}
                />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.toolName}>{tool.name}</h2>
                <p className={styles.toolDesc}>{tool.description}</p>
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>
            Interested in using any of these tools?{' '}
            <a href="mailto:jakeobnyc@gmail.com" className={styles.footerLink}>
              Get in touch
            </a>{' '}
            — I'm happy to share them with fellow assistants and post-production teams.
          </p>
        </footer>

      </div>
    </div>
  )
}
