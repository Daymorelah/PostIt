import * as types from '../actions/actionTypes.jsx';

export default (
  state = { user: {}, message: null, isAuthenticated: false }, action
) => {
  switch (action.type) {
  case types.signInUser:
  case types.signUpUser:
  case types.loggedInUser:
    return {
      ...state,
      user: action.userInfo,
      message: action.message,
      isAuthenticated: true
    };
  case types.signOutUser:
    return { ...state, user: {}, message: null, isAuthenticated: false };
  default:
    return state;
  }
};