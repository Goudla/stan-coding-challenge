import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Entries from '../';

describe('<Entries />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Entries
        title="Series"
        programType="series" />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
