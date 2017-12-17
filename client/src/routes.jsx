
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app.jsx';
import SignUpPage from './components/signUpComponents/signUpPage.jsx';
import CreateGroups from './components/createGroups.jsx';
import MessageBoard from './components/messageBoard.jsx';
import SendMessage from './components/sendMessage.jsx';
import LoginPage from './components/loginComponents/loginPage.jsx';
import HomePage from './components/home.jsx';


const Routes = ()=>{
  return(
  <Switch>
    <SignUpPage path='/signUpPage'  />
    <LoginPage  path='/loginPage'  />
    <App path='/'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/createGroups' component={CreateGroups} />
        <Route path='/sendMessage' component={SendMessage} />
        <Route path='/messageBoard' component={MessageBoard} />
        <Route path='/loginPage' component={LoginPage} />
      </Switch>
    </App>
  </Switch>
  );//end of return statement
};//end of stateless functional component 

export default Routes;