type State = any;

type Action = {
  +type: string,
  +payload: any
};

// The initial state of the App
const initialState = {};

function errorReducer(state: State = initialState, action: Action) {
  const { type } = action;
  const matches = /(.*)_(SUCCESS)/.exec(type);

  // not a *_SUCCESS actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request has previously been successful
    [requestName]: requestState === 'SUCCESS',
  };
}

export default errorReducer;
