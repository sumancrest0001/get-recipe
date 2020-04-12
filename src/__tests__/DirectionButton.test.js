import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DirectionButton from '../components/DirectionButtons/DirectionButton';

Enzyme.configure({ adapter: new Adapter() });

describe('testing direct button component', () => {
  const wrapper = shallow(<DirectionButton providerLink="https://www.google.com/" />);

  it('check direction link exist', () => {
    expect(wrapper.find('a').text()).toBe('Provider Details');
  });

  it('checks props of the component', () => {
    expect(wrapper.props().href).toBe('https://www.google.com/');
  });
});
