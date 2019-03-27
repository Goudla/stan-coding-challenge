import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterStoreLinks from '../';

describe('<FooterStoreLinks />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterStoreLinks>Test</FooterStoreLinks>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
