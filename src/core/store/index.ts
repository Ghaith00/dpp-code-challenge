// Global Store
import { create } from 'zustand'

type DarkModeStore = {
    isDarkMode: boolean
    setDarkMode: (value: boolean) => void
}

export const useDarkMode = create<DarkModeStore>((set) => ({
    isDarkMode: false,
    setDarkMode: (value: boolean) => {
        set({ isDarkMode:  value })
    }
}))
