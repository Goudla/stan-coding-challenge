import {
  LOAD_PHOTOS_REQUEST,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE
} from '../constants';

import { loadEntries, entriesLoaded, entriesLoadingFailure } from '../actions';

describe('entries actions', () => {
  describe('loadEntries', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_PHOTOS_REQUEST
      };

      expect(loadEntries()).toEqual(expectedResult);
    });
  });

  describe('entriesLoaded', () => {
    it('should return the correct type and the passed entries', () => {
      const fixture = {
        'test': {
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
      };
      const expectedResult = {
        type: LOAD_PHOTOS_SUCCESS,
        payload: {
          entries: fixture
        }
      };

      expect(entriesLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('entriesLoadingFailure', () => {
    it('should return the correct type and the error', () => {
      const fixture = new Error('Something went wrong!');
      const expectedResult = {
        type: LOAD_PHOTOS_FAILURE,
        payload: fixture,
        error: true
      };

      expect(entriesLoadingFailure(fixture)).toEqual(expectedResult);
    });
  });
});
