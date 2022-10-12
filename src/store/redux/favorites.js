import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            const { ids } = state
            const { id } = action.payload

            ids.push(id)
        },
        removeFavorite: (state, action) => {
            const { ids } = state
            const { id } = action.payload

            ids.splice(ids.indexOf(id), 1)
        }
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite
export const removeFavorite = favoritesSlice.actions.removeFavorite

export default favoritesSlice.reducer