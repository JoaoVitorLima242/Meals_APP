import {createDrawerNavigator} from '@react-navigation/drawer'

// Screens
import CategoriesScreen from '../screens/Categories';
import FavoritesScreen from '../screens/Favorites';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Categories' component={CategoriesScreen} />
            <Drawer.Screen name='Favorites' component={FavoritesScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;