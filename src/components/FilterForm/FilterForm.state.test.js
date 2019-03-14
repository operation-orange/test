import {
  mapStateToProps,
  mapDispatchToProps,
} from './FilterForm.state';
import {
  updateFilterForm,
  filterHotels,
} from '../../state/hotels/actions';

test('mapStateToProps() is configured as expected', () => {
  expect(mapStateToProps({
    hotels: {
      filterForm: {
        name: 'name',
        rating: 'rating',
        facilities: 'facility',
      },
      availableFacilities: ['testy', 'westy'],
    },
  })).toEqual({
    name: 'name',
    rating: 'rating',
    selectedFacilities: 'facility',
    availableFacilities: ['testy', 'westy'],
  });
});

test('mapDispatchToProps() is configured as expected', () => {
  expect(mapDispatchToProps).toEqual({
    filterHotelsAction: filterHotels,
    updateFilterFormAction: updateFilterForm,
  });
});
