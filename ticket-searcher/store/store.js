'use client'

import { configureStore } from "@reduxjs/toolkit"
import { movieApi } from "./services/movieApi"

import { cartReducer } from "./features/cart"

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

console.log(store.getState() );