import { connect } from 'react-redux';

import { fetchHotels } from '../state/hotels/actions';

export const mapStateToProps = ({ hotels }) => ({
  data: hotels.list,
  loading: hotels.loading,
});

export const mapDispatchToProps = {
  fetchHotelsAction: fetchHotels,
};

const connectState = Component => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default connectState;
