import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Home from '../';

describe('<Home />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Home />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
