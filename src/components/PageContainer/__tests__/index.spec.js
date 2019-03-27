import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import EntriesContainer from '../';

describe('<EntriesContainer />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<EntriesContainer>Test</EntriesContainer>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
