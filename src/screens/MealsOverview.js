import { FlatList, StyleSheet, Text, View } from "react-native"

// Components
import MealItem from "../components/MealItem"
// Services
import { MEALS } from "../services/data/dummy-data"

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId

    // Problema aqui
    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0
    })

    const renderMealItem = ({ item }) => {
        return <MealItem {...item}/>
    }

    return(
        <View styles={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        margin: 16
    }
})