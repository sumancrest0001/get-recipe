import React, { Component } from 'react';
import axios from 'axios';
import Recipe from '../../components/Recipe/Recipe';
import classes from './Recipes.module.css';
import key from '../../config';

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios.get(`https://api.spoonacular.com/recipes/search?number=20&apiKey=${key}&query=foods`)
      .then(response => {
        const recipes = response.data.results;
        console.log(recipes);
        const updatedrecipes = recipes.map(updatedrecipe => ({
          id: updatedrecipe.id,
          title: updatedrecipe.title,
          img: updatedrecipe.image,
        }));
        this.setState({ recipes: updatedrecipes, isLoaded: true });
      })
      .catch(error => {
        this.setState({ isLoaded: true, error });
      });
  }

  selectedRecipeHandler = (id) => {
    console.log('Clicked');
    //this.props.history.push('/recipes/' + id);
  }

  render() {
    let recipes = <p>Something went wrong</p>;
    if (!this.state.error) {
      recipes = this.state.recipes.map(recipe => {
        return (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.img}
            clicked={() => this.selectedRecipeHandler(recipe.id)}
          />
        );
      });
    }


    return (
      <div>
        <section className={classes.Recipes}>
          {recipes}
        </section>
        {/* <Route path={this.props.match.url + "/:id"} exact component={FullRecipe} /> */}
      </div >);
  }
}


export default Recipes;
