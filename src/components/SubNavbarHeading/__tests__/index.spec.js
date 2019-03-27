import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import SubNavbarHeading from '../';

describe('<SubNavbarHeading />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SubNavbarHeading>Test</SubNavbarHeading>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
