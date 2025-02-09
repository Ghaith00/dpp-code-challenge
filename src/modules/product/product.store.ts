import { create } from 'zustand'
import { fetchPassportsAPI } from './product.service'
import { ProductPassportResponse, RootProductPassport } from './types'

type PassportStore = {
  passport: ProductPassportResponse
  loading: boolean
  error: string | null
  fetchPassport: (id: string | undefined) => Promise<ProductPassportResponse | undefined>
}

export const usePassportStore = create<PassportStore>((set) => ({
  passport: [],
  loading: false,
  error: null,

  fetchPassport: async (id) => {
    set({ loading: true, error: null })
    try {
      if (!id) throw Error('No ID provided')
      const passport = await fetchPassportsAPI(id)
      set({ passport, loading: false })
      return passport
    } catch (error) {
      console.error(error)
      set({ error: 'Failed to load product passport', loading: false })
    }
  },
}))

type SelectedContentStore = {
  selected: RootProductPassport | null
  setSelected: (selected: RootProductPassport) => void
}

export const useSelectedContent = create<SelectedContentStore>((set) => ({
  selected: null,
  setSelected: (selected: RootProductPassport) => {
    set({ selected: selected })
  },
}))
