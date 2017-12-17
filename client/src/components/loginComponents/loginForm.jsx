
import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props)=>{
  let formInput, userName, password = null;
  return(
  <div className="container">
    <div id='loginForm'>
      <form onSubmit={ (event)=>{
        event.preventDefault();
        formInput = {
          username: userName.value,
          password: password.value,
        };
        props.SubmitFormInput(formInput);
        event.target.reset();
      }}>
        <div className="input-group input-group-lg col-md-6 col-md-offset-3">
          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
          <input type="text" className="form-control" placeholder="Username" 
          ref={ (node)=> userName = node } />
        </div>
        <br/>
        <div className="input-group input-group-lg col-md-6 col-md-offset-3">
          <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
          <input type="password" className="form-control"  placeholder="Password" 
          ref={ (node)=> password = node } />
        </div>
        <br/>
        <div className='form-group col-md-6 col-md-offset-3'>
          <button type='submit' className='btn btn-lg btn-primary btn-block' >Login</button>
        </div>
      </form>
    </div>
  </div>
  );//end of return statement
};//end of loging form stateless componenet definition

LoginForm.propTypes = {
  SubmitFormInput: PropTypes.func
}; //end of proptype validation

export default LoginForm;