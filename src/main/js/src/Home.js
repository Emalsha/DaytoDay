import React , { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles, Typography, Grid, Button } from '@material-ui/core';

class Home extends Component {
    
    render(){
        const { classes } = this.props; 
        const username = "Amy";
        return(
            <Fragment>
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Hi! {username}, Welcome to your cards.
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Minimalistic Journal is a good way to measure and monitor your daily activity, progress and achievement. 
                    Here you can see all of your current cards. 
                    </Typography>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary" component={ Link } to="/cards">
                            Write First Card
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" color="primary">
                            Read More
                        </Button>
                        </Grid>
                    </Grid>
                    <Button onClick={ this.props.auth.login() }>LOGIN</Button>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
    
}

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


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);