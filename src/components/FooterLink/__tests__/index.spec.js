import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterLink from '../';

describe('<FooterLink />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterLink>Test</FooterLink>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
