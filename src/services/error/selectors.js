import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';

const createDeepEqualSelector: any = createSelectorCreator(defaultMemoize, isEqual);

const selectError = state => state.error;
const selectRequestName = (state, props) => props.requestName;

const makeSelectError = () =>
  createDeepEqualSelector(
    [selectError, selectRequestName],
    (errorState, requestNameProp) =>
      errorState[requestNameProp]
  );

export { makeSelectError };
