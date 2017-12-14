
export const signUpReducer = (state=[], action)=>{
  switch(action.type){
  case 'CREATE_USER_SUCCESS':
    console.log('responce in reducer ===>> ',action.message);
    return [
      ...state,
      Object.assign({}, action.message)
    ];
  default:
    return state;
  }
};