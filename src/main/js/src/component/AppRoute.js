import React, { Component, Fragment, Suspense, lazy } from "react";
import AppBarStatic from "./AppBarStatic";
import { Router, Route, Switch } from 'react-router-dom';
import Footer from "./Footer";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import { PrivateRoute } from "../auth/PrivateRoute";
import Auth from "../auth/Auth";
import history from "../auth/history";
import Callback from "../callback/Callback";
import Home from "../Home";

const AllCard = lazy(() => import('./../card/AllCardVIew'));
const Register = lazy(()=> import('./../user/RegisterForm'));
const auth = new Auth(); 
const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class AppRoute extends Component{
    constructor(props){
      super(props);

      this.state = {
        open:true,
      }
    }

    componentDidMount() {
      const { renewSession } = auth;
  
      if (localStorage.getItem('isLoggedIn') === 'true') {
        renewSession();
      }

    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    
    render(){
        const { open } = this.state;
        const { classes } = this.props;
        return(
          <Fragment>
              { auth.isAuthenticated() ? <AppBarStatic open={ open } auth={auth} handleOpen={this.handleDrawerOpen} handleClose={this.handleDrawerClose } /> : "" }
              <main className={classNames(classes.content, auth.isAuthenticated() && open && classes.drawerMarginOpen)}>
                <Router history={history}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                      <Route exact path="/" component={()=> <Home auth={auth}/>}/>
                      <PrivateRoute exact path="/dashboard" auth={auth} component={()=> "Dashboard"} /> 
                      <PrivateRoute exact path="/cards" auth={auth} component={AllCard} /> 
                      <PrivateRoute exact path="/register" auth={auth} component={Register} /> 
                      <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} /> 
                      }}/>
                      <Route path="*" component={() => "404! Page Not Found"}/>
                    </Switch>
                  </Suspense>
                </Router>
                <Footer />
              </main>
          </Fragment>
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
  
  AppRoute.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(AppRoute);