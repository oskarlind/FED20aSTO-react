import React from 'react';

const IngredientList = (ingredient, multiplier = 1) => {
    return <li
        key={ingredient.name.toString()}>🥘 {ingredient.name} ({ingredient.measures.metric.amount * multiplier} {ingredient.measures.metric.unitShort})
    </li>
}

export default IngredientList;