import { useSelector } from "react-redux"
import { StyleSheet, Text, View } from "react-native"

// Components
import MealsList from "../components/MealsList"
// Data
import { MEALS } from "../services/data/dummy-data"

const FavoritesScreen = () => {
    // const {favoriteMeals} = useContext(FavoritesContext)
    const favoriteMeals = useSelector(state => state.favoriteMeals.ids)

    const meals = MEALS.filter(meal => favoriteMeals.includes(meal.id))
    
    if ( meals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You don't have favorities meals yet.</Text>
            </View>
        )
    }

    return (
       <MealsList items={meals}/>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})