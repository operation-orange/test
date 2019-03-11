import {
  fetchHotels,
  fetchHotelsSuccessful,
} from './actions';

test('fetchHotels() returns expected action object', () => {
  expect(fetchHotels()).toEqual({ type: 'hotels/FETCH' });
});

test('fetchHotelsSuccessful() returns expected action object', () => {
  expect(fetchHotelsSuccessful({ testy: 'westy' })).toEqual({
    type: 'hotels/FETCH_SUCCESSFUL',
    payload: { testy: 'westy' },
  });
});
