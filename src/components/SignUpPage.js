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
import * as R               from 'ramda';
import validator            from 'validator';

import { signUp }           from '../actions/userActions';

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
            <Button
              type="submit"
              disabled={!canSubmitForm(this.state)}
            >
              Sign up
            </Button>
          </form>
        </CardBody>
      </StyledCard>
    );
  }
}

const canSubmitForm = ({
  username,
  password,
  firstName,
  lastName,
}) => R.all(R.equals(true))([
  validator.isEmail(username),
  !R.isEmpty(username),
  !R.isEmpty(password),
  !R.isEmpty(firstName),
  !R.isEmpty(lastName),
]);

const StyledCard = styled(Card)`
  margin : 30px;
`;

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      onSignUp: user => {
        dispatch(signUp(user));
        ownProps.history.push('/');
      },
   };
};

export default connect(null, mapDispatchToProps)(SignUpPage);
