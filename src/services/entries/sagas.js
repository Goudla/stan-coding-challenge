/**
 * Gets the entries
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PHOTOS_REQUEST } from './constants';
import { entriesLoaded, entriesLoadingFailure } from './actions';
import axios from 'axios';
import keyBy from 'lodash.keyby';

// Types
import type { Saga } from 'redux-saga';

// Environment
const REACT_APP_API_URL: string = String(process.env.REACT_APP_API_URL);

/**
 * entries request/response handler
 */
export function* getEntries(): Saga<void> {
  const requestURL = `${REACT_APP_API_URL}/sample.json`;

  try {
    const entries = yield call(axios.get, requestURL);
    const entriesKeyedByTitle = keyBy(entries.data.entries, 'title');
    yield put(entriesLoaded(entriesKeyedByTitle));
  } catch (err) {
    yield put(entriesLoadingFailure(err));
  }
}

/**
 * Ssaga manages watcher lifecycle
 */
export default function* entriesData(): Saga<void> {
  // Watches for LOAD_PHOTOS_REQUEST actions and calls getEntries when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  yield takeLatest(LOAD_PHOTOS_REQUEST, getEntries);
}
