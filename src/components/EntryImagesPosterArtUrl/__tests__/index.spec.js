import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Scenes
import { EntryImagesPosterArtUrl } from '../';

describe('<EntryImagesPosterArtUrl />', () => {
  it('Should render url as img', () => {
    const url = 'test';
    const renderer = new ShallowRenderer();
    renderer.render(<EntryImagesPosterArtUrl url={url} />);
    const result = renderer.getRenderOutput();
    expect(result).toEqual(<img src={url} alt="" className="entry-images-poster-art-url" />);
  });

  it('Should render nothing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<EntryImagesPosterArtUrl />);
    const result = renderer.getRenderOutput();
    expect(result).toBeNull();
  });
});
