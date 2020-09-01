import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Recipe from './Recipe'
import Cart from './Cart'
import Searchbar from './Searchbar'
import Errormessage from './Errormessage'
import {fetchRecipes, fetchRecipe} from './API'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      search: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSearch() {
    fetchRecipes(this.state.search)
      .then(
        res => {
          if(res.results.length > 0) {
            return fetchRecipe(res.results[0].id)
          } else {
            this.setState({error: "No results found, please try again!"})
          }
        }
      )
      .then(
        res => this.setState(
          {
            recipe: res
          }
        )
      );
  }

  handleAddToCart = (ingredients) => {
    this.setState(
      {products: ingredients})
    }

  render() {
    return (
    <div className="App">
      <Header/>
      {this.state.error && <Errormessage message={this.state.error} /> }
      <Searchbar name="search" placeholder="Search recipes..." value={this.state.search} handleChange={this.handleChange} handleSearch={this.handleSearch} />
      <Cart products={this.state.products}/>
      <Recipe recipe={this.state.recipe} addToCart={this.handleAddToCart}/>
      <Footer/>
    </div>
    )
  }
}

export default App;
