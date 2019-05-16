import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { Login }            from './actions/userActions';

class LoginPage extends Component {
  state={
    username: "",
    password: "",
  };

  onChange = ({ target : { value, name } }) => {
    this.setState({ [name] : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="username"
          value={this.state.username}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <button type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onLogin: user => {
      dispatch(Login(user));
    }
  })
)(LoginPage);
