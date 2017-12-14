
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import SignUpForm from './signUpForm.jsx';
import SignUpResponce from './signUpResponce.jsx';
import * as signUpActions from '../../actions/signUpActions.jsx';

class SignUpPage extends Component{
  constructor(props){
    super(props);
    this.formInput = this.formInput.bind(this);
  }//end of constructor function.
  formInput(userInput){
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
              <Link to='/' className="navbar-brand"> PostIt</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/loginPage"><span className="glyphicon glyphicon-log-out"></span> Login</Link></li>
                <li><Link to="/signUpPage"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <SignUpForm submitFormInput={this.formInput}/>
        <SignUpResponce responce={this.props.responce}/>
      </div>
    );//end of return statement
  }//end of render method
}//end of stateless functional component

const mapStateToProps = (state, ownProps)=>{
  return {
    responce: state.signUpReducer
  };
};
const mapDispatchtoProps = (dispatch)=>{
  return {
    createUser: (userInfo)=> dispatch(signUpActions.createUser(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(SignUpPage);