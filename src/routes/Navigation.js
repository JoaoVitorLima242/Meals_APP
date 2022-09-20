import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text } from "react-native";
import DrawerNavigation from "./Drawer";

// Helpers
import { getCategoryById } from "../helpers/categories";
// Screens
import MealDetailsScreen from "../screens/MealDetails";
import MealsOverviewScreen from '../screens/MealsOverview';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#BF0404'
                    },
                    headerTintColor: '#fff',
                    contentStyle: {
                        backgroundColor: '#262324'
                    }
                }}
            >
                <Stack.Screen 
                    name='Drawer' 
                    component={DrawerNavigation}
                    options={{
                        headerShown: false                        
                    }}
                />
                <Stack.Screen 
                    name='MealsOverview'
                    component={MealsOverviewScreen}
                    options={({ route }) => {
                        const { title } = getCategoryById(route.params.categoryId);

                        return { title } 
                    }}
                />
                <Stack.Screen 
                    name='MealDetails'
                    component={MealDetailsScreen}
                    options={{
                        title: 'About the Meal'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;