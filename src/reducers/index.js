import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import recipeReducer from './recipe';
import filterReducer from './filter';

const mainReducer = combineReducers({
  recipes: recipesReducer,
  filter: filterReducer,
  recipe: recipeReducer,
});

export default mainReducer;
