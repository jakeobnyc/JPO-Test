import styles from './AwardBadge.module.css'

function EmmyIcon() {
  return (
    <svg
      viewBox="0 0 44 76"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      aria-hidden="true"
    >
      {/* Left wing — swept blade behind figure */}
      <path
        d="M12 37 C8 27, 3 15, 1 3 C5 9, 11 23, 14 37 Z"
        fill="currentColor"
      />
      {/* Right wing — swept blade behind figure */}
      <path
        d="M30 37 C34 27, 40 15, 43 3 C38 9, 32 23, 28 37 Z"
        fill="currentColor"
      />
      {/* Atomic orb — held up top-right by raised arm */}
      <circle cx="29" cy="9" r="7" fill="currentColor" />
      {/* Orbital ring 1 */}
      <ellipse cx="29" cy="9" rx="7" ry="2.8"
        fill="none" stroke="#0d0d0d" strokeWidth="1.2" />
      {/* Orbital ring 2 (rotated) */}
      <ellipse cx="29" cy="9" rx="7" ry="2.8"
        fill="none" stroke="#0d0d0d" strokeWidth="1.2"
        transform="rotate(60 29 9)" />
      {/* Body — renders over wings */}
      <path
        d="M15 37 C15 30, 18 25, 22 23 C26 25, 29 30, 29 37 C29 46, 26 53, 22 57 C18 53, 15 46, 15 37 Z"
        fill="currentColor"
      />
      {/* Head */}
      <circle cx="22" cy="21" r="3.5" fill="currentColor" />
      {/* Right arm — reaching up to orb */}
      <path
        d="M27 31 C28 24, 29 18, 29 16"
        stroke="currentColor" strokeWidth="2.8"
        fill="none" strokeLinecap="round"
      />
      {/* Base pedestal */}
      <rect x="14" y="58" width="16" height="4" rx="1.5" fill="currentColor" />
      {/* Base disc */}
      <rect x="9" y="62" width="26" height="7" rx="3.5" fill="currentColor" />
      {/* Bottom rim */}
      <rect x="7" y="69" width="30" height="5" rx="2.5" fill="currentColor" />
    </svg>
  )
}

const ICONS = {
  emmy: EmmyIcon,
}

export default function AwardBadge({ type = 'emmy', text }) {
  const Icon = ICONS[type] ?? EmmyIcon
  return (
    <span className={styles.badge}>
      <Icon />
      <span className={styles.tooltip}>{text}</span>
    </span>
  )
}
