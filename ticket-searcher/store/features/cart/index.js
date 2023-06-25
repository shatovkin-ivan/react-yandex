import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, { payload }) => {
            const count = state[payload] || 0
            state[payload] = count + 1
        },
        decrement: (state, { payload }) => {
            const count = state[payload]
            if (!count) {
                return;
            }
            if (count === 1) {
                delete state[payload]
                return;
            }
            state[payload] = count - 1
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions  = cartSlice.actions