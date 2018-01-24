
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = (props) =>{
  return(
    <div>
      <div className="container-fliud">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
              <Link to='/home' className="navbar-brand"> PostIt</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><Link to="/messageBoard"> Message Board</Link></li>
                <li><Link to="/createGroups"> Create Group</Link></li>
                <li><Link to="/sendMessage"> Send message</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/loginPage"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );//end of return statement
}; //end of function definiton

App.propTypes = {
  children: PropTypes.any
};

export default App;