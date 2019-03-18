import { shallow } from 'enzyme';
import React from 'react';
import { FilterForm } from './FilterForm';

test('renders default state passing form data', () => {
  const wrapper = shallow(
    <FilterForm
      name="the name"
      rating="the rating"
      facility="the facility"
      selectedFacilities={[]}
      availableFacilities={['gym']}
      updateFilterFormAction={() => {}}
      filterHotelsAction={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

test.each(['name', 'rating'])('onChange for the %s field triggers updateFilterFormAction()', (field) => {
  const mockUpdateFilterFormAction = jest.fn();
  const wrapper = shallow(
    <FilterForm
      name="the name"
      rating="the rating"
      facility="the facility"
      selectedFacilities={[]}
      availableFacilities={[]}
      updateFilterFormAction={mockUpdateFilterFormAction}
      filterHotelsAction={() => {}}
    />,
  );

  wrapper.find(`.filter-form__${field}-field`).simulate('change', {
    target: {
      value: 'test value',
    },
  });

  expect(mockUpdateFilterFormAction).toHaveBeenCalledWith({
    [field]: 'test value',
  });
});

test('a checked facility checkbox triggers facilitiesChangeHandler() and adds to selection', () => {
  const mockUpdateFilterFormAction = jest.fn();
  const wrapper = shallow(
    <FilterForm
      name="the name"
      rating="the rating"
      facility="the facility"
      selectedFacilities={['gym']}
      availableFacilities={['gym', 'spa']}
      updateFilterFormAction={mockUpdateFilterFormAction}
      filterHotelsAction={() => {}}
    />,
  );

  const checkbox = wrapper.find({ id: 'facility0' });

  checkbox.simulate('change', {
    target: {
      checked: true,
      value: 'test value',
    },
  });
  expect(mockUpdateFilterFormAction).toHaveBeenLastCalledWith({
    facilities: ['gym', 'test value'],
  });
});

test('an unchecked facility checkbox triggers facilitiesChangeHandler() and removes from selection', () => {
  const mockUpdateFilterFormAction = jest.fn();
  const wrapper = shallow(
    <FilterForm
      name="the name"
      rating="the rating"
      facility="the facility"
      selectedFacilities={['gym']}
      availableFacilities={['gym', 'spa']}
      updateFilterFormAction={mockUpdateFilterFormAction}
      filterHotelsAction={() => {}}
    />,
  );

  const checkbox = wrapper.find({ id: 'facility0' });

  checkbox.simulate('change', {
    target: {
      checked: false,
      value: 'gym',
    },
  });
  expect(mockUpdateFilterFormAction).toHaveBeenLastCalledWith({
    facilities: [],
  });
});
