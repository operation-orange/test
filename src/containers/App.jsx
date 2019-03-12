import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectState from './App.state';
import FilterForm from '../components/FilterForm/FilterForm';
import HotelsList from '../components/HotelsList/HotelsList';

export class App extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.sRequired,
      name: PropTypes.string.sRequired,
      rating: PropTypes.number.isRequired,
      facilities: PropTypes.arrayOf(PropTypes.string),
    })).isRequired,
    fetchHotelsAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchHotelsAction } = this.props;
    fetchHotelsAction();
  }

  render() {
    const {
      data,
    } = this.props;

    return (
      <div>
        <FilterForm />
        <HotelsList data={data} />
      </div>
    );
  }
}

export default connectState(App);
