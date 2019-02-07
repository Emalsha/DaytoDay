import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBarStatic from './component/AppBarStatic';
import { CssBaseline } from '@material-ui/core';
import Footer from './component/Footer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const AllCard = lazy(() => import('./card/AllCardVIew'));
const Register = lazy(()=> import('./user/RegisterForm'));
const styles = theme => ({
  display:"flex",
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
    position:"relative",
    marginTop:"64px",
  },
});

class App extends Component {
  render() {
    const { classes } = this.props; 
    return (
      <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBarStatic appName="Day-to-Day"/>
          <main className={classes.content}>
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/cards" component={AllCard} /> 
                <Route exact path="/register" component={Register} /> 
              </Suspense>
          </main>
        <Footer />
      </div>
      </React.Fragment>      
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);