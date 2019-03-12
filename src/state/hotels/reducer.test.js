import reducer, { filterList } from './reducer';
import {
  updateFilterForm,
  filterHotels,
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
    filteredList: [],
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
    filteredList: [],
  };
  const newState = reducer(mockState, fetchHotels());
  expect(newState).toEqual({
    loading: true,
    list: [],
    filteredList: [],
  });
});

test('fetchHotelsSuccessful() action updates state as expected', () => {
  const mockState = {
    loading: false,
    list: [],
    filteredList: [],
  };
  const newState = reducer(mockState, fetchHotelsSuccessful([{ testy: 'westy' }]));
  expect(newState).toEqual({
    loading: false,
    list: [{ testy: 'westy' }],
    filteredList: [{ testy: 'westy' }],
  });
});

test('filterHotels() action updates state as expected', () => {
  const mockState = {
    filterForm: {
      name: 'westy',
      rating: '',
      facility: '',
    },
    list: [
      { name: 'testy' },
      { name: 'westy' },
    ],
    filteredList: [],
  };

  const newState = reducer(mockState, filterHotels());
  expect(newState.filteredList).toEqual([{ name: 'westy' }]);
});

test('filterList() utility filters by name as expected', () => {
  const filteredList = filterList([
    { name: 'testy', rating: 3, facilities: ['car park'] },
    { name: 'westy', rating: 4, facilities: ['gym'] },
  ], { name: 'testy', rating: '', facility: '' });
  expect(filteredList).toEqual([{ name: 'testy', rating: 3, facilities: ['car park'] }]);
});

test('filterList() utility filters by rating as expected', () => {
  const filteredList = filterList([
    { name: 'testy', rating: 3, facilities: ['car park'] },
    { name: 'westy', rating: 4, facilities: ['gym'] },
  ], { name: '', rating: '4', facility: '' });
  expect(filteredList).toEqual([{ name: 'westy', rating: 4, facilities: ['gym'] }]);
});

test('filterList() utility filters by facility as expected', () => {
  const filteredList = filterList([
    { name: 'testy', rating: 3, facilities: ['car park'] },
    { name: 'westy', rating: 4, facilities: ['gym'] },
  ], { name: '', rating: '', facility: 'gym' });
  expect(filteredList).toEqual([{ name: 'westy', rating: 4, facilities: ['gym'] }]);
});
