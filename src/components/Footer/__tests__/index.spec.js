import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Footer from '../';

describe('<Footer />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Footer>Test</Footer>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
