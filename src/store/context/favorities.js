import { createContext } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

const FavoritesProvider = ({children}) => {
    return (
        <FavoritesContext.Provider>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider