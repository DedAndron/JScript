import type { Meal } from '../types.js';

export function cardBuilder(
    container: HTMLElement,
    data: Meal
): void {
    container.innerHTML += `
        <div class="meal-card"
            data-meal='${JSON.stringify(data)}'>
            <img
                src="${data.strMealThumb}"
                alt="${data.strMeal}"
            >

            <h3>${data.strMeal}</h3>

            <p>Category: ${data.strCategory}</p>
            <p>Area: ${data.strArea}</p>

            <button class="show-info">
                ...
            </button>
        </div>
    `;
}