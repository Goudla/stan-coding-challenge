import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Navbar from '../';

describe('<Navbar />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Navbar>Test</Navbar>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
