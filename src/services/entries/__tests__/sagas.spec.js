import { put, takeLatest } from 'redux-saga/effects';
import keyBy from 'lodash.keyby';

import { LOAD_PHOTOS_REQUEST } from '../constants';
import { entriesLoaded, entriesLoadingFailure } from '../actions';

import entriesData, { getEntries } from '../sagas';

describe('getEntries saga', () => {
  let getEntriesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getEntriesGenerator = getEntries();

    const callDescriptor = getEntriesGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the entriesLoaded action if it requests the data successfully', () => {
    const response = {
      data: {
        entries: [
          {
            title: 'test',
            description: 'test',
            programType: 'series',
            images: {
              'Poster Art': {
                url: "https://test.com",
                width: 1234,
                height: 1234
              }
            },
            releaseYear: 1234
          }
        ]
      }
    };
    const responseKeyedById = keyBy(response.data.entries, 'title');
    const putDescriptor = getEntriesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(entriesLoaded(responseKeyedById)));
  });

  it('should call the entriesLoadingFailure action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getEntriesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(entriesLoadingFailure(response)));
  });
});

describe('entriesData saga', () => {
  const entriesDataSaga = entriesData();

  it('should start task to watch for LOAD_PHOTOS_REQUEST action', () => {
    const takeLatestDescriptor = entriesDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_PHOTOS_REQUEST, getEntries)
    );
  });
});
