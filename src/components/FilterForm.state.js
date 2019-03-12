import { connect } from 'react-redux';

import { updateFilterForm, filterHotels } from '../state/hotels/actions';

export const mapStateToProps = ({ hotels: { filterForm } }) => ({
  name: filterForm.name,
  rating: filterForm.rating,
  facility: filterForm.facility,
});

export const mapDispatchToProps = {
  updateFilterFormAction: updateFilterForm,
  filterHotelsAction: filterHotels,
};

const connectState = Component => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default connectState;
