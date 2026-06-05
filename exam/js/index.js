const search_form = document.getElementById('search-form');
const search_input = document.getElementById('search-input');
const meals_container = document.getElementById('meals-container');
search_form.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const searchText = search_input.value.trim();
    if(searchText === ''){
        return
    }
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    const data = await response.json();
    meals_container.innerHTML='';
    if(!data.meals){
        meals_container.innerHTML =
            '<h2>Страва не знайдена!</h2>';
        return;
    }
    data.meals.forEach(meal=>{
        meals_container.innerHTML += 
        `<div> 
            <h2> ${meal.strMeal} </h2> 
            <img src="${meal.strMealThumb}"> 
            <p> Category: ${meal.strCategory} </p> 
            <p> Area: ${meal.strArea} </p> 
        </div>`;
    });
});


