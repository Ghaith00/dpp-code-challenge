import { create } from 'zustand'
import { fetchPassportsAPI } from './product.service'

type Passport = any

type PassportStore = {
  passport: Passport
  loading: boolean
  error: string | null
  fetchPassport: (id: string) => Promise<void>
}

export const usePassportStore = create<PassportStore>((set) => ({
  passport: [],
  loading: false,
  error: null,

  fetchPassport: async (id: string) => {
    set({ loading: true, error: null })
    try {
      const passport = await fetchPassportsAPI(id)
      set({ passport, loading: false })
    } catch (error) {
      set({ error: 'Failed to load product passport', loading: false })
    }
  },
}))
