
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './homePage.jsx';
import * as homeActionTypes from '../../actions/homeActions.jsx';
import * as groupActionTypes from '../../actions/groupActions.jsx';

class Home extends Component {
  constructor(props){
    super(props);
  }//end of constructor method
  componentDidMount(){
    this.props.getUsers();
    this.props.getGroups();
    console.log('I am working ===>');
  }
  render(){
    return(
      <div>
        {console.log('In home jsx this.props.users is ===> ',this.props.users)}
        {console.log('In home jsx this.props.groups is ===> ',this.props.groups)}
        <HomePage userList={this.props.users} groupList={this.props.groups}/>
      </div>
    );
  }
}//end of class efinition

const mapStateToProps = (state)=>{
  return{
    users: state.homeReducer,
    groups: state.groupReducer
  };
};

const mapDispatchToProps = (dispatch)=>{
  return{
    getUsers: ()=>{ dispatch(homeActionTypes.getRegisteredUsers()); },
    getGroups: ()=>{ dispatch(groupActionTypes.getCreatedGroups()); }
  };
};

Home.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
  groups: PropTypes.array,
  getGroups: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home); 