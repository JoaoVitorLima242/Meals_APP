import { 
    Platform,
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from "react-native"

const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={[styles.gridItem]}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        margin: 16,
        height: 150,
        width: 150,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignContent: 'center ',
        borderRadius: 8,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 4 
    }
})