import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favoritiesMeals: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

const FavoritesProvider = ({children}) => {
    const [favoritiesMeals, setFavoritesMeals] = useState([])

    const addFavorite = (id) => {
        setFavoritesMeals(state => [...state, id])    
    }

    const removeFavorite = (id) => {
        setFavoritesMeals(state => state.filter(mealsId => mealsId !== id))    
    }

    const value = {
        favoritiesMeals,
        addFavorite,
        removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider