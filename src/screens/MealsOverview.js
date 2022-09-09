import { StyleSheet, Text, View } from "react-native"

// Services
import { MEALS } from "../services/data/dummy-data"

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId

    return(
        <View>
            <Text>Meals Overview Screen</Text>
            <Text>{catId}</Text>
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {

    }
})