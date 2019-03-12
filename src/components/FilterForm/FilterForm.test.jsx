import { shallow } from 'enzyme';
import React from 'react';
import { FilterForm } from './FilterForm';

test('renders default state passing form data', () => {
  const wrapper = shallow(
    <FilterForm
      name="the name"
      rating="the rating"
      facility="the facility"
      updateFilterFormAction={() => {}}
      filterHotelsAction={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

test.each(['name', 'rating', 'facility'])('onChange for the %s field triggers updateFilterFormAction', (field) => {
  const mockUpdateFilterFormAction = jest.fn();
  const wrapper = shallow(
    <FilterForm
      name="the name"
      rating="the rating"
      facility="the facility"
      updateFilterFormAction={mockUpdateFilterFormAction}
      filterHotelsAction={() => {}}
    />,
  );

  wrapper.find(`.filter-form__${field}-field`).simulate('change', {
    currentTarget: {
      value: 'test value',
    },
  });

  expect(mockUpdateFilterFormAction).toHaveBeenCalledWith({
    [field]: 'test value',
  });
});
