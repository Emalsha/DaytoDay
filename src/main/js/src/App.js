import React, { Component } from 'react';
import { CssBaseline, Button } from '@material-ui/core';
import AppBarStatic from './component/AppBarStatic';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated, /*userHasScopes */ } = this.props.auth;

    return (
      <React.Fragment>
        <CssBaseline />

        <div>
            <Button
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'cards')}
                  >
                    Cards
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'ping')}
                  >
                    Ping
                  </Button>
                )
            }
            
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
      </div>
      </React.Fragment>      
    );
  }
}
export default App;