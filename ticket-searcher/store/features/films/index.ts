import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      state.push(...payload)
    },
  }
})

export const filmsReducer = filmsSlice.reducer
export const filmsActions  = filmsSlice.actions