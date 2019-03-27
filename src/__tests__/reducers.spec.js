import { createStore } from 'redux';
import { createBrowserHistory } from 'history';

// Reducers
import createRootReducer from '../reducers';

// History
const history = createBrowserHistory();

const store = createStore(createRootReducer(history));

describe('reducers', () => {
  it('should be able to be used to configure store', () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
