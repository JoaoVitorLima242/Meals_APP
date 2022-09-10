import { MEALS } from "../services/data/dummy-data"

export const getMealsById = (mealId) => {
    return MEALS.find(({ id }) => id === mealId)
}