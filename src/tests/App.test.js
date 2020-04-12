import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Component/ App', () => {
  const data = { recipes: [{ a: 'first recipe' }], recipesError: {} };
  const wrapper = shallow(<App store={data} />);

  it('tests check existence of app component', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('App')).toBe(true);
  });

  it('tests the existence of Mainpage', () => {
    expect(wrapper.find('Connect(mainPage)').exists()).toBeTruthy();
  });
});
