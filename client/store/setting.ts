import { create } from 'zustand'
import type { Theme } from '@/types'

interface SettingState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const SettingSotre = create<SettingState>(set => ({
  theme: 'light',
  setTheme: theme => set({ theme }),
}))

export { SettingSotre }
