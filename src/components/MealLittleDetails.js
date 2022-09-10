import { StyleSheet, Text, View } from "react-native"

const MealLittleDetails = ({ duration, complexity, affordability, textStyle}) => {

    return (
        <View style={styles.details}>
            <Text style={[styles.detailText, textStyle]}>{duration}min</Text>
            <Text style={[styles.detailText, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailText, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealLittleDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailText: {
        fontSize: 12,
        margin: 10
    },
})