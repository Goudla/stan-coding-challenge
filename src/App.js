import React, { Component } from 'react';
// HashRouter is used so that the app can be doployed to GitHub Pages
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Scenes
import Root from './scenes/Root';

// Styles
import './App.css';

class App extends Component<*> {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Root} />
      </HashRouter>
    );
  }
}

export default App;
