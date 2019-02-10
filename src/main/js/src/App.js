import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBarStatic from './component/AppBarStatic';
import { CssBaseline } from '@material-ui/core';
import Footer from './component/Footer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Home = lazy(()=> import('./Home'));
const AllCard = lazy(() => import('./card/AllCardVIew'));
const Register = lazy(()=> import('./user/RegisterForm'));

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      open:true,
    }
  }
  
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props; 
    const { open } = this.state;
    return (
      <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBarStatic open={ open } handleOpen={this.handleDrawerOpen} handleClose={this.handleDrawerClose } />
          <main className={classNames(classes.content, open && classes.drawerMarginOpen)}>
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={ Home } /> 
                <Route exact path="/cards" component={AllCard} /> 
                <Route exact path="/register" component={Register} /> 
              </Suspense>
              <Footer />
          </main>
      </div>
      </React.Fragment>      
    );
  }
}

const styles = theme => ({
  display:"flex",
  content: {
    flexGrow: 1,
    height:'full',
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
    position:"relative",
    marginTop:"64px",
    marginLeft:theme.spacing.unit * 7,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerMarginOpen:{
    marginLeft:240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
});

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);