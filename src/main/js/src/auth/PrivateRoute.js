import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component:Component, ...rest}) => {
  const { auth } = rest;
  return (
      <Route 
        {...rest} 
        render = { props => 
          auth.isAuthenticated() ? <Component {...props}/> : <Redirect to={ {pathname: '/', state: { from : props.location }} } />
        }  
      />
    );
}