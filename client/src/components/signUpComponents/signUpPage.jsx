
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from './signUpForm.jsx';
import SignUpResponce from './signUpResponce.jsx';
import * as signUpActions from '../../actions/signUpActions.jsx';

class SignUpPage extends Component{
  constructor(props){
    super(props);
    this.formInput = this.formInput.bind(this);
  }//end of constructor function.
  formInput(userInput){
    console.log('userInfo is', userInput);
    this.props.createUser(userInput);
  }//end of forminput method definition
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
                <li><Link to="/loginPage"><span className="glyphicon glyphicon-log-out"></span> Login</Link></li>
                <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <SignUpForm submitFormInput={this.formInput}/>
        { //Redirect user to home page after creating a user
        (this.props.signUpResponce.length === 1) ? 
        <SignUpResponce responce={this.props.signUpResponce}/> : <div></div>
        }
      </div>
    );//end of return statement
  }//end of render method
}//end of stateless functional component

const mapStateToProps = (state, ownProps)=>{
  return {
    signUpResponce: state.signUpReducer
  };
}; //end of mapStateToProps

const mapDispatchToProps = (dispatch)=>{
  return {
    createUser: (userInfo)=> dispatch(signUpActions.createUser(userInfo))
  };
}; //end of mapDispatchToProps

SignUpPage.propTypes = {
  signUpResponce: PropTypes.array,
  createUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);