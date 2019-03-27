import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import { EntriesRequest } from '../';

describe('<EntriesRequest />', () => {
  it('Should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<EntriesRequest loadEntries={() => {}} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should call loadEntries on mount', () => {
    const loadEntries = jest.fn();
    TestRenderer.create(<EntriesRequest loadEntries={loadEntries} />);
    expect(loadEntries).toHaveBeenCalled();
  });
});
