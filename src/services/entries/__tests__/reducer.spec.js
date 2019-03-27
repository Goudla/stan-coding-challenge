import entriesReducer from '../reducer';
import { entriesLoaded } from '../actions';

describe('entriesReducer', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(
      entriesReducer(undefined, {
        type: 'TEST',
        payload: {}
      })
    ).toEqual(expectedResult);
  });

  it('should handle the entriesLoaded action correctly', () => {
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
    const expectedResult = fixture;

    expect(entriesReducer(state, entriesLoaded(fixture))).toEqual(expectedResult);
  });
});
