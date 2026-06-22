import { getRandomMeal } from '../api/mealsApi.js';
import { cardBuilder } from '../ui/cards.js';

const N = 20;

export async function loadTopMeals(
    container: HTMLElement
): Promise<void> {

    container.innerHTML = '';

    const requests = [];

    for (let i = 0; i < N; i++) {
        requests.push(getRandomMeal());
    }

    const dataArray = await Promise.all(requests);

    dataArray.forEach(data => {
        cardBuilder(
            container,
            data.meals[0]
        );
    });
}

export async function loadRandomMeal(
    container: HTMLElement
): Promise<void> {

    const data = await getRandomMeal();

    container.innerHTML = '';

    cardBuilder(
        container,
        data.meals[0]
    );
}