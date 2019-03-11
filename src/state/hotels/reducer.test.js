import reducer from './reducer';
import {
  fetchHotels,
  fetchHotelsSuccessful,
} from './actions';

const getMockState = () => ({
  loading: false,
  list: [],
});

test('test default state', () => {
  expect(reducer(undefined, {})).toEqual({
    loading: false,
    list: [],
  });
});

test('fetchHotels() action updates state as expected', () => {
  const mockState = getMockState();
  const newState = reducer(mockState, fetchHotels());
  expect(newState).toEqual({
    loading: true,
    list: [],
  });
});

test('fetchHotelsSuccessful() action updates state as expected', () => {
  const mockState = getMockState();
  const newState = reducer(mockState, fetchHotelsSuccessful([{ testy: 'westy' }]));
  expect(newState).toEqual({
    loading: false,
    list: [{ testy: 'westy' }],
  });
});
