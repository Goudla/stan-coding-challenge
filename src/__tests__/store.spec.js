import { createBrowserHistory } from 'history';

import configureStore, { migrations } from '../configureStore';

// History
const history = createBrowserHistory();

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore(history);
  });

  describe('store', () => {
    it('should contain store', () => {
      expect(store.store).toMatchSnapshot();
    });
  });

  describe('persistor', () => {
    it('should contain persistor', () => {
      expect(store.persistor).toMatchSnapshot();
    });
  });
});

describe('redux persist migrations', () => {
  it('version 0 migrations should return an empty object', () => {
    expect(migrations['0']()).toEqual({});
  });
});
