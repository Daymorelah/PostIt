
import Axios from 'axios';

const signUpUrl = 'http://localhost:1111/api/v1/user/signup';

export const createUserSuccess = (message)=>{
  return{
    type: 'CREATE_USER_SUCCESS',
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