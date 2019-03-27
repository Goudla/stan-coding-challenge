/*
 * Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, payload: { var: var } }
 *    }
 */

import type { Entry } from './types';

import {
  LOAD_PHOTOS_REQUEST,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE
} from './constants';

/**
 * Load the entries, this action starts the request saga
 * @return {object} An action object with a type of LOAD_PHOTOS_REQUEST
 */
export function loadEntries() {
  return {
    type: LOAD_PHOTOS_REQUEST
  };
}

/**
 * Dispatched when the entries are loaded by the request saga
 * @param  {array} entries The entries data
 * @return {object} An action object with a type of LOAD_PHOTOS_SUCCESS passing the entries
 */
export function entriesLoaded(entries: { [string]: Entry }) {
  return {
    type: LOAD_PHOTOS_SUCCESS,
    payload: {
      entries
    }
  };
}

/**
 * Dispatched when loading the entries fails
 * @param  {object} error The error
 * @return {object} An action object with a type of LOAD_PHOTOS_FAILURE passing the error
 */
export function entriesLoadingFailure(error: Error) {
  return {
    type: LOAD_PHOTOS_FAILURE,
    payload: error,
    error: true
  };
}
