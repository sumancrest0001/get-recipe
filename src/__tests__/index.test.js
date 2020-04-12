import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../action/index';
import {
  recipe, recipes, recipesError, recipeError, filter,
} from './data/fullrecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('actions', () => {
  it('creates an action to store the recipes', () => {
    const expectedAction = {
      type: 'STORE_RECIPES_SUCCEED',
      recipes,
    };
    expect(actions.storeRecipes(recipes)).toEqual(expectedAction);
  });

  it('creates an action to store a recipe', () => {
    const expectedAction = {
      type: 'STORE_RECIPE_SUCCEED',
      recipe,
    };
    expect(actions.storeRecipe(recipe)).toEqual(expectedAction);
  });

  it('creates an action to store a recipeerror', () => {
    const expectedAction = {
      type: 'STORE_RECIPE_ERROR',
      recipeError,
    };
    expect(actions.storeRecipeFail(recipeError)).toEqual(expectedAction);
  });
  it('creates an action to store a recipeserror', () => {
    const expectedAction = {
      type: 'STORE_RECIPES_ERROR',
      recipesError,
    };
    expect(actions.storeRecipesFail(recipesError)).toEqual(expectedAction);
  });

  it('creates an action to store category filter', () => {
    const expectedAction = {
      type: 'CHANGE_FILTER',
      filter,
    };
    expect(actions.filterRecipes(filter)).toEqual(expectedAction);
  });
});
