import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import hotelsReducer from './hotels/reducer';

import hotelsSagas from './hotels/sagas';

export const rootReducer = combineReducers({
  hotels: hotelsReducer,
});

export function* rootSaga() {
  yield all([
    fork(hotelsSagas),
  ]);
}

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
