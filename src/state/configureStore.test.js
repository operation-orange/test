/* eslint-disable global-require */
import configureStore, { rootReducer } from './configureStore';
import hotelsReducer from './hotels/reducer';

jest.mock('redux', () => ({
  combineReducers: jest.fn(reducers => reducers),
  createStore: jest.fn(() => 'test'),
}));

jest.mock('redux-devtools-extension', () => ({
  composeWithDevTools: jest.fn(() => 'devtools'),
}));

test('combineReducers() has been called with our reducers', () => {
  expect(require('redux').combineReducers).toHaveBeenCalledWith({
    hotels: hotelsReducer,
  });
});

test('configureStore() returns store configured with our reducers and redux-devtools', () => {
  const store = configureStore();
  expect(require('redux').createStore).toHaveBeenCalledWith(rootReducer, 'devtools');
  expect(store).toBe('test');
});
