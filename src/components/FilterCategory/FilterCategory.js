import React from 'react';
import Select from 'react-select';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './FilterCategory.module.css';

const filterCategory = props => {
  const { clicked, history } = props;
  const category = ['Veryfast', 'Fast', 'Normal', 'Long', 'Verylong', 'All'];
  const options = [];
  category.map(ele => options.push({ value: ele, label: ele }));
  const filterHandler = selectedOption => {
    clicked(selectedOption.value);
    history.push(`/category/${selectedOption.value}`);
  };
  const dropdown = (
    <div>
      <Select
        className={classes.Category}
        defaultValue={{ label: 'Choose cooking time', value: 0 }}
        onChange={filterHandler}
        options={options}
      />
    </div>
  );

  return (
    <div className={classes.Filter}>
      <div className={classes.GetRecipes}><NavLink to="/" exact>Get Recipes</NavLink></div>
      <div className={classes.Quote}>GOOD FOOD, GOOD MOOD</div>
      {dropdown}
    </div>
  );
};

filterCategory.propTypes = {
  clicked: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
export default withRouter(filterCategory);
