import { 
    Text, 
    View,
    Pressable,
    Image,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"

// Components
import MealLittleDetails from "./MealLittleDetails"

const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    affordability,
    complexity,
}) => {
    const { navigate } = useNavigation()

    const navigateHandler = (mealId) => {
        navigate('MealDetails', {
            mealId
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{opacity: 0.2}}
                style={({pressed}) => [
                    pressed && styles.buttonPressed
                ]}
                onPress={() => navigateHandler(id)}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealLittleDetails
                        affordability={affordability}
                        complexity={complexity}
                        duration={duration}
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 16
    },
    mealItem: {
        margin: 20,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    buttonPressed: {
        opacity: 0.75
    },
})