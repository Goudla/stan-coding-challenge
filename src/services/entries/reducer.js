/*
 * Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return { ...state, yourStateVariable: true };
 */

import { LOAD_PHOTOS_SUCCESS } from './constants';

import type { Entry } from './types';

type State = {
  [string]: Entry
};

type Action = {
  +type: string,
  +payload: any
};

// The initial state of the App
const initialState = {};

function entriesReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case LOAD_PHOTOS_SUCCESS:
      return action.payload.entries;
    default:
      return state;
  }
}

export default entriesReducer;
