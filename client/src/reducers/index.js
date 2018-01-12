
import {combineReducers} from 'redux';
import signUpReducer from './signUpReducer.jsx';
import loginReducer from './loginReducer.jsx';
import homeReducer from './homeReducer.jsx';

export default combineReducers({
  signUpReducer,
  loginReducer,
  homeReducer,
});