import * as React from 'react';

// Assets
import windowsStoreSVG from './assets/windows-store.svg';

class IconWindowsStore extends React.PureComponent<*> {
  render() {
    return (
      <img src={windowsStoreSVG} alt="Windows Store" width="110" />
    );
  }
}

export default IconWindowsStore;
