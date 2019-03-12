import React from 'react';
import PropTypes from 'prop-types';
import connectState from './App.state';

export const App = ({ data, fetchHotelsAction }) => {
  console.log(data);
  setTimeout(fetchHotelsAction, 5000);
  return (
    <div>Greeting, Earth!</div>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(

  )).isRequired,
  fetchHotelsAction: PropTypes.func.isRequired,
};

export default connectState(App);
