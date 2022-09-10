import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import CategoriesScreen from '../screens/Categories';
import MealDetailsScreen from "../screens/MealDetails";
import MealsOverviewScreen from '../screens/MealsOverview';
// Services
import { CATEGORIES } from "../services/data/dummy-data";

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    const getCategoryById = (catId) => {
        return CATEGORIES.find(({ id }) => id === catId)
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#E32B0B'
                    },
                    headerTintColor: '#fff',
                    contentStyle: {
                        backgroundColor: '#4B2D23'
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
                    options={({ route }) => {
                        const { title } = getCategoryById(route.params.categoryId);

                        return { title } 
                    }}
                />
                <Stack.Screen 
                    name='MealDetails'
                    component={MealDetailsScreen}
                    // options={({ route }) => {
                    //     const { title } = getCategoryById(route.params.categoryId);

                    //     return { title } 
                    // }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;