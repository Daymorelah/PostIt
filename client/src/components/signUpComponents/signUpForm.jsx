
import React from 'react';
import PropTypes from 'prop-types';

const signUpForm = (props)=>{
  let formInput, userName, passWord, email = null;
  return(
    <div>
      <div className='container-fluid'>
        <h1 className="text-center"> Welcome to the PostIt App</h1>
        <h3 className="text-center"> Please sign-up or login below</h3>
      </div>

      <div className='container-fliud'>
        <form onSubmit={(event)=>{
          event.preventDefault();
          formInput={
            username:userName.value,
            password:passWord.value,
            email: email.value
          }; props.submitFormInput(formInput);
          event.target.reset();
        }} className='form-horizontal'>

          <div className='form-group'>
            <label htmlFor='username' className="control-label col-sm-4">Username </label>
            <div className="col-sm-6 ">
              <input type='text' id='username'  className='form-control' placeholder=" Enter username" 
              ref={ (node) => userName = node }/>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='password' className="control-label col-sm-4 ">Password </label>
            <div className="col-sm-6">
              <input type='password' id='pwd' className='form-control' placeholder="Enter password" 
              ref={ (node) => passWord = node }/>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='email' className="control-label col-sm-4 ">Email </label>
            <div className="col-sm-6">
              <input type='email' id='email' className='form-control' placeholder="Enter email" 
              ref={ (node) => email = node }/>
            </div>
          </div>

          <div className="form-group">
            <div className=" col-sm-offset-4 col-sm-4">
              <button className='btn btn-block' type='submit'>Sign Up</button>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-4">
              <button className='btn btn-block' type='button' id='btn-loginPage'>or Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );//end of return function
};//end of signUpForm stateless functional defintion

signUpForm.propTypes = {
  submitFormInput: PropTypes.func
};

export default signUpForm;