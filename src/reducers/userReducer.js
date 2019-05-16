import { GET_USER } from '../constants';

export default function user(state = {}, action) {

  switch (action.type) {
    case GET_USER:
    return {
      ...state,
      ...action.payload
    };

    default:
      return state;
  }
}
