
import Axios from 'axios';
import * as actionType from './actionTypes.jsx';

const loginUrl = 'https://postit24.herokuapp.com/api/v1/user/login';
const LoginUrl = 'http://localhost:1111/api/v1/user/login';

export const loginSuccess = (message)=>{
  return {
    type: actionType.loginUserSuccess,
    message,
  };
}; //end of loginSuccess function

export const loginUser = (formInput)=>{
  return (dispatch)=>{
    return Axios.post(loginUrl,formInput)
    .then( (responce)=>{
      dispatch(loginSuccess(responce.data));
    }).catch( error => {
      throw(error);
    });
  };
};//end of loginUser