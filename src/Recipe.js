import React from 'react';
import IngredientList from './IngredientList'
import RecipeImage from './RecipeImage'
import { fetchRecipe } from './API'

class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            servings: "4"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.props.addToCart(this.state.recipe.extendedIngredients);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        let id = this.props.match.params.id
        fetchRecipe(id).then(res =>
            this.setState({
                recipe: res,
                servings: res.servings
            })
        )
    }

    render() {
        if (this.state.recipe != undefined) {
            return <div>
                <RecipeImage src={this.state.recipe.image} />
                <h1 id="title">{this.state.recipe.title}</h1>
                <div id="description">{this.state.recipe.title}</div>
                <h2>Ingredients</h2>
                <label htmlFor="servings">Servings</label>
                <select name="servings" value={this.state.servings} onChange={this.handleChange}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                </select>
                <ul id="ingredients">{this.state.recipe.extendedIngredients.map(
                    (ingredient) => IngredientList(ingredient, this.state.servings / this.state.recipe.servings)
                )}</ul>
                <div><button onClick={this.handleClick}>Add ingredients to cart</button></div>
                <h2>Instructions</h2>
                <div id="instructions">{this.state.recipe.instructions}</div>
            </div>
        } else return <div>Please use the search bar to find recipes.</div>
    }
}

export default Recipe;