import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import App from '../App';

describe('<App />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
