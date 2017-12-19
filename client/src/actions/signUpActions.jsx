
import Axios from 'axios';
import * as actionType from './actionTypes.jsx';

const signUpUrl = 'https://postit24.herokuapp.com/api/v1/user/signup';
const SignUpUrl = 'http://localhost:1111/api/v1/user/signup';

export const createUserSuccess = (message)=>{
  return{
    type: actionType.createUserSuccess,
    message,
  };//end of return statement
};//end of annonymous function

export const createUser = (userInfo)=>{
  return(dispatch) =>{
    return Axios.post(signUpUrl,userInfo)
      .then( (responce)=>{
        dispatch(createUserSuccess(responce.data));
      }).catch(error => {
        throw(error);
      });//end of axiios post request
  };//end of first return statement
};//end of annonumous function