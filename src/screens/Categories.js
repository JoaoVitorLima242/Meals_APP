import { 
    FlatList,

} from 'react-native';

// Components
import CategoryGridTile from '../components/CategoryGridTile';
// Services
import { CATEGORIES } from '../services/data/dummy-data'

const CategoriesScreen = () => {
    const renderCategoryItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
    />
}

export default CategoriesScreen;