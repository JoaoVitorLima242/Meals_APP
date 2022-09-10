import { 
    View,
    Text,
    Image
} from "react-native"

// Components
import MealLittleDetails from "../components/MealLittleDetails"
// Helpers
import { getMealsById } from "../helpers/meals"

const MealDetailsScreen = ({ route }) => {
    const {
        title,
        imageUrl,
        affordability,
        complexity,
        duration,
        ingredients,
        steps
    } = getMealsById(route.params.mealId)

    return (
        <View>
            <Image source={{uri: imageUrl}}/>
            <Text>{title}</Text>
            <MealLittleDetails
                affordability={affordability}
                complexity={complexity}
                duration={duration}
            />
            <Text>Ingredients</Text>
            {ingredients.map(ingredient => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {steps.map(step => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    )
}

export default MealDetailsScreen