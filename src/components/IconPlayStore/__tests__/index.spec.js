import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import IconPlayStore from '../';

describe('<IconPlayStore />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<IconPlayStore />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
