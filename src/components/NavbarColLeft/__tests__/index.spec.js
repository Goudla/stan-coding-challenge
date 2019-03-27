import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import NavbarColLeft from '../';

describe('<NavbarColLeft />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<NavbarColLeft>Test</NavbarColLeft>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
