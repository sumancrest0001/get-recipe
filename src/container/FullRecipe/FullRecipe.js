import React, { Component } from 'react';
import axios from 'axios';
import classes from '.FullRecipe.module.css';

class FullRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeDetails: null,
    }
  }
  render() {
    const { title, provider, serving, cookingTime, categoryTags, providerSite } = this.state.recipeDetails;

    return (
      <div className={classes.FullRecipe}>
        <img
          src={'https://spoonacular.com/recipeImages/' + image}
          alt={title}
        />
        <h3>{title}</h3>
        <p>{provider}</p>
        <p>Servings: {serving}</p>
        <p>Cooking Time: {cookingTime}</p>
        <p>Tags: {categoryTags}</p>
        <a href={providerSite}>Provider Details</a>
      </div>
    );
  }
}