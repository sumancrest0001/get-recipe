import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import key from '../../config';
import DirectionButton from '../../components/DirectionButtons/DirectionButton';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import classes from './FullRecipe.module.css';

class FullRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeDetails: null,
    }
  }
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
    if (this.props.id) {
      console.log(this.props.id);
      axios.get(`https://api.spoonacular.com/recipes/${this.props.id}/information?apiKey=${key}`)
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
          this.setState({ recipeDetails: fullRecipe });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    let recipe = <p> Wel Come to the fullrecipe page</p>
    if (this.props.id) {
      recipe = <p>Please keep patience. Recipe is Loading .........</p>
    }
    if (this.state.recipeDetails) {
      const { id, image, title, provider, servings, cookingTime, categoryTags, providerSite } = this.state.recipeDetails;
      recipe =
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
        <FilterCategory display={false} />
        {recipe}
      </div>

    )
  }
}


FullRecipe.propTypes = {
  id: PropTypes.string.isRequired,
};
export default FullRecipe;
