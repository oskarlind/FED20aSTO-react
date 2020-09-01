import React from 'react';
import IngredientList from './IngredientList'



class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addToCart(this.props.recipe.extendedIngredients);
    }

    render() {
        if(this.props.recipe != undefined) {
            return <div>
                <img id="main-image" src={this.props.recipe.image}/>
                <h1 id="title">{this.props.recipe.title}</h1>
                <div id="description">{this.props.recipe.title}</div>
                <h2>Ingredients</h2>
                <ul id="ingredients">{this.props.recipe.extendedIngredients.map(IngredientList)}</ul>
                <button onClick={this.handleClick}>Add ingredients to cart</button>
                <h2>Instructions</h2>
                <div id="instructions">{this.props.recipe.instructions}</div>
            </div>
        } else return <div>Please use the search bar to find recipes.</div>
    }
}

export default Recipe;