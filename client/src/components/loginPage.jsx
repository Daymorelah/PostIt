
import React from 'react';

const LoginPage = ()=>{
  return(
    <div>
      <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">PostIt</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#"><i className="material-icons right">account_circle</i>Logout</a></li>
        </ul>
      </div>
    </nav>
    <div className="row container topspace">
      <div className="col s12 l6 m6">
        <div className="row center-align">
          <div className="s12 m10 l11"><h1>PostIt</h1></div>
        </div>
        <div className="row hide-on-small-only">
          <div className="col s6">
            <i className="material-icons medium white-text">person</i>
            <h5 className="black-text">1.Create an Account</h5>
          </div>
          <div className="col s6">
              <i className="material-icons medium white-text">group</i>
              <h5 className="black-text">2.Create Group</h5>
            </div>
        </div>
        <div className="row hide-on-small-only">
          <div className="col s6">
             <i className="material-icons medium white-text">person_add</i>
            <h5 className="black-text">3. Add Users to group</h5>
          </div>
          <div className="col s6">
            <i className="material-icons medium white-text">send</i>
            <h5 className="black-text">4. Send messages to group</h5>
          </div>
        </div>
      </div>
      <div className="col s12 l6 m6">
        <form className="white col s12 z-depth-5">
          <h6 className="center-align link">Already a memeber ? <a href="loginPage.html">Login</a></h6>
          <div className="divider"></div>
          <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix medium">account_box</i>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="validate" />
          </div>
          </div>
          <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">mail</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="validate" />
          </div>
          </div>
          <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">lock</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"className="validate" />
          </div>
          </div>
          <div className="center-align row">
            <button type="submit" className="btn waves-effect waves-light green lighten-2" 
            name='action'>Create Account</button>
          </div>
        </form>
      </div>
    </div>
    <footer className="page-footer ">
      <div className=" footer-copyright">
        <div className="container grey-text text-lighten-3 center-align">
            Designed by Ademola Hussain  © Andela, 2017 
        </div>
      </div>
    </footer>
    </div>
  );
};//end of stateless functional component creategroup

export default LoginPage;