import React, { Component, Fragment, Suspense, lazy } from "react";
import AppBarStatic from "./AppBarStatic";
import { BrowserHistory as  Router, Route, Redirect } from 'react-router-dom';
import Footer from "./Footer";
import Auth from "../auth/Auth";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';

const Home = lazy(()=> import('./../Home'));
const Dashboard = lazy(()=> import('./../card/AllCardVIew'));
const AllCard = lazy(() => import('./../card/AllCardVIew'));
const Register = lazy(()=> import('./../user/RegisterForm'));
const auth = new Auth();

const PrivateRoute = ({ component:Component, ...rest}) => (
  <Route 
    {...rest} 
    render = { props =>
      auth.isAuthenticated ? ( <Component {...props}/>) : ( <Redirect to={ {pathname: 'login', state: { from : props.location }} } />)
    }  
  />
);

class AppRoute extends Component{
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
    
    render(){
        const { open } = this.state;
        const { classes, auth } = this.props;
        return(
            <Fragment>
                <AppBarStatic open={ open } auth={auth} handleOpen={this.handleDrawerOpen} handleClose={this.handleDrawerClose } />
                <main className={classNames(classes.content, open && classes.drawerMarginOpen)}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route exact path="/" component={() => auth.isAuthenticated ? <Dashboard /> : <Home auth={auth}/>}  /> 
                        <Route exact path="/cards" component={AllCard} /> 
                        <Route exact path="/register" component={Register} /> 
                    </Suspense>
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