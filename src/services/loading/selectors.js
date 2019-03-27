import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';

const createDeepEqualSelector: any = createSelectorCreator(defaultMemoize, isEqual);

const selectLoading = state => state.loading;
const selectRequestName = (state, props) => props.requestName;

const makeSelectLoading = () =>
  createDeepEqualSelector(
    [selectLoading, selectRequestName],
    (loadingState, requestNameProp) =>
      loadingState[requestNameProp]
  );

export { makeSelectLoading };
