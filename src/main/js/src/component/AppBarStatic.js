import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, InputBase, Drawer, Divider, List, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItem';

import { fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    
    menuButtonHidden: {
      display: 'none',
    },
    drawerPaper: {
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 7,
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    title: {
      flexGrow:1,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    appNameStyle1:{
      position:'absolute',
      marginTop:'-18px',
    },
    appNameStyle2:{
      fontSize:'3rem',
      position:'absolute',
      marginLeft: '24px',
      marginTop: '-7px'

    },
    appNameStyle3:{
      position:'absolute',
      marginTop: '5px',
      marginLeft: '50px',
    }
});

class AppBarStatic extends Component{

    logout = () => {
      this.props.auth.logout();
    }

    render(){
        const { classes, open, handleOpen, handleClose } = this.props;

        return(
          <React.Fragment>
            <AppBar position="absolute" className={classNames(classes.appBar, open && classes.appBarShift)}>
              <Toolbar  disableGutters={!open} className={classes.toolbar}>
                <IconButton color="inherit" aria-label="Open drawer" onClick={handleOpen} className={classNames(classes.menuButton, open && classes.menuButtonHidden,)}>
                  <MenuIcon />
                </IconButton>
                <Typography className={classes.title} component="div" color="inherit" noWrap>
                    <span className={classes.appNameStyle1}>DAY</span><span className={classes.appNameStyle2}>2</span><span className={classes.appNameStyle3}>DAY</span>
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
                <Button color="inherit" onClick={ this.logout }>Logout</Button>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open = { open }
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>{mainListItems}</List>
              <Divider />
              <List>{secondaryListItems}</List>
            </Drawer>
          </React.Fragment>
        );
    }

}


AppBarStatic.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(AppBarStatic);