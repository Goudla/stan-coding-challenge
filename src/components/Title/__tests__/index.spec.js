import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Title from '../';

describe('<Title />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Title>Test</Title>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
