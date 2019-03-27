import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import IconAppStore from '../';

describe('<IconAppStore />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<IconAppStore />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
