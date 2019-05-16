import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
}                           from 'reactstrap';
import styled               from 'styled-components';
import * as R               from 'ramda';
import validator            from 'validator';

import { login }            from './actions/userActions';

class LoginPage extends Component {
  state={
    username: '',
    password: '',
  };

  onChange = ({ target : { value, name } }) => {
    this.setState({ [name] : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    return (
      <StyledCard>
        <CardBody>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="email"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </FormGroup>
            <Button
              type="submit"
              disabled={!canSubmitForm(this.state)}
            >
              Login
            </Button>
          </form>
        </CardBody>
      </StyledCard>
    );
  }
}

const canSubmitForm = ({ username, password }) => R.all(R.equals(true))([
  validator.isEmail(username),
  !R.isEmpty(username),
  !R.isEmpty(password),
]);

const StyledCard = styled(Card)`
  margin : 30px;
`;

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      onLogin: user => {
        dispatch(login(user));
        ownProps.history.push('/home');
      },
   };
};

export default connect(null, mapDispatchToProps)(LoginPage);
