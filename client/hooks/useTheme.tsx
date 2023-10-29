import { useEffect } from 'react'
import { THEME_MODE } from '@/constants'
import { SettingSotre } from '@/store'
import type { Theme } from '@/types'

function useTheme() {
  const [theme, setTheme] = SettingSotre(s => [s.theme, s.setTheme])
  useEffect(() => {
    const mode = localStorage.getItem(THEME_MODE) as Theme
    if (!mode)
      localStorage.setItem(THEME_MODE, theme)
    else
      setTheme(mode)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark')
      root.classList.add('dark')
    else root.classList.remove('dark')

    localStorage.setItem(THEME_MODE, theme)
  }, [theme])
  return { theme, setTheme }
}

export default useTheme
