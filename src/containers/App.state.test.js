import {
  mapStateToProps,
  mapDispatchToProps,
} from './App.state';
import { fetchHotels } from '../state/hotels/actions';

test('mapStateToProps() is configured as expected', () => {
  expect(mapStateToProps({
    hotels: {
      list: 'list',
      loading: 'loading',
    },
  })).toEqual({
    data: 'list',
    loading: 'loading',
  });
});

test('mapDispatchToProps() is configured as expected', () => {
  expect(mapDispatchToProps).toEqual({
    fetchHotelsAction: fetchHotels,
  });
});
