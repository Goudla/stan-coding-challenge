import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';
import get from 'lodash.get';

// Types
import type { Entry } from './types';

type State = {
  entries: {
    [string]: Entry
  }
};

type Props = {
  entryTitle: number
};

const createDeepEqualSelector: any = createSelectorCreator(defaultMemoize, isEqual);

const selectEntries = (state: State) => state.entries;
const selectEntryTitle = (state: State, props: Props) => props.entryTitle;

const selectEntriesArray = createDeepEqualSelector(
  selectEntries,
  entriesState => Object.values(entriesState)
);

const selectEntry = createDeepEqualSelector(
  selectEntries,
  selectEntryTitle,
  (entriesState, entryTitleProp) => entriesState[entryTitleProp]
);

const makeSelectEntryValue = (field: string) =>
  createDeepEqualSelector(
    selectEntry,
    entryState =>
      get(entryState, field)
  );

export { selectEntries, selectEntriesArray, selectEntry, makeSelectEntryValue };
