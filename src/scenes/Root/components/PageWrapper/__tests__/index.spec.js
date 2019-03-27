import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import PageWrapper from '../';

describe('<PageWrapper />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PageWrapper>Test</PageWrapper>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
