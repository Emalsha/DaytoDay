import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Home from './Home';
import Auth from './auth/Auth';
import AppRoute from './component/AppRoute';

const auth = new Auth();

class App extends Component {

  render() {
    // const isAuthenticated = auth.isAuthenticated();
    const isAuthenticated = true;
    return (
      <React.Fragment>
        <CssBaseline />
        { isAuthenticated ? <AppRoute />:<Home auth={auth}/>} 
      </React.Fragment>      
    );
  }
}

export default App;