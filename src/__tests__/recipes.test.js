import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { Recipes } from '../container/Recipes/Recipes';
import { recipes } from './data/fullrecipe';

Enzyme.configure({ adapter: new Adapter() });
const APIrecipes = recipes => recipes;
const recipesError = {};
const storeRecipesError = recipesError => recipesError;
const filter = 'All';
const propsFilter = 'Fast';
const history = {};
jest.mock('axios');
describe('Recipes container', () => {
  it('should fetch a list of recipes', () => {
    const getSpy = jest.spyOn(axios, 'get');
    const wrapper = shallow(<Recipes
      recipes={recipes}
      APIrecipes={APIrecipes}
      recipesError={recipesError}
      storeRecipesError={storeRecipesError}
      filter={filter}
      propsFilter={propsFilter}
      history={history}
    />);
    console.log(wrapper.debug());
    expect(getSpy).toBeCalled();
  });
});
