import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recipes from '../Recipes/Recipes';
import classes from './MainPage.module.css';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import { filterRecipes } from '../../action/index';
const mainPage = ({ categoryFilter }) => {
  const categoryHandler = (filterValue) => {
    categoryFilter(filterValue);
  }
  return (
    <div className={classes.MainPage}>
      <FilterCategory display={true} clicked={categoryHandler} />
      <Recipes />
    </div>
  );

};

const mapDispatchToProps = dispatch => ({
  categoryFilter: category => { dispatch(filterRecipes(category)); },
});

mainPage.propTypes = {
  categoryFilter: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(mainPage);

