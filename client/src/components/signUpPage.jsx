
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = ()=>{
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
              <li><Link to="/signUpPage"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container-fluid'>
        <h1 className="text-center"> Welcome to the PostIt App</h1>
        <h3 className="text-center"> Please sign-up or login below</h3>
      </div>

      <div className='container-fliud'>
        <form action='/api/user/signup' method='post' className="form-horizontal">
          <fieldset>

          <div className='form-group form-group-lg'>
            <label htmlFor='username' className="control-label col-sm-4 col-sm-4 col-lg-2">Username </label>
            <div className="col-sm-8 col-lg-8">
              <input type='text' id='username'  className='form-control' placeholder=" Enter username" />
            </div>
          </div>

          <div className='form-group form-group-lg'>
            <label htmlFor='password' className="control-label col-sm-4 col-lg-2">Password </label>
            <div className="col-sm-8 col-lg-8">
              <input type='password' id='pwd' className='form-control' placeholder="Enter password" />
            </div>
          </div>

          <div className='form-group form-group-lg'>
            <label htmlFor='email' className="control-label col-sm-4 col-sm-4 col-lg-2">Email </label>
            <div className="col-sm-8 col-lg-8">
              <input type='email' id='email' className='form-control' placeholder="Enter email" />
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
          </fieldset>
        </form>
      </div>
    </div>
  );//end of return statement
};//end of stateless functional component

export default SignUpPage;