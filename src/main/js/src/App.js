import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBarStatic from './component/AppBarStatic';
import { CssBaseline } from '@material-ui/core';
import Footer from './component/Footer';

const AllCard = lazy(() => import('./card/AllCardVIew'));
const Register = lazy(()=> import('./user/RegisterForm'));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBarStatic appName="Day-to-Day"/>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/cards" component={AllCard} /> 
              <Route path="/register" component={Register} /> 
            </Suspense>
          </Router>
        <Footer />
      </React.Fragment>      
    );
  }
}

export default App;