import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

function Footer(props){
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Under Development
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Amazing thing take some time...
            </Typography>
        </footer>
    );
}
const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
        position: "absolute",
        width:"100%",
        bottom:0,
    },
});

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer);