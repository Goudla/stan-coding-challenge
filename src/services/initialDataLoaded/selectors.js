import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';

const createDeepEqualSelector: any = createSelectorCreator(defaultMemoize, isEqual);

const selectInitialDataLoaded = state => state.initialDataLoaded;
const selectRequestName = (state, props) => props.requestName;

const makeSelectInitialDataLoaded = () =>
  createDeepEqualSelector(
    [selectInitialDataLoaded, selectRequestName],
    (initialDataLoadedState, requestNameProp) =>
      initialDataLoadedState[requestNameProp]
  );

export { makeSelectInitialDataLoaded };
