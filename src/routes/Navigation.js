import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screen
import CategoriesScreen from '../screens/Categories';
import MealsOverviewScreen from '../screens/MealsOverview';

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;