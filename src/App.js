import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Recipe from './Recipe'
import {fetchRecipes, fetchRecipe} from './API'

/*let recipeData = {
  title: "Apple pie",
  ingredients: [
    "butter", "sugar"
  ]
}*/

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
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
      <Recipe recipe={this.state.recipe}/>
      <Footer/>
    </div>
    )
  }
}

export default App;
