import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import key from '../../config';
import DirectionButton from '../../components/DirectionButtons/DirectionButton';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import { storeRecipe, storeRecipeFail } from '../../action';
import classes from './FullRecipe.module.css';

class FullRecipe extends Component {
  changeCookingTime(time) {
    if (time < 60) {
      return (`${time} minutes`)
    } else {
      const hour = Math.floor(time / 60);
      const minutes = time - (hour * 60);
      if (minutes === 0) {
        if (hour > 1) {
          return (`${hour} hour`);
        } else {
          return (`${hour} hours`);
        }
      } else {
        return (`${hour} hours ${minutes} minutes`);
      }

    }
  }

  componentDidMount() {
    const { storeFullRecipe, storeRecipeError, match } = this.props;
    console.log(this.props);
    if (this.props.match.params.id) {
      axios.get(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=${key}`)
        .then(response => {
          const recipe = response.data;
          console.log(recipe);
          const fullRecipe = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            provider: recipe.sourceName,
            servings: recipe.servings,
            cookingTime: this.changeCookingTime(recipe.readyInMinutes),
            providerSite: recipe.sourceUrl,
            categoryTags: recipe.dishTypes.join(', '),
          };
          storeFullRecipe(fullRecipe);
        })
        .catch(error => {
          storeRecipeError(error);
        });
    }
  }

  render() {
    const { recipe, recipeError } = this.props;
    let renderRecipe = <p>Please keep patience. Recipe is Loading .........</p>;
    if (recipeError) {
      renderRecipe = <p>OOPS!!! There is an error</p>;
    }
    if (recipe) {
      const { id, image, title, provider, servings, cookingTime, categoryTags, providerSite } = recipe;
      renderRecipe =
        (<div className={classes.FullRecipe}>
          <img
            src={image}
            alt={title}
          />
          <h3>{title}</h3>
          <p><b>Producer:</b>{provider}</p>
          <p><b>Servings:</b> {servings}</p>
          <p><b>Cooking Time:</b> {cookingTime}</p>
          <p><b>Tags:</b> {categoryTags}</p>
          <DirectionButton providerLink={providerSite} />
        </div>);
    }
    return (
      <div>
        {renderRecipe}
      </div>

    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe.recipe,
  recipeError: state.recipe.recipeError,
});

const mapDispatchToProps = dispatch => ({
  storeFullRecipe: recipes => { dispatch(storeRecipe(recipes)); },
  storeRecipeError: error => { dispatch(storeRecipeFail(error)); },
});



FullRecipe.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.object,
  recipeError: PropTypes.object,
  storeFullRecipe: PropTypes.func.isRequired,
  storeRecipeError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullRecipe);
