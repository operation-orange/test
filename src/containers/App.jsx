import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectState from './App.state';
import FilterForm from '../components/FilterForm/FilterForm';

export class App extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(

    )).isRequired,
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

    console.log(data);

    return (
      <div>
        <FilterForm />
      </div>
    );
  }
}

export default connectState(App);
