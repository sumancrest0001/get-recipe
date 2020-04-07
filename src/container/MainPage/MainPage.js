import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recipes from '../Recipes/Recipes';
import classes from './MainPage.module.css';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import { filterRecipes } from '../../action/index';
import FullRecipe from '../FullRecipe/FullRecipe';

const mainPage = ({ categoryFilter }) => {
  const categoryHandler = filterValue => {
    categoryFilter(filterValue);
  };
  return (
    <div className={classes.MainPage}>
      <FilterCategory clicked={categoryHandler} />

      <Route
        path="/"
        exact
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => <Recipes {...props} propsFilter="All" />}
      />
      <Route path="/recipes/:id" component={FullRecipe} />
      <Route
        path="/category/:category"
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => <Recipes {...props} propsFilter={null} />}
      />

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
