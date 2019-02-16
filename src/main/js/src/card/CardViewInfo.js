import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
 
class CardViewInfo extends Component{

    constructor(props){
        super(props);

        this.state = { 
            username : "Emalsha",
        }
    }


    render(){
        const { classes } = this.props; 
        return(
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    CARD 
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Each card represent your day. It shoows most important things to know about your day.
                    </Typography>
                </div>
            </div>
        );
    }
}

CardViewInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};


const styles = theme => ({
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    }
});  

export default withStyles(styles)(CardViewInfo);