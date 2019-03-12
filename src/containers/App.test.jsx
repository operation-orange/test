import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App data={[]} fetchHotelsAction={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
