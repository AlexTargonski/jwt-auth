import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { logout }           from './actions/userActions';

class LogOut extends Component {
  handleClick = () => {
    this.props.onLogOut()
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Log out
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogOut: () => {
    dispatch(logout());
  }
});

export default connect(null, mapDispatchToProps)(LogOut);
