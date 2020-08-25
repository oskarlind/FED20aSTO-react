import React from 'react';

let renderIngredients = (ingredient) => {
    return <li>{ingredient.name} ({ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort})</li>
}

const Recipe = (props) => {
    if(props.recipe != undefined) {
    return <div>
        <img id="main-image" src={props.recipe.image}/>
        <h1 id="title">{props.recipe.title}</h1>
        <div id="description">{props.recipe.title}</div>
        <h2>Ingredients</h2>
        <ul id="ingredients">{props.recipe.extendedIngredients.map(renderIngredients)}</ul>
        <h2>Instructions</h2>
        <div id="instructions">{props.recipe.instructions}</div>
    </div>
    } else return <div>Loading recipe...</div>
}

export default Recipe;