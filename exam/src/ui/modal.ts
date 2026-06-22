import type { Meal } from '../types.js';

const modal =
    document.getElementById('modalOverlay') as HTMLElement;

const modalContent =
    document.getElementById('modalContent') as HTMLElement;

const closeBtn =
    document.getElementById('closeModalBtn') as HTMLButtonElement;

export function openModal(content: string): void {
    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
}

export function closeModal(): void {
    modal.classList.add('hidden');
    modalContent.innerHTML = '';
}

export function setupModal(
    container: HTMLElement
): void {

    container.addEventListener('click', (e) => {

        const target = e.target as HTMLElement;

        const btn = target.closest('.show-info');

        if (!btn) return;

        const card = btn.closest('.meal-card');

        if (!card) return;

        const meal = JSON.parse(
            card.getAttribute('data-meal')!
        ) as Meal;

        let ingredientsHtml = '';

        for (let i = 1; i <= 20; i++) {

            const ingredient =
                meal[`strIngredient${i}`];

            const measure =
                meal[`strMeasure${i}`];

            if (ingredient?.trim()) {

                ingredientsHtml += `
                    <li class="ingredient-item">
                        <strong>${measure || ''}</strong>
                        ${ingredient}
                    </li>
                `;
            }
        }

        openModal(`
            <h2>${meal.strMeal}</h2>

            <img
                src="${meal.strMealThumb}"
                alt="${meal.strMeal}"
            >

            <h3>Інгредієнти</h3>

            <ul>
                ${ingredientsHtml}
            </ul>

            <h3>Інструкція</h3>

            <p>${meal.strInstructions}</p>
        `);
    });
}

closeBtn.addEventListener(
    'click',
    closeModal
);

modal.addEventListener('click', (e) => {

    if (e.target === modal) {
        closeModal();
    }

});