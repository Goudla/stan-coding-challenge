import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FlexGrid from '../';

describe('<FlexGrid />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FlexGrid>Test</FlexGrid>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
