import { useContext } from "react"

// Components
import MealsList from "../components/MealsList"
// Data
import { MEALS } from "../services/data/dummy-data"
// Context
import { FavoritesContext } from "../store/context/favorities"


const FavoritesScreen = () => {
    const {favoritiesMeals} = useContext(FavoritesContext)
    
    const meals = MEALS.filter(meal => favoritiesMeals.includes(meal.id))

    return (
       <MealsList items={meals}/>
    )
}

export default FavoritesScreen