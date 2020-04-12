import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Recipe from '../../components/Recipe/Recipe';
import key from '../../config';
import { storeRecipes, storeRecipesFail } from '../../action';
import classes from './Recipes.module.css';

export class Recipes extends Component {
  componentDidMount() {
    const { recipes } = this.props;
    if (recipes.length === 0) {
      const { APIrecipes, storeRecipesError } = this.props;
      axios.get(`https://api.spoonacular.com/recipes/search?number=20&apiKey=${key}&query=foods`)
        .then(response => {
          const recipes = response.data.results;
          const updatedrecipes = recipes.map(updatedrecipe => ({
            id: updatedrecipe.id,
            title: updatedrecipe.title,
            img: updatedrecipe.image,
            cookingTime: this.changeReadyTime(updatedrecipe.readyInMinutes),
          }));
          APIrecipes(updatedrecipes);
        })
        .catch(error => {
          storeRecipesError(error);
        });
    }
  }

  selectedRecipeHandler = id => {
    const { history } = this.props;
    history.push(`/recipes/${id}`);
  }

  changeReadyTime = time => {
    if (time <= 15) {
      return 'Veryfast';
    }
    if (time > 15 && time <= 30) {
      return 'Fast';
    }
    if (time > 30 && time <= 60) {
      return 'Normal';
    }

    if (time > 60 && time <= 120) {
      return 'Long';
    }

    if (time > 120) {
      return 'Verylong';
    }
    return time;
  };

  filterRecipes = () => {
    const { recipes, filter, propsFilter } = this.props;
    let allRecipes;
    const finalFilter = propsFilter !== ' ' ? propsFilter : filter;
    if (finalFilter === 'All') {
      allRecipes = recipes;
    } else {
      allRecipes = recipes.filter(recipe => recipe.cookingTime === finalFilter);
    }
    return allRecipes;
  };

  render() {
    const { recipes, recipesError } = this.props;
    let finalRecipes = <p>Content is loading........</p>;
    if (recipesError) {
      finalRecipes = <p>Something went wrong</p>;
    }
    if (recipes) {
      const allRecipes = this.filterRecipes();
      finalRecipes = allRecipes.map(recipe => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.img}
          clicked={() => this.selectedRecipeHandler(recipe.id)}
        />
      ));
    }


    return (
      <section className={classes.Recipes}>
        {finalRecipes}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  recipe: state.recipes,
  recipesError: state.recipes.recipesError,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  APIrecipes: recipes => { dispatch(storeRecipes(recipes)); },
  storeRecipesError: error => { dispatch(storeRecipesFail(error)); },
});

Recipes.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
  recipesError: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.string.isRequired,
  APIrecipes: PropTypes.func.isRequired,
  storeRecipesError: PropTypes.func.isRequired,
  propsFilter: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
