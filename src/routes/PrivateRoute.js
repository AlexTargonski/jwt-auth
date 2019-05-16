import React  from 'react';
import {
  Redirect,
  Route,
}             from 'react-router-dom';
import decode from 'jwt-decode';

const token = localStorage.getItem('token');
const refreshToken = localStorage.getItem('refreshToken');

const isAuthenticated = () => {
  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => (
      isAuthenticated() ?
        <Component {...props} />
        :
        <Redirect
          to={{
            pathname : '/',
          }}
        />
    )}
  />
);

export default PrivateRoute;
