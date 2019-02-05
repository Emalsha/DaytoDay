import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBarStatic from './AppBarStatic';
import CardView from './CardView';
import CardComponent from './CardComponent';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

function Album(props) {
  const { classes } = props;
  const isCardViewEnable = true;
  const isCardAvailable = true;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarStatic appName="Day-to-Day"/>
      <main>
        { isCardViewEnable ? <CardView /> : ""}
        { isCardAvailable ? <CardComponent/> : "No Card Available"}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);