import { 
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Button
} from "react-native"
import { useLayoutEffect } from "react"
import List from "../components/MealDetails/List"
import Subtitle from "../components/MealDetails/Subtitle"

// Components
import MealLittleDetails from "../components/MealLittleDetails"
// Helpers
import { getMealsById } from "../helpers/meals"

const MealDetailsScreen = ({ route, navigation }) => {
    const {
        title,
        imageUrl,
        affordability,
        complexity,
        duration,
        ingredients,
        steps
    } = getMealsById(route.params.mealId)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="Tab me!" onPress={headerButtonPressHandler} />
            }
        })
    },[navigation, headerButtonPressHandler])

    const headerButtonPressHandler = () => {
        console.log('pressed!')
    }

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <Text style={styles.title}>{title}</Text>
            <MealLittleDetails
                affordability={affordability}
                complexity={complexity}
                duration={duration}
                textStyle={styles.detailsText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List listArray={ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List listArray={steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 35
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff'
    },
    detailsText: {
        color: '#fff'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})