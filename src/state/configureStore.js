import {
  combineReducers, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import testyWestyReducer from './testyWesty/reducer';

export const rootReducer = combineReducers({
  testyWesty: testyWestyReducer,
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(),
  );

  return store;
}
