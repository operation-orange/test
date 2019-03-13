import { connect } from 'react-redux';

import { updateFilterForm, filterHotels } from '../../state/hotels/actions';

export const mapStateToProps = ({ hotels: { filterForm, availableFacilities } }) => ({
  name: filterForm.name,
  rating: filterForm.rating,
  selectedFacilities: filterForm.facilities,
  availableFacilities,
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
