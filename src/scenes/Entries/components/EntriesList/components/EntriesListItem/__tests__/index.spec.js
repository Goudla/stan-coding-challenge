import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import EntriesListItem from '../';

describe('<EntriesListItem />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<EntriesListItem entryTitle="test" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
