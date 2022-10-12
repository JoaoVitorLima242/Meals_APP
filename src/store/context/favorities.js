import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    favoriteMeals: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

const FavoritesProvider = ({children}) => {
    const [favoriteMeals, setfavoriteMeals] = useState([])

    const addFavorite = (id) => {
        setfavoriteMeals(state => [...state, id])    
    }

    const removeFavorite = (id) => {
        setfavoriteMeals(state => state.filter(mealsId => mealsId !== id))    
    }

    const value = {
        favoriteMeals,
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