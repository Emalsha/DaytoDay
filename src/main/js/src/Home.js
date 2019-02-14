import React , { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles, Typography, Grid, Button } from '@material-ui/core';

class Home extends Component {
    
    login = () => {
        this.props.auth.login();
    }

    render(){
        const { classes } = this.props; 
        return(
            <Fragment>
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Hi! , Welcome To Minimalistic Journal
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Minimalistic Journal is a good way to measure and monitor your daily activity, progress and achievement. 
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    DAY2DAY system will help you to keep track on your days...
                    </Typography>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary" onClick={this.login}>
                            Login / Register
                        </Button>
                        </Grid>
                        <Grid item>
                        <a target="_blank" rel="noopener noreferrer" href="https://betterhumans.coach.me/draft-how-to-hack-your-brain-to-achieve-consistency-that-lasts-7f5fdc520d28">
                            <Button variant="outlined" color="primary">   
                                Read More
                            </Button>
                        </a>
                        </Grid>
                    </Grid>
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