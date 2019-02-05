import React, { Component } from 'react';
import AllCardView from './card/AllCardVIew';
import AppBarStatic from './component/AppBarStatic';
import { CssBaseline } from '@material-ui/core';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBarStatic appName="Day-to-Day"/>
          <AllCardView />
        <Footer />
      </React.Fragment>      
    );
  }
}

export default App;