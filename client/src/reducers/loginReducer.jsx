
const loginReducer = (state=[], action)=>{
  switch (action.type){
  case 'LOGIN_USER_SUCCESS':
    return [
      ...state,
      Object.assign({}, action.message)
    ];
  default:
    return state;
  }
};

export default loginReducer;