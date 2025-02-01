import { create } from 'zustand'
import { fetchPassportsAPI } from './product.service'

type Passport = any

type PassportStore = {
  passports: Passport[]
  loading: boolean
  error: string | null
  fetchPassports: () => Promise<void>
}

export const usePassportStore = create<PassportStore>((set) => ({
  passports: [],
  loading: false,
  error: null,

  fetchPassports: async () => {
    set({ loading: true, error: null })
    try {
      const passports = await fetchPassportsAPI()
      set({ passports, loading: false })
    } catch (error) {
      set({ error: 'Failed to load product passports', loading: false })
    }
  },
}))
