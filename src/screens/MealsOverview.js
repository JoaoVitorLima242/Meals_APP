// Services
import MealsList from "../components/MealsList"
import { MEALS } from "../services/data/dummy-data"

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0
    })

    return(
        <MealsList items={displayedMeals}/>
    )
}

export default MealsOverviewScreen