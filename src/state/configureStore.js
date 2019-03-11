import {
  combineReducers, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import hotelsReducer from './hotels/reducer';

export const rootReducer = combineReducers({
  hotels: hotelsReducer,
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(),
  );

  return store;
}
