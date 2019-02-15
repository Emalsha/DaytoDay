import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component:Component, auth:Auth, ...rest}) => {
  return (
      <Route 
        {...rest} 
        render = { props => 
          Auth.isAuthenticated() ? <Component {...props}/> : <Redirect to={ {pathname: '/', state: { from : props.location }} } />
        }  
      />
    );
}