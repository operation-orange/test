import React from 'react';
import PropTypes from 'prop-types';
import connectState from './FilterForm.state';

const textChangeHandler = (action, field) => e => action({ [field]: e.target.value });
const facilitiesChangeHandler = (action, selectedFacilities) => (e) => {
  if (e.target.checked) {
    action({ facilities: [...selectedFacilities, e.target.value] });
  } else {
    action({ facilities: selectedFacilities.filter(facility => facility !== e.target.value) });
  }
};

export const FilterForm = ({
  name, rating, selectedFacilities, updateFilterFormAction, filterHotelsAction, availableFacilities,
}) => (
  <div className="filter-form">
    Hotel Name:
    {' '}
    <input
      type="text"
      className="filter-form__name-field"
      onChange={textChangeHandler(updateFilterFormAction, 'name')}
      value={name}
    />
    {' '}
    Rating:
    {' '}
    <input
      type="text"
      className="filter-form__rating-field"
      onChange={textChangeHandler(updateFilterFormAction, 'rating')}
      value={rating}
    />
    {' '}
    Facility:
    {' '}
    {availableFacilities.map((facility, i) => (
      <label key={facility} htmlFor={`facility${i}`}>
        {facility}
        <input
          id={`facility${i}`}
          type="checkbox"
          value={facility}
          onChange={facilitiesChangeHandler(updateFilterFormAction, selectedFacilities)}
          checked={selectedFacilities.includes(facility)}
        />
      </label>
    ))}
    <button
      type="button"
      onClick={filterHotelsAction}
    >
      Filter
    </button>
  </div>
);

FilterForm.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  selectedFacilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateFilterFormAction: PropTypes.func.isRequired,
  filterHotelsAction: PropTypes.func.isRequired,
  availableFacilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connectState(FilterForm);
