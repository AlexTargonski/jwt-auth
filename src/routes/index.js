import React                   from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
}                              from 'react-router-dom';

import LoginPage               from '../components/LoginPage';
import SignUpPage              from '../components/SignUpPage';
import HomePage                from '../components/HomePage';
import PrivateRoute            from './PrivateRoute';

const token = localStorage.getItem('token');

export default (
  <Router>
    <Switch>
      {token  && <Redirect from="/" to="/home" exact />}
      {token  && <Redirect from="/sign_up" to="/home" exact />}
      <Route        exact path="/"        component={LoginPage} />
      <Route        exact path="/sign_up" component={SignUpPage} />
      <PrivateRoute exact path="/home"    component={HomePage} />
    </Switch>
  </Router>
);
