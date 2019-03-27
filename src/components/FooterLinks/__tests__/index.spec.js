import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterLinks from '../';

describe('<FooterLinks />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterLinks>Test</FooterLinks>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
