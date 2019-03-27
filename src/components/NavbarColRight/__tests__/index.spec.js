import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import NavbarColRight from '../';

describe('<NavbarColRight />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<NavbarColRight>Test</NavbarColRight>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
