import recipes from './recipes.mjs';

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomListEntry(list) {
    return list[getRandomNumber(list.length)];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<div class="recipe-tag">${tag}</div>`).join('');
}

function ratingTemplate(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star-empty">☆</span>';
        }
    }
    return stars;
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <div class="recipe-content">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                <div class="recipe-details">
                    ${tagsTemplate(recipe.tags)}
                    <h2 class="recipe-title">${recipe.name}</h2>
                    <div class="recipe-rating">
                        ${ratingTemplate(recipe.rating)}
                    </div>
                    <p class="recipe-description">
                        ${recipe.description}
                    </p>
                </div>
            </div>
        </div>
    `;
}

function renderRecipes(recipeList) {
    const mainContent = document.querySelector('.main-content');
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    mainContent.innerHTML = recipesHTML;
}

function filterRecipes(query) {
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
        recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('.search-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
    
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', searchHandler);
}

init();
