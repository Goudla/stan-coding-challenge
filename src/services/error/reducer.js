type State = any;

type Action = {
  +type: string,
  +payload: any
};

// The initial state of the App
const initialState = {};

function errorReducer(state: State = initialState, action: Action) {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store errorMessage
    [requestName]: requestState === 'FAILURE' ? payload.message : '',
  };
}

export default errorReducer;
