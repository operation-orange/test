import React from 'react';
import PropTypes from 'prop-types';

const HotelsList = ({ data }) => (
  <table className="hotels-list">
    <thead>
      <tr>
        <td>Name</td>
        <td>Rating</td>
        <td>Facilities</td>
      </tr>
    </thead>
    <tbody>
      {data.map(hotel => (
        <tr key={hotel.id}>
          <td>{hotel.name}</td>
          <td>{hotel.rating}</td>
          <td>{hotel.facilities.join(', ')}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

HotelsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.sRequired,
    name: PropTypes.string.sRequired,
    rating: PropTypes.number.isRequired,
    facilities: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default HotelsList;
