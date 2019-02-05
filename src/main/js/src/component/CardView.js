import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
 
class CardView extends Component{

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
                    Hi! { this.state.username }, Welcome to your cards.
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Minimalistic Journal is a good way to measure and monitor your daily activity, progress and achievement. 
                    Here you can see all of your current cards. Each card represent your day. It shoows most important things to know about your day.
                    </Typography>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary">
                            Main call to action
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" color="primary">
                            Secondary action
                        </Button>
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

CardView.propTypes = {
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

export default withStyles(styles)(CardView);