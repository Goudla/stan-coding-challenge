import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Root from '../';

describe('<Root />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Root />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
