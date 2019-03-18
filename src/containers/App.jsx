import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import connectState from './App.state';
import FilterForm from '../components/FilterForm/FilterForm';
import HotelsList from '../components/HotelsList/HotelsList';

export const App = ({ data, fetchHotelsAction }) => {
  useEffect(() => {
    fetchHotelsAction();
  }, []);

  return (
    <div>
      <FilterForm />
      <HotelsList data={data} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.sRequired,
    name: PropTypes.string.sRequired,
    rating: PropTypes.number.isRequired,
    facilities: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  fetchHotelsAction: PropTypes.func.isRequired,
};

export default connectState(App);
