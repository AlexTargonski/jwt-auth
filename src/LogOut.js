import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Button }           from 'reactstrap';

import { logout }           from './actions/userActions';

class LogOut extends Component {
  handleClick = () => {
    this.props.onLogOut();
  };

  render() {
    return (
      <Button onClick={this.handleClick}>
        Log out
      </Button>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps)  => ({
  onLogOut: () => {
    dispatch(logout());
    ownProps.history.push('/');
  }
});

export default connect(null, mapDispatchToProps)(LogOut);
