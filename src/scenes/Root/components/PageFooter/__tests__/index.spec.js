import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import PageFooter from '../';

describe('<PageFooter />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PageFooter>Test</PageFooter>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
