import { 
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from "react-native"
import { useLayoutEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

// Components
import MealLittleDetails from "../components/MealLittleDetails"
import List from "../components/MealDetails/List"
import Subtitle from "../components/MealDetails/Subtitle"
import IconButton from "../components/IconButton"
// Helpers
import { getMealsById } from "../helpers/meals"
// Store
import { addFavorite } from "../store/redux/favorites"
import { removeFavorite } from "../store/redux/favorites"
// Context
// import { FavoritesContext } from "../store/context/favorities"

const MealDetailsScreen = ({ route, navigation }) => {
    // const {addFavorite, favoriteMeals, removeFavorite} = useContext(FavoritesContext)
    const favoriteMeals = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const {
        mealId
    } = route.params


    const {
        title,
        imageUrl,
        affordability,
        complexity,
        duration,
        ingredients,
        steps
    } = getMealsById(mealId)
    
    const isFavorite = favoriteMeals.includes(mealId)

    const changeFavoriteHandler = () => {
        if(isFavorite) {
            dispatch(removeFavorite({id: mealId}))
        } else {
            dispatch(addFavorite({id: mealId}))
        }
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    onPress={changeFavoriteHandler} 
                    icon={isFavorite ? 'star' : 'star-outline'}
                    color='white'
                />
            }
        })
    },[navigation, changeFavoriteHandler])

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