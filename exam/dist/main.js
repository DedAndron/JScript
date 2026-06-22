import { handleSearch } from './features/search.js';
import { loadCategoryMeals } from './features/categories.js';
import { loadTopMeals, loadRandomMeal } from './features/meals.js';
import { setupModal } from './ui/modal.js';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const mealsContainer = document.getElementById('meals-container');
const topMealsContainer = document.getElementById('top-meals-container');
const randomBtn = document.getElementById('randomMealBtn');
const categoryBtns = document.querySelectorAll('.btn-outline-primary');
loadTopMeals(topMealsContainer);
setupModal(mealsContainer);
setupModal(topMealsContainer);
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleSearch(searchInput.value.trim(), mealsContainer);
});
randomBtn.addEventListener('click', () => loadRandomMeal(mealsContainer));
categoryBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
        const target = e.currentTarget;
        await loadCategoryMeals(target.dataset.action, topMealsContainer);
    });
});
//# sourceMappingURL=main.js.map