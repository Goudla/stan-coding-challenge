/**
 * reducers
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Types
import type { BrowserHistory } from 'history/createBrowserHistory';
import type { ConnectRouter } from 'connected-react-router';

// Reducers
import errorReducer from './services/error/reducer';
import initialDataLoadedReducer from './services/initialDataLoaded/reducer';
import loadingReducer from './services/loading/reducer';
import entriesReducer from './services/entries/reducer';

type RootReducer = ConnectRouter;

export default (history: BrowserHistory): RootReducer =>
  combineReducers({
    router: connectRouter(history),
    error: errorReducer,
    initialDataLoaded: initialDataLoadedReducer,
    loading: loadingReducer,
    entries: entriesReducer
  });
