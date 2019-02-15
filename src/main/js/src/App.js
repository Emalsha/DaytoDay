import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import AppRoute from './component/AppRoute';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppRoute />
      </React.Fragment>      
    );
  }
}
export default App;