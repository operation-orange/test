import React from 'react';
import PropTypes from 'prop-types';
import connectState from './FilterForm.state';

const changeHandler = (action, field) => e => action({ [field]: e.currentTarget.value });

export const FilterForm = ({
  name, rating, facility, updateFilterFormAction,
}) => (
  <div className="filter-form">
    <input
      type="text"
      className="filter-form__name-field"
      onChange={changeHandler(updateFilterFormAction, 'name')}
      value={name}
    />
    <input
      type="text"
      className="filter-form__rating-field"
      onChange={changeHandler(updateFilterFormAction, 'rating')}
      value={rating}
    />
    <input
      type="text"
      className="filter-form__facility-field"
      onChange={changeHandler(updateFilterFormAction, 'facility')}
      value={facility}
    />
    <button type="button">Filter</button>
  </div>
);

FilterForm.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  facility: PropTypes.string.isRequired,
  updateFilterFormAction: PropTypes.func.isRequired,
};

export default connectState(FilterForm);
