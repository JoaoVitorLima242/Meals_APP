import {createDrawerNavigator} from '@react-navigation/drawer'

// Screens
import CategoriesScreen from '../screens/Categories';
import FavoritesScreen from '../screens/Favorites';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#BF0404'
                },
                headerTintColor: '#fff',
                sceneContainerStyle: {
                    backgroundColor: '#262324'
                }
            }}
        >
            <Drawer.Screen 
                name='Categories' 
                component={CategoriesScreen}
                options={{
                    title: 'All Categories'
                }}
            />
            <Drawer.Screen name='Favorites' component={FavoritesScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;