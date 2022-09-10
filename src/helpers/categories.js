import { CATEGORIES } from "../services/data/dummy-data"

export const getCategoryById = (catId) => {
    return CATEGORIES.find(({ id }) => id === catId)
}