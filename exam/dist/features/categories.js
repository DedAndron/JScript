import { getCategoryMeals, getMealById } from '../api/mealsApi.js';
import { cardBuilder } from '../ui/cards.js';
const N = 20;
export async function loadCategoryMeals(category, container) {
    container.innerHTML = '';
    const data = await getCategoryMeals(category);
    const randomMeals = [...data.meals]
        .sort(() => Math.random() - 0.5)
        .slice(0, N);
    for (const meal of randomMeals) {
        const details = await getMealById(meal.idMeal);
        cardBuilder(container, details.meals[0]);
    }
}
//# sourceMappingURL=categories.js.map