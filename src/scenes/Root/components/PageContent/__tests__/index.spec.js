import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import PageContent from '../';

describe('<PageContent />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PageContent>Test</PageContent>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
