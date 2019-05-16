import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { signUp }           from './actions/userActions';

class SignUpPage extends Component {
  state = {
    username  : "",
    firstName : "",
    lastName  : "",
    password  : "",
  };

  onChange = ({ target : { value, name } }) => {
    this.setState({ [name] : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSignUp(this.state)
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
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <button type="submit">
          Sign up
        </button>
      </form>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onSignUp: user => {
      dispatch(signUp(user));
    }
  })
)(SignUpPage);
