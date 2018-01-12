
const groupReducer = (state=[], action)=>{
  switch (action.type) {
  case 'GET_CREATED_GROUPS_SUCCESS':
  console.log('in group reducer action.numberOfgroups is ===> ', action.numberOfGroups);
  console.log('in group reducer action is ===> ', action);
    return [
      ...state,
      Object.assign({}, action)
    ];
  default:
    return state;
  } //end of switch selection statement
};//end of function definiton

export default groupReducer;