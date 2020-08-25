const apiKey = "3e73db863da84c5d8e69ef97b8ca716f"

export const fetchRecipes = (searchString) => {
    return fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey='+apiKey+'&query='+searchString)
    .then(response => response.json())
}

export const fetchRecipe = (id) => {
    return fetch('https://api.spoonacular.com/recipes/'+id+'/information?apiKey='+apiKey)
    .then(response => response.json())
}