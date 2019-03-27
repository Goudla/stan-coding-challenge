import * as React from 'react';

// Assets
import appStoreSVG from './assets/app-store.svg';

class IconAppStore extends React.PureComponent<*> {
  render() {
    return (
      <img src={appStoreSVG} alt="App Store" width="135" />
    );
  }
}

export default IconAppStore;
