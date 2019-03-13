import { shallow } from 'enzyme';
import React from 'react';
import HotelsList from './HotelsList';

it('renders empty list', () => {
  const wrapper = shallow(<HotelsList data={[]} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders list', () => {
  const mockData = [{
    id: 1,
    name: 'Testy',
    rating: 5,
    facilities: ['Gym'],
  }, {
    id: 2,
    name: 'Westy',
    rating: 3,
    facilities: [],
  }];
  const wrapper = shallow(<HotelsList data={mockData} />);
  expect(wrapper).toMatchSnapshot();
});
