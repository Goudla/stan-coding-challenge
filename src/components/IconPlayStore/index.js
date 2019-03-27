import * as React from 'react';

// Assets
import playStoreSVG from './assets/play-store.svg';

class IconPlayStore extends React.PureComponent<*> {
  render() {
    return (
      <img src={playStoreSVG} alt="Play Store" width="135" />
    );
  }
}

export default IconPlayStore;
