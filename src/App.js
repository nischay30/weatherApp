import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <HomePage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
