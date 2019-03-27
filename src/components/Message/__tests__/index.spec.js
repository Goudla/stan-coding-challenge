import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Message from '../';

describe('<Message />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Message>Test</Message>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
