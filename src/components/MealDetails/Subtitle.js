import { StyleSheet, Text, View } from "react-native"

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D96704'
    },
    subtitleContainer: {
        margin: 24,
        padding: 6,
        borderBottomColor: '#D96704',
        borderBottomWidth: 1

    },
})