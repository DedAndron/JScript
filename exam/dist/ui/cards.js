export function cardBuilder(container, data) {
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
//# sourceMappingURL=cards.js.map