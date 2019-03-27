import rootSaga from '../sagas';

describe('sagas', () => {
  it('should export root saga', () => {
    const generator = rootSaga();
    const value = generator.next().value;
    expect(value).toMatchSnapshot();
  });
});
