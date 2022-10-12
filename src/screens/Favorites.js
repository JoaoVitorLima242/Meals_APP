import { useContext } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import MealsList from "../components/MealsList"
import { MEALS } from "../services/data/dummy-data"
import { FavoritesContext } from "../store/context/favorities"


const FavoritesScreen = () => {
    const {favoritiesMeals} = useContext(FavoritesContext)
    
    const meals = MEALS.filter(meal => favoritiesMeals.includes(meal.id))

    return (
       <MealsList items={meals}/>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });