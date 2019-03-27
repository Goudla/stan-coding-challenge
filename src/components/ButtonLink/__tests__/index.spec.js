import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Button from '../';

describe('<Button />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Button>Test</Button>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
