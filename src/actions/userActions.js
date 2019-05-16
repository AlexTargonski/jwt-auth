import axios from 'axios';

import {
  API_URL,
  GET_USER
}            from '../constants';

export function signUp(user) {
  return function(dispatch) {
    axios.post(
      `${API_URL}/register`,
      user,
      { headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => {
      console.error('error: ', err);
    })
  }
};

export function login(user) {
  return function(dispatch) {
    axios.post(
      `${API_URL}/login`,
      user,
      { headers: {'Authorization': 'Bearer JWT_VALUE'} }
    )
    .then(({ data : { token }}) => {
      localStorage.setItem('token', token);
    })
    .catch(err => {
      console.error('error: ', err);
    })
  }
};

export function getUser() {
  return function(dispatch) {
    axios.get(
      `${API_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: GET_USER, payload: res.data });
      }
    })
    .catch(err => {
      console.error('error: ', err);
    })
  }
}

export function logout(user) {
  return function(dispatch) {
    axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }
    )
    .then(() => {
      localStorage.removeItem('token')
    })
    .catch(err => {
      console.error('error: ', err);
    })
  }
};
