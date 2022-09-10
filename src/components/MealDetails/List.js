import { StyleSheet, Text, View } from "react-native"

const List = ({ listArray=[] }) => {
    return listArray.map(arrayItem => (
        <View key={arrayItem} style={styles.listItem}>
           <Text>{arrayItem}</Text>
        </View>
    ))
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 12,
        marginHorizontal: 12,
        backgroundColor: '#fff'
    }
})