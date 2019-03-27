import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Container from '../';

describe('<Container />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Container>Test</Container>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
