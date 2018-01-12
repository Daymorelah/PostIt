
const homeReducer = (state=[], action)=>{
  switch (action.type) {
  case 'GET_REGISTERED_USERS_SUCCESS':
  console.log('in reducer action.numberOfUsers is ===> ', action.numberOfUsers);
    return [
      ...state,
      {'number':action.numberOfUsers}
    ];
  default:
    return state;
  } //end of switch selection statement
};//end of function definiton

export default homeReducer;