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

import { Login }            from './actions/userActions';

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
    this.props.onLogin(this.state)
    this.props.history.push('/home');
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
            <Button type="submit">
              Login
            </Button>
          </form>
        </CardBody>
      </StyledCard>
    );
  }
}

const StyledCard = styled(Card)`
  margin : 30px;
`;

export default connect(
  state => ({}),
  dispatch => ({
    onLogin: user => {
      dispatch(Login(user));
    }
  })
)(LoginPage);
