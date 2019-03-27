import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterSocialLinks from '../';

describe('<FooterSocialLinks />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterSocialLinks>Test</FooterSocialLinks>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
