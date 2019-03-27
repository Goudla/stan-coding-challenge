import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import Col from '../';

describe('<Col />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Col>Test</Col>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
