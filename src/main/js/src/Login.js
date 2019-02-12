import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import Auth from './auth/Auth';

function Login(props){
    const auth = new Auth();
    return(
        <Fragment>
            <Button onClick={ auth.login() }>LOGIN</Button>
        </Fragment>
    );

}

export default Login;