import React from 'react';
import PropTypes from 'prop-types';
import classes from './FilterCategory.module.css';


const filterCategory = ({ display, clicked }) => {
  const category = ['Very fast', 'Fast', 'Normal', 'Long', 'Very long'];
  const filterHandler = event => {
    console.log(event.target.value);
    clicked(event.target.value);
  };
  let dropdown = null;
  if (display)
    dropdown = <div>
      <select id="category" className={classes.Category} onChange={filterHandler}>
        {
          [...category, 'All'].map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))
        }
      </select>
    </div>;

  return (
    <div className={classes.Filter}>
      <div className={classes.GetRecipes}>Get Recipes</div>
      <div className={classes.Quote}>GOOD FOOD, GOOD MOOD</div>
      {dropdown}
    </div>
  );
};

filterCategory.propTypes = {
  display: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
}
export default filterCategory;
