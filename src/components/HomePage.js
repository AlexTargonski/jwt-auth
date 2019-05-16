import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { getUser }          from '../actions/userActions';
import LogOut               from './LogOut';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { userData } = this.props;

    return (
      <>
        {
          userData &&
          <>
            <h1>Welcome, {userData.firstName}</h1>
            <LogOut />
          </>
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  userData : state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch(getUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
