import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Recipe from './Recipe'
import Cart from './Cart'
import {fetchRecipes, fetchRecipe} from './API'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  handleAddToCart = (ingredients) => {
    this.setState(
      {products: ingredients})
    //console.log("Added stuff to cart" + ingredients);
  }

  componentDidMount() {
    fetchRecipes("Apple pie")
      .then(res => fetchRecipe(res.results[0].id))
      .then(res => this.setState({
        recipe: res
      }));
  }

  render() {
    return (
    <div className="App">
      <Header/>
      <Cart products={this.state.products}/>
      <Recipe recipe={this.state.recipe} addToCart={this.handleAddToCart}/>
      <Footer/>
    </div>
    )
  }
}

export default App;
