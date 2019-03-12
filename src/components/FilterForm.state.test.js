import {
  mapStateToProps,
  mapDispatchToProps,
} from './FilterForm.state';
import { updateFilterForm } from '../state/hotels/actions';

test('mapStateToProps() is configured as expected', () => {
  expect(mapStateToProps({
    hotels: {
      filterForm: {
        name: 'name',
        rating: 'rating',
        facility: 'facility',
      },
    },
  })).toEqual({
    name: 'name',
    rating: 'rating',
    facility: 'facility',
  });
});

test('mapDispatchToProps() is configured as expected', () => {
  expect(mapDispatchToProps).toEqual({
    updateFilterFormAction: updateFilterForm,
  });
});
