import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoritiesMeals: []
    },
    reducers: {
        addFavorite: (state, action) => {
            const { favoritiesMeals } = state
            const { id } = action.payload

            favoritiesMeals.push(id)
        },
        removeFavorite: (state, action) => {
            const { favoritiesMeals } = state
            const { id } = action.payload

            favoritiesMeals.splice(favoritiesMeals.indexOf(id), 1)
        }
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite
export const removeFavorite = favoritesSlice.actions.removeFavorite

export default favoritesSlice.reducer