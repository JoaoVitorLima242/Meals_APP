import { 
    FlatList,

} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

// Components

// Services
import { CATEGORIES } from '../services/data/dummy-data'

const CategoriesScreen = () => {
    return <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CategoryGridTile title={item.title} color={item.color}/> }
    />
}

export default CategoriesScreen;