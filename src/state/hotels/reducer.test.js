import reducer from './reducer';
import {
  updateFilterForm,
  fetchHotels,
  fetchHotelsSuccessful,
} from './actions';

test('test default state', () => {
  expect(reducer(undefined, {})).toEqual({
    filterForm: {
      name: '',
      rating: '',
      facility: '',
    },
    loading: false,
    list: [],
  });
});

test('updateFilterForm() action updates state as expected', () => {
  const mockState = {
    filterForm: {
      name: '',
      rating: '',
      facility: '',
    },
  };
  const newState = reducer(mockState, updateFilterForm({ name: 'testy' }));
  expect(newState).toEqual({
    filterForm: {
      name: 'testy',
      rating: '',
      facility: '',
    },
  });
});

test('fetchHotels() action updates state as expected', () => {
  const mockState = {
    loading: false,
    list: [],
  };
  const newState = reducer(mockState, fetchHotels());
  expect(newState).toEqual({
    loading: true,
    list: [],
  });
});

test('fetchHotelsSuccessful() action updates state as expected', () => {
  const mockState = {
    loading: false,
    list: [],
  };
  const newState = reducer(mockState, fetchHotelsSuccessful([{ testy: 'westy' }]));
  expect(newState).toEqual({
    loading: false,
    list: [{ testy: 'westy' }],
  });
});
