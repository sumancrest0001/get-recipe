import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Recipe from '../components/Recipe/Recipe';

Enzyme.configure({ adapter: new Adapter() });
const props = {
  id: 1234,
  title: 'tomato pasta',
  image: 'logo.png',
  clicked: () => { },
};
const {
  id, title, image, clicked,
} = props;

describe('component/Recipe', () => {
  const wrapper = shallow(<Recipe id={id} title={title} image={image} clicked={clicked} />);
  it('should check presence of an image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(`https://spoonacular.com/recipeImages/${image}`);
    expect(wrapper.find('img').prop('alt')).toEqual(title);
  });

  it('should check presence of the title', () => {
    expect(wrapper.find('h4').text()).toEqual(title);
  });
});
