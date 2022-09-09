import { 
    FlatList,
    StyleSheet, 
    View
} from 'react-native';

// Components
import CategoryGridTile from '../components/CategoryGridTile';
// Services
import { CATEGORIES } from '../services/data/dummy-data'

const CategoriesScreen = ({ navigation }) => {
    const navigateHandler = (id) => {
        navigation.navigate('MealsOverview', {
            categoryId: id
        } )
    }

    const renderCategoryItem = ({item}) => {
        return <CategoryGridTile 
            title={item.title}
            color={item.color}
            onPress={() => navigateHandler(item.id)}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  