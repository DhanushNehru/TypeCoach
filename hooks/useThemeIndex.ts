import { useState } from 'react'

// bar color for each theme
// ideally it should be the same as background color - but some colors are not accepted by the browser
// in that case - pick something different

// if nothing works - set bg anyway

export const themes = [
  { name: 'Dark', bar: '#0a0b1e' }, // 0
  { name: 'Light', bar: '#f0f2f5' } // 1
]

function getInitialTheme() {
  if (typeof window === 'undefined') return 0

  const valueFromLocalStorage = localStorage.getItem('theme')
  if (!valueFromLocalStorage) return 0

  const index = Number(valueFromLocalStorage)

  // if something weird is set - fix it
  if (typeof index !== 'number' || isNaN(index) || !index) {
    localStorage.setItem('theme', '0') // fix it if wrong
    return 0
  }

  return index
}

function applyTheme(themeIndex: number) {
  // update the theme for the page
  document.body.setAttribute('data-theme', themeIndex + '')

  // update meta theme color for address bar
  const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement
  meta.setAttribute('content', themes[themeIndex].bar)

  // save theme in local storage and state
  localStorage.setItem('theme', themeIndex + '')
}

export function useThemeIndex() {
  const [themeIndex, setThemeIndex] = useState(getInitialTheme)

  function _setThemeIndex(i: number) {
    setThemeIndex(i)
    applyTheme(i)
  }

  return [themeIndex, _setThemeIndex] as const
}

if (typeof window !== 'undefined') {
  const i = getInitialTheme()
  applyTheme(i)
}
