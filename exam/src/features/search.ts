import { searchMeals } from '../api/mealsApi.js';
import { cardBuilder } from '../ui/cards.js';

export async function handleSearch(
    searchText: string,
    container: HTMLElement
) {
    const data = await searchMeals(searchText);

    container.innerHTML = '';

    if (!data.meals) {
        container.innerHTML =
            '<h2>Страва не знайдена!</h2>';
        return;
    }

    data.meals.forEach((meal: any) => {
        cardBuilder(container, meal);
    });
}