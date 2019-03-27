import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterSocialLink from '../';

describe('<FooterSocialLink />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterSocialLink>Test</FooterSocialLink>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
