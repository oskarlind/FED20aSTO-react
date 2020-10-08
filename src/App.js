import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import Recipe from './Recipe'
import Cart from './Cart'
import Success from './Success'
import Contact from './Contact'
import Orderform from './Orderform'
import Searchbar from './Searchbar'
import GoogleMap from './components/GoogleMap'
import Errormessage from './Errormessage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { fetchRecipes, fetchRecipe, searchAutocomplete } from './API'
import YouTube from './components/Youtube';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      search: "",
      suggestions: [],
      loading: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name == "search") {
      this.setState({
        loading: true
      })
      searchAutocomplete(this.state.search, 10)
        .then(res => {
          this.setState({
            loading: false,
            suggestions: res
          })
        })
    }
  }

  handleSearch() {
    fetchRecipes(this.state.search)
      .then(
        res => {
          if (res.results.length > 0) {
            return fetchRecipe(res.results[0].id)
          } else {
            this.setState({ error: "No results found, please try again!" })
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
      { products: ingredients })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <GoogleAnalytics />
          {/*<GoogleMap/> */}
          {/*<YouTube url="https://www.youtube.com/embed/PkZNo7MFNFg" />*/}
          <Route exact path="/">
            {this.state.error && <Errormessage message={this.state.error} />}
            <Searchbar
              name="search"
              placeholder="Search recipes..."
              value={this.state.search}
              handleChange={this.handleChange}
              handleSearch={this.handleSearch}
              suggesions={this.state.suggestions}
              loading={this.state.loading}
            />
            <Cart products={this.state.products} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route exact path="/order">
            <Orderform />
          </Route>
          <Route path="/recipe/:id" render={(props) => <Recipe {...props} addToCart={this.handleAddToCart} />} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
