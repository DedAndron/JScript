export async function searchMeals(query: string) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    return response.json();
}

export async function getRandomMeal() {
    const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
    );

    return response.json();
}

export async function getCategoryMeals(
    category: string
) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    return response.json();
}

export async function getMealById(id: string) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    return response.json();
}