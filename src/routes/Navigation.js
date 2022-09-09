import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screen
import CategoriesScreen from '../screens/Categories';
import MealsOverviewScreen from '../screens/MealsOverview';

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#c00'
                    },
                    headerTintColor: '#fff',
                    contentStyle: {
                        backgroundColor: '#202124'
                    }
                }}
            >
                <Stack.Screen 
                    name='MealsCategories' 
                    component={CategoriesScreen}
                    options={{
                        title: 'All Categories'
                    }}
                />
                <Stack.Screen 
                    name='MealsOverview'
                    component={MealsOverviewScreen}
                    options={{
                        title: 'Overview'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;