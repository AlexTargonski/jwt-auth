import React, { Component } from 'react';
import { connect }          from 'react-redux';
import styled               from 'styled-components';
import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
}                           from 'reactstrap';

import { signUp }           from './actions/userActions';

class SignUpPage extends Component {
  state = {
    username  : '',
    firstName : '',
    lastName  : '',
    password  : '',
  };

  onChange = ({ target : { value, name } }) => {
    this.setState({ [name] : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSignUp(this.state)
    this.props.history.push('/');
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
              <Label for="firstName">FirstName</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LastName</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={this.state.lastName}
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
              Sign up
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
  null,
  dispatch => ({
    onSignUp: user => {
      dispatch(signUp(user));
    }
  })
)(SignUpPage);
