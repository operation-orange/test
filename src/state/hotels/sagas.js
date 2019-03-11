import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import { getHotels } from '../../api/client';
import {
  FETCH,
  fetchHotelsSuccessful,
} from './actions';

function* fetchHotels() {
  try {
    const data = yield call(getHotels);
    yield put(fetchHotelsSuccessful(data));
  } catch (e) {
    // do API error handling
  }
}

function* saga() {
  yield takeLatest(FETCH, fetchHotels);
}

export default saga;
