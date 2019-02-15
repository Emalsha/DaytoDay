import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Auth from './auth/Auth';
import AppRoute from './component/AppRoute';

const auth = new Auth();
class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppRoute auth={auth} /> 
      </React.Fragment>      
    );
  }
}

export default App;