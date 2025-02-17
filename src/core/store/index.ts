// Global Store
import { create } from 'zustand'

type DarkModeStore = {
    isDarkMode: boolean
    setDarkMode: (value: boolean) => void
}

export const useDarkMode = create<DarkModeStore>((set) => ({
    isDarkMode: true,
    setDarkMode: (value: boolean) => {
        set({ isDarkMode:  value })
    }
}))
