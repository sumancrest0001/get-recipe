import React from 'react';
import Recipes from '../Recipes/Recipes';
import classes from './MainPage.module.css';
//import FilterCategory from '../../components/FilterCategory/FilterCategory';

const MainPage = () => {
  return (
    <div className={classes.MainPage}>
      {/* <FilterCategory /> */}
      <Recipes />
    </div>
  );

};

export default MainPage;

