import {createDrawerNavigator} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

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
                },
                drawerContentStyle: {
                    backgroundColor: '#BF0404'
                },
                drawerInactiveTintColor: '#fff',
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#CA4141'
            }}
        >
            <Drawer.Screen 
                name='Categories' 
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({color, size}) => (
                        <Ionicons name='list' color={color} size={size}/>
                    )
                }}
            />
            <Drawer.Screen 
                name='Favorites' 
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({color, size}) => (
                        <Ionicons name='star' color={color} size={size}/>
                    )
                }}

            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;