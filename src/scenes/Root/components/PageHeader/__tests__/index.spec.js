import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import PageHeader from '../';

describe('<PageHeader />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PageHeader>Test</PageHeader>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
