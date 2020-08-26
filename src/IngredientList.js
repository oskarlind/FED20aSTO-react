import React from 'react';

const IngredientList = (ingredient) => {
    return <li key={ingredient.name.toString()}>🥘 {ingredient.name} ({ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort})</li>
}

export default IngredientList;