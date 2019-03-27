type State = any;

type Action = {
  +type: string,
  +payload: any
};

// The initial state of the App
const initialState = {};

function loadingReducer(state: State = initialState, action: Action) {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    [requestName]: requestState === 'REQUEST',
  };
}

export default loadingReducer;
