import React                   from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                              from 'react-router-dom';

import LoginPage               from '../components/LoginPage';
import SignUpPage              from '../components/SignUpPage';
import HomePage                from '../components/HomePage';
import PrivateRoute            from './PrivateRoute';

export default (
  <Router>
    <Switch>
      <Route        exact path="/"        component={LoginPage} />
      <Route        exact path="/sign_up" component={SignUpPage} />
      <PrivateRoute exact path="/home"    component={HomePage} />
    </Switch>
  </Router>
);
