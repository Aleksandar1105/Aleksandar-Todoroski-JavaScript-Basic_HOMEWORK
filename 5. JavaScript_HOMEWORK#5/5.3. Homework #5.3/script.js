// Create a recipe page from inputs

/* Ask the user for the name of the recipe
 - Ask the user how many ingredients do we need for the recipe
 - Ask the user for the name of every ingredient
 - Print the name of the recipe in the HTML as heading element, ex: h1-h6
 - Print all ingredients as an unordered list in the HTML
 - Extra: Use a table if you want to be fancy :) */

let nameOfRecipe = prompt('Enter the name of the recipe:');

function recipePage(recipe) {
    let recipeName = document.getElementById('table-head');
    recipeName.innerHTML = `<th><h2>${recipe}:</h2></th>`;
}

let ingredientsNumber = parseInt(prompt('How many ingredients are in this recipe?'));

function createIngredientsRows(numOfIngredients) {
    let ingredient = document.getElementById('ingredient');

    for (let i = 0; i < numOfIngredients; i++) {
        let nameOfIngredient = prompt('Enter ingredient:');
        ingredient.innerHTML += `<tr>
        <td><h3>${i + 1}. ${nameOfIngredient}</h3></td>
        </tr>`;
    }
}

recipePage(nameOfRecipe);
createIngredientsRows(ingredientsNumber);
