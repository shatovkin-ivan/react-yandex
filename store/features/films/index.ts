import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilmInterface } from '../../../types/types'

const initialState: FilmInterface[] | [] = []

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<FilmInterface[]> ) => {
      console.log(action.payload);
      
      const localeData: FilmInterface[] | [] = []

      const genreRu = new Map()

      for (let i = 0; i < action.payload.length; i++) {
        localeData.push(action.payload[i])
        switch (action.payload[i].genre) {
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