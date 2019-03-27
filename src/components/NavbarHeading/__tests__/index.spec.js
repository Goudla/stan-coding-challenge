import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import NavbarHeading from '../';

describe('<NavbarHeading />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<NavbarHeading>Test</NavbarHeading>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
