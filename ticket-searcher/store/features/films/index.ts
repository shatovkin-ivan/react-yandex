import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      const localeData = []

      const genreRu = new Map()

      for (let i = 0; i < payload.length; i++) {
        localeData.push(payload[i])
        switch (payload[i].genre) {
          case 'fantasy':
            genreRu.set('fantasy', 'Фэнтези')
          case 'horror':
          genreRu.set('horror', 'Ужасы')
          case 'action':
            genreRu.set('action', 'Экшен')
          case 'comedy':
            genreRu.set('comedy', 'Комедия')
        }
      }

      for (let i = 0; i < localeData.length; i++) {
        if (genreRu.has(localeData[i].genre)) {
          localeData[i].genre = genreRu.get(localeData[i].genre)
        }
      }
      
      state.push(...localeData)
    },
  }
})

export const filmsReducer = filmsSlice.reducer
export const filmsActions  = filmsSlice.actions