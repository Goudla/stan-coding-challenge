import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';
import orderBy from 'lodash.orderby';

// Selectors
import { selectEntriesArray } from '../../../../services/entries/selectors';

const createDeepEqualSelector: any = createSelectorCreator(defaultMemoize, isEqual);

type Props = {
  programType: string
};

const selectProgramType= (state: any, props: Props) => props.programType;

const selectFilteredEntries = createDeepEqualSelector(
  [selectEntriesArray, selectProgramType],
  (entriesArrayState, programTypeProps) => entriesArrayState
    .filter(value => value.releaseYear >= 2010 && value.programType === programTypeProps)
);

const selectOrderedEntries = createDeepEqualSelector(
  selectFilteredEntries,
  filteredEntriesState =>
    orderBy(filteredEntriesState, 'title')
);

const selectPaginatedEntries = createDeepEqualSelector(
  selectOrderedEntries,
  orderedEntriesState =>
    orderedEntriesState.slice(0, 21)
);

const selectEntryTitles = createDeepEqualSelector(
  selectPaginatedEntries,
  paginatedEntriesState =>
    paginatedEntriesState && paginatedEntriesState.map(value => value.title)
);

export {
  selectFilteredEntries,
  selectOrderedEntries,
  selectPaginatedEntries,
  selectEntryTitles
};
