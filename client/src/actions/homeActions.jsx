
import Axios from 'axios';
import * as AcionTypes from './actionTypes.jsx';

const getUsersUrl = 'https://postit24.herokuapp.com/api/v1/user/list';

export const getRegisteredUsersSuccess = (users)=>{
  console.log('number of users are ==> ', users.length);
  return {
    type: AcionTypes.getRegisteredUsersSuccess,
    numberOfUsers: users.length,
    users
  };
};

export const getRegisteredUsers = ()=>{
  return (dispatch)=>{
    return Axios.get(getUsersUrl)
    .then( (responce)=>{
      console.log('the responce is ===> ', responce);
      dispatch(getRegisteredUsersSuccess(responce.data));
    }).catch( (error)=> {throw(error);});
  };
};
