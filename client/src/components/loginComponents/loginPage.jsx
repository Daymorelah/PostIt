
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import LoginForm from './loginForm.jsx';
import LoginResponce from './loginResponce.jsx';
import * as LoginActions from '../../actions/loginActions.jsx';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.formInputAction = this.formInputAction.bind(this);
  }//end of constructor method
  formInputAction(formInput){
    this.props.useFormInput(formInput);
  }//end of method form input action
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
              <Link to='#' className="navbar-brand"> PostIt</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="#"><span className="glyphicon glyphicon-log-out"></span> Login</Link></li>
                <li><Link to="/signUpPage"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <LoginForm SubmitFormInput={this.formInputAction}/>
        { //Redirect user to home page after creating a user
        (this.props.loginResponce.length === 1) ? 
        <LoginResponce responce={this.props.loginResponce}/> : <div></div>
        }
      </div>
    );//end of return statement
  }//end of class definition
}//end of stateless functional component creategroup

const mapStateToProps = (state, ownProps)=>{
  return {
    loginResponce: state.loginReducer
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    useFormInput: (formInput)=>{dispatch(LoginActions.loginUser(formInput));}
  };
};

LoginPage.propTypes = {
  useFormInput: PropTypes.func,
  loginResponce: PropTypes.array
};//end of propType validation

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);