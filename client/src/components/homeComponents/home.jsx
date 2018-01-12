
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './homePage.jsx';
import * as ActionTypes from '../../actions/homeActions.jsx';

class Home extends Component {
  constructor(props){
    super(props);
  }//end of constructor method
  componentDidMount(){
    this.props.getUsers();
    console.log('I am working ===>');
  }
  render(){
    return(
      <div>
        {console.log('In home jsx this.props.users is ===> ',this.props.users)}
        <HomePage userList={this.props.users} groupList={this.props.groups}/>
      </div>
    );
  }
}//end of class efinition

const mapStateToProps = (state)=>{
  return{
    users: state.homeReducer
  };
};

const mapDispatchToProps = (dispatch)=>{
  return{
    getUsers: ()=>{ dispatch(ActionTypes.getRegisteredUsers()); }
  };
};

Home.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home); 