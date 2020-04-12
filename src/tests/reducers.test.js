import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import rootReducer from '../reducers/index';
import * as actions from '../action/index';
import {
  recipes, recipe, recipeError, recipesError, filter,
} from './data/fullrecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('tests reducers', () => {
  it('returns initial state', () => {
    expect(rootReducer({}, {})).toEqual({
      recipes: { recipes: [], recipesError: {} },
      filter: 'All',
      recipe: { recipe: {}, recipeError: {} },
    });
  });

  it('sets recipes to the store', () => {
    expect(rootReducer({}, actions.storeRecipes(recipes)))
      .toEqual({
        recipes: { recipes, recipesError: {} },
        filter: 'All',
        recipe: { recipe: {}, recipeError: {} },
      });
  });
  it('sets recipes error to the store', () => {
    expect(rootReducer({}, actions.storeRecipesFail(recipesError)))
      .toEqual({
        recipes: { recipes: [], recipesError },
        filter: 'All',
        recipe: { recipe: {}, recipeError: {} },
      });
  });

  it('sets recipe to the store', () => {
    expect(rootReducer({}, actions.storeRecipe(recipe)))
      .toEqual({
        recipes: { recipes: [], recipesError: {} },
        filter: 'All',
        recipe: { recipe, recipeError: {} },
      });
  });

  it('sets recipe error to the store', () => {
    expect(rootReducer({}, actions.storeRecipeFail(recipeError)))
      .toEqual({
        recipes: { recipes: [], recipesError: {} },
        filter: 'All',
        recipe: { recipe: {}, recipeError },
      });
  });
  it('sets selected filter to the store', () => {
    expect(rootReducer({}, actions.filterRecipes(filter)))
      .toEqual({
        recipes: { recipes: [], recipesError: {} },
        filter,
        recipe: { recipe: {}, recipeError: {} },
      });
  });
});
