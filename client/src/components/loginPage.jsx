
import React from 'react';

const LoginPage = ()=>{
  return(
    <div>
      <nav>
      <div class="nav-wrapper">
        <a href="#" class="left brand-logo">PostIt</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#"><i class="material-icons right">account_circle</i>Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="row container topspace">
      <div class="col s12 l6 m6">
        <div class="row center-align">
          <div class="s12 m10 l11"><h1>PostIt</h1></div>
        </div>
        <div class="row hide-on-small-only">
          <div class="col s6">
            <i class="material-icons medium white-text">person</i>
            <h5 class="black-text">1.Create an Account</h5>
          </div>
          <div class="col s6">
              <i class="material-icons medium white-text">group</i>
              <h5 class="black-text">2.Create Group</h5>
            </div>
        </div>
        <div class="row hide-on-small-only">
          <div class="col s6">
             <i class="material-icons medium white-text">person_add</i>
            <h5 class="black-text">3. Add Users to group</h5>
          </div>
          <div class="col s6">
            <i class="material-icons medium white-text">send</i>
            <h5 class="black-text">4. Send messages to group</h5>
          </div>
        </div>
      </div>
      <div class="col s12 l6 m6">
        <form class="white col s12 z-depth-5">
          <h6 class="center-align link">Already a memeber ? <a href="loginPage.html">Login</a></h6>
          <div class="divider"></div>
          <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix medium">account_box</i>
            <label for="username">Username</label>
            <input type="text" id="username" class="validate" />
          </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mail</i>
            <label for="email">Email</label>
            <input type="email" id="email" class="validate" />
          </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <label for="password">Password</label>
            <input type="password" id="password" class="validate" />
          </div>
          </div>
          <div class="center-align row">
            <button type="submit" class="btn waves-effect waves-light green lighten-2" 
            name='action'>Create Account</button>
          </div>
        </form>
      </div>
    </div>
    <footer class="page-footer ">
      <div class=" footer-copyright">
        <div class="container grey-text text-lighten-3 center-align">
            Designed by Ademola Hussain  © Andela, 2017 
        </div>
      </div>
    </footer>
    </div>
  );
};//end of stateless functional component creategroup

export default LoginPage;