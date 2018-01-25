
const signUpReducer = (state=[], action)=>{
  switch(action.type){
  case 'CREATE_USER_SUCCESS':
    return [
      ...state,
      Object.assign({}, action.message)
    ];
  default:
    return state;
  }
};

export default signUpReducer;