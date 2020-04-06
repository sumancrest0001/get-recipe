import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Recipe from '../../components/Recipe/Recipe';
import key from '../../config';
import { storeRecipes, storeRecipesFail } from '../../action';
import classes from './Recipes.module.css';

class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  selectedRecipeHandler = (id) => {
    // programmatic routing
    this.props.history.push('/recipes/' + id);
  }

  changeReadyTime(time) {
    console.log(time);
    if (time <= 15) {
      return 'Very fast';
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
      return 'Very long';
    } else {
      return time;
    }

  }

  componentDidMount() {
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


  filterRecipes = () => {
    const { recipes, filter } = this.props;
    let allRecipes;
    if (filter === 'All') {
      allRecipes = recipes;
    } else {
      allRecipes = recipes.filter(recipe => recipe.cookingPeriod === filter);
    }
    return allRecipes;
  };

  render() {
    const { recipesError } = this.props;
    let finalRecipes = <p>Content is loading........</p>
    if (recipesError) {
      finalRecipes = <p>Something went wrong</p>;
    }
    if (recipesError === null) {
      const allRecipes = this.filterRecipes();
      finalRecipes = allRecipes.map(recipe => {
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
          {finalRecipes}
        </section>
        {/* <Route path={this.props.match.url + "/:id"} exact component={FullRecipe} /> */}
      </div >);
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
  recipes: PropTypes.instanceOf(Array),
  recipesError: PropTypes.string,
  filter: PropTypes.string.isRequired,
  APIrecipes: PropTypes.func.isRequired,
  storeRecipesError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
