'use client'

import { configureStore } from "@reduxjs/toolkit"
import { movieApi } from "./services/movieApi"

import { cartReducer } from "./features/cart"
import { filmsReducer } from './features/films'
import { filterReducer } from "./features/filters"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        films: filmsReducer,
        filters: filterReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch