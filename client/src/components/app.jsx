
import React from 'react';
/*
//import render from 'react-dom';
import {Link} from 'react-router-dom';
*/

const App = (props) =>{
  return(
    <div>
      <div className="container-fliud">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
              <a href='#' className="navbar-brand"> PostIt</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><a href="#"> Message Board</a></li>
                <li className="active"><a href="#"> Create Group</a></li>
                <li><a href="#"> Users</a></li>
                <li><a href="#"> Send message</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
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

export default App;