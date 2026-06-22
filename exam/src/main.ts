import { handleSearch } from './features/search.js';
import { loadCategoryMeals } from './features/categories.js';
import { loadTopMeals, loadRandomMeal } from './features/meals.js';
import { setupModal } from './ui/modal.js';

const searchForm =
    document.getElementById('search-form') as HTMLFormElement;

const searchInput =
    document.getElementById('search-input') as HTMLInputElement;

const mealsContainer =
    document.getElementById('meals-container') as HTMLElement;

const topMealsContainer =
    document.getElementById('top-meals-container') as HTMLElement;

const randomBtn =
    document.getElementById('randomMealBtn') as HTMLButtonElement;

const categoryBtns =
    document.querySelectorAll('.btn-outline-primary');

loadTopMeals(topMealsContainer);

setupModal(mealsContainer);
setupModal(topMealsContainer);

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    await handleSearch(
        searchInput.value.trim(),
        mealsContainer
    );
});

randomBtn.addEventListener(
    'click',
    () => loadRandomMeal(mealsContainer)
);

categoryBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
        const target = e.currentTarget as HTMLElement;

        await loadCategoryMeals(
            target.dataset.action!,
            topMealsContainer
        );
    });
});