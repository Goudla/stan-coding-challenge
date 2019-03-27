import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import IconWindowsStore from '../';

describe('<IconWindowsStore />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<IconWindowsStore />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
