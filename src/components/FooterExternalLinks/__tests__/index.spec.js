import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterExternalLinks from '../';

describe('<FooterExternalLinks />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterExternalLinks>Test</FooterExternalLinks>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
