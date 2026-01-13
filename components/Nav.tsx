import { GithubIcon, xIcon, SunIcon, MoonIcon } from './icons'
import styles from '../styles/Nav.module.scss'
import { memo } from 'react'
import { useThemeIndex } from '../hooks/useThemeIndex'

export const Nav = memo(function Nav() {
  const [themeIndex, setThemeIndex] = useThemeIndex()
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

      <button
        onClick={() => setThemeIndex(themeIndex === 0 ? 1 : 0)}
        className={styles.themeToggle}
        aria-label="Toggle Theme"
      >
        {themeIndex === 0 ? SunIcon : MoonIcon}
      </button>

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
