/**
 * sagas
 */
import { all, fork } from 'redux-saga/effects';

// Types
import type { Saga } from 'redux-saga';

// Sagas
import entriesData from './services/entries/sagas';

const rootSaga = function* rootSagas(): Saga<void> {
  yield all([fork(entriesData)]);
};

export default rootSaga;
