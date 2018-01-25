
import Axios from 'axios';
import * as AcionTypes from './actionTypes.jsx';

const getUsersUrl = 'http://postit24.herokuapp.com/api/v1/group/list';

export const getCreatedGroupsSuccess = (groups)=>{
  console.log('number of groups are ==> ', groups.length);
  return {
    type: AcionTypes.getCreatedGroupsSuccess,
    numberOfGroups: groups.length,
    groups
  };
};

export const getCreatedGroups = ()=>{
  return (dispatch)=>{
    return Axios.get(getUsersUrl)
    .then( (responce)=>{
      console.log('the responce is ===> ', responce);
      dispatch(getCreatedGroupsSuccess(responce.data));
    }).catch( (error)=> {throw(error);});
  };
};