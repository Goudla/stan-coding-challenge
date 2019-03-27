import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import FooterStoreLink from '../';

describe('<FooterStoreLink />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterStoreLink>Test</FooterStoreLink>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
