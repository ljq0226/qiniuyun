import { create } from 'zustand'

interface LayoutState {
  isFull: boolean
  setISFull: (value: boolean) => void
}

const LayoutSotre = create<LayoutState>(set => ({
  isFull: false,
  setISFull: value => set({ isFull:value }),
}))

export { LayoutSotre }
