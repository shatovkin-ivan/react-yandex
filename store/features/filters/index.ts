import { createSlice } from '@reduxjs/toolkit'

interface FiltersState {
  activeName?: string | undefined,
  activeGenre?: string | undefined,
  activeCinema?: string | undefined,
}

const initialState: FiltersState = {}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getFilters: (state, { payload }) => {
      state.activeName = payload.activeName
      state.activeGenre = payload.activeGenre
      state.activeCinema = payload.activeCinema
    },
  }
})

export const filterReducer = filterSlice.reducer
export const filterActions  = filterSlice.actions