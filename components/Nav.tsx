import { GithubIcon, xIcon } from './icons'
import styles from '../styles/Nav.module.scss'
import { memo } from 'react'

export const Nav = memo(function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.appName}>typecoach</div>
      <a
        href="https://github.com/DhanushNehru/typecoach"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
        aria-label="View on Github"
      >
        {GithubIcon}
      </a>

      <a
        href="https://x.com/Dhanush_Nehru"
        target="_blank"
        rel="noreferrer"
        className={styles.x}
        aria-label="X of the creator"
      >
        {xIcon}
      </a>
    </nav>
  )
})
