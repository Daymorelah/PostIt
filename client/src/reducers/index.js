
import {combineReducers} from 'redux';
import signUpReducer from './signUpReducer.jsx';
import loginReducer from './loginReducer.jsx';

export default combineReducers({
  signUpReducer,
  loginReducer,
});