import React from 'react';
import PropsTypes from 'prop-types';
import classes from './Recipe.module.css';

const recipe = ({ id, title, image, clicked }) => (
  <div
    className={classes.Recipe}
    id={id}>
    <img
      src={'https://spoonacular.com/recipeImages/' + image}
      alt={title}
    />
    <h4
      role="button"
      onClick={clicked}
    >
      {title}
    </h4>
  </div>
);

recipe.prototype = {
  id: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  image: PropsTypes.string.isRequired,
  clicked: PropsTypes.string.isRequired,
}

export default recipe;
