import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from '@material-ui/core';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

class Register extends React.Component {

  constructor(props){
    super(props);
    
    const newUser = {
        firstName : "",
        lastName : "",
        username : "",
        email : "",
        password : "",
        birthdate : ""
    };

    this.state = {
        user: newUser,
    };
  }
  

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    const { user } = this.state;
    user[name] = value;
    this.setState({user:user}); 
  }

  handleSubmit = (event) => {
    
    event.preventDefault();
    const { user } = this.state;

    fetch('/api/users',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })
        .then(res =>{
          if(res.ok){
            //TODO : Make endpoint response boolean by overiding the save method
          }
        })
        .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Register
            </Typography>

            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                Your Data
                </Typography>
                <form onSubmit={this.handleSubmit}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="firstName" name="firstName" label="First name" fullWidth autoComplete="fname" onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="lastName" name="lastName" label="Last name" fullWidth autoComplete="lname" onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="birthdate" name="birthdate" label="Birthday" type="date" className={classes.textField} InputLabelProps={{shrink: true,}} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="email" name="email" label="E-Mail" type="email" fullWidth autoComplete="email" onChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="username" name="username" label="Username" fullWidth autoComplete="username" onChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="password" name="password" label="Password" type="password" fullWidth autoComplete="Password" onChange={this.handleChange} />
                    </Grid>
                    <div className={classes.buttons}>
                        <Button variant="contained" color="primary" type="submit" className={classes.button} > Continue</Button>
                    </div>
                </Grid>
                </form>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);