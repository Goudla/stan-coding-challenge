import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterCopyright from '../';

describe('<FooterCopyright />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterCopyright>Test</FooterCopyright>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
